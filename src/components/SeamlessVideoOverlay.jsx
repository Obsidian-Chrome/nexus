import { useEffect, useRef, useState } from 'react'

const SeamlessVideoOverlay = ({ src }) => {
  const containerRef = useRef(null)
  const videoA = useRef(null)
  const videoB = useRef(null)
  const activeRef = useRef('A')
  const durationRef = useRef(0)
  const rafRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const a = videoA.current
    const b = videoB.current
    if (!a || !b) return

    let loaded = 0
    const onLoaded = () => {
      loaded += 1
      if (loaded === 2) {
        durationRef.current = a.duration || 2
        setReady(true)
        a.play().catch(() => {})
        activeRef.current = 'A'
      }
    }

    a.addEventListener('loadedmetadata', onLoaded, { once: true })
    b.addEventListener('loadedmetadata', onLoaded, { once: true })

    a.load()
    b.load()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      a.pause()
      b.pause()
      a.src = ''
      b.src = ''
      a.load()
      b.load()
    }
  }, [src])

  useEffect(() => {
    if (!ready) return
    const a = videoA.current
    const b = videoB.current
    if (!a || !b) return

    const duration = durationRef.current
    const fadeDuration = Math.min(duration * 0.4, 0.8)

    const tick = () => {
      const active = activeRef.current === 'A' ? a : b
      const next = activeRef.current === 'A' ? b : a
      const progress = active.currentTime
      const remaining = duration - progress

      // Démarrer la vidéo suivante en avance pour le crossfade
      if (remaining <= fadeDuration && next.paused && next !== active) {
        next.currentTime = 0
        next.play().catch(() => {})
      }

      // Crossfade par opacité
      if (remaining <= fadeDuration) {
        const fade = Math.max(0, Math.min(1, 1 - remaining / fadeDuration))
        active.style.opacity = String(1 - fade)
        next.style.opacity = String(fade)
      } else {
        active.style.opacity = '1'
        next.style.opacity = '0'
      }

      // Lorsque l'active touche la fin, on swap et on réinitialise l'autre
      if (progress >= duration - 0.01) {
        if (activeRef.current === 'A') {
          activeRef.current = 'B'
          a.currentTime = 0
          a.pause()
        } else {
          activeRef.current = 'A'
          b.currentTime = 0
          b.pause()
        }
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [ready])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-20">
      <video
        ref={videoA}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay={false}
        muted
        playsInline
        preload="auto"
        style={{ opacity: 1, filter: 'grayscale(0.55) brightness(0.75) contrast(0.95) saturate(0.5)' }}
      />
      <video
        ref={videoB}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay={false}
        muted
        playsInline
        preload="auto"
        style={{ opacity: 0, filter: 'grayscale(0.55) brightness(0.75) contrast(0.95) saturate(0.5)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(100, 110, 120, 0.25)', mixBlendMode: 'multiply' }}
      />
    </div>
  )
}

export default SeamlessVideoOverlay
