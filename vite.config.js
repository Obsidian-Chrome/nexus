import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Plugin pour copier uniquement les fichiers non-MP3 du dossier public
const copyPublicExcludeMp3 = () => {
  return {
    name: 'copy-public-exclude-mp3',
    writeBundle() {
      const publicDir = 'public'
      const outDir = 'dist'
      
      const copyRecursive = (src, dest) => {
        if (!fs.existsSync(src)) return
        
        const entries = fs.readdirSync(src, { withFileTypes: true })
        
        for (const entry of entries) {
          const srcPath = path.join(src, entry.name)
          const destPath = path.join(dest, entry.name)
          
          if (entry.isDirectory()) {
            // Ne pas copier le dossier mp3
            if (entry.name === 'mp3') continue
            
            if (!fs.existsSync(destPath)) {
              fs.mkdirSync(destPath, { recursive: true })
            }
            copyRecursive(srcPath, destPath)
          } else {
            // Ne pas copier les fichiers .mp3
            if (entry.name.endsWith('.mp3')) continue
            
            const destDir = path.dirname(destPath)
            if (!fs.existsSync(destDir)) {
              fs.mkdirSync(destDir, { recursive: true })
            }
            fs.copyFileSync(srcPath, destPath)
          }
        }
      }
      
      copyRecursive(publicDir, outDir)
    }
  }
}

export default defineConfig({
  plugins: [react(), copyPublicExcludeMp3()],
  base: '/nexus/',
  build: {
    copyPublicDir: false // Désactiver la copie automatique, on utilise notre plugin
  }
})
