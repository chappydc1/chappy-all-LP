# Code Review Style Guide

This file contains style and formatting rules that the review subagent must check and fix. These are mechanical issues that should always be caught during code review.

## No consecutive empty lines

Use at most one empty line between declarations, JSX elements, import groups, or logical blocks. Two or more empty lines in a row add visual noise without adding structure.

## Multi-line expressions — operators at the start of continuation lines

When splitting an expression across multiple lines, place operators (`&&`, `||`, `+`, `?`, `:`, etc.) at the **beginning** of continuation lines, not at the end of the previous line. This makes it immediately obvious from the left edge whether a line is a continuation or new code.

```ts
// BAD — trailing && makes next line look like independent code:
if (isAuthenticated &&
  hasPermission &&
  isActive) {
  doSomething()

// GOOD — leading && clearly marks continuation:
if (isAuthenticated
  && hasPermission
  && isActive) {
  doSomething()

// BAD — trailing ? obscures ternary structure:
const label = isLoading ?
  'Loading...' :
  'Submit'

// GOOD — leading ? and : signal continuation:
const label = isLoading
  ? 'Loading...'
  : 'Submit'
```

## Multi-line calls — one argument per line

When a function call or JSX element doesn't fit on one line, put each argument or prop on its own line. Don't group "logical pairs" on the same line — it creates inconsistent line lengths and makes diffs noisier.

```tsx
// BAD — pairs of props sharing lines:
<Button
  variant="primary" onClick={handleSubmit}
  disabled={isLoading} className="mt-4"
>

// GOOD — one prop per line:
<Button
  variant="primary"
  onClick={handleSubmit}
  disabled={isLoading}
  className="mt-4"
>

// Single-line is fine when everything fits:
<Button onClick={handleClose}>Cancel</Button>
```

## Always initialize variables of basic types

Never leave variables of basic types (`number`, `boolean`, `string`, or references) uninitialized. For state, always pass an explicit initial value. For local variables, always assign at declaration. This applies especially to component state and class fields where uninitialized values are a persistent source of bugs.

```ts
// BAD:
const [count, setCount] = useState<number>()
const [open, setOpen] = useState<boolean>()
let total: number
let label: string

// GOOD:
const [count, setCount] = useState(0)
const [open, setOpen] = useState(false)
let total = 0
let label = ''
```

## Prefer type narrowing over type assertions

Don't check a type and then cast — narrow directly using `instanceof`, `typeof`, or a type guard, and work with the narrowed value. Using `as` after an `if` check is redundant and breaks if the check changes.

```ts
// BAD — redundant check then cast:
if (error instanceof ApiError) {
  const apiError = error as ApiError
  showToast(apiError.message)
}

// GOOD — narrowing gives you the type directly:
if (error instanceof ApiError) {
  showToast(error.message)
}

// BAD — check then cast with as:
if (typeof value === 'string') {
  processText(value as string)
}

// GOOD — value is already narrowed:
if (typeof value === 'string') {
  processText(value)
}
```

When you need to assert a type, prefer a type guard function that validates the shape at runtime rather than a bare `as` cast that silently bypasses checking:

```ts
// BAD — silent cast, no runtime safety:
const user = data as User

// GOOD — validate at the boundary:
function isUser(data: unknown): data is User {
  return typeof data === 'object' && data !== null && 'id' in data
}
if (isUser(data)) {
  // data is User here
}
```

## Use optional chaining — avoid manual null ladders

When accessing a potentially nullish value's properties or methods, use optional chaining (`?.`) and nullish coalescing (`??`) instead of nested null checks and ternaries. This removes boilerplate and makes the intent clear.

```ts
// BAD — manual null ladder:
const name = user && user.profile && user.profile.displayName
  ? user.profile.displayName
  : 'Anonymous'

// GOOD:
const name = user?.profile?.displayName ?? 'Anonymous'

// BAD — redundant existence check before method call:
if (ref && ref.current && ref.current.scrollTo) {
  ref.current.scrollTo(0, 0)
}

// GOOD:
ref.current?.scrollTo(0, 0)
```

