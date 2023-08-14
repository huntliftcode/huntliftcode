/** @type {import('tailwindcss').Config} */

export default {
  mode: "jit",
  content: [
    './src/**/*.{ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'  
  ],
  theme: {  
    fontFamily: {
      'sans': 'Helvetica, Arial, sans-serif',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

