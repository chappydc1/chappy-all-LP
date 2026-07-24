---
name: task-think-claude
description: Orchestrate a full end-to-end implementation workflow using Claude subagents. Covers guaranteed setup, exhaustive context gathering, rigorous planning, parallel implementation, validation, browser testing, and code review — with persistent artifacts under .ai/<project-name>/<letter>/. Operate as an S-tier lead engineer: understand history before touching code, plan for zero-downtime deployment, implement with atomic commits, verify proof before claiming done, never interrupt unless genuinely blocked.
---

# Task Pipeline — S-Tier Lead Engineer Execution

You are the lead engineer. Not a contributor — the person who owns quality end-to-end. That means you think about the engineer who joins the team six months from now and has to maintain this. It means you think about the on-call engineer at 3am if this ships broken. It means you don't declare done until you have proof.

Every phase has a concrete success condition. Nothing is "done" until artifacts exist on disk and pass verification. Own every failure — fix it rather than report it.

---

## AUTONOMOUS OPERATING MODE — READ THIS FIRST

You are operating in **full autonomy mode**. This means:

- **Never pause to ask for confirmation.** Make the best decision, log your reasoning, and proceed.
- **Never say "do you want me to…"** — if it's the right next step, do it.
- **Never stop for a dirty working tree** — auto-stash with a descriptive message and continue.
- **Never ask which project to use** — infer it from the task, log the decision, move on.
- **Never ask about routing (Quick/Standard/Large)** — decide based on task description and proceed.
- **Start the dev server immediately** in Phase 0 background if the task may touch UI — don't wait until Phase 6.
- **Create the PR automatically** after Phase 7 — the user invoked this skill, that IS the authorization.
- **Fix review findings without asking** — if a reviewer flags an issue, fix it.

The only valid stops are:
- Missing credentials/secrets that cannot be inferred
- Destructive actions outside the workspace (force-push to main, dropping prod tables)
- Ambiguous product decisions with zero codebase signal and 2 cycles of failed inference
- `gh pr create` fails for auth/permissions reasons

**Default is always: proceed.** Log what you decided and why. The user can read logs.

---

## Phase 0: Setup (MANDATORY, NON-SKIPPABLE)

**This runs first, every time, no exceptions, no shortcuts.**

### Step 0.1 — Record start time
Note the wall-clock start time. Report elapsed time at completion.

### Step 0.2 — Create .ai/ directory and handle dirty tree

```bash
REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
mkdir -p "$REPO_ROOT/.ai"

# Dirty-tree check — auto-stash anything outside .ai/ so the branch starts clean
DIRTY=$(git -C "$REPO_ROOT" status --porcelain | grep -v "^?? \.ai/" || true)
if [ -n "$DIRTY" ]; then
  STASH_MSG="task-think-auto-stash: $(date +%Y%m%d-%H%M%S)"
  git -C "$REPO_ROOT" stash push -m "$STASH_MSG" --include-untracked -- $(git -C "$REPO_ROOT" diff --name-only HEAD; git -C "$REPO_ROOT" ls-files --others --exclude-standard | grep -v "^\.ai/")
  echo "Auto-stashed dirty tree as: $STASH_MSG — restore with: git stash pop"
fi
```

### Step 0.3 — Detect project and route (AUTONOMOUS — no confirmation needed)

List existing projects:
```bash
EXISTING=$(ls "$REPO_ROOT/.ai" 2>/dev/null | sort)
echo "Existing projects: $EXISTING"
```

Detect follow-up via these methods, in order. Stop at the first match:

1. **Explicit prefix.** If task starts with `continue:`, `followup:`, `[<name>]`, or `project:<name>` → extract name and use it.
2. **Exact folder match.** First token of task matches a folder under `.ai/` → use it.
3. **Case-insensitive match.** Lowercase first token uniquely matches a folder → use it. If ambiguous, pick the most recently modified one.
4. **No match → new project.** Derive kebab-case name from task description (1-2 words, no collision with existing).

For follow-ups: scan for latest letter, check resume conditions:
- All `[x]` in `plan.md` → completed, start next letter
- Some `[ ]` unchecked → **RESUME** that letter automatically
- No `plan.md` yet → reuse the letter

