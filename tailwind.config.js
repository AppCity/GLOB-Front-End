// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.html',
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],  
  mode: 'jit',
  darkMode: 'class',
  theme: {
    boxShadow: {
      sm: [ '0 1px 2px 0 rgba(0, 0, 0, 0.05)','0 1px 2px 0 rgba(255, 255, 255, 0.05)'],
      DEFAULT: ['0 1px 3px 0 rgba(0, 0, 0, 0.1)', '0 1px 3px 0 rgba(255, 255, 255, 0.1)'],
      md: ['0 4px 6px -1px rgba(0, 0, 0, 0.1)', '0 4px 6px -1px rgba(255, 255, 255, 0.1)'],
      lg: ['0 10px 15px -3px rgba(0, 0, 0, 0.1)', '0 10px 15px -3px rgba(255, 255, 255, 0.1)'],
      xl: ['0 20px 25px -5px rgba(0, 0, 0, 0.1)', '0 20px 25px -5px rgba(255, 255, 255, 0.1)'],
      '2xl': ['0 25px 50px -12px rgba(0, 0, 0, 0.25)', '0 25px 50px -12px rgba(255, 255, 255, 0.25)'],
     '3xl': ['0 35px 60px -15px rgba(0, 0, 0, 0.3)', '0 35px 60px -15px rgba(255, 255, 255, 0.3)'],
      inner: ['inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)', 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)'],
      none: 'none',
    },
    
     extend: {
      boxShadow: {
        '4xl':['0 8px 32px 0 rgba(0, 0, 0, 0.37)', '0 8px 32px 0 rgba(255, 255, 255, 0.37 )'],
        full:'0 0 0 500px #fff'
      },
      screens: {
        smd: {'min':'768px', 'max':'900px'},
        ...defaultTheme.screens,
      },
      spacing: {
          "100":"500px"
       },
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
        grey:{
          light:'##4F4F4F',
          DEFAULT:'##4F4F4F',
          dark:'##4F4F4F'
        }
      },
      fontFamily: {
        poetsenOne: ['PoetsenOne'],
        worksans: ['WorkSans'],
      },
      fontSize: {
        "8.5xl": ['7.5rem', '1'],
        "10xl": ['9rem', '1'],
      },
      backgroundImage: {
        'img-dark': "url('/images/bgDark.svg')",
        'img-light': "url('/images/bgLight.svg')",
        'img-login': "url('/images/bgLogin.svg')",
        'img-dark-mobile': "url('/images/bgDarkMobile.svg')",
        'img-light-mobile': "url('/images/bgLightMobile.svg')",
       },
       backgroundColor: ['responsive', 'group-hover', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
     animation: {
      'spin-slow': 'spin 3s linear infinite',
      wiggle: 'wiggle 1s ease-in-out infinite',
      blink:'blink 1s linear infinite',
      slideUp:'slideUp 0.3s linear',
      bounceLarge:'bounceLarge 1s linear infinite',
     },
     keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-5deg)' },
        '50%': { transform: 'rotate(5deg)' },
      },
      blink:{
        '0%, 100%': { opacity: 0 },
        '25%, 75%': { opacity: 0.5 },
        '50%': { opacity: 1 }
      },
      slideUp:
      {
        '0%': { opacity: 0, transform:'translateY(10%)' },
        '50%': { opacity: 0.5, transform:'translateY(5%)' },
        '100%': { opacity: 1, transform:'translateY(0%)' }
      },
      bounceLarge:{
        '0%, 100%': {
          transform: 'translateY(-25%) scale(1.2)',
          animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
        },
        '50%':{
          transform: 'translateY(0) scale(1.2)',
          animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
        }
      },
     }
    }
  },
  variants: {
    extend: {
      opacity: ["disabled", "first"],
      cursor: ["disabled"],
      backgroundColor: ["checked", "disabled"],
      textColor: ["checked", "first", "active"],
      borderColor: ["checked"],
      dropShadow:['hover', 'dark'],
      backgroundImage:['hover'],
      animation:['hover'],
      transitionDelay: ['hover', 'focus'],
      boxShadow: ['dark'],


    },
  },
  plugins: [],
}


