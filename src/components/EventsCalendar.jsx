import { Calendar, Clock, MapPin } from 'lucide-react'

const EventsCalendar = ({ events, onEventClick }) => {
  const safeEvents = events && Array.isArray(events) ? events : []
  
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  const todayEvents = safeEvents
    .filter(event => {
      if (!event.scheduledStartTime) return false
      const eventDate = new Date(event.scheduledStartTime)
      return eventDate >= today && eventDate < tomorrow
    })
    .sort((a, b) => new Date(a.scheduledStartTime) - new Date(b.scheduledStartTime))
  
  return (
    <div className="lg:sticky lg:top-8 h-full">
      <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded lg:rounded-l-none lg:border-l-0 flex flex-col h-full">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 flex-shrink-0">
          <Clock className="w-6 h-6 text-cyan-400" />
          Événements du jour
        </h2>
        
        <div className="overflow-y-auto flex-1 pr-2 -mr-2">
          {todayEvents.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">Aucun événement prévu aujourd'hui</p>
            </div>
          ) : (
            <div className="space-y-4">
            {todayEvents.map(event => {
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
                  
                  <div className="space-y-1 text-sm text-gray-400 mb-3">
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
                  
                  {event.description && (
                    <p className="text-sm text-gray-400 line-clamp-3">{event.description}</p>
                  )}
                </div>
              )
            })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventsCalendar
