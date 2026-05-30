import { ArrowLeft, Upload, Heart, MessageCircle, Repeat2, Share, ChevronDown, ChevronUp } from 'lucide-react'
import { toPng } from 'html-to-image'

const formatNumber = (num) => {
  if (!num || num === '') return '0'
  const numStr = num.toString().replace(/\s/g, '')
  if (isNaN(numStr)) return num
  const n = parseInt(numStr)
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return n.toString()
}

const renderTextWithHashtags = (text) => {
  if (!text) return null
  
  const parts = text.split(/(#\w+)/g)
  
  return parts.map((part, index) => {
    if (part.match(/^#\w+$/)) {
      return <span key={index} style={{color: '#1d9bf0'}}>{part}</span>
    }
    return part
  })
}

export default function PingGenerator({ pingPost, setPingPost, onBack, isDragging, setIsDragging, dragStart, setDragStart, isDraggingAvatar, setIsDraggingAvatar, dragStartAvatar, setDragStartAvatar, showComments, setShowComments }) {
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Retour</span>
        </button>

        <h1 className="text-4xl font-bold text-white mb-2">Générateur Ping</h1>
        <p className="text-gray-400 mb-8">Créez votre post Ping</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <div className="space-y-6">
            {/* Avatar */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Avatar</label>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="URL de l'avatar..."
                  value={pingPost.avatar}
                  onChange={(e) => setPingPost({...pingPost, avatar: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = (e) => setPingPost({...pingPost, avatar: e.target.result})
                      reader.readAsDataURL(file)
                    }
                  }}
                  className="hidden"
                  id="ping-avatar-upload"
                />
                <label
                  htmlFor="ping-avatar-upload"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Importer un avatar
                </label>
              </div>
              <div className="mt-4 space-y-2">
                <label className="block text-xs text-gray-400">Zoom: {pingPost.avatarZoom.toFixed(2)}x</label>
                <input
                  type="range"
                  min="0.3"
                  max="3"
                  step="0.1"
                  value={pingPost.avatarZoom}
                  onChange={(e) => setPingPost({...pingPost, avatarZoom: parseFloat(e.target.value)})}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">Glissez l'avatar dans le preview pour le repositionner</p>
                <button
                  onClick={() => setPingPost({...pingPost, avatarPosition: { x: 0, y: 0 }, avatarZoom: 1})}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors"
                >
                  Réinitialiser la position
                </button>
              </div>
            </div>

            {/* Image (optionnel) */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Image (optionnel)</label>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="URL de l'image..."
                  value={pingPost.image}
                  onChange={(e) => setPingPost({...pingPost, image: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = (e) => setPingPost({...pingPost, image: e.target.result})
                      reader.readAsDataURL(file)
                    }
                  }}
                  className="hidden"
                  id="ping-image-upload"
                />
                <label
                  htmlFor="ping-image-upload"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Importer une image
                </label>
              </div>
              {pingPost.image && (
                <div className="mt-4 space-y-2">
                  <label className="block text-xs text-gray-400">Zoom: {pingPost.imageZoom.toFixed(2)}x</label>
                  <input
                    type="range"
                    min="0.3"
                    max="3"
                    step="0.1"
                    value={pingPost.imageZoom}
                    onChange={(e) => setPingPost({...pingPost, imageZoom: parseFloat(e.target.value)})}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500">Glissez l'image dans le preview pour la repositionner</p>
                  <button
                    onClick={() => setPingPost({...pingPost, imagePosition: { x: 0, y: 0 }, imageZoom: 1})}
                    className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors"
                  >
                    Réinitialiser la position
                  </button>
                </div>
              )}
            </div>

            {/* Contenu */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nom d'utilisateur</label>
                <input
                  type="text"
                  value={pingPost.username}
                  onChange={(e) => setPingPost({...pingPost, username: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Pseudo (@handle)</label>
                <input
                  type="text"
                  value={pingPost.handle}
                  onChange={(e) => setPingPost({...pingPost, handle: e.target.value})}
                  placeholder="handle"
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Texte du ping</label>
                <textarea
                  value={pingPost.text}
                  onChange={(e) => setPingPost({...pingPost, text: e.target.value})}
                  rows={4}
                  placeholder="Quoi de neuf ?"
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Date et heure</label>
                <input
                  type="text"
                  value={pingPost.timestamp}
                  onChange={(e) => setPingPost({...pingPost, timestamp: e.target.value})}
                  placeholder="12:34 · 30 mai 2026"
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Réponses</label>
                  <input
                    type="text"
                    value={pingPost.replies}
                    onChange={(e) => setPingPost({...pingPost, replies: e.target.value})}
                    placeholder="0"
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Repings</label>
                  <input
                    type="text"
                    value={pingPost.repings}
                    onChange={(e) => setPingPost({...pingPost, repings: e.target.value})}
                    placeholder="0"
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Likes</label>
                  <input
                    type="text"
                    value={pingPost.likes}
                    onChange={(e) => setPingPost({...pingPost, likes: e.target.value})}
                    placeholder="0"
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.getElementById('ping-template')
                toPng(element, {
                  cacheBust: true,
                  pixelRatio: 2,
                  backgroundColor: '#000000'
                }).then((dataUrl) => {
                  const link = document.createElement('a')
                  link.download = 'ping-post.png'
                  link.href = dataUrl
                  link.click()
                }).catch((err) => {
                  console.error('Erreur export:', err)
                })
              }}
              className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 text-sm transition-colors"
            >
              Enregistrer l'image
            </button>
          </div>

          {/* Template */}
          <div className="flex items-start justify-center">
            <div id="ping-template" className="bg-black" style={{width: '600px', border: '1px solid #2f3336'}}>
              {/* Post */}
              <div className="p-4" style={{borderBottom: '1px solid #2f3336'}}>
                <div className="flex gap-3">
                  {/* Avatar */}
                  {pingPost.avatar ? (
                    <div 
                      className="w-12 h-12 rounded-full overflow-hidden cursor-move relative flex-shrink-0"
                      onMouseDown={(e) => {
                        setIsDraggingAvatar(true)
                        setDragStartAvatar({ x: e.clientX - pingPost.avatarPosition.x, y: e.clientY - pingPost.avatarPosition.y })
                      }}
                      onMouseMove={(e) => {
                        if (!isDraggingAvatar) return
                        setPingPost({
                          ...pingPost,
                          avatarPosition: {
                            x: e.clientX - dragStartAvatar.x,
                            y: e.clientY - dragStartAvatar.y
                          }
                        })
                      }}
                      onMouseUp={() => setIsDraggingAvatar(false)}
                      onMouseLeave={() => setIsDraggingAvatar(false)}
                    >
                      <div 
                        className="absolute inset-0 flex items-center justify-center select-none"
                        style={{
                          transform: `translate(${pingPost.avatarPosition.x}px, ${pingPost.avatarPosition.y}px)`
                        }}
                      >
                        <img 
                          src={pingPost.avatar} 
                          alt="Avatar" 
                          className="select-none"
                          style={{
                            transform: `scale(${pingPost.avatarZoom})`,
                            transformOrigin: 'center',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                          }}
                          draggable={false}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full flex-shrink-0" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1d9bf0'}}>
                      <img src="/media/ping_logo.png" alt="Ping" className="w-full h-full object-contain" />
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex items-center gap-1 mb-1">
                      <span className="text-white font-bold" style={{fontSize: '15px'}}>{pingPost.username}</span>
                      <span style={{color: '#71767b', fontSize: '15px'}}>@{pingPost.handle}</span>
                    </div>

                    {/* Text */}
                    <div className="text-white break-words mb-3" style={{fontSize: '15px', lineHeight: '1.3'}}>
                      {renderTextWithHashtags(pingPost.text)}
                    </div>

                    {/* Image */}
                    {pingPost.image && (
                      <div 
                        className="relative overflow-hidden cursor-move mb-3" 
                        style={{borderRadius: '16px', border: '1px solid #2f3336', aspectRatio: '16/9', backgroundColor: '#000000'}}
                        onMouseDown={(e) => {
                          setIsDragging(true)
                          setDragStart({ x: e.clientX - pingPost.imagePosition.x, y: e.clientY - pingPost.imagePosition.y })
                        }}
                        onMouseMove={(e) => {
                          if (!isDragging) return
                          setPingPost({
                            ...pingPost,
                            imagePosition: {
                              x: e.clientX - dragStart.x,
                              y: e.clientY - dragStart.y
                            }
                          })
                        }}
                        onMouseUp={() => setIsDragging(false)}
                        onMouseLeave={() => setIsDragging(false)}
                      >
                        <div 
                          className="absolute inset-0 flex items-center justify-center select-none"
                          style={{
                            transform: `translate(${pingPost.imagePosition.x}px, ${pingPost.imagePosition.y}px)`
                          }}
                        >
                          <img 
                            src={pingPost.image} 
                            alt="Post" 
                            className="select-none"
                            style={{
                              transform: `scale(${pingPost.imageZoom})`,
                              transformOrigin: 'center',
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain'
                            }}
                            draggable={false}
                          />
                        </div>
                      </div>
                    )}

                    {/* Timestamp */}
                    <div style={{color: '#71767b', fontSize: '15px', marginBottom: '12px'}}>
                      {pingPost.timestamp}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-3" style={{borderTop: '1px solid #2f3336'}}>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-5 h-5" style={{color: '#71767b'}} />
                        <span style={{color: '#71767b', fontSize: '13px'}}>{formatNumber(pingPost.replies)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Repeat2 className="w-5 h-5" style={{color: '#71767b'}} />
                        <span style={{color: '#71767b', fontSize: '13px'}}>{formatNumber(pingPost.repings)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-5 h-5" style={{color: '#71767b'}} />
                        <span style={{color: '#71767b', fontSize: '13px'}}>{formatNumber(pingPost.likes)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share className="w-5 h-5" style={{color: '#71767b'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branding */}
              <div className="p-3 flex items-center justify-center gap-2" style={{backgroundColor: '#0a0a0a', opacity: 0.6}}>
                <img src="/media/ping_logo.png" alt="Ping" className="h-5 w-5 object-contain" />
                <span className="text-white text-xs font-semibold tracking-wide">PING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
