import { ArrowLeft, Upload, Heart, MessageCircle, Lock, ChevronDown, ChevronUp } from 'lucide-react'
import { toPng } from 'html-to-image'
import gifshot from 'gifshot'
import { useState } from 'react'

const formatNumber = (num) => {
  if (!num || num === '') return '0'
  const numStr = num.toString().replace(/\s/g, '')
  if (isNaN(numStr)) return num
  return parseInt(numStr).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default function HolofansGenerator({ holofansPost, setHolofansPost, onBack, isDragging, setIsDragging, dragStart, setDragStart, isDraggingAvatar, setIsDraggingAvatar, dragStartAvatar, setDragStartAvatar, showComments, setShowComments }) {
  const [showImage1, setShowImage1] = useState(true)
  const [showImage2, setShowImage2] = useState(false)
  const [showImage3, setShowImage3] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  const currentImage = holofansPost.images[holofansPost.currentImageIndex]
  const filledImages = holofansPost.images.filter(img => img.url)
  
  const updateCurrentImage = (updates) => {
    const newImages = [...holofansPost.images]
    newImages[holofansPost.currentImageIndex] = { ...currentImage, ...updates }
    setHolofansPost({ ...holofansPost, images: newImages })
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

        <h1 className="text-4xl font-bold text-white mb-2">Générateur Holofans</h1>
        <p className="text-gray-400 mb-8">Créez votre post Holofans</p>

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
                  value={holofansPost.avatar}
                  onChange={(e) => setHolofansPost({...holofansPost, avatar: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onload = (e) => setHolofansPost({...holofansPost, avatar: e.target.result})
                      reader.readAsDataURL(file)
                    }
                  }}
                  className="hidden"
                  id="holofans-avatar-upload"
                />
                <label
                  htmlFor="holofans-avatar-upload"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  Importer un avatar
                </label>
              </div>
              <div className="mt-4 space-y-2">
                <label className="block text-xs text-gray-400">Zoom: {holofansPost.avatarZoom.toFixed(2)}x</label>
                <input
                  type="range"
                  min="0.3"
                  max="3"
                  step="0.1"
                  value={holofansPost.avatarZoom}
                  onChange={(e) => setHolofansPost({...holofansPost, avatarZoom: parseFloat(e.target.value)})}
                  className="w-full"
                />
                <p className="text-xs text-gray-500">Glissez l'avatar dans le preview pour le repositionner</p>
                <button
                  onClick={() => setHolofansPost({...holofansPost, avatarPosition: { x: 0, y: 0 }, avatarZoom: 1})}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors"
                >
                  Réinitialiser la position
                </button>
              </div>
            </div>

            {/* Images */}
            {[0, 1, 2].map((index) => {
              const img = holofansPost.images[index]
              const isOpen = index === 0 ? showImage1 : index === 1 ? showImage2 : showImage3
              const setOpen = index === 0 ? setShowImage1 : index === 1 ? setShowImage2 : setShowImage3
              
              return (
                <div key={index} className="border border-zinc-800 bg-zinc-900/30">
                  <button
                    onClick={() => {
                      setOpen(!isOpen)
                      setHolofansPost({...holofansPost, currentImageIndex: index})
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
                          const newImages = [...holofansPost.images]
                          newImages[index] = { ...img, url: e.target.value }
                          setHolofansPost({ ...holofansPost, images: newImages, currentImageIndex: index })
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
                              const newImages = [...holofansPost.images]
                              newImages[index] = { ...img, url: evt.target.result }
                              setHolofansPost({ ...holofansPost, images: newImages, currentImageIndex: index })
                            }
                            reader.readAsDataURL(file)
                          }
                        }}
                        className="hidden"
                        id={`holofans-image-upload-${index}`}
                      />
                      <label
                        htmlFor={`holofans-image-upload-${index}`}
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
                              const newImages = [...holofansPost.images]
                              newImages[index] = { ...img, zoom: parseFloat(e.target.value) }
                              setHolofansPost({ ...holofansPost, images: newImages, currentImageIndex: index })
                            }}
                            className="w-full"
                          />
                          <p className="text-xs text-gray-500">Glissez l'image dans le preview pour la repositionner</p>
                          <button
                            onClick={() => {
                              const newImages = [...holofansPost.images]
                              newImages[index] = { ...img, position: { x: 0, y: 0 }, zoom: 1 }
                              setHolofansPost({ ...holofansPost, images: newImages, currentImageIndex: index })
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
                  value={holofansPost.username}
                  onChange={(e) => setHolofansPost({...holofansPost, username: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mentions (séparer par des virgules)</label>
                <input
                  type="text"
                  value={holofansPost.mentions}
                  onChange={(e) => setHolofansPost({...holofansPost, mentions: e.target.value})}
                  placeholder="utilisateur1, utilisateur2, utilisateur3..."
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Légende</label>
                <textarea
                  value={holofansPost.caption}
                  onChange={(e) => setHolofansPost({...holofansPost, caption: e.target.value})}
                  rows={3}
                  placeholder="Écrivez votre légende..."
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Likes</label>
                <input
                  type="text"
                  value={holofansPost.likes}
                  onChange={(e) => setHolofansPost({...holofansPost, likes: e.target.value})}
                  className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="locked"
                  checked={holofansPost.isLocked}
                  onChange={(e) => setHolofansPost({...holofansPost, isLocked: e.target.checked})}
                  className="w-4 h-4 accent-pink-500"
                />
                <label htmlFor="locked" className="text-sm text-gray-400">Contenu verrouillé (abonnés uniquement)</label>
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
                  {holofansPost.comments.map((comment, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-zinc-700 pl-3">
                  <p className="text-xs text-gray-500">Commentaire {idx + 1}</p>
                  <input
                    type="text"
                    placeholder="Nom d'utilisateur..."
                    value={comment.username}
                    onChange={(e) => {
                      const newComments = [...holofansPost.comments]
                      newComments[idx].username = e.target.value
                      setHolofansPost({...holofansPost, comments: newComments})
                    }}
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Texte du commentaire..."
                    value={comment.text}
                    onChange={(e) => {
                      const newComments = [...holofansPost.comments]
                      newComments[idx].text = e.target.value
                      setHolofansPost({...holofansPost, comments: newComments})
                    }}
                    className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Nombre de likes..."
                    value={comment.likes}
                    onChange={(e) => {
                      const newComments = [...holofansPost.comments]
                      newComments[idx].likes = e.target.value
                      setHolofansPost({...holofansPost, comments: newComments})
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
                const element = document.getElementById('holofans-template')
                
                // Vérifier combien d'images sont remplies
                const filledImages = holofansPost.images.filter(img => img.url)
                
                if (filledImages.length === 0) {
                  alert('Ajoutez au moins une image')
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
                    link.download = 'holofans-post.png'
                    link.href = dataUrl
                    link.click()
                  } catch (err) {
                    console.error('Erreur export:', err)
                  }
                  setIsExporting(false)
                } else {
                  // Export GIF avec plusieurs images
                  const images = []
                  const originalIndex = holofansPost.currentImageIndex
                  
                  for (let i = 0; i < 3; i++) {
                    if (holofansPost.images[i].url) {
                      setHolofansPost({...holofansPost, currentImageIndex: i})
                      await new Promise(resolve => setTimeout(resolve, 100))
                      
                      const dataUrl = await toPng(element, {
                        cacheBust: true,
                        pixelRatio: 2,
                        backgroundColor: '#000000'
                      })
                      images.push(dataUrl)
                    }
                  }
                  
                  setHolofansPost({...holofansPost, currentImageIndex: originalIndex})
                  
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
                      link.download = 'holofans-post.gif'
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
            <div id="holofans-template" className="bg-zinc-950" style={{width: '400px', border: '1px solid #2a2a2a'}}>
              {/* Header */}
              <div className="flex items-center gap-3 p-3" style={{backgroundColor: '#1a1a1a', borderBottom: '1px solid #2a2a2a'}}>
                {holofansPost.avatar ? (
                  <div 
                    className="w-12 h-12 rounded-full overflow-hidden cursor-move relative flex-shrink-0"
                    style={{border: '2px solid #2a2a2a'}}
                    onMouseDown={(e) => {
                      setIsDraggingAvatar(true)
                      setDragStartAvatar({ x: e.clientX - holofansPost.avatarPosition.x, y: e.clientY - holofansPost.avatarPosition.y })
                    }}
                    onMouseMove={(e) => {
                      if (!isDraggingAvatar) return
                      setHolofansPost({
                        ...holofansPost,
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
                        transform: `translate(${holofansPost.avatarPosition.x}px, ${holofansPost.avatarPosition.y}px)`
                      }}
                    >
                      <img 
                        src={holofansPost.avatar} 
                        alt="Avatar" 
                        className="select-none"
                        style={{
                          transform: `scale(${holofansPost.avatarZoom})`,
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
                  <div className="w-12 h-12 rounded-full flex-shrink-0" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#00AFF0'}}>
                    <img src="media/holofans_logo.png" alt="Holofans" className="w-full h-full object-contain" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold break-words" style={{fontSize: '15px', lineHeight: '1.2', transform: 'translateY(-2px)'}}>{holofansPost.username}</div>
                  {holofansPost.mentions && (
                    <div className="break-words" style={{fontSize: '12px', lineHeight: '1.2', marginTop: '2px', transform: 'translateY(-2px)', color: '#9ca3af'}}>
                      {holofansPost.mentions.split(',').map((m, i) => (
                        <span key={i}>
                          @{m.trim()}{i < holofansPost.mentions.split(',').length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <button className="text-white px-5 py-2 text-sm font-semibold rounded-full flex-shrink-0" style={{backgroundColor: holofansPost.isLocked ? '#00AFF0' : '#4a5568'}}>
                  {holofansPost.isLocked ? 'S\'abonner' : 'Abonné'}
                </button>
              </div>

              {/* Image */}
              <div 
                className="relative overflow-hidden cursor-move" 
                style={{aspectRatio: '1/1', backgroundColor: '#000000'}}
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
                  <>
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
                          objectFit: 'contain',
                          filter: holofansPost.isLocked ? 'blur(20px)' : 'none'
                        }}
                        draggable={false}
                      />
                    </div>
                    {holofansPost.isLocked && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                        <div className="text-center">
                          <img src="media/lock_logo.png" alt="Locked" className="w-16 h-16 mx-auto mb-3 opacity-90" />
                          <p className="text-white font-semibold text-base">S'abonner pour débloquer</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-600">Aucune image</p>
                  </div>
                )}
                
                {/* Indicateurs d'images (pastilles) */}
                {filledImages.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10">
                    {holofansPost.images.map((img, idx) => (
                      img.url && (
                        <div
                          key={idx}
                          className="w-2 h-2 rounded-full transition-all"
                          style={{
                            backgroundColor: idx === holofansPost.currentImageIndex ? '#00AFF0' : 'rgba(255, 255, 255, 0.4)'
                          }}
                        />
                      )
                    ))}
                  </div>
                )}
                
                {/* Branding */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1 opacity-40">
                  <img src="media/holofans_logo.png" alt="Holofans" className="h-10 w-10 object-contain" />
                  <span className="text-white text-base font-semibold tracking-wide">HOLOFANS</span>
                </div>
              </div>

              {/* Actions */}
              <div className="p-4 space-y-3" style={{backgroundColor: '#1a1a1a'}}>
                <div className="flex items-center gap-5">
                  <Heart className="w-6 h-6 flex-shrink-0" style={{color: '#9ca3af'}} />
                  <MessageCircle className="w-6 h-6 flex-shrink-0" style={{color: '#9ca3af'}} />
                </div>

                <p className="text-sm" style={{color: '#d1d5db'}}>
                  <span style={{color: '#ffffff', fontWeight: '600'}}>{formatNumber(holofansPost.likes)}</span> likes
                </p>

                {holofansPost.caption && (
                  <div className="text-sm break-words" style={{color: '#d1d5db'}}>
                    <span className="font-semibold" style={{color: '#ffffff'}}>{holofansPost.username}</span>
                    <span className="ml-2">{holofansPost.caption}</span>
                  </div>
                )}

                {/* Commentaires */}
                {holofansPost.comments.filter(c => c.username && c.text).map((comment, idx) => (
                  <div key={idx} className="text-sm pl-2 break-words" style={{color: '#d1d5db', borderLeft: '2px solid #2a2a2a'}}>
                    <div>
                      <span className="font-semibold" style={{color: '#ffffff'}}>{comment.username}</span>
                      <span className="ml-2">{comment.text}</span>
                    </div>
                    {comment.likes && (
                      <div style={{marginTop: '4px', transform: 'translateY(-1px)'}}>
                        <Heart className="w-3 h-3" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '4px', transform: 'translateY(-1px)', color: '#6b7280'}} />
                        <span style={{display: 'inline-block', verticalAlign: 'middle', fontSize: '12px', transform: 'translateY(-1px)', color: '#9ca3af'}}>{formatNumber(comment.likes)}</span>
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
