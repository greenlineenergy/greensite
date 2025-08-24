/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          neon: "#39FF14",   // glowing lime green
          soft: "#72FF6A",   // lighter hover lime
        },
        dark: {
          base: "#000000",   // pure black
          soft: "#0B0B0B",   // soft black for cards
          border: "#151515", // divider lines
        },
        text: {
          base: "#E6E6E6",   // main light grey
          soft: "#D6FFD6",   // minty text accent
          muted: "#9A9A9A",  // muted grey
        },
      },
      boxShadow: {
        neon: "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14",
      },
      textShadow: {
        neon: "0 0 6px #39FF14, 0 0 12px #39FF14, 0 0 24px #39FF14",
      },
    },
  },
  plugins: [
    // custom plugin for text-shadow (since Tailwind doesn’t include it by default)
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-glow": {
          textShadow: "0 0 6px #39FF14, 0 0 12px #39FF14, 0 0 24px #39FF14",
        },
        ".text-glow-soft": {
          textShadow: "0 0 4px #72FF6A, 0 0 8px #72FF6A",
        },
        ".shadow-glow": {
          boxShadow: "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
