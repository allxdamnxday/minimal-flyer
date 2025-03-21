/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      spacing: {
        '60px': '60px',
        '70px': '70px',
        '80px': '80px',
        '100px': '100px',
      },
      animation: {
        'pulse-slow': 'pulse 6s infinite',
        'zoom-slow': 'subtle-zoom 30s infinite alternate',
        'fade-in': 'fade-in 2s ease-out forwards',
        'fade-in-delay': 'fade-in 2s ease-out 1s forwards',
        'fade-in-delay-long': 'fade-in 3s ease-out 2s forwards',
        'button-appear': 'button-appear 3s ease-out forwards',
      },
      boxShadow: {
        'flyer': '0 5px 25px rgba(0, 0, 0, 0.5)',
        'flyer-glow': '0 5px 30px rgba(255, 255, 255, 0.2)',
        'button-glow': '0 0 20px rgba(255, 255, 255, 0.3)',
      },
      zIndex: {
        '20': '20',  // Making sure z-index is defined
      },
    },
  },
  plugins: [],
}
