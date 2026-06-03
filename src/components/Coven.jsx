import { ArrowLeft, Play, Wine } from 'lucide-react'

const Coven = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
      <div className="min-h-screen relative">
        {/* Header avec retour */}
        <div className="border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
            <button
              onClick={() => window.location.hash = ''}
              className="flex items-center space-x-2 text-white/80 hover:text-red-400 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour</span>
            </button>
            <img 
              src="/coven/coven_logo.png" 
              alt="Coven" 
              className="h-24 object-contain"
            />
            <div className="w-24"></div>
          </div>
        </div>

        {/* Contenu */}
        <div className="max-w-4xl mx-auto px-8 py-24">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            
            {/* Card Visualizer */}
            <a
              href="#coven/visualizer"
              className="flex-1 max-w-md bg-zinc-900/50 border border-zinc-800 p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center group-hover:bg-red-500/30 transition-all">
                  <Play className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                  Visualizer
                </h2>
              </div>
            </a>

            {/* Card Carte */}
            <div className="flex-1 max-w-md bg-zinc-900/50 border border-zinc-800 p-8 opacity-50 cursor-not-allowed">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                  <Wine className="w-8 h-8 text-red-400/50" />
                </div>
                <h2 className="text-2xl font-bold text-white/50">
                  Carte
                </h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Coven
