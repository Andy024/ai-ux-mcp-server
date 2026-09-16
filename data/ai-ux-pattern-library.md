# AI UX Pattern Library

A structured, machine-readable reference of UX patterns for designing AI product experiences, curated from 13 named industry sources (Google PAIR, Microsoft HAX Toolkit, Apple HIG for ML, Shape of AI, aiuxpatterns.com, aiuxdesign.guide, and others).

Each pattern is documented as a fenced YAML block so it can be parsed individually by a script or an AI agent, while staying readable as markdown for humans.

## Category taxonomy

Every pattern's `category` field is drawn from this fixed, unified list of 22
values — consistent across all 14 sources, independent of which source a
pattern came from. `source` (name + url) carries provenance separately, so
filtering or grouping by `category` reliably returns every relevant pattern
regardless of origin.

## Pattern vs. principle

Every entry also carries a `type` field: `pattern` (has one concrete,
sketchable UI form — a control, layout, or component a designer could draw)
or `principle` (a decision heuristic, strategy, or design goal with no single
UI form, typically satisfied by several different patterns). Of 386 entries,
**282 are patterns and 104 are principles.** Whole sources are effectively
guidebooks rather than pattern catalogs (Google PAIR, Microsoft HAX Toolkit)
and contribute principles only; others (aiuxpatterns.com, Shape of AI, AI UX
Playground) are genuine pattern catalogs and contribute patterns almost
exclusively.

- `authoring-input` — how users construct and submit a prompt or input
- `onboarding-discovery` — first-use guidance, starting points, capability discovery
- `configuration-tuning` — settings, parameters, and behavior controls
- `output-presentation` — how AI results are displayed and structured
- `iterative-editing` — refining, regenerating, or transforming existing output
- `oversight-control` — human control over automation level and AI actions
- `memory-context` — retaining and reusing context across turns or sessions
- `trust-transparency` — explanations, confidence, citations, provenance
- `branding-identity` — the AI's visual and character identity
- `agentic-autonomy` — patterns specific to autonomous, multi-step agent behavior
- `error-recovery` — handling and recovering from AI or user mistakes
- `feedback-learning` — capturing feedback and improving the system over time
- `privacy-data-governance` — data collection, training data, and privacy practices
- `safety-harm-prevention` — guardrails against harmful or unsafe output
- `personalization-context-awareness` — adapting to individual user context and behavior
- `natural-interaction` — conversational, multimodal, and expectation-setting patterns
- `performance-efficiency` — perceived speed, caching, and status visibility
- `accessibility-inclusion` — equitable access across abilities and languages
- `business-monetization` — pricing, usage limits, and cost transparency
- `collaboration-handoff` — shared authorship between human and AI, or human-to-human via AI
- `spatial-placement` — where in the UI the AI surface lives
- `strategic-evaluation` — whether and how to apply AI to a problem at all

---

## Source: aiuxpatterns.com

### Category: Authoring

### Raw Text Input
```yaml
id: raw-text-input
name: Raw Text Input
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  The most basic prompt input, a free-form text field where the user types
  directly to the AI with no structure imposed.
when_to_use:
  - The task is open-ended and hard to pre-structure
  - Users are experienced enough to write clear prompts unassisted
  - Speed of entry matters more than guiding the user toward quality input
do_not_use_when:
  - Novice users need scaffolding to write an effective prompt
  - The task requires specific structured fields (e.g. multi-parameter generation)
why_to_use: >
  Gives maximum flexibility and matches the lowest-friction mental model
  people already have from search boxes and chat apps.
examples:
  - product: ChatGPT
    description: Core composer box accepts any free-form text prompt
  - product: Claude.ai
    description: Same open text input as the primary interaction surface
risk: >
  Novice users often submit vague prompts and get low-quality results,
  blaming the model rather than the input.
```

### Image Input
```yaml
id: image-input
name: Image Input
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Lets the user upload or paste an image as part of the prompt, for
  multimodal understanding or image-to-image generation.
when_to_use:
  - The task is easier to describe visually than in words (e.g. style reference)
  - The model supports multimodal input
  - Visual context materially changes the output
do_not_use_when:
  - The underlying model is text-only
  - Uploading adds friction without improving output quality
why_to_use: >
  Removes the burden of describing visual concepts in words, which is
  often imprecise and time-consuming.
examples:
  - product: Midjourney
    description: Accepts reference images to guide style and composition
  - product: GPT-4o / ChatGPT
    description: Accepts image uploads for visual Q&A and editing tasks
risk: >
  Users may upload sensitive or copyrighted images without understanding
  how that data is stored or used.
```

### Voice Input
```yaml
id: voice-input
name: Voice Input
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/voice-input
what_it_is: >
  Lets the user speak their prompt with visual feedback (listening,
  processing states) instead of typing it.
when_to_use:
  - Hands-free or eyes-free context (driving, cooking, accessibility)
  - Faster input speed than typing is a priority
do_not_use_when:
  - Environment is noisy or privacy-sensitive
why_to_use: >
  Lowers the barrier to interaction and supports accessibility and
  hands-free use cases, especially with clear state feedback.
examples:
  - product: ChatGPT Voice Mode
    description: Full spoken conversation with visual listening/processing indicators
risk: >
  Without clear state feedback, users can't tell if the system is listening, thinking, or stuck.
```

### Inline Suggestions
```yaml
id: inline-suggestions
name: Inline Suggestions
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  The AI proposes completions or next words directly inside the input
  field as the user types, similar to autocomplete.
when_to_use:
  - The task is repetitive enough that predictions are usually correct
  - Users benefit from speed more than full creative control
do_not_use_when:
  - Suggestions are frequently wrong, creating distraction
  - The writing task is highly personal or creative
why_to_use: >
  Speeds up composition and reduces typing effort for predictable content.
examples:
  - product: Gmail Smart Compose
    description: Suggests sentence completions while composing email
  - product: GitHub Copilot
    description: Suggests code completions inline in the editor
risk: >
  Over-reliance can homogenize writing style and reduce the user's own voice.
```

### Prompt Quality Feedback
```yaml
id: prompt-quality-feedback
name: Prompt Quality Feedback
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Real-time feedback on how well-formed or specific a prompt is before
  submission, so users can improve it proactively.
when_to_use:
  - Output quality is highly sensitive to prompt specificity
  - New users are likely to under-specify their request
do_not_use_when:
  - The system already produces good results from vague prompts
  - Feedback would add friction without improving outcomes
why_to_use: >
  Reduces failed generations and re-prompting cycles by coaching better
  input before the model runs.
examples:
  - product: Midjourney web app
    description: Flags underspecified prompts and suggests additions
risk: >
  Overly aggressive feedback can feel patronizing or slow down expert users.
```

### Structured Prompt
```yaml
id: structured-prompt
name: Structured Prompt
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Breaks the prompt into discrete labeled fields (e.g. subject, style,
  tone) instead of one free-text box.
when_to_use:
  - The task has known, repeatable parameters
  - Consistency across generations matters
do_not_use_when:
  - The task is genuinely open-ended or exploratory
why_to_use: >
  Improves output consistency and makes prompting accessible to
  non-expert users.
examples:
  - product: Jasper AI templates
    description: Structured fields for tone, audience, and format per content type
risk: >
  Can feel rigid and limit creative or unexpected outputs.
```

### Paginated Prompt
```yaml
id: paginated-prompt
name: Paginated Prompt
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Splits a long or complex prompt into a multi-step, page-by-page flow
  instead of one large input.
when_to_use:
  - The task has many parameters that would overwhelm a single screen
  - Users benefit from being guided step by step
do_not_use_when:
  - The task is simple and a single field suffices
why_to_use: >
  Reduces cognitive load by chunking complex configuration into
  digestible steps.
examples:
  - product: Character.ai character creation
    description: Multi-step wizard for defining a custom AI persona
risk: >
  Adds friction and steps for users who just want a fast result.
```

### Editing Assistance
```yaml
id: editing-assistance
name: Editing Assistance
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  AI helps refine or correct the user's existing prompt or draft rather
  than generating from scratch.
when_to_use:
  - User has a rough draft and needs polish, not a fresh generation
do_not_use_when:
  - User explicitly wants a from-scratch alternative
why_to_use: >
  Preserves user intent and voice while improving clarity or correctness.
examples:
  - product: Grammarly
    description: Suggests edits to existing text without rewriting it wholesale
risk: >
  Can overwrite the user's intended tone if suggestions are accepted blindly.
```

### Configurable Controls
```yaml
id: configurable-controls
name: Configurable Controls
category: configuration-tuning
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Exposes sliders, toggles, or dropdowns that let users tune generation
  parameters directly, alongside or instead of text prompting.
when_to_use:
  - Users need precise, repeatable control over specific output dimensions
do_not_use_when:
  - Parameters are too technical for the target audience
why_to_use: >
  Gives users predictable, fine-grained control without needing prompt
  engineering skill.
examples:
  - product: ElevenLabs voice settings
    description: Sliders for stability, style, and clarity in voice generation
risk: >
  Too many controls overwhelm casual users and increase abandonment.
```

### Cloze Passage
```yaml
id: cloze-passage
name: Cloze Passage
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  A fill-in-the-blank style prompt template where the user only supplies
  the missing pieces within a fixed sentence structure.
when_to_use:
  - The desired output format is highly consistent across uses
do_not_use_when:
  - Output needs to vary structurally between uses
why_to_use: >
  Minimizes user effort while guaranteeing structurally consistent output.
examples:
  - product: Ad copy generators
    description: '"Write a [tone] headline for [product] targeting [audience]" style templates'
risk: >
  Feels restrictive for anything beyond the narrow template it was built for.
```

### Reference Material
```yaml
id: reference-material
name: Reference Material
category: authoring-input
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Lets users attach source documents, links, or files the AI should
  ground its response in.
when_to_use:
  - Output needs to be grounded in specific user-supplied facts or content
do_not_use_when:
  - The task doesn't benefit from external grounding
why_to_use: >
  Improves accuracy and relevance by anchoring generation to real,
  user-provided context instead of only model knowledge.
examples:
  - product: NotebookLM
    description: Grounds all answers in uploaded source documents
risk: >
  Users may over-trust outputs as fully accurate just because a source was attached.
```

### Prompt Templates
```yaml
id: prompt-templates
name: Prompt Templates
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/templates
what_it_is: >
  Pre-written, reusable prompt starting points users select and
  customize instead of writing from a blank field.
when_to_use:
  - Common use cases repeat across the user base
  - New users need a starting point to overcome blank-page friction
do_not_use_when:
  - Use cases are too varied for templates to meaningfully help
why_to_use: >
  Lowers the barrier to a good first prompt and teaches effective
  prompting by example.
examples:
  - product: Claude.ai prompt library
    description: Curated starting prompts organized by task type
risk: >
  Can anchor users to narrow use cases they wouldn't have discovered otherwise.
```

### Prompt Placeholder Values
```yaml
id: prompt-placeholder-values
name: Prompt Placeholder Values
category: onboarding-discovery
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Greyed-out example text shown inside an empty prompt field to
  illustrate the kind of input expected.
when_to_use:
  - Users are unsure what to type or how specific to be
do_not_use_when:
  - The task is self-explanatory
why_to_use: >
  Reduces blank-page anxiety and sets expectations for input style
  and specificity.
examples:
  - product: ChatGPT composer
    description: Rotating example prompts shown as placeholder text
risk: >
  Users sometimes mistake placeholder text for pre-filled content and submit it unedited.
```

### Inline Help
```yaml
id: inline-help
name: Inline Help
category: onboarding-discovery
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Contextual guidance or tooltips shown near a specific control or
  input, explaining what it does or how to use it, without leaving
  the current flow.
when_to_use:
  - A specific control's purpose isn't self-evident
  - Full documentation would be overkill for the moment
do_not_use_when:
  - The interface is already self-explanatory
why_to_use: >
  Reduces confusion and support burden without forcing users out of
  their current task.
examples:
  - product: Notion AI tooltips
    description: Short explanatory tooltips on AI-specific controls
risk: >
  Overused inline help clutters the interface and gets ignored.
```

### Category: Settings

### Model Selection
```yaml
id: model-selection
name: Model Selection UI
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/model-selection-ui
what_it_is: >
  Lets users choose between AI models trading off speed and quality,
  with clear labeling of what each option costs in wait time.
when_to_use:
  - Multiple models with meaningfully different speed/quality tradeoffs exist
do_not_use_when:
  - The distinction between models is too technical for the audience
why_to_use: >
  Gives users control over cost, speed, and quality tradeoffs suited
  to their specific task, and sets expectations for wait time upfront.
examples:
  - product: Claude.ai model picker
    description: Choose between model tiers labeled by relative speed and depth
risk: >
  Too many options with unclear practical differences create decision paralysis.
```

### Thread Options
```yaml
id: thread-options
name: Thread Options
category: configuration-tuning
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Controls for managing an individual conversation thread, such as
  renaming, archiving, sharing, or deleting it.
when_to_use:
  - Users have many ongoing conversations to organize
do_not_use_when:
  - The product is single-session by design
why_to_use: >
  Supports long-term use of a conversational product by keeping
  history manageable.
examples:
  - product: ChatGPT sidebar
    description: Rename, share, archive, and delete conversation threads
risk: >
  Poor thread organization at scale makes past conversations hard to find.
```

### Thread History
```yaml
id: thread-history
name: Thread History
category: memory-context
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  A persistent, browsable list of past conversations the user can
  revisit or continue.
when_to_use:
  - Users return to the product across multiple sessions
  - Past context has ongoing value
do_not_use_when:
  - Sessions are meant to be ephemeral by design
why_to_use: >
  Lets users pick up where they left off and reference prior work
  without re-explaining context.
examples:
  - product: ChatGPT
    description: Full searchable history of past conversations
risk: >
  Without good search or organization, history becomes an unusable pile.
```

### Generation Tokens
```yaml
id: generation-tokens
name: Generation Tokens
category: configuration-tuning
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Exposes or limits the length/cost of a generation via a token budget
  setting, often tied to usage limits or output length.
when_to_use:
  - Cost or length tradeoffs are meaningful to the user or business model
do_not_use_when:
  - Abstracting this away entirely would be simpler for the audience
why_to_use: >
  Gives transparency into usage limits and lets users control output
  length or cost directly.
examples:
  - product: API playgrounds (OpenAI, Anthropic)
    description: Max tokens setting controls generation length and cost
risk: >
  Highly technical framing (raw token counts) confuses non-technical users.
```

### Category: Results

### Result Options
```yaml
id: result-options
name: Result Options
category: output-presentation
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  A menu of actions available on a generated result, such as copy,
  share, save, or export.
when_to_use:
  - Users need to do something with the output beyond just reading it
do_not_use_when:
  - The result is disposable and has no downstream use
why_to_use: >
  Reduces friction in moving AI output into the user's actual workflow.
examples:
  - product: ChatGPT message actions
    description: Copy, regenerate, read aloud, and more per response
risk: >
  Overloading the options menu buries the most-used actions.
```

### Result Variations
```yaml
id: result-variations
name: Result Variations
category: output-presentation
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Presents multiple alternative outputs for the same prompt side by
  side, letting the user compare and pick.
when_to_use:
  - The task is subjective or creative with no single correct answer
  - Generation is cheap enough to produce several options
do_not_use_when:
  - There is one clearly correct answer
why_to_use: >
  Leverages the model's probabilistic nature to give users real choice
  instead of a single guess.
examples:
  - product: Midjourney
    description: Generates a 2x2 grid of image variations per prompt
  - product: Google Gemini
    description: Offers multiple drafts to choose from
risk: >
  Choice overload can slow decision-making if too many variations are shown.
```

### Result Actions
```yaml
id: result-actions
name: Result Actions
category: output-presentation
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Inline actions attached directly to a specific result, such as
  refine, expand, or use-as-reference.
when_to_use:
  - Users commonly need to iterate on a specific output
do_not_use_when:
  - Results are final and not meant to be iterated on
why_to_use: >
  Keeps iteration fast by acting directly on the result instead of
  re-writing the whole prompt.
examples:
  - product: Midjourney
    description: Upscale, vary, or remix buttons attached to each generated image
risk: >
  Too many inline actions clutter the result and slow scanning.
```

### Show Citations
```yaml
id: show-citations
name: Show Citations
category: trust-transparency
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Displays the sources the AI drew on to produce its answer, typically
  as inline links or footnotes.
when_to_use:
  - Factual accuracy and verifiability matter
  - High-stakes domains like research, health, finance, or legal
do_not_use_when:
  - The task is purely creative with no factual grounding
why_to_use: >
  Builds trust and lets users verify claims instead of accepting them
  on faith.
examples:
  - product: Perplexity
    description: Every claim is footnoted with a clickable source
  - product: Google NotebookLM
    description: Links each answer to the specific part of the uploaded document
risk: >
  Fabricated or mismatched citations are worse than none, since they
  create false confidence.
```

### Result Rendered Preview
```yaml
id: result-rendered-preview
name: Result Rendered Preview
category: output-presentation
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Shows a live, formatted preview of the output (e.g. rendered code,
  formatted document) instead of raw text.
when_to_use:
  - Output has a visual or structural form distinct from raw text
do_not_use_when:
  - Output is plain prose with no meaningful rendering
why_to_use: >
  Lets users evaluate output in its real, usable form immediately.
examples:
  - product: Claude Artifacts
    description: Renders generated code or documents live alongside the chat
  - product: v0 by Vercel
    description: Renders generated UI components as a live preview
risk: >
  Rendering can hide underlying errors that only show up in raw output.
```

### Timeline
```yaml
id: timeline
name: Timeline
category: output-presentation
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Presents AI output structured chronologically, useful for
  research, history, or sequential event data.
when_to_use:
  - The underlying content has a natural time-based structure
do_not_use_when:
  - Content has no meaningful temporal dimension
why_to_use: >
  Makes time-based information easier to scan and understand than
  flat prose.
examples:
  - product: Perplexity research timelines
    description: Presents event-based research results chronologically
risk: >
  Forcing a timeline structure onto non-sequential content confuses more than it clarifies.
```

### Object Oriented
```yaml
id: object-oriented
name: Object Oriented
category: output-presentation
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Presents AI output as structured, interactive objects (cards, entities)
  rather than flat text, each with its own properties and actions.
when_to_use:
  - The output represents discrete real-world entities (products, people, places)
do_not_use_when:
  - Output is a single continuous answer with no discrete entities
why_to_use: >
  Makes structured data scannable and actionable instead of buried in
  paragraphs.
examples:
  - product: Perplexity Shopping
    description: Product results shown as structured cards with price and actions
risk: >
  Over-structuring free-form answers into rigid objects can lose nuance.
```

### Category: Editing

### Full Result Regeneration
```yaml
id: full-result-regeneration
name: Full Result Regeneration
category: iterative-editing
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Discards the current output entirely and generates a completely new
  one from the same prompt.
when_to_use:
  - The current output missed the mark entirely
  - User wants to see a different take, not a refinement
do_not_use_when:
  - Only part of the output needs fixing (use Partial Regeneration instead)
why_to_use: >
  Gives users an easy escape hatch when a generation simply doesn't work.
examples:
  - product: ChatGPT
    description: Regenerate response button replaces the whole answer
risk: >
  Repeated full regeneration without prompt changes often produces
  similarly flawed results.
```

### Partial Regeneration
```yaml
id: partial-regeneration
name: Partial Regeneration
category: iterative-editing
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Regenerates only a selected portion of the output while preserving
  the rest.
when_to_use:
  - Most of the output is good but one section needs rework
do_not_use_when:
  - The whole output is flawed (use Full Result Regeneration instead)
why_to_use: >
  Saves user effort and preserves good parts of a generation instead of
  starting over.
examples:
  - product: Notion AI
    description: Select and regenerate a specific paragraph without touching the rest
risk: >
  Can create inconsistency in tone or style between the untouched and regenerated sections.
```

### Category: Agents

### AI Agent Initial Command
```yaml
id: ai-agent-initial-command
name: AI Agent Initial Command
category: agentic-autonomy
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  The entry point where a user gives an autonomous agent its starting
  goal or task, distinct from a single-turn prompt.
when_to_use:
  - The system will operate autonomously across multiple steps or tools
do_not_use_when:
  - The interaction is a single-turn request-response
why_to_use: >
  Sets clear scope and success criteria before the agent begins
  independent work.
examples:
  - product: Claude Code
    description: Initial task description that kicks off an autonomous coding session
  - product: Devin
    description: Initial ticket/task assignment that starts an agent run
risk: >
  A vague initial command leads to the agent pursuing the wrong goal
  for many steps before anyone notices.
```

### Agent Action Review & Confirm
```yaml
id: agent-action-review-confirm
name: Agent Action Review & Confirm
category: agentic-autonomy
type: pattern
source:
  name: aiuxpatterns.com
  url: https://www.aiuxpatterns.com/patterns.html
what_it_is: >
  Presents an agent's proposed action for user review and explicit
  approval before it is executed.
when_to_use:
  - The action is consequential, costly, or hard to reverse
  - Trust in the agent's judgment is still being established
do_not_use_when:
  - The action is low-risk and reversible
why_to_use: >
  Keeps a human in the loop for high-stakes decisions while still
  letting the agent do the heavy lifting.
examples:
  - product: GitHub Copilot Workspace
    description: Proposes a plan and file changes for review before applying them
  - product: Claude Code
    description: Asks for confirmation before running destructive commands
risk: >
  Too many confirmation prompts create approval fatigue, and users
  start clicking "yes" without reading.
```

---

## Source: Shape of AI

### Category: Wayfinders

### Example Gallery
```yaml
id: example-gallery
name: Example Gallery
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A curated showcase of sample outputs or use cases shown before the
  user starts, to illustrate what's possible.
when_to_use:
  - New users don't know what the product can do
  - The range of possible outputs is wide and worth demonstrating
do_not_use_when:
  - The product's capability is self-evident from a single glance
why_to_use: >
  Reduces blank-page anxiety and teaches capability through
  demonstration rather than explanation.
examples:
  - product: Midjourney community feed
    description: Gallery of community-generated images as inspiration
risk: >
  Can anchor users to only the styles shown, narrowing their sense of what's possible.
```

### Follow Up
```yaml
id: follow-up
name: Follow Up
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Suggests a relevant next question or action after the AI responds,
  guiding the user deeper into the conversation.
when_to_use:
  - Natural next steps exist after most responses
do_not_use_when:
  - The interaction is meant to be a single, complete exchange
why_to_use: >
  Keeps users engaged and helps them discover capabilities they
  wouldn't have thought to ask about.
examples:
  - product: Perplexity
    description: Suggests related follow-up questions after every answer
risk: >
  Can feel like the product is steering the conversation rather than serving user intent.
```

### Initial CTA
```yaml
id: initial-cta
name: Initial CTA
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  The primary call-to-action that invites the user into their first
  interaction with the AI.
when_to_use:
  - First-time entry point into any AI product
do_not_use_when:
  - N/A, applies broadly at onboarding
why_to_use: >
  Sets the tone and lowers the barrier to the very first action a new
  user takes.
examples:
  - product: ChatGPT homepage
    description: '"Message ChatGPT" input as the single, obvious first action'
risk: >
  A weak or generic CTA fails to communicate what the product actually does.
```

### Nudges
```yaml
id: nudges
name: Nudges
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Small, contextual prompts that encourage the user toward a
  particular action or capability they haven't tried.
when_to_use:
  - A valuable feature is underused or undiscovered
do_not_use_when:
  - Nudging would interrupt a focused task
why_to_use: >
  Increases feature discovery without a full onboarding flow.
examples:
  - product: Notion AI
    description: Contextual prompt suggesting AI assistance while writing
risk: >
  Frequent nudges become noise and get ignored or disabled.
```

### Prompt Details
```yaml
id: prompt-details
name: Prompt Details
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Expandable guidance shown near the input field explaining what
  makes an effective prompt for this specific tool.
when_to_use:
  - Prompt quality strongly affects output quality
do_not_use_when:
  - The tool works well with minimal prompting
why_to_use: >
  Teaches better prompting in context, right when it's useful.
examples:
  - product: Midjourney prompt guide
    description: In-product tips on structuring effective image prompts
risk: >
  If too verbose, it gets skipped entirely.
```

### Randomize
```yaml
id: randomize
name: Randomize
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A button that generates a random prompt or starting point for the
  user, removing the need to think of one.
when_to_use:
  - Users often face blank-page paralysis
  - Exploration and serendipity are part of the product's value
do_not_use_when:
  - Users always arrive with a specific, known goal
why_to_use: >
  Lowers the barrier to starting and can spark ideas the user wouldn't
  have thought of.
examples:
  - product: 'Midjourney "surprise me"'
    description: Generates a random creative prompt to explore
risk: >
  Overused, it signals the product doesn't understand user intent.
```

### Suggestions
```yaml
id: suggestions
name: Suggestions
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A set of pre-written prompt options shown to help the user start,
  often tailored to context.
when_to_use:
  - Common starting points exist for most users
do_not_use_when:
  - Use cases are too varied for generic suggestions to help
why_to_use: >
  Reduces first-use friction and demonstrates capability simultaneously.
examples:
  - product: ChatGPT starter prompts
    description: Example prompt chips shown on a new chat
risk: >
  Generic suggestions that don't match the user's actual need feel irrelevant.
```

### Templates
```yaml
id: templates-wayfinder
name: Templates
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Pre-built starting structures for common tasks that the user selects
  and customizes.
when_to_use:
  - Recurring task types benefit from a proven starting structure
do_not_use_when:
  - Tasks are too unique for templates to add value
why_to_use: >
  Speeds up common workflows and demonstrates best-practice structure.
examples:
  - product: Jasper AI
    description: Content templates for blog posts, ads, and emails
risk: >
  Overuse of templates can make output feel generic and undifferentiated.
```

### Category: Inputs

### Auto-fill
```yaml
id: auto-fill
name: Auto-fill
category: personalization-context-awareness
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  AI pre-populates a field or form based on available context, which
  the user can accept or edit.
when_to_use:
  - Enough contextual data exists to make a confident guess
  - The field is repetitive or predictable
do_not_use_when:
  - Confidence in the guess is low
why_to_use: >
  Saves user effort on predictable, low-risk input.
examples:
  - product: Superhuman
    description: Auto-fills draft replies based on email context
risk: >
  Wrong auto-fills that go unnoticed can introduce errors into final output.
```

### Chained Action
```yaml
id: chained-action
name: Chained Action
category: authoring-input
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets the user link multiple AI actions together in sequence within a
  single flow.
when_to_use:
  - Common workflows involve multiple sequential AI steps
do_not_use_when:
  - Tasks are single-step by nature
why_to_use: >
  Removes the friction of manually re-invoking the AI for each step of
  a multi-step task.
examples:
  - product: Zapier AI Actions
    description: Chains multiple AI steps together into one automated workflow
risk: >
  Errors early in the chain propagate and compound through later steps.
```

### Describe
```yaml
id: describe
name: Describe
category: authoring-input
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Asks the AI to describe or explain an existing piece of content
  (image, code, document) rather than generate something new.
when_to_use:
  - User needs understanding of existing content, not new output
do_not_use_when:
  - The task is generative, not explanatory
why_to_use: >
  Turns the AI into an interpretive aid for content the user already has.
examples:
  - product: Be My AI
    description: Describes images aloud for visually impaired users
risk: >
  Descriptions can miss nuance or context that a human would catch.
```

### Expand
```yaml
id: expand
name: Expand
category: iterative-editing
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets the user ask the AI to lengthen or add detail to existing
  content.
when_to_use:
  - Output is directionally right but too brief
do_not_use_when:
  - Content is already at the right length
why_to_use: >
  Iterative refinement without starting over from a blank prompt.
examples:
  - product: Notion AI
    description: '"Make longer" action on any block of AI-generated text'
risk: >
  Expanded content can become padded or repetitive rather than genuinely richer.
```

### Inline Action
```yaml
id: inline-action
name: Inline Action
category: authoring-input
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A contextual AI action triggered directly within existing content
  (e.g. highlight text, get an inline menu).
when_to_use:
  - The user is already working within a document or canvas
do_not_use_when:
  - There's no existing content to act on
why_to_use: >
  Keeps AI assistance in the user's existing flow instead of requiring
  a context switch.
examples:
  - product: Notion AI
    description: Highlight text to reveal an inline AI action menu
risk: >
  Inline menus can clutter the UI if triggered too aggressively.
```

### Inpainting
```yaml
id: inpainting
name: In-painting
category: iterative-editing
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/inpainting
what_it_is: >
  Lets the user select a specific region of an image for the AI to
  regenerate, leaving the rest untouched.
when_to_use:
  - Only part of a visual needs to change
do_not_use_when:
  - The whole image needs regeneration
why_to_use: >
  Precise, targeted editing without regenerating and losing the
  parts that already work.
examples:
  - product: Adobe Firefly Generative Fill
    description: Select a region and regenerate just that area
risk: >
  Seams between edited and original regions can look unnatural if blending is poor.
```

### Madlibs
```yaml
id: madlibs
name: Madlibs
category: authoring-input
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A fill-in-the-blank interface within a fixed sentence or template
  structure, similar to Cloze Passage but framed as playful input.
when_to_use:
  - Output format needs to stay consistent but personalized
do_not_use_when:
  - The task requires flexible, unstructured input
why_to_use: >
  Minimizes effort while guaranteeing structurally valid output.
examples:
  - product: AI greeting card generators
    description: Fixed template with blanks for name, occasion, and tone
risk: >
  Feels gimmicky or limiting outside of lightweight, casual use cases.
```

### Open Input
```yaml
id: open-input
name: Open Input
category: authoring-input
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  An unconstrained free-text field with no structure or guidance
  imposed, similar to Raw Text Input.
when_to_use:
  - Maximum flexibility is the priority
do_not_use_when:
  - Users need guidance to produce a good prompt
why_to_use: >
  Matches user expectations from familiar chat interfaces.
examples:
  - product: Claude.ai composer
    description: Fully open text field for any request
risk: >
  Provides no scaffolding for users who don't know what to ask.
```

### Regenerate
```yaml
id: regenerate
name: Regenerate
category: iterative-editing
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A single action to discard and re-run a generation, producing a new
  result from the same input.
when_to_use:
  - The result didn't meet expectations and a fresh attempt is worth trying
do_not_use_when:
  - The issue is with the prompt itself, not variance in generation
why_to_use: >
  Simple recovery path when output quality is unsatisfying.
examples:
  - product: ChatGPT
    description: Regenerate response button on any AI reply
risk: >
  Repeated regeneration without changing the prompt often yields similarly flawed results.
```

### Restructure
```yaml
id: restructure
name: Restructure
category: iterative-editing
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets the user ask the AI to reorganize existing content's structure
  (e.g. turn prose into bullets) without changing its substance.
when_to_use:
  - Content and quality are right but the format doesn't fit
do_not_use_when:
  - Both content and format need to change
why_to_use: >
  Reuses good content while adapting it to a different presentation need.
examples:
  - product: Notion AI
    description: '"Turn into bulleted list" action on existing text'
risk: >
  Restructuring can strip nuance that only worked in the original format.
```

### Restyle
```yaml
id: restyle
name: Restyle
category: iterative-editing
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Reapplies a different tone, voice, or visual style to existing
  content without changing its core meaning.
when_to_use:
  - The substance is right but the tone doesn't fit the audience
do_not_use_when:
  - Substance also needs to change
why_to_use: >
  Lets users adapt one piece of content for multiple audiences quickly.
examples:
  - product: Jasper AI tone adjuster
    description: Rewrite the same content in a different brand voice
risk: >
  Aggressive restyling can lose factual precision in pursuit of tone.
```

### Summary
```yaml
id: summary
name: Summary
category: iterative-editing
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Condenses long content into a shorter version that preserves key
  points.
when_to_use:
  - Source content is long and users need the gist quickly
do_not_use_when:
  - Every detail in the source matters and can't be lost
why_to_use: >
  Saves time processing long documents, calls, or threads.
examples:
  - product: Otter.ai meeting summaries
    description: Condenses long meeting transcripts into key takeaways
risk: >
  Summarization can drop nuance or context that changes meaning.
```

### Synthesis
```yaml
id: synthesis
name: Synthesis
category: iterative-editing
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Combines multiple separate inputs or sources into one coherent
  output.
when_to_use:
  - The user has several disparate sources that need unifying
do_not_use_when:
  - There's only one source to work from (use Summary instead)
why_to_use: >
  Saves the manual work of cross-referencing and combining multiple
  documents or data points.
examples:
  - product: NotebookLM
    description: Synthesizes an answer across multiple uploaded documents
risk: >
  Can silently blend conflicting sources into one falsely coherent answer.
```

