---
name: full-end-website-builder
description: >-
  Blueprint and comprehensive playbook for building high-converting, high-performance,
  liquid-glass dark-theme B2B agency and SaaS websites with Next.js App Router, React 19,
  Tailwind CSS, WebGL2 shaders, headless Formspree lead pipelines, and Calendly scheduling.
  Use whenever creating a complete modern website from scratch or scaling an existing one.
---

# Full-End Website Builder Playbook

This skill encapsulates the battle-tested architecture, visual language, component library, and conversion systems distilled from building **Nafa Technologies**.

---

## 1. Architectural Foundation & Tech Stack

- **Framework**: Next.js (App Router, static + dynamic server/client components), React 19, TypeScript.
- **Styling**: Tailwind CSS with custom backdrop filters, hairline borders, and CSS glass tokens.
- **Micro-Interactions & Shaders**:
  - WebGL2 fragment & vertex shaders (`SpecularButton` dynamic rim lighting).
  - Ambient interactive canvas (`Threads` WebGL background).
  - Framer Motion for entrance and layout animations.
  - Lucide React for consistent vector iconography.
- **Integrations**:
  - Headless Formspree API (`application/json` POST requests with client error and loading states).
  - Direct Calendly scheduling with popup-safe fallback logic.

---

## 2. Visual Design System ("Liquid Glass & Midnight Dark")

### Color Palette & Elevation
- **Background**: Deep void black (`#000000`, `bg-black/90`, `bg-black/60`).
- **Cards & Surfaces (`apple-glass`)**:
  - `background: rgba(255, 255, 255, 0.04);`
  - `backdrop-filter: blur(16px);`
  - `border: 1px solid rgba(255, 255, 255, 0.12);`
  - Top highlight edge: `h-px bg-gradient-to-r from-transparent via-white/30 to-transparent`.
- **Text Hierarchy**:
  - Primary Headlines: Pure crisp white (`#FFFFFF`, `font-sans`, `font-medium`, `tracking-[-0.035em]`).
  - Editorial Accents: High-contrast serif (`font-editorial` / `Instrument Serif` italic/display) for key anchor phrases like *"AI call agents"* or *"Workflow"*.
  - Secondary Copy & Subheads: Cool slate gray (`#A6B4C7` or `#9A9A9A`, `leading-relaxed`).
  - Badges & Metric Pills: Subtle pill borders with monospace subtext (`badge-pill`).

### Background Ambient Balance Rule
- Never let decorative backgrounds (threads, noise, particles, glow blobs) compete with copywriting.
- Keep background canvas opacity around `0.35`–`0.55` and brightness around `0.8`–`1.0`.
- Apply a radial vignette (`bg-radial-gradient`) in the hero area to preserve razor-sharp readability.

---

## 3. Core Component Library

### 1. `SpecularButton` (WebGL2 Rim-Lit CTA)
- Shipped via React Bits WebGL2 shader.
- Responds to mouse proximity (`proximity={260}`), features idle circulating edge animation (`autoAnimate={true}`, `speed={0.4}`), and customizable `tint`, `glow`, and `shineSize`.
- Primary CTA of the site for maximum visual weight.

### 2. `ModalContext` (Centralized Modal State)
- Avoid scattered state. Use a global React context:
  ```tsx
  interface ModalContextType {
    isScheduleOpen: boolean;
    openSchedule: () => void;
    closeSchedule: () => void;
    isQuoteModalOpen: boolean;
    openQuoteModal: (service?: string) => void;
    closeQuoteModal: () => void;
  }
  ```
- Calendly opener includes popup blocker fallback:
  ```ts
  const openSchedule = () => {
    if (typeof window !== "undefined") {
      const win = window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
      if (!win) window.location.href = CALENDLY_URL;
    }
  };
  ```

### 3. Dual-Channel CTA Structure
Always pair actions with a strict priority order:
- **Primary CTA**: **"Get a Quote"** (opens instant modal quote form or scrolls to `#quote`).
- **Secondary CTA**: **"Book a Call"** (launches Calendly discovery session).

### 4. `MobileStickyBar`
- Fixed bottom mobile bar for viewport widths `< 640px`.
- Appears smoothly after scrolling past hero (`scrollY > 150`).
- Displays thumb-accessible **"Get a Quote"** (solid primary) and **"Book a Call"** (ghost secondary).

---

## 4. Lead Capture & Formspree Pipeline

### Clean JSON Submission Workflow
```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus("idle");

  try {
    const res = await fetch("https://formspree.io/f/<FORM_ID>", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData(initialFormState);
      router.push("/thank-you");
    } else {
      const data = await res.json().catch(() => ({}));
      setStatus("error");
      setErrorMessage(data?.errors?.[0]?.message || "Submission error.");
    }
  } catch (err) {
    setStatus("error");
  } finally {
    setIsSubmitting(false);
  }
};
```

### Dedicated "Thank You" Screen Design Rules
- Avoid overwhelming users with cluttered post-submission text or complex countdown cards.
- Center a clean glass card with:
  1. Top circular checkmark badge.
  2. Elegant display headline: *"Thank You !"*.
  3. Clear confirmation: *"We got your request. We'll get back to you soon."*.
  4. Timeframe assurance (e.g., *"Reviews within 5 minutes during business hours"*).
  5. Primary rounded button: **"Go Back"** (`/`).
  6. Secondary rounded button: **"Book a Call Too"** (Calendly URL).
  7. Verification tag: *"Submission received & routed directly to engineering"*.

---

## 5. Development & Verification Protocols

1. **Strict TypeScript Checks**: Run `npx tsc --noEmit` before commits to ensure zero type errors.
2. **Next.js Cache Cleaning**: If pages or routes are deleted (e.g. removing case studies), delete stale files under `.next/types/` to prevent phantom type errors.
3. **PowerShell Windows Execution**: Avoid chaining commands with `&&` in Windows PowerShell (use `;` or script execution). Avoid multiline inline quotes that can trigger parsing issues; use helper scripts in `scratch/` when modifying large blocks.
