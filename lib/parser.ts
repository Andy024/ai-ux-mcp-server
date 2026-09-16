import { readFileSync } from "node:fs";
import { join } from "node:path";
import { load as loadYaml } from "js-yaml";

export interface UXPattern {
  id: string;
  name: string;
  category: string;
  type: "pattern" | "principle";
  source: { name: string; url: string };
  what_it_is: string;
  when_to_use: string[];
  do_not_use_when: string[];
  why_to_use: string;
  examples: { product: string; description: string }[];
  risk: string;
}

let cachedPatterns: UXPattern[] | null = null;

const YAML_BLOCK_RE = /```yaml\r?\n([\s\S]*?)```/g;

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isValidPattern(value: unknown): value is UXPattern {
  if (value === null || typeof value !== "object") {
    return false;
  }

  const obj = value as Record<string, unknown>;

  if (typeof obj.id !== "string" || obj.id.length === 0) return false;
  if (typeof obj.name !== "string") return false;
  if (typeof obj.category !== "string") return false;
  if (obj.type !== "pattern" && obj.type !== "principle") return false;
  if (typeof obj.what_it_is !== "string") return false;
  if (!isStringArray(obj.when_to_use)) return false;
  if (!isStringArray(obj.do_not_use_when)) return false;
  if (typeof obj.why_to_use !== "string") return false;
  if (typeof obj.risk !== "string") return false;

  if (obj.source === null || typeof obj.source !== "object") return false;
  const source = obj.source as Record<string, unknown>;
  if (typeof source.name !== "string" || typeof source.url !== "string") {
    return false;
  }

  if (!Array.isArray(obj.examples)) return false;
  for (const example of obj.examples) {
    if (example === null || typeof example !== "object") return false;
    const ex = example as Record<string, unknown>;
    if (typeof ex.product !== "string" || typeof ex.description !== "string") {
      return false;
    }
  }

  return true;
}

function loadPatternsFromFile(): UXPattern[] {
  const filePath = join(process.cwd(), "data", "ai-ux-pattern-library.md");
  const content = readFileSync(filePath, "utf8");
  const patterns: UXPattern[] = [];

  let match: RegExpExecArray | null;
  let blockIndex = 0;

  while ((match = YAML_BLOCK_RE.exec(content)) !== null) {
    blockIndex += 1;
    const yamlText = match[1];

    try {
      const parsed = loadYaml(yamlText);
      if (!isValidPattern(parsed)) {
        console.warn(
          `Skipping YAML block #${blockIndex}: missing required fields or invalid shape`,
        );
        continue;
      }
      patterns.push(parsed);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`Skipping YAML block #${blockIndex}: failed to parse — ${message}`);
    }
  }

  return patterns;
}

/**
 * Parse all YAML pattern blocks from the AI UX pattern library.
 * Result is cached after the first call for the lifetime of the serverless instance.
 */
export function parsePatternLibrary(): UXPattern[] {
  if (cachedPatterns !== null) {
    return cachedPatterns;
  }
  cachedPatterns = loadPatternsFromFile();
  return cachedPatterns;
}

/**
 * Sorted unique category values across all pattern library entries.
 */
export function getCategories(): string[] {
  const categories = new Set(parsePatternLibrary().map((p) => p.category));
  return Array.from(categories).sort();
}
