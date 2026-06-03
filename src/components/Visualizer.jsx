import { useState, useEffect, useRef } from 'react'

const Visualizer = ({ onBack }) => {
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentEvent, setCurrentEvent] = useState(null)
  const [visualizerData, setVisualizerData] = useState(null)

  // Charger le JSON dynamiquement avec cache-buster
  useEffect(() => {
    const timestamp = new Date().getTime()
    fetch(`/coven/visualizer.json?t=${timestamp}`)
      .then(res => res.json())
      .then(data => setVisualizerData(data))
      .catch(err => console.error('Erreur chargement visualizer.json:', err))
  }, [])

  useEffect(() => {
    if (!visualizerData) return

    const checkCurrentEvent = () => {
      const now = new Date()
      const currentDate = now.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' })
      const currentTime = now.toTimeString().slice(0, 5) // HH:MM

      // Trouver l'événement actuel
      const activeEvent = visualizerData.events.find(event => {
        if (event.date !== currentDate) return false
        
        const [startHour, startMin] = event.heureDebut.split(':').map(Number)
        const [endHour, endMin] = event.heureFin.split(':').map(Number)
        const [nowHour, nowMin] = currentTime.split(':').map(Number)
        
        const startMinutes = startHour * 60 + startMin
        const endMinutes = endHour * 60 + endMin
        const nowMinutes = nowHour * 60 + nowMin
        
        return nowMinutes >= startMinutes && nowMinutes <= endMinutes
      })

      // Si aucun événement actif, utiliser le default
      setCurrentEvent(activeEvent || visualizerData.default)
    }

    checkCurrentEvent()
    const interval = setInterval(checkCurrentEvent, 60000) // Vérifier chaque minute

    return () => clearInterval(interval)
  }, [visualizerData])

  const handleCanPlay = () => {
    setIsLoading(false)
  }

  if (!currentEvent) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
        <p className="text-white">Aucun événement configuré</p>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black z-50">
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-40">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mb-4"></div>
            <p className="text-red-400/80 text-sm tracking-wider">CHARGEMENT...</p>
          </div>
        </div>
      )}

      {/* Vidéo avec filtre de couleur */}
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onClick={onBack}
          onCanPlay={handleCanPlay}
        >
          <source src={`/coven/visualizer/${currentEvent.fichier}`} type="video/webm" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        
        {/* Filtre de couleur */}
        {currentEvent.hexadecimal && currentEvent.hexadecimal !== '#000000' && (
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-multiply"
            style={{ backgroundColor: currentEvent.hexadecimal, opacity: 0.3 }}
          />
        )}
      </div>
    </div>
  )
}

export default Visualizer
