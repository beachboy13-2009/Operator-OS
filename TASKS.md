# Tasks

| Field | Value |
|--------|--------|
| **Owner** | Daelin Hulse |
| **Status** | Active ledger |
| **Last updated** | 2026-05-10 |

## How to use this file

- One **in-progress** large item max (or split parallelizable work clearly).
- Done items move to **`CHANGELOG.md`** with date.
- Deviations from roadmap assumptions → **`DECISIONS.md`**.

## Active

| ID | Task | Owner | Notes |
|----|------|-------|-------|
| T-020 | Run `npm install` / `npm run build` / `npm run start` locally or in CI | Daelin | Agent sandbox lacked `npm` on PATH; validate on your machine before first Railway deploy |

## Backlog (next engineering)

| ID | Task | Priority | Depends on |
|----|------|----------|------------|
| T-010 | Choose Phase 1 persistence (JSON vs DB) | High | ADR in `DECISIONS.md` |
| T-011 | Seed demo facility graph (3–5 areas, 1 system) | High | T-010 |
| T-012 | Implement flagship vacuum low-pressure path (UI only) | High | T-011 |
| T-013 | Review queue + state machine (minimal) | Medium | T-011 |
| T-014 | Document ingestion spike (OCR + metadata) | Medium | infra decision |
| T-015 | Auth + tenant model | Lower | pilot requirements |

## Done

| ID | Completed | Summary |
|----|-----------|---------|
| T-001 | 2026-05-10 | Markdown operating memory: context, roadmap, MVP, architecture, data model, tasks, decisions, changelog, composer instructions, README |
| T-002 | 2026-05-10 | Vite + React + TypeScript + Tailwind shell with `/`, `/health`, `scripts/start.mjs` for `PORT` |

## Blocked

| ID | Blocker | Needed |
|----|---------|--------|
| — | — | — |
