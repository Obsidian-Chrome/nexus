import { useRef, useState } from 'react'

const PyonPixCentreVille = ({ onBack }) => {
  const videoRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleCanPlay = () => {
    setIsLoading(false)
  }

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
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onClick={onBack}
        onCanPlay={handleCanPlay}
      >
        <source src="https://github.com/Obsidian-Chrome/nexus/releases/download/1.1.0/PyonPix.-.Centre.Ville.webm" type="video/webm" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

    </div>
  )
}

export default PyonPixCentreVille
