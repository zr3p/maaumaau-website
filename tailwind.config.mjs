// ✅ Enables Tailwind’s Typography plugin for rich text layout
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ This enables class-based dark mode
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"], // ✅ Tells Tailwind to scan Astro + JSX files for classes
  theme: {
    extend: {}, // ✅ Placeholder to add future custom styles if needed
    colors: {
      'footer-bg': { DEFAULT: '#000', dark: '#000' },
      'footer-text': { DEFAULT: '#FFF', dark: '#FFF' }
    }
  },
  plugins: [typography], // ✅ Enables better spacing/styling for content like privacy, terms, blog posts
};