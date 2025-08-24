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
          neon: "#39FF14",
          soft: "#72FF6A",
        },
        dark: {
          base: "#000000",
          soft: "#0B0B0B",
          border: "#151515",
        },
        text: {
          base: "#E6E6E6",
          soft: "#D6FFD6",
          muted: "#9A9A9A",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const utilities = {
        ".text-glow": {
          textShadow: "0 0 6px #39FF14, 0 0 12px #39FF14, 0 0 24px #39FF14",
        },
        ".shadow-glow": {
          boxShadow: "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14",
        },
        ".scrollbar-hide": {
          /* for webkit */
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".scrollbar-hide::-webkit-scrollbar": {
          display: "none",
        },
      };
      addUtilities(utilities, ["responsive", "hover"]);
    },
  ],
};
