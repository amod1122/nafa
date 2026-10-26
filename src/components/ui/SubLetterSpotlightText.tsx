"use client";

import React, { useRef, useEffect } from "react";

interface SubLetterSpotlightTextProps {
  radius?: number;
  className?: string;
  color?: string; // single solid bluish color
}

export default function SubLetterSpotlightText({
  radius = 85,
  className = "",
  color = "#38bdf8",
}: SubLetterSpotlightTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.style.setProperty("--spot-radius", `${radius}px`);
    el.style.setProperty("--spot-opacity", "0");
    el.style.setProperty("--spot-x", "-9999px");
    el.style.setProperty("--spot-y", "-9999px");

    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--spot-x", `${x}px`);
      el.style.setProperty("--spot-y", `${y}px`);
      el.style.setProperty("--spot-opacity", "1");
    };

    const onPointerLeave = () => {
      el.style.setProperty("--spot-opacity", "0");
    };

    el.addEventListener("pointermove", onPointerMove, { passive: true });
    el.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [radius]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block w-full cursor-default ${className}`}
      style={{
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* 1. Base Text Layer: Clean White & Refined Slate */}
      <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[58px] font-medium leading-[1.08] tracking-[-0.035em] text-white">
        Deploy{" "}
        <span className="font-voice-agent font-normal text-[1.12em] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#A6B4C7] pr-1">
          AI call agents
        </span>{" "}
        that
        <br />
        answer every lead in seconds.
      </h1>

      {/* 2. Sub-Letter Precision Reveal Layer:
          - Zero external drop-shadow or fade spilling into the background
          - Single, solid, vibrant bluish color applied directly to the text glyphs
          - Crisp sub-pixel mask that splits letters precisely under the cursor */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          opacity: "var(--spot-opacity, 0)",
          WebkitMaskImage:
            "radial-gradient(circle var(--spot-radius, 85px) at var(--spot-x, -9999px) var(--spot-y, -9999px), #000 0%, #000 calc(100% - 1.5px), transparent 100%)",
          maskImage:
            "radial-gradient(circle var(--spot-radius, 85px) at var(--spot-x, -9999px) var(--spot-y, -9999px), #000 0%, #000 calc(100% - 1.5px), transparent 100%)",
          transition: "opacity 0.2s ease-out",
        }}
      >
        <div
          className="font-sans text-[36px] sm:text-[48px] lg:text-[58px] font-medium leading-[1.08] tracking-[-0.035em]"
          style={{ color }}
        >
          Deploy{" "}
          <span
            className="font-voice-agent font-normal text-[1.12em] tracking-normal pr-1"
            style={{ color }}
          >
            AI call agents
          </span>{" "}
          that
          <br />
          answer every lead in seconds.
        </div>
      </div>
    </div>
  );
}
