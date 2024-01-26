/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#333333',
        primary: '#1890ff',
        secondary: '#888990',
        'purple-primary': '#2E2466',
      },
    },
  },
  plugins: [],
};
