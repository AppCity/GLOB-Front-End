module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
    './src/**/*.js',
  ],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundImage: theme => ({
      'background': "url('/images/background.svg')",
     }),
     extend: {
     animation: {
      'spin-slow': 'spin 3s linear infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',
      blink:'blink 1s linear infinite'

     },
     keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      blink:{
        '0%, 100%': { opacity: 0 },
        '25%, 75%': { opacity: 0.5 },
        '50%': { opacity: 1 }
      }
     }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
