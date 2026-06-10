import { Calendar, Clock, X } from 'lucide-react'

const EventFilters = ({ filters, onFiltersChange }) => {
  const handleDateChange = (field, value) => {
    onFiltersChange({
      ...filters,
      [field]: value
    })
  }

  const handleTimeChange = (field, value) => {
    onFiltersChange({
      ...filters,
      [field]: value
    })
  }

  const clearFilters = () => {
    onFiltersChange({
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: ''
    })
  }

  const hasActiveFilters = filters.startDate || filters.endDate || filters.startTime || filters.endTime

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-cyan-400" />
          Filtres
        </h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Réinitialiser
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Date de début</label>
          <input
            type="date"
            value={filters.startDate}
            onChange={(e) => handleDateChange('startDate', e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Date de fin</label>
          <input
            type="date"
            value={filters.endDate}
            onChange={(e) => handleDateChange('endDate', e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Heure de début
          </label>
          <input
            type="time"
            value={filters.startTime}
            onChange={(e) => handleTimeChange('startTime', e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Heure de fin
          </label>
          <input
            type="time"
            value={filters.endTime}
            onChange={(e) => handleTimeChange('endTime', e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"
          />
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-3 flex flex-wrap gap-2">
          {filters.startDate && (
            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
              Depuis: {new Date(filters.startDate).toLocaleDateString('fr-FR')}
            </span>
          )}
          {filters.endDate && (
            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
              Jusqu'à: {new Date(filters.endDate).toLocaleDateString('fr-FR')}
            </span>
          )}
          {filters.startTime && (
            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
              Après: {filters.startTime}
            </span>
          )}
          {filters.endTime && (
            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
              Avant: {filters.endTime}
            </span>
          )}
        </div>
      )}
    </div>
  )
}

export default EventFilters
