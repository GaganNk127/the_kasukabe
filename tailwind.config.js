/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kasu: {
          primary: '#6366F1',
          accent: '#FDE047',
          soft: '#F8FAFC'
        }
      },
      boxShadow: {
        cozy: '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.05)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.12))',
        'hero-gradient-dark': 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(59,130,246,0.15), rgba(236,72,153,0.15))'
      }
    },
  },
  plugins: [],
}
