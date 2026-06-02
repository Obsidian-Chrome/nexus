import { useEffect, useRef, useState } from 'react'
import { ArrowLeft } from 'lucide-react'

const PyonPixNightcity = ({ onBack }) => {
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showControls, setShowControls] = useState(true)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [videoTime, setVideoTime] = useState('00:00')
  const hideControlsTimeout = useRef(null)
  const hasInitialized = useRef(false)
  const lastUpdateTime = useRef(0)

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
        }).catch(err => {
          console.log('Erreur lecture vidéo:', err)
          setIsLoading(false)
        })
      }
    }

    // Gérer les événements vidéo
    const handleCanPlay = () => {
      if (!hasInitialized.current) {
        hasInitialized.current = true
        syncVideoWithParisTime()
      }
    }

    const handleTimeUpdate = () => {
      const now = Date.now()
      // Limiter à une mise à jour toutes les 2 secondes pour éviter les saccades
      if (now - lastUpdateTime.current < 2000) return
      
      lastUpdateTime.current = now
      const hours = Math.floor(video.currentTime / 3600)
      const minutes = Math.floor((video.currentTime % 3600) / 60)
      setVideoTime(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`)
    }

    video.addEventListener('canplay', handleCanPlay, { once: true })
    video.addEventListener('timeupdate', handleTimeUpdate)

    // Si la vidéo est déjà prête
    if (video.readyState >= 3 && !hasInitialized.current) {
      hasInitialized.current = true
      syncVideoWithParisTime()
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  // Mettre à jour l'heure locale chaque seconde
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Gérer l'auto-hide des contrôles
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true)
      
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current)
      }
      
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (hideControlsTimeout.current) {
        clearTimeout(hideControlsTimeout.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Bouton retour avec overlay */}
      <div className={`absolute top-8 left-8 z-50 transition-opacity duration-500 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/80 hover:text-cyan-400 transition-all duration-300 bg-black/50 backdrop-blur-sm px-4 py-2 rounded border border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Retour</span>
        </button>
      </div>

      {/* Titre Night City */}
      <div className={`absolute top-8 right-8 z-50 text-right transition-opacity duration-500 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]">
          // NIGHT CITY
        </h1>
      </div>

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
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="https://github.com/Obsidian-Chrome/nexus/releases/download/1.0.0/nightcity_24h.webm" type="video/webm" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

      {/* Info heure et position */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-black/50 backdrop-blur-sm px-6 py-3 rounded border border-cyan-500/30">
          <div className="flex items-center gap-6 text-xs">
            <div className="text-cyan-400/80 tracking-wider">
              <span className="opacity-60">LOCAL //</span> {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
            <div className="w-px h-4 bg-cyan-500/30"></div>
            <div className="text-cyan-400/80 tracking-wider">
              <span className="opacity-60">VIDEO //</span> {videoTime}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default PyonPixNightcity
