"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface InteractiveHeroHeadlineProps {
  className?: string;
}

export function InteractiveHeroHeadline({ className = "" }: InteractiveHeroHeadlineProps) {
  const [hoveredGlobalIndex, setHoveredGlobalIndex] = useState<number>(-1);

  // Structured segments for the headline
  const segments = [
    { text: "Deploy ", isItalic: false },
    { text: "AI call agents", isItalic: true },
    { text: " that", isItalic: false },
    { text: "\n", isBreak: true },
    { text: "answer every lead in seconds.", isItalic: false },
  ];

  let charCounter = 0;

  const getLetterStyle = (index: number) => {
    const isHovered = hoveredGlobalIndex === index;
    const distance = hoveredGlobalIndex >= 0 ? Math.abs(index - hoveredGlobalIndex) : 999;

    let scale = 1;
    let translateY = 0;
    let rotateX = 0;
    let brightness = 1;

    if (hoveredGlobalIndex >= 0) {
      if (isHovered) {
        scale = 1.35;
        translateY = -12;
        rotateX = -12;
        brightness = 1.35;
      } else if (distance === 1) {
        scale = 1.18;
        translateY = -6;
        rotateX = -6;
        brightness = 1.18;
      } else if (distance === 2) {
        scale = 1.08;
        translateY = -3;
        rotateX = -3;
        brightness = 1.08;
      }
    }

    return {
      display: "inline-block",
      transform: `perspective(1000px) translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`,
      filter: `brightness(${brightness})`,
      transition: "all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      zIndex: isHovered ? 20 : distance <= 2 ? 10 : 1,
      transformOrigin: "center bottom",
    };
  };

  return (
    <motion.h1
      initial={{ filter: "blur(12px)", opacity: 0, y: 15 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className={`font-sans text-[36px] sm:text-[48px] lg:text-[56px] font-medium leading-[1.08] tracking-[-0.03em] text-white ${className}`}
      aria-label="Deploy AI call agents that answer every lead in seconds."
    >
      {segments.map((seg, sIdx) => {
        if (seg.isBreak) {
          return <br key={`br-${sIdx}`} className="hidden sm:inline" />;
        }

        const characters = seg.text.split("");
        const segmentContent = characters.map((char) => {
          const currentIndex = charCounter++;
          const isSpace = char === " ";

          if (isSpace) {
            return (
              <span key={`char-${currentIndex}`} className="inline-block">
                &nbsp;
              </span>
            );
          }

          return (
            <span
              key={`char-${currentIndex}`}
              style={getLetterStyle(currentIndex)}
              onMouseEnter={() => setHoveredGlobalIndex(currentIndex)}
              onMouseLeave={() => setHoveredGlobalIndex(-1)}
              className="cursor-pointer select-none"
            >
              {char}
            </span>
          );
        });

        if (seg.isItalic) {
          return (
            <em
              key={`seg-${sIdx}`}
              className="font-editorial not-italic text-[#A6B4C7] inline-block"
            >
              {segmentContent}
            </em>
          );
        }

        return (
          <span key={`seg-${sIdx}`} className="inline-block">
            {segmentContent}
          </span>
        );
      })}
    </motion.h1>
  );
}
