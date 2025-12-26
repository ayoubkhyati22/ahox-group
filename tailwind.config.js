/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#2C1F3A',        // Deep purple - main brand color
        'purple-light': '#E8E3F0', // Light backgrounds
        black: '#2C1F3A',          // Deep purple for text
        gold: '#E8D700',           // Bright yellow accent
        orange: '#D10A11',         // Red accent
        teal: '#14B3AA',           // Teal accent
        'gray-light': '#F5F5F7',   // Light backgrounds
      },
      borderRadius: {
        DEFAULT: '0',
        none: '0',
      },
    },
  },
  plugins: [],
};