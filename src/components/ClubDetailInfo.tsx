import React, { useState } from 'react';
import { Screen, NavigationAction } from '../App';
import { ArrowLeft, Star, Wifi, Wind, Navigation } from 'lucide-react';

interface ClubDetailInfoProps {
  onNavigate: (screen: NavigationAction) => void;
}

export default function ClubDetailInfo({ onNavigate }: ClubDetailInfoProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'menu' | 'events'>('info');

  const handleTabChange = (tab: 'info' | 'menu' | 'events') => {
    setActiveTab(tab);
    if (tab === 'menu') {
      onNavigate('club-menu');
    } else if (tab === 'events') {
      onNavigate('club-events');
    }
  };

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
          onClick={() => onNavigate('BACK')}
          className="absolute top-14 left-6 p-2 bg-white/90 rounded-full shadow-lg z-30"
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
          className={`flex-1 py-4 text-center border-b-2 transition-colors ${activeTab === 'info'
            ? 'border-[#7AC142] text-[#7AC142]'
            : 'border-transparent text-gray-500'
            }`}
        >
          Información
        </button>
        <button
          onClick={() => handleTabChange('menu')}
          className={`flex-1 py-4 text-center border-b-2 transition-colors ${activeTab === 'menu'
            ? 'border-[#7AC142] text-[#7AC142]'
            : 'border-transparent text-gray-500'
            }`}
        >
          Menú
        </button>
        <button
          onClick={() => handleTabChange('events')}
          className={`flex-1 py-4 text-center border-b-2 transition-colors ${activeTab === 'events'
            ? 'border-[#7AC142] text-[#7AC142]'
            : 'border-transparent text-gray-500'
            }`}
        >
          Eventos
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 bg-white">
        {/* Mini Map */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl h-32 mb-6 relative overflow-hidden">
          <svg width="100%" height="100%" className="opacity-20">
            <pattern id="map-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#7AC142" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#map-grid)" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-12 bg-[#7AC142] rounded-t-full rounded-bl-full shadow-lg flex items-center justify-center">
              <Navigation className="w-5 h-5 text-white -mt-1" />
            </div>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs">
            Av. Principal 123
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-[#333333] mb-4">Servicios</h3>
          <div className="flex gap-4">
            <div className="flex-1 bg-[#F5F5F5] rounded-2xl p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                <Wifi className="w-6 h-6 text-[#7AC142]" />
              </div>
              <span className="text-sm text-gray-700">Wi-Fi</span>
            </div>
            <div className="flex-1 bg-[#F5F5F5] rounded-2xl p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2">
                <Wind className="w-6 h-6 text-[#7AC142]" />
              </div>
              <span className="text-sm text-gray-700">Aire Acond.</span>
            </div>
          </div>
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
