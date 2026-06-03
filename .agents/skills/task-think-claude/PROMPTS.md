# Phase Prompts

Templates for Claude subagent messages. Replace `<TASK>`, `<PROJECT>`, `<LETTER>`, `<PREV_LETTER>`, `<REPO_ROOT>`, `<OWNED_WRITE_SET>`, `<N>`, `<R>` before sending.

## Global rule: AGENTS.md → digested-agents.md

Every phase prompt says **"Read AGENTS.md"**. The actual instruction is:

> Read `.ai/<PROJECT>/<LETTER>/digested-agents.md` first. Fall back to `<REPO_ROOT>/AGENTS.md` only if a needed detail is missing.

The digest is written once in Phase 0.5b. Reading it saves ~50K tokens across ~10 reads per task.

---

## AUTONOMOUS OPERATING MODE (mandatory for all subagents)

You are operating in full autonomy. This means:
- **Never stop to ask for confirmation** — make the best decision, log it, proceed.
- **Never say "should I…"** — if it's the right next step, do it.
- **Fix blockers yourself** before reporting them unless they require human credentials or destructive actions.
- **Proceed on ambiguity** — make a reasonable inference, note it in DEVIATIONS, move forward.

---

## Per-Phase Subagent Defaults

| Phase | subagent_type | model |
|-------|---------------|-------|
| 1 (new) | `Explore` for mapping → `general-purpose` for synthesis | `claude-haiku-4-5-20251001` |
| 1F (follow-up) | `general-purpose` | `claude-haiku-4-5-20251001` |
| 2 / 3 / 2+3 merged | `general-purpose` | `claude-opus-4-7` |
| 4 (implementation) | `general-purpose` | `claude-opus-4-7` |
| 7a (review) | `general-purpose` | `claude-haiku-4-5-20251001` |
| 7b (review fix) | `general-purpose` | `claude-opus-4-7` |

Phases 0, 5, 6, 8 run in the main session — no subagent.

---

## Standard Progress Contract

Append verbatim to every delegated phase prompt:

```text
PROGRESS HEARTBEAT REQUIREMENT:
Before starting deep work, write .ai/<PROJECT>/<LETTER>/logs/<phase-name>.progress.md with:
  Heartbeat: 1
  Step: <what you are about to do>
  Next: <first checkpoint>

Update at every natural milestone (not every action) — increment Heartbeat and note:
  - Current step
  - Files being read or modified
  - Key findings or decisions made
  - Next checkpoint or blocker

Keep under 20 lines. The orchestrator reads mtime and the counter to confirm you are alive.
```

---

## Standard Compact Reply Block

Append verbatim to every delegated phase prompt:

```text
REPLY FORMAT (strict):
Write all required artifacts to disk FIRST, then reply in ≤10 lines:

STATUS: <DONE|BLOCKED|NEEDS_CHANGES|APPROVED>
ARTIFACTS: <comma-separated paths written>
TOUCHED: <repo source paths changed, or "none">
DEVIATIONS: <any departure from the plan, or "none">
BLOCKER: <none, or one precise line describing what is missing>
```

---

## Artifact Completion Checks (orchestrator verifies after each phase)

| Phase | Check |
|-------|-------|
| Phase 1 | `about.md` exists, non-empty, real paths; `context.md` has all required sections |
| Phase 2 | `plan.md` has `## Status`, `Phases: <N>`, Rollback Plan, no source files in diff |
| Phase 3 | `plan.md` contains `Assessed: yes` |
| Phase 4 | plan.md checkbox `[x]`; `git diff --stat` shows changes; at least one conventional commit |
| Phase 5 | Validation output logged; no unresolved failures; CHANGELOG updated |
| Phase 6 | `screenshots/phase-6-golden-path.png` exists; console errors documented |
| Phase 7a | `review<R>.md` with `Verdict: APPROVED` or `Verdict: NEEDS_CHANGES` |
| Phase 7b | Fixes applied; post-fix validation passed |
| Phase 8 | `logs/phase-8.result.md` with PR URL; plan.md PR checkbox flipped |

---

## Phase 0: Setup (runs in main session)

```bash
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
mkdir -p "$REPO_ROOT/.ai"
EXISTING=$(ls "$REPO_ROOT/.ai" 2>/dev/null | sort)
echo "Existing projects: $EXISTING"

# Dirty-tree: auto-stash, do not pause for confirmation
DIRTY=$(git -C "$REPO_ROOT" status --porcelain | grep -v "^?? \.ai/" || true)
if [ -n "$DIRTY" ]; then
  git -C "$REPO_ROOT" stash push -m "task-think-auto-stash: $(date +%Y%m%d-%H%M%S)"
fi

# Determine PROJECT, LETTER, branch. Route to Quick|Standard|Large. Log and proceed.
mkdir -p "$REPO_ROOT/.ai/$PROJECT/$LETTER/logs"
mkdir -p "$REPO_ROOT/.ai/$PROJECT/$LETTER/screenshots"
ls "$REPO_ROOT/.ai/$PROJECT/$LETTER/logs" || { echo "FATAL: directory creation failed"; exit 1; }
git checkout -b <prefix>/<project>
```

