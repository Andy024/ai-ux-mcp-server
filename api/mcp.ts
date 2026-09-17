import type { VercelRequest, VercelResponse } from "@vercel/node";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import * as z from "zod/v4";
import {
  getCategories,
  getPatternsByIds,
  parsePatternLibrary,
  type UXPattern,
} from "../lib/parser.js";

type PatternSummary = Pick<
  UXPattern,
  "id" | "name" | "category" | "type"
>;

function toSummary(pattern: UXPattern): PatternSummary {
  return {
    id: pattern.id,
    name: pattern.name,
    category: pattern.category,
    type: pattern.type,
  };
}

function textResult(data: unknown, isError = false) {
  return {
    content: [
      {
        type: "text" as const,
        text: typeof data === "string" ? data : JSON.stringify(data, null, 2),
      },
    ],
    ...(isError ? { isError: true } : {}),
  };
}

const COMPACT_NUDGE =
  "Returns compact identifiers only — call get_pattern for one id, or get_patterns for multiple ids, to get full detail (what it is, when to use, examples, risk) before explaining a pattern to the user.";

function createServer(): McpServer {
  const server = new McpServer({
    name: "ai-ux-mcp-server",
    version: "0.1.0",
  });

  server.registerTool(
    "search_patterns",
    {
      description: `Case-insensitive substring search across pattern name, description, and when_to_use. Returns up to 8 compact summaries. ${COMPACT_NUDGE}`,
      inputSchema: {
        query: z.string().describe("Search query string"),
      },
    },
    async ({ query }) => {
      const needle = query.toLowerCase();
      const matches: PatternSummary[] = [];

      for (const pattern of parsePatternLibrary()) {
        const haystack = [
          pattern.name,
          pattern.what_it_is,
          pattern.when_to_use.join(" "),
        ]
          .join(" ")
          .toLowerCase();

        if (haystack.includes(needle)) {
          matches.push(toSummary(pattern));
          if (matches.length >= 8) break;
        }
      }

      return textResult(matches);
    },
  );

  server.registerTool(
    "filter",
    {
      description: `Filter patterns by category and/or type (pattern | principle). At least one filter is required. ${COMPACT_NUDGE}`,
      inputSchema: {
        category: z
          .string()
          .optional()
          .describe("Category slug to filter by (e.g. authoring-input)"),
        type: z
          .enum(["pattern", "principle"])
          .optional()
          .describe("Entry type to filter by"),
      },
    },
    async ({ category, type }) => {
      if (category === undefined && type === undefined) {
        return textResult(
          "Error: provide at least one filter — category and/or type.",
          true,
        );
      }

      const results = parsePatternLibrary()
        .filter((pattern) => {
          if (category !== undefined && pattern.category !== category) {
            return false;
          }
          if (type !== undefined && pattern.type !== type) {
            return false;
          }
          return true;
        })
        .map(toSummary);

      return textResult(results);
    },
  );

  server.registerTool(
    "get_pattern",
    {
      description:
        "Return the full pattern object for a single id (all fields). Use this only when you need detail for one id; prefer get_patterns when fetching several.",
      inputSchema: {
        id: z.string().describe("Pattern id (e.g. raw-text-input)"),
      },
    },
    async ({ id }) => {
      const pattern = parsePatternLibrary().find((p) => p.id === id);
      if (!pattern) {
        return textResult(
          `Error: pattern id "${id}" does not exist.`,
          true,
        );
      }
      return textResult(pattern);
    },
  );

  server.registerTool(
    "get_patterns",
    {
      description:
        "Return full pattern objects for multiple ids in one call (all fields, same order as input). Prefer this over repeated get_pattern calls when you already know several ids. Missing ids appear as { id, error: \"not_found\" } in that position without failing the batch.",
      inputSchema: {
        ids: z
          .array(z.string())
          .min(1)
          .max(25)
          .describe("Pattern ids to fetch (1–25)"),
      },
    },
    async ({ ids }) => {
      return textResult(getPatternsByIds(ids));
    },
  );

  server.registerTool(
    "list_categories",
    {
      description: `List all unique category values in the pattern library so you can filter by valid options. ${COMPACT_NUDGE}`,
      inputSchema: {},
    },
    async () => {
      return textResult(getCategories());
    },
  );

  return server;
}

