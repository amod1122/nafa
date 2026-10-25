# BRIEF — Nafa Technologies Landing Page

Self-authored under explicit creative delegation.

User said: "Use Scroll Craft to create an interactive scroll-based animation website with a beautiful background that suits the theme. Right now the website is too bland because it's just too monochrome. Create no-repetitive-template-fatigue, dimensional layering, and high-tier flow and design. Performance and device integrity: the website should still be mobile-friendly."

---

## 1. Vibe

**Nocturnal command center.** The feeling of a mission-control console at night: deliberate, precise, alive with telemetry, calm but powerful.

References: Blade Runner 2049 control room scenes. Linear.app's dark precision. The sound of a phone ringing in an empty office at 2am.

## 2. Scroll journey

1. Hero — the phone rings (recognition: they know this moment)
2. The cost — what happens when nobody picks up (tension)
3. The three systems — what Nafa deploys (clarity / turn)
4. The live proof — revenue numbers (confidence / peak)
5. The standard — how it's built (trust)
6. Close — one CTA, resolved (resolve)

## 3. Energy curve

Open quiet, build through the cost section, sharp turn at the three systems, peak at live proof, settle into the standard, hold at the close.

## 4. Feeling curve

```
1  Recognition     a phone ringing in darkness, the visitor knows this fear
2  Tension         the cost of silence, named in real dollars, accumulating
3  Clarity         three clean systems appear, the solution crystallizes
4  Confidence      real revenue numbers arrive, large, held, undeniable (PEAK)
5  Trust           the engineering standard, quiet authority, earned not claimed
6  Resolve         everything stops, one action, the decision is clear
```

Peak: "I saw the actual revenue numbers land on screen and just sat there."
Tell-someone: "It's the site where you watch the phone ring and realize how much money silence costs."

## 5. Signature move

None — this is an integration into an existing Next.js site, not a standalone scrollcraft page. Instead, we implement scroll-driven CSS animations using Intersection Observer and CSS custom properties to create the layered dimensional depth, parallax, and section-by-section reveal effects directly in the React components.

## 6. Art direction

**Nocturne world** (World #7 from worlds.md): dark canvas, practical light sources, atmospheric depth. But adapted for a service brand: no wet streets or neon. Instead, subtle radial glows that feel like control panels, cool blue-steel undertones against the black, and warm amber accent for CTAs.

Palette (departing from flat monochrome):
- Canvas: `#08090b` (warm near-black, not pure #000)
- Surface: `#0f1117` (slightly lifted, blue-tinged)  
- Ink: `#f0eee6` (warm white, not clinical)
- Ink-soft: `#8b92a5` (blue-tinted secondary)
- Accent: `#3b82f6` (electric blue — professional AI, not startup purple)
- Accent-warm: `#f59e0b` (amber for revenue/results moments)
- Border: `rgba(255, 255, 255, 0.08)`

## 7. Structure

**Not a standalone scrollcraft HTML page.** This is an enhancement of the existing Next.js multi-page site. We integrate scroll-driven animations, dimensional layering, and atmospheric depth into the existing React component architecture using:

- CSS scroll-driven animations and `@keyframes`
- Intersection Observer for section reveals
- CSS custom properties driven by scroll position
- Parallax layers in the hero via CSS transforms
- Framer Motion `whileInView` for staggered entrances

## 8. Assets

No generated assets. No KIE_AI_API_KEY needed. We use:
- Pure CSS atmospheric effects (gradients, blurs, grain)
- SVG-based geometric patterns for depth
- CSS-animated elements (pulsing rings, flowing lines)
- The existing site's typography (Inter + Instrument Serif)

## Authored silence

None. Every viewport of scroll changes something.
