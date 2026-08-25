import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        ink: "#0d0d0d",
        burgundy: {
          DEFAULT: "#6d001a",
          light: "#8f0021",
          deep: "#4a0012",
        },
        offwhite: "#efeeea",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        panelIn: {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseBar: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        panelIn: "panelIn 1s cubic-bezier(0.65,0,0.35,1) forwards",
        fadeUp: "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        pulseBar: "pulseBar 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
