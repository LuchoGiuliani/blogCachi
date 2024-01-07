/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow:{
        youtube: "0px 35px 120px -15px #211e35"
      }
      ,
      backgroundImage: {
        'bg-hero': "url('/public/bg-hero.jpg')",
        
      }
    }
  },
  plugins: [],
}