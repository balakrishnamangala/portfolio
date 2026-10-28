import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        fg: "#f5f5f7",
        muted: "#86868b",
        "muted-2": "#48484a",
        surface: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        "scroll-pulse": "scrollPulse 2s ease infinite",
        "load-bar": "loadBar 2s ease-in-out forwards",
      },
      keyframes: {
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(0.6)" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
        },
        loadBar: {
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
