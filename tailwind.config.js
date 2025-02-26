/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "ns":["Nunito Sans", "serif"]
      },
      colors:{
        // blue-500
        "primary": "#3b82f6", 
        // blue-600
        "secondary": "#2563eb",
        // neutral-800
        "font-primary": "#ffffff",
        // white
        "third" : "#00030B"
      },
      backgroundImage:{
        "details":"url('/src/assets/image/bg-details.jpg')"
      }
    },
  },
  plugins: [],
}