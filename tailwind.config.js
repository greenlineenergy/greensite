/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,tsx}", "./components/**/*.{js,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          600: '#059669',
          700: '#047857'
        },
        muted: {
          foreground: '#6b7280'
        },
        primary: '#059669'
      }
    }
  },
  plugins: []
};
