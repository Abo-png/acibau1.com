import React, { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react';
import { EVENTS } from '../services/data';

const Events: React.FC = () => {
  const [filter, setFilter] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = EVENTS.filter(e => e.status === filter);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Events Calendar</h1>
            <p className="text-gray-500 mt-2">Workshops, seminars, and site visits.</p>
          </div>
          
          <div className="mt-6 md:mt-0 bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'upcoming' 
                  ? 'bg-white text-blue-700 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                filter === 'past' 
                  ? 'bg-white text-blue-700 shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-24 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <CalendarIcon className="mx-auto h-12 w-12 text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">No {filter} events found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide text-gray-800 shadow-sm">
                    {event.date}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    {event.time && (
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-2" />
                        {event.time}
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={16} className="mr-2" />
                        {event.location}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-6 flex-1">{event.description}</p>
                  
                  {filter === 'upcoming' && (
                    <button 
                      className={`w-full py-3 rounded-lg font-semibold text-sm transition-colors ${
                        event.isOpenForRegistration 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!event.isOpenForRegistration}
                    >
                      {event.isOpenForRegistration ? 'Register Now' : 'Registration Closed'}
                    </button>
                  )}
                  {filter === 'past' && (
                    <button className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors">
                      View Gallery
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;