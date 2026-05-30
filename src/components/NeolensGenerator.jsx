import { ArrowLeft, Upload, Star, MessageSquare, Share2, Tag, ChevronDown, ChevronUp } from 'lucide-react'
import { toPng } from 'html-to-image'
import gifshot from 'gifshot'
import { useState } from 'react'

const formatNumber = (num) => {
  if (!num || num === '') return '0'
  const numStr = num.toString().replace(/\s/g, '')
  if (isNaN(numStr)) return num
  return parseInt(numStr).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function NeolensGenerator({ neolensPost, setNeolensPost, onBack, isDragging, setIsDragging, dragStart, setDragStart, isDraggingAvatar, setIsDraggingAvatar, dragStartAvatar, setDragStartAvatar, showComments, setShowComments, showMentions, setShowMentions }) {
  const [showImage1, setShowImage1] = useState(true)
  const [showImage2, setShowImage2] = useState(false)
  const [showImage3, setShowImage3] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  const currentImage = neolensPost.images[neolensPost.currentImageIndex]
  const filledImages = neolensPost.images.filter(img => img.url)
  
  const updateCurrentImage = (updates) => {
    const newImages = [...neolensPost.images]
    newImages[neolensPost.currentImageIndex] = { ...currentImage, ...updates }
    setNeolensPost({ ...neolensPost, images: newImages })
  }
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

        <h1 className="text-4xl font-bold text-white mb-2">Générateur Neolens</h1>
        <p className="text-gray-400 mb-8">Créez votre post Neolens</p>

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
                  value={neolensPost.avatar}
                  onChange={(e) => setNeolensPost({...neolensPost, avatar: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = (e) => setNeolensPost({...neolensPost, avatar: e.target.result})
                      reader.readAsDataURL(file)
                    }
                  }}
                  className="hidden"
                  id="avatar-upload"
                />
                <label
                  htmlFor="avatar-upload"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Importer un avatar
                </label>
              </div>
              <div className="mt-4 space-y-2">
                <label className="block text-xs text-gray-400">Zoom: {neolensPost.avatarZoom.toFixed(2)}x</label>
                <input
                  type="range"
                  min="0.3"
                  max="3"
                  step="0.1"
                  value={neolensPost.avatarZoom}
                  onChange={(e) => setNeolensPost({...neolensPost, avatarZoom: parseFloat(e.target.value)})}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">Glissez l'avatar dans le preview pour le repositionner</p>
                <button
                  onClick={() => setNeolensPost({...neolensPost, avatarPosition: { x: 0, y: 0 }, avatarZoom: 1})}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors"
                >
                  Réinitialiser la position
                </button>
              </div>
            </div>

            {/* Images */}
            {[0, 1, 2].map((index) => {
              const img = neolensPost.images[index]
              const isOpen = index === 0 ? showImage1 : index === 1 ? showImage2 : showImage3
              const setOpen = index === 0 ? setShowImage1 : index === 1 ? setShowImage2 : setShowImage3
              
              return (
                <div key={index} className="border border-zinc-800 bg-zinc-900/30">
                  <button
                    onClick={() => {
                      setOpen(!isOpen)
                      setNeolensPost({...neolensPost, currentImageIndex: index})
                    }}
                    className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors"
                  >
                    <label className="block text-sm font-medium text-gray-400 cursor-pointer">
                      Image {index + 1} {img.url && '✓'}
                    </label>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 space-y-3">
                      <input
                        type="text"
                        placeholder="URL de l'image..."
                        value={img.url}
                        onChange={(e) => {
                          const newImages = [...neolensPost.images]
                          newImages[index] = { ...img, url: e.target.value }
                          setNeolensPost({ ...neolensPost, images: newImages, currentImageIndex: index })
                        }}
                        className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            const reader = new FileReader()
                            reader.onload = (evt) => {
                              const newImages = [...neolensPost.images]
                              newImages[index] = { ...img, url: evt.target.result }
                              setNeolensPost({ ...neolensPost, images: newImages, currentImageIndex: index })
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                        className="hidden"
                        id={`image-upload-${index}`}
                      />
                      <label
                        htmlFor={`image-upload-${index}`}
                        className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors"
                      >
                        <Upload className="w-4 h-4" />
                        Importer une image
                      </label>
                      {img.url && (
                        <div className="space-y-2">
                          <label className="block text-xs text-gray-400">Zoom: {img.zoom.toFixed(2)}x</label>
                          <input
                            type="range"
                            min="0.3"
                            max="3"
                            step="0.1"
                            value={img.zoom}
                            onChange={(e) => {
                              const newImages = [...neolensPost.images]
                              newImages[index] = { ...img, zoom: parseFloat(e.target.value) }
                              setNeolensPost({ ...neolensPost, images: newImages, currentImageIndex: index })
                            }}
                            className="w-full"
                          />
                          <p className="text-xs text-gray-500">Glissez l'image dans le preview pour la repositionner</p>
                          <button
                            onClick={() => {
                              const newImages = [...neolensPost.images]
                              newImages[index] = { ...img, position: { x: 0, y: 0 }, zoom: 1 }
                              setNeolensPost({ ...neolensPost, images: newImages, currentImageIndex: index })
                            }}
                            className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors"
                          >
                            Réinitialiser la position
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}

            {/* Contenu */}
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nom d'utilisateur</label>
                <input
                  type="text"
                  value={neolensPost.username}
                  onChange={(e) => setNeolensPost({...neolensPost, username: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              {/* Mentions */}
              <div className="border border-zinc-800 bg-zinc-900/30">
                <button
                  onClick={() => setShowMentions(!showMentions)}
                  className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors"
                >
                  <label className="block text-sm font-medium text-gray-400 cursor-pointer">Mentions (optionnel)</label>
                  {showMentions ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {showMentions && (
                  <div className="p-4 pt-0">
                    <input
                      type="text"
                      placeholder="user1, user2, user3"
                      value={neolensPost.mentions}
                      onChange={(e) => setNeolensPost({...neolensPost, mentions: e.target.value})}
                      className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                    <p className="text-xs text-gray-500 mt-2">Séparez les mentions par des virgules (@ ajouté automatiquement)</p>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Légende</label>
                <textarea
                  value={neolensPost.caption}
                  onChange={(e) => setNeolensPost({...neolensPost, caption: e.target.value})}
                  rows={3}
                  placeholder="Écrivez votre légende..."
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Hashtags</label>
                <input
                  type="text"
                  value={neolensPost.hashtags}
                  onChange={(e) => setNeolensPost({...neolensPost, hashtags: e.target.value})}
                  placeholder="tag1, tag2, tag3"
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                <p className="text-xs text-gray-500 mt-2">Séparez les hashtags par des virgules (# ajouté automatiquement)</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Likes</label>
                <input
                  type="text"
                  value={neolensPost.likes}
                  onChange={(e) => setNeolensPost({...neolensPost, likes: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
            </div>

            {/* Commentaires */}
            <div className="border border-zinc-800 bg-zinc-900/30">
              <button
                onClick={() => setShowComments(!showComments)}
                className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors"
              >
                <label className="block text-sm font-medium text-gray-400 cursor-pointer">Commentaires (optionnel)</label>
                {showComments ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
              </button>
              {showComments && (
                <div className="p-4 pt-0 space-y-4">
                  {neolensPost.comments.map((comment, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-zinc-700 pl-3">
                  <p className="text-xs text-gray-500">Commentaire {idx + 1}</p>
                  <input
                    type="text"
                    placeholder="Nom d'utilisateur..."
                    value={comment.username}
                    onChange={(e) => {
                      const newComments = [...neolensPost.comments]
                      newComments[idx].username = e.target.value
                      setNeolensPost({...neolensPost, comments: newComments})
                    }}
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Texte du commentaire..."
                    value={comment.text}
                    onChange={(e) => {
                      const newComments = [...neolensPost.comments]
                      newComments[idx].text = e.target.value
                      setNeolensPost({...neolensPost, comments: newComments})
                    }}
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Nombre de likes..."
                    value={comment.likes}
                    onChange={(e) => {
                      const newComments = [...neolensPost.comments]
                      newComments[idx].likes = e.target.value
                      setNeolensPost({...neolensPost, comments: newComments})
                    }}
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"
                  />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={async () => {
                setIsExporting(true)
                const element = document.getElementById('neolens-template')
                
                // Vérifier combien d'images sont remplies
                const filledImages = neolensPost.images.filter(img => img.url)
                
                if (filledImages.length === 0) {
                  alert('Ajoutez au moins une image ou une vidéo')
                  setIsExporting(false)
                  return
                }
                
                if (filledImages.length === 1) {
                  // Export PNG simple
                  try {
                    const dataUrl = await toPng(element, {
                      cacheBust: true,
                      pixelRatio: 2,
                      backgroundColor: '#000000'
                    })
                    const link = document.createElement('a')
                    link.download = 'neolens-post.png'
                    link.href = dataUrl
                    link.click()
                  } catch (err) {
                    console.error('Erreur export:', err)
                  }
                  setIsExporting(false)
                } else {
                  // Export GIF avec plusieurs images
                  const images = []
                  const originalIndex = neolensPost.currentImageIndex
                  
                  for (let i = 0; i < 3; i++) {
                    if (neolensPost.images[i].url) {
                      setNeolensPost({...neolensPost, currentImageIndex: i})
                      await new Promise(resolve => setTimeout(resolve, 100))
                      
                      const dataUrl = await toPng(element, {
                        cacheBust: true,
                        pixelRatio: 2,
                        backgroundColor: '#000000'
                      })
                      images.push(dataUrl)
                    }
                  }
                  
                  setNeolensPost({...neolensPost, currentImageIndex: originalIndex})
                  
                  const templateWidth = element.offsetWidth * 2
                  const templateHeight = element.offsetHeight * 2
                  
                  gifshot.createGIF({
                    images,
                    gifWidth: templateWidth,
                    gifHeight: templateHeight,
                    interval: 2,
                    numFrames: images.length,
                    frameDuration: 2
                  }, (obj) => {
                    if (!obj.error) {
                      const link = document.createElement('a')
                      link.download = 'neolens-post.gif'
                      link.href = obj.image
                      link.click()
                    } else {
                      console.error('Erreur GIF:', obj.error)
                    }
                    setIsExporting(false)
                  })
                }
              }}
              disabled={isExporting}
              className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isExporting ? 'Export en cours...' : 'Enregistrer'}
            </button>
          </div>

          {/* Template */}
          <div className="flex items-start justify-center">
            <div id="neolens-template" className="bg-black border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20" style={{width: '400px'}}>
              {/* Branding Header */}
              <div className="p-3 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-950/30 to-blue-950/30">
                <img src="/media/neolens_logo.png" alt="Neolens" className="h-8 w-8 object-contain" />
                <span className="text-cyan-400/50 text-sm font-semibold tracking-wider">NEOLENS</span>
              </div>
              
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b-2 border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 to-blue-950/30">
                {neolensPost.avatar ? (
                  <div 
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/50 cursor-move relative flex-shrink-0"
                    onMouseDown={(e) => {
                      setIsDraggingAvatar(true)
                      setDragStartAvatar({ x: e.clientX - neolensPost.avatarPosition.x, y: e.clientY - neolensPost.avatarPosition.y })
                    }}
                    onMouseMove={(e) => {
                      if (!isDraggingAvatar) return
                      setNeolensPost({
                        ...neolensPost,
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
                        transform: `translate(${neolensPost.avatarPosition.x}px, ${neolensPost.avatarPosition.y}px)`
                      }}
                    >
                      <img 
                        src={neolensPost.avatar} 
                        alt="Avatar" 
                        className="select-none"
                        style={{
                          transform: `scale(${neolensPost.avatarZoom})`,
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-2 border-cyan-400/50 flex-shrink-0" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span className="text-white font-bold" style={{fontSize: '14px', transform: 'translateY(-1px)'}}>{neolensPost.username.charAt(0).toUpperCase()}</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-cyan-100 font-semibold break-words" style={{fontSize: '14px', lineHeight: '1.2', letterSpacing: '0.025em', transform: 'translateY(-2px)'}}>{neolensPost.username}</div>
                  {neolensPost.mentions && (
                    <div className="text-cyan-400/70 break-words" style={{fontSize: '12px', lineHeight: '1.2', marginTop: '2px', transform: 'translateY(-2px)'}}>
                      {neolensPost.mentions.split(',').map((m, i) => (
                        <span key={i}>
                          @{m.trim()}{i < neolensPost.mentions.split(',').length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Image */}
              <div 
                className="relative bg-gradient-to-br from-zinc-900 to-black overflow-hidden cursor-move" 
                style={{aspectRatio: '1/1'}}
                onMouseDown={(e) => {
                  if (!currentImage.url) return
                  setIsDragging(true)
                  setDragStart({ x: e.clientX - currentImage.position.x, y: e.clientY - currentImage.position.y })
                }}
                onMouseMove={(e) => {
                  if (!isDragging) return
                  updateCurrentImage({
                    position: {
                      x: e.clientX - dragStart.x,
                      y: e.clientY - dragStart.y
                    }
                  })
                }}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
              >
                {currentImage.url ? (
                  <div 
                    className="absolute inset-0 flex items-center justify-center select-none"
                    style={{
                      transform: `translate(${currentImage.position.x}px, ${currentImage.position.y}px)`
                    }}
                  >
                    <img 
                      src={currentImage.url} 
                      alt="Post" 
                      className="select-none"
                      style={{
                        transform: `scale(${currentImage.zoom})`,
                        transformOrigin: 'center',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }}
                      draggable={false}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-600">Aucune image</p>
                  </div>
                )}
                
                {/* Indicateurs d'images (pastilles) */}
                {filledImages.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                    {neolensPost.images.map((img, idx) => (
                      img.url && (
                        <div
                          key={idx}
                          className="w-2 h-2 rounded-full transition-all"
                          style={{
                            backgroundColor: idx === neolensPost.currentImageIndex ? '#22d3ee' : 'rgba(255, 255, 255, 0.4)'
                          }}
                        />
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="p-4 space-y-3 bg-gradient-to-r from-cyan-950/30 to-blue-950/30">
                <div className="flex items-center gap-4">
                  <Star className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0" />
                  <MessageSquare className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0" />
                  <Share2 className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0" />
                  <div className="flex-1"></div>
                  <Tag className="w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0" />
                </div>

                <p className="text-cyan-100 font-semibold text-sm">
                  <span className="text-cyan-400">{formatNumber(neolensPost.likes)}</span> J'aime
                </p>

                {(neolensPost.caption || neolensPost.hashtags) && (
                  <div className="text-cyan-100 text-sm break-words">
                    <span className="font-semibold text-cyan-300">{neolensPost.username}</span>
                    {neolensPost.caption && <span className="ml-2">{neolensPost.caption}</span>}
                    {neolensPost.hashtags && (
                      <p className="text-cyan-400 mt-1 break-words">
                        {neolensPost.hashtags.split(',').map((h, i) => (
                          <span key={i}>
                            #{h.trim()}{i < neolensPost.hashtags.split(',').length - 1 && ' '}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                )}

                {/* Commentaires */}
                {neolensPost.comments.filter(c => c.username && c.text).map((comment, idx) => (
                  <div key={idx} className="text-cyan-100 text-sm border-l-2 border-cyan-500/30 pl-2 break-words">
                    <div>
                      <span className="font-semibold text-cyan-300">{comment.username}</span>
                      <span className="ml-2">{comment.text}</span>
                    </div>
                    {comment.likes && (
                      <div style={{marginTop: '4px', transform: 'translateY(-1px)'}}>
                        <Star className="w-3 h-3 text-cyan-500/70" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '4px', transform: 'translateY(-1px)'}} />
                        <span className="text-cyan-500/70" style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '12px', transform: 'translateY(-1px)'}}>{formatNumber(comment.likes)}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
