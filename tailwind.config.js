/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px", 
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      // backgroundImage: {
      //   'parallax':"url('/images/banner/parallax.jpg')",
      //   'shop-banner':"url('images/blog/banner.webp')",
      // },
    },
  },
  plugins: [],
}

