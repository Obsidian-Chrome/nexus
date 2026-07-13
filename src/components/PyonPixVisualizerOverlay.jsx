import { useState, useEffect, useRef } from 'react'
import { X, CloudRain, Droplets, Blinds } from 'lucide-react'

const PyonPixVisualizerOverlay = ({ onBack }) => {
  const [showControls, setShowControls] = useState(true)
  const [activeOverlay, setActiveOverlay] = useState(null)
  const [blindsOpen, setBlindsOpen] = useState(false)
  const [videoKey, setVideoKey] = useState(0)
  const hideControlsTimeout = useRef(null)
  const overlayVideoRef = useRef(null)

  const overlayOptions = [
    { id: 'rain', label: 'Pluie', icon: CloudRain, src: '/media/visualizer_add/rain.webm' },
    { id: 'rain_window', label: 'Pluie vitre', icon: Droplets, src: '/media/visualizer_add/rain_window.webm' },
    { id: 'blinds', label: 'Store', icon: Blinds, src: null }
  ]

  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true)
      if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current)
      hideControlsTimeout.current = setTimeout(() => setShowControls(false), 3000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    handleMouseMove()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current)
    }
  }, [])

  useEffect(() => {
    const fullHash = window.location.hash.substring(1)
    const queryIndex = fullHash.indexOf('?')
    if (queryIndex > -1) {
      const params = new URLSearchParams(fullHash.substring(queryIndex + 1))
      const overlayParam = params.get('overlay')
      if (overlayOptions.some(o => o.id === overlayParam)) {
        setActiveOverlay(overlayParam)
        setVideoKey(prev => prev + 1)
      }
    }
  }, [])

  useEffect(() => {
    if (activeOverlay && activeOverlay !== 'blinds' && overlayVideoRef.current) {
      overlayVideoRef.current.play().catch(err => console.error('Erreur lecture overlay:', err))
    }
  }, [activeOverlay, videoKey])

  const updateHashOverlay = (overlayId) => {
    const baseHash = window.location.hash.split('?')[0]
    if (overlayId) {
      window.location.hash = `${baseHash}?overlay=${overlayId}`
    } else {
      window.location.hash = baseHash
    }
  }

  const handleToggleOverlay = (optionId) => {
    if (activeOverlay === optionId) {
      setActiveOverlay(null)
      setBlindsOpen(false)
      updateHashOverlay(null)
    } else {
      setActiveOverlay(optionId)
      setBlindsOpen(false)
      setVideoKey(prev => prev + 1)
      updateHashOverlay(optionId)
    }
  }

  return (
    <>
      {/* Overlay vidéo : pluie ou pluie vitre */}
      {activeOverlay && activeOverlay !== 'blinds' && (
        <video
          key={videoKey}
          ref={overlayVideoRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none z-20"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src={overlayOptions.find(o => o.id === activeOverlay).src}
            type="video/webm"
          />
        </video>
      )}

      {/* Overlay store (blinds) */}
      {activeOverlay === 'blinds' && (
        <div
          className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              rgba(8, 5, 2, 0.92) 0px,
              rgba(12, 8, 4, 0.92) 11px,
              rgba(0, 0, 0, 0.35) 11px,
              rgba(0, 0, 0, 0.35) 12px,
              transparent 12px,
              transparent 24px
            )`,
            boxShadow: 'inset 0 0 80px rgba(0,0,0,0.8)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
            opacity: blindsOpen ? 0.55 : 0.95,
            transform: blindsOpen ? 'scaleY(0.98)' : 'scaleY(1)'
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 10px,
                rgba(255, 255, 255, 0.04) 10px,
                rgba(255, 255, 255, 0.04) 11px,
                rgba(0, 0, 0, 0.2) 11px,
                rgba(0, 0, 0, 0.2) 12px,
                transparent 12px,
                transparent 24px
              )`
            }}
          />
        </div>
      )}

      {/* Menu auto-hide */}
      <div
        className={`absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-3 rounded-lg border backdrop-blur-md transition-all duration-500 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ borderColor: 'rgba(6, 182, 212, 0.3)', background: 'rgba(0, 0, 0, 0.75)' }}
      >
        {overlayOptions.map(option => {
          const Icon = option.icon
          const isActive = activeOverlay === option.id
          return (
            <button
              key={option.id}
              onClick={() => handleToggleOverlay(option.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded text-xs font-semibold tracking-wider transition-all duration-200 ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
              title={option.label}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{option.label}</span>
            </button>
          )
        })}

        {activeOverlay === 'blinds' && (
          <button
            onClick={() => setBlindsOpen(!blindsOpen)}
            className="ml-2 px-3 py-2 rounded text-xs font-semibold tracking-wider text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200"
          >
            {blindsOpen ? 'Fermer' : 'Ouvrir'}
          </button>
        )}

        <div className="w-px h-6 bg-white/10 mx-1" />

        <button
          onClick={onBack}
          className="flex items-center gap-1 px-3 py-2 rounded text-xs font-semibold tracking-wider text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-all duration-200"
          title="Quitter"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">Quitter</span>
        </button>
      </div>

      {/* Indication de contrôles cachés */}
      <div
        className={`absolute top-4 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full text-xs text-cyan-500/50 transition-all duration-500 pointer-events-none ${
          showControls ? 'opacity-0' : 'opacity-100'
        }`}
      >
        Déplacez la souris pour afficher les options
      </div>
    </>
  )
}

export default PyonPixVisualizerOverlay
