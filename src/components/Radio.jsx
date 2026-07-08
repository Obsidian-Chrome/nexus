import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Radio as RadioIcon, Link } from 'lucide-react'

// URL de base pour les MP3 : GitHub en production, local en dev
const MP3_BASE_URL = import.meta.env.PROD 
  ? 'https://raw.githubusercontent.com/Obsidian-Chrome/nexus/main/public/media/radio/mp3/'
  : '/media/radio/mp3/'

const RADIOS = [
  { id: 1, freq: '69.9', name: 'Funk Radio', slug: 'funk-radio', logo: '/media/radio/logos/69.9_Funk_Radio.webp', color: '#2596be', playlistFile: '/media/radio/playlists/69.9_Funk_Radio.json' },
  { id: 2, freq: '87.7', name: 'Magenta Station', slug: 'magenta-station', logo: '/media/radio/logos/87.7_Magenta_Station.webp', color: '#2596be', playlistFile: '/media/radio/playlists/87.7_Magenta_Station.json' },
  { id: 3, freq: '88.9', name: 'Pacific Dreams', slug: 'pacific-dreams', logo: '/media/radio/logos/88.9_Pacific_Dreams.webp', color: '#2596be', playlistFile: '/media/radio/playlists/88.9_Pacific_Dreams.json' },
  { id: 4, freq: '89.3', name: 'Radio Vexelstrom', slug: 'radio-vexelstrom', logo: '/media/radio/logos/89.3_Radio_Vexelstrom.webp', color: '#2596be', playlistFile: '/media/radio/playlists/89.3_Radio_Vexelstrom.json' },
  { id: 5, freq: '89.7', name: 'Growl FM', slug: 'growl-fm', logo: '/media/radio/logos/89.7_Growl_FM.webp', color: '#2596be', playlistFile: '/media/radio/playlists/89.7_Growl_FM.json' },
  { id: 6, freq: '91.9', name: 'Royal Blue Radio', slug: 'royal-blue-radio', logo: '/media/radio/logos/91.9_Royal_Blue_Radio.webp', color: '#2596be', playlistFile: '/media/radio/playlists/91.9_Royal_Blue_Radio.json' },
  { id: 7, freq: '92.9', name: 'Night FM', slug: 'night-fm', logo: '/media/radio/logos/92.9_Night_FM.webp', color: '#2596be', playlistFile: '/media/radio/playlists/92.9_Night_FM.json' },
  { id: 8, freq: '95.2', name: 'Samizdat Radio', slug: 'samizdat-radio', logo: '/media/radio/logos/95.2_Samizdat_Radio.webp', color: '#2596be', playlistFile: '/media/radio/playlists/95.2_Samizdat_Radio.json' },
  { id: 9, freq: '96.1', name: 'Ritual FM', slug: 'ritual-fm', logo: '/media/radio/logos/96.1_Ritual_FM.webp', color: '#2596be', playlistFile: '/media/radio/playlists/96.1_Ritual_FM.json' },
  { id: 10, freq: '98.7', name: 'Body Heat Radio', slug: 'body-heat-radio', logo: '/media/radio/logos/98.7_Body_Heat_Radio.webp', color: '#2596be', playlistFile: '/media/radio/playlists/98.7_Body_Heat_Radio.json' },
  { id: 11, freq: '99.9', name: 'Impulse', slug: 'impulse', logo: '/media/radio/logos/99.9_Impulse.webp', color: '#2596be', playlistFile: '/media/radio/playlists/99.9_Impulse.json' },
  { id: 12, freq: '101.9', name: 'The Dirge', slug: 'the-dirge', logo: '/media/radio/logos/101.9_The_Dirge.webp', color: '#2596be', playlistFile: '/media/radio/playlists/101.9_The_Dirge.json' },
  { id: 13, freq: '103.5', name: 'Radio PEBKAC', slug: 'radio-pebkac', logo: '/media/radio/logos/103.5_Radio_PEBKAC.webp', color: '#2596be', playlistFile: '/media/radio/playlists/103.5_Radio_PEBKAC.json' },
  { id: 14, freq: '106.9', name: '30 PRINCIPALES', slug: '30-principales', logo: '/media/radio/logos/106.9_30_PRINCIPALES.webp', color: '#2596be', playlistFile: '/media/radio/playlists/106.9_30_PRINCIPALES.json' },
  { id: 15, freq: '107.3', name: 'Morro Rock Radio', slug: 'morro-rock-radio', logo: '/media/radio/logos/107.3_Morro_Rock_Radio.webp', color: '#2596be', playlistFile: '/media/radio/playlists/107.3_Morro_Rock_Radio.json' },
  { id: 16, freq: '107.5', name: 'Dark Star', slug: 'dark-star', logo: '/media/radio/logos/107.5_Dark_Star.webp', color: '#2596be', playlistFile: '/media/radio/playlists/107.5_Dark_Star.json' },
]

