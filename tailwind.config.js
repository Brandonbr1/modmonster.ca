/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.{html,js}"

  ],
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
    screens: {
      'max-2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'max-xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'max-lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'max-md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'max-sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
  ],
}
}
