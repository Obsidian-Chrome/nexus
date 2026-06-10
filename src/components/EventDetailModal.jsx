import { X, Clock, MapPin, Users } from 'lucide-react'

const EventDetailModal = ({ event, onClose }) => {
  if (!event) return null
  
  const startTime = new Date(event.scheduledStartTime)
  const endTime = event.scheduledEndTime ? new Date(event.scheduledEndTime) : null
  
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">{event.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {event.image && (
          <img 
            src={event.image} 
            alt={event.name}
            className="w-full h-64 object-cover rounded mb-6"
          />
        )}
        
        {event.status === 2 && (
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-sm font-semibold text-red-400">ÉVÉNEMENT EN COURS</span>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 text-gray-300">
            <Clock className="w-5 h-5 text-cyan-400" />
            <div>
              <p className="text-sm text-gray-500">Horaire</p>
              <p className="font-semibold">
                {startTime.toLocaleString('fr-FR', { 
                  weekday: 'long',
                  day: 'numeric', 
                  month: 'long',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              {endTime && (
                <p className="text-sm text-gray-400">
                  Fin : {endTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              )}
            </div>
          </div>
          
          {event.location && (
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-500">Lieu</p>
                <p className="font-semibold">{event.location}</p>
              </div>
            </div>
          )}
          
          {event.userCount && (
            <div className="flex items-center gap-3 text-gray-300">
              <Users className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-500">Participants</p>
                <p className="font-semibold">{event.userCount} inscrits</p>
              </div>
            </div>
          )}
        </div>
        
        {event.description && (
          <div className="mt-6">
            <h3 className="text-xl font-bold text-white mb-3">Description</h3>
            <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
              {event.description}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default EventDetailModal
