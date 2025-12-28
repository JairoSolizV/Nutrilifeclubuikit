import React, { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Star, Calendar } from 'lucide-react';

interface ClubDetailEventsProps {
  onNavigate: (screen: Screen) => void;
}

export default function ClubDetailEvents({ onNavigate }: ClubDetailEventsProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'menu' | 'events'>('events');

  const handleTabChange = (tab: 'info' | 'menu' | 'events') => {
    setActiveTab(tab);
    if (tab === 'info') {
      onNavigate('club-info');
    } else if (tab === 'menu') {
      onNavigate('club-menu');
    }
  };

  const events = [
    {
      date: 'HOY',
      time: '18:00',
      title: 'Fit Camp Grupal',
      canRegister: true
    },
    {
      date: 'MAÑANA',
      time: '09:00',
      title: 'Charla de Nutrición',
      canRegister: true
    },
    {
      date: '26 DIC',
      time: '17:00',
      title: 'Clase de Yoga',
      canRegister: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center px-6 py-3 text-white">
        <span className="text-sm">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-white/60 rounded-sm"></div>
          <div className="w-4 h-3 bg-white/60 rounded-sm"></div>
          <div className="w-4 h-3 bg-white/60 rounded-sm"></div>
        </div>
      </div>

      {/* Header Image */}
      <div className="relative h-64">
        <img
          src="https://images.unsplash.com/photo-1761971976282-b2bb051a5474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFsdGglMjBjbHViJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY2NjA3MzI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Club interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        <button
          onClick={() => onNavigate('map')}
          className="absolute top-14 left-6 p-2 bg-white/90 rounded-full shadow-lg"
        >
          <ArrowLeft className="w-6 h-6 text-[#333333]" />
        </button>
      </div>

      {/* Title Section */}
      <div className="bg-white px-6 py-5 -mt-8 relative rounded-t-3xl shadow-lg">
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <h2 className="text-[#333333]">Club Vida Activa - Centro</h2>
            <p className="text-gray-500 text-sm mt-1">Anfitrión: Juan Pérez</p>
          </div>
          <div className="px-3 py-1 bg-green-100 text-[#7AC142] rounded-full text-sm whitespace-nowrap ml-2">
            Abierto Ahora
          </div>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 flex">
        <button
          onClick={() => handleTabChange('info')}
          className={`flex-1 py-4 text-center border-b-2 transition-colors ${
            activeTab === 'info'
              ? 'border-[#7AC142] text-[#7AC142]'
              : 'border-transparent text-gray-500'
          }`}
        >
          Información
        </button>
        <button
          onClick={() => handleTabChange('menu')}
          className={`flex-1 py-4 text-center border-b-2 transition-colors ${
            activeTab === 'menu'
              ? 'border-[#7AC142] text-[#7AC142]'
              : 'border-transparent text-gray-500'
          }`}
        >
          Menú
        </button>
        <button
          onClick={() => handleTabChange('events')}
          className={`flex-1 py-4 text-center border-b-2 transition-colors ${
            activeTab === 'events'
              ? 'border-[#7AC142] text-[#7AC142]'
              : 'border-transparent text-gray-500'
          }`}
        >
          Eventos
        </button>
      </div>

      {/* Events Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 bg-white">
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4">
              {/* Date/Time */}
              <div className="flex flex-col items-center justify-center w-20 h-20 bg-green-50 rounded-2xl">
                <span className="text-[#7AC142] text-xs">{event.date}</span>
                <span className="text-[#333333] mt-1">{event.time}</span>
              </div>

              {/* Event Title */}
              <div className="flex-1">
                <h4 className="text-[#333333]">{event.title}</h4>
              </div>

              {/* Register Button */}
              {event.canRegister && (
                <button className="px-4 py-2 bg-[#7AC142] text-white rounded-full text-sm hover:bg-[#6BB032] transition-colors whitespace-nowrap">
                  Apuntarme
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Footer Button */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <button className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg hover:bg-[#6BB032] transition-colors">
          Cómo llegar (GPS)
        </button>
      </div>
    </div>
  );
}