Write `logs/phase-0.result.md`:
```
Phase: 0 | Status: DONE | Project: <P> | Letter: <L> | Mode: <NEW|FOLLOWUP|RESUME>
Branch: <name> | Route: <Quick|Standard|Large> | Reason: <one line>
DevServer: <started at <URL> | skipped> | PostgresProxy: <up|started|skipped>
AutoStash: <msg|none> | StartTime: <HH:MM:SS>
```

---

## Phase 1: Context — New Project (PARALLEL)

**Run as 3 concurrent `Explore` agents + 1 synthesis pass.**

### Step 1A — Parallel mapping (single message, 3 Agent calls)

| Agent | Scope | Output file |
|-------|-------|-------------|
| explore-backend | `backend/` — routers, services, models, schemas, migrations | `logs/phase-1.findings-backend.md` |
| explore-frontend | `frontend/` — pages, components, hooks, API client, types | `logs/phase-1.findings-frontend.md` |
| explore-tests | All test files relevant to task domain | `logs/phase-1.findings-tests.md` |

Use `subagent_type=Explore`, `model=claude-haiku-4-5-20251001` for all three. Spawn in one message.

### Step 1B — Synthesis (single subagent after all 3 findings exist)

Write prompt to `logs/phase-1.prompt.md` first.

### Parallel Explore prompt template

```text
You are an Explore subagent mapping a specific area of a FastAPI + Next.js codebase. Read excerpts only, implement nothing.

TASK: <TASK>
PROJECT: <PROJECT>
LETTER: <LETTER>
REPO ROOT: <REPO_ROOT>
YOUR AREA: <backend | frontend | tests>

YOUR JOB:
1. Search your area for code relevant to the task.
2. For each relevant file: path, line ranges, function/class/type names, one-line relevance.
3. Identify the closest reference implementation in your area.
4. Note obvious risks in your area.

WRITE TO: .ai/<PROJECT>/<LETTER>/logs/phase-1.findings-<AREA>.md

Format:
## Relevant Files
- `<path>` (lines X-Y): <relevance>
## Key Symbols
- `<name>` in `<file:line>`: <what it does>
## Reference Implementation
- Closest analogous feature: <description + paths>
## Area-Specific Risks
- <bullets or "none">

REPLY FORMAT (≤6 lines):
STATUS: DONE
FINDINGS: <path>
FILES_SCANNED: <count>
KEY_REFERENCE: <one-line description>
```

### Phase 1 Synthesis prompt template

```text
You are a senior engineer synthesizing pre-gathered findings. Write documents. Touch zero source files.

TASK: <TASK>
PROJECT: <PROJECT>
LETTER: <LETTER>
REPO ROOT: <REPO_ROOT>

PRE-GATHERED FINDINGS:
- .ai/<PROJECT>/<LETTER>/logs/phase-1.findings-backend.md
- .ai/<PROJECT>/<LETTER>/logs/phase-1.findings-frontend.md
- .ai/<PROJECT>/<LETTER>/logs/phase-1.findings-tests.md

AUTONOMOUS OPERATING MODE: Make decisions, proceed. Do not ask for confirmation.

═══════════════════════════════════════════════════
STEP 0: Validate the approach (2 minutes max)
═══════════════════════════════════════════════════
Is there an existing utility or feature that already does this? Is there a simpler approach?
- grep -rn "<core concept>" backend/ frontend/ --include="*.py" --include="*.ts" -l
Write conclusion in context.md under "Approach Validation". If simpler path exists: note it in DEVIATIONS and proceed with the original task unless it's completely redundant.

═══════════════════════════════════════════════════
STEP 1: Read digested-agents.md
═══════════════════════════════════════════════════
Read `.ai/<PROJECT>/<LETTER>/digested-agents.md`. Fall back to AGENTS.md only if detail is missing.

═══════════════════════════════════════════════════
STEP 2: Read the pre-gathered findings
═══════════════════════════════════════════════════
Read each findings file in full. Trust them — do not re-walk the repo.

═══════════════════════════════════════════════════
STEP 3: Spot-check 3-5 central files
═══════════════════════════════════════════════════
- `ls` or `stat` to confirm path exists
- `grep -n "<symbol>"` to confirm cited symbols are real
If wrong: try a quick grep to fix it yourself. Note any unresolvable issues in DEVIATIONS.

═══════════════════════════════════════════════════
STEP 4: Understand history
═══════════════════════════════════════════════════
For 3-5 most central files you will modify:
  git log --oneline -15 -- <file>
Check open PRs touching same files:
  gh pr list --state open --json number,title,headRefName | head -20
Check recent merges:
  gh pr list --state merged --limit 10 --json number,title,mergedAt
  cat CHANGELOG.md 2>/dev/null | head -60

═══════════════════════════════════════════════════
STEP 5: Trace the full data flow
═══════════════════════════════════════════════════
HTTP request → router → service → DB → model → response schema → JSON
Frontend page → hook → API client → fetch → backend → state → render
Write every file and function with exact line numbers.

═══════════════════════════════════════════════════
STEP 6: Find the reference implementation
═══════════════════════════════════════════════════
Find the most similar existing feature. Read it fully. Note the exact pattern for error handling, auth, API calls.

═══════════════════════════════════════════════════
STEP 7: Risks, dependencies, deployment safety
═══════════════════════════════════════════════════
Answer explicitly (write "N/A" if not applicable):
- SQLAlchemy model touched? Which model, which fields?
- DATA SCALE: Row count in affected tables (run SELECT COUNT(*) if DB is available)
  - < 10k: any approach safe
  - 10k-1M: avoid full scans, indexes take seconds
  - > 1M: migration must be staged, CREATE INDEX CONCURRENTLY
  - > 10M: treat as major operational event
- Alembic migration needed?
- DEPLOYMENT SAFETY: Can migration run while old app serves traffic?
  - Nullable column / default → safe (online)
  - NOT NULL without default → unsafe (maintenance window)
  - Dropping a column → unsafe (remove from code first)
  - Index on large table → CONCURRENTLY required
  - Renaming column → always unsafe (add + backfill + remove)
- New endpoint needs auth guard?
- API contract change? What clients depend on it?
- Shared schema/type that could break existing consumers?
- External service integration?
- Environment variables required?

═══════════════════════════════════════════════════
STEP 8: Test patterns
═══════════════════════════════════════════════════
Find test files most similar to what this task needs:
- Exact pytest fixtures for auth, DB session, test client
- How mock objects / test data are set up
- Exact run commands

═══════════════════════════════════════════════════
WRITE: .ai/<PROJECT>/about.md
═══════════════════════════════════════════════════
Write as if project already exists fully implemented.

Required sections:
## Project — what it does, what problem it solves, who uses it
## Architecture — backend modules + frontend modules + how they connect
## Key Design Decisions — data model rationale, API shape, tradeoffs
## Codebase Touchpoints — file paths, function names, line ranges

No "TODO", "pending", "will be", "not yet". Present tense only.

═══════════════════════════════════════════════════
WRITE: .ai/<PROJECT>/<LETTER>/context.md
═══════════════════════════════════════════════════
A cold agent implements from this file alone.

Required sections:
## Task Description — full task, no ambiguity
## Stack — backend version, frontend version, validation commands
## Relevant Files — every relevant file with line ranges and relevance
## Data Flow — end-to-end trace with file:function:line
## Key Types and Interfaces — every relevant SQLAlchemy model, Pydantic schema, TypeScript interface
## API Contract — every endpoint this task touches or creates (method, path, auth, request, response, errors, breaking change)
## Auth and Permission Pattern — how auth is enforced, which dependency is injected
## Reference Implementation — closest analogous feature, exact paths, what to copy vs adapt
## Alembic Migration Notes — if needed: model, fields, safety, commands, backfill
## Deployment Safety — risk level, row counts, what could go wrong
## Production Observability — exact log queries/grep commands the on-call engineer would run
## Success Metrics — expected behavior changes, error rate baseline, latency expectation
## Open PRs That Touch These Files — from gh pr list or "none"
## Test Patterns — exact pytest fixtures and commands
## Validation Commands — targeted backend + frontend + broad
## Risks — anything that could go wrong, existing tests that might fail

Do not implement any code.
```