**Log the decision** to `logs/phase-0.result.md` and continue. Do not echo a "please interrupt if wrong" message — just proceed.

### Step 0.4 — Name the working branch (decide and create immediately)

**RESUME mode:** find branch from `.ai/<PROJECT>/<LATEST>/logs/phase-0.result.md`, check it out.

**Otherwise:** determine prefix from task type (`feat/fix/refactor/chore`), check collision, create:
```bash
git checkout -b <prefix>/<project>[-<LETTER> if collision]
```

### Step 0.5 — Create task directories
```bash
mkdir -p "$REPO_ROOT/.ai/$PROJECT/$LETTER/logs"
mkdir -p "$REPO_ROOT/.ai/$PROJECT/$LETTER/screenshots"
ls "$REPO_ROOT/.ai/$PROJECT/$LETTER/logs" || { echo "FATAL: directory creation failed"; exit 1; }
```

### Step 0.5b — Digest AGENTS.md once

Read AGENTS.md, write a 50-100 line digest at `.ai/$PROJECT/$LETTER/digested-agents.md`. Every subsequent subagent reads the digest instead of the full file (~50K token savings per task).

### Step 0.5c — Start dev server in background (PROACTIVE)

**Do this NOW in Phase 0, not in Phase 6.** If the task description or project name suggests any frontend/UI work, start the server immediately in background so it's warm by Phase 6:

```bash
# Detect if this task touches UI
TASK_HAS_UI=$(echo "$TASK" | grep -iE 'page|component|ui|style|button|form|layout|frontend|display|render|modal|table|list|chart|dashboard' || true)

if [ -n "$TASK_HAS_UI" ]; then
  # Start server now in background — Phase 6 will just use it
  cd "$REPO_ROOT/frontend" && npm run dev &
  DEVSERVER_PID=$!
  echo "Dev server started in background (PID $DEVSERVER_PID) at http://localhost:3000"
  echo "DevServerPID: $DEVSERVER_PID" >> "$REPO_ROOT/.ai/$PROJECT/$LETTER/logs/phase-0.result.md"
fi
```

If using `mcp__Claude_Preview__preview_start`, call it now and log the URL.

### Step 0.5d — Cloud SQL proxy (if task touches DB-backed surfaces)

Trigger if task mentions: `/applicants`, `/dashboard`, applications, KYC, transactions, income, financial accounts, postgres, Cloud SQL, or GCP database. Also trigger if Phase 1 will touch `backend/src/infra/postgres/**` or `frontend/app/applicants/**`.

Invoke `local-postgres-proxy` skill now. It is idempotent. Log result.

**Skip condition:** purely frontend styling, pure utility functions, CI/tooling, or documentation.

### Step 0.6 — Route by complexity (decide immediately, log, proceed)

**Quick** (≤ 5 changes, ≤ 3 files, no new DB model/endpoint/page):
- CSS tweaks, constant changes, copy fixes, single field renames

**Standard** (5–15 changes, ≤ 8 files, one new endpoint OR one new component):
- New filter, new form field with backend persistence, new dashboard panel

**Large** (15+ changes, many files, new SQLAlchemy model, new page + endpoint + migration):
- New entity with CRUD, new service integration, multi-table schema change

When in doubt between Standard and Large: start Standard; upgrade if Phase 2 plan reveals > 15 steps.

Write `logs/phase-0.result.md`:
```
Phase: 0
Status: DONE
Project: <PROJECT>
Letter: <LETTER>
Mode: <NEW | FOLLOWUP | RESUME>
Branch: <branch-name>
Route: <Quick|Standard|Large>
Reason: <one sentence>
DevServer: <started at <URL> | skipped — no UI>
PostgresProxy: <up | started | skipped — reason>
AutoStash: <stash message | none>
StartTime: <HH:MM:SS>
```

---

## Inputs

Before doing anything, collect:
- **Task description** (required)
- **Project name** (optional — derive from task if absent)
- **Constraints** (optional — specific files, patterns to follow, risk limits)
- **Screenshots / design mocks** (optional — write a textual description to `.ai/$PROJECT/$LETTER/context.md`)

---

## Project Layout

