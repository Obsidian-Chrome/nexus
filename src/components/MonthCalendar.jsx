import { useState } from 'react'
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

const MonthCalendar = ({ events, onDayClick }) => {
  const safeEvents = events && Array.isArray(events) ? events : []
  
  const now = new Date()
  const [currentDate, setCurrentDate] = useState(new Date(now.getFullYear(), now.getMonth(), 1))
  
  const currentMonth = currentDate.toLocaleString('fr-FR', { month: 'long', year: 'numeric' })
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
  const startDay = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1
  const daysInMonth = lastDay.getDate()
  
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }
  
  const eventsByDate = {}
  safeEvents.forEach(event => {
    if (event.scheduledStartTime) {
      const date = new Date(event.scheduledStartTime)
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
      if (!eventsByDate[key]) eventsByDate[key] = []
      eventsByDate[key].push(event)
    }
  })
  
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded lg:rounded-r-none lg:border-r-0 h-full">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6 text-cyan-400" />
        Calendrier
      </h2>
      
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-zinc-800 rounded transition-colors"
          title="Mois précédent"
        >
          <ChevronLeft className="w-5 h-5 text-cyan-400" />
        </button>
        <div className="text-xl font-semibold text-cyan-400 capitalize">
          {currentMonth}
        </div>
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-zinc-800 rounded transition-colors"
          title="Mois suivant"
        >
          <ChevronRight className="w-5 h-5 text-cyan-400" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
          <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square"></div>
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
          const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
          const hasEvents = eventsByDate[key]?.length > 0
          const isToday = day === now.getDate() && 
                          currentDate.getMonth() === now.getMonth() && 
                          currentDate.getFullYear() === now.getFullYear()
          
          return (
            <div
              key={day}
              onClick={() => hasEvents && onDayClick && onDayClick(eventsByDate[key], date)}
              className={`aspect-square flex flex-col items-center justify-center rounded border ${
                isToday 
                  ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]' 
                  : hasEvents
                  ? 'border-zinc-700 bg-zinc-800/50 text-white hover:border-cyan-500/50 cursor-pointer transition-colors'
                  : 'border-zinc-800/50 text-gray-500'
              }`}
            >
              <span className="text-sm">{day}</span>
              {hasEvents && (
                <div className="flex gap-0.5 mt-1">
                  {eventsByDate[key].slice(0, 3).map((_, idx) => (
                    <div key={idx} className="w-1 h-1 rounded-full bg-cyan-400"></div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MonthCalendar
