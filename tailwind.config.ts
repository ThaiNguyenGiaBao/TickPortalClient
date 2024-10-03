import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
import daisyui from "daisyui";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },

  plugins: [require("tailwindcss-animate"), flowbite.plugin(), daisyui],
  daisyui: {
    themes: ["light"],
  },
};
export default config;
