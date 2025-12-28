import React, { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Star } from 'lucide-react';

interface ClubDetailMenuProps {
  onNavigate: (screen: Screen) => void;
}

export default function ClubDetailMenu({ onNavigate }: ClubDetailMenuProps) {
  const [activeTab, setActiveTab] = useState<'info' | 'menu' | 'events'>('menu');

  const handleTabChange = (tab: 'info' | 'menu' | 'events') => {
    setActiveTab(tab);
    if (tab === 'info') {
      onNavigate('club-info');
    } else if (tab === 'events') {
      onNavigate('club-events');
    }
  };

  const menuItems = [
    {
      name: 'Batido Choco-Avellana',
      image: 'https://images.unsplash.com/photo-1675897275724-202ce4be4f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBzaGFrZSUyMHNtb290aGllfGVufDF8fHx8MTc2NjYwNzMyNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Té Energizante',
      image: 'https://images.unsplash.com/photo-1729259586570-639957809271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlYSUyMGN1cHxlbnwxfHx8fDE3NjY2MDM3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      name: 'Waffles Proteicos',
      image: 'https://images.unsplash.com/photo-1745906983467-46513bcf5fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwd2FmZmxlcyUyMGhlYWx0aHl8ZW58MXx8fHwxNzY2NjA3MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080'
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

      {/* Menu Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 bg-white">
        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-[#333333] text-sm text-center">{item.name}</p>
              </div>
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
