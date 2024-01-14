import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scrollLeft: {
          from: { transform: "translateX(0px)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 60s linear infinite",
        "scroll-right": "scrollLeft 60s linear infinite reverse",
      },
    },
  },
  plugins: [],
};
export default config;
