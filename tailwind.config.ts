import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nafa: {
          canvas: "#FBFBFA",
          "canvas-muted": "#F4F3EE",
          surface: "#FFFFFF",
          charcoal: "#121212",
          "charcoal-muted": "#3A3A36",
          muted: "#73736C",
          gold: "#C59B27",
          "gold-hover": "#B0881F",
          "gold-light": "#FDF8EC",
          "gold-border": "rgba(197, 155, 39, 0.25)",
          border: "rgba(18, 18, 18, 0.08)",
          "border-subtle": "rgba(18, 18, 18, 0.04)",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.025em",
        tight: "-0.015em",
      },
      boxShadow: {
        "apple-card": "0 2px 8px -2px rgba(0,0,0,0.05), 0 8px 24px -4px rgba(0,0,0,0.06)",
        "apple-float": "0 12px 36px -6px rgba(0,0,0,0.12), 0 4px 12px -2px rgba(0,0,0,0.05)",
        "apple-sheet": "0 -8px 32px rgba(0,0,0,0.08)",
        "apple-gold": "0 4px 14px 0 rgba(197, 155, 39, 0.35)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};

export default config;
