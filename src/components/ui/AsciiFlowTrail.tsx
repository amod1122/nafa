"use client";

import React, { useEffect, useRef, CSSProperties } from "react";

export interface AsciiFlowTrailProps {
  glyphSet?: 0 | 1 | 2 | 3 | 4 | 5;
  scale?: number;
  gamma?: number;
  mix?: number;
  invertOrder?: boolean;
  monochrome?: boolean;
  blendMode?: "Normal" | "Add" | "Screen" | "Multiply" | "Difference";
  radius?: number;
  strength?: number;
  turbulence?: number;
  tint?: string;
  colorMix?: number;
  tailLength?: number;
  drawBlendMode?: "Normal" | "Add" | "Screen" | "Multiply" | "Difference";
  trackMouse?: number;
  momentum?: number;
  className?: string;
  style?: CSSProperties;
  // Framer-compatible nested objects
  glyphDither?: {
    glyphSet?: number;
    scale?: number;
    gamma?: number;
    mix?: number;
    invertOrder?: boolean;
    monochrome?: boolean;
    blendMode?: string;
  };
  mouseDraw?: {
    radius?: number;
    strength?: number;
    turbulence?: number;
    tint?: string;
    colorMix?: number;
    tail?: number;
    drawBlendMode?: string;
  };
  interactivity?: {
    trackMouse?: number;
    momentum?: number;
  };
}

