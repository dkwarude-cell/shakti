/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f0f1e',      // Dark navy/black
        secondary: '#d4af37',    // Gold accent
        tertiary: '#1a1a2e',     // Dark blue-gray
        success: '#1abb9c',      // Teal/green
        danger: '#e74c3c',       // Red
        warning: '#f39c12',      // Orange
        info: '#3498db',         // Light blue
        'donor': '#1abb9c',      // Teal for donor
        'supplier': '#3498db',   // Blue for supplier
        'institute': '#d4af37',  // Gold for institute
      }
    },
  },
  plugins: [],
}
