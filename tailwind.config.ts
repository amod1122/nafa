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
        bg: "#000000",
        text: "#ffffff",
        muted: "#9a9a9a",
        stat: "#d8d8d8",
        border: "rgba(255, 255, 255, 0.16)",
        "border-soft": "rgba(255, 255, 255, 0.12)",
        nafa: {
          canvas: "#000000",
          "canvas-muted": "#080808",
          surface: "#0c0c0c",
          "surface-muted": "#141414",
          charcoal: "#ffffff",
          "charcoal-muted": "#d8d8d8",
          muted: "#9a9a9a",
          gold: "#ffffff",
          "gold-hover": "#f0f0f0",
          "gold-light": "#141414",
          "gold-border": "rgba(255, 255, 255, 0.25)",
          border: "rgba(255, 255, 255, 0.16)",
          "border-subtle": "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        serif: ['"Instrument Serif"', '"Times New Roman"', "Times", "serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        tighter: "-0.03em",
        tight: "-0.015em",
      },
      boxShadow: {
        "apple-card": "0 20px 50px -25px rgba(0, 0, 0, 0.9)",
        "apple-float": "0 28px 70px -30px rgba(0, 0, 0, 0.95)",
        "apple-sheet": "0 -20px 60px rgba(0, 0, 0, 0.75)",
        "apple-gold": "0 0 26px rgba(186, 208, 255, 0.35), 0 8px 18px rgba(255, 255, 255, 0.12)",
        "liquid-glow": "0 0 18px rgba(200, 210, 230, 0.18)",
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "4px",
        md: "6px",
        lg: "7px",
        xl: "8px",
        "2xl": "10px",
        "3xl": "12px",
      },
    },
  },
  plugins: [],
};

export default config;
