/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0088F0",
        headerText: "#141414",
        blackGray: "#1F1F1F",
        LightGray: "#595959",
        paragraphText: "#454545",
        black: "#000000",
        Yellow: "#FFFBE6",
        Green: "#D6FDE7",
        GreenText: "#00AA4A",
        GreenLight: "#8AF8BA",
        drkYellow: "#FBEB8A",
        drkblack: '#0B0B0B',
        white:'#FFFFFF',
        gray: '#D2D2D2',

      },
      fontFamily: {
        onest:["Onest", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        xs: "480px", // Add custom breakpoint
        sm: "768px", // Add custom breakpoint
        md: "1200px", // Add custom breakpoint
        lg: "1500px", // Add custom breakpoint
        // You can add other custom breakpoints here if needed
      },
    },
  },
  plugins: [],
};
