/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#2D1B3D',
        black: '#000000',
        gold: '#FFD700',
        orange: '#FF6B35',
        white: '#FFFFFF',
      },
      borderRadius: {
        DEFAULT: '0',
        none: '0',
      },
    },
  },
  plugins: [],
};
