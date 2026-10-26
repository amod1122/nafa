"use client";

import React, { useRef, useEffect } from "react";

interface SubLetterSpotlightTextProps {
  children?: React.ReactNode;
  radius?: number;
  className?: string;
}

export default function SubLetterSpotlightText({
  radius = 95,
  className = "",
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
        // Hardware accelerated mask container
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* 1. Base Text Layer: Crisp White & Editorial Slate */}
      <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[58px] font-medium leading-[1.08] tracking-[-0.035em] text-white">
        Deploy{" "}
        <span className="font-voice-agent font-normal text-[1.12em] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E2E8F0] to-[#A6B4C7] pr-1">
          AI call agents
        </span>{" "}
        that
        <br />
        answer every lead in seconds.
      </h1>

      {/* 2. Sub-Letter Precision Spotlight Layer:
          Clipped with radial-gradient mask directly at the cursor coordinates.
          If the cursor is over half of a letter, exactly half that letter changes color. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          opacity: "var(--spot-opacity, 0)",
          WebkitMaskImage:
            "radial-gradient(circle var(--spot-radius, 95px) at var(--spot-x, -9999px) var(--spot-y, -9999px), #000 0%, #000 35%, transparent 100%)",
          maskImage:
            "radial-gradient(circle var(--spot-radius, 95px) at var(--spot-x, -9999px) var(--spot-y, -9999px), #000 0%, #000 35%, transparent 100%)",
          transition: "opacity 0.25s ease-out",
        }}
      >
        <div className="font-sans text-[36px] sm:text-[48px] lg:text-[58px] font-medium leading-[1.08] tracking-[-0.035em] text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#60a5fa] to-[#818cf8] drop-shadow-[0_0_24px_rgba(56,189,248,0.5)]">
          Deploy{" "}
          <span className="font-voice-agent font-normal text-[1.12em] tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#a78bfa] to-[#c084fc] pr-1">
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
