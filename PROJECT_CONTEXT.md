# Project context

| Field | Value |
|--------|--------|
| **Owner** | Daelin Hulse |
| **Product** | OperatorOS |
| **Status** | Phase 0–1 resolution (markdown + deployable shell) |
| **Last updated** | 2026-05-10 |
| **Canonical roadmap** | `Document-Exchange/operatoros_master_roadmap.docx` (do not delete or overwrite) |

## What OperatorOS is

OperatorOS is an **AI-assisted operational intelligence platform for industrial facilities**. It is **not** a generic document summarizer or a chat-first product. It is a **spatial, facility-aware operating layer** that turns scattered plant knowledge (drawings, SOPs, ECPs, scans, training, tribal terminology) into **fast, reviewed, operator-ready action**.

## Founding thesis

Industrial facilities do not mainly lack knowledge; they lack a **usable interface** between knowledge and action under pressure. OperatorOS is the **compatibility layer**: map documents and signals to **areas, systems, assets, and conditions**, attach **verified procedures** and **sources**, and close the loop with **operator feedback** and **admin review**.

## Core operating chain

Every feature should align with this chain when possible:

**Facility → Area → System → Asset → (Component) → Condition / Alarm → Verified procedure → Source documents → Review status → Operator feedback → Approved update**

A shorter navigation promise from the roadmap:

**Area → System → Asset → Alarm / Condition → Verified action path**

## Design north star: fifteen-second test

If an operator is moving toward an urgent condition, can they reach the **right asset, condition, procedure, safety context, and reviewed source material** in under fifteen seconds?

## First wedge (from roadmap)

Initial domain depth: **waste-to-energy and similar** safety-sensitive, documentation-heavy environments; lateral expansion only after proof.

## Non-negotiables for implementers

1. **Facility graph is the durable asset**; UI and models may change.
2. **Review state is core infrastructure**, not cosmetic (no silent “AI truth” in operations).
3. **Source-backed retrieval** over unconstrained generation for operational instructions.
4. **Conflicts and gaps are first-class** (surfaced, not hidden).

## Repository layout (high level)

| Location | Purpose |
|----------|---------|
| `Document-Exchange/` | Master roadmap and future exchanged docs (protected) |
| Repo-root `*.md` | Project operating memory for humans and AI agents |
| `src/` | Web application (Phase 2+) |

## Dependencies between documents

- **`PRODUCT_ROADMAP.md`** sets phased direction; **`MVP_SPEC.md`** constrains near-term build.
- **`ARCHITECTURE.md`** and **`DATA_MODEL.md`** must stay consistent; breaking changes require **`DECISIONS.md`** + **`CHANGELOG.md`**.
- **`TASKS.md`** is the execution ledger; **`COMPOSER_INSTRUCTIONS.md`** defines how agents update it.

## Next actions

1. Stabilize app shell (build, preview, Railway).
2. Begin Phase 1 roadmap exit: prototype graph + seed demo path (see `MVP_SPEC.md`).
