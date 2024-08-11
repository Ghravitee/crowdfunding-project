/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Moderate-Cyan": "hsl(176, 50%, 47%)",
        "Dark-Cyan": "hsl(176, 72%, 28%)",
      
        "Black": "hsl(0, 0%, 0%)",
        "Dark-Gray": "hsl(0, 0%, 48%)",
      },
      backgroundImage: {
        'hero-background-desktop': "url('/src/images/image-hero-desktop.jpg')",
        'hero-background-mobile': "url('/src/images/image-hero-mobile.jpg')",
      
      }
    },
  },
  plugins: [],
}