### Transform
```yaml
id: transform
name: Transform
category: iterative-editing
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Converts content from one format or medium to another (e.g. sketch
  to code, text to image).
when_to_use:
  - The user has content in one form and needs it in another
do_not_use_when:
  - No meaningful format conversion is needed
why_to_use: >
  Bridges gaps between mediums that would otherwise require manual,
  skilled translation work.
examples:
  - product: v0 by Vercel
    description: Transforms a text description or image into working UI code
risk: >
  Fidelity loss is common in cross-medium transformation and may go unnoticed.
```

### Category: Tuners

### Attachments
```yaml
id: attachments
name: Attachments
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets users attach files, links, or data sources to ground or scope
  the AI's response.
when_to_use:
  - The task benefits from specific external context
do_not_use_when:
  - The task doesn't need external grounding
why_to_use: >
  Improves relevance and accuracy by scoping the AI to specific
  user-supplied material.
examples:
  - product: Claude.ai file uploads
    description: Attach documents for the AI to reference in its response
risk: >
  Users may not realize attached content could include sensitive information.
```

### Connectors
```yaml
id: connectors
name: Connectors
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Integrations that let the AI pull live data from external tools and
  services (calendar, email, CRM) rather than relying only on
  user-provided text.
when_to_use:
  - The task depends on live, external, or personal data
do_not_use_when:
  - All needed context can be supplied manually
why_to_use: >
  Removes the burden of manually copying context in from other tools.
examples:
  - product: Claude with Google Drive connector
    description: Pulls live document context from a connected account
risk: >
  Broad data access raises real privacy and permission-scoping concerns.
```

### Filters
```yaml
id: filters
name: Filters
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets users narrow the scope of AI behavior or output by excluding
  categories, topics, or styles.
when_to_use:
  - Certain outputs are consistently unwanted
do_not_use_when:
  - The default behavior already fits most needs
why_to_use: >
  Gives users control to avoid recurring, unwanted output categories.
examples:
  - product: Image generators with style exclusion filters
    description: Exclude certain visual styles from generation results
risk: >
  Overly aggressive filters can exclude valid, wanted results too.
```

### Model Management
```yaml
id: model-management
name: Model Management
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Settings for managing which AI model versions are active, available,
  or default for a given task.
when_to_use:
  - Multiple model versions with different capabilities coexist
do_not_use_when:
  - Only one model version is offered
why_to_use: >
  Lets teams or users standardize on model versions appropriate to
  their needs and budget.
examples:
  - product: Anthropic Console
    description: Select and manage which Claude model version to use per project
risk: >
  Model version sprawl without clear guidance leads to inconsistent output quality.
```

### Modes
```yaml
id: modes
name: Modes
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Distinct, named configurations of AI behavior the user can switch
  between (e.g. "creative" vs "precise" mode).
when_to_use:
  - Distinct, well-understood use cases warrant different default behavior
do_not_use_when:
  - Behavior differences are too subtle for users to understand or choose confidently
why_to_use: >
  Simplifies complex parameter tuning into a few understandable presets.
examples:
  - product: Bing Chat modes
    description: Creative, Balanced, and Precise conversation modes
risk: >
  Mode names that don't clearly map to real behavior differences confuse users.
```

### Parameters
```yaml
id: parameters
name: Parameters
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Raw, granular controls (temperature, top-p, etc.) exposed for
  advanced users to fine-tune model behavior directly.
when_to_use:
  - The audience is technical and wants precise control
do_not_use_when:
  - The audience is non-technical
why_to_use: >
  Gives expert users maximum control over model behavior for
  specialized use cases.
examples:
  - product: OpenAI Playground
    description: Exposes temperature, top-p, and other raw generation parameters
risk: >
  Meaningless to non-technical users and can produce erratic output if misused.
```

### Preset Styles
```yaml
id: preset-styles
name: Preset Styles
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A curated set of pre-configured style options users select from
  rather than configuring parameters manually.
when_to_use:
  - Common style categories cover most user needs
do_not_use_when:
  - Users need fully custom style control
why_to_use: >
  Makes style control accessible without requiring prompt engineering
  skill.
examples:
  - product: Midjourney style presets
    description: 'Selectable style references like "anime" or "photorealistic"'
risk: >
  Presets can feel limiting to users who want something in between options.
```

### Prompt Enhancer
```yaml
id: prompt-enhancer
name: Prompt Enhancer
category: authoring-input
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Automatically expands or improves a user's short prompt into a more
  detailed one before generation.
when_to_use:
  - Users tend to under-specify prompts
do_not_use_when:
  - Users are already prompt-savvy and want direct control
why_to_use: >
  Improves output quality from minimal user effort.
examples:
  - product: DALL-E prompt rewriting
    description: Automatically expands short prompts with more descriptive detail
risk: >
  Auto-expansion can drift away from what the user actually meant.
```

### Saved Styles
```yaml
id: saved-styles
name: Saved Styles
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets users save a custom style or configuration for reuse across
  future generations.
when_to_use:
  - Users repeatedly want the same style or configuration
do_not_use_when:
  - Style needs vary every time
why_to_use: >
  Removes repetitive reconfiguration for recurring use cases.
examples:
  - product: Jasper brand voice profiles
    description: Save a custom brand voice profile for reuse across content
risk: >
  Saved styles can go stale if not revisited as needs evolve.
```

### Voice and Tone
```yaml
id: voice-and-tone
name: Voice and Tone
category: configuration-tuning
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Explicit controls for setting the tone (formal, casual, persuasive)
  of generated text output.
when_to_use:
  - Tone materially affects how output will be used or received
do_not_use_when:
  - Tone is fixed and doesn't vary by use case
why_to_use: >
  Lets one tool serve multiple contexts without manual rewriting.
examples:
  - product: Grammarly tone detector and adjuster
    description: Set or detect the tone of written content
risk: >
  Tone controls can feel arbitrary if the resulting output doesn't clearly reflect the setting.
```

### Category: Governors

### Action Plan
```yaml
id: action-plan
name: Action Plan
category: agentic-autonomy
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  The AI presents a structured plan of intended steps before executing
  a multi-step task.
when_to_use:
  - The task involves multiple steps or tool calls
  - User oversight before execution adds value
do_not_use_when:
  - The task is a single simple step
why_to_use: >
  Lets users catch misunderstandings before the agent spends time or
  resources executing the wrong plan.
examples:
  - product: Claude Code
    description: Presents a plan for approval before making file changes
risk: >
  Plans can look reasonable but still miss important edge cases the user doesn't catch.
```

### Branches
```yaml
id: branches
name: Branches
category: iterative-editing
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets users fork a conversation or generation at a specific point to
  explore an alternative direction without losing the original.
when_to_use:
  - Users want to explore alternatives without losing existing progress
do_not_use_when:
  - Linear, single-path conversations are sufficient
why_to_use: >
  Encourages exploration by removing the fear of losing a good result.
examples:
  - product: ChatGPT conversation branching
    description: Edit an earlier message to create a new conversation branch
risk: >
  Too many branches become hard to track and compare.
```

### Citations
```yaml
id: citations-governor
name: Citations
category: trust-transparency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/citations
what_it_is: >
  Attaches verifiable sources, quality signals, and claim previews to
  AI-generated answers so users can inspect where each claim came from.
when_to_use:
  - Answers make factual claims that could be wrong or disputed
  - The domain rewards verifiability (research, news, search)
do_not_use_when:
  - Output is purely creative with no factual claims to source
why_to_use: >
  Turns AI from a black box into a transparent, verifiable system,
  and is one of the highest-leverage trust patterns to ship first.
examples:
  - product: Google AI Overviews
    description: Numbered citation markers with a sidebar of related source links
  - product: Perplexity
    description: Inline citation markers users can click to verify claims
risk: >
  Fake or decorative citation badges that don't link to real, checkable sources actively damage trust.
```

### Controls
```yaml
id: controls
name: Controls
category: oversight-control
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  General-purpose UI mechanisms (toggles, sliders, buttons) that let
  users govern how much autonomy the AI has.
when_to_use:
  - The AI can take actions of varying risk or reversibility
do_not_use_when:
  - The AI has no autonomous behavior to govern
why_to_use: >
  Keeps users in charge of automation level and prevents runaway
  autonomous behavior.
examples:
  - product: Gmail Smart Compose toggle
    description: Users can enable or disable the AI feature entirely
risk: >
  Controls buried too deep in settings go unused and unnoticed.
```

### Cost Estimates
```yaml
id: cost-estimates
name: Cost Estimates
category: business-monetization
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Shows the expected time, token, or monetary cost of an action before
  the user commits to it.
when_to_use:
  - Actions have meaningful, variable cost
do_not_use_when:
  - Cost is negligible or fixed
why_to_use: >
  Lets users make informed tradeoffs before triggering expensive
  operations.
examples:
  - product: API playgrounds
    description: Shows estimated token cost before running a prompt
risk: >
  Estimates that are frequently wrong erode trust in the feature.
```

### Draft Mode
```yaml
id: draft-mode
name: Draft Mode
category: oversight-control
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Clearly marks AI output as a draft requiring human review before it
  is treated as final or published.
when_to_use:
  - Output will be published or acted on externally
do_not_use_when:
  - Output is disposable and low-stakes
why_to_use: >
  Prevents unreviewed AI output from being mistaken for finished,
  human-approved work.
examples:
  - product: Gmail Smart Reply
    description: Suggested replies are clearly editable drafts, not sent automatically
risk: >
  Users can rubber-stamp drafts without real review if the distinction feels unimportant.
```

### Memory
```yaml
id: memory
name: Memory
category: memory-context
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets the AI retain information across sessions to personalize future
  interactions, with user visibility and control over what's stored.
when_to_use:
  - Personalization across sessions adds real value
  - Users would otherwise repeat the same context often
do_not_use_when:
  - Sessions are meant to be fully independent and private
why_to_use: >
  Reduces repetitive input and enables more personalized, continuous
  assistance.
examples:
  - product: ChatGPT Memory
    description: Remembers user facts across sessions with view/edit/delete controls
risk: >
  Users may not realize what's being remembered unless controls are clearly surfaced.
```

### References
```yaml
id: references
name: References
category: trust-transparency
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets users point the AI to specific external references it should
  weigh more heavily in its response.
when_to_use:
  - Certain sources should be prioritized over general model knowledge
do_not_use_when:
  - General model knowledge is sufficient
why_to_use: >
  Improves relevance and lets users steer the AI's evidence base
  directly.
examples:
  - product: Perplexity focus modes
    description: Restrict search grounding to specific source types
risk: >
  Over-restricting references can exclude relevant information.
```

### Sample Response
```yaml
id: sample-response
name: Sample Response
category: onboarding-discovery
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Shows an example of the kind of response the AI will give before the
  user commits to a full request.
when_to_use:
  - Users are unsure what kind of output to expect
do_not_use_when:
  - Output type is already obvious
why_to_use: >
  Sets expectations and reduces wasted generations from misunderstanding
  scope.
examples:
  - product: AI writing tools with preview snippets
    description: Shows a short sample before generating the full piece
risk: >
  A misleading sample can set expectations the full output doesn't meet.
```

### Shared Vision
```yaml
id: shared-vision
name: Shared Vision
category: collaboration-handoff
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A persistent, editable statement of goals or intent that the AI
  references throughout a session to stay aligned with the user.
when_to_use:
  - Long, multi-turn sessions risk drifting from original intent
do_not_use_when:
  - Interactions are short and single-purpose
why_to_use: >
  Keeps long sessions anchored to the user's actual goal instead of
  drifting turn by turn.
examples:
  - product: Project-based AI assistants with a persistent brief
    description: A pinned goal statement referenced throughout a long session
risk: >
  If not updated, a stale shared vision can misdirect later turns.
```

### Stream of Thought
```yaml
id: stream-of-thought
name: Stream of Thought
category: trust-transparency
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Displays the AI's intermediate reasoning steps as it works toward an
  answer, rather than just the final output.
when_to_use:
  - Transparency into reasoning builds trust or aids debugging
  - The task is complex enough that steps matter
do_not_use_when:
  - Reasoning detail would overwhelm or bore the user
why_to_use: >
  Builds trust and helps users catch reasoning errors before accepting
  a final answer.
examples:
  - product: Perplexity
    description: Shows research and reasoning steps before the final answer
  - product: Claude extended thinking
    description: Shows reasoning process for complex problems
risk: >
  Long reasoning traces can overwhelm users who just want the answer.
```

### Variations
```yaml
id: variations-governor
name: Variations
category: output-presentation
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Governs how many alternative outputs are generated and shown per
  request, similar to Result Variations but framed as a control setting.
when_to_use:
  - Users benefit from choice among several outputs
do_not_use_when:
  - Generation cost makes multiple variations impractical
why_to_use: >
  Gives users a governance lever over exploration versus efficiency.
examples:
  - product: Midjourney variation count settings
    description: Configure how many image variations are generated per prompt
risk: >
  Too many variations slow decision-making and increase cost.
```

### Verification
```yaml
id: verification
name: Verification
category: trust-transparency
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A mechanism that checks AI output against a ground truth or rule set
  before presenting it as final.
when_to_use:
  - Errors are costly and a verification layer is feasible
do_not_use_when:
  - No reliable ground truth exists to verify against
why_to_use: >
  Catches errors before they reach the user, reducing harm from
  hallucination or mistakes.
examples:
  - product: Code AI tools running tests before presenting a solution
    description: Verifies generated code against a test suite before showing it as done
risk: >
  False confidence if verification is incomplete or covers only part of the risk surface.
```

### Category: Trust Builders

### Caveat
```yaml
id: caveat
name: Caveat
category: trust-transparency
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A short disclaimer attached to AI output flagging uncertainty or
  limitations relevant to that specific response.
when_to_use:
  - Output confidence is genuinely uncertain
  - The domain carries real risk if taken at face value
do_not_use_when:
  - Overused to the point of becoming boilerplate noise
why_to_use: >
  Calibrates user trust appropriately instead of implying false
  certainty.
examples:
  - product: ChatGPT medical/legal topic disclaimers
    description: Flags that responses aren't a substitute for professional advice
risk: >
  Blanket caveats on everything get ignored, defeating their purpose.
```

### Consent
```yaml
id: consent
name: Consent
category: privacy-data-governance
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Explicit user opt-in required before the AI accesses data or performs
  a sensitive action.
when_to_use:
  - Accessing personal data or performing consequential actions
do_not_use_when:
  - The action is low-risk and expected as core functionality
why_to_use: >
  Respects user autonomy and satisfies legal/ethical data handling
  requirements.
examples:
  - product: Apps requesting calendar or email access permissions
    description: Explicit consent screen before an AI feature can read connected data
risk: >
  Consent fatigue from too many prompts leads to users approving without reading.
```

### Data Ownership
```yaml
id: data-ownership
name: Data Ownership
category: privacy-data-governance
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Clear communication that user data remains the user's property and
  isn't used to train models without permission.
when_to_use:
  - Enterprise or sensitive-data contexts where trust is a purchase driver
do_not_use_when:
  - N/A, generally good practice wherever data is handled
why_to_use: >
  Removes a major trust barrier for business and sensitive-data
  adoption.
examples:
  - product: Slack AI data ownership statement
    description: Explicitly states customer data isn't used to train shared models
risk: >
  Vague or buried policy language undermines the trust this pattern is meant to build.
```

### Disclosure
```yaml
id: disclosure
name: Disclosure
category: trust-transparency
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Clearly labels content or interactions as AI-generated or AI-assisted
  rather than human-produced.
when_to_use:
  - Users could reasonably mistake AI output for human-generated content
do_not_use_when:
  - It's already obvious the interaction is with AI
why_to_use: >
  Maintains honesty and lets users calibrate trust appropriately.
examples:
  - product: 'LinkedIn "AI-assisted" content labels'
    description: Flags posts or profile content generated with AI help
risk: >
  Over-labeling can feel stigmatizing and discourage legitimate use of AI tools.
```

### Footprints
```yaml
id: footprints
name: Footprints
category: trust-transparency
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A visible log of what data or actions the AI has accessed or taken,
  giving users an audit trail.
when_to_use:
  - The AI acts autonomously or accesses sensitive data
do_not_use_when:
  - The AI has no meaningful independent action to log
why_to_use: >
  Builds trust through transparency and supports accountability if
  something goes wrong.
examples:
  - product: Agent action logs (e.g. Claude Code's action history)
    description: Timestamped log of every file changed or command run
risk: >
  Logs that are too technical or buried provide transparency in name only.
```

### Incognito Mode
```yaml
id: incognito-mode
name: Incognito Mode
category: privacy-data-governance
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Lets users interact with the AI in a session that isn't saved to
  history or used for personalization/training.
when_to_use:
  - Users want privacy for a specific sensitive session
do_not_use_when:
  - All sessions are already private by default
why_to_use: >
  Gives users explicit control over privacy on a per-session basis.
examples:
  - product: ChatGPT Temporary Chat
    description: Sessions that aren't saved to history or used for memory
risk: >
  Users may forget to enable it and only realize afterward a sensitive session was saved.
```

### Watermark
```yaml
id: watermark
name: Watermark
category: trust-transparency
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  An embedded marker, visible or invisible, identifying content as
  AI-generated.
when_to_use:
  - Generated content (especially images/video) could be mistaken for real/human-made
do_not_use_when:
  - Context already makes AI-generation obvious
why_to_use: >
  Supports downstream trust and traceability, and increasingly meets
  regulatory requirements.
examples:
  - product: Google SynthID
    description: Invisible watermark embedded in AI-generated images
risk: >
  Watermarks can be stripped or degraded, giving false confidence in provenance.
```

### Category: Identifiers

### Avatar
```yaml
id: avatar
name: Avatar
category: branding-identity
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A visual representation (icon, character, or image) that gives the
  AI a recognizable identity.
when_to_use:
  - A consistent, memorable brand identity for the AI adds value
do_not_use_when:
  - The AI is meant to feel purely utilitarian and invisible
why_to_use: >
  Builds recognition and can make the AI feel more approachable.
examples:
  - product: Claude's starburst icon
    description: Consistent visual identity across the product
risk: >
  An overly anthropomorphic avatar can create false expectations of human-like understanding.
```

### Color
```yaml
id: color
name: Color
category: branding-identity
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A consistent color palette used to visually distinguish AI-generated
  or AI-related elements from the rest of the interface.
when_to_use:
  - AI content needs to be visually distinguishable from human content
do_not_use_when:
  - Distinction isn't meaningful to the user
why_to_use: >
  Helps users quickly identify what's AI versus human-generated at a
  glance.
examples:
  - product: Notion AI's purple accent color
    description: Consistent color coding for all AI-related UI elements
risk: >
  Inconsistent application of the color system confuses rather than clarifies.
```

### Iconography
```yaml
id: iconography
name: Iconography
category: branding-identity
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A consistent set of icons used to signal AI presence, actions, or
  states throughout the product.
when_to_use:
  - AI features are distributed across multiple parts of the product
do_not_use_when:
  - The product has a single, obvious AI surface
why_to_use: >
  Creates a recognizable visual language for AI functionality across
  a product.
examples:
  - product: Sparkle/star icons used broadly across AI products
    description: 'Common convention signaling "AI-powered" functionality'
risk: >
  Overused sparkle icons have become so generic they carry little meaning.
```

### Name
```yaml
id: name
name: Name
category: branding-identity
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  Giving the AI assistant a distinct product name rather than calling
  it generically "the AI" or "the assistant."
when_to_use:
  - Brand differentiation and memorability matter
do_not_use_when:
  - A generic, utilitarian framing better fits the product's positioning
why_to_use: >
  Supports brand identity and makes the assistant easier to refer to
  and remember.
examples:
  - product: '"Copilot" (Microsoft), "Rufus" (Amazon)'
    description: Named assistant identities distinct from the parent product
risk: >
  An overly cute or human-like name can set false expectations about capability.
```

### Personality
```yaml
id: personality
name: Personality
category: branding-identity
type: pattern
source:
  name: Shape of AI
  url: https://www.shapeof.ai/
what_it_is: >
  A defined tone, communication style, and character the AI
  consistently expresses across interactions.
when_to_use:
  - Emotional connection and differentiation from competitors matter
do_not_use_when:
  - The domain calls for strictly neutral, clinical interaction
why_to_use: >
  Builds character consistency, differentiation, and user engagement.
examples:
  - product: Claude's warm, thoughtful communication style
    description: Consistent tone across all interactions
  - product: Wysa's compassionate, judgment-free companion persona
    description: Designed specifically for emotionally sensitive mental health support
risk: >
  A mismatched personality (e.g. too playful for a serious domain) undermines trust.
```


---

## Source: Koru UX

### Refine Output
```yaml
id: refine-output
name: Refine Output
category: iterative-editing
type: pattern
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Lets users iteratively adjust an AI output through follow-up
  instructions rather than starting a new prompt from scratch.
when_to_use:
  - The initial output is close but needs targeted adjustment
do_not_use_when:
  - The output is fundamentally off-target and needs a fresh start
why_to_use: >
  Supports iterative collaboration instead of forcing users to
  re-describe the whole task each time.
examples:
  - product: 'Midjourney "vary region"'
    description: Refine a specific part of a generated image through follow-up instruction
risk: >
  Chained refinements can drift from the original intent without the user noticing.
```

### Human Verified vs AI-Generated
```yaml
id: human-verified-vs-ai-generated
name: Human Verified vs AI-Generated
category: trust-transparency
type: pattern
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Visually distinguishes content that has been reviewed and approved by
  a human from content that is purely AI-generated and unreviewed.
when_to_use:
  - Mixed content streams include both AI and human-verified material
do_not_use_when:
  - All content in the product goes through the same review process
why_to_use: >
  Lets users calibrate trust appropriately based on whether a human
  has checked the content.
examples:
  - product: News platforms flagging AI-assisted vs editor-reviewed articles
    description: Visual badge distinguishing review status
risk: >
  If verification badges aren't rigorously applied, they create false assurance.
```

### Scoping
```yaml
id: scoping
name: Scoping
category: natural-interaction
type: principle
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Explicitly defines and communicates the boundaries of what the AI
  will and won't attempt to do within a given feature.
when_to_use:
  - The AI's capability is narrower than users might assume
do_not_use_when:
  - The AI's scope is already obvious from context
why_to_use: >
  Prevents user frustration from requests that fall outside the AI's
  intended capability.
examples:
  - product: 'Customer support bots stating "I can help with billing and shipping only"'
    description: Explicit scope statement at the start of interaction
risk: >
  Overly narrow scoping can feel limiting even when the AI could reasonably help more broadly.
```

### Prompt Presets & Templates
```yaml
id: prompt-presets-templates
name: Prompt Presets & Templates
category: onboarding-discovery
type: pattern
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Pre-configured prompt starting points for common tasks, similar to
  Prompt Templates, reducing the need to write from scratch.
when_to_use:
  - Recurring task types benefit from a proven starting structure
do_not_use_when:
  - Use cases are too varied for templates to add value
why_to_use: >
  Speeds up common workflows and teaches effective prompting by
  example.
examples:
  - product: Notion AI templates
    description: Pre-built prompt structures for common writing tasks
risk: >
  Can anchor users to narrow use cases they wouldn't have explored otherwise.
```

### Style Lenses or Temperature Knobs
```yaml
id: style-lenses-temperature-knobs
name: Style Lenses or Temperature Knobs
category: configuration-tuning
type: pattern
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Controls that let users adjust how creative, random, or conservative
  the AI's output is, often via a slider metaphor.
when_to_use:
  - Creativity versus predictability is a meaningful tradeoff for the task
do_not_use_when:
  - The audience won't understand what the control changes
why_to_use: >
  Gives users direct influence over output variance without needing
  to understand the underlying model mechanics.
examples:
  - product: OpenAI Playground temperature slider
    description: Adjusts randomness of generated text output
risk: >
  Technical framing ("temperature") is meaningless to non-technical users without a plain-language label.
```

### AI Daemons
```yaml
id: ai-daemons
name: AI Daemons
category: agentic-autonomy
type: principle
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Background AI processes that run continuously, monitoring for
  triggers and acting without requiring the user to initiate each time.
when_to_use:
  - The task benefits from continuous, ambient monitoring
  - Triggers are well-defined enough for autonomous action
do_not_use_when:
  - Actions are consequential enough to require explicit user initiation
why_to_use: >
  Removes the need for users to manually invoke the AI repeatedly for
  recurring, predictable triggers.
examples:
  - product: Email spam filters
    description: Continuously running background classification with no per-email user action
risk: >
  Invisible background action can feel like a loss of control if users don't know it's happening.
```

### Branching
```yaml
id: branching-koru
name: Branching
category: iterative-editing
type: pattern
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Lets users fork a generation or conversation at any point to explore
  a different direction while preserving the original path.
when_to_use:
  - Users want to explore alternatives without losing existing progress
do_not_use_when:
  - Linear interaction is sufficient
why_to_use: >
  Encourages exploration by removing the fear of losing good results.
examples:
  - product: ChatGPT conversation branching
    description: Edit an earlier message to create a new branch
risk: >
  Too many branches become hard to track and compare against each other.
```

### Explainability Layers
```yaml
id: explainability-layers
name: Explainability Layers
category: trust-transparency
type: principle
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Optional, expandable layers of detail that explain the AI's reasoning
  at increasing levels of depth, from summary to full trace.
when_to_use:
  - Different users need different depths of explanation
do_not_use_when:
  - A single, fixed level of explanation already satisfies all users
why_to_use: >
  Serves both casual users who want a quick answer and power users who
  want to audit reasoning, without forcing one experience on both.
examples:
  - product: Perplexity's expandable source and reasoning view
    description: Summary answer with expandable detail on request
risk: >
  Deep layers rarely get used if the summary layer already satisfies most users.
```

### User-Driven Training
```yaml
id: user-driven-training
name: User-Driven Training
category: feedback-learning
type: principle
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Lets users directly shape or correct the AI's future behavior through
  explicit training actions, not just passive feedback signals.
when_to_use:
  - Personalization accuracy matters enough to warrant active user investment
do_not_use_when:
  - The system already personalizes well from passive signals alone
why_to_use: >
  Gives users a sense of agency and ownership over how the AI adapts
  to them specifically.
examples:
  - product: 'Spotify "thumbs down" shaping future recommendations'
    description: Explicit user action that retrains recommendation behavior
risk: >
  Requires enough user effort that most people won't bother unless the payoff is clear.
```

### Predictive Assistance
```yaml
id: predictive-assistance-koru
name: Predictive Assistance
category: personalization-context-awareness
type: pattern
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  AI anticipates the user's next need and surfaces relevant help before
  being explicitly asked, similar to Proactive Assistance.
when_to_use:
  - The system has enough context to predict intent with reasonable confidence
  - The task is repetitive or predictable
do_not_use_when:
  - Confidence in the prediction is low
why_to_use: >
  Removes friction from tasks the user would do anyway.
examples:
  - product: Google Smart Compose
    description: Predicts and suggests the next phrase while composing email
risk: >
  Wrong or badly timed predictions feel intrusive rather than helpful.
```

### Context Retention
```yaml
id: context-retention
name: Context Retention
category: memory-context
type: principle
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  The AI's ability to retain relevant context across a session or
  across sessions, similar to Memory, to avoid repeated re-explanation.
when_to_use:
  - Multi-turn tasks depend on earlier context staying available
do_not_use_when:
  - Each interaction is fully independent by design
why_to_use: >
  Reduces repetitive input and supports coherent, continuous
  interactions.
examples:
  - product: ChatGPT conversation context within a session
    description: Retains earlier turns of the same conversation automatically
risk: >
  Context windows have limits, and silent truncation can cause confusing behavior.
```

### Data Privacy Controls
```yaml
id: data-privacy-controls
name: Data Privacy Controls
category: privacy-data-governance
type: pattern
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  User-facing settings that let people control what data the AI can
  access, store, or use for training.
when_to_use:
  - The product handles personal or sensitive user data
do_not_use_when:
  - No meaningful data is collected or used
why_to_use: >
  Builds trust and meets legal/ethical obligations around data
  handling transparency.
examples:
  - product: ChatGPT data controls
    description: Settings to opt out of training data usage and manage stored data
risk: >
  Controls buried deep in settings menus provide transparency in name only.
```

### Error Recovery
```yaml
id: error-recovery-koru
name: Error Recovery
category: error-recovery
type: principle
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Clear paths for users to correct, undo, or escalate when the AI gets
  something wrong.
when_to_use:
  - The AI's error rate is non-trivial and errors have real consequences
do_not_use_when:
  - N/A, recovery paths are broadly good practice wherever AI can fail
why_to_use: >
  Preserves trust by giving users agency when the system fails instead
  of leaving them stuck.
examples:
  - product: GitHub Copilot's easy reject/modify/undo on suggestions
    description: Immediate, low-friction correction path for wrong suggestions
risk: >
  Recovery paths that are hard to find get skipped, and users just abandon the task.
```

### Assistant Pattern
```yaml
id: assistant-pattern
name: Assistant Pattern
category: branding-identity
type: principle
source:
  name: Koru UX
  url: https://www.koruux.com/ai-patterns-for-ui-design/
what_it_is: >
  Frames the AI as a persistent, named assistant the user interacts
  with conversationally across the product, rather than a stateless
  feature.
when_to_use:
  - Ongoing, relationship-style interaction adds real value
do_not_use_when:
  - The AI is a narrow, single-purpose utility better left unnamed
why_to_use: >
  Creates continuity and a consistent mental model across many
  different AI-powered touchpoints in a product.
examples:
  - product: Microsoft Copilot
    description: A single named assistant persona used consistently across Microsoft products
risk: >
  An assistant framing can set expectations of general-purpose capability the system doesn't have.
```

---

## Source: LogRocket

### Predictive Design
```yaml
id: predictive-design
name: Predictive Design
category: personalization-context-awareness
type: principle
source:
  name: LogRocket
  url: https://blog.logrocket.com/ux-design/ai-driven-ux-design-patterns/
what_it_is: >
  AI studies user behavior to predict the next likely interaction and
  optimizes the interface or content around that prediction.
when_to_use:
  - User behavior is data-rich enough to support reliable prediction
do_not_use_when:
  - Behavior is too sparse or novel for prediction to be reliable
why_to_use: >
  Speeds up common flows by anticipating what the user needs next.
examples:
  - product: Netflix homepage row ordering
    description: Predicts and surfaces content likely to match viewing behavior
risk: >
  Wrong predictions repeated often can feel like the product doesn't understand the user.
```

### Generative Assistance
```yaml
id: generative-assistance
name: Generative Assistance
category: authoring-input
type: principle
source:
  name: LogRocket
  url: https://blog.logrocket.com/ux-design/ai-driven-ux-design-patterns/
what_it_is: >
  AI automatically creates or co-creates content, imagery, or other
  in-app structures based on a user prompt, rather than the user
  building it manually.
when_to_use:
  - Manual content creation is a significant time cost for users
do_not_use_when:
  - Precision or full manual control is required
why_to_use: >
  Removes the manual labor of producing content from scratch, turning
  a blank canvas into a starting draft.
examples:
  - product: Canva Magic Design
    description: Auto-generates a full design layout from a text prompt
risk: >
  Generated content can look generic without real creative input from the user.
```

### Adaptive Personalization
```yaml
id: adaptive-personalization
name: Adaptive Personalization
category: personalization-context-awareness
type: principle
source:
  name: LogRocket
  url: https://blog.logrocket.com/ux-design/ai-driven-ux-design-patterns/
what_it_is: >
  The interface or content adapts continuously to an individual user's
  behavior and preferences over time.
when_to_use:
  - Usage patterns vary meaningfully between users
do_not_use_when:
  - A consistent, shared experience is more important than personalization
why_to_use: >
  Increases relevance and engagement by tailoring the experience to
  the individual rather than a generic average user.
examples:
  - product: Spotify Discover Weekly
    description: Continuously adapts music recommendations to individual listening behavior
risk: >
  Over-personalization can create filter bubbles that narrow rather than expand user experience.
```

### Background Automation
```yaml
id: background-automation
name: Background Automation
category: agentic-autonomy
type: principle
source:
  name: LogRocket
  url: https://blog.logrocket.com/ux-design/ai-driven-ux-design-patterns/
what_it_is: >
  AI performs tasks automatically in the background without requiring
  explicit user action or awareness for each instance.
when_to_use:
  - The task is low-risk, predictable, and repetitive
do_not_use_when:
  - The task is high-risk or requires human judgment per instance
why_to_use: >
  Removes tedious manual work entirely rather than just assisting with it.
examples:
  - product: Email spam filtering
    description: Runs continuously without per-email user involvement
risk: >
  Invisible automation can feel like a loss of control if users don't know it's happening or can't override it.
```

### Conversational Interfaces
```yaml
id: conversational-interfaces
name: Conversational Interfaces
category: natural-interaction
type: principle
source:
  name: LogRocket
  url: https://blog.logrocket.com/ux-design/ai-driven-ux-design-patterns/
what_it_is: >
  Chat- or voice-based interaction as the primary way users communicate
  intent to the AI, rather than traditional form-based UI.
when_to_use:
  - Intent is complex or varied enough that structured UI can't capture it well
do_not_use_when:
  - The task has a small number of well-defined actions better served by buttons or forms
why_to_use: >
  Handles open-ended, varied intent more naturally than rigid form-based UI.
examples:
  - product: ChatGPT
    description: Chat as the sole primary interface for nearly all interaction
risk: >
  Chat puts the burden of articulating intent clearly on the user, which is often harder than it sounds.
```

