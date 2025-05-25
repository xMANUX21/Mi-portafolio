/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cyber: ["Orbitron", "sans-serif"],
      },
      colors: {
        'cyber-bg': '#0d0d0d',
        'cyber-pink': '#ff00ff',
        'cyber-blue': '#00ffff',
        'cyber-green': '#39ff14',
        'cyber-yellow': '#ffff00',
        'cyber-glow': '#e600ff',
       
        'cyber-yellow': '#FFD700',
       
      },
      boxShadow: {
        neon: "0 0 10px #ff00ff, 0 0 20px #ff00ff",
      },
      animation: {
  slide: 'slide 30s linear infinite',
},
keyframes: {
  slide: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-100%)' },
  },
},

    },
  },
 plugins: [
]
}