export default function AsciiFlowTrail(props: AsciiFlowTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const mousePos = useRef({ x: 200, y: 200 });
  const smoothPos = useRef({ x: 200, y: 200 });
  const trail = useRef<Array<{ x: number; y: number; life: number }>>([]);
  const time = useRef<number>(0);

  // Extract props with nested fallback support
  const glyphDither = props.glyphDither || {};
  const mouseDraw = props.mouseDraw || {};
  const interactivity = props.interactivity || {};

  const glyphSet = props.glyphSet ?? glyphDither.glyphSet ?? 3;
  const scale = props.scale ?? glyphDither.scale ?? 24;
  const gamma = props.gamma ?? glyphDither.gamma ?? 0;
  const mix = props.mix ?? glyphDither.mix ?? 100;
  const invertOrder = props.invertOrder ?? glyphDither.invertOrder ?? true;
  const monochrome = props.monochrome ?? glyphDither.monochrome ?? true;
  const blendMode = props.blendMode ?? glyphDither.blendMode ?? "Normal";

  const radius = props.radius ?? mouseDraw.radius ?? 24;
  const strength = props.strength ?? mouseDraw.strength ?? 82;
  const turbulence = props.turbulence ?? mouseDraw.turbulence ?? 100;
  const tint = props.tint ?? mouseDraw.tint ?? "#FFFFFF";
  const colorMix = props.colorMix ?? mouseDraw.colorMix ?? 100;
  const tailLength = props.tailLength ?? mouseDraw.tail ?? 100;
  const drawBlendMode = props.drawBlendMode ?? mouseDraw.drawBlendMode ?? "Screen";

  const trackMouse = props.trackMouse ?? interactivity.trackMouse ?? 100;
  const momentum = props.momentum ?? interactivity.momentum ?? 42;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    const handleMouse = (e: MouseEvent | PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener("pointermove", handleMouse, { passive: true });

    // ASCII characters array
    let baseChars = "@%#*+=-:. ";
    switch (glyphSet) {
      case 0:
        baseChars = "●•·. ";
        break;
      case 1:
        baseChars = "■□▪▫ ";
        break;
      case 2:
        baseChars = "█▓▒░ ";
        break;
      case 3:
        baseChars = "▣▤▥▦▧▨▩ ";
        break;
      case 4:
        baseChars = "◆◇◈○◉◊◌ ";
        break;
      default:
        baseChars = "@%#*+=-:. ";
    }
    const chars = invertOrder
      ? baseChars.split("").reverse().join("")
      : baseChars;

    // Parse tint color
    let tintR = 255;
    let tintG = 255;
    let tintB = 255;
    if (typeof tint === "string") {
      if (tint.startsWith("#")) {
        tintR = parseInt(tint.slice(1, 3), 16) || 255;
        tintG = parseInt(tint.slice(3, 5), 16) || 255;
        tintB = parseInt(tint.slice(5, 7), 16) || 255;
      } else if (tint.startsWith("rgb")) {
        const matches = tint.match(/\d+/g);
        if (matches) {
          tintR = parseInt(matches[0]);
          tintG = parseInt(matches[1]);
          tintB = parseInt(matches[2]);
        }
      }
    }

    const animate = () => {
      time.current += 0.016;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      let targetX = mousePos.current.x;
      let targetY = mousePos.current.y;
      if (trackMouse < 100) {
        const autoX = width / 2 + Math.sin(time.current) * 150;
        const autoY = height / 2 + Math.cos(time.current * 0.7) * 150;
        const trackFactor = trackMouse / 100;
        targetX = mousePos.current.x * trackFactor + autoX * (1 - trackFactor);
        targetY = mousePos.current.y * trackFactor + autoY * (1 - trackFactor);
      }

      const momentumFactor = 1 - (momentum / 100) * 0.95;
      smoothPos.current.x += (targetX - smoothPos.current.x) * momentumFactor;
      smoothPos.current.y += (targetY - smoothPos.current.y) * momentumFactor;

      trail.current.push({
        x: smoothPos.current.x,
        y: smoothPos.current.y,
        life: 1,
      });

      const maxLength = Math.floor((tailLength / 100) * 50) + 5;
      while (trail.current.length > maxLength) {
        trail.current.shift();
      }
      const decay = 0.02 * (1 - tailLength / 100) + 0.01;
      trail.current.forEach((p) => (p.life -= decay));
      trail.current = trail.current.filter((p) => p.life > 0);

      const charSize = Math.max(8, Math.floor((16 * scale) / 100));
      ctx.font = `${charSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      if (blendMode === "Add") {
        ctx.globalCompositeOperation = "lighter";
      } else if (blendMode === "Screen") {
        ctx.globalCompositeOperation = "screen";
      } else if (blendMode === "Multiply") {
        ctx.globalCompositeOperation = "multiply";
      } else if (blendMode === "Difference") {
        ctx.globalCompositeOperation = "difference";
      } else {
        ctx.globalCompositeOperation = "source-over";
      }

      const cols = Math.ceil(width / charSize);
      const rows = Math.ceil(height / charSize);
      const maxDist = (radius / 100) * 150;

      // High-performance active bounding box optimization
      if (trail.current.length > 0) {
        let minX = width;
        let maxX = 0;
        let minY = height;
        let maxY = 0;

        for (const p of trail.current) {
          if (p.x - maxDist < minX) minX = p.x - maxDist;
          if (p.x + maxDist > maxX) maxX = p.x + maxDist;
          if (p.y - maxDist < minY) minY = p.y - maxDist;
          if (p.y + maxDist > maxY) maxY = p.y + maxDist;
        }

        const startCol = Math.max(0, Math.floor(minX / charSize));
        const endCol = Math.min(cols, Math.ceil(maxX / charSize));
        const startRow = Math.max(0, Math.floor(minY / charSize));
        const endRow = Math.min(rows, Math.ceil(maxY / charSize));

        const bayer = [
          [0, 8, 2, 10],
          [12, 4, 14, 6],
          [3, 11, 1, 9],
          [15, 7, 13, 5],
        ];

        for (let row = startRow; row < endRow; row++) {
          for (let col = startCol; col < endCol; col++) {
            const x = col * charSize + charSize / 2;
            const y = row * charSize + charSize / 2;

            let intensity = 0;
            for (let i = 0; i < trail.current.length; i++) {
              const point = trail.current[i];
              const dist = Math.hypot(x - point.x, y - point.y);
              if (dist < maxDist) {
                const value =
                  (1 - dist / maxDist) * point.life * (strength / 100);

                if (drawBlendMode === "Add") {
                  intensity += value;
                } else if (drawBlendMode === "Multiply") {
                  intensity = intensity * value;
                } else if (drawBlendMode === "Difference") {
                  intensity = Math.abs(intensity - value);
                } else if (drawBlendMode === "Screen") {
                  intensity = 1 - (1 - intensity) * (1 - value);
                } else {
                  intensity = Math.max(intensity, value);
                }
              }
            }

            if (turbulence > 0 && intensity > 0) {
              const turb =
                Math.sin(x * 0.01 + time.current) *
                Math.cos(y * 0.01 + time.current * 0.7) *
                (turbulence / 1000);
              intensity += turb;
            }

            if (gamma !== 0 && intensity > 0) {
              intensity = Math.pow(intensity, 1 - gamma);
            }

            if (glyphSet > 0 && intensity > 0) {
              const ditherAmount = 0.2;
              if (glyphSet === 1) {
                const phase =
                  (Math.sin(col * 0.5) + Math.cos(row * 0.5)) * ditherAmount;
                intensity += phase;
              } else if (glyphSet === 2) {
                const phase =
                  ((col % 2) + (row % 2)) * ditherAmount - ditherAmount;
                intensity += phase;
              } else if (glyphSet === 3) {
                const threshold = bayer[row % 4][col % 4] / 16;
                intensity = intensity > threshold ? 1 : intensity * 0.5;
              } else if (glyphSet === 4 || glyphSet === 5) {
                const noise = Math.random() * ditherAmount - ditherAmount / 2;
                intensity += noise;
              }
            }

            intensity = Math.max(0, Math.min(1, intensity));

            if (intensity > 0.01) {
              const charIndex = Math.min(
                chars.length - 1,
                Math.floor(intensity * chars.length)
              );
              const char = chars[charIndex];
              const alpha = intensity * (mix / 100);

              if (monochrome) {
                ctx.fillStyle = `rgba(${tintR}, ${tintG}, ${tintB}, ${alpha})`;
              } else {
                const mixFactor = colorMix / 100;
                const brightness = intensity;
                const r = Math.round(
                  255 * brightness * (1 - mixFactor) +
                    tintR * mixFactor * brightness
                );
                const g = Math.round(
                  255 * brightness * (1 - mixFactor) +
                    tintG * mixFactor * brightness
                );
                const b = Math.round(
                  255 * brightness * (1 - mixFactor) +
                    tintB * mixFactor * brightness
                );
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
              }

              ctx.fillText(char, x, y);
            }
          }
        }
      }

      ctx.globalCompositeOperation = "source-over";
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", updateSize);
      window.removeEventListener("pointermove", handleMouse);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [
    glyphSet,
    scale,
    gamma,
    mix,
    invertOrder,
    monochrome,
    blendMode,
    radius,
    strength,
    turbulence,
    tint,
    colorMix,
    tailLength,
    drawBlendMode,
    trackMouse,
    momentum,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={props.className}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        ...props.style,
      }}
      aria-hidden="true"
    />
  );
}
