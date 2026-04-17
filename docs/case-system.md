# Case Study System

Use the shared shell in `src/components/case-study/CaseStudyShell.tsx` to keep header, tab bar, and footer behavior consistent across every case study.
Scope project-specific enhancements with `cs-case-page--<slug>` so visual experiments never leak into other pages.
Use `CaseSection` for numbered narrative blocks and keep each section focused on one message plus one visual rhythm.
Use `CaseImageReveal` for all narrative images; hero images should set `priority`, `width`, and `height` to reduce CLS.
Use `CasePullquote` only for moments that deserve a pause in the reading rhythm.
Use `CaseStaggerGrid` for repeated cards, screenshots, or steps; delegate delays to child reveals when the children already animate themselves.
Use `CaseLabelPill` to identify layers or modes inside a case without inventing a new visual language.
Use `CaseFrictionItem` for problem-to-decision storytelling when the narrative needs explicit design reasoning.
Initialize scroll effects through `initCaseMotion` so reveals and parallax share one lifecycle and one reduced-motion policy.
Keep shared structural CSS in `src/components/case-study/case-study.css` and slug-specific composition in a dedicated page stylesheet.
Avoid editing copy inside components; pass translated strings from the page module so ES/EN stays explicit and reviewable.
Before adapting PlayzonBet, EVA, or Alaz, move only the reusable patterns that genuinely repeat; do not force all case studies into the exact same composition.
