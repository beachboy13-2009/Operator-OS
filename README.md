# OperatorOS

**OperatorOS** is an AI-assisted **operational intelligence** platform for industrial facilities: a **spatial, facility-aware** layer from **area → system → asset → condition** to **verified procedures**, **sources**, **operator feedback**, and **admin review**. It is intentionally **not** a generic document summarizer.

## Repository contents

| Area | Description |
|------|-------------|
| **`Document-Exchange/`** | Master roadmap (`operatoros_master_roadmap.docx`) and future exchanged docs — **do not delete or overwrite** |
| **Root `*.md`** | Project operating memory (context, roadmap, MVP, architecture, tasks, decisions, changelog, composer instructions) |
| **`src/`** | Web application (Vite + React + TypeScript + Tailwind) |

Start with **`PROJECT_CONTEXT.md`** and **`COMPOSER_INSTRUCTIONS.md`** if you are an AI agent joining the project.

## Prerequisites

- [Node.js](https://nodejs.org/) **20+** (LTS recommended; CI and Railway typically use 20 or 22)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). Routes:

- **`/`** — OperatorOS home
- **`/health`** — simple status payload for checks

## Production build

```bash
npm run build
```

Output is written to **`dist/`**.

## Production start (Railway)

```bash
npm run start
```

This runs `vite preview` on **`0.0.0.0`**, using the **`PORT`** environment variable when set (Railway), otherwise **4173**. The wrapper lives in **`scripts/start.mjs`** so `PORT` works on Windows and Linux without shell-specific syntax.

### Railway checklist

1. Connect the GitHub repo to Railway (new service from repo).
2. Use defaults: **build** `npm run build`, **start** `npm run start`.
3. Ensure Node 20+ in the environment (Railway/Nixpacks usually auto-detects from `package.json` / lockfile).

## Scripts reference

| Script | Purpose |
|--------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | TypeScript transpile (via Vite) + production bundle to `dist/` |
| `npm run preview` | Local preview of `dist/` (default Vite preview port) |
| `npm run start` | Preview `dist/` bound for hosting (`PORT` / `0.0.0.0`) |

## License

Not specified. Add a `LICENSE` file when you choose one.
