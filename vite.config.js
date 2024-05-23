import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'], // Example font family
      serif: ['Georgia', 'serif'], // Another example font family
      display: ['Poppins', 'sans-serif'], // Example of adding a display font family
      mono: ['Inconsolata', 'monospace'], // Example of adding a monospaced font family
      heading: ['Montserrat', 'sans-serif'], // Example of adding a heading font family
      body: ['Open Sans', 'sans-serif'], // Example of adding a body text font family
      script: ['Pacifico', 'cursive'], // Example of adding a script font family
      code: ['monospace'], 
    },
  },
};
