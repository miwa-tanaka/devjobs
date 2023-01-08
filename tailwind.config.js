/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      // https://purgecss.com/safelisting.html#patterns
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [],
  theme: {
    extend: {
      colors: {
        'violet': '#5964E0',
        'light-violet': '#939BF4',
        'dark-blue': '#19202D',
        'midnight': '#121721',
        'light-gray': '#F4F6F8',
        'gray': '#9DAEC2',
        'dark-gray': '#6E8098',
      },
      backgroundImage: {
        'header-pattern': "url('/header/bg-header-pattern.png')"
      }
    },
  },
  plugins: [],
}
