/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tech: ['"Chakra Petch"', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#dc2626', // red-600
          dark: '#030712', // gray-950
          card: '#111827', // gray-900
          blue: '#004aad', // Tech blue
        }
      },
      animation: {
        blob: "blob 7s infinite",
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}