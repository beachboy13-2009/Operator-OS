# MVP specification

| Field | Value |
|--------|--------|
| **Owner** | Daelin Hulse |
| **Status** | Draft (aligned to master roadmap) |
| **Last updated** | 2026-05-10 |
| **Dependencies** | `PROJECT_CONTEXT.md`, `PRODUCT_ROADMAP.md`, `DATA_MODEL.md` |

## MVP intent

Prove the **core miracle**: fragmented facility documents become a **spatial, reviewed, operator-ready action path** — not a summary inbox.

## MVP scope (must ship for “MVP demo”)

### Facility and graph

- **One demo facility** with **3–5 areas**.
- **One fully modeled high-value system** (e.g. vacuum/condenser **or** ash handling).
- **10–30 seed or mock documents** with **source excerpts** (simulated ingestion acceptable for MVP).
- **Asset graph** including aliases, location, linked documents, and conditions.

### Operator experience

- **Mobile-first** navigation.
- **Flagship flow**: **Vacuum Pump → Low Pressure Alarm** end-to-end (see scenario below).
- Core path: open app → select facility → **Area → System → Asset → Condition** → **verified action path** with **sources** and **review badge**.

### Governance

- **Review statuses** (minimum set from roadmap): extracted, draft, operator-suggested, supervisor-reviewed, engineering-approved, deprecated, conflict.
- **Operator feedback**: note, photo placeholder, wrong/missing flag, suggested alias.
- **Admin review queue** (approve / reject / edit / version).

### Training and gaps

- **Training module generation** for the modeled system (can be lightweight: structured outline + quiz stub).
- **Gap report** for missing areas, assets, procedures, or training links.

## Flagship demo scenario (acceptance narrative)

**Alarm**: Low pressure associated with the **vacuum system**.

**Flow**

1. Open OperatorOS on mobile.
2. Tap **Turbine / Condenser** (or equivalent demo area).
3. Tap **Vacuum System**.
4. Tap **Vacuum Pump A** (or demo asset).
5. Select **Low Pressure Alarm**.
6. View **immediate actions**, **warnings**, **likely causes**, **relevant drawing**, **source excerpts**, **review state**.
7. Submit **field note** if reality differs.

**Content examples** (from roadmap; replace with facility-specific copy as needed)

- Immediate actions: verify pump status, local indication, related alarms, escalate if worsening.
- Safety warning: do not isolate without authorized procedure and safe system state.
- Likely causes: air leak, seal water, pump fault, valve misposition, instrument fault, condenser-related condition.
- Sources: ECP excerpt, training doc, P&ID, maintenance note.
- Review badge example: supervisor-reviewed; engineering approval pending.

## MVP success criteria (pass / fail)

| Question | Pass condition |
|----------|----------------|
| Understand product in < 1 minute? | Yes: “tap area → asset → alarm → reviewed action path.” |
| Show why summaries are not enough? | Yes: sources mapped to **plant structure** + **procedure state**. |
| Demonstrate review safety? | Yes: **draft cannot masquerade** as approved procedure. |
| Expose facility gaps? | Yes: dashboard shows missing docs / procedures / assets / training. |
| Facility manager sees their plant in it? | Yes: realistic **language, assets, documents, alarms**. |
| AI agents can continue development? | Yes: markdown suite + task ledger + decisions + changelog (this repo). |

## Explicitly out of MVP (unless promoted via `DECISIONS.md`)

- Full CMMS/LMS/SharePoint integrations.
- Production-grade OCR / multi-tenant auth at scale.
- 3D twin as a requirement (optional substrate later).
- Wearable / passive mapping.

## Next actions

1. Implement **Phase 1 prototype graph** with seed JSON or minimal DB (decision pending — document in `DECISIONS.md`).
2. Build **Operator Navigator** screens against the graph API (future task).
