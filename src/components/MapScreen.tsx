import React from 'react';
import { Screen, UserType, NavigationAction } from '../App';
import { ArrowLeft, Search, SlidersHorizontal, MapPin, Clock, Navigation } from 'lucide-react';
import GuestBottomNav from './GuestBottomNav';
import BasicUserBottomNav from './BasicUserBottomNav';
import MemberBottomNav from './MemberBottomNav';

interface MapScreenProps {
  onNavigate: (screen: NavigationAction) => void;
  userType: UserType;
}

export default function MapScreen({ onNavigate, userType }: MapScreenProps) {
  /* State for Filters Drawer */
  const [showFilters, setShowFilters] = React.useState(false);

  const handleBack = () => {
    onNavigate('BACK');
  };

  return (
    <div className="h-screen flex flex-col bg-[#F5F5F5] relative overflow-hidden">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center px-6 py-3 bg-white">
        <span className="text-sm">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={handleBack} className="text-[#333333]">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar club..."
              className="w-full pl-12 pr-4 py-3 bg-[#F5F5F5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#7AC142]"
            />
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className="p-2 bg-[#7AC142] rounded-full text-white"
          >
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          <div className="px-4 py-2 bg-[#7AC142] text-white rounded-full text-sm whitespace-nowrap">
            Solo Activos
          </div>
          <div className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm whitespace-nowrap">
            Abierto ahora
          </div>
          <div className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm whitespace-nowrap">
            Más cercanos
          </div>
          <div className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm whitespace-nowrap">
            Con Wi-Fi
          </div>
        </div>

        {/* Active Clubs Notice */}
        <div className="mt-3 flex items-center gap-2 text-xs text-gray-600 bg-green-50 px-3 py-2 rounded-lg">
          <div className="w-2 h-2 bg-[#7AC142] rounded-full animate-pulse"></div>
          <span>Mostrando solo clubes aprobados y activos</span>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative bg-gradient-to-br from-green-50 to-blue-50">
        {/* Map Background Pattern */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="opacity-20">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#7AC142" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* User Location Dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
        </div>

        {/* Club Pins */}
        <div className="absolute top-1/3 left-1/3">
          <button
            onClick={() => onNavigate('club-info')}
            className="relative"
          >
            <div className="w-12 h-16 bg-[#7AC142] rounded-t-full rounded-bl-full shadow-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white -mt-2" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7AC142]/50 rounded-full blur-sm"></div>
          </button>
        </div>

        <div className="absolute top-1/2 right-1/4">
          <button className="relative">
            <div className="w-12 h-16 bg-[#7AC142] rounded-t-full rounded-bl-full shadow-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white -mt-2" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7AC142]/50 rounded-full blur-sm"></div>
          </button>
        </div>

        <div className="absolute bottom-1/3 left-2/3">
          <button className="relative">
            <div className="w-12 h-16 bg-[#7AC142] rounded-t-full rounded-bl-full shadow-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white -mt-2" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7AC142]/50 rounded-full blur-sm"></div>
          </button>
        </div>
      </div>

      {/* Bottom Sheet - Club Info */}
      <div className="bg-white rounded-t-3xl px-6 py-5 z-10 relative">
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

        <div className="space-y-3">
          <div>
            <h3 className="text-[#333333]">Club Vida Activa</h3>
            <p className="text-gray-500 text-sm mt-1">Av. Principal 123</p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-[#7AC142]">
              <Navigation className="w-4 h-4" />
              <span>0.3 km</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>Abierto hasta 20:00</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('club-info')}
            className="w-full bg-[#7AC142] text-white py-3 rounded-full hover:bg-[#6BB032] transition-colors"
          >
            Ver detalles
          </button>
        </div>
      </div>

      {userType === 'member' ? (
        <MemberBottomNav activeScreen="home" onNavigate={onNavigate} />
      ) : userType === 'basic' ? (
        <BasicUserBottomNav activeScreen="map" onNavigate={onNavigate} />
      ) : (
        <GuestBottomNav activeScreen="map" onNavigate={onNavigate} />
      )}

      {/* Filter Overlay/Drawer */}
      {showFilters && (
        <div className="absolute inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowFilters(false)}
          ></div>
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6 animate-in slide-in-from-bottom duration-300">
            <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-6"></div>

            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-[#333333]">Filtros</h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-[#7AC142] text-sm font-medium"
              >
                Limpiar Todo
              </button>
            </div>

            <div className="space-y-6">
              {/* Categories */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Categorías</h4>
                <div className="flex flex-wrap gap-2">
                  {['Club de Nutrición', 'Fit Club', 'Protein Bar', 'Yoga'].map((cat) => (
                    <button key={cat} className="px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm hover:border-[#7AC142] hover:text-[#7AC142] hover:bg-green-50 transition-colors">
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Distance Slider Mock */}
              <div>
                <div className="flex justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-700">Distancia</h4>
                  <span className="text-sm text-gray-500">Hasta 5 km</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-[#7AC142] rounded-full"></div>
                  <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#7AC142] rounded-full shadow-md"></div>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Calificación</h4>
                <div className="flex gap-2">
                  {[5, 4, 3].map((star) => (
                    <button key={star} className="flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-600">
                      <span>{star}</span>
                      <span className="text-yellow-400">★</span>
                      <span>y más</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg font-medium hover:bg-[#6BB032] transition-colors mt-4"
              >
                Aplicar Filtros (12)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}