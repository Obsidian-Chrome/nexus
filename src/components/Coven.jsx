import { ArrowLeft, Play } from 'lucide-react'

const Coven = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="min-h-screen relative">
        {/* Header avec retour */}
        <div className="border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <button
              onClick={() => window.location.hash = ''}
              className="flex items-center space-x-2 text-white/80 hover:text-cyan-400 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour</span>
            </button>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-white tracking-wider">
              // COVEN
            </h1>
            <div className="w-24"></div>
          </div>
        </div>

        {/* Contenu */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card Visualizer */}
            <a
              href="#coven/visualizer"
              className="block bg-zinc-900/50 border border-zinc-800 p-6 hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center group-hover:bg-cyan-500/30 transition-all">
                    <Play className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Visualizer
                  </h2>
                  <p className="text-gray-400 text-sm">
                    Diffusion de concerts et événements en direct avec filtres personnalisés
                  </p>
                </div>
              </div>
            </a>

            {/* Placeholder pour futures sections */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-6 opacity-50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <span className="text-zinc-600 text-xl">?</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-zinc-600 mb-2">
                    Bientôt disponible
                  </h2>
                  <p className="text-zinc-600 text-sm">
                    D'autres sections seront ajoutées ici
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Coven