---

## Source: Superuser Studio

### Proactive Assistance
```yaml
id: proactive-assistance
name: Proactive Assistance
category: personalization-context-awareness
type: pattern
source:
  name: Superuser Studio
  url: https://www.superuserstudio.com/insights/ai-ux-patterns-designing-the-next-generation-of-intelligent-products
what_it_is: >
  AI anticipates a user's need and surfaces help before they ask for
  it, instead of waiting for input or a request.
when_to_use:
  - The system has enough behavioral or contextual data to predict intent
  - The task is repetitive or predictable enough that pre-empting it saves real effort
  - Being wrong occasionally is low-stakes
do_not_use_when:
  - Confidence in the prediction is low
  - The suggested action is high-stakes or hard to reverse
why_to_use: >
  Removes friction from tasks the user would do anyway, speeds up
  workflows, and signals the product is intelligent when done well.
examples:
  - product: Google Smart Compose
    description: Predicts the next phrase in an email as you type
  - product: Dynamic Defaults
    description: Pre-fills form fields based on past user behavior
  - product: Next Best Action
    description: Dashboards surface a recommendation the user can act on directly
risk: >
  Wrong or badly timed suggestions read as intrusive rather than helpful, so it is usually paired with a Trusted Source or editable-suggestion pattern.
```

### Trusted Source
```yaml
id: trusted-source
name: Trusted Source
category: trust-transparency
type: pattern
source:
  name: Superuser Studio
  url: https://www.superuserstudio.com/insights/ai-ux-patterns-designing-the-next-generation-of-intelligent-products
what_it_is: >
  Surfaces confidence scores or "why this?" explanations alongside AI
  suggestions so users can judge how much to trust them.
when_to_use:
  - Paired with proactive or automated suggestions to calibrate trust
do_not_use_when:
  - Confidence signals would be noise for a low-stakes, obviously-correct suggestion
why_to_use: >
  Prevents intrusive or wrong suggestions from damaging trust by giving
  users the context to judge each one.
examples:
  - product: 'Recommendation engines showing "because you watched X"'
    description: Explains the reasoning behind a specific suggestion
risk: >
  Explanations that are too generic ("because we think you'll like it") provide false transparency.
```

### Adaptive & Context-Aware UX
```yaml
id: adaptive-context-aware-ux
name: Adaptive & Context-Aware UX
category: personalization-context-awareness
type: principle
source:
  name: Superuser Studio
  url: https://www.superuserstudio.com/insights/ai-ux-patterns-designing-the-next-generation-of-intelligent-products
what_it_is: >
  The interface changes its layout, content, or behavior based on the
  user's current context (location, time, device, activity).
when_to_use:
  - Context materially changes what's useful to show the user
do_not_use_when:
  - A consistent, predictable interface is more valuable than adaptation
why_to_use: >
  Surfaces the most relevant information or actions for the moment,
  reducing the need for manual navigation.
examples:
  - product: Google Maps context-aware suggestions
    description: Surfaces different information based on time of day and location
risk: >
  Interfaces that shift unpredictably can disorient users who rely on a stable mental model.
```

---

## Source: rezza.io

### Version Control
```yaml
id: version-control-rezza
name: Version Control
category: iterative-editing
type: pattern
source:
  name: rezza.io
  url: https://aiux.rezza.io/version-control
what_it_is: >
  Systematic management of changes to AI-generated content, letting
  users track revisions, branch alternatives, and navigate iteration
  history.
when_to_use:
  - The AI-driven workflow involves many iterations or branches
do_not_use_when:
  - Output is single-shot with no iteration expected
why_to_use: >
  Brings order to what would otherwise be a chaotic content evolution
  process, and supports informed comparison between alternatives.
examples:
  - product: Coding assistants with generation history
    description: Track and compare successive AI-generated code versions
risk: >
  Complex version trees can become hard to navigate without strong visual tooling.
```

### Monetization
```yaml
id: monetization
name: Monetization
category: business-monetization
type: principle
source:
  name: rezza.io
  url: https://aiux.rezza.io/monetization
what_it_is: >
  UX patterns for pricing and billing AI usage transparently, such as
  credit systems, spending limits, and tiered processing speeds.
when_to_use:
  - The AI feature has a real, variable cost that needs to be passed to users
do_not_use_when:
  - The AI feature is free and cost is fully absorbed by the business
why_to_use: >
  Transparent monetization builds trust and prevents surprise charges
  from eroding user confidence.
examples:
  - product: API credit systems (OpenAI, Anthropic)
    description: Transparent credit-based billing with visible usage tracking
risk: >
  Hidden or unclear costs, even if technically disclosed, lead to churn when users feel surprised.
```

### Usage Control
```yaml
id: usage-control
name: Usage Control
category: business-monetization
type: principle
source:
  name: rezza.io
  url: https://aiux.rezza.io/usage-control
what_it_is: >
  Mechanisms that oversee and manage how much a user or system can
  consume of an AI feature, including rate limiting and load
  management.
when_to_use:
  - The AI service has real cost or capacity constraints to manage
do_not_use_when:
  - Usage is effectively unconstrained and low-cost
why_to_use: >
  Maintains system reliability and fair access across users while
  managing operating costs.
examples:
  - product: API rate limiting (OpenAI, Anthropic)
    description: Per-user or per-key request limits to ensure fair access
risk: >
  Limits that are too opaque or too restrictive frustrate legitimate power users.
```

---

## Source: Google PAIR (People + AI Guidebook)

### Determine if AI adds value
```yaml
id: pair-determine-if-ai-adds-value
name: Determine if AI adds value
category: strategic-evaluation
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  A framing step evaluating whether AI genuinely improves the user
  experience for a given problem versus a simpler, deterministic
  solution.
when_to_use:
  - Before committing engineering effort to an AI-based feature
do_not_use_when:
  - The task is simple, deterministic, and doesn't benefit from probabilistic output
why_to_use: >
  Prevents wasted investment in AI where a simpler rule-based approach
  would serve users better.
examples:
  - product: Heuristic-based spam filters vs ML-based ones for simple cases
    description: Simple rules often outperform AI for narrowly defined, low-ambiguity tasks
risk: >
  Skipping this evaluation leads to AI-for-AI's-sake features that add complexity without value.
```

### Set the right expectations
```yaml
id: pair-set-the-right-expectations
name: Set the right expectations
category: natural-interaction
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Clearly communicates what an AI feature can and cannot do before the
  user relies on it.
when_to_use:
  - Onboarding to any new AI feature
do_not_use_when:
  - Capability is already self-evident from context
why_to_use: >
  Prevents disappointment and misuse from users assuming the AI is
  more or less capable than it actually is.
examples:
  - product: Claude's stated knowledge cutoff
    description: Explicitly states limitations rather than letting users assume unlimited knowledge
risk: >
  Overpromising capability in marketing or onboarding sets users up for frustration.
```

### Explain the benefit, not the technology
```yaml
id: pair-explain-the-benefit-not-the-technology
name: Explain the benefit, not the technology
category: natural-interaction
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Frames AI feature explanations around user value delivered, not the
  underlying technical mechanism.
when_to_use:
  - Communicating a new AI feature to non-technical users
do_not_use_when:
  - Technical audience specifically wants mechanism details
why_to_use: >
  Users care about outcomes, not architecture, and technical framing
  can create unnecessary intimidation or confusion.
examples:
  - product: '"Smart replies save you time" vs "powered by a transformer model"'
    description: Benefit-led messaging in most consumer AI feature launches
risk: >
  Over-simplified messaging can obscure real limitations users should know about.
```

### Be accountable for errors
```yaml
id: pair-be-accountable-for-errors
name: Be accountable for errors
category: safety-harm-prevention
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Product and design decisions that ensure the business, not just the
  AI, takes responsibility when the system gets something wrong.
when_to_use:
  - AI errors have real consequences for users
do_not_use_when:
  - N/A, broadly good practice wherever AI can cause harm
why_to_use: >
  Maintains user trust and often meets regulatory or ethical
  obligations around AI-driven decisions.
examples:
  - product: Financial institutions offering human review after AI fraud flags
    description: Clear escalation and accountability path when the AI is wrong
risk: >
  Deflecting blame to "the algorithm" erodes trust badly when it happens publicly.
```

### Invest early in good data practices
```yaml
id: pair-invest-early-in-good-data-practices
name: Invest early in good data practices
category: privacy-data-governance
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  A development-process guideline to prioritize data quality and
  governance from the start of an AI product's lifecycle.
when_to_use:
  - Early in any AI product's development
do_not_use_when:
  - N/A, foundational practice for any ML-based system
why_to_use: >
  Poor data practices compound over time and are far more expensive to
  fix after a product ships.
examples:
  - product: Structured data labeling pipelines established before model training begins
    description: Early investment prevents costly retraining later
risk: >
  Skipping this step to move fast often means expensive rework once quality issues surface at scale.
```

### Make precision and recall tradeoffs carefully
```yaml
id: pair-make-precision-and-recall-tradeoffs-carefully
name: Make precision and recall tradeoffs carefully
category: privacy-data-governance
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  A design decision framework for balancing false positives against
  false negatives based on which error type is more costly for users.
when_to_use:
  - The AI system makes binary or classification-style decisions
do_not_use_when:
  - The task is generative with no meaningful precision/recall tradeoff
why_to_use: >
  The "right" error rate depends entirely on context, and getting this
  tradeoff wrong can cause real user harm.
examples:
  - product: Spam filters tuned to minimize false positives over false negatives
    description: Missing a spam email is less costly than blocking a real one
risk: >
  A tradeoff tuned for one use case can be actively harmful in another (e.g. medical screening needs the opposite bias).
```

### Be transparent about privacy and data settings
```yaml
id: pair-be-transparent-about-privacy-and-data-settings
name: Be transparent about privacy and data settings
category: privacy-data-governance
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Clearly surfaces what data is collected, how it's used, and what
  controls exist, rather than burying it in legal text.
when_to_use:
  - The AI feature collects or uses personal or sensitive data
do_not_use_when:
  - No meaningful data collection is involved
why_to_use: >
  Builds trust and satisfies growing regulatory expectations around
  data transparency.
examples:
  - product: In-product privacy dashboards (Google, Apple)
    description: Plain-language summaries of what data is collected and why
risk: >
  Legalistic language technically discloses everything but communicates nothing.
```

### Make it safe to explore
```yaml
id: pair-make-it-safe-to-explore
name: Make it safe to explore
category: oversight-control
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Design choices that let users try an AI feature without fear of
  irreversible consequences from mistakes.
when_to_use:
  - Users are new to the AI feature and may not trust it yet
do_not_use_when:
  - Every action is already low-risk and easily reversible
why_to_use: >
  Encourages adoption and experimentation, which is how users build
  accurate mental models of AI capability.
examples:
  - product: Undo history in AI-assisted editors
    description: Full undo capability removes the fear of trying an AI suggestion
risk: >
  Without a safety net, users default to avoiding the AI feature entirely.
```

### Anchor on familiarity
```yaml
id: pair-anchor-on-familiarity
name: Anchor on familiarity
category: natural-interaction
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Designs new AI interactions to build on interaction patterns users
  already know, rather than inventing entirely new conventions.
when_to_use:
  - Introducing a new AI capability to a broad, non-expert audience
do_not_use_when:
  - The interaction genuinely has no useful precedent
why_to_use: >
  Reduces the learning curve by leveraging existing mental models
  instead of demanding new ones.
examples:
  - product: GitHub Copilot building on the familiar autocomplete mental model
    description: Eases the transition to AI-powered code suggestions
risk: >
  Forcing familiarity onto a genuinely novel interaction can create false expectations of how it behaves.
```

### Add context from human sources
```yaml
id: pair-add-context-from-human-sources
name: Add context from human sources
category: trust-transparency
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Supplements AI output with human-curated or human-verified context
  rather than relying solely on model output.
when_to_use:
  - Factual accuracy or domain expertise materially matters
do_not_use_when:
  - The task is purely generative with no factual grounding needed
why_to_use: >
  Improves trust and accuracy in high-stakes domains where model
  knowledge alone isn't sufficient.
examples:
  - product: Medical AI tools citing peer-reviewed sources alongside AI summaries
    description: Human-vetted sources anchor AI-generated explanations
risk: >
  Curating human context at scale is expensive and can become a bottleneck.
```

### Determine how to show model confidence, if at all
```yaml
id: pair-determine-how-to-show-model-confidence
name: Determine how to show model confidence, if at all
category: trust-transparency
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  A deliberate decision about whether and how to surface the model's
  confidence in its own output.
when_to_use:
  - High-stakes decisions where miscalibrated trust could cause harm
do_not_use_when:
  - Low-stakes creative tasks where confidence adds confusion, not clarity
why_to_use: >
  Confidence display only helps when it changes user behavior
  appropriately; showing it everywhere can create unnecessary noise.
examples:
  - product: 'Grammarly''s verbal confidence qualifiers ("likely")'
    description: Confidence conveyed through language rather than raw percentages
risk: >
  Numeric confidence scores are often misread as more precise or meaningful than they actually are.
```

### Explain for understanding, not completeness
```yaml
id: pair-explain-for-understanding-not-completeness
name: Explain for understanding, not completeness
category: trust-transparency
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Explanations of AI behavior should aim to build accurate user
  intuition, not exhaustively document every technical detail.
when_to_use:
  - Explaining AI decisions or behavior to non-expert users
do_not_use_when:
  - The audience is technical and wants full detail
why_to_use: >
  A complete technical explanation is often less useful than a simpler
  one that actually builds correct understanding.
examples:
  - product: 'Simplified "why am I seeing this" explanations in recommendation systems'
    description: Plain-language reasoning rather than a full feature-weight breakdown
risk: >
  Oversimplified explanations can be technically misleading even while feeling clear.
```

### Go beyond in-the-moment explanations
```yaml
id: pair-go-beyond-in-the-moment-explanations
name: Go beyond in-the-moment explanations
category: trust-transparency
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Provides deeper, on-demand explanation resources beyond the brief
  contextual explanation shown at the moment of interaction.
when_to_use:
  - Some users will want more depth than fits in the immediate UI
do_not_use_when:
  - The task never warrants deeper explanation for any user segment
why_to_use: >
  Serves both users who want a quick answer and those who want to dig
  deeper, without forcing one experience on both.
examples:
  - product: '"Learn more" links to full documentation from an inline explanation'
    description: Progressive disclosure of increasingly detailed explanation
risk: >
  Deep explanations that are hard to find defeat their own purpose.
```

### Automate more when risk is low
```yaml
id: pair-automate-more-when-risk-is-low
name: Automate more when risk is low
category: oversight-control
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  A guideline for calibrating the level of automation to the actual
  risk and reversibility of the task.
when_to_use:
  - Deciding how much autonomy to give an AI feature
do_not_use_when:
  - N/A, this is a general calibration principle
why_to_use: >
  Matches automation confidence to actual consequence, avoiding both
  under- and over-automation.
examples:
  - product: Auto-archiving low-priority emails vs requiring approval for auto-send
    description: Different automation levels calibrated to different risk levels
risk: >
  Misjudging what counts as "low risk" for a given user or context can cause real harm.
```

### Let users give feedback
```yaml
id: pair-let-users-give-feedback
name: Let users give feedback
category: feedback-learning
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Provides accessible mechanisms for users to rate, correct, or flag AI
  output.
when_to_use:
  - Improving the system over time depends on real usage signal
do_not_use_when:
  - The system doesn't learn from feedback at all
why_to_use: >
  Creates a continuous improvement loop and gives users a sense of
  agency over an otherwise opaque system.
examples:
  - product: ChatGPT thumbs up/down on responses
    description: Simple, low-friction feedback mechanism on every AI response
risk: >
  Feedback mechanisms that visibly go nowhere erode user trust in the feature.
```

### Let users supervise automation
```yaml
id: pair-let-users-supervise-automation
name: Let users supervise automation
category: oversight-control
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Gives users visibility and override capability over automated
  processes rather than running them fully invisibly.
when_to_use:
  - Automated actions could plausibly need correction
do_not_use_when:
  - Automation is fully deterministic and error-free
why_to_use: >
  Preserves user agency and trust even as more work is automated.
examples:
  - product: Gmail's ability to review and undo Smart Compose suggestions before sending
    description: Supervised automation with a clear override point
risk: >
  Supervision options that are too buried defeat the purpose of offering them.
```

### Automate in phases
```yaml
id: pair-automate-in-phases
name: Automate in phases
category: oversight-control
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Introduces automation gradually, increasing autonomy only as trust
  and track record are established.
when_to_use:
  - Introducing a new automated capability to users for the first time
do_not_use_when:
  - The automation is trivially low-risk from day one
why_to_use: >
  Builds appropriate trust over time instead of demanding it upfront,
  reducing the shock of unexpected autonomous behavior.
examples:
  - product: Canva Magic Studio's staged rollout from simple suggestions to advanced tools
    description: Gradually reveals more autonomous features as users engage
risk: >
  Moving too slowly can feel patronizing to users who are ready for more autonomy sooner.
```

### Give control back to the user when automation fails
```yaml
id: pair-give-control-back-when-automation-fails
name: Give control back to the user when automation fails
category: error-recovery
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Ensures a clean, clear handoff back to manual control when automated
  behavior fails or hits its limits.
when_to_use:
  - Any automated system that can fail or hit edge cases
do_not_use_when:
  - N/A, broadly necessary wherever automation exists
why_to_use: >
  Prevents users from being stuck when the AI can't complete a task,
  preserving trust even through failure.
examples:
  - product: GitHub Copilot letting developers freely reject or edit suggestions
    description: Immediate fallback to full manual control
risk: >
  A poor handoff (no clear signal that automation failed) leaves users confused about what state they're in.
```

### Design for your data labelers
```yaml
id: pair-design-for-your-data-labelers
name: Design for your data labelers
category: privacy-data-governance
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Treats the tools and workflows used by human data labelers as a
  first-class design problem, since label quality directly shapes
  model behavior.
when_to_use:
  - The AI system relies on human-labeled training data
do_not_use_when:
  - The system uses no human-labeled training data
why_to_use: >
  Poor labeling tools produce poor labels, which produce poor models,
  regardless of downstream UX polish.
examples:
  - product: Purpose-built labeling interfaces (e.g. Scale AI, Labelbox)
    description: Dedicated UX for the labeling workflow, not an afterthought
risk: >
  Treating labeling as a low-priority backend task leads to systemic data quality issues.
```

### Actively maintain your dataset
```yaml
id: pair-actively-maintain-your-dataset
name: Actively maintain your dataset
category: privacy-data-governance
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  An ongoing practice of auditing, refreshing, and correcting training
  data rather than treating it as a one-time asset.
when_to_use:
  - The AI system's underlying data or context can go stale or drift
do_not_use_when:
  - N/A, generally necessary for any evolving ML system
why_to_use: >
  Prevents model quality from silently degrading as the real world
  diverges from the original training data.
examples:
  - product: Search engines continuously refreshing their index and relevance signals
    description: Ongoing data maintenance rather than a static one-time build
risk: >
  Neglected datasets cause silent quality drift that's hard to diagnose after the fact.
```

### Learn from label disagreements
```yaml
id: pair-learn-from-label-disagreements
name: Learn from label disagreements
category: feedback-learning
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Treats cases where human labelers disagree as valuable signal about
  ambiguity, rather than noise to be discarded.
when_to_use:
  - Multiple labelers annotate the same data
do_not_use_when:
  - Labeling is done by a single source with no comparison possible
why_to_use: >
  Disagreement often reveals genuine ambiguity in the task itself,
  which is useful information for both the model and the UX design.
examples:
  - product: Content moderation systems analyzing labeler disagreement on borderline cases
    description: Uses disagreement patterns to identify genuinely ambiguous content categories
risk: >
  Simply averaging away disagreement can hide important edge cases the product should handle explicitly.
```

### Embrace "noisy" data
```yaml
id: pair-embrace-noisy-data
name: Embrace "noisy" data
category: privacy-data-governance
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Accepts that real-world data is inherently messy and designs systems
  to be robust to that noise rather than demanding artificially clean
  data.
when_to_use:
  - Working with real-world, user-generated, or naturally occurring data
do_not_use_when:
  - The data source is genuinely controlled and clean by design
why_to_use: >
  Pursuing artificial data cleanliness delays shipping and often
  doesn't reflect the real conditions the model will face in production.
examples:
  - product: Speech recognition systems trained on real-world audio with background noise
    description: Deliberately trained on messy, realistic conditions rather than pristine studio audio
risk: >
  Too much noise without proper handling can genuinely degrade model quality, so this requires judgment, not blanket tolerance.
```

### Get input from domain experts as you build your dataset
```yaml
id: pair-get-input-from-domain-experts
name: Get input from domain experts as you build your dataset
category: privacy-data-governance
type: principle
source:
  name: Google PAIR
  url: https://pair.withgoogle.com/guidebook-v2/patterns
what_it_is: >
  Involves subject-matter experts directly in dataset construction and
  labeling guidance, not just general-purpose labelers.
when_to_use:
  - The domain requires specialized knowledge to label correctly
do_not_use_when:
  - The labeling task requires no specialized domain knowledge
why_to_use: >
  General labelers often mislabel domain-specific nuance that experts
  would catch immediately, directly affecting model quality.
examples:
  - product: Medical AI datasets labeled with input from clinicians
    description: Domain-expert-guided labeling for specialized, high-stakes data
risk: >
  Expert input is expensive and slow to scale, creating a real tradeoff against speed.
```

---

## Source: Microsoft HAX Toolkit (Guidelines for Human-AI Interaction)

### Make clear what the system can do
```yaml
id: hax-make-clear-what-the-system-can-do
name: Make clear what the system can do
category: natural-interaction
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Communicates the AI system's capabilities clearly at the outset of
  interaction, so users know what's possible before they try.
when_to_use:
  - Initial interaction with any new AI feature
do_not_use_when:
  - Capability is already fully obvious from context
why_to_use: >
  Prevents wasted effort on requests outside the system's actual
  capability and sets an accurate baseline mental model.
examples:
  - product: Feature onboarding screens describing what an AI assistant can help with
    description: Explicit capability statement at first use
risk: >
  Vague or overly broad capability claims set users up for disappointment.
```

### Make clear how well the system can do what it can do
```yaml
id: hax-make-clear-how-well
name: Make clear how well the system can do what it can do
category: natural-interaction
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Goes beyond stating what the system does to communicating its actual
  reliability or accuracy for that task.
when_to_use:
  - Reliability varies meaningfully across different tasks or conditions
do_not_use_when:
  - Reliability is uniformly high and communicating it adds no value
why_to_use: >
  Helps users calibrate exactly how much to trust the system for a
  given task, not just whether it can attempt it.
examples:
  - product: Speech-to-text apps showing confidence per transcribed word
    description: Communicates reliability at a granular level, not just overall
risk: >
  Overly technical reliability metrics can confuse rather than inform non-expert users.
```

### Time services based on context
```yaml
id: hax-time-services-based-on-context
name: Time services based on context
category: personalization-context-awareness
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Triggers AI assistance at the moment it's actually useful, based on
  the user's current context and activity.
when_to_use:
  - The AI's usefulness depends heavily on timing
do_not_use_when:
  - Assistance is equally useful at any time
why_to_use: >
  Badly timed help is often worse than no help at all, because it
  interrupts rather than assists.
examples:
  - product: Contextual tooltips that appear only when relevant to the current task
    description: Timed to the moment of actual relevance, not shown constantly
risk: >
  Misjudged timing (too early, too late, too often) makes assistance feel like noise.
```

### Show contextually relevant information
```yaml
id: hax-show-contextually-relevant-information
name: Show contextually relevant information
category: personalization-context-awareness
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Surfaces information tailored to the user's current situation rather
  than generic, one-size-fits-all content.
when_to_use:
  - Context can meaningfully change what information is useful
do_not_use_when:
  - Information needs are uniform across all users and situations
why_to_use: >
  Reduces cognitive load by showing only what's relevant right now
  instead of everything at once.
examples:
  - product: Navigation apps surfacing traffic alerts only for the current route
    description: Context-filtered relevance instead of generic alerts
risk: >
  Over-filtering can hide information the user actually needed but the system judged irrelevant.
```

### Match relevant social norms
```yaml
id: hax-match-relevant-social-norms
name: Match relevant social norms
category: natural-interaction
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Ensures the AI's tone, behavior, and content align with the social
  and cultural expectations of its context and audience.
when_to_use:
  - The AI communicates directly with end users in a specific cultural or professional context
do_not_use_when:
  - The system has no user-facing communication or tone dimension
why_to_use: >
  Mismatched tone or behavior undermines trust and can cause real
  offense or confusion.
examples:
  - product: Enterprise AI assistants using formal, professional tone by default
    description: Tone calibrated to workplace social norms
risk: >
  Norms vary across cultures and contexts, so a single default won't fit every audience.
```

### Mitigate social biases
```yaml
id: hax-mitigate-social-biases
name: Mitigate social biases
category: safety-harm-prevention
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Actively designs against the AI's language, imagery, or behavior
  reinforcing harmful stereotypes or unequal treatment.
when_to_use:
  - The system generates or ranks content involving people or identity
do_not_use_when:
  - N/A, broadly necessary wherever AI output could reflect social bias
why_to_use: >
  Unmitigated bias causes real harm to affected users and creates
  serious reputational and legal risk.
examples:
  - product: Hiring AI tools audited for demographic bias in candidate ranking
    description: Active bias testing and mitigation built into the product lifecycle
risk: >
  Bias mitigation is an ongoing process, not a one-time fix, and can silently regress with model updates.
```

### Support efficient invocation
```yaml
id: hax-support-efficient-invocation
name: Support efficient invocation
category: natural-interaction
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Makes it fast and low-friction for users to invoke the AI service
  when they need it.
when_to_use:
  - Users will need to invoke the AI feature frequently
do_not_use_when:
  - Invocation is already rare and low-friction by nature
why_to_use: >
  Friction at the point of invocation directly suppresses feature
  usage, even when the feature itself is valuable.
examples:
  - product: Keyboard shortcuts to trigger AI assistants (e.g. Cmd+K patterns)
    description: Fast, low-friction invocation for frequent use
risk: >
  Invocation that's too easy can lead to accidental or unintended triggering.
```

### Support efficient dismissal
```yaml
id: hax-support-efficient-dismissal
name: Support efficient dismissal
category: oversight-control
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Makes it fast and low-friction for users to dismiss AI suggestions or
  assistance they don't want.
when_to_use:
  - AI assistance appears proactively and won't always be wanted
do_not_use_when:
  - Assistance is only ever explicitly requested by the user
why_to_use: >
  Easy dismissal keeps proactive assistance from becoming an
  annoyance, protecting overall trust in the feature.
examples:
  - product: Single-click dismiss on inline AI suggestions
    description: Fast, frictionless way to reject unwanted proactive help
risk: >
  Dismissal that's too easy to trigger accidentally can suppress useful assistance.
```

### Support efficient correction
```yaml
id: hax-support-efficient-correction
name: Support efficient correction
category: error-recovery
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Makes it fast and low-friction for users to correct the AI when it
  gets something wrong.
when_to_use:
  - The AI's error rate is non-trivial
do_not_use_when:
  - N/A, broadly necessary wherever the AI can be wrong
why_to_use: >
  Fast correction keeps small errors from becoming major frustrations
  and can feed back into system improvement.
examples:
  - product: Inline edit on autocomplete suggestions before accepting them
    description: Correction happens in place without restarting the task
risk: >
  Correction paths that are hard to find go unused, and users just abandon or tolerate errors.
```

### Scope services when in doubt
```yaml
id: hax-scope-services-when-in-doubt
name: Scope services when in doubt
category: oversight-control
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  When confidence is low, the system narrows its response scope rather
  than guessing broadly and risking a confidently wrong answer.
when_to_use:
  - Model confidence for a given input is low
do_not_use_when:
  - Confidence is consistently high for the task domain
why_to_use: >
  A narrower, more honest response is more useful and trustworthy than
  a broad but unreliable one.
examples:
  - product: Customer support bots escalating to a human when uncertain
    description: 'Scopes down to "I''m not sure, let me connect you with support" rather than guessing'
risk: >
  Overly cautious scoping can make the system feel unhelpful even when it could have answered.
```

### Make clear why the system did what it did
```yaml
id: hax-make-clear-why
name: Make clear why the system did what it did
category: trust-transparency
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Provides an explanation of the reasoning behind a specific AI
  action or output.
when_to_use:
  - The system's behavior isn't self-evidently justified
do_not_use_when:
  - The reasoning is trivially obvious from the output itself
why_to_use: >
  Builds trust and helps users learn to predict system behavior over
  time.
examples:
  - product: '"Why am I seeing this ad" explanations'
    description: Surfaces the reasoning behind a specific targeted result
risk: >
  Vague or generic explanations ("based on your activity") provide the appearance of transparency without real substance.
```

### Remember recent interactions
```yaml
id: hax-remember-recent-interactions
name: Remember recent interactions
category: memory-context
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Retains short-term context from recent turns in an interaction to
  avoid forcing the user to repeat themselves.
when_to_use:
  - Multi-turn interactions where recent context stays relevant
do_not_use_when:
  - Each interaction is fully independent
why_to_use: >
  Reduces repetitive input and creates a more coherent, natural
  interaction flow.
examples:
  - product: Chat assistants referencing earlier turns in the same session
    description: Retains and uses recent conversational context automatically
risk: >
  Silent context loss (e.g. hitting a context window limit) causes confusing, seemingly forgetful behavior.
```

### Learn from user behavior
```yaml
id: hax-learn-from-user-behavior
name: Learn from user behavior
category: feedback-learning
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  The system improves over time by observing how users actually
  interact with and respond to its output.
when_to_use:
  - Long-term personalization or improvement is a goal
do_not_use_when:
  - The system is static and not meant to adapt to individual usage
why_to_use: >
  Continuous learning from real usage produces better personalization
  than static, one-size-fits-all behavior.
examples:
  - product: Recommendation systems refining suggestions based on click behavior
    description: Ongoing adaptation from passive behavioral signals
risk: >
  Learning from behavior without guardrails can amplify existing biases in that behavior.
```

### Be cautious about changing too much too soon
```yaml
id: hax-be-cautious-about-changing-too-much
name: Be cautious about changing too much too soon
category: oversight-control
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  A guideline against making large, sudden behavioral changes based on
  limited new signal, to avoid destabilizing user trust.
when_to_use:
  - The system adapts its behavior based on ongoing user feedback or usage
do_not_use_when:
  - The system's behavior is fixed and doesn't adapt
why_to_use: >
  Sudden shifts in AI behavior, even if technically correct, feel
  erratic and undermine user trust in the system's reliability.
examples:
  - product: Gradual rollout of behavior changes rather than instant retraining on new signal
    description: Cautious pacing of adaptation to avoid jarring shifts
risk: >
  Being too conservative can mean the system fails to adapt fast enough when it genuinely should.
```

### Encourage granular feedback
```yaml
id: hax-encourage-granular-feedback
name: Encourage granular feedback
category: feedback-learning
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Collects specific, fine-grained feedback (what exactly was wrong)
  rather than only broad thumbs up/down signals.
when_to_use:
  - Understanding failure modes in detail would meaningfully improve the system
do_not_use_when:
  - Simple binary feedback is sufficient for the use case
why_to_use: >
  Granular feedback gives far more actionable signal for improvement
  than coarse approval/disapproval alone.
examples:
  - product: '"What was wrong with this response" follow-up options in chat assistants'
    description: Structured, specific feedback categories beyond thumbs down
risk: >
  Too many feedback options at once creates friction that suppresses feedback altogether.
```

### Convey the consequences of user actions
```yaml
id: hax-convey-the-consequences
name: Convey the consequences of user actions
category: trust-transparency
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Clearly communicates what will happen before a user takes an action
  that affects AI behavior, such as enabling automation or sharing
  data.
when_to_use:
  - The action has non-obvious downstream effects on system behavior
do_not_use_when:
  - Consequences are already fully transparent
why_to_use: >
  Prevents users from unknowingly triggering unwanted downstream
  behavior.
examples:
  - product: '"Enabling this will let the AI access your calendar" confirmation prompts'
    description: Explicit consequence statement before a consequential toggle
risk: >
  Vague consequence framing technically discloses but doesn't actually inform.
```

