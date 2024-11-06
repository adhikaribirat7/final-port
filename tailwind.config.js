/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      touchAction: {
        'pan-y': 'pan-y', // Adds touch-pan-y as a utility
      },
    },
  },
  plugins: [],
}