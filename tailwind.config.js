/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
      backgroundColor: {
        blue: '#6366F1',
      },
      textColor: {
        black: '#111827',
        blue: '#6366F1',
        gray: '#6B7280',
      }
    },
  },
  plugins: [],
}


