# Decisions

| Field | Value |
|--------|--------|
| **Owner** | Daelin Hulse |
| **Status** | Active register |
| **Last updated** | 2026-05-10 |

## Purpose

Capture **architectural and product decisions** so they do not live only in chat history. Each entry should be short, **dated**, and **actionable** for future readers.

## Roadmap deviation protocol

When implementation or product reality **diverges** from `Document-Exchange/operatoros_master_roadmap.docx` or from `PRODUCT_ROADMAP.md` / `MVP_SPEC.md`:

1. Add a row here (or a linked ADR-style section below).
2. Update **`CHANGELOG.md`** with user-visible or repo-visible impact.
3. If scope changes materially, update **`TASKS.md`** and notify in **`PROJECT_CONTEXT.md`** “Next actions” if needed.

Do **not** silently contradict the master roadmap; either **document the deviation** or **update the canonical markdown** and record why.

## Decision log

| ID | Date | Decision | Rationale | Supersedes |
|----|------|----------|-----------|------------|
| D-001 | 2026-05-10 | Use repo-root markdown suite (`README`, `PROJECT_CONTEXT`, etc.) instead of the numbered `00_*.md` filenames from the DOCX blueprint | User-requested filenames for Cursor/Composer ergonomics; content roles map 1:1 | — |
| D-002 | 2026-05-10 | Production static hosting via `node scripts/start.mjs` wrapping `vite preview` | Railway provides `PORT`; `${PORT:-4173}` is not portable on Windows `cmd` | — |
| D-003 | 2026-05-10 | No database, auth, or AI in the initial app shell | Explicit Phase 2 scope per founder instructions | — |

## Proposed (pending)

| ID | Proposal | Open questions |
|----|----------|----------------|
| P-001 | Phase 1 graph persistence | JSON seed vs Postgres vs embedded SQLite |

## Template (copy for new ADRs)

```text
### ADR-XXX: <title>
- **Date**:
- **Status**: proposed | accepted | superseded
- **Context**:
- **Decision**:
- **Consequences**:
```
