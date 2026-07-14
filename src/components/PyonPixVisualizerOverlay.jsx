import { useState, useEffect, useRef } from 'react'
import { X, CloudRain, Droplets, Blinds, Sun } from 'lucide-react'
import BlindsThreeOverlay from './BlindsThreeOverlay'
import SeamlessVideoOverlay from './SeamlessVideoOverlay'

const PyonPixVisualizerOverlay = ({ onBack, simple = false }) => {
  const [showControls, setShowControls] = useState(true)
  const [weatherOverlay, setWeatherOverlay] = useState(null)
  const [blindsActive, setBlindsActive] = useState(false)
  const [blindsOpen, setBlindsOpen] = useState(false)
  const [videoKey, setVideoKey] = useState(0)
  const hideControlsTimeout = useRef(null)
  const menuRef = useRef(null)

  const weatherOptions = [
    { id: 'rain', label: 'Pluie', icon: CloudRain, src: '/media/visualizer-add/rain.mp4' },
    { id: 'window', label: 'Vitre', icon: Droplets, src: '/media/visualizer-add/window.mp4' },
    { id: 'rain_window', label: 'Pluie + Vitre', icon: CloudRain, src: '/media/visualizer-add/rain-window.mp4' },
    { id: 'clear', label: 'Dégagé', icon: Sun, src: null }
  ]
  const blindsOption = { id: 'blinds', label: 'Store', icon: Blinds }

  useEffect(() => {
    const isOverMenu = (e) => e && e.target && menuRef.current && menuRef.current.contains(e.target)

    const handleMouseMove = (e) => {
      if (!isOverMenu(e)) {
        setShowControls(true)
        if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current)
        hideControlsTimeout.current = setTimeout(() => setShowControls(false), 3000)
      }
    }

    const handleMouseEnterMenu = () => {
      setShowControls(true)
      if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current)
    }

    const handleMouseLeaveMenu = () => {
      if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current)
      hideControlsTimeout.current = setTimeout(() => setShowControls(false), 3000)
    }

    window.addEventListener('mousemove', handleMouseMove)
    if (menuRef.current) {
      menuRef.current.addEventListener('mouseenter', handleMouseEnterMenu)
      menuRef.current.addEventListener('mouseleave', handleMouseLeaveMenu)
    }

    // Démarrer le timer initial
    setShowControls(true)
    hideControlsTimeout.current = setTimeout(() => setShowControls(false), 3000)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (menuRef.current) {
        menuRef.current.removeEventListener('mouseenter', handleMouseEnterMenu)
        menuRef.current.removeEventListener('mouseleave', handleMouseLeaveMenu)
      }
      if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current)
    }
  }, [])

  useEffect(() => {
    const fullHash = window.location.hash.substring(1)
    const queryIndex = fullHash.indexOf('?')
    if (queryIndex > -1) {
      const params = new URLSearchParams(fullHash.substring(queryIndex + 1))
      const overlayParam = params.get('overlay')
      const openParam = params.get('open')
      if (overlayParam) {
        const ids = overlayParam.split(',')
        const weatherId = ids.find(id => weatherOptions.some(o => o.id === id))
        const hasBlinds = ids.includes('blinds')
        setWeatherOverlay(weatherId || null)
        setBlindsActive(hasBlinds)
        if (hasBlinds) {
          setBlindsOpen(openParam === 'true')
        }
        setVideoKey(prev => prev + 1)
      }
    }
  }, [])

  const updateHashOverlay = (weather, blinds, open = false) => {
    const baseHash = window.location.hash.split('?')[0]
    const ids = []
    if (weather) ids.push(weather)
    if (blinds) ids.push('blinds')
    if (ids.length > 0) {
      const openParam = blinds ? `&open=${open}` : ''
      window.location.hash = `${baseHash}?overlay=${ids.join(',')}${openParam}`
    } else {
      window.location.hash = baseHash
    }
  }

  const handleToggleWeather = (optionId) => {
    setWeatherOverlay(prev => {
      const next = optionId === 'clear' ? null : (prev === optionId ? null : optionId)
      updateHashOverlay(next, blindsActive, blindsOpen)
      return next
    })
    setVideoKey(prev => prev + 1)
  }

  const handleToggleBlinds = () => {
    setBlindsActive(prev => {
      const next = !prev
      if (!next) setBlindsOpen(false)
      updateHashOverlay(weatherOverlay, next, next ? blindsOpen : false)
      return next
    })
  }

  const handleToggleBlindsOpen = () => {
    setBlindsOpen(prev => {
      const next = !prev
      updateHashOverlay(weatherOverlay, blindsActive, next)
      return next
    })
  }


  return (
    <>
      {/* Filtre nuageux grisaille sur la vidéo de fond */}
      {weatherOverlay && (
        <div
          className="absolute inset-0 z-15 pointer-events-none"
          style={{ background: 'rgba(130, 140, 150, 0.25)', mixBlendMode: 'multiply' }}
        />
      )}

      {/* Overlay vidéo météo */}
      {weatherOverlay && (
        <SeamlessVideoOverlay
          key={`${weatherOverlay}-${videoKey}`}
          src={weatherOptions.find(o => o.id === weatherOverlay).src}
        />
      )}

      {/* Overlay store Three.js */}
      {blindsActive && <BlindsThreeOverlay open={blindsOpen} />}

      {/* Menu auto-hide */}
      <div
        ref={menuRef}
        className={`absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-3 rounded-lg border backdrop-blur-md transition-all duration-500 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ borderColor: 'rgba(6, 182, 212, 0.3)', background: 'rgba(0, 0, 0, 0.75)' }}
      >
        {!simple && weatherOptions.map(option => {
          const Icon = option.icon
          const isActive = option.id === 'clear' ? weatherOverlay === null : weatherOverlay === option.id
          return (
            <button
              key={option.id}
              onClick={() => handleToggleWeather(option.id)}
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

        {!simple && (
          <button
            onClick={handleToggleBlinds}
            className={`flex items-center gap-2 px-3 py-2 rounded text-xs font-semibold tracking-wider transition-all duration-200 ${
              blindsActive
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
            title={blindsOption.label}
          >
            <Blinds className="w-4 h-4" />
            <span className="hidden sm:inline">{blindsOption.label}</span>
          </button>
        )}

        {!simple && blindsActive && (
          <button
            onClick={handleToggleBlindsOpen}
            className="ml-2 px-3 py-2 rounded text-xs font-semibold tracking-wider text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200"
          >
            {blindsOpen ? 'Fermer' : 'Ouvrir'}
          </button>
        )}

        {!simple && <div className="w-px h-6 bg-white/10 mx-1" />}

        <button
          onClick={onBack}
          className="flex items-center gap-1 px-3 py-2 rounded text-xs font-semibold tracking-wider text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-all duration-200"
          title="Quitter"
        >
          <X className="w-4 h-4" />
          <span className="hidden sm:inline">Quitter</span>
        </button>
      </div>
    </>
  )
}

export default PyonPixVisualizerOverlay
