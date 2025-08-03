import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // On ajoute l'option base pour le déploiement sur GitHub Pages.
  // Cela garantit que les chemins d'accès sont correctement gérés en production.
  base: '/marcher-ensemble/'
})