```
.ai/<project>/
  about.md              ← project blueprint, always describes completed state
  a/
    context.md          ← codebase deep-dive for this task
    plan.md             ← numbered, phased implementation plan
    review1.md          ← code review pass 1
    review2.md          ← code review pass 2 (if needed)
    review3.md          ← code review pass 3 (if needed)
    screenshots/
      phase-6-golden-path.png
      phase-6-edge-<n>.png
      phase-6-mobile.png
      phase-6-after-fix.png
      phase-6-flow.gif
    logs/
      phase-0.result.md
      phase-1.prompt.md
      phase-1.progress.md
      phase-1.result.md
      phase-23.prompt.md
      phase-23.progress.md
      phase-23.result.md
      phase-4a.prompt.md
      phase-4a.progress.md
      phase-4a.result.md
      phase-5.result.md
      phase-6.result.md
      phase-7a-review-1.prompt.md
      phase-7a-review-1.result.md
      phase-7b-fix-1.prompt.md
      phase-7b-fix-1.result.md
      phase-8.result.md
  b/
```

Rules:
- `about.md`: written as if the project already exists in its final form. No "TODO", "pending", "will", "currently". Rewritten on every new task letter.
- `context.md`: self-contained for a cold subagent. No forward references. Every path is real.
- `plan.md`: numbered steps, grouped into phases, with Status section tracking checkboxes.
- Logs: every delegated phase gets `.prompt.md` before spawn, `.progress.md` heartbeat during work, `.result.md` after completion.

---

## Phase Sequence and Execution Rules

### Quick Path
```
Phase 0 (main) → implement in main session → write about.md + context.md → Phase 5 (main) → Phase 6 LITE (main) → Phase 7 lite review (subagent) → Phase 8 PR (main)
```

### Standard Path
```
Phase 0 (main) → Phase 1 PARALLEL (3× Explore + synthesis, subagents) → Phase 2+3 merged (subagent) → Phase 4 (subagents, parallel where safe) → Phase 5 (main) → Phase 6 STANDARD (main) → Phase 7 loop (subagents) → Phase 8 PR (main)
```

### Large Path
```
Phase 0 (main) → Phase 1 PARALLEL (3× Explore + synthesis, subagents) → Phase 2 (subagent) → Phase 3 (subagent) → Phase 4 (subagents, parallel where safe) → Phase 5 (main) → Phase 6 FULL (main) → Phase 7 loop (subagents) → Phase 8 PR (main)
```

### Phase 6 scaling by route
| Route | Required browser checks | Skipped |
|-------|------------------------|---------|
| Quick | golden path desktop screenshot, console error check | mobile, edge cases, slow-3G, a11y |
| Standard | + mobile screenshot (375px), + 1 edge case | slow-3G, a11y |
| Large | full battery: desktop + mobile + edge cases + slow network + a11y + GIF for multi-step flows | nothing |

### General Execution Rules

**Subagent configuration — mixed-model by phase:**

| Phase | `subagent_type` | `model` | Why |
|-------|-----------------|---------|-----|
| 1 (context, new project) | `Explore` for mapping; `general-purpose` for synthesis | `claude-haiku-4-5-20251001` | Read-heavy, Haiku handles it |
| 1F (context, follow-up) | `general-purpose` | `claude-haiku-4-5-20251001` | Same |
| 2 (plan) | `general-purpose` | `claude-opus-4-7` | Real reasoning required |
| 3 (assess) | `general-purpose` | `claude-opus-4-7` | Adversarial critique |
| 2+3 merged | `general-purpose` | `claude-opus-4-7` | Plan + self-critique |
| 4 (implementation) | `general-purpose` | `claude-opus-4-7` | Writing real code |
| 7a (review) | `general-purpose` | `claude-haiku-4-5-20251001` | Checklist work |
| 7b (fix) | `general-purpose` | `claude-opus-4-7` | Writing code again |

Pass file paths explicitly in every subagent prompt — never assume context inheritance.

**Before spawning any subagent:**
1. Write the complete prompt to `logs/phase-<name>.prompt.md`
2. Append the Standard Progress Contract (see PROMPTS.md)
3. Append the Standard Compact Reply Block
4. Call `mcp__ccd_session__mark_chapter` with the phase title

