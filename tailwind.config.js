/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que Tailwind escanee todos los archivos en el directorio src
  ],
  theme: {
    screens: {
      'sm':  '480px',
      'md': '768px',
      'lg':'1024px',
      'xl': '1440px',
      
      },
    extend: {

    
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define la tipografía sans-serif global
      },
      colors: {
        'custom-dark': '#0f0715',
        'custom-gray': '#4a4a4a',
    

      },               
      container: {
        center : true,
        padding: {
          DEFAULT: '1rem',     // Padding en pantallas pequeñas
          sm: '1.5rem',        // Padding para pantallas >= 480px
          md: '2rem',          // Padding para pantallas >= 768px
          lg: '3rem',          // Padding para pantallas >= 1024px
          xl: '4rem',          // Padding para pantallas >= 1440px
        }

      },
    },
  },
  plugins: [],
}