# Product roadmap

| Field | Value |
|--------|--------|
| **Owner** | Daelin Hulse |
| **Status** | Active |
| **Last updated** | 2026-05-10 |
| **Source** | `Document-Exchange/operatoros_master_roadmap.docx` |

This file tracks **product direction and phased outcomes**. Detailed MVP acceptance is in **`MVP_SPEC.md`**. Technical structure is in **`ARCHITECTURE.md`** / **`DATA_MODEL.md`**.

## One-line positioning

OperatorOS turns **facility knowledge** into **location-aware operational action**.

## Product layers (conceptual)

1. **Ingest and structure** — Pull documents into a **facility knowledge graph** (areas, systems, assets, alarms, procedures, sources, review states, gaps).
2. **Navigate** — Mobile-first **spatial / plant-logical** navigation (not folder-first search under pressure).
3. **Iterate** — Operator feedback, supervisor/engineering/safety review, versioning, publish rules.
4. **Expose gaps** — Missing procedures, unmapped alarms, stale drawings, unresolved nicknames, siloed contractor data.
5. **Capture** — Field notes, photos, walkthroughs, future scan/wearable pipelines (later phases).

## Core pillars (roadmap summary)

| Pillar | MVP expression | Long-term |
|--------|----------------|-----------|
| Ingest | Uploads / seed docs; source cards | Continuous sync from systems of record |
| Map | Area / system / asset graph with confidence | 2D/3D spatial substrate, time-aware state |
| Navigate | Mobile path to asset + condition | Offline-first, role-aware |
| Verify | Review states on procedures and graph edges | Full governance + audit exports |
| Train | Modules tied to reviewed graph | Adaptive role paths |
| Capture | Notes, flags, alias suggestions | Walkthrough + contractor pipelines |
| Improve | Gap backlog | “Operational brain” suggestions post-incident |

## Roadmap phases (from master roadmap)

| Phase | Goal | Deliverable | Exit criteria |
|-------|------|-------------|----------------|
| **0. Resolution sprint** | Turn vision into executable workspace | Markdown suite + task graph | MVP scope “frozen enough”; decisions captured |
| **1. Prototype graph** | One modeled area + seed docs | Graph + source cards + asset pages | Navigate Area → System → Asset → Condition |
| **2. Operator navigator** | Emergency / procedure flow | Map + condition pages | **Vacuum pump low pressure** demo end-to-end |
| **3. Review system** | Feedback + approvals | Queue, statuses, versions | Drafts cannot publish without review |
| **4. Training generator** | Role modules from graph | Quizzes, explainers | Training links back to assets/procedures |
| **5. Gap engine** | Completeness + backlog | Dashboard | Actionable gap backlog |
| **6. Capture workflows** | Field → graph via review | Photo/voice/scan tasks | New data enters through review |
| **7. Pilot package** | Sales-ready demo | Demo env + story | Decision-maker “gets it” in ~15 minutes |
| **8. Operator brain** | Higher intelligence on mature graph | Briefings, incident follow-ups | Measurable post-event learning loop |

## Current phase

**Phase 0** — Markdown operating memory + minimal deployable web shell (no product graph, auth, DB, or AI pipelines yet).

## What OperatorOS is not (guardrails)

- Not a **generic AI chatbot** (chat may exist; it is not the center).
- Not a **document summarizer** (summaries may exist; **mapping + verification + action** are the core).
- Not a **CMMS/EAM replacement** at launch (integrate / sit above first).
- Not a **beauty-first digital twin** (visuals serve time-to-action).

## Risks (see also `DECISIONS.md`)

- “Slippery slope” to unconstrained LLM answers in emergencies → enforce **modes**, **review states**, and **source display**.
- Enterprise integration scope creep → keep **wedge: one high-value area** until proof.

## Next review

When moving from Phase 0 → 1: confirm **demo facility** assumptions and flagship **Vacuum Pump → Low Pressure** narrative in `MVP_SPEC.md`.
