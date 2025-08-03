import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // L'option 'base' a été supprimée pour éviter les conflits avec le déploiement sur Vercel.
})