const ScanBar = ({ active, color }) => (
  <div className="flex items-end gap-[2px] h-8">
    {[...Array(16)].map((_, i) => {
      const animDuration = 0.3 + Math.random() * 0.4
      const animDelay = i * 0.05
      return (
        <div
          key={i}
          className="w-1 rounded-sm transition-all duration-150"
          style={{
            height: active ? `${Math.random() * 80 + 20}%` : '20%',
            backgroundColor: active ? color : '#1a0000',
            animationName: active ? 'barPulse' : 'none',
            animationDuration: active ? `${animDuration}s` : undefined,
            animationTimingFunction: active ? 'ease-in-out' : undefined,
            animationIterationCount: active ? 'infinite' : undefined,
            animationDirection: active ? 'alternate' : undefined,
            animationDelay: active ? `${animDelay}s` : undefined
          }}
        />
      )
    })}
  </div>
)

const Radio = ({ onBack }) => {
  const audioRef = useRef(null)
  const [selectedRadio, setSelectedRadio] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [volume, setVolume] = useState(0.2)
  const [isMuted, setIsMuted] = useState(false)
  const [glitch, setGlitch] = useState(false)
  const [playlist, setPlaylist] = useState([])
  const [currentTrack, setCurrentTrack] = useState(null)
  const [shuffledPlaylist, setShuffledPlaylist] = useState([])
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [playlistReady, setPlaylistReady] = useState(false)
  const lastRadioIdRef = useRef(null)
  const shouldAutoPlayRef = useRef(false)
  const isFirstLoadRef = useRef(true)
  const [linkCopied, setLinkCopied] = useState(null)
  const [standaloneMode, setStandaloneMode] = useState(false)

  // Charger la radio depuis l'URL au démarrage
  useEffect(() => {
    // Chercher le paramètre dans le hash (#radio?radio=funk-radio)
    const hash = window.location.hash
    const queryStartIndex = hash.indexOf('?')
    
    if (queryStartIndex > -1) {
      const queryString = hash.substring(queryStartIndex + 1)
      const params = new URLSearchParams(queryString)
      const radioSlug = params.get('radio')
      
      if (radioSlug) {
        const radio = RADIOS.find(r => r.slug === radioSlug)
        if (radio) {
          setSelectedRadio(radio)
          setStandaloneMode(true) // Activer le mode standalone
          // Pas d'autoplay, l'utilisateur devra cliquer sur Play
        }
      }
    }
  }, [])

  // Effet glitch aléatoire
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.85) {
        setGlitch(true)
        setTimeout(() => setGlitch(false), 120)
      }
    }, 2000)
    return () => clearInterval(glitchInterval)
  }, [])

  // Charger la playlist quand on change de radio
  useEffect(() => {
    // Si aucune radio sélectionnée, ne rien faire
    if (!selectedRadio) return
    
    setPlaylistReady(false)
    setShuffledPlaylist([])
    setCurrentTrack(null)
    
    const loadPlaylist = async () => {
      try {
        const response = await fetch(selectedRadio.playlistFile)
        const data = await response.json()
        
        // Charger les durées des MP3
        const tracksWithDuration = await Promise.all(
          data.tracks.map(async (track) => {
            return new Promise((resolve) => {
              // Gérer les URLs externes (GitHub releases) et les fichiers locaux
              const audioSrc = track.file.startsWith('http') 
                ? track.file 
                : `${MP3_BASE_URL}${track.file}`
              
              const audio = new Audio(audioSrc)
              audio.addEventListener('loadedmetadata', () => {
                resolve({
                  ...track,
                  duration: audio.duration
                })
              })
              audio.addEventListener('error', () => {
                console.error(`Erreur chargement: ${track.file}`)
                resolve({
                  ...track,
                  duration: 180
                })
              })
            })
          })
        )
        
        setPlaylist(tracksWithDuration)
        
        // Mélanger la playlist avec un seed basé sur la date UTC du jour
        // Ainsi tout le monde a le même ordre chaque jour, mais ça change quotidiennement
        const utcDate = new Date().toISOString().split('T')[0] // YYYY-MM-DD
        const seed = `${selectedRadio.freq}_${selectedRadio.name}_${utcDate}`
        const shuffled = shuffleWithSeed([...tracksWithDuration], seed)
        
        setShuffledPlaylist(shuffled)
        // Utiliser setTimeout pour s'assurer que shuffledPlaylist est bien mis à jour
        setTimeout(() => setPlaylistReady(true), 0)
      } catch (error) {
        console.error('Erreur chargement playlist:', error)
        setPlaylist([])
        setShuffledPlaylist([])
        setPlaylistReady(false)
        setIsLoading(false)
      }
    }
    loadPlaylist()
  }, [selectedRadio])

  // Démarrer la lecture quand la playlist est prête ET qu'on doit jouer
  useEffect(() => {
    // Vérifier que la playlist correspond bien à la radio sélectionnée
    if (!playlistReady || !shouldAutoPlayRef.current || shuffledPlaylist.length === 0) return
    
    // Double vérification : la première piste doit correspondre à cette radio
    const firstTrack = shuffledPlaylist[0]
    if (!firstTrack) return
    
    // Calculer quelle piste devrait jouer maintenant selon l'heure UTC
    const totalDuration = shuffledPlaylist.reduce((acc, track) => acc + track.duration, 0)
    const now = Date.now() / 1000
    const positionInCycle = now % totalDuration
    
    let elapsed = 0
    let trackIndex = 0
    let trackPosition = 0
    
    for (let i = 0; i < shuffledPlaylist.length; i++) {
      if (elapsed + shuffledPlaylist[i].duration > positionInCycle) {
        trackIndex = i
        trackPosition = positionInCycle - elapsed
        break
      }
      elapsed += shuffledPlaylist[i].duration
    }
    
    const track = shuffledPlaylist[trackIndex]
    
    setCurrentTrack(track)
    setCurrentTrackIndex(trackIndex)
    
    if (audioRef.current) {
      // Gérer les URLs externes (GitHub releases) et les fichiers locaux
      const audioSrc = track.file.startsWith('http') 
        ? track.file 
        : `${MP3_BASE_URL}${track.file}`
      
      audioRef.current.src = audioSrc
      audioRef.current.currentTime = trackPosition
      audioRef.current.volume = volume
      audioRef.current.play().catch(e => console.error('Erreur lecture:', e))
      setIsPlaying(true)
      setIsLoading(false)
    }
    
    // Reset le flag pour ne pas rejouer
    shouldAutoPlayRef.current = false
  }, [playlistReady])

  // Passer à la piste suivante quand une piste se termine
  const handleTrackEnded = () => {
    if (shuffledPlaylist.length === 0) return
    
    const nextIndex = (currentTrackIndex + 1) % shuffledPlaylist.length
    const nextTrack = shuffledPlaylist[nextIndex]
    
    setCurrentTrack(nextTrack)
    setCurrentTrackIndex(nextIndex)
    
    if (audioRef.current && isPlaying) {
      // Gérer les URLs externes (GitHub releases) et les fichiers locaux
      const audioSrc = nextTrack.file.startsWith('http') 
        ? nextTrack.file 
        : `${MP3_BASE_URL}${nextTrack.file}`
      
      audioRef.current.src = audioSrc
      audioRef.current.currentTime = 0
      audioRef.current.volume = volume
      audioRef.current.play().catch(e => console.error('Erreur lecture:', e))
    }
  }

  // Mettre à jour le temps actuel
  useEffect(() => {
    if (!isPlaying || !audioRef.current) return

    const updateTime = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime)
        setDuration(audioRef.current.duration)
      }
    }

    const interval = setInterval(updateTime, 100)
    return () => clearInterval(interval)
  }, [isPlaying])

  // Fonction de mélange avec seed
  const shuffleWithSeed = (array, seed) => {
    const seededRandom = (s) => {
      let x = Math.sin(s++) * 10000
      return x - Math.floor(x)
    }
    
    let seedValue = 0
    for (let i = 0; i < seed.length; i++) {
      seedValue += seed.charCodeAt(i)
    }
    
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(seedValue + i) * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  const handleCopyLink = (radio) => {
    const url = `${window.location.origin}${window.location.pathname}#radio?radio=${radio.slug}`
    navigator.clipboard.writeText(url).then(() => {
      setLinkCopied(radio.id)
      setTimeout(() => setLinkCopied(null), 2000)
    })
  }

  const handleSelectRadio = (radio) => {
    // Si c'est la même radio que la dernière cliquée, ne rien faire
    if (lastRadioIdRef.current === radio.id) {
      return
    }
    
    // Arrêter la radio actuelle si elle joue
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    
    // Reset complet et activer le chargement
    setIsPlaying(false)
    setIsLoading(true) // Débuter le chargement
    setCurrentTrack(null)
    setPlaylistReady(false)
    
    // Changer de radio (déclenche le chargement de playlist)
    setSelectedRadio(radio)
    lastRadioIdRef.current = radio.id
    
    // Indiquer qu'on veut auto-play quand la playlist sera prête
    shouldAutoPlayRef.current = true
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      // Si pas de currentTrack, déclencher le chargement/lecture
      if (!currentTrack && selectedRadio) {
        if (playlistReady && shuffledPlaylist.length > 0) {
          // La playlist est déjà chargée, calculer et jouer la piste
          const totalDuration = shuffledPlaylist.reduce((acc, track) => acc + track.duration, 0)
          const now = Date.now() / 1000
          const positionInCycle = now % totalDuration
          
          let elapsed = 0
          let trackIndex = 0
          let trackPosition = 0
          
          for (let i = 0; i < shuffledPlaylist.length; i++) {
            if (elapsed + shuffledPlaylist[i].duration > positionInCycle) {
              trackIndex = i
              trackPosition = positionInCycle - elapsed
              break
            }
            elapsed += shuffledPlaylist[i].duration
          }
          
          const track = shuffledPlaylist[trackIndex]
          setCurrentTrack(track)
          setCurrentTrackIndex(trackIndex)
          
          if (audioRef.current) {
            const audioSrc = track.file.startsWith('http') 
              ? track.file 
              : `${MP3_BASE_URL}${track.file}`
            
            audioRef.current.src = audioSrc
            audioRef.current.currentTime = trackPosition
            audioRef.current.volume = volume
            audioRef.current.play().catch(e => console.error('Erreur lecture:', e))
            setIsPlaying(true)
          }
        } else {
          // La playlist n'est pas encore chargée, attendre
          setIsLoading(true)
          shouldAutoPlayRef.current = true
        }
        return
      }
      
      if (audioRef.current && currentTrack) {
        audioRef.current.volume = volume
        audioRef.current.play().catch(e => console.error('Erreur lecture:', e))
      }
      setIsPlaying(true)
      setIsLoading(false)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    setIsMuted(false)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleMute = () => {
    const newMuted = !isMuted
    setIsMuted(newMuted)
    if (audioRef.current) {
      audioRef.current.muted = newMuted
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden overflow-x-hidden max-w-screen"
      style={{ fontFamily: "'Rajdhani', sans-serif", background: '#0a0000', maxWidth: '100vw', width: '100vw', boxSizing: 'border-box' }}
    >
      {/* Scanlines overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)',
        }}
      />

      {/* Red background glow */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(180,0,0,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-20 h-screen flex flex-col overflow-x-hidden">
        {/* HEADER */}
        <div
          className="border-b px-2 lg:px-8 py-5 flex items-center justify-between flex-shrink-0"
          style={{ borderColor: '#8B0000', background: 'rgba(10,0,0,0.95)' }}
        >
          {!standaloneMode && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 transition-colors duration-200 group lg:w-auto w-8"
            style={{ color: '#2596be' }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:text-white transition-colors" />
            <span className="text-lg font-semibold tracking-widest uppercase hidden lg:inline">Retour</span>
          </button>
          )}
          {standaloneMode && <div className="w-8 lg:w-32" />}

          {/* Logo RADIO */}
          <div className="flex flex-col items-center flex-1 lg:flex-none">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-2 h-2 rounded-full animate-pulse hidden lg:block" style={{ backgroundColor: '#8B0000', boxShadow: '0 0 8px #ff0000' }} />
              <span
                className="text-2xl lg:text-4xl font-bold tracking-widest lg:tracking-[0.25em] uppercase"
                style={{
                  color: '#2596be',
                  textShadow: glitch
                    ? '3px 0 #ff0000, -3px 0 #00ffff'
                    : '0 0 20px rgba(0,180,255,0.8), 0 0 40px rgba(0,180,255,0.3)',
                }}
              >
                RADIO
              </span>
              <div className="w-2 h-2 rounded-full animate-pulse hidden lg:block" style={{ backgroundColor: '#8B0000', boxShadow: '0 0 8px #ff0000', animationDelay: '0.5s' }} />
            </div>
            <div className="text-[0.5rem] lg:text-xs tracking-[0.3em] lg:tracking-[0.5em] mt-1" style={{ color: '#8B0000' }}>
              NIGHT CITY BROADCAST
            </div>
          </div>

          <div className="w-8 lg:w-32" />
        </div>

        <div className="flex flex-col lg:flex-row gap-0 flex-1 min-h-0 overflow-hidden">
          {/* LISTE DES RADIOS - Cachée en mode standalone */}
          {!standaloneMode && (
          <div
            className="lg:w-[420px] lg:border-r flex-shrink-0 flex flex-col overflow-x-hidden overflow-y-hidden h-auto lg:h-full"
            style={{ borderColor: '#3a0000', background: 'rgba(8,0,0,0.97)' }}
          >
            <div className="px-4 lg:px-6 py-4 border-b flex-shrink-0" style={{ borderColor: '#3a0000' }}>
              <div className="text-xs tracking-wider lg:tracking-[0.4em] uppercase font-semibold text-center lg:text-left" style={{ color: '#8B0000' }}>
                — STATIONS DISPONIBLES —
              </div>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[40vh] lg:max-h-none"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#3a0000 transparent'
              }}
            >

            {RADIOS.map((radio, idx) => {
              const isActive = selectedRadio?.id === radio.id
              return (
                <div
                  key={radio.id}
                  onClick={() => handleSelectRadio(radio)}
                  className="w-full px-2 lg:px-6 py-4 border-b transition-all duration-200 relative cursor-pointer"
                  style={{
                    borderColor: '#1a0000',
                    background: isActive
                      ? `linear-gradient(90deg, rgba(0,180,255,0.08) 0%, transparent 100%)`
                      : 'transparent',
                  }}
                >
                  {/* Bordure gauche active */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-200"
                    style={{
                      background: isActive ? '#2596be' : 'transparent',
                      boxShadow: isActive ? '0 0 12px #2596be' : 'none'
                    }}
                  />

                  <div className="flex items-center gap-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                      <img
                        src={radio.logo}
                        alt={radio.name}
                        className="w-16 h-16 object-contain rounded-sm"
                        style={{
                          filter: isActive ? 'brightness(1.1)' : 'brightness(0.6)',
                          border: isActive ? `2px solid ${radio.color}40` : '2px solid transparent'
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-lg font-bold tracking-widest"
                          style={{ color: isActive ? radio.color : '#8B0000' }}
                        >
                          {radio.freq} FM
                        </span>
                        {isActive && isPlaying && (
                          <span className="text-sm animate-pulse" style={{ color: '#00FF88' }}>
                            ◉
                          </span>
                        )}
                      </div>
                      <div
                        className="text-base font-bold tracking-wider truncate transition-colors duration-200"
                        style={{
                          color: isActive ? '#ffffff' : '#aaaaaa',
                          textShadow: isActive ? `0 0 15px ${radio.color}60` : 'none'
                        }}
                      >
                        {radio.name}
                      </div>
                    </div>

                    {/* Indicateur / Bouton Play / Bouton Link */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                      {isActive && isPlaying ? (
                        <>
                          <ScanBar active={true} color={radio.color} />
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              handlePlayPause()
                            }}
                            className="w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer"
                            style={{
                              borderColor: radio.color,
                              background: `${radio.color}20`,
                              color: radio.color
                            }}
                          >
                            <Pause className="w-4 h-4" />
                          </button>
                        </>
                      ) : isActive && isLoading ? (
                        <div
                          className="w-8 h-8 rounded-sm flex items-center justify-center border"
                          style={{
                            borderColor: radio.color,
                            background: 'transparent',
                            color: radio.color
                          }}
                        >
                          <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: radio.color, borderTopColor: 'transparent' }} />
                        </div>
                      ) : isActive ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handlePlayPause()
                          }}
                          className="w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer"
                          style={{
                            borderColor: radio.color,
                            background: 'transparent',
                            color: radio.color
                          }}
                        >
                          <Play className="w-4 h-4 ml-0.5" />
                        </button>
                      ) : (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleSelectRadio(radio)
                          }}
                          className="w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer"
                          style={{
                            borderColor: radio.color,
                            background: 'transparent',
                            color: radio.color,
                            opacity: 0.6
                          }}
                        >
                          <Play className="w-4 h-4 ml-0.5" />
                        </button>
                      )}
                      
                      {/* Bouton copier lien */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCopyLink(radio)
                        }}
                        className="w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer relative"
                        style={{
                          borderColor: radio.color,
                          background: 'transparent',
                          color: radio.color,
                          opacity: isActive ? 1 : 0.6
                        }}
                        title="Copier le lien direct"
                      >
                        <Link className="w-4 h-4" />
                        {linkCopied === radio.id && (
                          <span 
                            className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                            style={{ color: radio.color }}
                          >
                            Copié !
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
            </div>
          </div>
          )}

          {/* PANNEAU PRINCIPAL */}
          <div className="flex-1 flex items-center justify-center overflow-y-auto overflow-x-hidden p-2 lg:p-8">
            {selectedRadio ? (
              <div className="flex flex-col items-center gap-4 lg:gap-8 w-full max-w-full lg:max-w-xl py-4 lg:py-0">
                {/* Logo de la station - Caché en mode normal mobile */}
                {(standaloneMode || window.innerWidth >= 1024) && (
                <div className="flex items-center justify-center flex-shrink-0">
                  <img
                    src={selectedRadio.logo}
                    alt={selectedRadio.name}
                    className="w-48 h-48 lg:w-80 lg:h-80 object-contain"
                    style={{
                      filter: 'brightness(1.2) drop-shadow(0 0 30px rgba(37, 150, 190, 0.5))'
                    }}
                  />
                </div>
                )}

                {/* Nom + Fréquence */}
                <div className="text-center flex-shrink-0 px-2 max-w-full">
                  <h2
                    className="text-2xl lg:text-5xl font-bold tracking-wide lg:tracking-widest uppercase mb-2 truncate"
                    style={{
                      color: selectedRadio.color,
                    textShadow: `0 0 30px ${selectedRadio.color}80, 0 0 60px ${selectedRadio.color}30`
                  }}
                >
                  {selectedRadio.name}
                </h2>
                <div className="text-xl lg:text-2xl font-bold tracking-wide lg:tracking-widest" style={{ color: '#2596be' }}>
                  {selectedRadio.freq} FM
                </div>
              </div>

              {/* Bouton Play/Pause central - Uniquement en mode standalone */}
              {standaloneMode && (
              <div className="flex justify-center">
                {isLoading ? (
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                    style={{
                      borderColor: selectedRadio.color,
                      background: 'transparent'
                    }}
                  >
                    <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: selectedRadio.color, borderTopColor: 'transparent' }} />
                  </div>
                ) : (
                  <button
                    onClick={handlePlayPause}
                    className="w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-200 hover:scale-110"
                    style={{
                      borderColor: selectedRadio.color,
                      background: isPlaying ? `${selectedRadio.color}20` : 'transparent',
                      color: selectedRadio.color
                    }}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </button>
                )}
              </div>
              )}

              {/* Titre en cours */}
              {isPlaying && currentTrack ? (
                <div className="text-center flex-shrink-0 px-2 max-w-full">
                  <div className="text-xs tracking-wider lg:tracking-[0.5em] mb-2" style={{ color: '#8B0000' }}>
                    EN LECTURE
                  </div>
                  <div className="text-base lg:text-xl font-bold tracking-wide lg:tracking-wider mb-1 truncate" style={{ color: '#ffffff' }}>
                    {currentTrack.name}
                  </div>
                  <div className="text-sm tracking-wide lg:tracking-widest truncate" style={{ color: '#2596be' }}>
                    {currentTrack.artist}
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="text-xs font-mono" style={{ color: '#2596be' }}>
                      {formatTime(currentTime)}
                    </span>
                    <span className="text-xs" style={{ color: '#555555' }}>/</span>
                    <span className="text-xs font-mono" style={{ color: '#555555' }}>
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 flex-shrink-0">
                  <div className="text-sm tracking-widest" style={{ color: '#555555' }}>
                    {isPlaying ? 'CHARGEMENT...' : 'APPUYEZ SUR PLAY'}
                  </div>
                </div>
              )}

              {/* Contrôles - Volume uniquement - Caché sur mobile */}
              <div className="hidden lg:flex flex-col items-center gap-6 w-full max-w-sm flex-shrink-0">
                {/* Volume */}
                <div 
                  className="w-full px-6 py-4 rounded-sm border"
                  style={{
                    borderColor: `${selectedRadio.color}30`,
                    background: 'rgba(0,0,0,0.3)'
                  }}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleMute}
                      className="transition-all duration-200 hover:scale-110"
                      style={{ color: isMuted ? '#555555' : selectedRadio.color }}
                    >
                      {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                    </button>
                    
                    <div className="flex-1 relative">
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, ${selectedRadio.color} 0%, ${selectedRadio.color} ${volume * 100}%, #1a0000 ${volume * 100}%, #1a0000 100%)`,
                          accentColor: selectedRadio.color
                        }}
                      />
                    </div>

                    <span className="text-xs font-bold tracking-wider min-w-[3ch]" style={{ color: selectedRadio.color }}>
                      {Math.round(volume * 100)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            ) : (
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="text-2xl font-bold tracking-widest" style={{ color: '#8B0000' }}>
                  SÉLECTIONNEZ UNE RADIO
                </div>
                <div className="text-sm tracking-wider" style={{ color: '#555555' }}>
                  Cliquez sur une station dans la liste pour commencer
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        onEnded={handleTrackEnded}
      />

      <style>{`
        @keyframes barPulse {
          from { transform: scaleY(0.5); }
          to { transform: scaleY(1); }
        }

        /* Scrollbar personnalisée Cyberpunk */
        .flex-1.overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .flex-1.overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(26, 0, 0, 0.5);
        }
        .flex-1.overflow-y-auto::-webkit-scrollbar-thumb {
          background: #3a0000;
          border-radius: 4px;
        }
        .flex-1.overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #8B0000;
        }
      `}</style>
    </div>
  )
}

export default Radio