### Provide global controls
```yaml
id: hax-provide-global-controls
name: Provide global controls
category: oversight-control
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Offers a centralized, top-level place to control or disable AI
  behavior across the whole product, not just per-feature toggles.
when_to_use:
  - AI features are distributed across multiple parts of the product
do_not_use_when:
  - The product has a single, isolated AI feature with no need for a broader control surface
why_to_use: >
  Gives users a single, trustworthy place to manage AI behavior instead
  of hunting through scattered settings.
examples:
  - product: 'A single "AI features" settings page controlling all AI-powered functionality in an app'
    description: Centralized control surface across the whole product
risk: >
  If global controls don't actually cover every AI touchpoint, they create a false sense of complete control.
```

### Notify users about changes
```yaml
id: hax-notify-users-about-changes
name: Notify users about changes
category: trust-transparency
type: principle
source:
  name: Microsoft HAX Toolkit
  url: https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/
what_it_is: >
  Proactively informs users when the AI system's capabilities or
  behavior has changed meaningfully.
when_to_use:
  - A significant model update or behavior change ships
do_not_use_when:
  - Changes are trivial and don't affect user-facing behavior
why_to_use: >
  Prevents confusion when the system behaves differently than users
  have come to expect.
examples:
  - product: Release notes or in-app banners for major AI model updates
    description: Proactive notification of meaningful behavior changes
risk: >
  Notification fatigue from too-frequent updates leads users to ignore even important ones.
```

---

## Source: Apple Human Interface Guidelines for Machine Learning

### Explicit feedback
```yaml
id: apple-explicit-feedback
name: Explicit feedback
category: feedback-learning
type: pattern
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  Direct, intentional feedback a user provides about AI output, such as
  a thumbs up/down or a rating.
when_to_use:
  - The system benefits from clear, unambiguous signal about output quality
do_not_use_when:
  - Implicit behavioral signals already provide sufficient signal
why_to_use: >
  Gives the clearest possible signal for improving personalization or
  model behavior.
examples:
  - product: Apple Music's love/dislike buttons on recommendations
    description: Explicit, unambiguous user feedback on suggestions
risk: >
  Explicit feedback mechanisms are often ignored since they require active user effort.
```

### Implicit feedback
```yaml
id: apple-implicit-feedback
name: Implicit feedback
category: feedback-learning
type: principle
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  Passive behavioral signals (skips, dwell time, edits) used to infer
  user preference without requiring explicit action.
when_to_use:
  - Explicit feedback would create too much friction to collect at scale
do_not_use_when:
  - Behavioral signals are too ambiguous to interpret reliably
why_to_use: >
  Collects useful signal at scale without adding friction to the core
  user experience.
examples:
  - product: Streaming apps inferring preference from watch/skip behavior
    description: No explicit rating required, signal comes from behavior alone
risk: >
  Implicit signals can be misread (e.g. a skip due to interruption, not dislike).
```

### Calibration
```yaml
id: apple-calibration
name: Calibration
category: personalization-context-awareness
type: principle
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  A process or interface letting the AI adjust to an individual user's
  specific conditions or preferences, such as voice or handwriting
  calibration.
when_to_use:
  - Individual variation meaningfully affects model accuracy
do_not_use_when:
  - The model already generalizes well without per-user calibration
why_to_use: >
  Improves accuracy for the specific individual using the system,
  beyond what a generalized model can achieve alone.
examples:
  - product: Face ID enrollment
    description: Per-user calibration process that improves recognition accuracy
risk: >
  A calibration step adds friction and can be skipped or rushed by users.
```

### Corrections
```yaml
id: apple-corrections
name: Corrections
category: error-recovery
type: pattern
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  Interface mechanisms that let users directly correct AI output,
  which the system can then learn from.
when_to_use:
  - The AI's output is editable and errors are expected occasionally
do_not_use_when:
  - Output is not user-editable by design
why_to_use: >
  Turns errors into improvement opportunities while giving users
  immediate control over the specific output.
examples:
  - product: Autocorrect suggestions the user can reject or manually fix
    description: Direct correction mechanism tied to individual instances of AI output
risk: >
  If corrections aren't actually used to improve the system, users lose motivation to make them.
```

### Mistakes
```yaml
id: apple-mistakes
name: Mistakes
category: error-recovery
type: principle
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  Design guidance for how the system should present and recover from
  its own errors gracefully.
when_to_use:
  - Any AI system that will inevitably make mistakes (i.e. all of them)
do_not_use_when:
  - N/A, universally relevant
why_to_use: >
  How a system handles its own mistakes shapes long-term trust more
  than its overall accuracy rate.
examples:
  - product: 'Siri gracefully saying "I didn''t quite get that" instead of a hard failure'
    description: A designed, graceful mistake-handling response
risk: >
  Poorly handled mistakes (silent failure, confusing errors) cause disproportionate trust damage.
```

### Multiple options
```yaml
id: apple-multiple-options
name: Multiple options
category: output-presentation
type: pattern
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  Presents several possible AI outputs or interpretations instead of
  committing to a single guess.
when_to_use:
  - Confidence in a single best answer is low, or the task is subjective
do_not_use_when:
  - There is one clearly correct answer
why_to_use: >
  Lets the user make the final judgment call when the system itself
  is uncertain between plausible options.
examples:
  - product: QuickType showing multiple word suggestions instead of one
    description: Multiple ranked options rather than a single autocorrect guess
risk: >
  Too many options can slow down the interaction they were meant to speed up.
```

### Confidence
```yaml
id: apple-confidence
name: Confidence
category: trust-transparency
type: pattern
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  Design guidance for communicating how certain the system is about a
  given prediction or output.
when_to_use:
  - Confidence level should change how a user acts on the output
do_not_use_when:
  - Confidence is uniform and communicating it adds no decision value
why_to_use: >
  Helps users decide how much to rely on a given output versus verify
  it independently.
examples:
  - product: Photos app showing lower-confidence face-tagging suggestions differently than high-confidence ones
    description: Visual differentiation based on model confidence
risk: >
  Confidence indicators that are too technical or inconsistent confuse more than they clarify.
```

### Attribution
```yaml
id: apple-attribution
name: Attribution
category: trust-transparency
type: pattern
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  Clearly labels AI-generated or AI-assisted content so users know its
  origin.
when_to_use:
  - Content could plausibly be mistaken for human-created
do_not_use_when:
  - It's already obvious the content is AI-generated
why_to_use: >
  Maintains honesty and helps users calibrate trust in the content
  appropriately.
examples:
  - product: '"Suggested by Siri" labels on proactive suggestions'
    description: Clear attribution distinguishing AI-suggested from user-created content
risk: >
  Over-labeling routine features can feel unnecessary or even stigmatizing.
```

### Limitations
```yaml
id: apple-limitations
name: Limitations
category: natural-interaction
type: principle
source:
  name: Apple HIG for Machine Learning
  url: https://developer.apple.com/design/human-interface-guidelines/machine-learning
what_it_is: >
  Explicitly communicates what the AI system cannot do or where it's
  known to be unreliable.
when_to_use:
  - The system has known, meaningful boundaries to its capability
do_not_use_when:
  - The system has no meaningful limitations worth flagging
why_to_use: >
  Prevents user frustration and misuse from assuming broader capability
  than actually exists.
examples:
  - product: Siri stating it can't help with a request outside its supported domains
    description: Explicit limitation statement rather than a confusing failed attempt
risk: >
  Under-communicating limitations leads to repeated failed attempts and user frustration.
```

---

## Source: UX Collective — "Where should AI sit in your UI?" (Sharang Sharma)

### Customer service agent in a chatbot widget
```yaml
id: chatbot-widget-placement
name: Customer service agent in a chatbot widget
category: spatial-placement
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/where-should-ai-sit-in-your-ui-1710a258390e
what_it_is: >
  Places the AI in a familiar bottom-right floating widget, positioned
  as a support agent layered on top of the existing product.
when_to_use:
  - The AI's role is answering questions or resolving issues, not core to the primary task
do_not_use_when:
  - AI is meant to be central to the core workflow, not auxiliary
why_to_use: >
  Uses an extremely familiar UI convention that requires no user
  learning curve.
examples:
  - product: Intercom-style support widgets
    description: Bottom-right floating chat widget as the AI's home
risk: >
  Feels like an add-on rather than a deeply integrated part of the product.
```

### Inline overlay prompts for precision assistance
```yaml
id: inline-overlay-prompts
name: Inline overlay prompts for precision assistance
category: spatial-placement
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/where-should-ai-sit-in-your-ui-1710a258390e
what_it_is: >
  Surfaces AI assistance directly inline, overlaid on the content
  the user is actively working on.
when_to_use:
  - Assistance needs to act on a specific, precise piece of content
do_not_use_when:
  - Assistance is general-purpose and not tied to specific content
why_to_use: >
  Keeps AI assistance precisely scoped and contextual to exactly what
  the user is working on.
examples:
  - product: Notion, Grammarly inline suggestion overlays
    description: AI assistance appears directly over the text being edited
risk: >
  Overlays can obscure the content they're meant to help with if not carefully designed.
```

### Creative collaborator on an infinite canvas
```yaml
id: infinite-canvas-collaborator
name: Creative collaborator on an infinite canvas
category: spatial-placement
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/where-should-ai-sit-in-your-ui-1710a258390e
what_it_is: >
  Places the AI as a peer participant on an open, spatial canvas
  alongside the user's own content and ideas.
when_to_use:
  - The task is exploratory, spatial, and non-linear
do_not_use_when:
  - The task has a fixed, linear structure
why_to_use: >
  Matches the AI's placement to genuinely open-ended, exploratory
  creative work.
examples:
  - product: TLDraw, Figma, Miro AI features
    description: AI-generated elements placed alongside user content on a shared canvas
risk: >
  Open canvases can become cluttered without clear visual distinction between AI and human contributions.
```

### Center stage general-purpose assistant
```yaml
id: center-stage-assistant
name: Center stage general-purpose assistant
category: spatial-placement
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/where-should-ai-sit-in-your-ui-1710a258390e
what_it_is: >
  Places the AI as the primary, full-screen interface rather than a
  secondary or auxiliary element.
when_to_use:
  - AI interaction is the core, primary purpose of the product
do_not_use_when:
  - AI is a supporting feature within a broader existing product
why_to_use: >
  Gives the AI maximum focus and screen real estate for products
  where it is the whole point.
examples:
  - product: ChatGPT, Perplexity, Midjourney
    description: Full-screen, center-stage chat or generation interface
risk: >
  Doesn't translate well when AI is meant to augment an existing, non-AI-native product.
```

### Strategic creative partner on left panel
```yaml
id: left-panel-creative-partner
name: Strategic creative partner on left panel
category: spatial-placement
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/where-should-ai-sit-in-your-ui-1710a258390e
what_it_is: >
  Places AI conversation on the left, with the resulting work product
  on the right, framing the AI as leading the creative direction.
when_to_use:
  - The AI is meant to actively drive and shape the creative direction
do_not_use_when:
  - The user, not the AI, should clearly lead the creative direction
why_to_use: >
  Signals that the AI has an active, opinionated role in shaping the
  output, not just reacting to instructions.
examples:
  - product: ChatGPT Canvas, Lovable
    description: Chat panel on the left drives changes shown in a canvas on the right
risk: >
  Can feel like the AI is taking over creative control the user wanted to retain.
```

### Deep context expert on right panel
```yaml
id: right-panel-context-expert
name: Deep context expert on right panel
category: spatial-placement
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/where-should-ai-sit-in-your-ui-1710a258390e
what_it_is: >
  Places AI assistance in a right-hand panel, positioned as a reactive
  expert responding to context from the main work area on the left.
when_to_use:
  - The user's primary work stays in the main area, and AI supports it
do_not_use_when:
  - AI should lead rather than support the primary work
why_to_use: >
  Frames AI as a supportive expert reacting to user-led work, which
  fits professional and technical tools well.
examples:
  - product: Microsoft Copilot, GitHub Copilot, Cursor
    description: Right-hand panel providing contextual assistance to the main editor
risk: >
  Right-panel placement can be easily ignored if it competes for attention with the primary work area.
```

### Distributed research agent in grid interfaces
```yaml
id: grid-interface-research-agent
name: Distributed research agent in grid interfaces
category: spatial-placement
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/where-should-ai-sit-in-your-ui-1710a258390e
what_it_is: >
  Places AI processing across a spreadsheet-like grid, running
  research or analysis per row or cell rather than in a single chat
  thread.
when_to_use:
  - The task involves researching or processing many similar items in parallel
do_not_use_when:
  - The task is a single, linear conversation or generation
why_to_use: >
  Matches the AI's structure to genuinely tabular, parallelizable
  research tasks better than a linear chat would.
examples:
  - product: 'AnswerGrid, Elicit "semantic spreadsheets"'
    description: AI research run per-row across a structured grid interface
risk: >
  Unfamiliar to most users and requires learning a new interaction paradigm.
```

---

## Source: UX Collective — "20+ GenAI UX patterns, examples and implementation tactics" (Sharang Sharma)

### GenAI or no GenAI
```yaml
id: genai-or-no-genai
name: GenAI or no GenAI
category: strategic-evaluation
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  A decision framework for evaluating whether GenAI genuinely improves
  UX for a given problem or introduces unnecessary complexity versus a
  simpler heuristic-based solution.
when_to_use:
  - The task is open-ended, creative, and augments the user
  - Structured UX fails to capture true user intent
  - Creating or transforming complex outputs (images, video, code)
do_not_use_when:
  - Outcomes must be precise, auditable, or deterministic (e.g. tax forms, legal contracts)
  - Users expect clear, consistent information (e.g. documentation)
why_to_use: >
  Prevents wasted investment in AI where a simpler, more predictable
  solution would serve users better.
examples:
  - product: Intercom FinAI
    description: Captures user intent with natural language versus a structured FAQ or button-based bot
risk: >
  Applying GenAI where determinism and auditability actually matter more, undermining user trust.
```

### Convert user needs to data needs
```yaml
id: convert-user-needs-to-data-needs
name: Convert user needs to data needs
category: strategic-evaluation
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  A cross-functional process pattern ensuring GenAI development starts
  from real user intent and translates it into the structured, model-
  ready data the system actually needs.
when_to_use:
  - Early in defining what a GenAI feature should actually do
do_not_use_when:
  - The data model and user need are already fully validated and stable
why_to_use: >
  Prevents teams from optimizing for the wrong outcome and causing user
  churn when the system doesn't actually solve the real problem.
examples:
  - product: Cross-functional PM/design/data-science alignment on user needs before model work begins
    description: Structured translation from qualitative user research into data requirements
risk: >
  Skipping this step means the model may be technically strong but solve the wrong problem.
```

### Augment vs automate
```yaml
id: augment-vs-automate
name: Augment vs automate
category: oversight-control
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  A strategic decision about whether to fully automate a task or
  augment human capability, aligned to user control preferences.
when_to_use:
  - Automation fits tedious, time-consuming, or unsafe tasks users want to delegate
  - Augmentation fits tasks users want to remain involved in, for creativity or control
do_not_use_when:
  - The task clearly and unambiguously falls into only one category
why_to_use: >
  Misjudging this tradeoff either strips users of control they wanted
  or burdens them with tedium they wanted removed.
examples:
  - product: Intercom Fin AI (automation)
    description: Automatically summarizes long email threads, a task users prefer delegated
  - product: Magenta Studio in Ableton (augmentation)
    description: Gives creative controls to manipulate and create new music, not replace the musician
risk: >
  Full automation of a task users wanted to stay involved in feels like a loss of creative control.
```

### Define level of automation
```yaml
id: define-level-of-automation
name: Define level of automation
category: oversight-control
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  A strategic framework across three levels, no automation (AI assists,
  user decides), partial automation/co-pilot (AI acts with oversight),
  and full automation (AI acts independently, i.e. agentic).
when_to_use:
  - Deciding how much control to delegate to AI for a given task
do_not_use_when:
  - Automation level is fixed by strict regulatory or safety requirements
why_to_use: >
  Matches automation level to task risk, low-risk tasks like reminders
  can be automated fully, while high-risk tasks like financial trades
  need careful oversight.
examples:
  - product: Grammarly (no automation)
    description: Highlights issues but requires the user to accept or reject
  - product: GitHub Copilot (partial automation)
    description: Suggests code the developer can accept, modify, or ignore
  - product: Ema (full automation/agentic)
    description: Autonomously plans and executes multi-step tasks without per-step prompts
risk: >
  Automating a high-risk task fully, without oversight, risks significant harm if errors occur.
```

### Progressive GenAI adoption
```yaml
id: progressive-genai-adoption
name: Progressive GenAI adoption
category: onboarding-discovery
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  A multi-dimensional onboarding strategy that helps users adopt an AI
  product gradually, building trust and understanding before revealing
  advanced capability.
when_to_use:
  - Introducing users to genuinely new AI technology for the first time
do_not_use_when:
  - Users are already highly familiar with the specific AI capability
why_to_use: >
  Mitigates the confusion and errors that come from users not
  understanding what a new system can and can't do.
examples:
  - product: Adobe Firefly
    description: Progressively onboards users from basic to advanced AI features
risk: >
  Overly slow progressive onboarding can feel patronizing to users who are ready to move faster.
```

### Leverage mental models
```yaml
id: leverage-mental-models
name: Leverage mental models
category: natural-interaction
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Designs new AI interactions to build on mental models users already
  hold, rather than introducing entirely unfamiliar interaction
  patterns.
when_to_use:
  - A close, familiar analog interaction pattern already exists
do_not_use_when:
  - The interaction has no useful real-world or digital precedent
why_to_use: >
  Products that align with existing mental models feel intuitive;
  products that clash with them cause frustration or abandonment.
examples:
  - product: GitHub Copilot
    description: Builds on developers' existing mental model of code autocomplete
  - product: Adobe Photoshop Generative Fill
    description: Builds on the familiar approach of extending an image with rectangular controls
risk: >
  Breaking an existing mental model without clearly explaining why creates confusion.
```

### Convey product limits
```yaml
id: convey-product-limits
name: Convey product limits
category: natural-interaction
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Clearly conveys what the AI model can and cannot do, including
  knowledge boundaries and capability limits.
when_to_use:
  - The model has real, known boundaries relevant to user tasks
do_not_use_when:
  - N/A, broadly good practice
why_to_use: >
  Builds user trust, sets appropriate expectations, and reduces
  frustration when the model fails or behaves unexpectedly.
examples:
  - product: Claude
    description: States its knowledge cutoff when a question falls outside its training data
  - product: Amazon Rufus
    description: States it can only help with shopping-related questions when asked something unrelated
risk: >
  Limitations buried only in fine print or documentation go unnoticed by most users.
```

### Display chain of thought (CoT)
```yaml
id: display-chain-of-thought
name: Display chain of thought (CoT)
category: trust-transparency
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Reveals the AI's structured, step-by-step reasoning process as it
  arrives at an answer, rather than only the final output.
when_to_use:
  - The task is complex or high-stakes enough that reasoning steps matter
  - Transparency into process would build trust or aid debugging
do_not_use_when:
  - Reasoning detail would overwhelm a user who just wants the answer
why_to_use: >
  Fosters trust, supports interpretability, and opens space for user
  feedback, especially in ambiguous or high-stakes scenarios.
examples:
  - product: Perplexity
    description: Displays its research and processing steps to show how it reached an answer
  - product: Khanmigo
    description: Guides students step by step through problems, mimicking human tutoring reasoning
risk: >
  Long reasoning traces can overwhelm users who just want a fast, final answer.
```

### Leverage multiple outputs
```yaml
id: leverage-multiple-outputs
name: Leverage multiple outputs
category: output-presentation
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Presents multiple varied outputs from the same prompt side by side,
  exploiting the model's probabilistic nature to give users real
  choice.
when_to_use:
  - The task is subjective or creative with no single correct answer
do_not_use_when:
  - There is one clearly correct answer to the task
why_to_use: >
  Helps users creatively explore, compare, and refine toward the
  option that best matches their intent.
examples:
  - product: Google Gemini
    description: Provides multiple response options to help users explore and refine
  - product: Midjourney remix
    description: Lets users adjust prompts to guide variations and edits
risk: >
  Too many variations at once creates choice overload and slows decisions.
```

### Provide data sources
```yaml
id: provide-data-sources
name: Provide data sources
category: trust-transparency
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Clearly articulates the data or sources an AI response is grounded
  in, essential for transparency and credibility.
when_to_use:
  - High-stakes factual domains like healthcare, finance, or legal guidance
do_not_use_when:
  - The task is purely creative with no factual grounding claim
why_to_use: >
  Helps users assess reliability and avoid trusting misinformation
  presented with false confidence.
examples:
  - product: NotebookLM
    description: Adds citations linking each answer directly to the source document section
  - product: Adobe Firefly
    description: Discloses that Generative Fill is trained on licensed and public domain content
risk: >
  If sources aren't actually reliable or are fabricated, disclosure creates false credibility.
```

### Convey model confidence
```yaml
id: convey-model-confidence
name: Convey model confidence
category: trust-transparency
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Communicates how certain the model is about its output, using
  percentages, progress bars, or verbal qualifiers, based on context
  and decision stakes.
when_to_use:
  - High-stakes scenarios like healthcare, finance, or legal advice
do_not_use_when:
  - Low-stakes scenarios like art or storytelling, where confidence adds confusion, not value
why_to_use: >
  Helps users assess reliability and make better-informed decisions
  based on how much to trust a given output.
examples:
  - product: Grammarly
    description: 'Uses verbal qualifiers like "likely" alongside its suggested content'
risk: >
  In low-stakes creative contexts, confidence scores introduce unnecessary friction and confusion.
```

### Design for memory and recall
```yaml
id: design-for-memory-and-recall
name: Design for memory and recall
category: memory-context
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Enables the AI to store and reuse information from past interactions,
  ephemeral (session-only) or persistent (cross-session), to improve
  continuity and reduce repeated input.
when_to_use:
  - Long-running or multi-step tasks benefit from continuity across sessions
do_not_use_when:
  - Sessions are meant to be fully independent, e.g. a real-time shopping assistant
why_to_use: >
  Enhances personalization, reduces user burden, and supports complex,
  longitudinal workflows.
examples:
  - product: ChatGPT Memory
    description: Offers extensive controls to view, update, or delete stored memories
risk: >
  Users may not realize what's being remembered unless transparency and controls are clear.
```

### Provide contextual input parameters
```yaml
id: provide-contextual-input-parameters
name: Provide contextual input parameters
category: personalization-context-awareness
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Streamlines interaction by leveraging user-specific data or past
  behavior to tailor available inputs and functionalities toward user
  intent.
when_to_use:
  - Prior interactions or similar users provide useful signal for the current task
do_not_use_when:
  - No meaningful contextual data exists yet for the user
why_to_use: >
  Gets users to their goal faster by reducing the manual specification
  needed for each interaction.
examples:
  - product: Perplexity
    description: Offers smart next-query suggestions based on the current query thread
  - product: ElevenLabs
    description: Surfaces presets or defaults to fine-tune voice generation settings
risk: >
  Contextual defaults based on wrong assumptions can steer users away from what they actually want.
```

### Design for co-pilot / co-editing / partial automation
```yaml
id: design-for-co-pilot-co-editing
name: Design for co-pilot / co-editing / partial automation
category: collaboration-handoff
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  An augmentation pattern where the AI acts as a collaborative
  assistant, offering contextual insights while the human retains
  authorship and final decision-making.
when_to_use:
  - Outcomes are subjective and creative input from the user is critical
do_not_use_when:
  - The task benefits more from full automation than shared authorship
why_to_use: >
  Speeds up workflows and reduces cognitive load while preserving the
  human's creative control and final say.
examples:
  - product: Notion AI
    description: Helps draft, summarize, and edit content while the user controls the final version
  - product: Jasper AI
    description: Lets users set brand voice and tone guidelines to structure AI output
risk: >
  If the AI's suggestions are too dominant, users can feel their authorship is diminished.
```

### Design user controls for automation
```yaml
id: design-user-controls-for-automation
name: Design user controls for automation
category: oversight-control
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Builds UI-level mechanisms, toggles, sliders, or rule-based settings,
  that let users manage or override automation.
when_to_use:
  - No system can anticipate every user context or edge case
do_not_use_when:
  - Automation is fully deterministic and low-risk by design
why_to_use: >
  Gives users agency and keeps trust intact even when the AI gets
  something wrong.
examples:
  - product: Canva Magic Studio
    description: Starts with simple suggestions, then progressively reveals advanced automation tools
  - product: Gmail
    description: Lets users disable Smart Compose entirely
  - product: GitHub Copilot
    description: Lets developers reject, modify, or undo inline suggestions easily
risk: >
  Controls that are hard to find provide agency in theory but not in practice.
```

### Design for user input error states
```yaml
id: design-for-user-input-error-states
name: Design for user input error states
category: error-recovery
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Handles cases where user input is ambiguous, incomplete, or contains
  errors, gracefully, since these often reflect a mismatch between
  user expectation and system understanding.
when_to_use:
  - Input errors and ambiguity are common in the product's real usage
do_not_use_when:
  - Input is always highly structured and unambiguous by design
why_to_use: >
  Addressing input errors gracefully maintains trust and smooth
  interaction instead of confusing or frustrating the user.
examples:
  - product: ChatGPT
    description: 'Asks clarifying follow-up questions rather than guessing at vague prompts like "what''s the capital?"'
  - product: ChatGPT edit button
    description: Lets users revise their submitted prompt directly
risk: >
  Guessing confidently at ambiguous input instead of clarifying produces low-quality, misaligned output.
```

### Design for AI system error states
```yaml
id: design-for-ai-system-error-states
name: Design for AI system error states
category: error-recovery
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Designs for the three main categories of AI failure, system failure
  (wrong output), system limitation (no output), and contextual errors
  (misunderstood output), each requiring different recovery paths.
when_to_use:
  - The system can hallucinate, misclassify, or misunderstand context
do_not_use_when:
  - N/A, broadly necessary wherever GenAI output is probabilistic
why_to_use: >
  Unlike traditional systems, GenAI errors are hard to predict, so
  designed recovery paths help users understand boundaries and regain
  control.
examples:
  - product: Citibank fraud detection
    description: '"Unusual transaction. Your card is blocked. Please verify your identity" for system failure states'
  - product: ODQA systems
    description: '"Sorry, we don''t have enough information" for system limitation errors'
risk: >
  Treating all error types the same, rather than distinguishing failure, limitation, and misunderstanding, leads to unhelpful generic error messages.
```

### Design to capture user feedback
```yaml
id: design-to-capture-user-feedback
name: Design to capture user feedback
category: feedback-learning
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Creates a continuous feedback loop, combining implicit signals
  (skips, edits, dismissals) and explicit signals (ratings, thumbs
  up/down) to improve both model behavior and product fit.
when_to_use:
  - The system's real-world alignment depends on ongoing user signal
do_not_use_when:
  - The system doesn't learn or improve from usage data
why_to_use: >
  Creates a loop where both the system and user behavior adapt over
  time, improving alignment with real user needs.
examples:
  - product: ChatGPT
    description: Uses reaction buttons and comment boxes to collect explicit user feedback
risk: >
  Feedback that visibly leads nowhere discourages users from continuing to provide it.
```

### Design for model evaluation
```yaml
id: design-for-model-evaluation
name: Design for model evaluation
category: feedback-learning
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Establishes continuous evaluation of model performance, combining
  LLM-as-a-judge, code-based evaluation, and human review, especially
  in high-stakes domains.
when_to_use:
  - The system operates in a high-stakes domain or needs ongoing quality assurance
do_not_use_when:
  - Output quality is trivially easy to verify without formal evaluation
why_to_use: >
  Ensures the model performs as intended and catches errors or
  hallucinations before they compound into user-facing harm.
examples:
  - product: Amazon Bedrock
    description: Uses an LLM-as-a-judge approach to review and rate responses automatically
risk: >
  Relying solely on automated LLM-as-a-judge evaluation without human spot-checks can miss subtle failure modes.
```

### Design for AI guardrails
```yaml
id: design-for-ai-guardrails
name: Design for AI guardrails
category: safety-harm-prevention
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Builds practices and principles into GenAI products to minimize
  harm, misinformation, toxic behavior, and bias, protecting users and
  meeting regulatory obligations.
when_to_use:
  - The product could plausibly surface harmful, biased, or unsafe content
do_not_use_when:
  - N/A, broadly necessary for any GenAI product with real users
why_to_use: >
  Protects users, builds trust and adoption, and increasingly meets
  legal requirements like the EU AI Act.
examples:
  - product: Miko robot
    description: 'Responds "I am not allowed to entertain such language" when it detects profanity'
  - product: Instagram
    description: Provides an in-app option for users to report harmful, biased, or misinformed AI output
risk: >
  Guardrails that are too aggressive can feel paternalistic and block legitimate use cases.
```

### Communicate data privacy and controls
```yaml
id: communicate-data-privacy-and-controls
name: Communicate data privacy and controls
category: privacy-data-governance
type: principle
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/20-genai-ux-patterns-examples-and-implementation-tactics-5b1868b7d4a1
what_it_is: >
  Clearly conveys how user data is collected, stored, processed, and
  protected, since GenAI systems often rely on sensitive or contextual
  data.
when_to_use:
  - The GenAI feature accesses personal, contextual, or behavioral data
do_not_use_when:
  - No meaningful user data is involved
why_to_use: >
  Mishandled data communication leads to user distrust and legal risk;
  clear privacy communication helps users feel safe and in control.
examples:
  - product: Slack AI
    description: Clearly communicates that customer data remains customer-owned and isn't used to train third-party models
risk: >
  Vague or legalistic privacy language technically discloses but fails to actually reassure users.
```

---

## Source: UX Collective — "8 Voice AIUX Patterns" (Sharang Sharma)

### Avatar video call
```yaml
id: avatar-video-call
name: Avatar video call
category: natural-interaction
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/8-voice-aiux-patterns-81324c8feaa0
what_it_is: >
  Presents the AI as a visual avatar in a simulated video call format,
  combining voice with a synthetic face or character.
when_to_use:
  - Emotional connection and presence matter to the use case (e.g. companionship, coaching)
do_not_use_when:
  - A synthetic face would feel uncanny or unnecessary for the task
why_to_use: >
  Adds a layer of social presence that voice alone doesn't provide,
  useful for emotionally engaged use cases.
examples:
  - product: AI companion apps with animated avatar video calls
    description: Simulated video-call format with a visual, expressive AI persona
risk: >
  A synthetic face that falls into the "uncanny valley" can undermine rather than build trust.
```

### Turn-by-turn interview
```yaml
id: turn-by-turn-interview
name: Turn-by-turn interview
category: natural-interaction
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/8-voice-aiux-patterns-81324c8feaa0
what_it_is: >
  Structures voice interaction as a sequential, one-question-at-a-time
  interview format, guiding the user through a fixed set of prompts.
when_to_use:
  - The task requires gathering structured information step by step
do_not_use_when:
  - The conversation needs to be open-ended and non-linear
why_to_use: >
  Reduces cognitive load by asking one clear thing at a time instead of
  an open-ended prompt.
examples:
  - product: AI voice-based job application screeners
    description: Sequential, single-question voice prompts guiding the candidate through a structured flow
risk: >
  Rigid sequencing can feel robotic and frustrate users who want to answer multiple things at once.
```

### Voice-augmented chat
```yaml
id: voice-augmented-chat
name: Voice-augmented chat
category: natural-interaction
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/8-voice-aiux-patterns-81324c8feaa0
what_it_is: >
  Adds voice input and output as an optional layer on top of an
  otherwise text-based chat interface.
when_to_use:
  - Users benefit from switching between voice and text depending on context
do_not_use_when:
  - The product is exclusively voice-first or exclusively text-first by design
why_to_use: >
  Gives users flexibility to choose the input mode that fits their
  current situation without forcing one modality.
examples:
  - product: ChatGPT Voice Mode
    description: Lets users switch between typed and spoken interaction within the same chat
risk: >
  Inconsistent behavior between voice and text modes can confuse users switching between them.
```

### Voice-to-text dictation
```yaml
id: voice-to-text-dictation
name: Voice-to-text dictation
category: authoring-input
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/8-voice-aiux-patterns-81324c8feaa0
what_it_is: >
  Transcribes spoken input directly into an editable text field,
  treating voice purely as an input method rather than a conversational
  medium.
when_to_use:
  - Speed of text entry matters more than a conversational experience
do_not_use_when:
  - The interaction genuinely benefits from being conversational, not just transcriptive
why_to_use: >
  Faster than typing for many users, especially on mobile, while still
  producing standard editable text output.
examples:
  - product: Voice-to-text in messaging apps
    description: Spoken input transcribed directly into a standard text field
risk: >
  Transcription errors can silently introduce mistakes the user doesn't notice before sending.
```

### Phone call
```yaml
id: phone-call
name: Phone call
category: natural-interaction
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/8-voice-aiux-patterns-81324c8feaa0
what_it_is: >
  A fully voice-only AI interaction modeled on a traditional phone
  call, with no visual interface at all.
when_to_use:
  - The context is hands-free and eyes-free by necessity (e.g. driving)
  - The task genuinely doesn't need visual support
do_not_use_when:
  - The task benefits from visual reference alongside conversation
why_to_use: >
  Matches an extremely familiar interaction mode for hands-free
  scenarios with zero learning curve.
examples:
  - product: AI customer service phone lines
    description: Fully voice-only interaction with no accompanying visual interface
risk: >
  Complex or highly visual tasks are poorly suited to voice-only interaction and cause frustration.
```

