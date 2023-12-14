/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        cs:'600px'
      },
      width:{
        cs:'660px',
        cm:'45%'
      },
      margin:{
        sx:'30%',
        sl:'55%',
        sc:'47.5%'
      },
      colors:{
        primary:'#E0F4FF',
        secondary:'#87C4FF',
        third:'#39A7FF',
        last:'#FFEED9'
      }
    },
  },
  plugins: [],
}
