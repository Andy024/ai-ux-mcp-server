---
name: ai-ux-pattern-suggestions
description: Use this skill whenever presenting AI UX patterns from the ai-ux-patterns MCP server as a recommendation or suggestion list for a stated problem or use case. Applies after gathering pattern data via search_patterns, filter, get_pattern, or get_patterns — this skill governs only how the final list is formatted, not which patterns are chosen.
---

# AI UX Pattern Suggestion Formatting

When presenting a list of AI UX patterns as suggestions/recommendations for a stated problem, follow this exact structure. Pattern selection itself is a reasoning task — read each candidate pattern's what_it_is, when_to_use, and why_to_use and judge genuine relevance to the stated problem before including it. Do not defer that judgment to keyword matching.

## Structure

Opening line — include only if the user described a specific problem or use case:

    Below are the suggested patterns for {problem, restated in the user's own words}:

If no specific problem or use case was stated (e.g. a generic "what patterns exist" or "list all patterns" question), do not return a list of patterns at all. Instead, ask the user what problem or use case they're trying to solve, since suggestions are only meaningful in that context. Only produce the formatted list once a specific problem has been given.

Pattern list — flat list, no section headers, no grouping by category or phase. One entry per pattern, each on its own line with a blank line between entries:

    **{Pattern Name}** – Use this pattern when you want to {plain-language reason, lowercase first letter, no trailing period duplication}.

The reason should be a plain-language rephrasing of why the pattern helps — not a copy-pasted risk note, source citation, or example. Keep each reason to a single clause.

## What NOT to include

- No section headers or phase groupings (e.g. no "Search phase" / "Booking phase" subdivisions)
- No risk notes
- No source links or citations
- No examples
- No numbered lists — use the flat **Name** – format only
- No closing summary or disclaimer line

## Example

Input: "what patterns would help a travel agent that lets users search for tickets"

Output:

    Below are the suggested patterns for a travel agent that helps users search tickets:

    **Turn-by-turn interview** – Use this pattern when you want to ask the user one thing at a time instead of one big confusing form.

    **Smart Comparison** – Use this pattern when you want to show options side-by-side in a table so they're easy to compare.

    **Suggest / Confirm / Execute** – Use this pattern when you want the agent to propose an action but always get user confirmation before executing something costly or irreversible.
