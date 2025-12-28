import React from 'react';
import { Screen } from '../App';
import { Home, Compass, LogIn, MapPin, Apple, Droplet } from 'lucide-react';

interface GuestHomeScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function GuestHomeScreen({ onNavigate }: GuestHomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center px-6 py-3 bg-white">
        <span className="text-sm">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[#333333]">Hola, Invitado</h2>
            <div className="flex items-center gap-1 mt-1 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Santa Cruz</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Hero Carousel */}
        <div className="relative w-full h-48 rounded-3xl overflow-hidden mb-6 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1628829706300-d1ed475bfc9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwd29ya291dHxlbnwxfHx8fDE3NjY2MDczMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Exercise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-white">Descubre tu mejor versión</h3>
          </div>
          {/* Carousel Dots */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Large Card 1 */}
          <button
            onClick={() => onNavigate('nutrition')}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow aspect-square flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <Apple className="w-8 h-8 text-[#7AC142]" />
            </div>
            <span className="text-[#333333]">Nutrición al Día</span>
          </button>

          {/* Large Card 2 */}
          <button
            onClick={() => onNavigate('map')}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-shadow aspect-square flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <MapPin className="w-8 h-8 text-[#7AC142]" />
            </div>
            <span className="text-[#333333]">Encuentra tu Club</span>
          </button>

          {/* Rectangular Card */}
          <div className="col-span-2 bg-gradient-to-r from-[#7AC142] to-[#6BB032] rounded-3xl p-6 shadow-md flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div className="text-white">
              <p className="text-sm opacity-90">Catálogo de Sabores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-t border-gray-200 px-8 py-4 flex justify-around items-center">
        <button className="flex flex-col items-center gap-1 text-[#7AC142]">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>
        <button
          onClick={() => onNavigate('map')}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <Compass className="w-6 h-6" />
          <span className="text-xs">Explorar</span>
        </button>
        <button
          onClick={() => onNavigate('login')}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <LogIn className="w-6 h-6" />
          <span className="text-xs">Ingresar</span>
        </button>
      </div>
    </div>
  );
}
