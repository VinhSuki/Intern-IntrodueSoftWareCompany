/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px', // Regular Mobile (Small - S)
      md: '768px', // Tablet Portrait (Medium - M)
      lg: '1024px', // Laptop/Desktop nhỏ
      xl: '1280px', // Desktop lớn
      '2xl': '1536px' // Desktop siu lớn
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Thêm Roboto
        blinker: ['Blinker', 'sans-serif'], // Thêm Blinker
      },
      colors:{
        'primary': '#497DFF',
        'secondary': '#040E56',
        'text':'#9b9b9b',
        'hover':'#40d6ff',
        'third':'#56FFBD',
        'overlay':'#1C2145'
      },
      fontSize: {
        "2xs": "0.65rem", // ~10.4px
        "3xs": "0.5rem",  // ~8px
        "4xs": "0.4rem",  // ~6.4px
      },
    },
  },
  plugins: [],
}