**After a subagent finishes:**
1. Verify the required artifact exists on disk and is non-empty
2. For implementation phases: run `git diff --stat` — empty diff = phase failed, re-spawn immediately
3. Write `logs/phase-<name>.result.md`

**Parallelization (line-level, not file-level):**
- Scan plan for Phase 4 units. Spawn parallel any units that don't edit the **same lines** of the same files.
- Backend-only and frontend-only phases are always safe to parallelize.
- Two phases that each append a new function to the same file ARE safe — git merges naturally.
- Only block parallelization when phases edit overlapping line ranges or when one phase's output is imported by another.

**Phase 5 (validate), Phase 6 (browser test), and Phase 8 (PR) ALWAYS run in the main session.**

### RESUME mode behavior

When Phase 0 detected RESUME, skip phases that are provably done:

| Existing artifact | Phase to skip |
|-------------------|---------------|
| `about.md` + `context.md` exist, non-empty, reference real paths | Skip Phase 1 |
| `plan.md` has `Assessed: yes` | Skip Phases 2 and 3 |
| Phase 4 step `[x]` in plan.md | Skip that unit |
| `- [x] Validation` in plan.md | Skip Phase 5 |
| `- [x] Browser test` in plan.md | Skip Phase 6 |
| `- [x] Code review` in plan.md | Skip Phase 7 |
| `- [x] PR` in plan.md | Skip Phase 8 |

Log every skip to `logs/resume.log`. If artifact is missing/invalid, treat as unchecked and re-run.

**Resume + drift interaction:** If RESUME mode AND git log shows commits you didn't make — stop and escalate. Never silently overwrite.

**Out-of-scope findings in review:** Call `mcp__ccd_session__spawn_task` for things outside this task's scope. Don't bloat the PR.

---

## Subagent Timeout and Retry Protocol

Use `Monitor` tool to stream events from background processes — each new line in progress file is a notification.

Setup:
```bash
tail -f .ai/$PROJECT/$LETTER/logs/phase-<name>.progress.md  # run_in_background=true
# Attach Monitor with until-condition: grep -q '^STATUS: ' logs/phase-<name>.result.md
```

Other rules:
- Default check interval: 5 minutes
- 2-minute checks when agent is clearly wrapping up
- Stale mtime + unchanged heartbeat → one nudge → one more wait → respawn fresh
- Maximum retries per phase: 2. After 2 failed spawns, report with last error.

---

## Verification Rules (Non-Negotiable)

A phase is complete ONLY when ALL hold:

| Phase | Required Evidence |
|-------|------------------|
| Phase 0 | `ls .ai/$PROJECT/$LETTER/logs` succeeds; branch created |
| Phase 1 | `about.md` and `context.md` non-empty, reference real paths |
| Phase 2 | `plan.md` has `## Status`, `Phases: N`, rollback plan, no source changes in diff |
| Phase 3 | `plan.md` has `Assessed: yes`, all paths verified |
| Phase 4 | Checkbox `[x]` AND `git diff --stat` shows changes; at least one conventional commit |
| Phase 5 | Test output recorded; zero unresolved failures; type errors zero; observability gap check done |
| Phase 6 | `screenshots/phase-6-golden-path.png` exists; console errors checked; result file lists screenshots |
| Phase 7a | `review<R>.md` with explicit APPROVED or NEEDS_CHANGES verdict |
| Phase 7b | Fixes applied; re-validation passed |
| Phase 8 | `git push` succeeded; `gh pr create` returned URL; `logs/phase-8.result.md` written; URL printed in `<pr-created>...</pr-created>` |

**An agent's reply saying "done" is not evidence. Disk artifacts are evidence.**

---

## Proactive Behavior

After every implementation phase:
- Run targeted validation immediately (do not wait for Phase 5)
- If the task touches any frontend file, proceed to Phase 6 — no decision needed
- If a review finds issues, fix them. Period.

**Phase 8 is mandatory and runs automatically.** Invoking this skill pre-authorizes:
- `git commit` on the named task branch (never `main`)
- `git push -u origin <branch>`
- `gh pr create` against the repo's default base branch
- Reading `.github/pull_request_template.md` if present

This does **not** extend to: pushing to `main`/`master`, force-pushing, deleting branches, skipping hooks.

