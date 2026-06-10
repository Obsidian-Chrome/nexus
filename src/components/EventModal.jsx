import { X, Clock, MapPin } from 'lucide-react'

const EventModal = ({ events, date, onClose, onEventClick }) => {
  if (!events || events.length === 0) return null
  
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.scheduledStartTime) - new Date(b.scheduledStartTime)
  )
  
  const formattedDate = date.toLocaleDateString('fr-FR', { 
    weekday: 'long', 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  })
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white capitalize">{formattedDate}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          {sortedEvents.map(event => {
            const startTime = new Date(event.scheduledStartTime)
            const endTime = event.scheduledEndTime ? new Date(event.scheduledEndTime) : null
            
            return (
              <div
                key={event.id}
                onClick={() => onEventClick && onEventClick(event)}
                className="border border-zinc-800 rounded p-4 hover:border-cyan-500/50 transition-colors cursor-pointer"
              >
                {event.image && (
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                )}
                
                {event.status === 2 && (
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-semibold text-red-400">EN COURS</span>
                  </div>
                )}
                
                <h3 className="text-lg font-bold text-white mb-2">{event.name}</h3>
                
                <div className="space-y-1 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>
                      {startTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                      {endTime && ` - ${endTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`}
                    </span>
                  </div>
                  {event.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs">{event.location}</span>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventModal
