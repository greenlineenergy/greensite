/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          200: '#D9F99D', // Light lime for badges (bg-lime-600/30, text-lime-200)
          300: '#BEF264', // Hover text color (hover:text-lime-300)
          400: '#A3E635', // Optional for brighter accents
          500: '#84CC16', // Bullet points, form focus (bg-lime-500)
          600: '#65A30D', // Buttons, badges (bg-lime-600)
          700: '#4D7C0F', // Referral section (bg-lime-700/40)
          950: '#1A2E05', // Darker lime for potential gradient use
        },
        black: {
          DEFAULT: '#000000', // Base black for backgrounds
          30: 'rgba(0, 0, 0, 0.3)', // bg-black/30 (trust, referral sections)
          40: 'rgba(0, 0, 0, 0.4)', // bg-black/40 (header, footer)
        },
        white: {
          10: 'rgba(255, 255, 255, 0.1)', // ring-white/10, border-white/10
          20: 'rgba(255, 255, 255, 0.2)', // ring-white/20
          40: 'rgba(255, 255, 255, 0.4)', // text-white/40 (footer separators)
          70: 'rgba(255, 255, 255, 0.7)', // text-white/70 (small text)
          80: 'rgba(255, 255, 255, 0.8)', // text-white/80 (trust section)
          90: 'rgba(255, 255, 255, 0.9)', // text-white/90 (main text)
        },
        // Custom dark gradient colors from your main container
        'dark-green': {
          start: '#111614', // from-[#111614]
          mid: '#1B2422',   // via-[#1B2422]
          end: '#22332F',   // to-[#22332F]
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ], // Matches font-sans for clean rendering
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Better styling for form inputs
  ],
};