### Scripted video with voice gates
```yaml
id: scripted-video-voice-gates
name: Scripted video with voice gates
category: natural-interaction
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/8-voice-aiux-patterns-81324c8feaa0
what_it_is: >
  Combines a mostly pre-scripted video experience with voice-activated
  decision points ("gates") where the user's spoken response branches
  the content.
when_to_use:
  - Content needs to be mostly pre-produced but still feel responsive
do_not_use_when:
  - Full real-time conversational flexibility is required throughout
why_to_use: >
  Combines the production quality of scripted video with just enough
  interactivity to feel responsive to the user.
examples:
  - product: Interactive AI training or onboarding videos with voice checkpoints
    description: Pre-scripted video content with voice-activated branching decision points
risk: >
  Limited branching can feel scripted and shallow if the voice gates don't genuinely change the outcome.
```

### Co-pilot transcript
```yaml
id: co-pilot-transcript
name: Co-pilot transcript
category: natural-interaction
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/8-voice-aiux-patterns-81324c8feaa0
what_it_is: >
  Displays a live, scrolling text transcript of an ongoing voice
  conversation, letting the user reference or scan what's been said.
when_to_use:
  - Users benefit from being able to scan back through what was said
do_not_use_when:
  - The conversation is too short or ephemeral to warrant a visible transcript
why_to_use: >
  Combines the speed of voice interaction with the scannability and
  reference value of text.
examples:
  - product: AI meeting assistants with live transcript alongside voice interaction
    description: Real-time text transcript displayed during a live voice conversation
risk: >
  Transcription errors in the live transcript can look authoritative even when inaccurate.
```

### Ambient wake-word assistant
```yaml
id: ambient-wake-word-assistant
name: Ambient wake-word assistant
category: personalization-context-awareness
type: pattern
source:
  name: UX Collective (Sharang Sharma)
  url: https://uxdesign.cc/8-voice-aiux-patterns-81324c8feaa0
what_it_is: >
  An always-listening AI that stays passive in the background until
  triggered by a specific spoken wake word.
when_to_use:
  - Hands-free, always-available assistance is the core value proposition
do_not_use_when:
  - Privacy expectations make always-listening behavior unacceptable to users
why_to_use: >
  Removes the need for a manual invocation step entirely, enabling
  fully hands-free interaction whenever needed.
examples:
  - product: Amazon Alexa, Google Assistant
    description: Always-listening for a wake word, then activates full voice interaction
risk: >
  Always-listening behavior raises real privacy concerns that require careful, explicit communication.
```

---

## Source: aiuxdesign.guide

### Category: Adaptive & Intelligent Systems

### Adaptive Interfaces
```yaml
id: adaptive-interfaces
name: Adaptive Interfaces
category: personalization-context-awareness
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/adaptive-interfaces
what_it_is: >
  Interfaces that learn from user behavior and automatically adjust
  their layout and functionality to match individual usage patterns.
when_to_use:
  - Usage patterns vary meaningfully between users over time
do_not_use_when:
  - Interface consistency across all users matters more than personalization
why_to_use: >
  Reduces friction by surfacing what each individual user actually
  needs rather than a generic default layout.
examples:
  - product: Duolingo
    description: Adjusts lesson difficulty and content based on individual learning patterns
  - product: Netflix, Spotify
    description: Adapts homepage layout and content ordering to individual usage behavior
risk: >
  A constantly shifting interface can disorient users who rely on spatial memory of where things are.
```

### Guided Learning
```yaml
id: guided-learning
name: Guided Learning
category: onboarding-discovery
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/guided-learning
what_it_is: >
  Breaks complex tasks into guided, sequential steps that adapt to the
  user's demonstrated knowledge level.
when_to_use:
  - The task is complex enough to overwhelm a novice user if shown all at once
do_not_use_when:
  - Users are already expert and want the full task surface immediately
why_to_use: >
  Reduces cognitive load for beginners while still letting the system
  serve advanced users appropriately.
examples:
  - product: Figma
    description: Guides new users through complex design tool capabilities incrementally
  - product: GitHub
    description: Adapts onboarding guidance based on demonstrated developer experience level
risk: >
  Guided flows that don't adapt fast enough frustrate users who are more advanced than assumed.
```

### Ambient Intelligence
```yaml
id: ambient-intelligence
name: Ambient Intelligence
category: personalization-context-awareness
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/ambient-intelligence
what_it_is: >
  Unobtrusive AI that senses context and provides assistance without
  requiring explicit user interaction to trigger it.
when_to_use:
  - Assistance should feel invisible and non-intrusive by design
do_not_use_when:
  - Users need explicit control over every instance of AI action
why_to_use: >
  Provides help at exactly the right moment without demanding active
  user attention or invocation.
examples:
  - product: Apple
    description: Ambient, context-sensing assistance across the device ecosystem
  - product: Google, Tesla
    description: Background context-awareness that surfaces relevant help without explicit prompts
risk: >
  Invisible assistance can feel like a loss of control if users don't understand what triggered it.
```

### Predictive Anticipation
```yaml
id: predictive-anticipation
name: Predictive Anticipation
category: personalization-context-awareness
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/predictive-anticipation
what_it_is: >
  AI that predicts user needs before they're expressed, pre-loading
  content and suggesting next actions based on behavioral patterns.
when_to_use:
  - Behavioral data is rich enough to support confident prediction
do_not_use_when:
  - Prediction confidence is low or behavior is too novel
why_to_use: >
  Removes friction and wait time by having relevant content or actions
  ready before the user explicitly asks.
examples:
  - product: Netflix, Spotify
    description: Pre-loads and surfaces content predicted to match upcoming user behavior
risk: >
  Consistently wrong predictions erode trust in the system's understanding of the user.
```

### Category: Human-AI Collaboration

### Contextual Assistance
```yaml
id: contextual-assistance
name: Contextual Assistance
category: personalization-context-awareness
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/contextual-assistance
what_it_is: >
  Offers timely, proactive help and suggestions based on the user's
  current context, history, and demonstrated needs.
when_to_use:
  - The system has enough context to offer genuinely relevant help at the right moment
do_not_use_when:
  - Context signal is too weak to produce relevant, non-generic suggestions
why_to_use: >
  Delivers help exactly when and where it's useful, rather than
  requiring users to seek it out.
examples:
  - product: Gmail Smart Compose
    description: Finishes the sentence you're writing based on immediate context
  - product: GitHub, Google, Granola
    description: Contextual assistance surfaced within the user's active workflow
risk: >
  Assistance offered at the wrong moment interrupts rather than helps.
```

### Human-in-the-Loop
```yaml
id: human-in-the-loop
name: Human in the Loop
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/human-in-the-loop
what_it_is: >
  Requires explicit human approval before the AI takes a consequential
  action, pausing to show what it intends to do and letting the user
  cancel or send.
when_to_use:
  - Actions are costly, sensitive, or hard to reverse
  - Trust in the agent's judgment is still being established
do_not_use_when:
  - The action is low-risk and easily reversible
why_to_use: >
  Preserves human accountability and judgment for decisions where
  full automation carries too much risk.
examples:
  - product: Email drafting assistants
    description: Draft a message but require explicit user send before it goes out
risk: >
  Too many approval gates on low-risk actions creates fatigue, and users start approving without reading.
```

### Augmented Creation
```yaml
id: augmented-creation
name: Augmented Creation
category: collaboration-handoff
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/augmented-creation
what_it_is: >
  Empowers users to create content with AI functioning as a
  collaborative creative partner rather than a replacement.
when_to_use:
  - The task is creative and the user wants to remain the author
do_not_use_when:
  - Full automation better serves the user's actual goal
why_to_use: >
  Speeds up creative work while preserving the human's creative
  authorship and final decision-making.
examples:
  - product: Figma, GitHub
    description: AI-assisted creation tools where the human directs and the AI executes or suggests
risk: >
  If AI suggestions dominate too heavily, users can feel their creative ownership is diminished.
```

### Collaborative AI
```yaml
id: collaborative-ai
name: Collaborative AI
category: collaboration-handoff
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/collaborative-ai
what_it_is: >
  Enables effective collaboration between multiple human users and AI
  together within a shared workflow.
when_to_use:
  - Multiple people work together in the same AI-assisted workspace
do_not_use_when:
  - The product is single-user by design
why_to_use: >
  Extends AI assistance to team contexts, not just individual use,
  supporting shared workflows.
examples:
  - product: Notion, Slack
    description: AI features that operate within a shared, multi-user workspace
risk: >
  Unclear attribution of AI vs. human contributions can create confusion in collaborative work.
```

### Feedback Loops
```yaml
id: feedback-loops
name: Feedback
category: feedback-learning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/feedback-loops
what_it_is: >
  Collects thumbs and comments on AI responses to improve future
  answers, closing the loop between user reaction and system behavior.
when_to_use:
  - Ongoing improvement of model behavior depends on real usage signal
do_not_use_when:
  - The system doesn't learn or adapt from feedback at all
why_to_use: >
  Creates a continuous feedback loop where both the system and user
  behavior adapt over time.
examples:
  - product: ChatGPT
    description: Thumbs up/down and comment boxes attached to every response
risk: >
  Feedback that visibly leads nowhere discourages users from continuing to give it.
```

### Graceful Handoff
```yaml
id: graceful-handoff
name: Graceful Handoff
category: collaboration-handoff
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/graceful-handoff
what_it_is: >
  Seamless transitions between AI automation and human control,
  without jarring or confusing shifts.
when_to_use:
  - Tasks move between automated and manual control at some point
do_not_use_when:
  - The task is fully automated or fully manual with no transition point
why_to_use: >
  A poorly handled transition undermines trust more than either
  automation or manual control alone would.
examples:
  - product: Adobe, Tesla
    description: Clear, smooth transitions between AI-assisted and fully manual control
risk: >
  Abrupt or unclear handoffs leave users unsure whether they or the AI are currently in control.
```

### Autonomy Spectrum
```yaml
id: autonomy-spectrum
name: Autonomy Spectrum
category: agentic-autonomy
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/autonomy-spectrum
what_it_is: >
  An agentic pattern providing a spectrum of autonomy levels, from
  passive suggestions to full autonomy, that users can adjust per task
  type for granular control over how independently an agent operates.
when_to_use:
  - Different tasks within the same product warrant different autonomy levels
do_not_use_when:
  - A single fixed autonomy level suffices for all tasks in the product
why_to_use: >
  Lets users calibrate trust and control per task rather than
  accepting one blanket autonomy setting.
examples:
  - product: Claude, Cursor, GitHub
    description: Adjustable autonomy levels for agentic coding tasks
risk: >
  Too many granular autonomy settings can overwhelm users who just want sensible defaults.
```

### Intent Preview
```yaml
id: intent-preview
name: Intent Preview
category: agentic-autonomy
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/intent-preview
what_it_is: >
  An agentic pattern where, before any significant action, the agent
  presents a clear, scannable summary of what it intends to do,
  including planned steps, reversibility status, and edit controls.
when_to_use:
  - The agent is about to take a consequential or hard-to-reverse action
do_not_use_when:
  - The action is trivially low-risk and instantly reversible
why_to_use: >
  Lets users catch misalignment or errors before the agent commits to
  an action, preserving control without slowing down every step.
examples:
  - product: Claude, GitHub
    description: Presents a scannable plan for approval before executing agentic changes
risk: >
  Previews that are too detailed or too frequent create approval fatigue.
```

### Escalation Pathways
```yaml
id: escalation-pathways
name: Escalation Pathways
category: agentic-autonomy
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/escalation-pathways
what_it_is: >
  An agentic pattern designing structured triggers and handoff
  mechanisms so agents can pause and ask for human guidance when they
  hit ambiguity, conflicts, or decisions beyond their authorization.
when_to_use:
  - The agent may encounter ambiguous or out-of-scope situations mid-task
do_not_use_when:
  - The agent's task space is fully bounded with no ambiguity possible
why_to_use: >
  Prevents agents from either guessing wrong or getting stuck, by
  giving them a clear path to pause and ask without losing context.
examples:
  - product: Claude, Notion
    description: Structured pause-and-ask mechanisms when an agent hits its authorization boundary
risk: >
  Escalation triggers set too conservatively interrupt the workflow more than necessary.
```

### Mixed-Initiative Control
```yaml
id: mixed-initiative-control
name: Mixed-Initiative Control
category: collaboration-handoff
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/mixed-initiative-control
what_it_is: >
  An agentic pattern where control flows seamlessly between human and
  agent, supporting parallel work zones, interruptible agent activity,
  and natural handoffs without a formal "take over" action.
when_to_use:
  - Human and agent need to work on the same task simultaneously or interchangeably
do_not_use_when:
  - Control needs to be strictly one-directional at any given time
why_to_use: >
  Removes the friction of formal handoff steps, letting collaboration
  feel fluid rather than turn-based.
examples:
  - product: Claude, Figma, Notion
    description: Fluid, interruptible control between human and agent within a shared workspace
risk: >
  Ambiguity about who currently has control can lead to conflicting or overwritten changes.
```

### Workspace-Native Agent Integration
```yaml
id: workspace-native-agent-integration
name: Workspace-Native Agent Integration
category: agentic-autonomy
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/workspace-native-agents
what_it_is: >
  Embeds AI capabilities directly inside existing tools so users never
  need to leave their working context to get help.
when_to_use:
  - Users already work primarily within an established tool or workspace
do_not_use_when:
  - The AI feature genuinely needs a dedicated, separate interface
why_to_use: >
  Keeps AI assistance embedded in the natural flow of work instead of
  forcing a disruptive context switch.
examples:
  - product: Figma, GitHub, Gmail
    description: AI capabilities embedded natively within the existing tool's workflow
risk: >
  Deeply embedded AI features can be harder to discover than a standalone, dedicated surface.
```

### Category: Trustworthy & Reliable AI

### Explainable AI (XAI)
```yaml
id: explainable-ai-xai
name: Explainable AI (XAI)
category: trust-transparency
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/explainable-ai
what_it_is: >
  Makes AI decisions understandable via visualizations, explanations,
  and transparent reasoning rather than a black-box output.
when_to_use:
  - Users need to understand why the AI reached a particular conclusion
do_not_use_when:
  - The reasoning is trivial or self-evident from the output
why_to_use: >
  Builds trust and supports informed decision-making, especially in
  higher-stakes contexts.
examples:
  - product: Claude, Hugging Face, Perplexity
    description: Surfaces reasoning and explanation alongside AI-generated output
risk: >
  Explanations that are technically accurate but hard to understand fail to actually build trust.
```

### Responsible AI Design
```yaml
id: responsible-ai-design
name: Responsible AI Design
category: safety-harm-prevention
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/responsible-ai-design
what_it_is: >
  Prioritizes fairness, transparency, and accountability throughout the
  entire AI product lifecycle, not just at launch.
when_to_use:
  - The AI system makes decisions that affect real people meaningfully
do_not_use_when:
  - N/A, broadly relevant for any AI product with real users
why_to_use: >
  Reduces the risk of harm, bias, and reputational damage, and
  increasingly meets regulatory expectations.
examples:
  - product: Hugging Face, IBM, Microsoft
    description: Documented fairness and accountability practices across the product lifecycle
risk: >
  Treating responsible design as a one-time audit rather than an ongoing practice lets issues drift back in.
```

### Error Recovery & Graceful Degradation
```yaml
id: error-recovery-graceful-degradation
name: Error Recovery & Graceful Degradation
category: error-recovery
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/error-recovery
what_it_is: >
  Designs the system to fail gracefully, with clear recovery paths,
  when something goes wrong, rather than failing hard or silently.
when_to_use:
  - The AI system's failure modes are non-trivial and have real consequences
do_not_use_when:
  - N/A, broadly necessary practice
why_to_use: >
  How a system handles failure shapes long-term trust more than its
  raw accuracy rate.
examples:
  - product: ChatGPT, GitHub, Grammarly
    description: Clear, actionable recovery paths shown when the system fails
risk: >
  Poorly handled failures, silent or confusing, cause disproportionate trust damage.
```

### Safe Exploration
```yaml
id: safe-exploration
name: Safe Exploration
category: oversight-control
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/safe-exploration
what_it_is: >
  Provides sandbox environments where users can experiment with AI
  features without risk of permanent or costly consequences.
when_to_use:
  - Users are new to a feature and may be hesitant to try it
do_not_use_when:
  - Actions are already low-risk and trivially reversible
why_to_use: >
  Encourages adoption and exploration, which is how users build
  accurate mental models of what the AI can do.
examples:
  - product: GitHub, OpenAI, Photoshop
    description: Sandbox or undo-friendly environments for experimenting with AI features
risk: >
  Without a clear safety net, users default to avoiding the AI feature entirely.
```

### Confidence Visualization
```yaml
id: confidence-visualization
name: Confidence Visualization
category: trust-transparency
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/confidence-visualization
what_it_is: >
  Displays AI certainty levels through visual indicators, helping users
  understand prediction reliability and decide when to trust or verify
  outputs.
when_to_use:
  - Confidence level should meaningfully change how the user acts
do_not_use_when:
  - Confidence is uniformly high and adds no decision-relevant information
why_to_use: >
  Helps users calibrate trust appropriately instead of treating every
  output as equally certain.
examples:
  - product: AWS, GPTZero
    description: Visual confidence indicators attached to AI predictions
risk: >
  Numeric confidence indicators are often over-trusted as more precise than they actually are.
```

### Plan Summary
```yaml
id: plan-summary
name: Plan Summary
category: agentic-autonomy
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/plan-summary
what_it_is: >
  An agentic pattern providing a structured breakdown of the agent's
  reasoning and approach, goal interpretation, strategy, subtask
  checklist, and assumptions, so users can evaluate the plan before
  execution.
when_to_use:
  - The agent's task involves multiple steps or meaningful interpretation of an ambiguous goal
do_not_use_when:
  - The task is simple enough that a plan summary adds no value
why_to_use: >
  Lets users catch misunderstandings in the agent's interpretation of
  the goal before any execution begins.
examples:
  - product: ChatGPT, GitHub, Google
    description: Structured plan breakdown shown before agentic execution begins
risk: >
  A plan that looks thorough can still miss important edge cases the user doesn't catch on review.
```

### Action Audit Trail
```yaml
id: action-audit-trail
name: Action Audit Trail
category: agentic-autonomy
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/action-audit-trail
what_it_is: >
  An agentic pattern providing a timestamped, structured log of every
  action the agent took, grouped by task, with reversibility status,
  selective undo, and diff views.
when_to_use:
  - The agent takes multiple actions autonomously that need to be reviewable after the fact
do_not_use_when:
  - The agent takes no meaningful independent action to log
why_to_use: >
  Lets users review, understand, and correct agent behavior after
  execution, supporting accountability and trust.
examples:
  - product: Claude, GitHub, Zapier
    description: Structured, reviewable log of every agentic action with undo support
risk: >
  Logs that are too technical or verbose to scan provide accountability in name only.
```

### Trust Calibration
```yaml
id: trust-calibration
name: Trust Calibration
category: agentic-autonomy
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/trust-calibration
what_it_is: >
  An agentic pattern designing a system that progressively builds
  appropriate trust through demonstrated competence, showing track
  records per domain, celebrating milestones, and adjusting oversight
  based on actual agent performance.
when_to_use:
  - The agent's reliability genuinely improves or varies by domain over time
do_not_use_when:
  - Trust level is fixed and doesn't need to adapt to demonstrated performance
why_to_use: >
  Matches the level of human oversight to the agent's actual, earned
  track record rather than a static, one-size-fits-all trust level.
examples:
  - product: ChatGPT, GitHub, Notion
    description: Oversight levels that adjust based on the agent's demonstrated track record
risk: >
  Trust that builds too quickly based on limited samples can lead to under-oversight before it's warranted.
```

### Agent Reflection & Learning
```yaml
id: agent-reflection-learning
name: Agent Reflection & Learning
category: agentic-autonomy
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/agent-reflection-learning
what_it_is: >
  Shows users what the agent has learned from past corrections, so
  trust builds through visible, cumulative improvement over time.
when_to_use:
  - The agent adapts its future behavior based on past corrections
do_not_use_when:
  - The agent's behavior is static and doesn't adapt from corrections
why_to_use: >
  Visible learning demonstrates the agent is genuinely improving,
  reinforcing trust more than a static, unchanging system would.
examples:
  - product: ChatGPT, Claude
    description: Surfaces visible improvement based on cumulative user corrections
risk: >
  Overstating what the agent has "learned" when changes are superficial can mislead users about real capability.
```

### Category: Natural Interaction

### Conversational UI
```yaml
id: conversational-ui
name: Conversational UI
category: natural-interaction
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/conversational-ui
what_it_is: >
  Designs intuitive, engaging, human-like interactions via chat and
  voice interfaces as the primary interaction mode.
when_to_use:
  - Intent is varied or complex enough that structured UI can't capture it well
do_not_use_when:
  - The task has a small number of well-defined actions better served by buttons or forms
why_to_use: >
  Handles open-ended intent more naturally than rigid form-based
  interfaces.
examples:
  - product: ChatGPT, Claude
    description: Chat as the primary and often sole interaction surface
risk: >
  Chat puts the burden of clearly articulating intent on the user, which is harder than it looks.
```

### Multimodal Interaction
```yaml
id: multimodal-interaction
name: Multimodal Interaction
category: natural-interaction
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/multimodal-interaction
what_it_is: >
  Combines voice, touch, gesture, text, and visual input for natural,
  flexible interaction rather than forcing a single input mode.
when_to_use:
  - Different contexts call for different input modes for the same task
do_not_use_when:
  - A single input mode already serves the use case well
why_to_use: >
  Lets users choose the most natural input for their current context
  instead of being locked into one modality.
examples:
  - product: Google, Tesla
    description: Combines voice, touch, and visual input across contexts
risk: >
  Supporting many modes adds real design and engineering complexity and can create inconsistent experiences across them.
```

### Context Switching
```yaml
id: context-switching
name: Context Switching
category: natural-interaction
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/context-switching
what_it_is: >
  Supports smooth transitions between tasks or topics while maintaining
  conversation continuity, rather than forcing a full reset.
when_to_use:
  - Users naturally jump between related subtasks within one session
do_not_use_when:
  - Sessions are meant to be single-purpose and linear
why_to_use: >
  Matches how people actually think and work, jumping between related
  threads, without penalizing them for it.
examples:
  - product: ChatGPT, Notion
    description: Maintains conversational continuity across topic shifts within a session
risk: >
  Poorly handled context switches can cause the AI to conflate unrelated threads.
```

### Progressive Disclosure
```yaml
id: progressive-disclosure
name: Progressive Disclosure
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/progressive-disclosure
what_it_is: >
  Gradually reveals complex information, starting with a concise
  summary and letting users expand into supporting detail on demand.
when_to_use:
  - The full answer or research trail would overwhelm at a glance
do_not_use_when:
  - The answer is already short enough to show in full immediately
why_to_use: >
  Serves both users who want a quick answer and users who want to
  dig into the detail, without forcing one experience on both.
examples:
  - product: Research assistants summarizing a competitive landscape
    description: Shows a short synthesis first, with sources and detail expandable underneath
risk: >
  Burying the actual answer under too many expandable layers defeats the point.
```

### Category: Performance & Efficiency

### Intelligent Caching
```yaml
id: intelligent-caching
name: Intelligent Caching
category: performance-efficiency
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/intelligent-caching
what_it_is: >
  Pre-fetches and caches AI content for instant results, reducing
  perceived latency for common or predictable requests.
when_to_use:
  - Certain requests or content are predictable enough to pre-fetch
do_not_use_when:
  - Requests are too varied or unpredictable to cache effectively
why_to_use: >
  Reduces wait time and improves perceived responsiveness of the
  product.
examples:
  - product: GitHub, Midjourney
    description: Pre-fetches and caches likely-needed AI content ahead of explicit request
risk: >
  Stale cached content shown instead of fresh results can mislead users.
```

### Progressive Enhancement
```yaml
id: progressive-enhancement
name: Progressive Enhancement
category: performance-efficiency
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/progressive-enhancement
what_it_is: >
  Provides an immediate basic response first, then progressively adds
  detail and accuracy as more processing completes.
when_to_use:
  - Full processing takes noticeably longer than a fast initial response
do_not_use_when:
  - Full response is already fast enough that staging adds no value
why_to_use: >
  Reduces perceived wait time by giving users something useful
  immediately rather than a blank loading state.
examples:
  - product: Claude, Dall-E, Perplexity
    description: Shows an immediate basic response before progressively refining detail and accuracy
risk: >
  If the initial response is misleading compared to the final one, early trust in it can misfire.
```

### Agent Status & Monitoring
```yaml
id: agent-status-monitoring
name: Agent Status & Monitoring
category: performance-efficiency
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/agent-status-monitoring
what_it_is: >
  An agentic pattern designing a layered status system, from ambient
  badges to glanceable progress panels to interrupting notifications,
  so users stay informed about agent activity without being forced to
  watch.
when_to_use:
  - The agent runs long or multi-step tasks in the background
do_not_use_when:
  - The agent's tasks complete instantly with no meaningful duration
why_to_use: >
  Keeps users appropriately informed without demanding constant
  attention, matching notification intensity to actual importance.
examples:
  - product: ChatGPT, Devin
    description: Layered status indicators from ambient to interrupting, matched to task importance
risk: >
  Poorly calibrated status escalation either under-notifies on important events or over-notifies on trivial ones.
```

### Category: Privacy & Control

### Privacy-First Design
```yaml
id: privacy-first-design
name: Privacy-First Design
category: privacy-data-governance
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/privacy-first-design
what_it_is: >
  Minimizes data collection by default and provides transparent
  privacy controls rather than collecting broadly and asking forgiveness later.
when_to_use:
  - Trust and privacy are core to the product's value proposition
do_not_use_when:
  - N/A, broadly good practice
why_to_use: >
  Builds durable trust, especially in privacy-sensitive product
  categories.
examples:
  - product: DuckDuckGo
    description: Minimal data collection as a core, marketed product principle
risk: >
  Privacy-first design can sometimes limit personalization quality compared to data-rich alternatives.
```

### Selective Memory
```yaml
id: selective-memory
name: Selective Memory
category: memory-context
type: pattern
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/selective-memory
what_it_is: >
  Lets users control exactly what the AI remembers, forgets, or
  ignores, with transparent, granular settings.
when_to_use:
  - The AI retains information across sessions and users need granular control over it
do_not_use_when:
  - The system retains no persistent memory at all
why_to_use: >
  Gives users precise agency over their own data footprint instead of
  an all-or-nothing memory toggle.
examples:
  - product: Anthropic, ChatGPT
    description: Granular memory controls letting users view, edit, or delete specific remembered facts
risk: >
  Memory controls that are too granular and complex can go unused simply due to friction.
```

### Category: Accessibility & Inclusion

### Universal Access Patterns
```yaml
id: universal-access-patterns
name: Universal Access Patterns
category: accessibility-inclusion
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/universal-access-patterns
what_it_is: >
  Ensures equitable AI product access for all abilities, languages, and
  assistive technologies, not just the majority use case.
when_to_use:
  - The product serves or could serve users with diverse abilities and languages
do_not_use_when:
  - N/A, broadly necessary for any product with a real user base
why_to_use: >
  Excludes fewer users and often improves the experience for everyone,
  not just those the patterns were designed for.
examples:
  - product: Be, Microsoft
    description: AI product features explicitly designed for accessibility across abilities
risk: >
  Treating accessibility as a late-stage add-on rather than a core design constraint produces weaker, bolted-on solutions.
```

### Category: Safety & Harm Prevention

### Crisis Detection & Escalation
```yaml
id: crisis-detection-escalation
name: Crisis Detection & Escalation
category: safety-harm-prevention
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/crisis-detection-escalation
what_it_is: >
  Detects signals of a user crisis and immediately provides access to
  professional resources rather than attempting to handle it purely
  conversationally.
when_to_use:
  - The product's domain makes user crisis situations plausible (mental health, safety)
do_not_use_when:
  - The product domain has no plausible connection to user crisis situations
why_to_use: >
  Protects vulnerable users by connecting them to real professional
  help rather than relying on the AI alone in a high-stakes moment.
examples:
  - product: ChatGPT, Woebot
    description: Detects crisis signals and surfaces professional resources immediately
risk: >
  Overly aggressive or clumsy detection can misfire and feel alarming or patronizing in non-crisis moments.
```

### Session Degradation Prevention
```yaml
id: session-degradation-prevention
name: Session Degradation Prevention
category: safety-harm-prevention
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/session-degradation-prevention
what_it_is: >
  Strengthens safety checks and behavior during extended conversations,
  using session limits to prevent gradual drift into unsafe territory.
when_to_use:
  - Long, sustained sessions could plausibly drift into unsafe patterns
do_not_use_when:
  - Sessions are naturally short and drift risk is minimal
why_to_use: >
  Prevents the gradual erosion of safety behavior that can occur over
  very long conversational sessions.
examples:
  - product: Wysa
    description: Session limits and reinforced safety checks in extended mental-health-adjacent conversations
risk: >
  Session limits applied too aggressively can interrupt legitimate long-running, benign use cases.
```

### Anti-Manipulation Safeguards
```yaml
id: anti-manipulation-safeguards
name: Anti-Manipulation Safeguards
category: safety-harm-prevention
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/anti-manipulation-safeguards
what_it_is: >
  Detects actual harmful intent beneath surface-level framing,
  regardless of how a request is disguised or reworded.
when_to_use:
  - The system could plausibly be manipulated into producing harmful output through clever framing
do_not_use_when:
  - N/A, broadly necessary wherever misuse is a real possibility
why_to_use: >
  Protects against bad-faith attempts to work around safety measures
  through indirect or disguised requests.
examples:
  - product: Bing, ChatGPT, Claude
    description: Detects underlying harmful intent beyond surface-level prompt framing
risk: >
  Overly aggressive detection can produce false positives that block legitimate, benign requests.
```

### Vulnerable User Protection
```yaml
id: vulnerable-user-protection
name: Vulnerable User Protection
category: safety-harm-prevention
type: principle
source:
  name: aiuxdesign.guide
  url: https://www.aiuxdesign.guide/patterns/vulnerable-user-protection
what_it_is: >
  Detects vulnerable users, such as minors or people in crisis, and
  applies graduated age, crisis, and dependency protections tailored
  to their situation.
when_to_use:
  - The product may plausibly be used by minors or vulnerable populations
do_not_use_when:
  - The product's user base and context make this scenario implausible
why_to_use: >
  Provides tailored protection where a one-size-fits-all safety
  approach would be insufficient for genuinely vulnerable users.
examples:
  - product: PinwheelGPT, Woebot
    description: Graduated protections calibrated to detected vulnerability signals
risk: >
  Detection that's too broad can feel paternalizing toward users who aren't actually vulnerable.
```

---

## Source: AI UX Playground

### Category: Trust

### Chain of Thought
```yaml
id: playground-chain-of-thought
name: Chain of Thought
category: trust-transparency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/cot
what_it_is: >
  Displays the step-by-step reasoning process the AI used to arrive
  at its answer, showing intermediate steps rather than only the
  final result.
when_to_use:
  - Mathematical, logical, or complex problem-solving where the reasoning matters
  - Educational or high-stakes contexts where understanding the "how" builds trust
do_not_use_when:
  - Reasoning detail would overwhelm a user who just wants the answer
why_to_use: >
  Builds trust by making reasoning transparent and verifiable, letting
  users follow the logic and catch errors before accepting the answer.
examples:
  - product: OpenAI o1
    description: Displays step-by-step reasoning before the final answer
  - product: Wolfram Alpha
    description: Shows intermediate calculation steps behind a result
risk: >
  Expanding the full trace by default buries the actual answer under process detail.
```

### Granular Consent
```yaml
id: granular-consent
name: Granular Consent
category: privacy-data-governance
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/granular-consent
what_it_is: >
  Per-capability permissions with scope, expiry, and revoke controls,
  rather than one blanket allow/deny toggle.
when_to_use:
  - The AI needs access to multiple distinct data sources or actions
do_not_use_when:
  - The AI needs only one narrow, obvious permission
why_to_use: >
  Lets users grant exactly the access needed and nothing more, and
  revoke it later without disabling the whole feature.
examples:
  - product: Email/calendar AI assistants
    description: 'Separate permissions for "read mail," "send mail," and "calendar access"'
risk: >
  Permission drift, where granted scopes quietly expand over time, erodes the value of granularity if not actively monitored.
```

