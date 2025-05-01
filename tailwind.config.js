/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#20B2AA', // Turquoise
        'primary-dark': '#1A8F89',
        'primary-light': '#7FD9D3',
        secondary: '#FF7F50', // Coral/Orange
        'secondary-dark': '#E5724A',
        'secondary-light': '#FFAB8C',
        accent: '#FFD700', // Yellow/Gold
        'accent-dark': '#E5C200',
        'accent-light': '#FFE666',
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        black: '#111111',
        'gray-dark': '#333333',
        'gray-medium': '#666666',
        'gray-light': '#E5E5E5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 8px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};