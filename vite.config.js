import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist', // Le répertoire de sortie pour les fichiers de production
    minify: 'terser', // Minification avec Terser
    sourcemap: false, // Désactiver la génération de sourcemap en production (optionnel)
  },
})
