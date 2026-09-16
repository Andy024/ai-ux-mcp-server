---
version: alpha
name: Delighto Editorial
description: A warm, minimal personal brand system combining a refined serif voice with friendly amber accents.
colors:
  primary: "#ffb238"
  primary-60: "#ffd37c"
  primary-70: "#ffc65a"
  secondary: "#1b2838"
  tertiary: "#f8f4ec"
  neutral: "#f8f7f3"
  surface: "#ffffff"
  on-surface: "#1b2838"
  muted: "#5c6b7a"
  muted-soft: "#9aa5b1"
  border: "#c5ced8"
  border-soft: "#9aa5b140"
  success: "#2f9e5a"
  success-soft: "#9fe8ac"
  error: "#e45d5d"
typography:
  headline-display:
    fontFamily: Fraunces
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Fraunces
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Fraunces
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Fraunces
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0.02em
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0px
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.02em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 20px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 32px
  lg: 48px
  xl: 64px
  gutter: 24px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
    height: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.full}"
    padding: "12px 20px"
    height: "44px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    border: "{colors.border}"
    rounded: "{rounded.lg}"
    padding: "32px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
---

# Delighto Editorial

## Overview
This system feels like a polished personal portfolio with a warm, approachable tone. It balances credibility and creativity: the serif headlines signal taste and editorial confidence, while the clean sans-serif UI and amber accent keep it human and inviting. The layout is spacious, calm, and intentionally unhurried, aimed at visitors who want a clear point of view rather than dense product storytelling.

## Colors
- **Primary (#ffb238):** A vivid amber used for the main CTA, small emphasis marks, and energetic highlights. It gives the interface its optimistic, maker-friendly personality.
- **Secondary (#1b2838):** A deep navy-ink used for body copy, navigation, and button text. It provides the strongest contrast and anchors the page with authority. Prefer this for all primary reading text.
- **Tertiary (#f8f4ec):** A soft warm wash for page regions and sidebars. Avoid stacking tertiary cards on a neutral page alone — put readable content on **surface** white so cards clearly separate from the background.
- **Neutral (#f8f7f3):** The main page background, a creamy off-white that keeps the whole composition light and spacious.
- **Surface (#ffffff):** Default card, code block, and nav panel background for readable contrast against neutral/tertiary.
- **Muted (#5c6b7a):** Readable secondary text for labels, helper copy, and chips. Use this when text must stay legible on cream or white.
- **Muted-soft (#9aa5b1):** Decorative-only de-emphasis (icons, idle states). Do not use for sentences or labels people need to read.
- **Border (#c5ced8):** Solid cool gray for card edges, nav dividers, and code panels. Strong enough to define shapes on cream.
- **Border-soft (#9aa5b140):** Optional hairline only when separation should stay nearly invisible.
- **Success (#2f9e5a):** Readable positive accent for borders and status text. Pair with **success-soft (#9fe8ac)** as a light fill if needed.
- **Error (#e45d5d):** A clear alert red for validation and destructive states, though it should stay rare in this otherwise calm palette.

## Contrast rules
- Body and steps always use `secondary` on `surface` or `neutral` (never light gray on cream).
- Cards that hold instructions or code use `surface` + `border`, not tertiary-on-neutral.
- Code and monospace copy use `secondary` text on white, with an amber left edge for “copy this” affordance.
- Navigation links use `secondary`; hover/active can use amber underline or amber left bar — keep link text dark for contrast.

## Typography
Fraunces drives the brand voice for all headline levels, creating an editorial, thoughtful feel. The headings are set in a regular 400 weight with tight negative letter spacing, which keeps the display type elegant and compact without becoming overly dramatic. Inter handles body text, labels, buttons, and navigation because it stays readable at small sizes and supports the interface’s clean, modern utility.

Use `headline-display`, `headline-lg`, `headline-md`, and `headline-sm` for page titles, hero statements, and section headers. Use `body-lg`, `body-md`, and `body-sm` for paragraphs, helper copy, and supportive content. Labels and navigation should stay in Inter with medium weight, and uppercase treatment is not a visual pattern here; the system prefers sentence case with subtle spacing rather than caps.

## Layout & Spacing
The composition is built around a wide, airy hero with strong left-right balance rather than a dense grid. Content sits in a centered container with generous outer margins, and the primary reading column stays relatively narrow to preserve line length and editorial pacing. Use the spacing scale rhythmically: `xs` for small gaps between chips and inline elements, `sm` for button padding and compact stacks, `md` for section relationships, and `lg` to `section` for major layout separation.

Cards and panels should feel lightly padded rather than compressed; `32px` is the clearest interior spacing pattern in the source. Horizontal alignment is clean and simple, with little visual noise, so prefer straightforward columns, ample whitespace, and one strong focal point per section.

## Elevation & Depth
The system is mostly flat, relying on color contrast, spacing, and a subtle border instead of heavy shadow. The only discernible depth treatment is a very soft shadow impression in the overall composition, but interactive components themselves remain low-elevation and restrained. This makes the interface feel calm and polished rather than app-like or highly dimensional.

Use tonal layering to create separation: off-white background, warm card surfaces, and high-contrast text. Keep shadows minimal or absent unless they are needed to support focus states or floating UI.

## Shapes
The shape language is friendly and rounded, with pill buttons as the strongest recurring motif. Interactive controls use `rounded.full` for a soft, approachable feel, while content cards sit at `rounded.lg` for a gentler rectangular form. Overall, the geometry is relaxed and welcoming, avoiding sharp corners and hard-edged framing.

## Components
Buttons are the most defined component family. `button-primary` is an amber pill with dark text, medium-weight Inter, and a 44px target height; it should be used for the main conversion action. `button-secondary` keeps the same pill geometry but swaps to a transparent fill with a dark outline, making it ideal for less dominant actions. `button-tertiary` is text-only and should remain visually quiet for inline or supporting links.

Cards should use white `surface` with a solid `border` and `32px` padding when they contain readable instructions or code. Warm `tertiary` is for page washes and sidebars, not for low-contrast nested cards. Chips use a white surface, `muted` text, full rounding, and modest padding; they function as lightweight topic tags rather than interactive pills.

Navigation links should remain understated, using Inter at body-sm or label-lg size with clear spacing between items. The hero area benefits from a strong typographic headline, a short supporting paragraph, and a single primary CTA beneath the chip row. Visual illustration or portrait treatments can introduce warm accent shapes like amber and mint, but they should not compete with the main call to action.

## Do's and Don'ts
- Do keep the page spacious and editorial, with generous margins and open breathing room.
- Do use Fraunces for headlines and Inter for everything functional, legible, or interactive.
- Do make the amber primary action the clearest clickable element on the page.
- Do use rounded pills for buttons and subtle rounded rectangles for cards and inputs.
- Do maintain high contrast for body text against the warm off-white background (navy on cream/white; never soft gray for paragraphs).
- Do use white surface cards with solid borders when stacking content on the neutral page.
- Don't introduce heavy shadows, glassmorphism, or glossy gradients.
- Don't turn labels, chips, or navigation into loud visual elements.
- Don't use sharp corners or cramped spacing that fights the calm, premium tone.
- Don't put tertiary cards on a neutral background without a clear border — the contrast is too low to read comfortably.