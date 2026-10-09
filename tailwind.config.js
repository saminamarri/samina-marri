/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          darkBg: '#09090D',
          darkSurface: '#121324',
          darkElevated: '#1A1C38',
          darkBorder: 'rgba(139, 92, 246, 0.18)',

          lightBg: '#FAFAFC',
          lightSurface: '#FFFFFF',
          lightElevated: '#F1F5F9',
          lightBorder: 'rgba(99, 102, 241, 0.15)',

          purple: {
            DEFAULT: '#8B5CF6',
            dark: '#6D28D9',
            light: '#A78BFA',
            glow: 'rgba(139, 92, 246, 0.4)',
          },
          blue: {
            DEFAULT: '#38BDF8',
            dark: '#2563EB',
            light: '#60A5FA',
            glow: 'rgba(56, 189, 248, 0.4)',
          }
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
        'blue-glow': '0 0 25px -5px rgba(56, 189, 248, 0.3)',
        'dual-glow': '0 0 35px -5px rgba(139, 92, 246, 0.25), 0 0 20px -5px rgba(56, 189, 248, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
