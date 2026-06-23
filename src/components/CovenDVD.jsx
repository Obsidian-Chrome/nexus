import { useEffect, useRef, useState } from 'react'

const CovenDVD = () => {
  const logoRef = useRef(null)
  const containerRef = useRef(null)
  const positionRef = useRef({ x: 100, y: 100 })
  const velocityRef = useRef({ x: 2, y: 2 })
  const animationRef = useRef(null)
  const [hue, setHue] = useState(0)

  useEffect(() => {
    const logo = logoRef.current
    const container = containerRef.current
    if (!logo || !container) return

    const logoWidth = 250
    const logoHeight = 250

    const animate = () => {
      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight

      // Mise à jour de la position
      positionRef.current.x += velocityRef.current.x
      positionRef.current.y += velocityRef.current.y

      // Détection collision avec les bords
      let bounced = false

      // Bord droit ou gauche
      if (positionRef.current.x + logoWidth >= containerWidth || positionRef.current.x <= 0) {
        velocityRef.current.x *= -1
        positionRef.current.x = Math.max(0, Math.min(positionRef.current.x, containerWidth - logoWidth))
        bounced = true
      }

      // Bord bas ou haut
      if (positionRef.current.y + logoHeight >= containerHeight || positionRef.current.y <= 0) {
        velocityRef.current.y *= -1
        positionRef.current.y = Math.max(0, Math.min(positionRef.current.y, containerHeight - logoHeight))
        bounced = true
      }

      // Changer la couleur à chaque rebond
      if (bounced) {
        setHue(Math.random() * 360)
      }

      // Appliquer la position
      logo.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`

      animationRef.current = requestAnimationFrame(animate)
    }

    // Position initiale aléatoire
    positionRef.current = {
      x: Math.random() * (container.clientWidth - logoWidth),
      y: Math.random() * (container.clientHeight - logoHeight)
    }

    // Vélocité initiale aléatoire
    const speed = 2
    const angle = Math.random() * Math.PI * 2
    velocityRef.current = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed
    }

    // Démarrer l'animation
    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black z-50 overflow-hidden"
    >
      <img
        ref={logoRef}
        src="/coven/coven_logo.png"
        alt="Coven Logo"
        className="absolute w-[250px] h-[250px] object-contain transition-all duration-100"
        style={{
          filter: `hue-rotate(${hue}deg) saturate(1.5)`,
          willChange: 'transform'
        }}
      />
    </div>
  )
}

export default CovenDVD
