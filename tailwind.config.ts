import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          sun: "#F5A623",
          ocean: "#1B7B8A",
          palm: "#2D6A4F",
          coral: "#E85D5D",
          sand: "#FFF8F0",
          night: "#1A1A2E",
        },
      },
      fontFamily: {
        display: ["Fredoka", "Comic Sans MS", "cursive"],
        body: ["Nunito", "system-ui", "sans-serif"],
      },
      borderRadius: {
        bubble: "1.5rem",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(245,166,35,0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(245,166,35,0.8)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
