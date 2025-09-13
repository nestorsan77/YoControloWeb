/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // si usas app folder
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // si usas pages folder
    './components/**/*.{js,ts,jsx,tsx,mdx}', // componentes
  ],

  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gasto: 'var(--color-gasto)',
        ingreso: 'var(--color-ingreso)',
        saldo: 'var(--color-saldo)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
