import { useEffect, useRef, useState } from 'react'
import PyonPixVisualizerOverlay from './PyonPixVisualizerOverlay'

const PyonPixNightcity = ({ onBack }) => {
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const hasInitialized = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Fonction pour calculer le temps de la vidéo basé sur l'heure de Paris
    const syncVideoWithParisTime = () => {
      // Obtenir l'heure de Paris (UTC+1 ou UTC+2 selon DST)
      const now = new Date()
      const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))
      const hours = parisTime.getHours()
      const minutes = parisTime.getMinutes()
      const seconds = parisTime.getSeconds()
      
      // Convertir en heures décimales
      const currentTimeInHours = hours + minutes / 60 + seconds / 3600
      
      // La vidéo commence à 20h00 in-game (timestamp 0)
      // 30 min de vidéo = 4h in-game
      // Donc 1h in-game = 7.5 min de vidéo
      
      // Calculer la différence entre l'heure actuelle et 20h00
      let timeDiff = currentTimeInHours - 20
      if (timeDiff < 0) {
        timeDiff += 24 // Gérer le passage à minuit
      }
      
      // Convertir en minutes de vidéo (7.5 min vidéo par heure in-game)
      const videoTimeInMinutes = timeDiff * 7.5
      const videoTimeInSeconds = videoTimeInMinutes * 60
      
      // La vidéo fait 4h (240 min), on boucle si nécessaire
      const videoDurationSeconds = 240 * 60
      const syncedTime = videoTimeInSeconds % videoDurationSeconds
      
      if (video.readyState >= 2) {
        // Synchroniser le temps AVANT de lancer la lecture
        video.currentTime = syncedTime
        
        // Définir la vitesse de lecture pour synchronisation parfaite
        video.playbackRate = 0.125
        
        // Puis lancer la lecture
        video.play().then(() => {
          setIsLoading(false)
          setTimeout(() => setShowVideo(true), 100)
        }).catch(err => {
          console.log('Erreur lecture vidéo:', err)
          setIsLoading(false)
          setShowVideo(true)
        })
      }
    }

    // Gérer les événements vidéo
    const handleCanPlayThrough = () => {
      if (!hasInitialized.current) {
        hasInitialized.current = true
        syncVideoWithParisTime()
      }
    }

    video.addEventListener('canplaythrough', handleCanPlayThrough, { once: true })

    // Si la vidéo est déjà prête
    if (video.readyState >= 4 && !hasInitialized.current) {
      hasInitialized.current = true
      syncVideoWithParisTime()
    }

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      // Cleanup complet de la vidéo
      if (video) {
        video.pause()
        video.src = ''
        video.load()
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-40">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
            <p className="text-cyan-400/80 text-sm tracking-wider">CHARGEMENT...</p>
          </div>
        </div>
      )}

      {/* Vidéo en plein écran */}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          showVideo ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src="https://github.com/Obsidian-Chrome/nexus/releases/download/1.0.0/nightcity_24h.webm" type="video/webm" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Overlay visualizer */}
      <PyonPixVisualizerOverlay onBack={onBack} />
    </div>
  )
}

export default PyonPixNightcity
