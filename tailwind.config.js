/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#ff7d1a',
      'pale-orange': '#ffede0',
      'dark-blue': '#1d2025',
      'grayish-blue': '#68707d',
      'grayish-light-blue': '#f7f8fd',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)'
    },
    extend: {
      fontFamily: {
        'primary': ['Kumbh Sans', 'sans-serif']
      },
      backgroundImage: {
        'avatar-default': "url('/src/assets/images/image-avatar.png')",
      }
    },
  },
  plugins: [],
}

