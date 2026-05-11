# Architecture

| Field | Value |
|--------|--------|
| **Owner** | Daelin Hulse |
| **Status** | Active (shell phase) |
| **Last updated** | 2026-05-10 |
| **Dependencies** | `DATA_MODEL.md`, `MVP_SPEC.md` |

## Principles

1. **Facility graph first** — APIs and UI serve the graph; documents are evidence, not the primary navigation tree.
2. **Explicit review plane** — No “hidden” promotion of AI or draft content to operational truth.
3. **Pipeline-oriented AI (future)** — Ingestion, extraction, relationship mapping, procedure drafting, gap detection, and feedback processing are **separate pipelines** with structured outputs, confidence, and queues (see master roadmap §9).
4. **Boring ops** — Observability, audit logs, and deployment simplicity beat clever architecture early.

## Current system (Phase 2 shell)

Single **static SPA** deployed as static files:

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** for styling
- **React Router** for client-side routes (`/` home, `/health` status)

**Production serving**: static `dist/` output is served with **host `0.0.0.0`** and **`PORT` from environment** (Railway). See `scripts/start.mjs` and `package.json`.

## Target logical architecture (post-shell)

```text
[Client: Operator + Admin apps]
        |
        v
[API / BFF]  — authz, review transitions, audit
        |
        v
[Graph + document store]  — entities, edges, source excerpts, review state
        |
        +---- [Object storage]  — originals, rendered pages, attachments
        |
        +---- [Job workers]  — OCR, extraction, embedding, evals (future)
```

## Deployment

- **Railway**: Node buildpack; `npm run build` then `npm run start`.
- **Environment**: `PORT` provided by platform; no secrets required for shell.

## Future cross-cutting concerns (placeholders)

- **Offline**: cache approved procedures + map tiles for critical paths.
- **Multi-tenant**: facility isolation at data layer.
- **Audit export**: immutable history of review decisions.

## Next actions

1. Add API boundary sketch when Phase 1 graph storage is chosen.
2. Define observability stack (logging/metrics) before first pilot.
