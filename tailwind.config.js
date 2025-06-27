/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /text-(gray|red|rose|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia)-(400|500)/ },
    'italic', 'font-bold', 'line-through', 'underline', 'list-disc', 'list-decimal'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        neutral: {
          100: 'hsl(0, 0%, 92%)',
          200: 'hsl(243, 1%, 76%)',
          300: 'hsl(233, 1%, 64%)',
          400: 'hsl(233, 1%, 48%)',
          500: 'hsl(233, 1%, 38%)',
          550: 'hsl(233, 2%, 25%)',
          600: 'hsl(233, 3%, 22%)',
          700: 'hsl(233, 4%, 20%)',
          750: 'hsl(234, 5%, 17%)',
          800: 'hsl(233, 6%, 15%)',
          850: 'hsl(232, 7%, 14%)',
          900: 'hsl(232, 7%, 12%)',
          950: 'hsl(231, 8%, 9%)',
        },
        primary: {
          50: 'hsl(244, 50%, 94%)',
          100: 'hsl(234, 41%, 80%)',
          200: 'hsl(230, 35%, 73%)',
          250: 'hsl(228, 41%, 70%)',
          300: 'hsl(226, 39%, 65%)',
          350: 'hsl(227, 39%, 61%)',
          400: 'hsl(228, 39%, 58%)',
          500: 'hsl(222, 40%, 41%)',
          600: 'hsl(222, 44%, 36%)',
          700: 'hsl(222, 48%, 29%)',
          800: 'hsl(222, 52%, 22%)',
          900: 'hsl(222, 56%, 17%)',
        }
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* For IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          /* For Firefox */
          'scrollbar-width': 'none',
          /* For Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}