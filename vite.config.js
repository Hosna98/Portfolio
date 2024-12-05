
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Assurez-vous que le base path est correct
  assetsInclude: ['**/*.png', '**/*.svg', '**/*.jpg'], // Inclure tous les types d'images
})