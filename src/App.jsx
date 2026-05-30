import { useState, useEffect } from 'react'
import { ExternalLink, Globe, Users, Music, Briefcase, BookOpen, ArrowLeft, Search, Clock, MapPin, Home, Download, Upload, Heart, MessageCircle, Send, Bookmark } from 'lucide-react'
import annuaireData from './data/annuaire.json'
import artistesData from './data/artistes.json'
import reseauxData from './data/reseaux.json'
import NeolensGenerator from './components/NeolensGenerator'
import HolofansGenerator from './components/HolofansGenerator'
import PingGenerator from './components/PingGenerator'

function App() {
  const [typedText, setTypedText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchText, setSearchText] = useState('')
  const [selectedServers, setSelectedServers] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [activeTab, setActiveTab] = useState('servers')
  const [searchArtiste, setSearchArtiste] = useState('')
  const [sortAnnuaire, setSortAnnuaire] = useState('asc')
  const [sortArtistes, setSortArtistes] = useState('asc')
  const [selectedReseau, setSelectedReseau] = useState(null)
  const [neolensPost, setNeolensPost] = useState({
    images: [
      { url: '', position: { x: 0, y: 0 }, zoom: 1 },
      { url: '', position: { x: 0, y: 0 }, zoom: 1 },
      { url: '', position: { x: 0, y: 0 }, zoom: 1 }
    ],
    currentImageIndex: 0,
    avatar: '',
    avatarPosition: { x: 0, y: 0 },
    avatarZoom: 1,
    username: 'Utilisateur',
    mentions: '',
    caption: '',
    hashtags: '',
    likes: '42',
    comments: [
      { username: '', text: '', likes: '' },
      { username: '', text: '', likes: '' },
      { username: '', text: '', likes: '' }
    ]
  })
  const [holofansPost, setHolofansPost] = useState({
    images: [
      { url: '', position: { x: 0, y: 0 }, zoom: 1 },
      { url: '', position: { x: 0, y: 0 }, zoom: 1 },
      { url: '', position: { x: 0, y: 0 }, zoom: 1 }
    ],
    currentImageIndex: 0,
    avatar: '',
    avatarPosition: { x: 0, y: 0 },
    avatarZoom: 1,
    username: 'Utilisateur',
    mentions: '',
    caption: '',
    likes: '42',
    isLocked: false,
    comments: [
      { username: '', text: '', likes: '' },
      { username: '', text: '', likes: '' },
      { username: '', text: '', likes: '' }
    ]
  })
  const getParisTimestamp = () => {
    const now = new Date()
    const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))
    const hours = parisTime.getHours().toString().padStart(2, '0')
    const minutes = parisTime.getMinutes().toString().padStart(2, '0')
    const day = parisTime.getDate()
    const months = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
    const month = months[parisTime.getMonth()]
    const year = parisTime.getFullYear()
    return `${hours}:${minutes} · ${day} ${month} ${year}`
  }

  const [pingPost, setPingPost] = useState({
    image: '',
    imagePosition: { x: 0, y: 0 },
    imageZoom: 1,
    avatar: '',
    avatarPosition: { x: 0, y: 0 },
    avatarZoom: 1,
    username: 'Utilisateur',
    handle: 'utilisateur',
    text: '',
    timestamp: getParisTimestamp(),
    replies: '0',
    repings: '0',
    likes: '0'
  })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [isDraggingAvatar, setIsDraggingAvatar] = useState(false)
  const [dragStartAvatar, setDragStartAvatar] = useState({ x: 0, y: 0 })
  const [showComments, setShowComments] = useState(false)
  const [showMentions, setShowMentions] = useState(false)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      if (hash) {
        // Vérifier si c'est un générateur spécifique
        if (hash === 'neolens') {
          const neolens = reseauxData.find(r => r.name === 'Neolens')
          if (neolens) {
            setSelectedCategory(categories.find(cat => cat.title === 'RÉSEAUX'))
            setSelectedReseau(neolens)
          }
        } else if (hash === 'holofans') {
          const holofans = reseauxData.find(r => r.name === 'Holofans')
          if (holofans) {
            setSelectedCategory(categories.find(cat => cat.title === 'RÉSEAUX'))
            setSelectedReseau(holofans)
          }
        } else if (hash === 'ping') {
          const ping = reseauxData.find(r => r.name === 'Ping')
          if (ping) {
            setSelectedCategory(categories.find(cat => cat.title === 'RÉSEAUX'))
            setSelectedReseau(ping)
          }
        } else {
          // Navigation par catégorie
          const category = categories.find(cat => cat.title.toLowerCase() === hash.toLowerCase())
          if (category) {
            setSelectedCategory(category)
          }
        }
      } else {
        setSelectedCategory(null)
        setSelectedReseau(null)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [reseauxData])

  const datacenters = {
    Chaos: ['Cerberus', 'Louisoix', 'Moogle', 'Omega', 'Phantom', 'Ragnarok', 'Sagittarius', 'Spriggan'],
    Light: ['Alpha', 'Lich', 'Odin', 'Phoenix', 'Raiden', 'Shiva', 'Twintania', 'Zodiark']
  }

  const locations = ['La Coupe', 'Lavandière', 'Brumée', 'Empyrée', 'Shirogane']
  const types = ['Bar', 'Lieu public', 'Nightclub', 'Boutique', 'Studio Photo']

  const annuaire = annuaireData

  const categories = [
    {
      id: 1,
      title: 'ANNUAIRE',
      icon: BookOpen
    },
    {
      id: 2,
      title: 'ARTISTES',
      icon: Music
    },
    {
      id: 3,
      title: 'RÉSEAUX',
      icon: Globe
    },
    {
      id: 4,
      title: 'RESSOURCES',
      icon: Download
    }
  ]

  const toggleServer = (server) => {
    setSelectedServers(prev => 
      prev.includes(server) ? prev.filter(s => s !== server) : [...prev, server]
    )
  }

  const toggleLocation = (location) => {
    setSelectedLocations(prev => 
      prev.includes(location) ? prev.filter(l => l !== location) : [...prev, location]
    )
  }

  const toggleType = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  const filteredAnnuaire = annuaire
    .filter(etab => {
      const matchesSearch = etab.name.toLowerCase().includes(searchText.toLowerCase())
      const matchesServer = selectedServers.length === 0 || selectedServers.includes(etab.server)
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(etab.location)
      const matchesType = selectedTypes.length === 0 || etab.types.some(t => selectedTypes.includes(t))
      return matchesSearch && matchesServer && matchesLocation && matchesType
    })
    .sort((a, b) => {
      if (sortAnnuaire === 'asc') {
        return a.name.localeCompare(b.name)
      } else {
        return b.name.localeCompare(a.name)
      }
    })

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <img 
              src="media/nexus_logo.png" 
              alt="Nexus Logo" 
              className="w-32 h-32 object-contain"
            />
            <h1 className="text-7xl font-bold text-white tracking-tight">
              NEXUS
            </h1>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 [&>*:last-child:nth-child(4)]:md:col-start-2 [&>*:last-child:nth-child(4)]:lg:col-start-2">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => {
                  window.location.hash = category.title.toLowerCase()
                  setSelectedCategory(category)
                }}
                className="terminal-card group text-left"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-white group-hover:text-gray-300 transition-colors">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <div className="text-gray-600 group-hover:text-white transition-colors text-xs">
                    →
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {selectedCategory && selectedCategory.title === 'ANNUAIRE' && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-8">
              <button
                onClick={() => {
                  window.location.hash = ''
                  setSelectedCategory(null)
                }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour</span>
              </button>

              <header className="mb-8">
                <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">ANNUAIRE</h1>
                
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Rechercher dans l'annuaire..."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      className="w-full bg-zinc-900/50 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>
                  <select
                    value={sortAnnuaire}
                    onChange={(e) => setSortAnnuaire(e.target.value)}
                    className="appearance-none bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer"
                  >
                    <option value="asc">A → Z</option>
                    <option value="desc">Z → A</option>
                  </select>
                </div>

                <div className="mb-6">
                  <div className="flex border-b border-zinc-800 mb-4">
                    <button
                      onClick={() => setActiveTab('servers')}
                      className={`px-6 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'servers'
                          ? 'text-white border-b-2 border-white'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      Serveurs
                    </button>
                    <button
                      onClick={() => setActiveTab('locations')}
                      className={`px-6 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'locations'
                          ? 'text-white border-b-2 border-white'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      Lieux
                    </button>
                    <button
                      onClick={() => setActiveTab('types')}
                      className={`px-6 py-3 text-sm font-medium transition-colors ${
                        activeTab === 'types'
                          ? 'text-white border-b-2 border-white'
                          : 'text-gray-500 hover:text-gray-300'
                      }`}
                    >
                      Types
                    </button>
                  </div>

                  <div className="bg-zinc-900/30 border border-zinc-800/50 p-6">
                    {activeTab === 'servers' && (
                      <div>
                        <div className="mb-6">
                          <div className="text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider">Chaos</div>
                          <div className="flex flex-wrap gap-2">
                            {datacenters.Chaos.map(server => (
                              <button
                                key={server}
                                onClick={() => toggleServer(server)}
                                className={`px-4 py-2 text-sm font-medium transition-all ${
                                  selectedServers.includes(server)
                                    ? 'bg-white text-black'
                                    : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
                                }`}
                              >
                                {server}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider">Light</div>
                          <div className="flex flex-wrap gap-2">
                            {datacenters.Light.map(server => (
                              <button
                                key={server}
                                onClick={() => toggleServer(server)}
                                className={`px-4 py-2 text-sm font-medium transition-all ${
                                  selectedServers.includes(server)
                                    ? 'bg-white text-black'
                                    : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
                                }`}
                              >
                                {server}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'locations' && (
                      <div className="flex flex-wrap gap-2">
                        {locations.map(location => (
                          <button
                            key={location}
                            onClick={() => toggleLocation(location)}
                            className={`px-4 py-2 text-sm font-medium transition-all ${
                              selectedLocations.includes(location)
                                ? 'bg-white text-black'
                                : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
                            }`}
                          >
                            {location}
                          </button>
                        ))}
                      </div>
                    )}

                    {activeTab === 'types' && (
                      <div className="flex flex-wrap gap-2">
                        {types.map(type => (
                          <button
                            key={type}
                            onClick={() => toggleType(type)}
                            className={`px-4 py-2 text-sm font-medium transition-all ${
                              selectedTypes.includes(type)
                                ? 'bg-white text-black'
                                : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {(selectedServers.length > 0 || selectedLocations.length > 0 || selectedTypes.length > 0) && (
                  <div className="mt-6 p-4 bg-zinc-900/30 border border-zinc-800/50">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Filtres actifs</span>
                      <button
                        onClick={() => {
                          setSelectedServers([])
                          setSelectedLocations([])
                          setSelectedTypes([])
                        }}
                        className="text-xs text-gray-500 hover:text-white transition-colors"
                      >
                        Tout effacer
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedServers.map(server => (
                        <button
                          key={server}
                          onClick={() => toggleServer(server)}
                          className="px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
                        >
                          {server}
                          <span className="text-lg leading-none">&times;</span>
                        </button>
                      ))}
                      {selectedLocations.map(location => (
                        <button
                          key={location}
                          onClick={() => toggleLocation(location)}
                          className="px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
                        >
                          {location}
                          <span className="text-lg leading-none">&times;</span>
                        </button>
                      ))}
                      {selectedTypes.map(type => (
                        <button
                          key={type}
                          onClick={() => toggleType(type)}
                          className="px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2"
                        >
                          {type}
                          <span className="text-lg leading-none">&times;</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </header>

              <div className="text-gray-500 text-sm font-medium mb-6 mt-8">
                {filteredAnnuaire.length} établissement{filteredAnnuaire.length > 1 ? 's' : ''}
              </div>

              <div className="space-y-4">
                {filteredAnnuaire.map(etab => (
                  <div key={etab.id} className="establishment-card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{etab.name}</h3>
                        
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 text-xs uppercase tracking-wider">{etab.datacenter}</span>
                              <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                              <span className="text-gray-400 font-medium">{etab.server}</span>
                            </div>
                            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                            <span className="text-gray-400">{etab.location}</span>
                            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                            <div className="flex items-center gap-2 text-gray-400">
                              <MapPin className="w-4 h-4" />
                              <span>
                                Secteur {etab.secteur}{etab.annexe ? ' (Annexe)' : ''} - {etab.appartement ? 'Appartement ' : ''}N°{etab.numero}
                              </span>
                            </div>
                          </div>
                          
                          {etab.horaires && (
                            <div className="flex items-start gap-2 text-gray-400 text-sm">
                              <Clock className="w-4 h-4 mt-0.5" />
                              <div>
                                {typeof etab.horaires === 'string' ? (
                                  <span>{etab.horaires}</span>
                                ) : (
                                  <div className="space-y-0.5">
                                    {etab.horaires.map((horaire, index) => (
                                      <div key={index}>
                                        {horaire.jour} {horaire.heures}
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        {etab.url && (
                          <a
                            href={etab.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            Site web
                          </a>
                        )}
                        {etab.discord && (
                          <a
                            href={etab.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                            title="Discord"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                    {etab.types && etab.types.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {etab.types.map(type => (
                          <span key={type} className="tag">
                            {type}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {filteredAnnuaire.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">Aucun établissement trouvé</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {selectedCategory && selectedCategory.title === 'ARTISTES' && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-8">
              <button
                onClick={() => {
                  window.location.hash = ''
                  setSelectedCategory(null)
                }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour</span>
              </button>

              <header className="mb-8">
                <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">ARTISTES</h1>
                
                <div className="flex gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Rechercher un artiste..."
                      value={searchArtiste}
                      onChange={(e) => setSearchArtiste(e.target.value)}
                      className="w-full bg-zinc-900/50 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors"
                    />
                  </div>
                  <select
                    value={sortArtistes}
                    onChange={(e) => setSortArtistes(e.target.value)}
                    className="appearance-none bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer"
                  >
                    <option value="asc">A → Z</option>
                    <option value="desc">Z → A</option>
                  </select>
                </div>
              </header>

              <div className="text-gray-500 text-sm font-medium mb-6">
                {artistesData.filter(artiste => artiste.name.toLowerCase().includes(searchArtiste.toLowerCase())).length} artiste{artistesData.filter(artiste => artiste.name.toLowerCase().includes(searchArtiste.toLowerCase())).length > 1 ? 's' : ''}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artistesData
                  .filter(artiste => artiste.name.toLowerCase().includes(searchArtiste.toLowerCase()))
                  .sort((a, b) => {
                    if (sortArtistes === 'asc') {
                      return a.name.localeCompare(b.name)
                    } else {
                      return b.name.localeCompare(a.name)
                    }
                  })
                  .map(artiste => (
                    <div key={artiste.id} className="establishment-card">
                      <div className="flex items-start gap-4 mb-4">
                        {artiste.logo && (
                          <img src={artiste.logo} alt={artiste.name} className="h-16 max-w-32 object-contain" />
                        )}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{artiste.name}</h3>
                          <p className="text-gray-400 text-sm">{artiste.styleMusical}</p>
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {artiste.url && (
                          <a
                            href={artiste.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            title="Site web"
                          >
                            Site web
                          </a>
                        )}
                        {artiste.youtube && (
                          <a
                            href={artiste.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                            title="YouTube"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          </a>
                        )}
                        {artiste.discord && (
                          <a
                            href={artiste.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex items-center gap-2"
                            title="Discord"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
              </div>

              {artistesData.filter(artiste => artiste.name.toLowerCase().includes(searchArtiste.toLowerCase())).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Aucun artiste trouvé</p>
                </div>
              )}
            </div>
          </div>
        )}

        {selectedCategory && selectedCategory.title === 'RESSOURCES' && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-8">
              <button
                onClick={() => {
                  window.location.hash = ''
                  setSelectedCategory(null)
                }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour</span>
              </button>

              <header className="mb-12">
                <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">RESSOURCES</h1>
              </header>

              <div className="space-y-4 max-w-3xl">
                <h2 className="text-2xl font-bold text-white mb-4">Liens importants</h2>
                
                <a
                  href="https://discord.gg/KKJSb3rKjD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white flex-shrink-0">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <div>
                      <h3 className="text-white font-semibold">Discord du Nexus</h3>
                      <p className="text-gray-400 text-sm">Rejoignez la communauté officielle</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://heliosphere.app/mod/wnpyxb0ht96rfd85xzd3gqpgs0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-6 h-6 text-white flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">Cyberpunk - Paysages magiques</h3>
                      <p className="text-gray-400 text-sm mb-2">Mod modifiant les paysages magiques du jeu au profit de paysages du jeu Cyberpunk 2077</p>
                      <span className="inline-block bg-zinc-800 text-gray-300 text-xs px-2 py-1 rounded">Meuble</span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://heliosphere.app/mod/va3w4snr550hfdpef5qtyqdpq8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-6 h-6 text-white flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">25th Hour - Distributeur</h3>
                      <p className="text-gray-400 text-sm mb-2">Distributeur pour la boisson énergisante au café 25th Hour</p>
                      <span className="inline-block bg-zinc-800 text-gray-300 text-xs px-2 py-1 rounded">Meuble de jardin</span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://heliosphere.app/mod/wyea6wmr990gf66fdcsq1q9a70"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-6 h-6 text-white flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">25th Hour - Canette</h3>
                      <p className="text-gray-400 text-sm mb-2">Canette de la boisson énergisante au café 25th Hour</p>
                      <span className="inline-block bg-zinc-800 text-gray-300 text-xs px-2 py-1 rounded">Mascotte</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {selectedCategory && selectedCategory.title === 'RÉSEAUX' && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-8">
              <button
                onClick={() => {
                  window.location.hash = ''
                  setSelectedCategory(null)
                }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour</span>
              </button>

              <header className="mb-8">
                <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">RÉSEAUX</h1>
              </header>

              <div className="text-gray-500 text-sm font-medium mb-6">
                {reseauxData.length} réseau{reseauxData.length > 1 ? 'x' : ''}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reseauxData.map(reseau => (
                  <button
                    key={reseau.id}
                    onClick={() => {
                      setSelectedReseau(reseau)
                      window.location.hash = reseau.name.toLowerCase()
                    }}
                    className="bg-zinc-900/50 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors text-left w-full"
                  >
                    <div className="flex flex-col items-center text-center gap-4">
                      <img src={reseau.logo} alt={reseau.name} className="h-16 max-w-32 object-contain" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{reseau.name}</h3>
                        {reseau.equivalent && (
                          <p className="text-gray-500 text-xs mt-1">({reseau.equivalent})</p>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm">{reseau.description}</p>
                      <p className="text-blue-400 text-xs mt-2">Créer un post →</p>
                    </div>
                  </button>
                ))}
              </div>

              {reseauxData.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Aucun réseau disponible pour le moment</p>
                </div>
              )}
            </div>
          </div>
        )}

        {selectedReseau && selectedReseau.name === 'Neolens' && (
          <NeolensGenerator
            neolensPost={neolensPost}
            setNeolensPost={setNeolensPost}
            onBack={() => {
              setSelectedReseau(null)
              window.location.hash = 'réseaux'
            }}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            dragStart={dragStart}
            setDragStart={setDragStart}
            isDraggingAvatar={isDraggingAvatar}
            setIsDraggingAvatar={setIsDraggingAvatar}
            dragStartAvatar={dragStartAvatar}
            setDragStartAvatar={setDragStartAvatar}
            showComments={showComments}
            setShowComments={setShowComments}
            showMentions={showMentions}
            setShowMentions={setShowMentions}
          />
        )}

        {selectedReseau && selectedReseau.name === 'Holofans' && (
          <HolofansGenerator
            holofansPost={holofansPost}
            setHolofansPost={setHolofansPost}
            onBack={() => {
              setSelectedReseau(null)
              window.location.hash = 'réseaux'
            }}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            dragStart={dragStart}
            setDragStart={setDragStart}
            isDraggingAvatar={isDraggingAvatar}
            setIsDraggingAvatar={setIsDraggingAvatar}
            dragStartAvatar={dragStartAvatar}
            setDragStartAvatar={setDragStartAvatar}
            showComments={showComments}
            setShowComments={setShowComments}
          />
        )}

        {selectedReseau && selectedReseau.name === 'Ping' && (
          <PingGenerator
            pingPost={pingPost}
            setPingPost={setPingPost}
            onBack={() => {
              setSelectedReseau(null)
              window.location.hash = 'réseaux'
            }}
            isDragging={isDragging}
            setIsDragging={setIsDragging}
            dragStart={dragStart}
            setDragStart={setDragStart}
            isDraggingAvatar={isDraggingAvatar}
            setIsDraggingAvatar={setIsDraggingAvatar}
            dragStartAvatar={dragStartAvatar}
            setDragStartAvatar={setDragStartAvatar}
            showComments={showComments}
            setShowComments={setShowComments}
          />
        )}

        {selectedCategory && selectedCategory.title !== 'ANNUAIRE' && selectedCategory.title !== 'ARTISTES' && selectedCategory.title !== 'RÉSEAUX' && selectedCategory.title !== 'RESSOURCES' && (
          <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
            <div className="max-w-7xl mx-auto p-8">
              <button
                onClick={() => {
                  window.location.hash = ''
                  setSelectedCategory(null)
                }}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour</span>
              </button>
              <h1 className="text-4xl font-bold text-white mb-6">{selectedCategory.title}</h1>
              <div className="text-center py-12">
                <p className="text-gray-500">Aucun contenu disponible pour le moment</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default App