### Failure Disclosure
```yaml
id: failure-disclosure
name: Failure Disclosure
category: error-recovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/failure-disclosure
what_it_is: >
  Says clearly when the system cannot answer or a tool call failed,
  offering an alternative instead of a vague or silent failure.
when_to_use:
  - The system genuinely cannot complete part of a request
do_not_use_when:
  - The task succeeded and there's nothing to disclose
why_to_use: >
  Honest failure disclosure preserves trust better than a confident
  but wrong answer or a silent gap.
examples:
  - product: Booking assistants
    description: "I can't reserve a table. I can draft the message, you send it."
risk: >
  Vague failure messages without an alternative path leave users stuck.
```

### Data Ownership & Control
```yaml
id: playground-data-ownership-control
name: Data Ownership & Control
category: privacy-data-governance
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/data-ownership
what_it_is: >
  Gives users visibility and control over AI data usage, showing what
  is stored (conversations, training data) with export and delete
  options.
when_to_use:
  - The product retains user conversations or data for any purpose
do_not_use_when:
  - No user data is retained beyond the single session
why_to_use: >
  Builds trust by making data usage inspectable and reversible rather
  than opaque.
examples:
  - product: ChatGPT data controls
    description: Shows stored conversation and training data size with export/delete
risk: >
  Controls that exist but are buried deep in settings provide little real transparency.
```

### Source Browser
```yaml
id: source-browser
name: Source Browser
category: trust-transparency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/source-browser
what_it_is: >
  Lets users inspect the retrieved sources and context beside the
  answer, rather than just seeing footnote markers.
when_to_use:
  - The task is research or RAG-based and sources are worth exploring directly
do_not_use_when:
  - Answers don't draw on retrievable external sources
why_to_use: >
  Gives users a direct path to verify and explore the evidence behind
  a claim, not just a citation marker.
examples:
  - product: Perplexity
    description: Side panel listing and previewing the sources behind an answer
risk: >
  A source list with no preview or ranking forces users to open every link to judge relevance.
```

### Confidence Indicators
```yaml
id: playground-confidence-indicators
name: Confidence Indicators
category: trust-transparency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/confidence-indicators
what_it_is: >
  Scores, meters, or badges showing how sure the model is about a
  given output.
when_to_use:
  - High-stakes decisions where miscalibrated trust could cause harm
do_not_use_when:
  - Low-stakes creative tasks where confidence adds confusion, not clarity
why_to_use: >
  Helps users decide how much to rely on an output versus verify it
  independently.
examples:
  - product: Field identification apps
    description: "Mixed confidence. Confirm with a field guide before acting."
risk: >
  Numeric confidence scores are often misread as more precise than they actually are.
```

### Verification Next Steps
```yaml
id: verification-next-steps
name: Verification Next Steps
category: trust-transparency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/verification-next-steps
what_it_is: >
  Offers concrete, actionable next steps to validate uncertain AI
  output, rather than leaving the user to figure out verification
  themselves.
when_to_use:
  - Output confidence is uncertain and the decision is consequential
do_not_use_when:
  - The output is already verified or low-stakes
why_to_use: >
  Turns a vague "double-check this" into a specific, doable action,
  which meaningfully increases the odds users actually verify.
examples:
  - product: Sales quote assistants
    description: '"Before you send: open signed contract" as a concrete verification step'
risk: >
  Generic verification prompts that don't name a specific action get ignored.
```

### Knowledge Graph
```yaml
id: knowledge-graph
name: Knowledge Graph
category: trust-transparency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/knowledge-graph
what_it_is: >
  Visualizes entities and relationships behind retrieved or generated
  knowledge, letting users explore connections instead of reading a
  flat list of chunks.
when_to_use:
  - Research or RAG systems where relationships between entities matter
do_not_use_when:
  - Answers are grounded in a single document with no meaningful relations
  - Mobile-first chats with no room for a graph canvas
why_to_use: >
  Helps users understand how sources and concepts connect, building
  deeper trust than a flat citation list.
examples:
  - product: CRM research assistants
    description: Visualizes how an account, contact, and invoice relate to an answer
risk: >
  Decorative graphs that don't link back to readable sources, or hairball layouts with unlabeled nodes, hurt more than help.
```

### Privacy Filters
```yaml
id: privacy-filters
name: Privacy Filters
category: privacy-data-governance
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/privacy-blur
what_it_is: >
  Masks sensitive data (emails, personal identifiers) in prompts,
  context, or outputs before they're sent to or shown from the model.
when_to_use:
  - User input or context may contain personally identifiable information
do_not_use_when:
  - No sensitive personal data is plausibly involved
why_to_use: >
  Reduces the risk of sensitive data leaking into model context or
  logs unnecessarily.
examples:
  - product: Enterprise chat assistants
    description: Redacts detected emails before sending the prompt to the LLM
risk: >
  Over-aggressive masking can strip information the user actually needed the AI to see.
```

### Bias Detection
```yaml
id: bias-detection
name: Bias Detection
category: safety-harm-prevention
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/bias-detection
what_it_is: >
  Flags potentially biased outputs, such as age-based or demographic
  generalizations, and offers a rewrite.
when_to_use:
  - Output involves generalizations about people or demographic groups
do_not_use_when:
  - Output has no plausible connection to demographic or social bias
why_to_use: >
  Catches biased framing before it reaches the user, reducing harm and
  reputational risk.
examples:
  - product: Enterprise writing assistants
    description: Flags an age-based generalization in generated text and offers a rewrite
risk: >
  Detection that's too aggressive can flag legitimate, non-biased statements and frustrate users.
```

### Audit Trail
```yaml
id: playground-audit-trail
name: Audit Trail
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/audit-trail
what_it_is: >
  Maintains a comprehensive, searchable log of AI decisions, data
  usage, model versions, and system actions, with export for
  compliance or analysis.
when_to_use:
  - Enterprise, regulated, or compliance-sensitive applications
do_not_use_when:
  - The product has no autonomous or consequential AI actions to log
why_to_use: >
  Essential for accountability and compliance where auditability is
  a requirement, not a nice-to-have.
examples:
  - product: Enterprise ops assistants
    description: Searchable log of every AI decision, filterable by date and action type
risk: >
  Logs that aren't actually searched or reviewed provide compliance theater rather than real oversight.
```

### Transparency Report
```yaml
id: transparency-report
name: Transparency Report
category: trust-transparency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/transparency-report
what_it_is: >
  Periodic reports summarizing AI behavior and accuracy, including
  data usage and model information over a defined period.
when_to_use:
  - Enterprise or regulated contexts where periodic accountability reporting is expected
do_not_use_when:
  - The product has no ongoing AI behavior worth periodically reporting on
why_to_use: >
  Demonstrates ongoing accountability rather than a one-time trust
  claim at launch.
examples:
  - product: Enterprise AI platforms
    description: Downloadable periodic report on data usage and model version/accuracy
risk: >
  Reports that are too infrequent or generic don't actually inform decisions.
```

### Authentication Chains
```yaml
id: authentication-chains
name: Authentication Chains
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/authentication-chains
what_it_is: >
  Exposes the identity trail when an agent acts across multiple
  identity domains, showing which identity performed each step and
  letting users revoke any link independently.
when_to_use:
  - An agent composes actions across multiple systems or identity boundaries
do_not_use_when:
  - The agent operates within a single, simple identity context
why_to_use: >
  Turns "something did this" into "this specific identity, delegated
  from this user, via this agent, did this," which is what incident
  reviews and revocation flows actually need.
examples:
  - product: Cross-app agent workflows
    description: Shows the delegated credential chain from a user's inbox to a vendor API
risk: >
  Without this, a single agent action composing across systems loses attribution entirely.
```

### Responsibility Attribution
```yaml
id: responsibility-attribution
name: Responsibility Attribution
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/responsibility-attribution
what_it_is: >
  Traces which agent or human caused each action in a shared run
  history, so accountability is legible after the fact.
when_to_use:
  - Multiple agents or a human-agent mix act within the same workflow
do_not_use_when:
  - Only a single actor (human or agent) ever takes action
why_to_use: >
  Prevents ambiguity about who or what caused an outcome when humans
  and agents collaborate in the same run.
examples:
  - product: Multi-agent ops workflows
    description: A run history showing which turns were taken by a human versus the agent
risk: >
  Without clear attribution, mistakes get blamed on "the system" generically rather than the actual cause.
```

### Agent Identity
```yaml
id: agent-identity
name: Agent Identity
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/agent-identity
what_it_is: >
  A stable name, version, and capability set per agent, with a
  visible trust status the user can mark or review.
when_to_use:
  - Multiple distinct agents operate within the same product
do_not_use_when:
  - Only one undifferentiated AI assistant exists in the product
why_to_use: >
  Lets users track which specific agent version did what and build
  calibrated trust per agent rather than treating "AI" as monolithic.
examples:
  - product: Multi-agent ops platforms
    description: 'Shows agent name, version number, and a "not trusted" / "mark as trusted" status'
risk: >
  Without stable identity, users can't distinguish a reliable agent from a newly deployed, unproven one.
```

### Category: Chatbot

### Response Refinement
```yaml
id: response-refinement
name: Response Refinement
category: iterative-editing
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/response-refinement
what_it_is: >
  Contextual actions to modify an AI response directly, such as "more
  concise," "add details," or "more formal," without rewriting the prompt.
when_to_use:
  - The response is directionally right but needs tone or length adjustment
do_not_use_when:
  - The response needs to change substantively, not just in style
why_to_use: >
  Faster than re-prompting from scratch for common, predictable
  adjustments.
examples:
  - product: Writing assistants
    description: 'One-click "more concise" or "more formal" buttons under a response'
risk: >
  Repeated refinement without limits can drift the response far from the original intent.
```

### Chat Artifacts
```yaml
id: chat-artifact
name: Chat Artifacts
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/chat-artifact
what_it_is: >
  Opens generated docs, code, or other substantial output in a side
  panel separate from the conversational thread.
when_to_use:
  - Output is substantial enough to be a standalone artifact, not just a reply
do_not_use_when:
  - Output is short and belongs naturally inline in the conversation
why_to_use: >
  Keeps the conversation thread clean and readable while giving
  substantial output its own dedicated, editable space.
examples:
  - product: Claude Artifacts
    description: Generated code or documents open in a side panel alongside the chat
risk: >
  Splitting attention between chat and artifact panel can be disorienting if not clearly connected.
```

### Follow-up Chips
```yaml
id: follow-up-chips
name: Follow-up Chips
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/follow-up-chips
what_it_is: >
  Suggested next turns shown as tappable chips after a response,
  letting the user continue the conversation without typing.
when_to_use:
  - Natural next questions exist after most responses
do_not_use_when:
  - The interaction is meant to be a single, complete exchange
why_to_use: >
  Keeps users engaged and helps them discover follow-up questions
  they wouldn't have thought to type themselves.
examples:
  - product: Data analysis assistants
    description: '"List every table and its role" suggested after a SQL generation'
risk: >
  Can feel like the product is steering the conversation rather than following user intent.
```

### Interrupt and Resume
```yaml
id: interrupt-and-resume
name: Interrupt and Resume
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/interrupt-and-resume
what_it_is: >
  Lets the user stop a mid-response generation and continue later
  without losing the context already generated.
when_to_use:
  - Generations can be long and users may want to redirect mid-stream
do_not_use_when:
  - Responses are always short enough that interruption adds no value
why_to_use: >
  Gives users control over long-running generations instead of forcing
  them to wait for or discard the full output.
examples:
  - product: Long-form report generators
    description: Pause mid-generation and resume later with context preserved
risk: >
  Resuming without clearly showing what was already generated can confuse users about current state.
```

### Memory Scope Toggle
```yaml
id: memory-scope-toggle
name: Memory Scope Toggle
category: memory-context
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/memory-scope-toggle
what_it_is: >
  Lets users set whether a piece of memory persists per message, per
  project, or is saved permanently.
when_to_use:
  - The product supports both short-term and long-term memory
do_not_use_when:
  - Memory is binary (fully on or off) with no meaningful scope levels
why_to_use: >
  Gives users precise control over what sticks around versus what's
  session-only, rather than an all-or-nothing memory setting.
examples:
  - product: Project-based AI assistants
    description: '"Save to memory" with a scope selector for project versus global'
risk: >
  Too many scope levels can confuse users about where a given fact will actually apply.
```

### Thread Branching
```yaml
id: thread-branch
name: Thread Branching
category: iterative-editing
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/thread-branch
what_it_is: >
  Lets users edit an earlier message to fork the conversation into a
  new branch, preserving the original.
when_to_use:
  - Users want to explore an alternative direction without losing existing progress
do_not_use_when:
  - Linear, single-path conversations are sufficient
why_to_use: >
  Encourages exploration by removing the fear of losing a good result
  when trying an alternative.
examples:
  - product: ChatGPT conversation editing
    description: Edit an earlier prompt to create a new branch from that point
risk: >
  Too many branches become hard to track and compare against each other.
```

### Regeneration Carousel
```yaml
id: regen-carousel
name: Regeneration Carousel
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/regen-carousel
what_it_is: >
  Lets users swipe or step between multiple regenerated answers to
  the same prompt, one at a time.
when_to_use:
  - The task is subjective and multiple regenerations are worth comparing
do_not_use_when:
  - Showing all variations side by side is more useful than stepping through them
why_to_use: >
  Keeps the interface compact while still letting users compare
  several regenerated attempts.
examples:
  - product: Vendor comparison assistants
    description: 'Step through "1 / 3" regenerated answers with a regenerate action'
risk: >
  Sequential stepping makes true side-by-side comparison harder than a grid would.
```

### Conversation History Search
```yaml
id: conversation-search
name: Conversation History Search
category: memory-context
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/conversation-search
what_it_is: >
  Lets users search through past conversations by keyword or tag
  rather than scrolling a flat chronological list.
when_to_use:
  - Users accumulate many past conversations over time
do_not_use_when:
  - History is short-lived or rarely revisited
why_to_use: >
  Makes accumulated conversation history actually usable instead of
  an unsearchable pile.
examples:
  - product: ChatGPT search
    description: Full-text search across past conversation history
risk: >
  Poor search relevance ranking makes even a searchable history frustrating to use.
```

### Message Pinning
```yaml
id: message-pinning
name: Message Pinning
category: memory-context
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/message-pinning
what_it_is: >
  Lets users pin specific important messages within a thread for
  quick reference later.
when_to_use:
  - Long threads contain a few especially important messages worth resurfacing
do_not_use_when:
  - Threads are short enough that scrolling back is trivial
why_to_use: >
  Surfaces the important parts of a long conversation without
  requiring users to scroll or search.
examples:
  - product: Sales deal assistants
    description: Pin the key pricing message in a long negotiation thread
risk: >
  Overused pinning (everything pinned) defeats the purpose of highlighting what matters.
```

### Conversation Tags & Labels
```yaml
id: conversation-tags
name: Conversation Tags & Labels
category: memory-context
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/conversation-tags
what_it_is: >
  Lets users organize conversations with custom tags for later
  filtering and retrieval.
when_to_use:
  - Users manage many conversations across different projects or topics
do_not_use_when:
  - Conversation volume is low enough that organization adds no value
why_to_use: >
  Supports personal organization systems beyond simple chronological
  or search-based retrieval.
examples:
  - product: CRM-integrated assistants
    description: Tag a conversation with account and topic labels for later filtering
risk: >
  Tagging systems that require too much manual effort per conversation go unused.
```

### Export Conversation
```yaml
id: export-conversation
name: Export Conversation
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/export-conversation
what_it_is: >
  Lets users export a chat thread as PDF, Markdown, or JSON for use
  outside the product.
when_to_use:
  - Users need to share, archive, or process conversation content elsewhere
do_not_use_when:
  - Conversations have no value or need outside the product itself
why_to_use: >
  Removes the friction of manually copying content out of the chat
  interface.
examples:
  - product: Meeting/research assistants
    description: Export a research thread as Markdown or PDF for a report
risk: >
  Export formats that strip important context (like citations) reduce the value of the exported file.
```

### Conversation Templates
```yaml
id: conversation-templates
name: Conversation Templates
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/conversation-templates
what_it_is: >
  Lets users save and reuse a full conversation starter, not just a
  single prompt, as a reusable template.
when_to_use:
  - Users repeat the same type of multi-turn conversation regularly
do_not_use_when:
  - Conversations are rarely similar enough to templatize
why_to_use: >
  Saves setup time for recurring conversation types beyond what a
  single prompt template can capture.
examples:
  - product: Team workflow assistants
    description: '"Review pull request" or "Draft customer email" as saved conversation starters'
risk: >
  Templates that go stale as workflows evolve create friction if not periodically reviewed.
```

### Repair Contract
```yaml
id: repair-contract
name: Repair Contract
category: error-recovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/repair-contract
what_it_is: >
  When a turn goes wrong, lets the user retry with an explicit delta
  and constraints rather than a vague "try again."
when_to_use:
  - The AI misunderstood context in a way that's specifically correctable
do_not_use_when:
  - A simple regenerate already resolves the issue
why_to_use: >
  Captures exactly what needs to change for next time, rather than
  hoping a blind retry fixes it.
examples:
  - product: CRM-integrated assistants
    description: '"Wrong account (Globex). Account = Acme Corp" as an explicit repair constraint'
risk: >
  If the repair mechanism is too cumbersome, users default to just typing a whole new prompt.
```

### Category: Agents

### Plan & Execute
```yaml
id: plan-execute
name: Plan & Execute
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/plan-execute
what_it_is: >
  Breaks a goal into visible steps, then acts and reviews, following
  a Plan, Act, Review cycle the user can follow along with.
when_to_use:
  - The task involves multiple steps that benefit from upfront planning
do_not_use_when:
  - The task is a single, simple action
why_to_use: >
  Lets users catch a misunderstood goal before execution rather than
  after, and follow progress through multi-step work.
examples:
  - product: Coding agents
    description: Shows a plan, then executes it step by step with review points
risk: >
  A plan that looks reasonable can still miss important edge cases the user doesn't catch on review.
```

### Tool Use
```yaml
id: tool-use
name: Tool Use
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/tool-use
what_it_is: >
  Visualizes when the AI calls an external tool and what came back,
  rather than hiding tool calls behind the final answer.
when_to_use:
  - The agent uses external tools, search, or APIs to answer
do_not_use_when:
  - The AI answers purely from its own knowledge with no tool calls
why_to_use: >
  Shows users where an answer actually came from, which builds trust
  and helps them catch tool-call errors.
examples:
  - product: Assistants with calculator/search tools
    description: '"Calling tool search_web ··· Tool output" shown inline before the answer'
risk: >
  Tool-call visualization that's too technical or verbose can clutter a simple answer.
```

### Workflow Builder
```yaml
id: workflow-builder
name: Workflow Builder
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/workflow-builder
what_it_is: >
  A visual, drag-and-drop interface for composing multi-step automated
  workflows out of triggers and actions.
when_to_use:
  - Users need to define recurring, multi-step automations themselves
do_not_use_when:
  - Workflows are fixed and don't need end-user customization
why_to_use: >
  Makes agent automation accessible to non-technical users without
  writing code.
examples:
  - product: Zapier-style automation builders
    description: 'Drag-and-drop chain from "New Email" through extraction to a Slack post'
risk: >
  Visual builders can hide the real complexity and cost of a workflow until it's already running.
```

### Memory Management
```yaml
id: memory-manage
name: Memory Management
category: memory-context
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/memory-manage
what_it_is: >
  Gives users visibility into what context or facts the agent is
  currently holding onto during a task.
when_to_use:
  - The agent retains working context across a multi-step task
do_not_use_when:
  - The agent has no persistent working memory within a task
why_to_use: >
  Prevents surprises from stale or incorrect context the agent is
  silently relying on.
examples:
  - product: Long-running research agents
    description: 'Shows "Saved context" the agent is actively using for the current task'
risk: >
  Without visibility, users can't tell why the agent made a decision based on outdated context.
```

### Task Queue
```yaml
id: task-queue
name: Task Queue
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/task-queue
what_it_is: >
  A visual queue showing multiple agent tasks and their individual
  status, rather than a single final message.
when_to_use:
  - Several operations run in parallel or sequentially over time
do_not_use_when:
  - The agent handles one linear task at a time
why_to_use: >
  Gives users status per task rather than only a final summary,
  useful when work spans multiple independent items.
examples:
  - product: Multi-task automation assistants
    description: 'Shows "Summarize," "Fetch data," and "Draft reply" as separate queued tasks'
risk: >
  A queue with unclear task dependencies can confuse users about execution order.
```

### Human Handoff
```yaml
id: human-handoff
name: Human Handoff
category: collaboration-handoff
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/human-handoff
what_it_is: >
  Escalates a task to a human when the agent hits its limits, with a
  clear, visible handoff point.
when_to_use:
  - The agent may encounter situations beyond its authorization or ability
do_not_use_when:
  - The agent's task space never requires human escalation
why_to_use: >
  Prevents the agent from either guessing wrong or getting stuck,
  by giving it a clear path to escalate.
examples:
  - product: Customer support agents
    description: Escalates to a human agent when the request falls outside its scope
risk: >
  Escalation thresholds set too conservatively interrupt the workflow more than necessary.
```

### Escalation Thresholds
```yaml
id: escalation-thresholds
name: Escalation Thresholds
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/escalation-thresholds
what_it_is: >
  Auto-demotes an agent's autonomy level when risk crosses a defined
  line, rather than keeping autonomy constant regardless of situation.
when_to_use:
  - Risk varies meaningfully within a single agent task or session
do_not_use_when:
  - Risk level is constant throughout the agent's task
why_to_use: >
  Matches oversight level dynamically to actual risk instead of a
  fixed autonomy setting that's wrong for edge cases.
examples:
  - product: Financial operations agents
    description: Auto-demotes from autonomous to approval-required above a spend threshold
risk: >
  Thresholds set without real usage data can trigger too often or too rarely.
```

### Error Recovery Strategies
```yaml
id: error-recovery-strategies
name: Error Recovery Strategies
category: error-recovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/error-recovery-strategies
what_it_is: >
  Configurable retry and fallback patterns, such as retry with
  backoff or route to a fallback path, when an agent step fails.
when_to_use:
  - Agent steps can fail transiently or permanently
do_not_use_when:
  - Agent steps are deterministic and effectively never fail
why_to_use: >
  Prevents a single failed step from silently derailing an entire
  multi-step agent run.
examples:
  - product: Workflow automation agents
    description: '"Retries max 3 · backoff" with a defined fallback route'
risk: >
  Aggressive auto-retry on a persistently failing step wastes time and resources before surfacing the failure.
```

### Self-Correction
```yaml
id: correction
name: Self-Correction
category: error-recovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/correction
what_it_is: >
  Shows the agent detecting and fixing its own error, retrying with
  adjusted parameters visible to the user.
when_to_use:
  - The agent can detect its own mistakes mid-task
do_not_use_when:
  - The agent has no mechanism to detect its own errors
why_to_use: >
  Builds trust by showing the agent actively catching and correcting
  itself, not just failing silently or succeeding blindly.
examples:
  - product: Coding agents
    description: '"Retry with fix, attempt 2 · adjusted params" shown after a failed step'
risk: >
  Repeated self-correction attempts without escalating to the user can loop indefinitely on a hard problem.
```

### Prompt Chaining
```yaml
id: chain
name: Prompt Chaining
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/chain
what_it_is: >
  Visualizes multi-step logic as a sequence, such as Prompt to Tool
  to Answer, so the chain of reasoning and action is legible.
when_to_use:
  - The task requires several distinct logical steps in sequence
do_not_use_when:
  - The task resolves in a single step
why_to_use: >
  Makes a multi-step reasoning or tool-use chain inspectable rather
  than a black box.
examples:
  - product: Research and calculation agents
    description: '"Prompt → Tool → Answer" shown as a visible chain'
risk: >
  Long chains without progress indication can make users think the system has stalled.
```

### Conditional Logic & Branching
```yaml
id: conditional-logic
name: Conditional Logic & Branching
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/conditional-logic
what_it_is: >
  Lets users branch a workflow by conditions, an if-match/yes-no
  decision point that routes to different subsequent actions.
when_to_use:
  - Workflow outcomes genuinely differ based on conditions
do_not_use_when:
  - The workflow is always linear with no branching outcomes
why_to_use: >
  Makes conditional automation logic visible and editable rather than
  hidden in configuration.
examples:
  - product: Workflow automation builders
    description: '"If match → Yes/No" branch shown visually in a workflow diagram'
risk: >
  Too many nested conditions become hard to reason about without a visual map.
```

### Scheduled Tasks & Recurring Actions
```yaml
id: scheduled-tasks
name: Scheduled Tasks & Recurring Actions
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/scheduled-tasks
what_it_is: >
  Time-based automation triggers that let users set an agent to run
  recurring actions on a schedule.
when_to_use:
  - The task genuinely needs to repeat on a schedule, not just once
do_not_use_when:
  - The task is a one-off with no recurring need
why_to_use: >
  Removes the need for users to manually re-trigger the same
  recurring agent task.
examples:
  - product: Reporting agents
    description: '"Recurring, Mon · Wed · 09:00, Next run" shown as a schedule'
risk: >
  Scheduled tasks that silently fail without notification can go unnoticed for a long time.
```

### Multi-step Forms with AI
```yaml
id: multi-step-forms
name: Multi-step Forms with AI
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/multi-step-forms
what_it_is: >
  Adaptive, progressive forms where the AI adjusts subsequent steps
  based on earlier answers.
when_to_use:
  - The form is long and later questions depend on earlier answers
do_not_use_when:
  - The form is short and static regardless of answers
why_to_use: >
  Reduces irrelevant questions by adapting the form path to what the
  user has already provided.
examples:
  - product: Onboarding intake flows
    description: '"Step 2 of 3" with content adapted to the prior step''s answer'
risk: >
  Adaptive forms that change unpredictably can disorient users who expect a fixed sequence.
```

### Approval Workflows
```yaml
id: approval-workflows
name: Approval Workflows
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/approval-workflows
what_it_is: >
  Human approval gates built into a multi-step process, showing
  submitted, in-review, and approved states.
when_to_use:
  - Multiple stakeholders need to sign off before an agent action proceeds
do_not_use_when:
  - A single user's approval is sufficient (use Human in the Loop instead)
why_to_use: >
  Supports multi-party approval processes that a simple single-user
  confirmation can't handle.
examples:
  - product: Enterprise procurement agents
    description: '"Submitted → Review… → Approve" as a visible multi-stage gate'
risk: >
  Too many approval stages for low-risk actions slows down workflows unnecessarily.
```

### Agent Orchestration
```yaml
id: agent-orchestration
name: Agent Orchestration
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/agent-orchestration
what_it_is: >
  A visual flow showing how multiple agents coordinate and hand off
  work to each other within one system.
when_to_use:
  - The product uses multiple specialized agents working together
do_not_use_when:
  - Only a single agent operates in the product
why_to_use: >
  Makes a multi-agent system's coordination legible rather than a
  black box of unexplained sub-agent activity.
examples:
  - product: Multi-agent research or coding platforms
    description: Visual flow diagram showing handoffs between specialized sub-agents
risk: >
  Overly complex orchestration diagrams can be harder to parse than the underlying system itself.
```

### Agent Performance Metrics
```yaml
id: agent-performance-metrics
name: Agent Performance Metrics
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/agent-performance-metrics
what_it_is: >
  A dashboard showing agent success rate, latency, cost, and top
  failure modes.
when_to_use:
  - Builders or ops teams need to evaluate and improve agent reliability
do_not_use_when:
  - End users have no need to see operational agent metrics
why_to_use: >
  Task success, override rate, latency, and cost per task are what
  tell you which agent version actually wins, before exotic charts.
examples:
  - product: Agent ops dashboards (e.g. LangSmith-style tools)
    description: Success rate, latency, and cost per task shown on an admin dashboard
risk: >
  Exposing deep metrics to end users rather than builders/ops can overwhelm without adding value.
```

### Agent Versioning
```yaml
id: agent-versioning
name: Agent Versioning
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/agent-versioning
what_it_is: >
  Lets teams A/B test different agent configurations by comparing
  runs across versions.
when_to_use:
  - Teams iterate on agent prompts or configuration and need to compare results
do_not_use_when:
  - The agent has a single, fixed configuration with no iteration
why_to_use: >
  Versioning is how you ship and compare candidate agent
  configurations before committing to one.
examples:
  - product: Agent development platforms
    description: '"Compare runs, v1.0 vs v1.1" side by side'
risk: >
  Without clear version labeling, teams lose track of which configuration produced which results.
```

### Agent Marketplace
```yaml
id: agent-marketplace
name: Agent Marketplace
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/agent-marketplace
what_it_is: >
  Lets users browse and install pre-built agents for common tasks
  rather than building one from scratch.
when_to_use:
  - Common agent use cases are shared across many users
do_not_use_when:
  - Agent needs are always highly custom to the individual user
why_to_use: >
  Lowers the barrier to using agents for common tasks and lets the
  community share proven configurations.
examples:
  - product: Agent platforms with community-built agent listings
    description: Browse and install pre-built agents for specific tasks
risk: >
  Marketplace agents of unknown provenance carry real trust and safety risk if not vetted.
```

### Blast Radius Visualization
```yaml
id: blast-radius-visualization
name: Blast Radius Visualization
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/blast-radius-visualization
what_it_is: >
  Previews the scope of what an agent will touch before it executes,
  showing what data or systems are affected.
when_to_use:
  - The agent's action could affect a non-obvious or wide scope of data
do_not_use_when:
  - The action's scope is trivially small and obvious
why_to_use: >
  Lets users catch an overly broad action before it runs, rather than
  discovering the scope only after the fact.
examples:
  - product: Bulk data operations in agentic tools
    description: Previews which files or records will be affected before a bulk edit runs
risk: >
  If the visualization doesn't match the actual execution scope, it creates false confidence.
```

### Reversibility Marking
```yaml
id: reversibility-marking
name: Reversibility Marking
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/reversibility-marking
what_it_is: >
  Labels each proposed agent action by how easily it can be undone,
  so users can weigh risk before approving.
when_to_use:
  - Actions vary in how reversible they are
do_not_use_when:
  - All actions in the product have the same reversibility level
why_to_use: >
  Lets users apply more scrutiny to hard-to-reverse actions and move
  quickly through trivially reversible ones.
examples:
  - product: File and data management agents
    description: 'Labels an action as "easily undone" versus "permanent" before execution'
risk: >
  Mislabeling an action's reversibility is worse than not labeling it at all.
```

### Time-Delayed Execution
```yaml
id: time-delayed-execution
name: Time-Delayed Execution
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/time-delayed-execution
what_it_is: >
  A cancelable countdown before a high-impact action actually
  executes, giving users a last window to stop it.
when_to_use:
  - The action is high-impact but doesn't require active per-instance approval
do_not_use_when:
  - The action is low-impact or genuinely time-sensitive
why_to_use: >
  Gives a passive safety net for high-impact actions without requiring
  active approval every time.
examples:
  - product: Bulk delete or send operations
    description: A cancelable countdown before a bulk send actually executes
risk: >
  If the countdown is too short, or the cancel action isn't obvious, it fails to actually protect users.
```

### Suggest / Confirm / Execute
```yaml
id: suggest-confirm-execute
name: Suggest / Confirm / Execute
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/suggest-confirm-execute
what_it_is: >
  Three distinct autonomy modes for AI agents, where the agent
  suggests an action, the user confirms, then it executes, rather than
  a binary automate-or-not choice.
when_to_use:
  - Different actions within a product warrant different autonomy levels
do_not_use_when:
  - A single fixed autonomy level suffices for all actions
why_to_use: >
  Gives a shared vocabulary and UI pattern for tuning autonomy per
  action type instead of an all-or-nothing setting.
examples:
  - product: CRM update agents
    description: '"Ask first, Draft renewal email → Done; Update CRM → Now" showing mixed modes per action'
risk: >
  Too many distinct modes across too many actions can make the system's behavior hard to predict.
```

### Pre-Task Cost Estimate
```yaml
id: pre-task-cost-estimate
name: Pre-Task Cost Estimate
category: business-monetization
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/pre-task-cost-estimate
what_it_is: >
  Forecasts tokens, dollars, and time before an agent run starts,
  rather than surprising the user with cost after the fact.
when_to_use:
  - Agent runs have meaningful, variable cost or duration
do_not_use_when:
  - Cost and duration are negligible or fixed
why_to_use: >
  Lets users make an informed go/no-go decision before committing
  resources to a run.
examples:
  - product: Agent platforms with usage-based billing
    description: Shows estimated tokens, dollars, and time before starting a run
risk: >
  Estimates that are frequently wrong erode trust in the feature faster than not having one.
```

### Per-Action Autonomy
```yaml
id: per-action-autonomy
name: Per-Action Autonomy
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/per-action-autonomy
what_it_is: >
  Scopes autonomy per capability rather than per app, so a user can
  allow one type of action always while requiring approval for another.
when_to_use:
  - Different capabilities within the same agent carry different risk levels
do_not_use_when:
  - All the agent's capabilities carry the same risk level
why_to_use: >
  A single app-wide autonomy toggle is too coarse when capabilities
  vary widely in risk.
examples:
  - product: Coding agents
    description: '"Edit files: Always, Run terminal: Ask" as separate per-capability settings'
risk: >
  Fine-grained settings across many capabilities can overwhelm users who just want sensible defaults.
```

