/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin';
import formsPlugin from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
        colors: {
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
        },
      fontSize: {
        '2xl': '1.15rem', // Customize the text-2xl class to be 1.2rem
      },
      borderRadius: {
        'none': '4px', // Custom utility for no border radius
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
          lg: '2rem',
        },
        
        screens: {
          sm: '100%',
          md: '85rem',
          lg: '85rem',
          xl: '85rem',
        },
      },
    },
  },
  plugins: [
    formsPlugin,
    prelinePlugin,
  ],
}