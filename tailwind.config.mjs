/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        bright_red: "#F43F5E",
        dark_red: "#A60A0A",
        prim_black: "#1A202C",
        prim_white: "#F5F5FA",
        gray: "#4A5568",
        cardBg: "#EDF2F7",
      },
    },
  },
  plugins: [],
};
