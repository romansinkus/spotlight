/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      colors: {
        'background': '#E2E2E2',
        'welcome-colour': '#FBFF86',
        'progress-bar': '#B99FCE',
        'select-colour': '#B0D4B0'
      },
    },
  },
  plugins: [],
}

