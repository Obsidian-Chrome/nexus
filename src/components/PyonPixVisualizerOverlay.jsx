import { useState, useEffect, useRef } from 'react'
import { X, CloudRain, Droplets, Blinds } from 'lucide-react'
import BlindsThreeOverlay from './BlindsThreeOverlay'
import SeamlessVideoOverlay from './SeamlessVideoOverlay'

const PyonPixVisualizerOverlay = ({ onBack, simple = false }) => {
  const [showControls, setShowControls] = useState(true)
  const [activeOverlays, setActiveOverlays] = useState(new Set())
  const [blindsOpen, setBlindsOpen] = useState(false)
  const [videoKey, setVideoKey] = useState(0)
  const hideControlsTimeout = useRef(null)
  const menuRef = useRef(null)

  const overlayOptions = [
    { id: 'rain', label: 'Pluie', icon: CloudRain, src: 'https://github.com/Obsidian-Chrome/nexus/releases/download/rain/rain.webm' },
    { id: 'rain_window', label: 'Pluie vitre', icon: Droplets, src: 'https://github.com/Obsidian-Chrome/nexus/releases/download/rain-window/rain_window.webm' },
    { id: 'blinds', label: 'Store', icon: Blinds, src: null }
  ]

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
        const ids = overlayParam.split(',').filter(id => overlayOptions.some(o => o.id === id))
        setActiveOverlays(new Set(ids))
        if (ids.includes('blinds')) {
          setBlindsOpen(openParam === 'true')
        }
        setVideoKey(prev => prev + 1)
      }
    }
  }, [])

  const updateHashOverlay = (overlays, open = null) => {
    const baseHash = window.location.hash.split('?')[0]
    const ids = Array.from(overlays)
    if (ids.length > 0) {
      const openParam = ids.includes('blinds') && open !== null ? `&open=${open}` : ''
      window.location.hash = `${baseHash}?overlay=${ids.join(',')}${openParam}`
    } else {
      window.location.hash = baseHash
    }
  }

  const handleToggleOverlay = (optionId) => {
    setActiveOverlays(prev => {
      const next = new Set(prev)
      if (next.has(optionId)) {
        next.delete(optionId)
        if (optionId === 'blinds') {
          setBlindsOpen(false)
        }
      } else {
        next.add(optionId)
        if (optionId === 'blinds') {
          setBlindsOpen(false)
        }
      }
      updateHashOverlay(next, optionId === 'blinds' ? false : blindsOpen)
      return next
    })
    setVideoKey(prev => prev + 1)
  }

  const handleToggleBlinds = () => {
    setBlindsOpen(prev => {
      const next = !prev
      updateHashOverlay(activeOverlays, next)
      return next
    })
  }


  return (
    <>
      {/* Overlays vidéo : pluie et/ou pluie vitre */}
      {overlayOptions
        .filter(o => o.id !== 'blinds' && activeOverlays.has(o.id))
        .map(o => (
          <SeamlessVideoOverlay key={`${o.id}-${videoKey}`} src={o.src} />
        ))}

      {/* Overlay store Three.js */}
      {activeOverlays.has('blinds') && <BlindsThreeOverlay open={blindsOpen} />}

      {/* Menu auto-hide */}
      <div
        ref={menuRef}
        className={`absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-3 rounded-lg border backdrop-blur-md transition-all duration-500 ${
          showControls ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ borderColor: 'rgba(6, 182, 212, 0.3)', background: 'rgba(0, 0, 0, 0.75)' }}
      >
        {!simple && overlayOptions.map(option => {
          const Icon = option.icon
          const isActive = activeOverlays.has(option.id)
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

        {!simple && activeOverlays.has('blinds') && (
          <button
            onClick={handleToggleBlinds}
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
