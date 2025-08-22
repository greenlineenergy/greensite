/** @type {import('tailwindcss').Config} */
module.exports = {
  // ✅ only scan what you actually use
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // if you use Next.js app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
