import { defineConfig } from 'vite'

// Cette fonction "defineConfig" permet d'obtenir une configuration
// de base pour Vite.
export default defineConfig({
  // Par défaut, le chemin de base est '/', ce qui est parfait pour la plupart des projets.
  // Vous pouvez le modifier si votre site est déployé dans un sous-répertoire.
  base: '/',
  
  // Le "build" est la partie qui va compiler votre code pour le déploiement.
  // "outDir" spécifie le dossier de sortie. Par défaut, c'est 'dist'.
  build: {
    outDir: 'dist',
  },
  
  // "server" configure le serveur de développement local.
  // "open: true" ouvre automatiquement votre navigateur sur le projet.
  server: {
    open: true,
  },
  
  // "plugins" est un tableau où vous pouvez ajouter des plugins Vite.
  // Pour un projet simple, il n'y en a pas besoin.
  plugins: []
})
