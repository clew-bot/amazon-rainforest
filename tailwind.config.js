/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      content: {
        "chico": "url('/src/assets/experts/chico.jpg')",
        "jane": "url('/src/assets/experts/jane.jpg')",
        "marina": "url('/src/assets/experts/marina.webp')",
        "mark": "url('/src/assets/experts/mark.png')",
        "raoni": "url('/src/assets/experts/raoni.jpg')",
        "sonia": "url('/src/assets/experts/sonia.jpg')",
        "sydney": "url('/src/assets/experts/sydney.jpg')",
      }
    },
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      topicItems: ['Pacifico', 'cursive'],
    }
  },
  plugins: [],
}