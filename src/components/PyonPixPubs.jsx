import { useEffect, useRef, useState } from 'react'

const PyonPixPubs = ({ onBack }) => {
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const hasInitialized = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const syncVideoWithUTCPlus1 = () => {
      // Obtenir l'heure UTC+1
      const now = new Date()
      const utcPlus1 = new Date(now.getTime() + (60 * 60 * 1000))
      
      // Calculer le nombre de secondes écoulées depuis minuit UTC+1
      const hours = utcPlus1.getUTCHours()
      const minutes = utcPlus1.getUTCMinutes()
      const seconds = utcPlus1.getUTCSeconds()
      const totalSecondsToday = hours * 3600 + minutes * 60 + seconds
      
      // Synchroniser avec la vidéo (modulo durée de la vidéo)
      // La durée sera calculée automatiquement quand la vidéo sera chargée
      if (video.readyState >= 2 && video.duration) {
        const syncedTime = totalSecondsToday % video.duration
        video.currentTime = syncedTime
        
        video.play().then(() => {
          setIsLoading(false)
          // Petit délai pour éviter le flash
          setTimeout(() => setShowVideo(true), 100)
        }).catch(err => {
          console.log('Erreur lecture vidéo:', err)
          setIsLoading(false)
          setShowVideo(true)
        })
      }
    }

    const handleCanPlayThrough = () => {
      if (!hasInitialized.current) {
        hasInitialized.current = true
        syncVideoWithUTCPlus1()
      }
    }

    video.addEventListener('canplaythrough', handleCanPlayThrough, { once: true })

    // Si la vidéo est déjà prête
    if (video.readyState >= 4 && !hasInitialized.current) {
      hasInitialized.current = true
      syncVideoWithUTCPlus1()
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
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-40">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
            <p className="text-cyan-400/80 text-sm tracking-wider">CHARGEMENT...</p>
          </div>
        </div>
      )}

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
        onClick={onBack}
      >
        <source src="https://github.com/Obsidian-Chrome/nexus/releases/download/1.2.0/Cyberpunk.Assets.-.Pubs.webm" type="video/webm" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  )
}

export default PyonPixPubs