---

## Phase 1F: Context — Follow-up Task

**Spawn as subagent. Write full prompt to `logs/phase-1.prompt.md` first.**

```text
You are a senior engineer picking up a follow-up task on an existing project.

NEW TASK: <TASK>
PROJECT: <PROJECT>
LETTER: <LETTER>
PREVIOUS LETTER: <PREV_LETTER>
REPO ROOT: <REPO_ROOT>

AUTONOMOUS OPERATING MODE: Make decisions, proceed. Do not ask for confirmation.

YOUR ONLY JOB: Read existing state, gather delta context, produce fresh documents. Touch zero source files.

STEP 1: Read ground rules and prior work
1. Read digested-agents.md
2. Read .ai/<PROJECT>/about.md
3. Read .ai/<PROJECT>/<PREV_LETTER>/context.md
4. Read .ai/<PROJECT>/<PREV_LETTER>/plan.md
5. git log --oneline -20
6. Read actual source files from prior context to verify current state
7. gh pr list --state open --json number,title,headRefName

STEP 1.5: DRIFT CHECK
Find when prior task's PR was merged (from phase-8.result.md). Then:
  PRIOR_FILES=$(grep -oE '`[^`]+\.(py|ts|tsx|sql)`' .ai/<PROJECT>/<PREV_LETTER>/context.md | tr -d '`' | sort -u)
  git log --oneline --since="<merge date>" -- $PRIOR_FILES
For each commit: read diff, note impact in context.md under "Drift Since Prior Task".

STEP 2: Gap analysis
- What is already implemented that this task builds on?
- What new files/functions/types does this task introduce?
- What existing code does this task modify?
- What regressions could this task introduce?
- Does this task change any API contract from the previous task?

WRITE: .ai/<PROJECT>/about.md (FULL REWRITE — same sections as Phase 1)
WRITE: .ai/<PROJECT>/<LETTER>/context.md (same sections as Phase 1, plus:)
  ## Prior Work Summary — what was already implemented
  ## Delta — what specifically this task adds/changes
  ## Drift Since Prior Task — commits since prior task that affect these files
  ## Regression Risks — what previously working features could break

Do not implement any code.
```

---

## Phase 2+3 Merged: Plan + Self-Assessment (Standard Path)

**Spawn as subagent. Write full prompt to `logs/phase-23.prompt.md` first.**

```text
You are a senior engineer writing an implementation plan and immediately stress-testing it.

PROJECT: <PROJECT>
LETTER: <LETTER>
REPO ROOT: <REPO_ROOT>

AUTONOMOUS OPERATING MODE: Make decisions, proceed. Do not ask for confirmation.

STEP 1: Read everything before writing a single word
1. digested-agents.md (fall back to AGENTS.md only if detail missing)
2. .ai/<PROJECT>/<LETTER>/context.md
3. Every source file listed under "Relevant Files" in context.md

STEP 2: Write .ai/<PROJECT>/<LETTER>/plan.md

## Task — one-sentence summary
## Approach — 2-4 sentences: strategy, key tradeoffs, why this approach
## Risks and Mitigations — for each risk from context.md
## Breaking Change Analysis — API contract changes, clients affected, migration path
## Deployment Safety — risk level, can deploy without downtime, 3-phase deploy needed, concurrent index, staged rollout
## External Service Resilience — timeout value, retry strategy, fallback, circuit breaker (or N/A)
## Rate Limiting — new endpoints need it? existing patterns to follow?
## CHANGELOG — entry to add: `## [Unreleased] — <description>` under Added|Changed|Fixed|Removed
## Rollback Plan — step-by-step rollback; DB rollback command; feature flag if applicable
## Commit Strategy — N commits planned, each with conventional message
## Files to Modify — path + what changes and why
## Files to Create — path + what it contains and why
## Implementation Phases
  - Number every step. Exact file path, exact function/class name, exactly what to change.
  - Sequence: DB model → migration → service → router → schemas → API client → types → hook → component → page → tests
  - Mark `[PARALLEL-SAFE: can run concurrently with Phase <N>]` for phases with fully disjoint write sets.
## Tests to Write or Update — file, test name, what it asserts, fixtures needed
## Validation Plan — targeted backend + frontend commands, expected output
## Status
  Phases: <N>
  Assessed: no
  - [ ] Phase 1: <name>
  ...
  - [ ] Validation
  - [ ] Browser test
  - [ ] Code review
  - [ ] PR

STEP 3: Self-assessment — stress-test the plan

CORRECTNESS (verify against actual files):
- [ ] Every file path exists (ls or find)
- [ ] Every function name is real (grep)
- [ ] Every type/class/field name is real (grep)
- [ ] Pydantic v2 (model_validate, model_dump, @field_validator, ConfigDict)
- [ ] SQLAlchemy patterns match existing models

COMPLETENESS:
- [ ] Every new HTTP endpoint has an auth guard
- [ ] Every new page/route has frontend auth
- [ ] Every new UI component has loading + error + empty state
- [ ] Model changes → Alembic migration step in plan
- [ ] Data backfill step if rows already exist
- [ ] Every new behavior has a test
- [ ] Deployment safety matches migration type from context.md
- [ ] Staged rollout decision is explicit
- [ ] External service calls have timeout + retry + fallback (or N/A)
- [ ] Rate limiting decision explicit for every new endpoint
- [ ] CHANGELOG entry planned
- [ ] Rollback plan is reversible
- [ ] Commit strategy produces clean history (no "fix", "WIP", "temp")

ARCHITECTURE:
- [ ] No business logic in route handlers
- [ ] No DB queries in frontend components
- [ ] No bare `any` types in TypeScript
- [ ] No duplication of existing utilities
- [ ] No circular imports

PHASE SIZING:
- [ ] Each phase ≤ 10 substantive changes (split if larger)
- [ ] No trivially small phase that could merge with adjacent
- [ ] Backend before frontend
- [ ] PARALLEL-SAFE labels are correct

After fixing all issues: set `Assessed: yes` in Status.

Do not implement any code.
```

---

## Phase 2: Plan — Large Path Only

**Spawn as subagent. Write full prompt to `logs/phase-2.prompt.md` first.**

```text
You are a senior engineer writing a detailed implementation plan.

PROJECT: <PROJECT>
LETTER: <LETTER>
REPO ROOT: <REPO_ROOT>

AUTONOMOUS OPERATING MODE: Decide, proceed. No confirmation needed.

Read:
1. digested-agents.md
2. .ai/<PROJECT>/<LETTER>/context.md
3. Every source file listed under "Relevant Files" in context.md

Write .ai/<PROJECT>/<LETTER>/plan.md with the same structure as Phase 2+3 merged (all sections including Breaking Change Analysis, Deployment Safety, Rollback Plan, Commit Strategy), but WITHOUT the self-assessment step. Add `Assessed: no` to Status.

Do not implement any code.
```

---

## Phase 3: Plan Assessment — Large Path Only

**Spawn as subagent. Write full prompt to `logs/phase-3.prompt.md` first.**

```text
You are an adversarial plan reviewer. Find every flaw. Fix every flaw. Do not ask.

PROJECT: <PROJECT>
LETTER: <LETTER>
REPO ROOT: <REPO_ROOT>

AUTONOMOUS OPERATING MODE: Find issues, fix them in plan.md directly, proceed.

Read:
1. digested-agents.md
2. .ai/<PROJECT>/<LETTER>/context.md
3. .ai/<PROJECT>/<LETTER>/plan.md
4. Every source file referenced in both documents

CORRECTNESS: Every path exists, every function/type/class exists, sequence is correct
COMPLETENESS: Auth guards, frontend auth, loading/error/empty states, migration steps, backfills, tests, deployment safety, rollback, commit strategy
ARCHITECTURE: No business logic in handlers, no DB queries in components, no bare `any`, no duplication, no circular imports
PHASE SIZING: ≤ 10 steps each, no trivial merges, backend before frontend, correct PARALLEL-SAFE labels

Update plan.md in-place. Set `Assessed: yes` and `Phases: <N>` in Status.

Do not implement any code.
```

---

## Phase 4: Implementation

**Parallelization check FIRST:** Scan plan.md for `[PARALLEL-SAFE]` markers. Spawn all parallel-safe phases in a single Agent call batch.

**Write one prompt per unit to `logs/phase-4<unit>.prompt.md` before spawning.**

```text
You are an implementation agent. You own Phase <N> of the plan and nothing else.

PROJECT: <PROJECT>
LETTER: <LETTER>
REPO ROOT: <REPO_ROOT>

AUTONOMOUS OPERATING MODE: Implement. Do not ask. If a plan detail is wrong, implement the closest correct thing and note it in DEVIATIONS. Do not stop.

PRE-FLIGHT: Read before touching anything
1. digested-agents.md
2. .ai/<PROJECT>/<LETTER>/context.md
3. .ai/<PROJECT>/<LETTER>/plan.md
4. Every file in your owned write set (read in full)
5. Every file that imports from or is imported by your write set

YOUR OWNED WRITE SET (touch ONLY these files):
<OWNED_WRITE_SET>

YOUR TASK: Implement Phase <N> exactly as specified
<paste the exact Phase <N> steps from plan.md here>

IMPLEMENTATION RULES (non-negotiable):

PATTERN FIDELITY:
- Match the style of the nearest existing implementation precisely.
- No new patterns, abstractions, or utilities unless the plan calls for it.
- No comments beyond what existing similar code has.

SCOPE DISCIPLINE:
- Touch ONLY files in your owned write set.
- Exception: trivially-coupled import fix outside write set (note in DEVIATIONS).
- If plan is wrong about a path or signature: implement closest correct thing, note in DEVIATIONS.

TESTS:
- Write or update tests as specified.
- Use exact fixture pattern from context.md.
- Verify every test actually passes.
- Tests MUST assert payload values, DB state, and error shapes — not just status codes.
- Test both happy path and sad path (invalid input, missing auth, missing data).
- Deterministic: no time.sleep(), no unseeded random, no wall-clock dependency.
- Test through public interface only, not implementation details.

COMMIT DISCIPLINE:
- Follow the commit strategy from plan.md.
- Conventional commits: `feat(scope): description`, `fix(scope): description`, etc.
- Each commit atomic: one logical change, passes tests independently.
- No "fix", "WIP", "temp", "update", or vague messages.
- After each commit: `git diff --stat HEAD~1 HEAD` to confirm.

CIRCULAR IMPORT CHECK: After new imports, verify no circular dependency.

PYDANTIC V2: model_validate, model_dump, @field_validator, ConfigDict

SQLALCHEMY:
- selectinload or joinedload for relationships in list endpoints
- Never load relationship inside a loop
- All writes in explicit transaction or session context manager
- For any new query on table with > 10k rows: run EXPLAIN ANALYZE

INPUT VALIDATION:
- Every new endpoint accepting user input MUST have max-length and max-items guards.
- String: max_length=N in Pydantic schema
- Array: max_items=N in Pydantic schema

TYPESCRIPT: No bare `any`, no `!` assertions without documented invariant

AUTH: Every new backend endpoint needs auth dependency; every new frontend page needs auth guard

POST-IMPLEMENTATION VERIFICATION:
1. Run targeted validation for your files
2. If fails: diagnose and fix. Repeat once. Note BLOCKER if still failing.
3. Flip `- [ ] Phase <N>:` to `- [x] Phase <N>:` in plan.md
4. Confirm `git diff --stat` shows expected commits
```

---

## Phase 5: Validation (runs in main session — never delegate)

```bash
# Read digested-agents.md for exact commands

# 1. Targeted backend tests
backend/.venv/bin/python -m pytest backend/tests/<relevant>.py -v

# 2. Targeted frontend tests
npm test -- --runInBand <test_file_pattern>

# 3. Typecheck
cd frontend && npx tsc --noEmit

# 4. EXPLAIN ANALYZE — verify new queries use indexes (tables > 10k rows)

# 4b. Observability gate — every new error path must have a log statement
grep -n "logger\.\|log\.\|logging\." <changed_backend_files>

# 5. Migration reversibility (if migration added)
alembic downgrade -1
alembic upgrade head

# 6. Dependency audit (if new packages added)
pip-audit 2>/dev/null || true
cd frontend && npm audit --audit-level=high 2>/dev/null

# 7. Update CHANGELOG.md from plan.md CHANGELOG section

# 8. Broad validation (high-risk tasks only: auth, DB schema, shared types)
bash validate.sh
```

Failure handling: understand root cause → fix → rerun. Repeat once. After 2 cycles: report full error.

Write `logs/phase-5.result.md`:
```
Status: DONE|BLOCKED
Backend tests: <cmd> → <PASS/FAIL>
Frontend tests: <cmd> → <PASS/FAIL>
Typecheck: <cmd> → <PASS/FAIL>
EXPLAIN ANALYZE: <index used—PASS | seq scan found—fixed | skipped—no large tables>
Observability: <all error paths logged | gaps found and fixed | skipped—no new error paths>
Migration reversibility: <tested—PASS | skipped—no migration | FAIL+detail>
Dependency audit: <clean | CVEs: severity+package | skipped—no new deps>
CHANGELOG: <updated | skipped—reason>
Broad: <skipped—reason | cmd → PASS/FAIL>
Failures fixed: <list or none>
Remaining issues: <none | description>
```

Flip `- [ ] Validation` to `- [x] Validation` in plan.md.

---

## Phase 6: Browser Test (runs in main session — never delegate)

### Step 0: Auto-detect whether browser test is needed

```bash
UI_CHANGES=$(git diff --name-only main...HEAD | grep -E '^(frontend/|.*\.(tsx|jsx|css|scss|html|svg)$)' || true)
if [ -z "$UI_CHANGES" ]; then
  cat > .ai/<PROJECT>/<LETTER>/logs/phase-6.result.md <<EOF
Status: SKIPPED
Reason: No UI files in branch diff.
Files changed: $(git diff --name-only main...HEAD | wc -l) (all non-UI)
EOF
  # Flip "- [ ] Browser test" to "- [x] Browser test (skipped: no UI changes)" in plan.md
fi
```

If `UI_CHANGES` is non-empty, proceed.

**Route-aware battery:**

| Route | Required steps | Skipped |
|-------|----------------|---------|
| Quick | golden path desktop, console errors | mobile, edge cases, slow-3G, a11y |
| Standard | + mobile (375px) + 1 edge case | slow-3G, a11y |
| Large | all steps | nothing |

**Step 1: Ensure dev server is running**
```javascript
// mcp__Claude_Preview__preview_list
// If already started in Phase 0, just verify. If not: mcp__Claude_Preview__preview_start
```

**Step 2: Navigate and authenticate**
- Go to the feature page. OTP: `123456` (backend fallback).

**Step 3: Exercise golden path — desktop**
- Perform the exact user action the feature enables. Check network tab (correct endpoints, 2xx). Performance budget: flag any new blocking requests or API calls > 1s.

**Step 4: Check console**
```javascript
// mcp__Claude_Preview__preview_console_logs
// Zero unhandled errors required.
```

**Step 5: Screenshot — golden path (mandatory)**
```javascript
// mcp__Claude_Preview__preview_screenshot save_to_disk: true
// Save to: .ai/<PROJECT>/<LETTER>/screenshots/phase-6-golden-path.png
```
Multi-step flows: record a GIF instead and also save a static end-state screenshot.

**Step 6: Mobile viewport (Standard/Large)**
```javascript
// mcp__Claude_Preview__preview_resize width: 375, height: 812
// Navigate, exercise golden path, screenshot to phase-6-mobile.png
// Restore to desktop after
```

**Step 7: Edge cases (Standard/Large — at least 1)**
- Invalid input → validation error, no crash → `phase-6-edge-1.png`
- Empty state → placeholder, not blank → `phase-6-edge-2.png`

**Step 8: Slow network (Large only)**
Enable throttling, repeat golden path. Verify loading states render, no double-submit possible, no race condition JS errors. Fix anything broken before proceeding.

**Step 9: Accessibility (Large only)**
Tab through interactive elements. Verify focus indicators visible, keyboard reachable, no traps. Note failures.

**Step 10: Fix anything wrong**
Fix → reload → re-screenshot → re-run targeted validation.

Write `logs/phase-6.result.md`:
```
Status: DONE|SKIPPED|BLOCKED
URL tested: <url>
Golden path desktop: PASS|FAIL+description
Golden path mobile (375px): PASS|FAIL+description
Performance: clean | issues: list
Console errors: none | list
Edge cases tested: list each + PASS/FAIL
Accessibility: pass | issues found: list
Issues fixed: list or none
Skip reason: only if skipped
Screenshots:
  - screenshots/phase-6-golden-path.png
  - screenshots/phase-6-mobile.png (omit if not taken)
  - screenshots/phase-6-edge-1.png (omit if not taken)
  - screenshots/phase-6-flow.gif (omit if not recorded)
  - screenshots/phase-6-after-fix.png (omit if no fixes)
```

Flip `- [ ] Browser test` to `- [x] Browser test` in plan.md.

---

## Phase 7: Code Review Loop

Run up to 3 iterations. Start `R = 1`.

```
LOOP:
  Run Phase 7a (review) for iteration R
  Read review<R>.md verdict:
    APPROVED → FINISH
    NEEDS_CHANGES → check P0 ESCALATION GATE (R=1 only) → run Phase 7b (fix) → R += 1 → if R ≤ 3: loop

FINISH:
  Flip "- [ ] Code review" to "- [x] Code review" in plan.md
```

### P0 ESCALATION GATE (after R=1 only)

```bash
P0_COUNT=$(grep -c '^- Priority: P0$' .ai/<PROJECT>/<LETTER>/review1.md 2>/dev/null || echo 0)
if [ "$P0_COUNT" -ge 3 ]; then
  echo "ESCALATION: $P0_COUNT P0 issues in review1.md — Phase 4 had structural problems."
  echo "Options: 1) Fix manually, 2) Discard Phase 4 (git reset --hard <pre-phase-4-sha>), 3) Continue anyway."
  # Write logs/phase-7-escalated.md; flip to "- [/] Code review (escalated: N P0)" in plan.md
fi
```

---

### Phase 7a: Code Review

**Spawn as subagent. Write full prompt to `logs/phase-7a-review-<R>.prompt.md` first.**

```text
You are an adversarial code reviewer. Find every real defect before this ships. Be ruthless.

PROJECT: <PROJECT>
LETTER: <LETTER>
REPO ROOT: <REPO_ROOT>
REVIEW ITERATION: <R>

AUTONOMOUS OPERATING MODE: Review the diff. If R > 1, only flag remaining issues.

Read:
1. digested-agents.md
2. .ai/<PROJECT>/<LETTER>/context.md
3. .ai/<PROJECT>/<LETTER>/plan.md (especially Deployment Safety, Rollback Plan, Breaking Change Analysis)
4. If R > 1: .ai/<PROJECT>/<LETTER>/review<R-1>.md
5. git diff main...HEAD (full diff — read all of it)
6. Every changed source file in full (not just diff hunks)
7. .ai/<PROJECT>/<LETTER>/logs/phase-6.result.md and screenshots
8. git log main...HEAD --oneline (commit quality)

REVIEW CHECKLIST:

P0 — CORRECTNESS AND SECURITY (any finding = NEEDS_CHANGES):
- Logic error producing wrong results or data corruption
- Missing null/undefined check at API boundaries
- Unhandled exception path returning 500 instead of meaningful error
- Error response leaks internals (stack trace, file path, DB column name, internal ID format)
- Missing auth guard on new endpoint or page
- SQL injection (raw string interpolation into queries)
- Exposed secret or credential
- Pydantic validation bypassed (raw dict access)
- Race condition in async code
- DB write outside explicit transaction or session context manager
- Missing idempotency on POST that could be retried (double-submit = duplicate data)
- Missing input size validation (unbounded string/array = memory exhaustion)

P1 — PERFORMANCE AND RELIABILITY (any finding = NEEDS_CHANGES):
- SQLAlchemy N+1: relationship loaded inside loop without joinedload/selectinload
- Missing DB index on filtered/sorted column
- Index on large table without CONCURRENTLY
- New query on large table without EXPLAIN ANALYZE (seq scan risk)
- Unbounded list query (no LIMIT)
- Expensive computation in hot render path
- Missing pagination on new list endpoint
- External HTTP call without timeout
- External HTTP call without retry logic
- External HTTP call without graceful degradation fallback

P2 — TYPE SAFETY AND API CONTRACTS:
- Bare `any` in TypeScript
- `!` non-null assertion without invariant comment
- Pydantic v1-style (parse_obj, .dict(), @validator, class Config)
- Missing return type annotation on public Python function
- Breaking API change not flagged in plan.md
- Response schema removed/renamed field that existing clients read

P3 — CODE QUALITY AND OBSERVABILITY:
- Dead code (unreachable branches, unused imports, unused variables)
- Duplication of existing utility
- Business logic in route handler
- DB query in React component
- New error path with no logging
- New feature with no observability (no success log, no failure log)
- 3am diagnosability: if this breaks silently, can on-call find it in logs in under 5 minutes?
- Hardcoded magic values (IDs, emails, URLs, role names)
- Missing UI states: loading, error, empty
- Mobile layout broken (from screenshots)
- UI inconsistency with rest of app (from screenshots)

P4 — TEST COVERAGE:
- New endpoint with no pytest test
- New behavior with no test assertion
- Only happy path, no error cases
- No test for auth guard (unauthenticated → 401/403)
- Test only asserts status_code == 200, no payload assertions
- Non-deterministic test

P5 — COMMIT QUALITY:
- Vague commit message
- Multiple unrelated changes in one commit
- File in wrong directory
- Inconsistent naming
- CHANGELOG not updated

WRITE: .ai/<PROJECT>/<LETTER>/review<R>.md

## Code Review — Iteration <R>
## Summary — honest 1-2 sentence assessment
## Commit Quality — clean history / issues
## Verdict: APPROVED | NEEDS_CHANGES
(if NEEDS_CHANGES:)
## Changes Required
### <Issue Title>
- Priority: P0|P1|P2|P3|P4|P5
- File: `<path>`, line ~<N>
- Problem: <what is wrong, precisely>
- Fix: <exactly what to change — specific enough to implement without guessing>

Rules:
- Only flag issues in code added or modified by this task
- Every finding must have a concrete negative consequence
- No comments/docstrings requests
- No style preferences as P0/P1
```

---

### Phase 7b: Review Fix

**Spawn as subagent. Write full prompt to `logs/phase-7b-fix-<R>.prompt.md` first.**

```text
You are a fix agent. Your only job is to implement every item in review<R>.md.

PROJECT: <PROJECT>
LETTER: <LETTER>
REPO ROOT: <REPO_ROOT>
FIXING REVIEW: <R>

AUTONOMOUS OPERATING MODE: Read the review, implement all changes, validate, done. No confirmation needed.

Read:
1. digested-agents.md
2. .ai/<PROJECT>/<LETTER>/context.md
3. .ai/<PROJECT>/<LETTER>/review<R>.md — this is your complete work order
4. Every source file mentioned in review<R>.md (in full before touching)

Implement every change under "Changes Required". Nothing more, nothing less.

Rules:
- Do not refactor adjacent code not in the review
- Do not change test behavior unless review explicitly calls for it
- If fix conflicts with plan step: fix takes precedence (review = correctness, plan = intent)
- Commit each fix atomically: `fix(<scope>): <what was wrong>`

After all changes:
1. Run targeted validation (tests + typecheck for touched files)
2. If fails: diagnose and fix. Repeat once. Note BLOCKER if still failing.
3. Confirm git log shows clean conventional commit history
```

---

## Phase 8: Create PR (runs in main session — never delegate)

**Phase 8 is mandatory and automatic.** Do NOT ask "should I open the PR?" — open it.

Pre-authorized by the user invoking this skill:
- `git push -u origin <branch>`
- `gh pr create` against the default base branch
- Reading `.github/pull_request_template.md`

If branch already has PR: push new commits and report existing URL — do not create duplicate.

**Gate: only run after Phase 5 passes, Phase 6 completes, Phase 7 reaches APPROVED (or review limit with documented rationale). Never open a PR on broken work.**

**Step 1: Check for related issues**
```bash
gh issue list --state open --search "<2-3 keywords from task>" --json number,title | head -10
```

**Step 2: Clean commit history**
```bash
git log main...HEAD --oneline
# If fix/WIP/temp commits exist that haven't been pushed:
git rebase -i main
# Then push
git push -u origin HEAD
# If push fails due to divergence: do NOT force-push. Report to user.
```

**Step 3: Read all artifacts for PR body**
- context.md → Task Description, API Contract, Deployment Safety
- plan.md → Approach, Rollback Plan, files modified/created
- logs/phase-5.result.md → validation results
- logs/phase-6.result.md → browser test results and screenshots
- review<R>.md → review rounds, issues fixed

**Step 4: Find PR template and create**
```bash
TEMPLATE=""
for path in .github/pull_request_template.md .github/PULL_REQUEST_TEMPLATE.md docs/pull_request_template.md; do
  if [ -f "$path" ]; then TEMPLATE="$path"; break; fi
done
```

PR title: under 70 chars, conventional commit prefix, imperative mood.

If template found: fill its placeholders from artifacts. If not: use fallback below.

**Fallback body:**
```bash
gh pr create --title "<title>" --body "$(cat <<'PRBODY'
## Summary
<1-3 bullets — what was built and why>

## Screenshots
.ai/<PROJECT>/<LETTER>/screenshots/phase-6-golden-path.png
<list any others>

## Validation
- Backend tests: <PASS | SKIP>
- Frontend tests: <PASS | SKIP>
- Typecheck: <PASS | SKIP>
- Migration reversibility: <PASS | N/A>

## Code review
<N round(s) — key issues fixed, or first-pass approval>

## Rollback
<from plan.md Rollback Plan>

🤖 Generated with [Claude Code](https://claude.com/claude-code) via task-think-claude
PRBODY
)"
```

Always end the body with: `🤖 Generated with [Claude Code](https://claude.com/claude-code) via task-think-claude`

Never check a checklist item that isn't actually true.

**Step 5: Record and verify**
Write `logs/phase-8.result.md`:
```
Phase: 8 | Status: DONE
PR: <URL> | PR number: <#N>
Branch: <name> | Title: <title>
Issue linked: <#N | none> | Commits on branch: <N>
```
Flip `- [ ] PR` to `- [x] PR (<URL>)` in plan.md.

---

## Completion Report

```
═══════════════════════════════════════════════
TASK COMPLETE: <PROJECT> / <LETTER>
═══════════════════════════════════════════════

What was built:
  <1-2 sentence feature description — user experience, not code changes>

Files changed:
  Modified: <list>
  Created: <list>

Validation:
  Backend tests: <PASS | FAIL + detail>
  Frontend tests: <PASS | FAIL + detail>
  Typecheck: <PASS | FAIL + detail>
  Migration reversibility: <PASS | skipped | FAIL + detail>
  Broad: <PASS | skipped — reason>

Browser test:
  URL: <url>
  Desktop golden path: PASS | FAIL
  Mobile golden path (375px): PASS | FAIL
  Edge cases: <list + PASS/FAIL>
  Accessibility: pass | issues noted
  Screenshots:
    - .ai/<PROJECT>/<LETTER>/screenshots/phase-6-golden-path.png
    - .ai/<PROJECT>/<LETTER>/screenshots/phase-6-mobile.png
    (or: skipped — <reason>)

Code review:
  Rounds: <N>
  Issues found and fixed: <list or "none — first-pass approval">
  Final verdict: APPROVED

PR: <URL>
<pr-created><URL></pr-created>
Branch: <branch-name>
Commits: <N> (<summary>)

Time: <Xh Ym Zs>

Follow-up: Use "Use local task-think-claude skill: <PROJECT> <next task>" for follow-ups
═══════════════════════════════════════════════
```

---

## Error Handling Ladder

**Phase fails to produce artifact:**
1. Tighten the prompt (add explicit paths, "write the file NOW before replying")
2. Spawn fresh with tightened prompt
3. After 2 failed spawns: report to user

**Phase times out:**
1. Check progress file mtime
2. If advanced: wait one more interval
3. Stale mtime + unchanged heartbeat: nudge once → wait → respawn fresh

**Validation fails after 2 fix cycles:** Report full error. Do not guess further.

**Review-fix introduces new failures:** Report to user — no third autonomous layer.

**Implementation diff is empty:**
Re-spawn immediately with: "Your previous run produced an empty git diff. You MUST write actual code changes. Do not reply until `git diff --stat` shows your changes."

**Push fails due to upstream divergence:**
Do NOT force-push. Report with `git status` and `git log --oneline -10`. User decides.