## Sort imports — grouped and alphabetical

Sort `import` directives alphabetically within each group, with the groups separated by a single blank line. Group order:

1. External packages (`react`, `next/*`, third-party)
2. Internal absolute imports (path aliases like `@/components`, `@/lib`)
3. Relative imports (`./`, `../`)
4. Style imports (`*.css`, `*.module.css`) always last

Within each group, sort alphabetically by the import path. Remove unused imports.

```ts
// BAD — arbitrary order, styles mixed in:
import { useState } from 'react'
import styles from './Button.module.css'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './Button'

// GOOD — grouped and alphabetical, styles last:
import Link from 'next/link'
import { useState } from 'react'

import { cn } from '@/lib/utils'

import { Button } from './Button'

import styles from './Button.module.css'
```

## No dynamic Tailwind class fragments

Tailwind purges unused classes at build time using static string matching. Never construct class names with string interpolation or concatenation — Tailwind cannot detect them and they will be missing in production.

```tsx
// BAD — Tailwind cannot detect these at build time:
<div className={`bg-${color}-500`} />
<div className={`text-${size} font-${weight}`} />

// GOOD — use a lookup map of full class names:
const colorMap = {
  red: 'bg-red-500',
  blue: 'bg-blue-500',
  green: 'bg-green-500',
} as const
<div className={colorMap[color]} />

// GOOD — or use clsx / cn with explicit full names:
<div className={cn(isActive && 'bg-blue-500', isError && 'bg-red-500')} />
```

## Use cn() / clsx() for conditional class names

When applying classes conditionally, always use `cn()` (or `clsx()`) — never string concatenation or ternary chains. Concatenation with spaces is fragile and hard to read; nested ternaries compound quickly.

```tsx
// BAD — fragile concatenation:
<div className={'btn ' + (isActive ? 'btn-active' : '') + ' ' + (isDisabled ? 'btn-disabled' : '')} />

// BAD — nested ternaries:
<div className={`btn ${isActive ? 'btn-active' : ''} ${isDisabled ? 'btn-disabled' : ''}`} />

// GOOD — cn() with explicit intent:
<div className={cn('btn', isActive && 'btn-active', isDisabled && 'btn-disabled')} />
```

## Use Next.js built-ins for images and links

Always prefer `next/image` and `next/link` over raw `<img>` and `<a>` tags. `next/image` provides automatic optimization, lazy loading, and correct sizing. `next/link` enables client-side navigation and prefetching. Raw elements bypass these entirely.

```tsx
// BAD:
<img src="/hero.jpg" />
<a href="/about">About</a>

// GOOD:
import Image from 'next/image'
import Link from 'next/link'

<Image src="/hero.jpg" width={800} height={400} alt="Hero banner" />
<Link href="/about">About</Link>
```

Every `<Image>` must have a non-empty `alt` attribute. Icon-only images use `alt=""` to hide from screen readers; decorative images use `role="presentation"` instead.

## Interactive elements must be keyboard accessible

Any element with an `onClick` handler that is not natively interactive (`<button>`, `<a>`, `<input>`, `<select>`, `<textarea>`) must carry `role`, `tabIndex={0}`, and a keyboard handler for `Enter` and `Space`. Native elements handle this automatically — prefer them.

```tsx
// BAD — div click is invisible to keyboard and screen readers:
<div onClick={handleSelect}>Choose this option</div>

// GOOD — use a button:
<button type="button" onClick={handleSelect}>Choose this option</button>

// GOOD — if a div is truly necessary:
<div
  role="button"
  tabIndex={0}
  onClick={handleSelect}
  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelect()}
>
  Choose this option
</div>
```

Icon-only buttons must have an `aria-label` so screen readers announce their purpose:

```tsx
// BAD:
<button onClick={handleClose}><XIcon /></button>

// GOOD:
<button type="button" aria-label="Close dialog" onClick={handleClose}>
  <XIcon aria-hidden />
</button>
```