Only escalate to the user for:
- Missing credentials/secrets blocking progress
- Ambiguous product decisions where codebase provides zero signal after 2 inference cycles
- Destructive actions outside the workspace
- Breaking API changes that cannot be assessed from codebase alone
- Persistent failures after 2 fix-and-rerun cycles
- `gh pr create` fails for auth/permissions reasons

---

## Browser Automation

**Tool routing:**
| URL pattern | Use | Why |
|-------------|-----|-----|
| `localhost:*` (dev server) | `mcp__Claude_Browser__*` | Built for local dev, no origin approval needed |
| `lp-all-personal.vercel.app` (stable prod alias) | `mcp__Claude_Browser__*` | Same origin every time — approved once, never prompts again |
| ephemeral preview URL (`*-<hash>-*.vercel.app`) | avoid for routine checks | New random subdomain per deploy triggers a fresh one-time browser origin-approval popup every run |

- Deploying itself (git push, PR creation) never prompts — that's fully pre-authorized above.
- The Browser pane requires a one-time human "Always allow" click the first time it visits any new origin. This is a host-level safety gate, not a Claude Code permission — it cannot be pre-approved from this file or from `settings.json`, and don't try to work around it.
- **Default Phase 6 verification to `localhost` (dev server).** Only hit the live Vercel deployment when the task specifically requires checking the deployed build; prefer the stable production alias over a fresh per-deploy preview hash URL so the one-time approval (once granted) covers every future run instead of triggering again on each new preview.
- Use `javascript_tool` first for DOM reads/clicks when screenshot tools are domain-blocked.
- Before opening local preview: run `mcp__Claude_Browser__preview_list`. If no server running, start it immediately with `npm run dev`.

---

## Quality Bar — What S-Tier Looks Like

**Before touching code:**
The approach is validated against alternatives. The context is complete enough for a cold agent to implement without opening additional files. Includes git history reasoning, data scale, deployment safety, observability plan, and success metrics.

**Planning:**
Sequences correctly, accounts for zero-downtime deployment, rollback plan included, rate limiting and caching decided for every new endpoint, external service resilience explicit, CHANGELOG entry planned.

**Implementation:**
The diff reads as if it was always there. Atomic commits with conventional messages. EXPLAIN ANALYZE on every new query touching large tables. Input size guards on all user-controlled fields. Tests assert payload values, not just status codes.

**Validation:**
Targeted tests pass. EXPLAIN ANALYZE confirms index usage. New error paths have log statements. Migrations run forward and backwards. Dependency audit clean. Type errors at zero.

**Browser testing:**
Golden path desktop and mobile (375px). Slow network verifies loading states render. Performance budget checked. At least one error state. Zero unhandled console errors.

**Code review:**
Finds N+1 queries, missing auth, unguarded writes, missing transactions, timeout-less external calls, error responses leaking internals, missing pagination. Asks: "If this breaks at 3am, can on-call diagnose from logs in under 5 minutes?"

**PR:**
Clean commit history. Template filled. Issue linked. Deployment instructions present. CHANGELOG entry included.

---

## Completion Criteria

Mark complete only when ALL of:
- Every plan phase has `[x]` in `plan.md`
- Validation output recorded with no failures
- `screenshots/phase-6-golden-path.png` exists (or explicit skip reason)
- `logs/phase-6.result.md` lists every screenshot path captured
- Code review reached APPROVED or review limit hit with rationale
- `about.md` reflects the final implemented state (rewrite, not append)
- **Phase 8 ran: branch pushed, `gh pr create` returned URL, `logs/phase-8.result.md` records it**

Report to the user:
1. What was built (what a user experiences, not what code was written)
2. Files modified or created
3. Validation outcome
4. Browser test result
5. Code review: rounds taken, critical issues found/fixed
6. **PR URL wrapped in `<pr-created>...</pr-created>`** — mandatory
7. Total elapsed time
8. Project name for follow-up reference

---

## User Invocation

**New project:**
```
Use local task-think-claude skill: add a date range filter to the property search page
```

**Follow-up:**
```
Use local task-think-claude skill: continue:property-search add empty state illustration
Use local task-think-claude skill: project:property-search add empty state illustration
Use local task-think-claude skill: [property-search] add empty state illustration
Use local task-think-claude skill: property-search also handle empty result state
```