### Autonomous Mode Display
```yaml
id: autonomous-mode-display
name: Autonomous Mode Display
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/autonomous-mode-display
what_it_is: >
  A persistent, always-visible signal indicating the agent is
  currently running unattended.
when_to_use:
  - The agent can operate without active user attention for stretches of time
do_not_use_when:
  - The agent only ever acts with the user actively present and watching
why_to_use: >
  Prevents users from forgetting an agent is running unattended and
  losing track of what it might be doing.
examples:
  - product: Long-running background agents
    description: 'A persistent status badge signaling "running autonomously"'
risk: >
  A signal that's too subtle gets ignored, defeating its purpose as an ongoing reminder.
```

### Autonomy Budgets
```yaml
id: autonomy-budgets
name: Autonomy Budgets
category: agentic-autonomy
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/autonomy-budgets
what_it_is: >
  Time- or action-bounded limits on how long or how much an agent can
  do unattended before it must pause.
when_to_use:
  - The agent runs unattended for potentially long stretches
do_not_use_when:
  - Every agent action already requires per-step approval
why_to_use: >
  Bounds the risk of an unattended agent run without requiring
  approval at every single step.
examples:
  - product: Long-running autonomous agents
    description: '"18 of 50 actions, 12 min left" shown with a pause control'
risk: >
  Budgets set too generously defeat their purpose as a safety bound.
```

### Context Portability
```yaml
id: context-portability
name: Context Portability
category: memory-context
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/context-portability
what_it_is: >
  Legible, inspectable payloads that carry context across app
  boundaries as an agent composes tools from different systems.
when_to_use:
  - An agent's work spans multiple tools or applications
do_not_use_when:
  - The agent operates entirely within a single application
why_to_use: >
  Is the interoperability contract that makes composed, multi-tool
  agent products reviewable rather than a black box.
examples:
  - product: Cross-app agent workflows
    description: Inspectable context payload passed between a CRM tool and an email tool
risk: >
  Opaque context payloads that users can't inspect undermine trust in multi-tool agent chains.
```

### Ambient Presence Displays
```yaml
id: ambient-presence-displays
name: Ambient Presence Displays
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/ambient-presence-displays
what_it_is: >
  Low-attention signals showing agent state, ambient badges rather
  than interrupting notifications, for background awareness.
when_to_use:
  - The agent runs in the background and low-attention status suffices most of the time
do_not_use_when:
  - Every agent state change needs the user's immediate attention
why_to_use: >
  Keeps users passively informed without demanding constant
  attention on agent activity.
examples:
  - product: Background automation tools
    description: A subtle badge indicating an agent is active, without interrupting
risk: >
  Signals that are too subtle to notice fail to keep users informed at all.
```

### Sandbox Preview
```yaml
id: sandbox-preview
name: Sandbox Preview
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/sandbox-preview
what_it_is: >
  A dry-run of the agent's plan showing explicit side effects before
  the user commits to actual execution.
when_to_use:
  - The action's real-world effects are non-obvious and worth previewing
do_not_use_when:
  - The action's effects are trivially obvious without a dry run
why_to_use: >
  Lets users see exactly what will happen before it actually happens,
  catching surprises before they're real.
examples:
  - product: Infrastructure automation agents
    description: Dry-run preview of exactly what resources will change before applying
risk: >
  A sandbox preview that doesn't perfectly match real execution creates false confidence.
```

### Category: Onboarding

### Interactive Tutorials
```yaml
id: interactive-tutorials
name: Interactive Tutorials
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/interactive-tutorials
what_it_is: >
  Step-by-step AI-guided tutorials that walk new users through the
  product hands-on, rather than a passive video or text guide.
when_to_use:
  - The product has enough depth that hands-on guided practice helps
do_not_use_when:
  - The product is simple enough to be self-explanatory
why_to_use: >
  Hands-on, step-by-step learning sticks better than passive
  documentation for complex AI features.
examples:
  - product: AI writing assistants
    description: '"Step 1 of 3: Help me summarize the Q3 risks" guided practice task'
risk: >
  Tutorials that can't be skipped frustrate returning or experienced users.
```

### Example Prompts Library
```yaml
id: example-prompts-library
name: Example Prompts Library
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/example-prompts-library
what_it_is: >
  A curated, browsable library of example prompts organized by task
  category, for users to find inspiration or a direct starting point.
when_to_use:
  - The range of possible tasks is wide enough to warrant browsing
do_not_use_when:
  - The product handles only one narrow task type
why_to_use: >
  Teaches capability through curated examples rather than a single
  generic starter prompt.
examples:
  - product: General-purpose AI assistants
    description: 'A browsable "Prompt library" organized by Writing, Code, Research categories'
risk: >
  A large, unorganized library can be as overwhelming as no examples at all.
```

### AI Tips & Tricks
```yaml
id: ai-tips-tricks
name: AI Tips & Tricks
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/ai-tips-tricks
what_it_is: >
  Contextual tips and nudges surfaced progressively as the user works,
  rather than front-loaded in onboarding.
when_to_use:
  - Best practices are easier to absorb in context than all at once upfront
do_not_use_when:
  - There are no meaningful usage tips beyond the obvious
why_to_use: >
  Delivers guidance exactly when it's relevant instead of forcing
  users through it all before they've even started.
examples:
  - product: AI writing tools
    description: '"Tip: Try naming your goal first" surfaced contextually while composing'
risk: >
  Too-frequent tips become an annoying interruption rather than helpful guidance.
```

### Progressive Feature Unlock
```yaml
id: progressive-feature-unlock
name: Progressive Feature Unlock
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/progressive-feature-unlock
what_it_is: >
  Gradually reveals advanced AI capabilities as the user gains
  experience, rather than exposing everything from day one.
when_to_use:
  - The product has many capabilities and novices would be overwhelmed
do_not_use_when:
  - The product has few enough features that full exposure is fine immediately
why_to_use: >
  Reduces overwhelm for new users while still making advanced
  capability available once they're ready.
examples:
  - product: Multi-feature AI creative tools
    description: '"Unlocks with progress" showing capabilities gated behind usage milestones'
risk: >
  Gating features too aggressively frustrates users who are ready to move faster.
```

### AI Personality Customization
```yaml
id: ai-personality-customization
name: AI Personality Customization
category: branding-identity
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/ai-personality-customization
what_it_is: >
  Lets users choose or tune the AI assistant's personality (e.g.
  professional, friendly, creative) during setup.
when_to_use:
  - A consistent, chosen tone meaningfully affects how users want to interact
do_not_use_when:
  - The domain calls for a single, fixed, neutral tone
why_to_use: >
  Lets the product fit a wider range of user preferences for tone and
  interaction style rather than one fixed default.
examples:
  - product: Consumer AI assistants
    description: '"Assistant style: Pro / Friendly / Creative" selector during setup'
risk: >
  A mismatched or overly playful personality choice can undermine trust in a serious-use context.
```

### First Success Flow
```yaml
id: first-success-flow
name: First Success Flow
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/first-success-flow
what_it_is: >
  A guided flow engineered to guarantee the new user's first
  interaction with the AI actually succeeds.
when_to_use:
  - A failed first attempt is a common cause of early abandonment
do_not_use_when:
  - First attempts already succeed reliably without guidance
why_to_use: >
  A guaranteed early win builds confidence and reduces the "blank
  prompt" abandonment that kills adoption.
examples:
  - product: AI writing or coding tools
    description: '"First success: you''re ready to try your own" after a guided first task'
risk: >
  An overly scripted first success can feel hollow if it doesn't reflect real usage difficulty.
```

### Learning Path Recommendations
```yaml
id: learning-path-recommendations
name: Learning Path Recommendations
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/learning-path-recommendations
what_it_is: >
  Personalized sequences of tutorials or tasks recommended based on
  the user's goals or demonstrated skill level.
when_to_use:
  - The product has enough depth to warrant a structured learning sequence
do_not_use_when:
  - There's only one obvious path to competence
why_to_use: >
  Scales onboarding to individual skill level and goals rather than
  one generic path for everyone.
examples:
  - product: Enterprise AI tool rollouts
    description: 'A personalized "learning path" sequence shown after initial goal-setting'
risk: >
  Paths that don't actually adapt to demonstrated behavior feel just as generic as no personalization.
```

### Onboarding Progress Tracking
```yaml
id: onboarding-progress-tracking
name: Onboarding Progress Tracking
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/onboarding-progress-tracking
what_it_is: >
  Visual progress tracking through onboarding steps, such as invite
  team, try a prompt, connect data, shown as a checklist.
when_to_use:
  - Onboarding has several distinct steps a user needs to complete
do_not_use_when:
  - Onboarding is a single, trivial step
why_to_use: >
  Gives users a clear sense of how much onboarding remains and
  motivates completion.
examples:
  - product: Team AI tool rollouts
    description: '"Getting started, 3 / 5: Invite team, Try a prompt, Connect data" checklist'
risk: >
  A checklist that never gets fully resolved (stuck at 3/5 forever) becomes a nagging reminder rather than motivation.
```

### Progress Steps
```yaml
id: status-steps
name: Progress Steps
category: trust-transparency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/status-steps
what_it_is: >
  Collapsible display of the AI's thinking and tool-call trace as
  distinct progress steps, expandable for detail but collapsed by
  default.
when_to_use:
  - The task involves visible planning, retrieval, or tool calls worth tracking
do_not_use_when:
  - The response is instant with no meaningful intermediate steps
why_to_use: >
  Shows contextually relevant progress ("Planning approach," "Reading
  package.json") without forcing users through the full trace.
examples:
  - product: Coding and research agents
    description: '"Planning approach → Reading package.json → Thought for a few seconds" shown collapsed by default'
risk: >
  Expanding the full trace by default buries the actual answer under process detail.
```

### Use Case Wizard
```yaml
id: use-case-wizard
name: Use Case Wizard
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/use-case-wizard
what_it_is: >
  A guided setup flow that configures the product based on the user's
  stated goal, rather than a generic one-size-fits-all start.
when_to_use:
  - Users arrive with distinctly different goals that warrant different setups
do_not_use_when:
  - Nearly all users want the same starting configuration
why_to_use: >
  Configures the experience around the user's actual goal from the
  first interaction instead of a generic default.
examples:
  - product: Multi-purpose AI assistants
    description: '"What brings you here? Docs / Support / Explore" as the first onboarding question'
risk: >
  Wizards for users who don't fit any listed goal cleanly can feel like a forced, poor-fitting choice.
```

### Category: Inputs

### Tool Switching in Composer
```yaml
id: tool-switching
name: Tool Switching in Composer
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/tool-switching
what_it_is: >
  Lets users switch between distinct AI capabilities, such as web
  search, thinking mode, or image creation, directly within the
  composer.
when_to_use:
  - The product offers multiple distinct AI capabilities users pick between
do_not_use_when:
  - The product offers only one AI capability
why_to_use: >
  Makes available capabilities and the active mode explicit, rather
  than a single undifferentiated composer.
examples:
  - product: Multi-capability AI assistants
    description: '"Web search / Thinking / Create image" selectable within the composer'
risk: >
  Silent mode switches with no visible indicator cause confusing "why did it do that" moments.
```

### Context Chip Management
```yaml
id: context-chip-management
name: Context Chip Management
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/context-chip-management
what_it_is: >
  Lets users add context sources via a menu, shown as removable chips
  in the composer rather than pasted inline.
when_to_use:
  - Users commonly attach multiple distinct context sources to one prompt
do_not_use_when:
  - Context is always a single, simple attachment
why_to_use: >
  Makes multi-source context visible and individually removable,
  rather than buried in a long pasted block.
examples:
  - product: Document research assistants
    description: '"q3-roadmap.pdf, pricing-table.png" shown as removable chips above the input'
risk: >
  Too many chips clutter the composer and make it hard to see the actual prompt text.
```

### Input Mode Toggle
```yaml
id: input-mode-toggle
name: Input Mode Toggle
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/input-mode-toggle
what_it_is: >
  Lets users switch between text, voice, and dictation input modes
  within the same composer.
when_to_use:
  - Users benefit from switching input mode depending on context
do_not_use_when:
  - The product is exclusively one input mode by design
why_to_use: >
  Gives users flexibility to choose the input mode that fits their
  current situation.
examples:
  - product: Mobile AI assistants
    description: '"Text / Voice" toggle above the composer'
risk: >
  Switching modes without clear state feedback can leave users unsure which mode is currently active.
```

### Command Bar
```yaml
id: playground-command-bar
name: Command Bar
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/command-bar
what_it_is: >
  A global, searchable command palette (often triggered by Cmd+K) for
  jumping to AI actions.
when_to_use:
  - Power users need fast, keyboard-driven access to many actions
do_not_use_when:
  - The product has too few actions to warrant a searchable palette
why_to_use: >
  Gives power users a fast, searchable path to any action without
  navigating menus.
examples:
  - product: Cursor, Linear-style productivity tools
    description: '"⌘K, Search: pricing, Jump to Q3 roadmap, Actions: Fix grammar" command palette'
risk: >
  A command bar with poor search relevance is slower than the menu it was meant to replace.
```

### Context Mentions
```yaml
id: mention
name: Context Mentions
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/mention
what_it_is: >
  Lets users reference specific files or context inline using an @
  symbol while typing.
when_to_use:
  - Users need to reference specific known files or entities precisely
do_not_use_when:
  - There's nothing specific and nameable to reference
why_to_use: >
  Precise, inline referencing is faster than manually attaching files
  through a separate menu.
examples:
  - product: Coding assistants
    description: '"@design system" referenced inline while typing a request'
risk: >
  Autocomplete for mentions that's slow or inaccurate frustrates the exact users it's meant to speed up.
```

### Slash Commands
```yaml
id: slash-command
name: Slash Commands
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/slash-command
what_it_is: >
  Quick actions triggered by typing a forward slash followed by a
  command, such as /summarize.
when_to_use:
  - A set of common, named actions benefit from fast keyboard invocation
do_not_use_when:
  - Actions are too varied or numerous for a short command set
why_to_use: >
  Gives fast, discoverable, in-context access to common actions
  without leaving the composer.
examples:
  - product: Slack and Notion-style AI integrations
    description: '"/summarize" typed directly in the composer to trigger the action'
risk: >
  Slash commands are only discoverable if users already know to type "/", so they need a visible hint.
```

### Magic Edit
```yaml
id: magic-edit
name: Magic Edit
category: iterative-editing
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/magic-edit
what_it_is: >
  Lets the user select a portion of content and transform just that
  selection with an AI action.
when_to_use:
  - Only a specific selected portion needs to change
do_not_use_when:
  - The whole content needs to change (use full regeneration instead)
why_to_use: >
  Precise, scoped editing preserves the rest of the content while
  transforming exactly what the user selected.
examples:
  - product: Document and code editors with AI
    description: 'Select text, then "Edit selection" transforms just that span'
risk: >
  Scoped edits that don't preserve surrounding context can create inconsistency at the boundaries.
```

### Prompt Starters
```yaml
id: playground-prompt-starters
name: Prompt Starters
category: onboarding-discovery
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/empty-state
what_it_is: >
  Zero-state example prompts shown in an empty composer to overcome
  blank-page paralysis.
when_to_use:
  - Users are new or unsure what to type
do_not_use_when:
  - The task is self-explanatory
why_to_use: >
  Reduces blank-page anxiety and demonstrates capability at the exact
  moment of first use.
examples:
  - product: General-purpose AI assistants
    description: '"Try one: Plan a trip / Write an email / Explain a concept" shown in the empty composer'
risk: >
  Generic starters that don't match the user's actual need feel irrelevant and get ignored.
```

### Multimodal Input
```yaml
id: playground-multimodal-input
name: Multimodal Input
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/multimodal
what_it_is: >
  Lets users combine images, files, and text in a single prompt turn.
when_to_use:
  - The task is easier to describe with a mix of media than text alone
do_not_use_when:
  - The underlying model or task is text-only
why_to_use: >
  Removes the burden of describing visual or file-based content in
  words when the content itself is available.
examples:
  - product: Design feedback assistants
    description: 'A signup screenshot plus "What''s wrong with this screen?" in one turn'
risk: >
  Users may not realize uploaded content is retained or used beyond the immediate request.
```

### AI Context Menu
```yaml
id: context-menu
name: AI Context Menu
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/context-menu
what_it_is: >
  Surfaces relevant AI actions directly in a right-click or selection
  context menu, rather than a separate composer.
when_to_use:
  - The user is already working within existing content
do_not_use_when:
  - There's no existing content to act on
why_to_use: >
  Keeps AI assistance in the user's existing flow instead of requiring
  a context switch to a separate composer.
examples:
  - product: Document editors with AI
    description: Right-click a selection to reveal AI actions in the context menu
risk: >
  Context menus can clutter with too many AI actions if not carefully curated.
```

### Predictive Type
```yaml
id: predictive-type
name: Predictive Type
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/predictive-type
what_it_is: >
  Ghost text showing a predicted completion as the user types, which
  they can accept with a single keystroke.
when_to_use:
  - The task is repetitive enough that predictions are usually correct
do_not_use_when:
  - Suggestions are frequently wrong, creating distraction
why_to_use: >
  Speeds up composition for predictable content without interrupting
  the typing flow.
examples:
  - product: Code editors with AI completion
    description: '"How do I refactor this hook?" ghost-text suggestion while typing'
risk: >
  Over-reliance can reduce the user's own consideration of what they're actually writing.
```

### Tone Sliders
```yaml
id: tone-slider
name: Tone Sliders
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/tone-slider
what_it_is: >
  A slider control letting users adjust output tone, such as
  casual-to-formal, before generation.
when_to_use:
  - Tone materially affects how output will be used or received
do_not_use_when:
  - Tone is fixed and doesn't vary by use case
why_to_use: >
  Sets tone expectations before generation instead of forcing users
  to post-hoc fight the model with correction prompts.
examples:
  - product: Email and content writing assistants
    description: '"Casual ←→ Formal" slider above the composer'
risk: >
  A slider with no clear labeling of what each end means is hard to use predictively.
```

### Persona Selector
```yaml
id: persona-selector
name: Persona Selector
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/persona-selector
what_it_is: >
  Lets users change the AI's role or persona for a given task, such
  as switching between different expert viewpoints.
when_to_use:
  - Different personas genuinely produce meaningfully different, useful output
do_not_use_when:
  - The task doesn't benefit from a persona framing at all
why_to_use: >
  Lets one tool serve multiple framings or expert viewpoints without
  separate products.
examples:
  - product: Role-play or coaching assistants
    description: '"Persona: A / B / C" selector changing the AI''s response framing'
risk: >
  Too many persona options without clear differentiation add complexity without real value.
```

### Dynamic Follow-ups
```yaml
id: dynamic-follow-ups
name: Dynamic Follow-ups
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/follow-up
what_it_is: >
  Suggested follow-up questions generated dynamically based on the
  specific response just given, rather than static suggestions.
when_to_use:
  - Natural, response-specific next questions exist after most answers
do_not_use_when:
  - Follow-ups would be generic and not tailored to the actual response
why_to_use: >
  More relevant than static follow-up suggestions because they're
  generated from the actual content of the response.
examples:
  - product: Customer communication assistants
    description: '"Shorter version / Add examples / Translate" generated from the specific reply just sent'
risk: >
  Dynamically generated follow-ups that misjudge relevance can feel more random than helpful.
```

### Gesture Input
```yaml
id: gesture-input
name: Gesture Input
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/gesture-input
what_it_is: >
  Lets users draw or gesture on a canvas to trigger AI actions, rather
  than typing a description.
when_to_use:
  - The task is spatial or visual and easier to gesture than describe
do_not_use_when:
  - The task has no natural spatial or gestural analog
why_to_use: >
  Matches input method to the nature of the task when it's inherently
  visual or spatial.
examples:
  - product: Creative canvas tools
    description: '"Swipe to adjust… ← gesture →" triggering a parameter change'
risk: >
  Gesture-based controls are less discoverable than explicit buttons or menus.
```

### File Upload with AI Preview
```yaml
id: file-upload-preview
name: File Upload with AI Preview
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/file-upload-preview
what_it_is: >
  Shows an AI-generated preview or summary of an uploaded file
  immediately after upload, before the user even asks a question.
when_to_use:
  - Files are complex enough that a preview helps confirm the right file was uploaded
do_not_use_when:
  - Uploaded files are simple and self-evident
why_to_use: >
  Confirms the upload succeeded and was understood correctly before
  the user invests in writing a full prompt.
examples:
  - product: Document analysis assistants
    description: An AI-generated preview summary shown right after a file uploads
risk: >
  A preview that misrepresents the file's actual content can mislead before the real analysis even starts.
```

### Voice-to-Action
```yaml
id: voice-to-action
name: Voice-to-Action
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/voice-to-action
what_it_is: >
  Voice commands that trigger a specific, named action directly,
  rather than open-ended conversational voice input.
when_to_use:
  - A defined set of actions benefit from direct voice triggering
do_not_use_when:
  - Voice input is meant to be open-ended and conversational
why_to_use: >
  Faster than conversational voice for a known, bounded set of
  frequent actions.
examples:
  - product: Voice-controlled booking assistants
    description: '"Book table" spoken directly triggers the booking action'
risk: >
  Ambient voice commands without confirmation can trigger costly actions accidentally.
```

### Smart Autocomplete
```yaml
id: smart-autocomplete
name: Smart Autocomplete
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/smart-autocomplete
what_it_is: >
  Context-aware autocomplete that goes beyond plain text prediction,
  such as suggesting function names based on surrounding code context.
when_to_use:
  - Rich surrounding context can meaningfully improve prediction quality
do_not_use_when:
  - Context is too sparse for smart predictions to beat plain autocomplete
why_to_use: >
  Produces more relevant suggestions than generic autocomplete by
  using the full surrounding context.
examples:
  - product: Code editors with AI
    description: '"sortByDate() / sortByName() / sortByPriority()" suggested based on surrounding function context'
risk: >
  Context-aware suggestions that are wrong can be more confusing than plain, predictable autocomplete.
```

### Batch Input Processing
```yaml
id: batch-input-processing
name: Batch Input Processing
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/batch-input-processing
what_it_is: >
  Lets users submit multiple inputs at once for processing, rather
  than one at a time.
when_to_use:
  - Users routinely need the same operation applied to many items
do_not_use_when:
  - Requests are always one-off and singular
why_to_use: >
  Saves significant repetitive effort for users who need the same
  operation applied across many items.
examples:
  - product: Bulk content or image processing tools
    description: 'A "Batch" upload accepting multiple files for the same operation'
risk: >
  Batch processing without per-item status makes it hard to spot which specific items failed.
```

### Category: Outputs

### Streaming
```yaml
id: streaming
name: Streaming
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/streaming
what_it_is: >
  Shows AI replies token-by-token as they generate, rather than
  waiting for the full response before displaying anything.
when_to_use:
  - Generation takes long enough that instant full display isn't possible
do_not_use_when:
  - Generation is already instant
why_to_use: >
  Streaming feels faster because users see words right away, even
  when total generation time is the same.
examples:
  - product: ChatGPT, Claude
    description: Responses appear progressively, word by word, as they generate
risk: >
  Streaming without a stop control leaves users unable to cut off an answer heading in the wrong direction.
```

### Generative UI
```yaml
id: gen-ui
name: Generative UI
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/gen-ui
what_it_is: >
  Renders interactive UI components, such as charts or dashboards,
  directly within the AI's answer rather than plain text.
when_to_use:
  - The answer is inherently structured data better shown visually
do_not_use_when:
  - The answer is simple prose with no structured data to visualize
why_to_use: >
  Structured, interactive answers are far more useful than the same
  data described in a paragraph.
examples:
  - product: Data analysis assistants
    description: 'A live revenue chart with "$124,567, +12.5% from last month" rendered inline'
risk: >
  Over-structuring a simple answer into a rigid UI component can lose nuance a sentence would have kept.
```

### Conversation Summary
```yaml
id: conversation-summary
name: Conversation Summary
category: memory-context
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/conversation-summary
what_it_is: >
  Auto-summarizes a long chat thread on demand, condensing many turns
  into key points.
when_to_use:
  - Threads grow long enough that reviewing the full history is impractical
do_not_use_when:
  - Threads are always short
why_to_use: >
  Saves time reviewing long threads and helps users or teammates
  quickly get up to speed.
examples:
  - product: Team chat assistants
    description: '"This thread, 10 turns, Summarize" button condensing a long discussion'
risk: >
  Summarization can drop nuance or specific commitments made earlier in the thread.
```

### Skeleton Screens
```yaml
id: skeleton-loader
name: Skeleton Screens
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/skeleton-loader
what_it_is: >
  Shows the shape of content (like a table outline) while it's
  loading, rather than a generic spinner.
when_to_use:
  - The eventual content has a predictable structure worth previewing
do_not_use_when:
  - Content shape is unpredictable or a generic spinner is clearer
why_to_use: >
  Reduces perceived wait time by showing users what's coming, in
  shape, before it arrives.
examples:
  - product: Comparison and dashboard tools
    description: 'A loading table outline shown while "Compare competitors" processes'
risk: >
  A skeleton that doesn't match the eventual layout causes a jarring visual shift once content loads.
```

### Smart Code Blocks
```yaml
id: smart-code
name: Smart Code Blocks
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/smart-code
what_it_is: >
  Interactive code blocks in AI output that support run, copy, and
  apply actions directly, rather than plain unstyled text.
when_to_use:
  - The output includes code the user will likely execute or reuse
do_not_use_when:
  - Output is not code, or code is purely illustrative
why_to_use: >
  Removes the friction of manually copying code out and running it
  elsewhere.
examples:
  - product: Coding assistants
    description: 'A code block with inline "Copy" and "Run" buttons'
risk: >
  A "Run" action on unreviewed AI-generated code carries real risk if not paired with clear scoping or sandboxing.
```

### Scroll to Bottom
```yaml
id: scroll-bottom
name: Scroll to Bottom
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/scroll-bottom
what_it_is: >
  A jump-to-latest control that appears when new messages arrive
  while the user has scrolled up in a long thread.
when_to_use:
  - Threads can be long enough that users scroll up to review history
do_not_use_when:
  - Threads are always short with no scrolling involved
why_to_use: >
  Lets users freely review earlier messages without losing track of
  new activity at the bottom.
examples:
  - product: Long-running chat threads
    description: '"2 new, Jump to latest" button appearing while scrolled up'
risk: >
  Auto-scrolling without this control forcibly yanks users away from what they were reading.
```

### Message Reactions
```yaml
id: message-reactions
name: Message Reactions
category: feedback-learning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/message-reactions
what_it_is: >
  Quick emoji-style reactions (helpful/not helpful) attached to
  individual AI responses.
when_to_use:
  - Lightweight, low-friction feedback per response is valuable
do_not_use_when:
  - Deeper structured feedback is needed instead of a quick reaction
why_to_use: >
  Extremely low-friction feedback capture compared to a full rating
  form or comment box.
examples:
  - product: AI assistant chat interfaces
    description: '"Helpful / Not helpful" reactions on the assistant''s message row'
risk: >
  A reaction with no follow-up question captures that something was wrong but not why.
```

### Generative Charts
```yaml
id: gen-chart
name: Generative Charts
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/gen-chart
what_it_is: >
  Turns data or a prompt into an editable chart rendered directly in
  the AI's response.
when_to_use:
  - The answer involves data that's clearer as a chart than a table or prose
do_not_use_when:
  - Data is too simple to warrant a chart
why_to_use: >
  Presents quantitative answers in the clearest possible form instead
  of forcing users to mentally chart a described trend.
examples:
  - product: Analytics assistants
    description: '"Generate analytics" turning a request into an editable weekly chart'
risk: >
  Auto-generated charts can mislead if the chart type doesn't actually fit the underlying data shape.
```

### Instant Translation
```yaml
id: lang-toggle
name: Instant Translation
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/lang-toggle
what_it_is: >
  A one-click toggle to switch the AI's output language, rather than
  re-prompting in a different language.
when_to_use:
  - Users routinely need output in more than one language
do_not_use_when:
  - The product only ever needs one output language
why_to_use: >
  Removes the friction of re-prompting to get the same content in a
  different language.
examples:
  - product: Multilingual support assistants
    description: '"English → Switch to Spanish" toggle on a generated response'
risk: >
  Translation quality for nuanced or idiomatic content can degrade silently without a review step.
```

### Output Format Selection
```yaml
id: output-format-selection
name: Output Format Selection
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/output-format-selection
what_it_is: >
  Lets users choose the output format, such as JSON, CSV, or
  Markdown, before or after generation.
when_to_use:
  - Output needs to be consumed by different downstream tools or audiences
do_not_use_when:
  - Only one output format is ever needed
why_to_use: >
  Removes the manual step of reformatting AI output for a specific
  downstream use.
examples:
  - product: Developer and data tools
    description: '"Markdown / JSON / HTML" format selector on a generated document'
risk: >
  A format switch that silently loses structure (e.g. tables) can produce broken downstream files.
```

### Output History
```yaml
id: output-history
name: Output History
category: memory-context
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/output-history
what_it_is: >
  A browsable, restorable history of previous outputs (artifacts),
  indexed separately from chat turns.
when_to_use:
  - Generated artifacts (images, code, documents) outlive the conversation thread
do_not_use_when:
  - Outputs are disposable and never revisited
why_to_use: >
  Lets users find and restore a past output without scrolling back
  through an entire chat thread.
examples:
  - product: Creative and document generation tools
    description: "Output history: Write a professional email, 2h; Explain quantum computing, 1d"
risk: >
  Output history without good search or filtering becomes as unusable as an unsearchable chat log.
```

### Output Sharing
```yaml
id: output-sharing
name: Output Sharing
category: collaboration-handoff
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/output-sharing
what_it_is: >
  Lets users share a specific AI output via link or email with
  configurable permissions.
when_to_use:
  - Outputs are commonly shared with people outside the immediate session
do_not_use_when:
  - Outputs are never meant to leave the user's own session
why_to_use: >
  Removes the friction of manually copying output elsewhere to share
  it with someone else.
examples:
  - product: Document and research assistants
    description: '"Share output, Copy Link / Email" on a generated result'
risk: >
  Shared links without expiry or permission scoping can leak sensitive generated content.
```

### Output Analytics
```yaml
id: output-analytics
name: Output Analytics
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/output-analytics
what_it_is: >
  Tracks which outputs users prefer or use most, surfaced as simple
  metrics like views and likes.
when_to_use:
  - Builders need signal on which generated outputs actually get used
do_not_use_when:
  - There's no downstream way to act on output usage data
why_to_use: >
  Gives product teams real usage signal on output quality beyond
  explicit feedback alone.
examples:
  - product: Content generation platforms
    description: '"Total Views 1,247, Likes 89" shown per generated output'
risk: >
  Usage metrics alone can't distinguish "liked" from "merely seen," so they're a partial signal at best.
```

### Auto Tagging
```yaml
id: auto-tag
name: Auto Tagging
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/auto-tag
what_it_is: >
  Proposes tags from content for the user to accept or edit, rather
  than requiring fully manual tagging.
when_to_use:
  - Content benefits from consistent tagging but manual tagging is tedious
do_not_use_when:
  - Tagging isn't a meaningful part of the workflow
why_to_use: >
  Speeds up tagging while keeping a human in the loop to catch
  mistagged content.
examples:
  - product: Photo and content organization tools
    description: '"Nature, Outdoors" tags proposed automatically, editable before saving'
risk: >
  Auto-tags accepted without review can silently mis-categorize content at scale.
```

### Category: Design Tools

### Prompt to UI
```yaml
id: prompt-ui
name: Prompt to UI
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/prompt-ui
what_it_is: >
  Generates editable UI directly from a text prompt, such as a
  pricing table, rather than a static image.
when_to_use:
  - The desired output is a real, editable interface, not just a visual
do_not_use_when:
  - A static image or mockup is all that's needed
why_to_use: >
  Produces a directly usable, editable interface instead of a
  reference image someone has to rebuild by hand.
examples:
  - product: AI UI generation tools
    description: '"A pricing table: Starter $12, Team $29" generated as an editable UI'
risk: >
  Generated UI that doesn't respect existing design tokens creates inconsistency with the rest of the product.
```

### Variation Picker
```yaml
id: variation-grid
name: Variation Picker
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/variation-grid
what_it_is: >
  Lets users pick among several side-by-side generated design
  options, such as product variations, in a grid.
when_to_use:
  - Exploration is visual and comparisons are faster side-by-side
do_not_use_when:
  - There's only one plausible good option to generate
why_to_use: >
  Side-by-side visual comparison is faster than serial regeneration
  for exploring design options.
examples:
  - product: Design and product generation tools
    description: A grid of generated object variations (mug, lamp, chair, vase) shown side by side
risk: >
  A grid that's too large creates choice overload rather than helpful comparison.
```