## Extract substantial logic from inline callbacks

When an event handler, `useEffect` body, or callback grows beyond a few lines of self-contained logic, extract it into a named function. Inline logic that can be easily expressed as a standalone function should be. Leave inline only what is genuinely glue — dispatching an action, passing a value through, short transforms.

```tsx
// BAD — substantial logic buried inline:
<form onSubmit={async (e) => {
  e.preventDefault()
  setLoading(true)
  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    if (!res.ok) throw new Error(data.message)
    router.push('/success')
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    setLoading(false)
  }
}}>

// GOOD — logic extracted, inline is just glue:
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setLoading(true)
  try {
    await submitForm(formData)
    router.push('/success')
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Unknown error')
  } finally {
    setLoading(false)
  }
}

<form onSubmit={handleSubmit}>
```

## Group related state into a single object

Every `useState` is a separate re-render trigger and a separate declaration. When a component needs multiple pieces of closely related mutable state, group them into a single `useState` object. This reduces the number of re-renders, keeps related values co-located, and makes reset logic trivial.

```ts
// BAD — four separate state variables:
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState<string | null>(null)
const [data, setData] = useState<Result | null>(null)
const [retryCount, setRetryCount] = useState(0)

// GOOD — one state object:
interface FetchState {
  isLoading: boolean
  error: string | null
  data: Result | null
  retryCount: number
}
const [state, setState] = useState<FetchState>({
  isLoading: false,
  error: null,
  data: null,
  retryCount: 0,
})
// Reset is a single line:
setState({ isLoading: false, error: null, data: null, retryCount: 0 })
```

The exception is state that changes independently on different user actions — keep those separate to avoid unnecessary re-renders from unrelated updates.

## Use useEffect cleanup for subscriptions and timers

When a `useEffect` sets up a subscription, event listener, interval, or timeout, always return a cleanup function. Missing cleanup causes memory leaks and stale updates on unmounted components. For async data fetching inside effects, use an `AbortController` so in-flight requests are cancelled on unmount.

```ts
// BAD — listener never removed, leaks on unmount:
useEffect(() => {
  window.addEventListener('resize', handleResize)
}, [])

// GOOD — cleanup removes the listener:
useEffect(() => {
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])

// BAD — fetch continues after unmount, may update stale state:
useEffect(() => {
  fetch('/api/data').then(r => r.json()).then(setData)
}, [id])

// GOOD — abort on unmount or dependency change:
useEffect(() => {
  const controller = new AbortController()
  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json())
    .then(setData)
    .catch(err => { if (err.name !== 'AbortError') setError(err) })
  return () => controller.abort()
}, [id])
```

## Merge consecutive branches with identical bodies

When two or more consecutive `if` / `else if` branches execute the same code, combine their conditions into a single branch.

```ts
// BAD — duplicated body:
if (!user) {
  redirect('/login')
  return
}
if (!user.isVerified) {
  redirect('/login')
  return
}

// GOOD — combined:
if (!user || !user.isVerified) {
  redirect('/login')
  return
}
```

## Data-driven matching over chained conditions

When comparing a value against multiple known constants, store them in an array or Set and check membership instead of chaining `||` conditions. Easier to extend, less repetition, and reads as data rather than logic.

```ts
// BAD — repetitive chain, hard to extend:
if (
  status === 'pending'
  || status === 'processing'
  || status === 'queued'
  || status === 'retrying'
) {
  showSpinner()
}

// GOOD — data-driven, easy to extend:
const loadingStatuses = new Set(['pending', 'processing', 'queued', 'retrying'])
if (loadingStatuses.has(status)) {
  showSpinner()
}
```

## Review output contract for task-think review phase

When producing review findings:
- List concrete file paths and line numbers
- Classify issue type (correctness, safety, style, duplication, structure)
- Provide the exact requested fix — specific enough that the fix agent can implement it without guessing
- Avoid vague suggestions

If a rule conflicts with existing enforced tooling (e.g. Prettier config, ESLint rules), follow that tooling and note the conflict in the review output.
