/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],

  theme: {
    extend: {
      fontFamily: {
        'body': ['Arial', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #2b1055, #7597de)',
      },
      
      colors: {
        'dark-bg': '#1F1F1F', // Dark gray background for dark mode
        'dark-nav': '#2C2C2C', // Slightly lighter navbar background for dark mode
        'dark-nav-text': '#F5F5F5', // Light text color for dark mode
        'dark-btn-bg': '#333333', // Dark button background for dark mode
        'dark-btn-bg-hover': '#444444', // Dark button background on hover for dark mode
        'dark-btn-text': '#FFFFFF', 
        'dark-nav-text-hover': '#E0E0E0', // Light text color for dark buttons in dark mode
       
        'light-bg': '#F5F5F5', // Light background for light mode
        'light-nav': '#FFFFFF', // Lighter navbar background for light mode
        'light-text': '#333333', // Darker text color for light mode
        'light-btn-bg': '#007BFF', // Bright button background for light mode
        'light-btn-bg-hover': '#0056b3', // Darker button background on hover for light mode
        'light-btn-text': '#FFFFFF', 
        'light-nav-text-hover': '#007BFF',
      },
    },
  },
  variants: {

  },
  plugins: [],
}

