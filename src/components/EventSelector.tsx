import React from 'react';
import { BriefcaseIcon, UmbrellaIcon, GlassesIcon, HeartIcon } from 'lucide-react';
export function EventSelector({
  selectedEvent,
  setSelectedEvent
}) {
  const events = [{
    id: 'work',
    label: 'Work',
    icon: BriefcaseIcon
  }, {
    id: 'casual',
    label: 'Casual',
    icon: UmbrellaIcon
  }, {
    id: 'formal',
    label: 'Formal',
    icon: GlassesIcon
  }, {
    id: 'date',
    label: 'Date',
    icon: HeartIcon
  }];
  return <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {events.map(event => {
      const Icon = event.icon;
      return <button key={event.id} className={`flex flex-col items-center justify-center p-3 rounded-lg border ${selectedEvent === event.id ? 'bg-indigo-50 border-indigo-300' : 'bg-white border-gray-200 hover:bg-gray-50'}`} onClick={() => setSelectedEvent(event.id)}>
            <Icon className={`h-6 w-6 ${selectedEvent === event.id ? 'text-indigo-600' : 'text-gray-500'}`} />
            <span className={`text-sm mt-1 ${selectedEvent === event.id ? 'text-indigo-600 font-medium' : 'text-gray-600'}`}>
              {event.label}
            </span>
          </button>;
    })}
    </div>;
}