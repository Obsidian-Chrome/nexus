import { useEffect, useRef } from 'react'

const HexagonBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: false })
    let animationFrameId
    let time = 0
    let isVisible = true

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const hexSize = 40
    const hexHeight = hexSize * Math.sqrt(3)
    const hexWidth = hexSize * 2

    const drawHexagon = (x, y, size, glowIntensity = 0, radialOpacity = 1) => {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + size * Math.cos(angle)
        const hy = y + size * Math.sin(angle)
        if (i === 0) {
          ctx.moveTo(hx, hy)
        } else {
          ctx.lineTo(hx, hy)
        }
      }
      ctx.closePath()

      if (glowIntensity > 0.05) {
        ctx.strokeStyle = `rgba(6, 182, 212, ${glowIntensity * 0.3 * radialOpacity})`
        ctx.lineWidth = 1
        ctx.shadowBlur = 8 * glowIntensity * radialOpacity
        ctx.shadowColor = `rgba(6, 182, 212, ${glowIntensity * 0.5 * radialOpacity})`
      } else {
        ctx.strokeStyle = `rgba(80, 80, 90, ${0.25 * radialOpacity})`
        ctx.lineWidth = 0.8
        ctx.shadowBlur = 0
      }
      
      ctx.stroke()
    }

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate)
        return
      }

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.015

      const cols = Math.ceil(canvas.width / (hexWidth * 0.75)) + 2
      const rows = Math.ceil(canvas.height / hexHeight) + 2

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const x = col * hexWidth * 0.75
          const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2)

          // Calcul de l'opacité radiale (0 au centre, 1 sur les bords)
          const centerX = canvas.width / 2
          const centerY = canvas.height / 2
          const distanceFromCenter = Math.sqrt(
            Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
          )
          const maxDistance = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2)
          )
          // Opacité 0 au centre, augmente vers les bords - zone centrale plus large
          const normalizedDistance = distanceFromCenter / maxDistance
          const radialOpacity = normalizedDistance < 0.3 ? 0 : Math.min(1, (normalizedDistance - 0.3) * 2.2)

          // Vague du bas vers le haut - moins fréquente
          const normalizedY = y / canvas.height
          const wave = Math.sin((1 - normalizedY) * 3 - time * 0.5) * 0.5 + 0.5
          // Seuil plus strict pour des vagues plus espacées
          const glowIntensity = wave > 0.85 ? (wave - 0.85) * 2.5 : 0

          drawHexagon(x, y, hexSize, glowIntensity, radialOpacity)
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

export default HexagonBackground