### Component Variants
```yaml
id: component-variants
name: Component Variants
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/component-variants
what_it_is: >
  Generates multiple UI variations of the same component, such as
  different pricing tier cards, for comparison.
when_to_use:
  - Multiple visual approaches to the same component are worth comparing
do_not_use_when:
  - The component's design is already fixed and singular
why_to_use: >
  Speeds up design exploration by generating multiple real variants
  rather than one starting point.
examples:
  - product: UI generation tools
    description: '"Basic $9, Pro $29, Ent $99" generated as component variants'
risk: >
  Variants that don't respect existing design tokens require significant rework to match the system.
```

### Text-to-Image with Advanced Controls
```yaml
id: text-to-image-controls
name: Text-to-Image with Advanced Controls
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/text-to-image-controls
what_it_is: >
  Exposes advanced generation controls, such as aspect ratio and
  style, alongside the text prompt for image generation.
when_to_use:
  - Users need precise, repeatable control over specific image parameters
do_not_use_when:
  - Default generation settings already satisfy most users
why_to_use: >
  Gives users predictable, fine-grained control over image generation
  without requiring prompt engineering skill.
examples:
  - product: Image generation tools
    description: '"1:1 / 16:9 / 9:16, Realistic / Artistic / Standard" controls alongside the prompt'
risk: >
  Too many exposed controls overwhelm casual users seeking a quick result.
```

### Image Upscaling
```yaml
id: image-upscaling
name: Image Upscaling
category: iterative-editing
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/image-upscaling
what_it_is: >
  AI-powered resolution enhancement of an existing image, shown with
  a before/after comparison.
when_to_use:
  - Users need higher resolution than the original image provides
do_not_use_when:
  - The image is already at sufficient resolution
why_to_use: >
  Interactive before/after comparisons build user confidence by
  clearly demonstrating the AI-powered improvement.
examples:
  - product: Topaz Gigapixel, similar upscaling tools
    description: '"Original 256×256 → Upscaled 1024×1024" shown as a before/after comparison'
risk: >
  Upscaling can introduce artifacts that aren't obvious until viewed at full resolution.
```

### Style Transfer
```yaml
id: style-transfer
name: Style Transfer
category: iterative-editing
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/style-transfer
what_it_is: >
  Applies a full visual theme or style to an existing layout, such as
  turning a wireframe into a styled design.
when_to_use:
  - The structure is right but the visual style needs to change
do_not_use_when:
  - Structure also needs to change, not just style
why_to_use: >
  Lets users apply a finished visual style without rebuilding the
  underlying structure from scratch.
examples:
  - product: Design tools
    description: '"Wireframe → Styled, Apply style" action transforming a plain layout'
risk: >
  Style transfer that ignores existing design tokens produces output inconsistent with the rest of a design system.
```

### Background Removal
```yaml
id: background-removal
name: Background Removal
category: iterative-editing
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/background-removal
what_it_is: >
  Automatically removes an image's background, producing a
  transparent cutout.
when_to_use:
  - The user needs a subject isolated from its background
do_not_use_when:
  - The background is part of the intended content
why_to_use: >
  Automates a task that's tedious and skill-intensive to do manually.
examples:
  - product: Product photography tools
    description: '"Cutout ready, Remove background" one-click action'
risk: >
  Automatic edge detection can fail on complex subjects like hair or fur, requiring manual touch-up.
```

### Object Removal
```yaml
id: object-removal
name: Object Removal
category: iterative-editing
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/object-removal
what_it_is: >
  Lets users select and remove an unwanted object from an image, with
  the AI filling in the gap.
when_to_use:
  - An unwanted element needs removing from an otherwise good image
do_not_use_when:
  - The whole image needs regeneration
why_to_use: >
  Precise, targeted removal preserves the rest of the image instead
  of requiring a full regeneration.
examples:
  - product: Photo editing tools
    description: "Click and drag to select object → Object selected → Remove"
risk: >
  Fill-in quality after removal can look unnatural in complex backgrounds, requiring manual review.
```

### Style Interpolation
```yaml
id: style-interpolation
name: Style Interpolation
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/style-interpolation
what_it_is: >
  Lets users blend between multiple styles using an adjustable
  control, rather than picking one style outright.
when_to_use:
  - The desired result is somewhere between two known style extremes
do_not_use_when:
  - A single fixed style is always what's needed
why_to_use: >
  Gives users a middle ground instead of forcing an all-or-nothing
  style choice.
examples:
  - product: Image and design generation tools
    description: '"From → To, Blend, Adjust" control for mixing between two styles'
risk: >
  Blended styles can land in an incoherent middle ground if the two source styles clash structurally.
```

### Infinite Canvas
```yaml
id: infinite-canvas
name: Infinite Canvas
category: spatial-placement
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/infinite-canvas
what_it_is: >
  Arranges AI outputs on a zoomable, pannable plane rather than a
  fixed, linear layout.
when_to_use:
  - The task is exploratory and spatial, with many outputs to arrange
do_not_use_when:
  - The task has a fixed, linear structure
why_to_use: >
  Matches the AI's placement to genuinely open-ended, exploratory
  creative work where spatial arrangement itself carries meaning.
examples:
  - product: TLDraw, Figma-style AI canvases
    description: "Generate a logo for a coffee shop, AI AI AI, Infinite canvas, Pan · Zoom"
risk: >
  Open canvases can become cluttered and disorienting without clear visual organization.
```

### Theme Generation
```yaml
id: theme-gen
name: Theme Generation
category: configuration-tuning
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/theme-gen
what_it_is: >
  Generates a full color system and palette from a text prompt or
  reference image.
when_to_use:
  - Users need a coherent color system but lack design expertise to build one manually
do_not_use_when:
  - A fixed design system palette already exists and must be used
why_to_use: >
  Produces a coherent, usable color system from a simple description
  instead of requiring color theory expertise.
examples:
  - product: Design system generation tools
    description: '"Modern, professional, trustworthy → ThemeGen" producing a full palette'
risk: >
  Generated palettes may not meet accessibility contrast requirements without a review step.
```

### Category: Commerce

### Semantic Search
```yaml
id: semantic-search
name: Semantic Search
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/semantic-search
what_it_is: >
  Retrieves products or content by meaning across catalog data,
  rather than exact keyword matching.
when_to_use:
  - Users describe what they want in natural language rather than exact product terms
do_not_use_when:
  - Users always search by exact, known product names or SKUs
why_to_use: >
  Finds relevant results even when the user's words don't match
  catalog terminology exactly.
examples:
  - product: E-commerce search assistants
    description: '"Comfortable headphones under $200" retrieving relevant products by meaning'
risk: >
  Semantic matches that are too loose can surface irrelevant results that erode trust in search.
```

### Visual Search
```yaml
id: visual-search
name: Visual Search
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/visual-search
what_it_is: >
  Finds products or images from an uploaded photo, ranked by visual
  similarity.
when_to_use:
  - Users have a photo of what they want but not the words to describe it
do_not_use_when:
  - Products are easily described and found through text search
why_to_use: >
  Removes the need to describe something in words when a photo
  already captures it precisely.
examples:
  - product: Shopping apps
    description: "Visual matches: Trail runner (near match), Court low (close match)"
risk: >
  Low-confidence matches shown without labeling can mislead users into thinking they found an exact product.
```

### Universal Cart
```yaml
id: universal-cart
name: Universal Cart
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/universal-cart
what_it_is: >
  A single cart that aggregates items when an AI shopping agent pulls
  products from multiple different merchants.
when_to_use:
  - The AI agent shops or compares across more than one merchant
do_not_use_when:
  - Shopping only ever happens within a single merchant
why_to_use: >
  Removes the friction of managing separate carts per merchant when
  AI aggregates options across them.
examples:
  - product: AI shopping agents
    description: '"RTX 4070 Super, Best Buy; RM650x PSU, Amazon, $688, Pay" as one unified cart'
risk: >
  Cross-merchant checkout adds real complexity around payment, shipping, and returns that must be handled transparently.
```

### Instant Buy
```yaml
id: instant-buy
name: Instant Buy
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/instant-buy
what_it_is: >
  Lets users complete a purchase directly inside the AI surface,
  without leaving for a separate checkout page.
when_to_use:
  - Payment details are already on file and the purchase is low-friction
do_not_use_when:
  - The purchase requires configuration steps beyond a simple buy
why_to_use: >
  Removes the drop-off risk of sending users to a separate checkout
  flow after the AI has already built purchase intent.
examples:
  - product: AI shopping assistants
    description: "Sony WH-1000XM5, $348, Best Buy · Visa ····4242, Ready to buy, Buy now"
risk: >
  In-surface purchases must keep price, payment, and confirmation fully visible to avoid trust issues.
```

### Smart Recommendations
```yaml
id: smart-recommendations
name: Smart Recommendations
category: personalization-context-awareness
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/smart-recommendations
what_it_is: >
  Context-aware product suggestions ranked from catalog and behavioral
  signals, rather than a static "related items" rail.
when_to_use:
  - Rich behavioral or contextual signal exists to rank recommendations
do_not_use_when:
  - No meaningful behavioral signal exists to personalize from
why_to_use: >
  Surfaces genuinely relevant next items instead of a generic static
  rail that ignores context.
examples:
  - product: E-commerce product pages
    description: "Because you viewed the oak desk, Walnut shelf, $84"
risk: >
  Recommendations that feel manipulative or opaque without an explanation reduce trust in the merchandising.
```

### Smart Comparison
```yaml
id: comparison
name: Smart Comparison
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/comparison
what_it_is: >
  Builds a dynamic comparison table across products or options,
  generated from the user's actual criteria.
when_to_use:
  - Users are choosing among named options on shared criteria
do_not_use_when:
  - There's only one option, with nothing to compare against
why_to_use: >
  Structured comparison is far easier to evaluate than reading
  separate product descriptions one at a time.
examples:
  - product: Shopping and research assistants
    description: "Feature, A, B; Battery, 24h, 18h; Weight, 1.2lb, 1.5lb"
risk: >
  Comparison tables padded with irrelevant rows dilute the criteria that actually matter to the decision.
```

### Natural Language Filter
```yaml
id: nl-filter
name: Natural Language Filter
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/nl-filter
what_it_is: >
  Translates a natural language phrase into structured, editable
  filter chips the user can still adjust.
when_to_use:
  - Users describe filters conversationally rather than using structured controls
do_not_use_when:
  - Filters are always simple enough for a direct structured UI
why_to_use: >
  Combines the ease of natural language with the precision of
  structured filters users can correct.
examples:
  - product: E-commerce search
    description: '"Red shoes under $50 → Color: Red, Price: <$50" editable filter chips'
risk: >
  Mis-parsed natural language filters that aren't shown as editable chips leave users unable to correct a misread constraint.
```

### Smart Form Fill
```yaml
id: smart-fill
name: Smart Form Fill
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/smart-fill
what_it_is: >
  Parses unstructured text, such as a pasted note, into structured
  form fields automatically.
when_to_use:
  - Users have unstructured source data that maps to a known form
do_not_use_when:
  - Form data is always entered directly and structured from the start
why_to_use: >
  Removes the tedious manual work of transcribing unstructured
  information into individual form fields.
examples:
  - product: CRM and checkout forms
    description: '"Mira Okonkwo, 123 Maple St → Name · Address, Extract" auto-parsed into fields'
risk: >
  Mis-parsed fields that go unreviewed before submission can silently corrupt records.
```

### Smart Bundles
```yaml
id: smart-bundles
name: Smart Bundles
category: personalization-context-awareness
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/smart-bundles
what_it_is: >
  Context-aware complementary product offers surfaced based on
  what's already in the cart.
when_to_use:
  - Complementary products genuinely add value to what's in the cart
do_not_use_when:
  - Cart contents have no meaningful complementary products
why_to_use: >
  Surfaces genuinely useful add-ons at the moment they're most
  relevant, the point of purchase.
examples:
  - product: E-commerce cart pages
    description: "Cart: Camera ($500), Lens hood $24, Carry bag $49, Suggest add-ons"
risk: >
  Bundling without a clear rationale can feel like manipulative upselling rather than genuine help.
```

### Review Summary
```yaml
id: review-summary
name: Review Summary
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/review-summary
what_it_is: >
  Summarizes pros, cons, and themes from many customer reviews into
  a digestible summary.
when_to_use:
  - The product has enough reviews that reading them all is impractical
do_not_use_when:
  - Review volume is low enough to read directly
why_to_use: >
  Saves significant time versus reading through hundreds of
  individual reviews to find the actual pattern.
examples:
  - product: E-commerce product pages
    description: "4.2 · 1.2k reviews: Excellent battery life. Charging cable too short."
risk: >
  A summary that smooths over a serious, recurring complaint can mislead buyers about real product issues.
```

### Price Drop Alerts
```yaml
id: price-drop-alerts
name: Price Drop Alerts
category: personalization-context-awareness
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/price-drop-alerts
what_it_is: >
  Notifies users when the price of a saved or watched item drops.
when_to_use:
  - Users commonly save items to buy later at a better price
do_not_use_when:
  - Prices are fixed and never fluctuate
why_to_use: >
  Re-engages users at the exact moment their interest is most likely
  to convert to a purchase.
examples:
  - product: E-commerce tracking features
    description: "Price dropped! $149, Was $199, Alert"
risk: >
  Excessive or low-value alerts train users to ignore notifications entirely.
```

### Dynamic Pricing
```yaml
id: dynamic-pricing
name: Dynamic Pricing
category: business-monetization
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/dynamic-pricing
what_it_is: >
  AI-powered real-time price optimization shown transparently, such
  as demand-based tier pricing.
when_to_use:
  - Pricing genuinely benefits from real-time demand-based adjustment
do_not_use_when:
  - Fixed pricing better serves trust and simplicity for the product
why_to_use: >
  Optimizes revenue and availability in real time, when transparently
  communicated to avoid feeling exploitative.
examples:
  - product: Dynamic pricing platforms
    description: "Premium Plan, High demand; Basic Plan, Stable"
risk: >
  Opaque dynamic pricing that users can't understand or predict damages trust badly.
```

### Inventory Prediction
```yaml
id: inventory-prediction
name: Inventory Prediction
category: business-monetization
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/inventory-prediction
what_it_is: >
  Predicts stock needs based on trends, surfaced to merchants as
  early warnings before a shortage happens.
when_to_use:
  - Demand is variable enough that manual forecasting misses trends
do_not_use_when:
  - Demand is stable and easily forecast manually
why_to_use: >
  Gives merchants advance warning to restock before a predicted dip
  causes a stockout.
examples:
  - product: Merchant inventory dashboards
    description: "Monitor stock levels, Current healthy, Predicted dip next week, TrendWatch"
risk: >
  Predictions that are wrong without a clear confidence signal can lead to costly over- or under-ordering.
```

### Return Prediction
```yaml
id: return-prediction
name: Return Prediction
category: business-monetization
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/return-prediction
what_it_is: >
  Predicts the likelihood a purchase will be returned and surfaces a
  proactive intervention, such as sending a sizing guide.
when_to_use:
  - Return rates are high enough to warrant proactive intervention
do_not_use_when:
  - Return rates are already low and not a meaningful business problem
why_to_use: >
  Proactively addressing likely return causes reduces cost and
  improves customer satisfaction versus reacting after the fact.
examples:
  - product: E-commerce merchant tools
    description: "Wireless Headphones, Low return rate, Battery complaints, highlight battery specs, Send size guide"
risk: >
  Interventions based on a wrong prediction can feel presumptuous or irrelevant to the actual customer.
```

### Personalized Checkout
```yaml
id: personalized-checkout
name: Personalized Checkout
category: personalization-context-awareness
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/personalized-checkout
what_it_is: >
  A checkout flow customized per user, such as pre-selecting the
  payment method they use most often.
when_to_use:
  - Returning users have established, predictable preferences
do_not_use_when:
  - Users are always new with no established preference history
why_to_use: >
  Reduces friction at checkout, the exact moment where friction is
  most costly to conversion.
examples:
  - product: E-commerce checkout flows
    description: "Checkout, Credit Card ending in 4242, you use this most often"
risk: >
  A wrong pre-selected default can cause an accidental charge to the wrong payment method if not clearly reviewable.
```

### AI-Powered Customer Support
```yaml
id: ai-customer-support
name: AI-Powered Customer Support
category: collaboration-handoff
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/ai-customer-support
what_it_is: >
  Proactive support suggestions offered during a customer
  conversation, rather than only reactive Q&A.
when_to_use:
  - Common support issues follow predictable patterns
do_not_use_when:
  - Support issues are always too unique for proactive suggestions
why_to_use: >
  Speeds up resolution by proactively surfacing the likely next
  question or need.
examples:
  - product: E-commerce support chat
    description: "I need help with my order, Can you provide your order number?"
risk: >
  Proactive suggestions that miss the mark repeatedly feel like the bot isn't actually listening.
```

### Fraud Alert
```yaml
id: fraud-detection
name: Fraud Alert
category: safety-harm-prevention
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/fraud-detection
what_it_is: >
  Flags suspicious activity and requires identity verification before
  a transaction completes.
when_to_use:
  - Transactions carry real fraud risk that AI can help detect
do_not_use_when:
  - No meaningful fraud risk exists in the transaction flow
why_to_use: >
  Catches likely fraudulent transactions before completion, protecting
  both the user and the business.
examples:
  - product: Payment and banking apps
    description: "Pay $500.00, Unusual activity detected, Verify your identity via SMS"
risk: >
  False positives that block legitimate transactions frustrate genuine customers and can drive them away.
```

### Category: Collab

### Shared Session Link
```yaml
id: shared-session-link
name: Shared Session Link
category: collaboration-handoff
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/shared-session-link
what_it_is: >
  Shares a URL giving others access to the same AI session, with
  configurable view/comment/edit permissions.
when_to_use:
  - Multiple people need to access or review the same AI session
do_not_use_when:
  - Sessions are always single-user and never shared
why_to_use: >
  Enables collaborative review and continuation of AI work without
  manually copying content between people.
examples:
  - product: Collaborative AI research or writing tools
    description: "aiux.dev/s/7k2n, Anyone with the link can comment, Shared"
risk: >
  AI sessions often contain confidential uploads, so unscoped sharing links carry real data exposure risk.
```

### Live Presence
```yaml
id: live-presence
name: Live Presence
category: collaboration-handoff
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/live-presence
what_it_is: >
  Shows who is currently active in a shared AI session, with their
  current activity (editing, viewing).
when_to_use:
  - Multiple people can be simultaneously active in the same session
do_not_use_when:
  - Sessions are never simultaneous multi-user
why_to_use: >
  Prevents simultaneous edits from colliding by making concurrent
  activity visible in real time.
examples:
  - product: Collaborative canvas or document tools
    description: '"Maya, editing; Leo, viewing" shown as live presence indicators'
risk: >
  Live presence adds no value in async-only workflows and can feel like unnecessary overhead there.
```

### Inline Comment Thread
```yaml
id: inline-comment-thread
name: Inline Comment Thread
category: collaboration-handoff
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/inline-comment-thread
what_it_is: >
  Lets users discuss a specific selection with threaded comments,
  including AI-assisted replies within the thread.
when_to_use:
  - Feedback needs to be anchored to a specific span of content
do_not_use_when:
  - Feedback is always general and not tied to specific content
why_to_use: >
  Anchors discussion to exactly what it's about, rather than a
  general comment disconnected from the specific content.
examples:
  - product: Collaborative document editors
    description: "This section needs more detail, I can help expand this. Add more context?"
risk: >
  Threads that go unresolved and pile up become noise rather than useful review signal.
```

### Smart Diff
```yaml
id: smart-diff
name: Smart Diff
category: output-presentation
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/smart-diff
what_it_is: >
  Highlights and shows exactly what the AI model changed relative to
  a baseline, for review before accepting.
when_to_use:
  - Reviewers need to accept or reject AI changes surgically
do_not_use_when:
  - Changes are trivial enough not to warrant review
why_to_use: >
  Critical for docs, code, and contracts where reviewers need to see
  exactly what changed, not just the end result.
examples:
  - product: Code and document review tools
    description: "Welcome to the app. → Welcome to the app!, Reject / Accept"
risk: >
  A diff view that misrepresents the actual change (e.g. formatting-only diffs shown as content changes) undermines review trust.
```

### Category: Audio

### Live Transcript
```yaml
id: live-transcript
name: Live Transcript
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/live-transcript
what_it_is: >
  Shows speech as live, real-time text while someone talks, rather
  than only after the recording ends.
when_to_use:
  - Meetings, interviews, or accessibility needs require real-time text
do_not_use_when:
  - A post-hoc transcript after recording ends is sufficient
why_to_use: >
  Lets users correct words in real time and follow along as speech
  happens rather than waiting.
examples:
  - product: Meeting transcription tools
    description: "Listening, The launch is next Tuesday at 10. We'll send the deck tonight."
risk: >
  Delayed or buffered "live" transcripts that lag noticeably undermine the real-time value of the pattern.
```

### Voice Visualizer
```yaml
id: voice-visualizer
name: Voice Visualizer
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/voice-visualizer
what_it_is: >
  Visual feedback for voice mode, communicating listening, processing,
  and speaking states, plus errors like low volume.
when_to_use:
  - Voice interaction needs clear state feedback beyond just a mic icon
do_not_use_when:
  - Voice mode has no distinguishable states worth visualizing
why_to_use: >
  A mic icon alone doesn't communicate listening versus processing
  versus speaking, or errors like denied permission.
examples:
  - product: Voice assistants
    description: 'An animated waveform indicating active "Listening" state'
risk: >
  Animation without clear state labels confuses users about what's actually happening.
```

### Voice Cloning
```yaml
id: voice-cloning
name: Voice Cloning
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/voice-cloning
what_it_is: >
  Lets users clone and reuse a custom voice from a sample recording.
when_to_use:
  - Consistent, personalized voice output is valuable to the use case
do_not_use_when:
  - Standard synthetic voices already meet the need
why_to_use: >
  Gives users a personalized or brand-consistent voice rather than a
  generic synthetic one.
examples:
  - product: Voice AI platforms (e.g. ElevenLabs-style tools)
    description: "Voice sample, Ready to clone, Clone"
risk: >
  Voice cloning carries real consent and misuse risk if not paired with clear authorization safeguards.
```

### Real-time Translation
```yaml
id: real-time-translation
name: Real-time Translation
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/real-time-translation
what_it_is: >
  Live translation during a voice conversation, shown with clear
  source and target language display.
when_to_use:
  - Conversation participants speak different languages
do_not_use_when:
  - All participants share the same language
why_to_use: >
  Enables real-time cross-language conversation without a human
  interpreter.
examples:
  - product: Multilingual voice assistants
    description: "EN → ES, Hola, ¿cómo estás?, Live, Listen"
risk: >
  Translation errors in real-time voice can compound quickly if there's no correction mechanism.
```

### Audio Enhancement
```yaml
id: audio-enhancement
name: Audio Enhancement
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/audio-enhancement
what_it_is: >
  AI-powered noise reduction and clarity improvement applied to
  recorded or live audio.
when_to_use:
  - Audio quality is degraded by background noise or poor recording conditions
do_not_use_when:
  - Source audio is already clean
why_to_use: >
  Improves audio usability without requiring the user to re-record
  in better conditions.
examples:
  - product: Call and meeting tools
    description: '"Enhance" action applied to a noisy recording'
risk: >
  Over-aggressive noise reduction can introduce artifacts or strip legitimate ambient sound cues.
```

### Voice Commands
```yaml
id: voice-commands
name: Voice Commands
category: authoring-input
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/voice-commands
what_it_is: >
  Triggers specific, named actions via spoken commands, such as
  changing music tracks.
when_to_use:
  - A defined set of actions benefit from hands-free voice triggering
do_not_use_when:
  - Actions require complex, conversational specification
why_to_use: >
  Faster and hands-free compared to navigating a UI for a known,
  bounded set of actions.
examples:
  - product: Voice-controlled media apps
    description: '"Play jazz, Next track" as direct voice commands'
risk: >
  Ambiguous commands without confirmation can trigger the wrong action.
```

### Activation Boundaries
```yaml
id: activation-boundaries
name: Activation Boundaries
category: natural-interaction
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/activation-boundaries
what_it_is: >
  Explicit, clearly signaled starts and stops for always-on voice
  agents, rather than ambiguous continuous listening.
when_to_use:
  - The product includes an always-on or ambient voice agent
do_not_use_when:
  - Voice interaction is always explicitly triggered per turn
why_to_use: >
  Gives users a clear, trustworthy signal of exactly when the agent
  is and isn't actively listening.
examples:
  - product: Always-on ambient voice assistants
    description: A clear visual/audio cue marking exactly when active listening starts and stops
risk: >
  Ambiguous activation boundaries raise real privacy concerns about when the system is actually recording.
```

### Interruptibility
```yaml
id: interruptibility
name: Interruptibility
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/interruptibility
what_it_is: >
  A single gesture to pause or cancel the AI mid-speech, rather than
  waiting for it to finish.
when_to_use:
  - The AI produces spoken output that can run long
do_not_use_when:
  - Spoken output is always brief enough that interruption adds no value
why_to_use: >
  Gives users immediate control over long spoken responses instead of
  forcing them to wait it out.
examples:
  - product: Voice assistants
    description: "Assistant speaking..., Barge in / Stop"
risk: >
  An interrupt gesture that's hard to trigger mid-speech defeats the purpose of offering it.
```

### Voice Confirmation
```yaml
id: voice-confirmation
name: Voice Confirmation
category: oversight-control
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/voice-confirmation
what_it_is: >
  Requires spoken approval before executing a high-stakes voice
  action, rather than acting on the first command alone.
when_to_use:
  - The voice action is costly, sensitive, or hard to reverse
do_not_use_when:
  - The voice action is low-risk and easily reversible
why_to_use: >
  Confirming destructive or costly commands before execution prevents
  costly mistakes from ambiguous voice recognition.
examples:
  - product: Voice-controlled financial or smart home apps
    description: A spoken confirmation step required before executing a high-stakes command
risk: >
  Ambient voice without confirmation on destructive commands causes costly mistakes.
```

### Multi-User Awareness
```yaml
id: multi-user-awareness
name: Multi-User Awareness
category: personalization-context-awareness
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/multi-user-awareness
what_it_is: >
  Identifies the current speaker and scopes the AI's response to that
  specific person's permissions and context.
when_to_use:
  - A shared voice device serves multiple distinct users
do_not_use_when:
  - The voice product is always single-user
why_to_use: >
  Prevents one user's personal context or permissions from leaking
  into another user's interaction on a shared device.
examples:
  - product: Shared smart home voice assistants
    description: Speaker identification scoping calendar or account access to the correct household member
risk: >
  Misidentifying the speaker can expose one user's private context to another.
```

### Category: Performance

### Cost Transparency
```yaml
id: cost-transparency
name: Cost Transparency
category: business-monetization
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/cost-transparency
what_it_is: >
  Shows the price of an AI operation before or as it runs, rather
  than only in a final bill.
when_to_use:
  - Operations have meaningful, variable cost
do_not_use_when:
  - Cost is negligible or fully abstracted away by design
why_to_use: >
  Sets expectations before spend accumulates, especially important
  for API-backed tools and team admins.
examples:
  - product: API-backed AI tools
    description: "This run, $0.08, 18,400 tokens, Details"
risk: >
  Sudden hard stops on budget without prior warning feel punitive rather than transparent.
```

### Rate Limit Warnings
```yaml
id: rate-limit-warnings
name: Rate Limit Warnings
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/rate-limit-warnings
what_it_is: >
  Alerts users before they hit an API or usage limit, with a reset
  time or upgrade path shown.
when_to_use:
  - The product enforces usage or rate limits
do_not_use_when:
  - No meaningful usage limits exist
why_to_use: >
  A soft warning before the wall is far better than a post-hoc error
  after lost work.
examples:
  - product: API-backed tools with quotas
    description: "2 requests left, Resets in 14 min"
risk: >
  Warnings that appear too late, right at the limit, don't give users time to adjust their behavior.
```

### Running Meters
```yaml
id: running-meters
name: Running Meters
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/running-meters
what_it_is: >
  Live token, cost, and quota counters shown during execution of a
  long-running AI task.
when_to_use:
  - Tasks run long enough that live progress on cost and usage matters
do_not_use_when:
  - Tasks complete near-instantly with no meaningful execution window
why_to_use: >
  Keeps cost and usage visible throughout execution rather than only
  as a surprise at the end.
examples:
  - product: Long-running agent tasks
    description: "Tokens 2,420, Cost $0.34, ETA 4s"
risk: >
  Meters that update too infrequently feel stale and undermine the sense of live tracking.
```

### Processing Time Estimates
```yaml
id: processing-time-estimates
name: Processing Time Estimates
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/processing-time-estimates
what_it_is: >
  Shows expected wait time for a task before it starts, such as image
  generation versus code analysis.
when_to_use:
  - Wait times vary meaningfully by task type
do_not_use_when:
  - All tasks complete near-instantly regardless of type
why_to_use: >
  Sets accurate expectations upfront so users aren't left guessing
  how long to wait.
examples:
  - product: Multi-modal generation tools
    description: "Image generation ~8s, Code analysis ~8s"
risk: >
  Estimates that are frequently wrong train users to distrust the estimate entirely.
```

### Hard Budget Ceilings
```yaml
id: hard-budget-ceilings
name: Hard Budget Ceilings
category: business-monetization
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/hard-budget-ceilings
what_it_is: >
  Enforceable spend caps across runs and sessions that stop execution
  once a defined budget is reached.
when_to_use:
  - Uncontrolled spend is a real risk for the user or organization
do_not_use_when:
  - Spend is inherently bounded and low regardless of usage
why_to_use: >
  Gives users a hard, enforced backstop against runaway costs rather
  than relying on manual monitoring alone.
examples:
  - product: API and agent platforms with usage-based billing
    description: "Cap $0.50, $0.50, Stopped at cap, Raise"
risk: >
  A hard stop without prior warning at a lower threshold can interrupt important in-progress work abruptly.
```

### Caching Indicators
```yaml
id: caching-indicators
name: Caching Indicators
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/caching-indicators
what_it_is: >
  Shows when a cached result is being reused instead of freshly
  generated, so users understand why a response was fast.
when_to_use:
  - The product caches and reuses prior results for repeat queries
do_not_use_when:
  - Every response is always freshly generated
why_to_use: >
  Caching honesty helps users know why a reply was fast and whether
  it's current.
examples:
  - product: AI assistants with response caching
    description: "What is AI?..., Cached, 22ms"
risk: >
  Silent caching without indication can mislead users into thinking a stale answer is freshly current.
```

### Batch Processing Queue
```yaml
id: batch-processing-queue
name: Batch Processing Queue
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/batch-processing-queue
what_it_is: >
  Queues multiple requests for efficient batch execution, showing
  per-item progress and status.
when_to_use:
  - Users submit many similar items to process together
do_not_use_when:
  - Requests are always single, one-off items
why_to_use: >
  Processes many items efficiently while still giving visibility into
  individual item status.
examples:
  - product: Bulk image or document processing tools
    description: "Batch processing queue, Process Image 1, 45%; Process Image 2, Now; Process Image 3, Next"
risk: >
  A queue with no per-item status hides which specific items failed within a large batch.
```

### Performance Optimization Tips
```yaml
id: performance-optimization-tips
name: Performance Optimization Tips
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/performance-optimization-tips
what_it_is: >
  The AI proactively suggests ways to reduce cost or latency, such as
  enabling caching or batch processing.
when_to_use:
  - Users have room to meaningfully reduce their own cost or latency
do_not_use_when:
  - Usage is already optimal with no meaningful improvement available
why_to_use: >
  Helps users self-serve efficiency improvements instead of hitting
  limits repeatedly without understanding why.
examples:
  - product: API and agent platforms
    description: "Tips: Enable Response Caching, Use Batch Processing, Reduce Token Usage"
risk: >
  Generic tips that don't reflect the user's actual usage pattern feel irrelevant.
```

### Resource Usage Dashboard
```yaml
id: resource-usage-dashboard
name: Resource Usage Dashboard
category: performance-efficiency
type: pattern
source:
  name: AI UX Playground
  url: https://www.aiuxplayground.com/pattern/resource-usage-dashboard
what_it_is: >
  A visual dashboard of compute, memory, and token usage across a
  workload.
when_to_use:
  - Builders or admins need visibility into aggregate resource consumption
do_not_use_when:
  - End users have no need to see operational resource metrics
why_to_use: >
  Gives builders and ops teams the visibility needed to manage cost
  and capacity proactively.
examples:
  - product: Admin dashboards for AI platforms
    description: "Resource usage, CPU 45%, Tokens 125k / 200k"
risk: >
  Surfacing this to end users rather than builders/admins adds noise without actionable value.
```
