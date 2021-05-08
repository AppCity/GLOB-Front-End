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
    
     extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bg: {
          light: '#FDFCFD',
          DEFAULT: '#FDFCFD',
          dark: '#1F252B',
        },
        yellow: {
          light: '#FFE600',
          DEFAULT: '#FFE600',
          dark: '#FFE600',
        },
        orange: {
          light: '#FF7B48',
          DEFAULT: '#FF7B48',
          dark: '#FF7B48',
        },
        fucsia: {
          light: '#FF0F91',
          DEFAULT: '#FF0F91',
          dark: '#FF0F91',
        },
      },
      fontFamily: {
        poetsenOne: ['PoetsenOne'],
        worksans: ['WorkSans'],
      },
      backgroundImage: {
        'bg-image': "url('/images/background.svg')",
       },
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
    extend: {
      opacity: ["disabled", "first"],
      cursor: ["disabled"],
      backgroundColor: ["checked"],
      textColor: ["checked", "first"],
      borderColor: ["checked"],
      dropShadow:['hover']
    },
  },
  plugins: [],
}
