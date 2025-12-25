/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#8B7BA8',        // Change this for main purple
        'purple-light': '#E8E3F0', // Change this for light backgrounds
        black: '#2C2C2C',          // Change this for text color
        gold: '#FFC107',           // Change this for gold accent
        orange: '#FF9966',         // Change this for orange accent
        'gray-light': '#F5F5F7',   // Change this for backgrounds
      },
      borderRadius: {
        DEFAULT: '0',
        none: '0',
      },
    },
  },
  plugins: [],
};
