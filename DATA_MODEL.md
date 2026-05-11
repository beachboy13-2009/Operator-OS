# Data model

| Field | Value |
|--------|--------|
| **Owner** | Daelin Hulse |
| **Status** | Active (conceptual) |
| **Last updated** | 2026-05-10 |
| **Dependencies** | `MVP_SPEC.md`, `ARCHITECTURE.md` |

## Purpose

Describe the **canonical facility graph** and **review semantics** so engineering, AI agents, and safety reviewers share one vocabulary.

## Core entity types (nodes)

Aligned to the master roadmap (§4.2, §7.1). Names here are **logical**; physical storage (SQL, graph DB, document store) is TBD.

| Entity | Description | Example metadata |
|--------|-------------|------------------|
| **Facility** | Top-level site | Name, timezone, hazards profile |
| **Area** | Physical region | Name, aliases, map coordinates, risk tags |
| **System** | Functional grouping | Purpose, dependencies, normal state, failure modes |
| **Asset** | Tagged equipment | Tag, aliases, location, status |
| **Component** | Sub-asset (optional) | Parent asset, BOM ref |
| **Condition** | Alarm or abnormal state | Severity, immediate actions, linked procedures |
| **Procedure** | ECP / SOP / guide | Steps, hold points, hazards, scope, effective dates |
| **Document** | Controlled or reference file | Type, revision, source confidence |
| **Source excerpt** | Cited span | Pointer to page/region, text, confidence |
| **Hazard** | Safety constraint | Category, mandatory approvals |
| **Training module** | Learning unit | Role targets, prerequisites |
| **Feedback item** | Field submission | Submitter, status, reviewer |
| **Gap item** | Detected missing knowledge | Type, severity, suggested task |
| **Review decision** | Audit record | Who/when/outcome |

## Core relationships (edges)

Examples from roadmap §7.1 (non-exhaustive):

- `Area` **contains** `System` / `Asset` (via `located_in` / composition)
- `Asset` **belongs_to** `System`
- `Asset` **has_alarm** → `Condition`
- `Condition` **has_procedure** → `Procedure`
- `Procedure` / `Document` **sourced_from** → `Source excerpt` or `Document`
- `Feedback item` **targets** graph node(s)
- `Procedure` / edge **reviewed_by** → `Review decision`
- `Alias` **nickname_of** → `Asset` (verified)
- `Gap item` **missing_for** → node or edge pattern

## Review and confidence states

Every operational artifact should carry **visibility rules** (from roadmap §7.2):

| State | Meaning | Operator visibility |
|-------|---------|---------------------|
| **Extracted** | AI or parser proposed link; no human review | Internal / clearly labeled |
| **Drafted** | Proposed procedure or explanation | Training or review context only |
| **Operator-suggested** | Field submission | Pending supervisor |
| **Supervisor-reviewed** | Ops lead approved practical use | Show with badge |
| **Engineering-approved** | Technical authority confirmed | Highest technical trust |
| **Safety-approved** | Required for high-risk emergency language | Required where policy demands |
| **Deprecated** | Superseded or incorrect | Hidden from default; retained for audit |
| **Conflict** | Contradictory sources or field vs controlled | Flagged; resolution workflow |

## Data products (analytics surfaces)

- Map confidence by **area**.
- System **completeness** (docs, procedures, alarms, training).
- **Asset knowledge card** (single page aggregates).
- **Procedure readiness** score.
- **Gap backlog** and **training readiness** by role.

## MVP persistence (open decision)

Shell phase has **no database**. For Phase 1, choose one and record in **`DECISIONS.md`**:

- **A.** Static JSON + Git (fastest for demo)
- **B.** Embedded SQLite / Postgres (closer to production)

## Next actions

1. Freeze **field names** for API (`snake_case` vs `camelCase`) when BFF is introduced.
2. Add ER diagram or property graph diagram after storage decision.
