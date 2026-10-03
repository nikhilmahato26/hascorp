/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#043961',
            50: '#F0F5FA',
            100: '#E1ECF4',
            700: '#07487B',
            800: '#053961',
            900: '#032946',
            950: '#021B30',
          },
          blue: {
            DEFAULT: '#1482CF',
            hover: '#0E6DB0',
            light: '#3BA0E6',
            50: '#F0F8FF',
            100: '#E0F0FE',
            200: '#BAE1FD',
            300: '#7EC3FB',
            400: '#3BA0E6',
            500: '#1482CF',
            600: '#0E6DB0',
          },
          ice: '#F4F9FD',
          tint: '#EBF4FC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Montserrat"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(4, 57, 97, 0.06), 0 2px 6px -1px rgba(4, 57, 97, 0.04)',
        'card': '0 10px 30px -5px rgba(4, 57, 97, 0.08), 0 4px 10px -2px rgba(4, 57, 97, 0.04)',
        'elevated': '0 20px 40px -10px rgba(4, 57, 97, 0.12), 0 8px 16px -4px rgba(4, 57, 97, 0.06)',
        'blue-glow': '0 10px 25px -5px rgba(20, 130, 207, 0.35)',
      }
    },
  },
  plugins: [],
}
