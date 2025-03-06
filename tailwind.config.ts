import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
import tailwindtypography from "@tailwindcss/typography";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        textColor: "var(--textColor)",
        footerBg: "var(--footerBg)",
        error: "var(--error)",
      },
    },
  },
  plugins: [tailwindtypography, flowbite.plugin()],
} satisfies Config;
