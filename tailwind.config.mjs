// ✅ Enables Tailwind's Typography plugin for rich text layout
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography],
};