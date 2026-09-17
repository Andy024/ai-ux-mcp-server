# PROJECT_CONTEXT — AI UX MCP Server

Agent-facing context for this repo. Read this before changing code, deploying, or extending tools.

## What this is

API-only **Model Context Protocol (MCP)** server that exposes an AI UX pattern library to LLM clients. Deployed as a **Vercel serverless function** using **stateless Streamable HTTP** transport. No frontend, no `public/` directory, no static site output.

- **386** entries in `data/ai-ux-pattern-library.md` (fenced YAML blocks)
- Mix of `type: pattern` and `type: principle`
- **22** fixed category slugs (see library header)

## Layout

```
ai-ux-mcp-server/
├── api/mcp.ts              # Vercel handler + MCP tools
├── lib/parser.ts           # YAML extract/parse/cache
├── data/ai-ux-pattern-library.md   # Source of truth for patterns
├── package.json            # ESM; typecheck only (no build script)
├── tsconfig.json           # ES2022, module NodeNext, strict
├── vercel.json             # includeFiles + rewrites only
└── PROJECT_CONTEXT.MD      # This file
```

## Runtime flow

1. Client `POST`s MCP JSON-RPC to `/api/mcp` (all paths rewrite there via `vercel.json`).
2. Handler creates a fresh `McpServer` + `StreamableHTTPServerTransport` per request (`sessionIdGenerator: undefined`, `enableJsonResponse: true`).
3. Tools call `parsePatternLibrary()` / `getCategories()` from `lib/parser.ts`.
4. Parser reads the markdown once per cold instance, extracts ` ```yaml ` blocks, parses with `js-yaml`, validates shape, caches in a module-level variable.

- **GET** → HTML connection guide (Delighto-styled), with MCP URL derived from `Host` / `x-forwarded-proto`.
- **DELETE** (and other non-POST) → `405` JSON-RPC.
- **POST** → MCP Streamable HTTP (stateless).

## Production

- Site: https://ai-ux-mcp-server.vercel.app/
- MCP endpoint: https://ai-ux-mcp-server.vercel.app/api/mcp
- Do not hardcode the domain in tool configs inside `api/mcp.ts`; the guide interpolates it from the request.

## Domain model

`UXPattern` (see `lib/parser.ts`):

| Field | Notes |
|-------|--------|
| `id` | Stable slug (e.g. `raw-text-input`) |
| `name` | Display name |
| `category` | One of 22 taxonomy slugs |
| `type` | `"pattern"` \| `"principle"` |
| `source` | `{ name, url }` provenance |
| `what_it_is` | Description |
| `when_to_use` / `do_not_use_when` | `string[]` |
| `why_to_use` | Rationale |
| `examples` | `{ product, description }[]` |
| `risk` | Caveat |

**Compact summary** (search/filter tools): `{ id, name, category, type }` only.

Parser helpers: `getPatternsByIds` (O(1) map lookup).

## MCP tools

| Tool | Input | Behavior |
|------|--------|----------|
| `search_patterns` | `{ query }` | Case-insensitive substring on `name`, `what_it_is`, `when_to_use` joined; max **8** summaries |
| `filter` | `{ category?, type? }` | At least one filter required; all matching summaries |
| `get_pattern` | `{ id }` | Full object or not-found error (single id) |
| `get_patterns` | `{ ids }` (1–25) | Full objects in input order; `{ id, error: "not_found" }` per miss |
| `list_categories` | `{}` | Sorted unique categories |

Inputs validated with Zod (`zod/v4`), registered via `server.registerTool`.

## Deploy / local

- **Production:** https://ai-ux-mcp-server.vercel.app/ (MCP at `/api/mcp`).
- **Config:** `vercel.json` must stay API-only: `functions.api/mcp.ts.includeFiles` for the markdown + `rewrites`. Never add `buildCommand`, `outputDirectory`, or a `public/` folder.
- **package.json:** There is **no** `"build"` script on purpose. A `tsc` build caused Vercel to treat this as a static site. Keep `"typecheck": "tsc --noEmit"` for local checks.
- **Asset shipping:** NFT will not auto-bundle the markdown; `includeFiles` is required.
- **Local:** `vercel dev`. Do not invent a frontend build step.

## Conventions & constraints

- **ESM:** `"type": "module"`. Import local modules with `.js` extensions in TS source (e.g. `../lib/parser.js`).
- **Parser failures:** Bad YAML or invalid shape → `console.warn` and skip; never crash the whole parse. Prefer fixing the markdown (quote strings that contain `:`) over softening validation.
- **Data file:** Prefer editing YAML blocks in `data/ai-ux-pattern-library.md` for content fixes. Keep field names and category taxonomy consistent.
- **Scope:** This project is the MCP API surface + parser. Do not add a UI, static export, or session store unless explicitly requested.

## Quick verification

```bash
npm run typecheck
# Optional: smoke-parse via tsx importing parsePatternLibrary() — expect 386 valid, 0 skipped
```

## Pointers

- Tool registration / transport patterns: `@modelcontextprotocol/sdk` examples `simpleStatelessStreamableHttp`, JSON response mode.
- Pattern taxonomy and entry counts: header of `data/ai-ux-pattern-library.md`.
