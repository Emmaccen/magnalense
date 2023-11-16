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
        primary: "#3490dc",
        secondary: "#ffed4a",
        // add more custom colors as needed
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      // add more theme customization as needed
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
