/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9e6',
          100: '#fff3cc',
          500: '#ffd700',
          600: '#e6c200',
          700: '#ccac00',
        },
        secondary: {
          500: '#1e3a5f',
          600: '#1a2f4d',
          700: '#15243b',
        }
      },
    },
  },
  plugins: [],
}