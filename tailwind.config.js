/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s linear forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "50%": {
            opacity: 0.5,
          },
          "100%": { opacity: 1 }
        },    
    },
  },
  plugins: [
  ],
}
}
