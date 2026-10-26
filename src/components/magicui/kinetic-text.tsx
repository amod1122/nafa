import React from "react";
import { cn } from "@/lib/utils";

type As = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

type KineticTextProps = React.HTMLAttributes<HTMLElement> & {
  text?: string;
  children?: React.ReactNode;
  as?: As;
};

export function KineticText({
  text,
  children,
  as: Tag = "h1",
  className = "",
  style,
  ...rest
}: KineticTextProps) {
  const mergedStyle = {
    "--hover-padding": "calc(1em / 16)",
    "--text-stroke-width": "calc(1em * 100 / 6000)",
    ...(style as React.CSSProperties | undefined),
  } as React.CSSProperties;

  const content = text || (typeof children === "string" ? children : "");

  return (
    <Tag
      {...rest}
      className={cn("inline-flex flex-wrap items-baseline", className)}
      style={mergedStyle}
    >
      {content ? (
        content.split("").map((letter, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="inline-block [will-change:font-weight,-webkit-text-stroke-width,padding] [-webkit-text-stroke-color:transparent] [-webkit-text-stroke-width:var(--text-stroke-width)] [transition:font-weight_0.4s,_-webkit-text-stroke-color_0.4s,_padding_0.4s] hover:[padding-inline:var(--hover-padding)] hover:font-[800] hover:[-webkit-text-stroke-color:currentColor] hover:[-webkit-text-stroke-width:calc(var(--text-stroke-width)*2)] has-[+span+span:hover]:font-[450] has-[+span:hover]:[padding-inline:var(--hover-padding)] has-[+span:hover]:font-[600] [:hover+&]:[padding-inline:var(--hover-padding)] [:hover+&]:font-[600] [:hover+span+&]:font-[450]"
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))
      ) : (
        children
      )}
      {content && <span className="sr-only">{content}</span>}
    </Tag>
  );
}

export default KineticText;
