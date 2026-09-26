---
name: yuzuctus-design
description: Design, redesign, or visually review Yuzuctus web surfaces with its own art direction and CUT × STRATA foundations. Use for Yuzuhub, profile groups, the skins catalogue, Osurea showcases, or Yuzuctus design documentation.
---

# Yuzuctus Design

Use this skill for work that changes the visual language, layout, content hierarchy, motion, or interaction of a Yuzuctus surface.

## Read the project direction first

1. Read the repository-root DESIGN.md.
2. Read the canonical CUT × STRATA DESIGN_SYSTEM.md, design_contract.json, and css/tokens.css in the sibling CUT × STRATA repository when available.
3. Inspect the actual page, current content, and relevant local artwork before proposing or changing a design.

If the sibling source is unavailable, use the product repository's existing semantic tokens and report the missing source when it materially affects a decision. Never invent a replacement palette or silently synchronize shared tokens.

## Authority

Follow this order when guidance conflicts:

1. The user's current, explicit direction.
2. Accurate product facts, existing content, artist credits, and supplied artwork.
3. CUT × STRATA's canonical design system and machine-readable contract.
4. This repository's DESIGN.md.
5. General frontend or UI skill recommendations.

Treat CUT × STRATA as Yuzuctus's shared visual grammar, not a page template. Product surfaces keep their own content anatomy. Preserve the repository's stack and working behavior unless the user asks to change them.

## Art direction

The identity is “encre & chroma”: a calm editorial structure where dark ink, rules, and typography give form to selective color and the real character illustrations. The artwork's mint and turquoise, blue, blush, and lemon are visual cues; semantic UI colors still come from CUT × STRATA tokens.

Make choices from the specific content. Avoid default SaaS heroes, interchangeable sections, uniform card grids, decorative gradients, glass, glow, invented telemetry, and generic marketing copy. Use the subject-swap test: if most major decisions would survive replacing Yuzuctus with an unrelated SaaS, reconsider the direction.

## Related skills

- UI/UX Pro Max is a subordinate reference for a specific question about readability, contrast, accessibility, responsive behavior, or interaction. Do not use its style matching, palette/font recommendations, generated design system, or templates to choose Yuzuctus's identity.
- Emil's design-engineering guidance can refine purposeful motion and interaction feel. CUT × STRATA motion tokens and reduced-motion behavior remain authoritative.
- Impeccable can help plan, critique, or polish. Its general anti-pattern rules do not overrule an explicit Yuzuctus decision or canonical token.
- Vercel Web Design Guidelines can check implementation details such as semantics, focus, accessibility, and interaction. It does not set art direction.

## Work and visual proof

Before a substantial visual change, establish the page's job, audience, content hierarchy, and composition from real project material. Implement a coherent page, not a collection of unrelated effects.

For a user-facing redesign, render the page in a real browser and inspect screenshots rather than judging source code alone. At minimum, inspect phone and desktop layouts and both themes when the page supports them. For broad responsive changes, use the acceptance viewports and quality gates in the canonical design contract. Fix visible issues, then capture a final screenshot. If rendering is unavailable, say that visual verification is incomplete; a successful build alone is not visual proof.

Use the available Playwright workflow for browser rendering when it fits the project. Respect reduced motion, keyboard focus, readable type, working links/actions, real asset credits, and the canonical accessibility targets.
