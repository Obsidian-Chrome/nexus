import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, Play, Pause, Square, Volume2, Upload, Download, Settings, Save, FolderOpen } from 'lucide-react'

const LyricsSyncer = () => {
  const [lyrics, setLyrics] = useState('')
  const [parsedLines, setParsedLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [timestamps, setTimestamps] = useState([])
  const [audioFile, setAudioFile] = useState(null)
  const [audioUrl, setAudioUrl] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [addMusicNote, setAddMusicNote] = useState(true)
  const [exportMode, setExportMode] = useState('stanza') // 'line', 'stanza', 'dynamic', 'custom'
  const [customSeparators, setCustomSeparators] = useState([]) // Indices des séparateurs
  const [selectedSeparators, setSelectedSeparators] = useState([]) // Séparateurs sélectionnés
  const [showCustomModal, setShowCustomModal] = useState(false)
  const [songTitle, setSongTitle] = useState('')
  const [customCommand, setCustomCommand] = useState('')
  const [editingLineIndex, setEditingLineIndex] = useState(null)
  const [isDraggingAudio, setIsDraggingAudio] = useState(false)
  const [isDraggingLyrics, setIsDraggingLyrics] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  
  const audioRef = useRef(null)
  const fileInputRef = useRef(null)
  const dropZoneRef = useRef(null)
  const lyricsDropZoneRef = useRef(null)
  const jsonInputRef = useRef(null)

  // Parse les lyrics en lignes (garde les lignes vides pour détecter les strophes)
  useEffect(() => {
    if (lyrics) {
      const lines = lyrics.split('\n')
      setParsedLines(lines)
      setTimestamps(new Array(lines.length).fill(null))
      // Trouver la première ligne qui n'est pas un /echo et qui n'est pas vide
      const firstNonEchoIndex = lines.findIndex(line => line.trim() !== '' && !isEchoLine(line))
      setCurrentLineIndex(firstNonEchoIndex >= 0 ? firstNonEchoIndex : 0)
    } else {
      setParsedLines([])
      setTimestamps([])
      setCurrentLineIndex(0)
    }
  }, [lyrics])

  // Gestion de l'audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => setIsPlaying(false)

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [audioUrl])

  // Gestion du clavier (Espace pour caler/recaler)
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ignorer si l'utilisateur tape dans un input ou textarea
      const target = e.target
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return
      }
      
      if (e.code === 'Space' && audioRef.current && parsedLines.length > 0) {
        e.preventDefault()
        if (editingLineIndex !== null) {
          recalibrateCurrentLine()
        } else {
          handleTimestamp()
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentLineIndex, parsedLines, currentTime, editingLineIndex])

  // Gestion de la prévisualisation - afficher la ligne correspondant au temps actuel
  useEffect(() => {
    if (showPreview && isPlaying && audioRef.current) {
      // Trouver la ligne qui devrait être affichée selon le temps actuel
      let displayLineIndex = 0
      for (let i = parsedLines.length - 1; i >= 0; i--) {
        if (!isEchoLine(parsedLines[i]) && timestamps[i] !== null && timestamps[i] <= currentTime) {
          displayLineIndex = i
          break
        }
      }
      // Ne pas changer currentLineIndex si on est en mode édition
      if (editingLineIndex === null) {
        setCurrentLineIndex(displayLineIndex)
      }
    }
  }, [showPreview, isPlaying, currentTime, timestamps, parsedLines, editingLineIndex])

  const handleAudioUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      loadAudioFile(file)
    }
  }

  const loadAudioFile = (file) => {
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file)
      const url = URL.createObjectURL(file)
      setAudioUrl(url)
      setCurrentTime(0)
      setIsPlaying(false)
      
      // Extraire le nom du fichier sans extension et le mettre comme titre par défaut
      if (!songTitle.trim()) {
        const fileName = file.name.replace(/\.[^/.]+$/, '') // Retire l'extension
        setSongTitle(fileName)
      }
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingAudio(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingAudio(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingAudio(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('audio/')) {
        loadAudioFile(file)
      }
    }
  }

  const handleLyricsDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingLyrics(true)
  }

  const handleLyricsDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingLyrics(false)
  }

  const handleLyricsDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDraggingLyrics(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      
      // Charger un fichier JSON (projet sauvegardé)
      if (file.type === 'application/json' || file.name.endsWith('.json')) {
        const reader = new FileReader()
        reader.onload = (event) => {
          try {
            const projectData = JSON.parse(event.target.result)
            
            // Restaurer toutes les données
            if (projectData.songTitle) setSongTitle(projectData.songTitle)
            if (projectData.customCommand) setCustomCommand(projectData.customCommand)
            if (projectData.lyrics) setLyrics(projectData.lyrics)
            if (projectData.timestamps) setTimestamps(projectData.timestamps)
            if (typeof projectData.currentLineIndex !== 'undefined') {
              setCurrentLineIndex(projectData.currentLineIndex)
            }
            if (projectData.options) {
              if (typeof projectData.options.addMusicNote !== 'undefined') {
                setAddMusicNote(projectData.options.addMusicNote)
              }
              if (typeof projectData.options.exportMode !== 'undefined') {
                setExportMode(projectData.options.exportMode)
              }
              // Rétrocompatibilité avec les anciens fichiers
              else if (typeof projectData.options.exportByStanza !== 'undefined') {
                setExportMode(projectData.options.exportByStanza ? 'stanza' : 'line')
              }
              if (typeof projectData.options.customSeparators !== 'undefined') {
                setCustomSeparators(projectData.options.customSeparators)
              }
            }

            // Réinitialiser l'état
            setEditingLineIndex(null)
            setShowPreview(false)
            setIsPlaying(false)
            if (audioRef.current) {
              audioRef.current.pause()
              audioRef.current.currentTime = 0
            }
          } catch (error) {
            console.error('Erreur lors du chargement du projet:', error)
          }
        }
        reader.readAsText(file)
      }
      // Charger un fichier texte (paroles uniquement)
      else if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader()
        reader.onload = (event) => {
          setLyrics(event.target.result)
        }
        reader.readAsText(file)
      }
    }
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }

  const handleTimestamp = () => {
    if (currentLineIndex < parsedLines.length && audioRef.current) {
      const newTimestamps = [...timestamps]
      newTimestamps[currentLineIndex] = audioRef.current.currentTime
      setTimestamps(newTimestamps)
      
      // Trouver la prochaine ligne qui n'est pas un /echo
      let nextIndex = currentLineIndex + 1
      while (nextIndex < parsedLines.length && isEchoLine(parsedLines[nextIndex])) {
        nextIndex++
      }
      setCurrentLineIndex(nextIndex)
    }
  }

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const cleanLine = (line) => {
    return line.trim()
  }

  const isEchoLine = (line) => {
    // Une ligne est un /echo si elle commence par [ ou (, ou si elle est vide (séparateur de strophe)
    const trimmed = line.trim()
    return trimmed === '' || trimmed.startsWith('[') || trimmed.startsWith('(')
  }

  const isEmptyLine = (line) => {
    return line.trim() === ''
  }

  // Trouver la ligne précédente non-vide pour le carousel
  const getPreviousVisibleLine = (index) => {
    for (let i = index - 1; i >= 0; i--) {
      if (!isEmptyLine(parsedLines[i])) {
        return { index: i, text: parsedLines[i] }
      }
    }
    return null
  }

  // Trouver la ligne suivante non-vide pour le carousel
  const getNextVisibleLine = (index) => {
    for (let i = index + 1; i < parsedLines.length; i++) {
      if (!isEmptyLine(parsedLines[i])) {
        return { index: i, text: parsedLines[i] }
      }
    }
    return null
  }

  const exportMacro = () => {
    if (parsedLines.length === 0) return

    let output = []
    
    // Trouver le timestamp de la première ligne calée
    const firstTimestamp = timestamps.find(t => t !== null)
    
    // Titre avec wait jusqu'à la première phrase
    if (songTitle.trim()) {
      let titleLine = `/echo ${songTitle.trim()}`
      if (firstTimestamp !== null && firstTimestamp > 0) {
        const waitTime = Math.round(firstTimestamp)
        titleLine += ` <wait.${waitTime}>`
      }
      output.push(titleLine)
    }

    // Commande personnalisée (ex: /hum motion)
    if (customCommand.trim()) {
      output.push(customCommand.trim())
    }

    if (exportMode === 'stanza' || exportMode === 'dynamic' || exportMode === 'custom') {
      // Export par strophe
      let currentStanza = []
      let stanzaStartTime = null
      
      // Fonction pour joindre intelligemment les lignes
      const joinStanzaLines = (lines) => {
        return lines.map((line, index) => {
          // Si c'est la dernière ligne, ne rien ajouter
          if (index === lines.length - 1) return line
          
          // Si la ligne se termine déjà par une ponctuation, ne pas ajouter de point
          const lastChar = line.trim().slice(-1)
          if (['.', '?', '!', ',', ';', ':'].includes(lastChar)) {
            return line
          }
          
          // Sinon, ajouter un point
          return line + '.'
        }).join(' ')
      }
      
      for (let i = 0; i < parsedLines.length; i++) {
        const line = parsedLines[i]
        const timestamp = timestamps[i]
        
        // Mode personnalisé : vérifier si on doit couper ici
        const shouldSplitCustom = exportMode === 'custom' && customSeparators.includes(i - 1)
        
        if (isEchoLine(line) || shouldSplitCustom) {
          // Si on a une strophe en cours, on l'exporte
          if (currentStanza.length > 0) {
            const stanzaText = joinStanzaLines(currentStanza)
            let stanzaLine = `/y ${stanzaText}`
            if (addMusicNote) stanzaLine += ' ♪'
            
            // Calculer le wait jusqu'à la prochaine strophe
            if (stanzaStartTime !== null) {
              let nextStanzaTime = null
              for (let j = i + 1; j < parsedLines.length; j++) {
                if (!isEchoLine(parsedLines[j]) && timestamps[j] !== null) {
                  nextStanzaTime = timestamps[j]
                  break
                }
              }
              if (nextStanzaTime !== null) {
                const waitTime = Math.round(nextStanzaTime - stanzaStartTime)
                stanzaLine += ` <wait.${waitTime}>`
              }
            }
            
            output.push(stanzaLine)
            currentStanza = []
            stanzaStartTime = null
          }
          
          // Ajouter la ligne echo SEULEMENT si elle n'est pas vide ET si ce n'est pas juste un séparateur custom
          if (!shouldSplitCustom) {
            const cleanedLine = cleanLine(line)
            if (cleanedLine !== '') {
              output.push(`/echo ${cleanedLine}`)
            }
          }
        } else {
          // Ajouter la ligne à la strophe actuelle
          if (stanzaStartTime === null && timestamp !== null) {
            stanzaStartTime = timestamp
          }
          currentStanza.push(cleanLine(line))
          
          // Mode dynamique : découper à la moitié de la strophe
          const shouldSplitDynamic = exportMode === 'dynamic' && currentStanza.length >= 2
          
          if (shouldSplitDynamic) {
            const stanzaText = joinStanzaLines(currentStanza)
            let stanzaLine = `/y ${stanzaText}`
            if (addMusicNote) stanzaLine += ' ♪'
            
            // Calculer le wait jusqu'à la prochaine ligne non-echo
            if (stanzaStartTime !== null) {
              let nextStanzaTime = null
              for (let j = i + 1; j < parsedLines.length; j++) {
                if (!isEchoLine(parsedLines[j]) && timestamps[j] !== null) {
                  nextStanzaTime = timestamps[j]
                  break
                }
              }
              if (nextStanzaTime !== null) {
                const waitTime = Math.round(nextStanzaTime - stanzaStartTime)
                stanzaLine += ` <wait.${waitTime}>`
              }
            }
            
            output.push(stanzaLine)
            currentStanza = []
            stanzaStartTime = null
          }
        }
      }
      
      // Exporter la dernière strophe si elle existe
      if (currentStanza.length > 0) {
        const stanzaText = joinStanzaLines(currentStanza)
        let stanzaLine = `/y ${stanzaText}`
        if (addMusicNote) stanzaLine += ' ♪'
        output.push(stanzaLine)
      }
    } else {
      // Export par phrase (comportement original)
      for (let i = 0; i < parsedLines.length; i++) {
        const line = parsedLines[i]
        const timestamp = timestamps[i]
        
        if (isEchoLine(line)) {
          // Ajouter la ligne echo SEULEMENT si elle n'est pas vide
          const cleanedLine = cleanLine(line)
          if (cleanedLine !== '') {
            output.push(`/echo ${cleanedLine}`)
          }
        } else {
          let lyricLine = `/y ${cleanLine(line)}`
          
          if (addMusicNote) {
            lyricLine += ' ♪'
          }
          
          if (timestamp !== null) {
            let nextTimestampIndex = i + 1
            while (nextTimestampIndex < parsedLines.length) {
              if (!isEchoLine(parsedLines[nextTimestampIndex]) && timestamps[nextTimestampIndex] !== null) {
                const waitTime = Math.round(timestamps[nextTimestampIndex] - timestamp)
                lyricLine += ` <wait.${waitTime}>`
                break
              }
              nextTimestampIndex++
            }
          }
          
          output.push(lyricLine)
        }
      }
    }

    // Créer un fichier téléchargeable
    const blob = new Blob([output.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    // Nettoyer le nom de fichier : remplacer espaces par tirets et retirer caractères invalides
    const modeSuffix = exportMode === 'line' ? '_ligne' : exportMode === 'stanza' ? '_strophe' : exportMode === 'dynamic' ? '_dynamique' : '_personnalise'
    const cleanFileName = songTitle.trim() 
      ? `${songTitle.trim().replace(/\s+/g, '-').replace(/[<>:"/\\|?*]/g, '_')}${modeSuffix}.txt` 
      : `lyrics_macro${modeSuffix}.txt`
    a.download = cleanFileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const resetAll = () => {
    setTimestamps(new Array(parsedLines.length).fill(null))
    // Trouver la première ligne qui n'est pas un /echo
    const firstNonEchoIndex = parsedLines.findIndex(line => !isEchoLine(line))
    setCurrentLineIndex(firstNonEchoIndex >= 0 ? firstNonEchoIndex : 0)
    setEditingLineIndex(null)
    handleStop()
  }

  const handleLineClick = (index) => {
    // Ne permet de recaler que les lignes qui ne sont pas des /echo
    if (!isEchoLine(parsedLines[index])) {
      setEditingLineIndex(index)
      setCurrentLineIndex(index)
    }
  }

  const recalibrateCurrentLine = () => {
    if (audioRef.current && currentLineIndex < parsedLines.length) {
      const newTimestamps = [...timestamps]
      newTimestamps[currentLineIndex] = audioRef.current.currentTime
      setTimestamps(newTimestamps)
      setEditingLineIndex(null)
      
      // Trouver la prochaine ligne qui n'est pas un /echo
      let nextIndex = currentLineIndex + 1
      while (nextIndex < parsedLines.length && isEchoLine(parsedLines[nextIndex])) {
        nextIndex++
      }
      setCurrentLineIndex(nextIndex)
    }
  }

  const clearLineTimestamp = (index) => {
    const newTimestamps = [...timestamps]
    newTimestamps[index] = null
    setTimestamps(newTimestamps)
  }

  // Sauvegarder le projet en JSON
  const saveProject = () => {
    const projectData = {
      version: '1.0',
      songTitle,
      customCommand,
      lyrics,
      timestamps,
      currentLineIndex,
      options: {
        addMusicNote,
        exportMode,
        customSeparators
      },
      metadata: {
        savedAt: new Date().toISOString(),
        linesCount: parsedLines.filter(line => !isEmptyLine(line)).length,
        calibratedCount: timestamps.filter(t => t !== null).length
      }
    }

    const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    const fileName = songTitle.trim() 
      ? `${songTitle.trim().replace(/\s+/g, '-').replace(/[<>:"/\\|?*]/g, '_')}-project.json`
      : 'lyrics-project.json'
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Charger un projet depuis JSON
  const loadProject = (e) => {
    const file = e.target.files[0]
    if (file && file.type === 'application/json') {
      const reader = new FileReader()
      reader.onload = (event) => {
        try {
          const projectData = JSON.parse(event.target.result)
          
          // Restaurer toutes les données
          if (projectData.songTitle) setSongTitle(projectData.songTitle)
          if (projectData.customCommand) setCustomCommand(projectData.customCommand)
          if (projectData.lyrics) setLyrics(projectData.lyrics)
          if (projectData.timestamps) setTimestamps(projectData.timestamps)
          if (typeof projectData.currentLineIndex !== 'undefined') {
            setCurrentLineIndex(projectData.currentLineIndex)
          }
          if (projectData.options) {
            if (typeof projectData.options.addMusicNote !== 'undefined') {
              setAddMusicNote(projectData.options.addMusicNote)
            }
            if (typeof projectData.options.exportMode !== 'undefined') {
              setExportMode(projectData.options.exportMode)
            }
            // Rétrocompatibilité avec les anciens fichiers
            else if (typeof projectData.options.exportByStanza !== 'undefined') {
              setExportMode(projectData.options.exportByStanza ? 'stanza' : 'line')
            }
            if (typeof projectData.options.customSeparators !== 'undefined') {
              setCustomSeparators(projectData.options.customSeparators)
            }
          }

          // Réinitialiser l'état
          setEditingLineIndex(null)
          setShowPreview(false)
          setIsPlaying(false)
          if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.currentTime = 0
          }

          // Message de succès (optionnel)
          console.log('Projet chargé avec succès:', projectData.metadata)
        } catch (error) {
          console.error('Erreur lors du chargement du projet:', error)
          alert('Erreur lors du chargement du fichier JSON')
        }
      }
      reader.readAsText(file)
    }
  }

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col">
      <div className="flex-grow p-8">
        <div className="max-w-[1800px] mx-auto">
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </button>

          <header className="mb-8 text-center">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">
              MACRO SYNC
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Synchronisez vos paroles avec la musique et exportez en macro FFXIV
            </p>
            <div className="bg-blue-500/10 border border-blue-500/30 rounded px-4 py-3 max-w-2xl mx-auto">
              <p className="text-blue-300 text-xs">
                Nécessite le plugin{' '}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    navigator.clipboard.writeText('https://puni.sh/api/repository/croizat')
                  }}
                  className="inline-flex items-center px-2 py-0.5 bg-blue-500/20 border border-blue-500/40 rounded text-blue-200 hover:bg-blue-500/30 hover:border-blue-500/60 transition-all font-semibold"
                >
                  SomethingNeedDoing
                </button>
                {' '}pour des macros étendues • Cliquez pour copier le repo
              </p>
            </div>
          </header>

          {/* Titre de la chanson et commande personnalisée */}
          <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Titre de la chanson"
              value={songTitle}
              onChange={(e) => setSongTitle(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <input
              type="text"
              placeholder="Commande personnalisée (ex: /hum motion)"
              value={customCommand}
              onChange={(e) => setCustomCommand(e.target.value)}
              className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* GAUCHE - Zone de texte des lyrics */}
            <div className="lg:col-span-3 flex flex-col gap-4 h-[600px]">
              <div 
                ref={lyricsDropZoneRef}
                onDragOver={handleLyricsDragOver}
                onDragLeave={handleLyricsDragLeave}
                onDrop={handleLyricsDrop}
                className={`bg-zinc-900/50 border p-4 flex-1 flex flex-col transition-all ${
                  isDraggingLyrics
                    ? 'border-cyan-400 border-2 bg-cyan-500/10'
                    : 'border-zinc-800'
                }`}
              >
                <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                  Lyrics {isDraggingLyrics && <span className="text-cyan-400">• Déposez le fichier</span>}
                </h2>
                <textarea
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  placeholder="Collez les lyrics ici..."
                  className="flex-1 bg-zinc-800/50 border border-zinc-700 text-white p-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none font-mono"
                />
                <div className="mt-3 text-xs text-gray-500">
                  {parsedLines.filter(line => !isEmptyLine(line)).length} ligne{parsedLines.filter(line => !isEmptyLine(line)).length > 1 ? 's' : ''} ({parsedLines.filter(line => !isEchoLine(line)).length} à caler) • {timestamps.filter(t => t !== null).length} calée{timestamps.filter(t => t !== null).length > 1 ? 's' : ''}
                </div>
              </div>

              {/* Upload audio */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-4">
                <h2 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Musique</h2>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleAudioUpload}
                  accept="audio/*"
                  className="hidden"
                />
                <div
                  ref={dropZoneRef}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full px-4 py-3 transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isDraggingAudio
                      ? 'bg-cyan-500/40 border-2 border-cyan-400 text-cyan-200 scale-105'
                      : 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30'
                  }`}
                >
                  <Upload className="w-4 h-4" />
                  <span>
                    {isDraggingAudio
                      ? 'Déposez le fichier ici'
                      : audioFile
                      ? audioFile.name
                      : 'Cliquez ou glissez un fichier audio'}
                  </span>
                </div>
              </div>
            </div>

            {/* CENTRE - Player et ligne actuelle */}
            <div className="lg:col-span-6">
              <div className="bg-zinc-900/50 border border-zinc-800 p-6 h-[600px] flex flex-col">
                {/* Carousel de lignes */}
                <div className="flex-1 flex items-center justify-center mb-6 overflow-hidden relative" style={{ perspective: '1000px' }}>
                  {parsedLines.length > 0 && currentLineIndex < parsedLines.length ? (
                    <div className="w-full max-w-3xl relative h-64 flex items-center justify-center">
                      {/* Ligne précédente (non-vide) */}
                      {(() => {
                        const prevLine = getPreviousVisibleLine(currentLineIndex)
                        return prevLine && (
                          <div 
                            className="absolute text-gray-600 text-xl font-light opacity-40 transition-all duration-500"
                            style={{ 
                              transform: 'translateY(-80px) rotateX(15deg) scale(0.8)',
                              transformOrigin: 'center bottom'
                            }}
                          >
                            {prevLine.text}
                          </div>
                        )
                      })()}
                      
                      {/* Ligne actuelle */}
                      <div className="absolute w-full text-center transition-all duration-500">
                        <div className="text-gray-500 text-sm mb-3">
                          {showPreview ? (
                            <span className="text-purple-400">🎵 MODE PRÉVISUALISATION</span>
                          ) : (
                            <>
                              Ligne {currentLineIndex + 1} / {parsedLines.length}
                              {editingLineIndex !== null && (
                                <span className="ml-2 text-orange-400">• MODE ÉDITION</span>
                              )}
                            </>
                          )}
                        </div>
                        <div className="text-white text-3xl font-light leading-relaxed px-8">
                          {parsedLines[currentLineIndex]}
                        </div>
                        {!showPreview && (
                          <>
                            <div className="mt-4 text-cyan-400 text-sm">
                              {editingLineIndex !== null ? (
                                <>
                                  <span className="text-orange-400">🔄 Recalage</span> - Appuyez sur ESPACE au bon moment
                                </>
                              ) : (
                                '/y - Appuyez sur ESPACE pour caler'
                              )}
                            </div>
                            {timestamps[currentLineIndex] !== null && (
                              <div className="mt-2 text-gray-500 text-xs">
                                Actuellement calé à {formatTime(timestamps[currentLineIndex])}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                      
                      {/* Ligne suivante (non-vide) */}
                      {(() => {
                        const nextLine = getNextVisibleLine(currentLineIndex)
                        return nextLine && (
                          <div 
                            className="absolute text-gray-600 text-xl font-light opacity-40 transition-all duration-500"
                            style={{ 
                              transform: 'translateY(80px) rotateX(-15deg) scale(0.8)',
                              transformOrigin: 'center top'
                            }}
                          >
                            {nextLine.text}
                          </div>
                        )
                      })()}
                    </div>
                  ) : currentLineIndex >= parsedLines.length && parsedLines.length > 0 ? (
                    <div className="text-green-400 text-2xl">
                      ✓ Toutes les lignes sont calées !
                    </div>
                  ) : (
                    <div className="text-gray-500 text-xl">
                      Collez vos paroles à gauche pour commencer
                    </div>
                  )}
                </div>

                {/* Player audio */}
                {audioUrl && (
                  <div className="bg-zinc-800/50 border border-zinc-700 p-6">
                    <audio ref={audioRef} src={audioUrl} />
                    
                    {/* Timeline */}
                    <div className="mb-4">
                      <input
                        type="range"
                        min="0"
                        max={duration || 0}
                        value={currentTime}
                        onChange={(e) => {
                          if (audioRef.current) {
                            audioRef.current.currentTime = parseFloat(e.target.value)
                          }
                        }}
                        className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                      </div>
                    </div>

                    {/* Contrôles */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <button
                        onClick={togglePlay}
                        className="bg-cyan-500 text-black p-3 hover:bg-cyan-400 transition-colors"
                        disabled={!audioUrl}
                      >
                        {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                      </button>
                      <button
                        onClick={handleStop}
                        className="bg-zinc-700 text-white p-3 hover:bg-zinc-600 transition-colors"
                        disabled={!audioUrl}
                      >
                        <Square className="w-6 h-6" />
                      </button>
                      <div className="flex items-center gap-2 ml-4">
                        <Volume2 className="w-5 h-5 text-gray-400" />
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.01"
                          value={volume}
                          onChange={(e) => setVolume(parseFloat(e.target.value))}
                          className="w-24 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                        />
                      </div>
                    </div>

                    {/* Bouton de calage/recalage */}
                    {!showPreview && (
                      <button
                        onClick={editingLineIndex !== null ? recalibrateCurrentLine : handleTimestamp}
                        disabled={currentLineIndex >= parsedLines.length || !audioUrl}
                        className={`w-full border-2 px-6 py-4 hover:border-cyan-500/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-semibold ${
                          editingLineIndex !== null
                            ? 'bg-orange-500/20 border-orange-500/40 text-orange-300 hover:bg-orange-500/30'
                            : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30'
                        }`}
                      >
                        {editingLineIndex !== null ? '🔄 RECALER LA LIGNE (ESPACE)' : 'CALER LA LIGNE (ESPACE)'}
                      </button>
                    )}
                    
                    {editingLineIndex !== null && (
                      <button
                        onClick={() => {
                          setEditingLineIndex(null)
                          // Retourner à la prochaine ligne non calée
                          const nextUncalibratedIndex = timestamps.findIndex((t, i) => t === null && !isEchoLine(parsedLines[i]))
                          if (nextUncalibratedIndex >= 0) {
                            setCurrentLineIndex(nextUncalibratedIndex)
                          }
                        }}
                        className="w-full bg-zinc-700/50 border border-zinc-600 text-gray-300 px-4 py-2 hover:bg-zinc-600/50 transition-colors text-sm"
                      >
                        Annuler l'édition
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* DROITE - Options et export */}
            <div className="lg:col-span-3 flex flex-col gap-4 h-[600px]">
              <div className="bg-zinc-900/50 border border-zinc-800 p-4">
                <h2 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Options
                </h2>
                
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={addMusicNote}
                      onChange={(e) => setAddMusicNote(e.target.checked)}
                      className="w-4 h-4 accent-cyan-500"
                    />
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                      Ajouter ♪ aux phrases
                    </span>
                  </label>

                  <div>
                    <label className="block text-gray-300 text-sm mb-2">
                      Mode d'export
                    </label>
                    <select
                      value={exportMode}
                      onChange={(e) => setExportMode(e.target.value)}
                      className="w-full bg-zinc-800 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
                    >
                      <option value="line">Ligne par ligne</option>
                      <option value="stanza">Strophe par strophe</option>
                      <option value="dynamic">Dynamique (demi-strophe)</option>
                      <option value="custom">Personnalisé</option>
                    </select>
                    <p className="text-gray-500 text-xs mt-1">
                      {exportMode === 'line' && 'Chaque ligne = une macro'}
                      {exportMode === 'stanza' && 'Regroupe les strophes complètes'}
                      {exportMode === 'dynamic' && 'Découpe les strophes en 2 lignes'}
                      {exportMode === 'custom' && 'Définissez vos propres groupes'}
                    </p>
                    {exportMode === 'custom' && (
                      <button
                        onClick={() => setShowCustomModal(true)}
                        className="w-full mt-2 bg-purple-500/20 border border-purple-500/40 text-purple-300 px-3 py-2 hover:bg-purple-500/30 transition-colors text-sm flex items-center justify-center gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Configurer les groupes
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Aperçu */}
              <div className="bg-zinc-900/50 border border-zinc-800 p-4 flex-1 overflow-y-auto flex flex-col">
                <div className="flex-shrink-0">
                  <h2 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Aperçu</h2>
                  <p className="text-gray-500 text-[10px] mb-3">Cliquez sur une ligne pour la recaler • Survolez pour effacer</p>
                </div>
                <div className="space-y-1 text-xs font-mono flex-1 overflow-y-auto">
                  {parsedLines.map((line, index) => {
                    const timestamp = timestamps[index]
                    const isEcho = isEchoLine(line)
                    const cleaned = cleanLine(line)
                    
                    // Ne pas afficher les lignes vides dans l'aperçu
                    if (isEmptyLine(line)) {
                      return null
                    }
                    
                    // Calculer le wait pour les lignes non-echo
                    let waitDisplay = null
                    if (!isEcho && timestamp !== null) {
                      let nextTimestampIndex = index + 1
                      while (nextTimestampIndex < parsedLines.length) {
                        if (!isEchoLine(parsedLines[nextTimestampIndex]) && timestamps[nextTimestampIndex] !== null) {
                          const waitTime = Math.round(timestamps[nextTimestampIndex] - timestamp)
                          waitDisplay = waitTime
                          break
                        }
                        nextTimestampIndex++
                      }
                    }
                    
                    return (
                      <div
                        key={index}
                        className={`group flex items-center justify-between gap-2 ${
                          index === currentLineIndex
                            ? 'text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-500 pl-2'
                            : editingLineIndex === index
                            ? 'text-orange-400 bg-orange-500/10 border-l-2 border-orange-500 pl-2'
                            : isEcho
                            ? 'text-yellow-400'
                            : timestamp !== null
                            ? 'text-green-400'
                            : 'text-gray-500'
                        } py-1 ${!isEcho ? 'cursor-pointer hover:bg-zinc-800/50' : ''}`}
                        onClick={() => !isEcho && handleLineClick(index)}
                        title={!isEcho ? 'Cliquer pour recaler cette ligne' : 'Ligne /echo (non calable)'}
                      >
                        <div className="flex-1 min-w-0">
                          {isEcho ? `/echo ${cleaned}` : `/y ${cleaned}${addMusicNote ? ' ♪' : ''}`}
                          {waitDisplay !== null && (
                            <span className="text-gray-600 ml-2">
                              &lt;wait.{waitDisplay}&gt;
                            </span>
                          )}
                          {!isEcho && timestamp !== null && (
                            <span className="text-gray-600 ml-2 text-[10px]">
                              [{formatTime(timestamp)}]
                            </span>
                          )}
                        </div>
                        {!isEcho && timestamp !== null && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              clearLineTimestamp(index)
                            }}
                            className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 px-2 py-0.5 text-[10px] transition-opacity"
                            title="Effacer le calage"
                          >
                            ✕
                          </button>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 flex-shrink-0">
                {/* Sauvegarde/Chargement */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={saveProject}
                    disabled={parsedLines.length === 0}
                    className="bg-blue-500/20 border border-blue-500/40 text-blue-300 px-3 py-2 hover:bg-blue-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                  >
                    <Save className="w-4 h-4" />
                    Sauvegarder
                  </button>
                  
                  <button
                    onClick={() => jsonInputRef.current?.click()}
                    className="bg-blue-500/20 border border-blue-500/40 text-blue-300 px-3 py-2 hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <FolderOpen className="w-4 h-4" />
                    Charger
                  </button>
                  <input
                    type="file"
                    ref={jsonInputRef}
                    onChange={loadProject}
                    accept="application/json,.json"
                    className="hidden"
                  />
                </div>

                <button
                  onClick={() => {
                    const newPreviewState = !showPreview
                    setShowPreview(newPreviewState)
                    
                    // Si on active la prévisualisation, lancer la musique
                    if (newPreviewState && audioRef.current) {
                      audioRef.current.currentTime = 0
                      audioRef.current.play()
                      setIsPlaying(true)
                    } else if (!newPreviewState && audioRef.current) {
                      // Si on désactive, arrêter la musique
                      audioRef.current.pause()
                      setIsPlaying(false)
                    }
                  }}
                  disabled={timestamps.filter(t => t !== null).length === 0 || !audioUrl}
                  className="w-full bg-purple-500/20 border border-purple-500/40 text-purple-300 px-4 py-3 hover:bg-purple-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold"
                >
                  <Play className="w-4 h-4" />
                  {showPreview ? 'Masquer' : 'Prévisualiser'} le résultat
                </button>

                <button
                  onClick={exportMacro}
                  disabled={timestamps.filter(t => t !== null).length === 0}
                  className="w-full bg-green-500/20 border border-green-500/40 text-green-300 px-4 py-3 hover:bg-green-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Exporter la macro
                </button>

                <button
                  onClick={resetAll}
                  className="w-full bg-red-500/20 border border-red-500/40 text-red-300 px-4 py-3 hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de configuration des groupes personnalisés */}
      {showCustomModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-8">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg max-w-3xl w-full max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-700">
              <h2 className="text-white text-xl font-semibold">Groupes personnalisés</h2>
              <button
                onClick={() => {
                  setShowCustomModal(false)
                  setSelectedSeparators([])
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <p className="text-gray-400 text-sm mb-4">
                Cliquez entre les lignes pour ajouter/retirer un séparateur • Ctrl/Shift pour sélection multiple
              </p>
              
              <div className="space-y-0 font-mono text-sm">
                {parsedLines.map((line, index) => {
                  const isEcho = isEchoLine(line)
                  const isEmpty = isEmptyLine(line)
                  const timestamp = timestamps[index]
                  const hasSeparatorAfter = customSeparators.includes(index)
                  
                  if (isEmpty) return null

                  return (
                    <div key={index}>
                      {/* Ligne */}
                      <div className={`px-3 py-2 ${
                        isEcho ? 'text-yellow-400' : timestamp !== null ? 'text-green-400' : 'text-gray-500'
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className="flex-1">{cleanLine(line)}</span>
                          {!isEcho && timestamp !== null && (
                            <span className="text-gray-600 text-xs ml-2">[{formatTime(timestamp)}]</span>
                          )}
                          {isEcho && <span className="text-xs text-yellow-600 ml-2">/echo</span>}
                        </div>
                      </div>

                      {/* Zone cliquable pour ajouter/retirer séparateur */}
                      {index < parsedLines.length - 1 && !isEmptyLine(parsedLines[index + 1]) && (
                        <div
                          onClick={(e) => {
                            if (hasSeparatorAfter) {
                              // Retirer le séparateur
                              setCustomSeparators(prev => prev.filter(i => i !== index))
                              setSelectedSeparators(prev => prev.filter(i => i !== index))
                            } else {
                              // Ajouter le séparateur
                              setCustomSeparators(prev => [...prev, index].sort((a, b) => a - b))
                            }
                          }}
                          className={`h-6 flex items-center justify-center cursor-pointer transition-all ${
                            hasSeparatorAfter
                              ? selectedSeparators.includes(index)
                                ? 'bg-blue-500/20'
                                : 'bg-zinc-800/50 hover:bg-zinc-700/50'
                              : 'hover:bg-cyan-500/10'
                          }`}
                        >
                          {hasSeparatorAfter ? (
                            <div
                              onClick={(e) => {
                                e.stopPropagation()
                                if (e.ctrlKey || e.metaKey) {
                                  // Ctrl: toggle sélection
                                  setSelectedSeparators(prev =>
                                    prev.includes(index)
                                      ? prev.filter(i => i !== index)
                                      : [...prev, index]
                                  )
                                } else if (e.shiftKey && selectedSeparators.length > 0) {
                                  // Shift: sélection en plage
                                  const lastSelected = selectedSeparators[selectedSeparators.length - 1]
                                  const start = Math.min(lastSelected, index)
                                  const end = Math.max(lastSelected, index)
                                  const range = customSeparators.filter(i => i >= start && i <= end)
                                  setSelectedSeparators(range)
                                } else {
                                  // Clic simple: sélection unique
                                  setSelectedSeparators([index])
                                }
                              }}
                              className={`w-full border-t-2 transition-colors ${
                                selectedSeparators.includes(index)
                                  ? 'border-blue-500'
                                  : 'border-zinc-600 hover:border-cyan-500'
                              }`}
                            />
                          ) : (
                            <div className="text-zinc-700 text-xs">+ séparateur</div>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-zinc-700 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {customSeparators.length + 1} groupe{customSeparators.length > 0 ? 's' : ''}
                {selectedSeparators.length > 0 && (
                  <button
                    onClick={() => {
                      setCustomSeparators(prev => prev.filter(i => !selectedSeparators.includes(i)))
                      setSelectedSeparators([])
                    }}
                    className="ml-4 text-red-400 hover:text-red-300 transition-colors"
                  >
                    Supprimer sélection ({selectedSeparators.length})
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setCustomSeparators([])
                    setSelectedSeparators([])
                  }}
                  className="px-4 py-2 bg-zinc-700 text-gray-300 hover:bg-zinc-600 transition-colors"
                >
                  Réinitialiser
                </button>
                <button
                  onClick={() => {
                    setShowCustomModal(false)
                    setSelectedSeparators([])
                  }}
                  className="px-4 py-2 bg-cyan-500 text-black hover:bg-cyan-400 transition-colors font-semibold"
                >
                  Valider
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LyricsSyncer
