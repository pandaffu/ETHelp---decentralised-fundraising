/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      colors: {
        grey: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#999999',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',

          950: '#262626',
        },
        indigo: {
          100: "#d4e0ec",
          200: "#aac2d9",
          300: "#7fa3c5",
          400: "#5585b2",
          500: "#2a669f",
          600: "#22527f",
          700: "#193d5f",
          800: "#112940",
          900: "#081420"
        },
        red: {
            100: "#fad2d7",
            200: "#f5a5af",
            300: "#f17786",
            400: "#ec4a5e",
            500: "#e71d36",
            600: "#b9172b",
            700: "#8b1120",
            800: "#5c0c16",
            900: "#2e060b"
        },
        teal: {
            100: "#d5f3f0",
            200: "#abe7e2",
            300: "#82dcd3",
            400: "#58d0c5",
            500: "#2ec4b6",
            600: "#259d92",
            700: "#1c766d",
            800: "#124e49",
            900: "#092724"
        },
        jade: {
          50: '#effef7',
          100: '#dafeef',
          200: '#b8fadd',
          300: '#81f4c3',
          400: '#43e5a0',
          500: '#1acd81',
          600: '#0fa968',
          700: '#108554',
          800: '#126945',
          900: '#11563a',
          950: '#03301f',
      },
        orange: {
            100: "#ffecd2",
            200: "#ffd9a4",
            300: "#ffc577",
            400: "#ffb249",
            500: "#ff9f1c",
            600: "#cc7f16",
            700: "#995f11",
            800: "#66400b",
            900: "#332006"
        },
        black: '#000',
        white: '#fff'
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('preline/plugin')
  ],
}
