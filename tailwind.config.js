/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        archivo: ["Archivo", "sans-serif"],
        geo: ["Geologica", "sans-serif"]
      },
    },
  },
  plugins: [],
}

