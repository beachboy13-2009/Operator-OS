# Composer instructions

| Field | Value |
|--------|--------|
| **Owner** | Daelin Hulse |
| **Status** | Active |
| **Last updated** | 2026-05-10 |

## Mission

You are working on **OperatorOS**: a **spatial operational intelligence layer** for industrial facilities. Your job is to **increase execution fidelity** without turning the product into a **generic summarizer** or **uncontrolled chatbot**.

## Read order (every new session)

1. `PROJECT_CONTEXT.md` — thesis, operating chain, non-negotiables.
2. `MVP_SPEC.md` — what “done” means near-term.
3. `TASKS.md` — what is actually in flight.
4. `DECISIONS.md` — constraints you must not unknowingly violate.
5. `ARCHITECTURE.md` / `DATA_MODEL.md` — before touching structure or schema.

**Protected inputs**: `Document-Exchange/` holds the **master roadmap DOCX** and future exchanged documents — **never delete or overwrite** those files.

## Composer rules (from master roadmap §14)

1. **Do not reduce OperatorOS to a document summarizer.**
2. Treat the **facility graph** as the **permanent foundation**.
3. Treat **safety / review states** as **core infrastructure**, not optional UI.
4. Map features to **Area → System → Asset → Condition → Verified action path** when possible.
5. When implementation **deviates** from roadmap or specs: update **`DECISIONS.md`** and **`CHANGELOG.md`**; adjust **`TASKS.md`**.
6. Keep each canonical markdown file **maintainable**: short front-matter table (owner, status, last updated, dependencies) + structured body.

## Output expectations for agents

- Prefer **small PR-sized diffs**; no drive-by refactors.
- After meaningful work: update **`TASKS.md`**, **`CHANGELOG.md`**, and (if applicable) **`DECISIONS.md`** in the **same change set**.
- Never remove founder guardrails; if a requirement must change, **write an ADR-style decision first**.

## Suggested prompt library (seed)

| Name | When to use |
|------|-------------|
| `PROMPT_GRAPH_NAV` | Implement or review Area→System→Asset→Condition navigation |
| `PROMPT_REVIEW_GATE` | Implement state transitions for draft → approved |
| `PROMPT_INGEST_SPIKE` | OCR / extraction experiment |
| `PROMPT_GAP_REPORT` | Completeness scoring + backlog |

(Add real prompt text under `Document-Exchange/` or a future `prompts/` folder when ready.)

## Deviation log

Large deviations should become **`DECISIONS.md`** entries. For **minor** implementation notes (e.g. dependency patch), `CHANGELOG.md` under **Unreleased** is enough.

## Current focus

Stabilize **deployable shell** (build + start + health). Then **prototype graph** per `MVP_SPEC.md`.
