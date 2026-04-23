/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#e6f1f4',
          100: '#c0d9e2',
          200: '#97bfcf',
          300: '#6da5bc',
          400: '#4d91ad',
          500: '#2C7DA0',
          600: '#236f90',
          700: '#195e7c',
          800: '#104e68',
          900: '#0F4C5C',
          950: '#082e38',
        },
        secondary: {
          500: '#2C7DA0',
        },
        accent: {
          500: '#2A9D8F',
          600: '#228a7d',
        },
        neutral: {
          graphite: '#1F2937',
          light: '#F3F4F6',
        },
      },
      fontFamily: {
        heading: ['Sora', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '80rem',
      },
    },
  },
  plugins: [],
}