function renderInfoPage(mcpUrl: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AI UX Pattern Library — MCP Server</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <style>
    :root {
      color-scheme: light;
      --primary: #ffb238;
      --secondary: #1b2838;
      --tertiary: #f8f4ec;
      --neutral: #f8f7f3;
      --surface: #ffffff;
      --muted: #5c6b7a;
      --border: #c5ced8;
      --success: #2f9e5a;
      --success-soft: #9fe8ac;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      background: var(--neutral);
      color: var(--secondary);
      font-family: Inter, system-ui, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.01em;
    }
    a {
      color: var(--secondary);
      text-decoration: none;
    }
    a:hover { color: var(--secondary); }
    .shell {
      display: grid;
      grid-template-columns: 220px minmax(0, 1fr);
      gap: 0;
      max-width: 1100px;
      margin: 0 auto;
      min-height: 100vh;
    }
    .nav {
      position: sticky;
      top: 0;
      align-self: start;
      height: 100vh;
      overflow-y: auto;
      padding: 32px 20px;
      background: var(--surface);
      border-right: 1px solid var(--border);
      scrollbar-width: thin;
      scrollbar-color: transparent transparent;
    }
    .nav:hover {
      scrollbar-color: #c5ced880 transparent;
    }
    .nav::-webkit-scrollbar {
      width: 6px;
    }
    .nav::-webkit-scrollbar-track {
      background: transparent;
    }
    .nav::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 9999px;
    }
    .nav:hover::-webkit-scrollbar-thumb {
      background: #c5ced880;
    }
    .nav:hover::-webkit-scrollbar-thumb:hover {
      background: #c5ced8;
    }
    .nav-brand {
      font-family: Fraunces, Georgia, serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.02em;
      margin: 0 0 8px;
      color: var(--secondary);
    }
    .nav-hint {
      margin: 0 0 24px;
      font-size: 13px;
      line-height: 1.4;
      color: var(--muted);
    }
    .nav-label {
      display: block;
      margin: 20px 0 8px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.02em;
      color: var(--muted);
    }
    .nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    .nav li { margin: 0; }
    .nav a {
      display: block;
      padding: 8px 12px;
      margin-bottom: 2px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.3;
      color: var(--secondary);
      border-left: 3px solid transparent;
    }
    .nav a:hover {
      background: var(--tertiary);
    }
    .nav a:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 1px;
    }
    .nav .sub a {
      padding-left: 20px;
      font-size: 13px;
      font-weight: 400;
      color: var(--muted);
    }
    .nav .sub a:hover {
      color: var(--secondary);
      background: var(--tertiary);
    }
    .page-footer {
      margin-top: 64px;
      padding-top: 24px;
      border-top: 1px solid var(--border);
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }
    .page-footer .footer-copy {
      min-width: 0;
    }
    .page-footer .footer-name {
      margin: 0 0 4px;
      font-family: Fraunces, Georgia, serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.02em;
      color: var(--secondary);
    }
    .page-footer .footer-tagline {
      margin: 0;
      font-size: 14px;
      line-height: 1.4;
      color: var(--muted);
    }
    .page-footer .footer-social {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    .page-footer .footer-social a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: 1px solid var(--border);
      border-radius: 9999px;
      background: var(--surface);
      color: var(--secondary);
    }
    .page-footer .footer-social a:hover {
      background: var(--primary);
      border-color: #e09a20;
    }
    .page-footer .footer-social svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
    .content {
      padding: 40px 40px 96px;
      max-width: 44rem;
    }
    h1 {
      font-family: Fraunces, Georgia, serif;
      font-size: 36px;
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin: 0 0 16px;
      color: var(--secondary);
    }
    h2 {
      font-family: Fraunces, Georgia, serif;
      font-size: 26px;
      font-weight: 400;
      line-height: 1.2;
      letter-spacing: -0.02em;
      margin: 0 0 12px;
      padding-top: 8px;
      color: var(--secondary);
      scroll-margin-top: 24px;
    }
    h3 {
      font-family: Fraunces, Georgia, serif;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.01em;
      margin: 0 0 12px;
      color: var(--secondary);
      scroll-margin-top: 24px;
    }
    p {
      margin: 0 0 12px;
      color: var(--secondary);
    }
    .lead {
      font-size: 18px;
      line-height: 1.4;
      color: var(--secondary);
    }
    .section {
      margin-top: 48px;
    }
    .section:first-of-type { margin-top: 0; }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 20px 0 0;
    }
    .chip {
      display: inline-block;
      background: var(--surface);
      color: var(--muted);
      border: 1px solid var(--border);
      border-radius: 9999px;
      padding: 6px 12px;
      font-size: 13px;
      font-weight: 500;
      line-height: 1.4;
    }
    .tool-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 16px;
    }
    .tool-card, .client-card, .verify {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px;
    }
    .tool-card {
      padding: 18px 20px;
    }
    .tool-card strong {
      display: block;
      font-size: 15px;
      font-weight: 600;
      line-height: 1.3;
      margin-bottom: 6px;
      color: var(--secondary);
    }
    .tool-card code {
      font-size: 12px;
      color: var(--muted);
      background: var(--tertiary);
      border-color: var(--border);
    }
    .url-callout {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin: 16px 0 24px;
      padding: 16px 20px;
      background: var(--primary);
      color: var(--secondary);
      border-radius: 12px;
      border: 1px solid #e09a20;
    }
    .url-callout .label {
      font-size: 13px;
      font-weight: 600;
      line-height: 1.2;
    }
    .url-callout .url {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
      font-size: 14px;
      font-weight: 600;
      word-break: break-all;
      color: var(--secondary);
    }
    .clients {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .client-card ol {
      margin: 0 0 16px;
      padding-left: 1.25rem;
      color: var(--secondary);
    }
    .client-card li {
      margin: 8px 0;
      font-size: 15px;
      line-height: 1.45;
      color: var(--secondary);
    }
    .client-card ol ul {
      margin: 8px 0 4px;
      padding-left: 1.1rem;
      list-style: disc;
    }
    .client-card ol ul li {
      margin: 6px 0;
      font-size: 14px;
      line-height: 1.45;
    }
    code, pre {
      font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
    }
    code {
      background: var(--tertiary);
      border: 1px solid var(--border);
      border-radius: 4px;
      padding: 0.12rem 0.4rem;
      font-size: 0.88em;
      color: var(--secondary);
    }
    pre {
      margin: 0;
      padding: 16px;
      background: #f4f6f8;
      border: 1px solid var(--border);
      border-left: 4px solid var(--primary);
      border-radius: 8px;
      overflow-x: auto;
      color: var(--secondary);
      white-space: pre;
      line-height: 1.5;
      font-size: 13px;
      font-weight: 500;
    }
    .verify {
      border-left: 4px solid var(--success);
      background: var(--surface);
    }
    .verify .sample {
      margin: 16px 0 0;
      padding: 16px;
      background: var(--tertiary);
      border: 1px solid var(--border);
      border-radius: 8px;
      font-size: 15px;
      font-style: italic;
      font-weight: 500;
      color: var(--secondary);
    }
    @media (max-width: 860px) {
      .shell {
        grid-template-columns: 1fr;
      }
      .nav {
        position: relative;
        height: auto;
        max-height: none;
        overflow-y: visible;
        border-right: none;
        border-bottom: 1px solid var(--border);
        padding: 20px 16px;
        scrollbar-width: auto;
      }
      .nav ul {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .nav .sub { display: none; }
      .nav a {
        border-left: none;
        background: var(--tertiary);
        border: 1px solid var(--border);
      }
      .content {
        padding: 28px 16px 64px;
      }
      h1 { font-size: 28px; }
      .tool-grid { grid-template-columns: 1fr; }
      .page-footer {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  </style>
</head>
<body>
  <div class="shell">
    <nav class="nav" aria-label="Page sections">
      <p class="nav-brand">AI UX Patterns</p>
      <p class="nav-hint">Jump to a section</p>
      <ul>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#tools">What your AI can do</a></li>
        <li><a href="#connect">Connect</a></li>
      </ul>
      <span class="nav-label">Your app</span>
      <ul class="sub">
        <li><a href="#claude-desktop">Claude Desktop</a></li>
        <li><a href="#claude-code">Claude Code</a></li>
        <li><a href="#cursor">Cursor</a></li>
        <li><a href="#web">Claude.ai / ChatGPT</a></li>
        <li><a href="#vscode">VS Code</a></li>
        <li><a href="#codex">Codex</a></li>
      </ul>
      <ul style="margin-top:16px">
        <li><a href="#verify">Check it worked</a></li>
      </ul>
    </nav>

    <main class="content">
      <section id="overview" class="section">
        <h1>AI UX Pattern Library — MCP Server</h1>
        <p class="lead">This lets your AI assistant look up 386 UX patterns and principles from 14 industry sources when you ask design questions. Connect it once to the app you already use.</p>
        <div class="chips">
          <span class="chip">386 patterns</span>
          <span class="chip">22 categories</span>
          <span class="chip">Works with Claude, Cursor, ChatGPT &amp; more</span>
        </div>
      </section>

      <section id="tools" class="section">
        <h2>What your AI can do</h2>
        <p>After you connect, your assistant can use these tools automatically when you ask about AI UX.</p>
        <div class="tool-grid">
          <div class="tool-card">
            <strong>Search the library</strong>
            <code>search_patterns</code>
          </div>
          <div class="tool-card">
            <strong>Browse by topic or type</strong>
            <code>filter</code>
          </div>
          <div class="tool-card">
            <strong>Open one pattern’s full details</strong>
            <code>get_pattern</code>
          </div>
          <div class="tool-card">
            <strong>See every topic name</strong>
            <code>list_categories</code>
          </div>
        </div>
      </section>

      <section id="connect" class="section">
        <h2>Connect in 2 minutes</h2>
        <p>Pick the app you use from the left. Copy the block. Paste it where the steps say.</p>
        <div class="url-callout">
          <span class="label">Your server address</span>
          <span class="url">${mcpUrl}</span>
        </div>

        <div class="clients">
          <section class="client-card" id="claude-desktop">
            <h3>Claude Desktop</h3>
            <ol>
              <li>Open <code>claude_desktop_config.json</code> on your machine:
                <ul>
                  <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code> (typically <code>C:\Users\YourUsername\AppData\Roaming\Claude\claude_desktop_config.json</code>)</li>
                  <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                  <li><strong>Linux:</strong> <code>~/.config/Claude/claude_desktop_config.json</code></li>
                </ul>
              </li>
              <li>Paste the block below into your MCP servers list.</li>
              <li>Fully quit Claude Desktop, then reopen it.</li>
            </ol>
            <pre>{
  "mcpServers": {
    "ai-ux-patterns": {
      "command": "npx",
      "args": ["mcp-remote", "${mcpUrl}"]
    }
  }
}</pre>
          </section>

          <section class="client-card" id="claude-code">
            <h3>Claude Code (CLI)</h3>
            <ol>
              <li>Open your terminal.</li>
              <li>Run the command below.</li>
            </ol>
            <pre>claude mcp add ai-ux-patterns --transport http ${mcpUrl}</pre>
          </section>

          <section class="client-card" id="cursor">
            <h3>Cursor</h3>
            <ol>
              <li>Open your Cursor MCP settings (<code>mcp.json</code>).</li>
              <li>Paste the block below.</li>
            </ol>
            <pre>{
  "mcpServers": {
    "ai-ux-patterns": {
      "url": "${mcpUrl}"
    }
  }
}</pre>
          </section>

          <section class="client-card" id="web">
            <h3>Claude.ai / ChatGPT (web)</h3>
            <ol>
              <li>Go to Settings → Connectors → Add custom connector.</li>
              <li>Paste this URL:</li>
            </ol>
            <pre>${mcpUrl}</pre>
          </section>

          <section class="client-card" id="vscode">
            <h3>VS Code (GitHub Copilot)</h3>
            <ol>
              <li>Create <code>.vscode/mcp.json</code> in your project.</li>
              <li>Paste the block below.</li>
            </ol>
            <pre>{
  "servers": {
    "ai-ux-patterns": {
      "url": "${mcpUrl}"
    }
  }
}</pre>
          </section>

          <section class="client-card" id="codex">
            <h3>Codex</h3>
            <ol>
              <li>Open Settings → MCP Servers → add a custom server.</li>
              <li>Choose type <strong>Streamable HTTP</strong>, name it <code>ai-ux-patterns</code>.</li>
              <li>Paste this URL:</li>
            </ol>
            <pre>${mcpUrl}</pre>
          </section>
        </div>
      </section>

      <section id="verify" class="section">
        <h2>Check it worked</h2>
        <div class="verify">
          <p>Ask your AI assistant something like this. If it’s connected, the answer should mention specific pattern names and sources from this library.</p>
          <p class="sample">use the ai ux patterns mcp ,  can you tell me what all ai pattern would be useful for create travel  agent that help user to search the ticket</p>
        </div>
      </section>

      <footer class="page-footer">
        <div class="footer-copy">
          <p class="footer-name">Anand Padia</p>
          <p class="footer-tagline">Design Leadership for AI-Native UX</p>
        </div>
        <div class="footer-social" aria-label="Social links">
          <a href="https://www.linkedin.com/in/anand-padia-72bb1815/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.youtube.com/@UserInsightHub" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a2.997 2.997 0 00-2.11-2.121C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.388.519A2.997 2.997 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.997 2.997 0 002.11 2.121c1.883.519 9.388.519 9.388.519s7.505 0 9.388-.519a2.997 2.997 0 002.11-2.121C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="https://www.mdelighto.com" target="_blank" rel="noopener noreferrer" aria-label="Website mdelighto.com">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
          </a>
        </div>
      </footer>
    </main>
  </div>
</body>
</html>`;
}

function methodNotAllowed(res: VercelResponse): void {
  res.status(405).json({
    jsonrpc: "2.0",
    error: {
      code: -32000,
      message: "Method not allowed.",
    },
    id: null,
  });
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (req.method === "GET") {
    const host = String(req.headers.host ?? "localhost");
    const protoHeader = req.headers["x-forwarded-proto"];
    const proto =
      typeof protoHeader === "string"
        ? protoHeader.split(",")[0].trim()
        : host.includes("localhost")
          ? "http"
          : "https";
    const mcpUrl = `${proto}://${host}/api/mcp`;
    res
      .status(200)
      .setHeader("Content-Type", "text/html; charset=utf-8")
      .send(renderInfoPage(mcpUrl));
    return;
  }

  if (req.method === "DELETE") {
    methodNotAllowed(res);
    return;
  }

  if (req.method !== "POST") {
    methodNotAllowed(res);
    return;
  }

  const server = createServer();
  try {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableJsonResponse: true,
    });

    await server.connect(transport);

    res.on("close", () => {
      void transport.close();
      void server.close();
    });

    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error("Error handling MCP request:", error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: "Internal server error",
        },
        id: null,
      });
    }
  }
}
