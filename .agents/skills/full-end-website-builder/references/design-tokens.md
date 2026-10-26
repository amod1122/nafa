# References: Design Tokens & Styling Guide

## Colors
- **Void Obsidian Background**: `#000000` / `bg-black/95`
- **Surface Apple Glass**: `rgba(255, 255, 255, 0.04)` with `backdrop-filter: blur(16px)`
- **Hairline Borders**: `rgba(255, 255, 255, 0.12)` to `0.20`
- **Primary Text**: `#FFFFFF`
- **Subheadline / Muted**: `#A6B4C7` (high readability cool slate) and `#9A9A9A`
- **Brand Accents / Highlights**:
  - Sky Cyan / Electric Glow: `#38BDF8` / `rgb(56, 189, 248)`
  - Clean White Rim Lights: `#FFFFFF`
  - Emerald Success: `#10B981` / `rgba(16, 185, 129, 0.2)`

## Typography Classes
```css
/* Instrument Serif / Editorial Display */
.font-voice-agent, .font-editorial {
  font-family: var(--font-instrument-serif), Georgia, serif;
  font-style: italic;
  font-weight: 400;
}

/* Glass Card */
.apple-glass {
  background: rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

/* Buttons */
.btn-solid {
  background-color: #ffffff;
  color: #000000;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}
.btn-solid:hover {
  background-color: #f1f5f9;
  transform: translateY(-1px);
}

.btn-ghost {
  background-color: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  transition: all 0.2s ease;
}
.btn-ghost:hover {
  background-color: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.25);
}
```
