import React from 'react';
import { Screen, NavigationAction, UserType } from '../App';
import { Home, MapPin, User, Search, Apple } from 'lucide-react';
import BasicUserBottomNav from './BasicUserBottomNav';

interface BasicUserHomeScreenProps {
  onNavigate: (screen: NavigationAction, userType?: UserType) => void;
}

export default function BasicUserHomeScreen({ onNavigate }: BasicUserHomeScreenProps) {
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
        <h2 className="text-[#333333]">Hola, Carlos</h2>
        <p className="text-gray-500 text-sm mt-1">Empieza tu camino saludable</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        {/* Main Feature Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-6">
          {/* Top Half - Find Clubs Button */}
          <div className="p-6 border-b border-gray-100">
            <button
              onClick={() => onNavigate('map', 'basic')}
              className="w-full bg-[#7AC142] text-white py-4 rounded-full flex items-center justify-center gap-2 shadow-md hover:bg-[#6BB032] transition-colors"
            >
              <Search className="w-5 h-5" />
              Buscar Clubes Cercanos
            </button>
          </div>

          {/* Bottom Half - QR Code */}
          <div className="p-6 flex flex-col items-center">
            <p className="text-[#333333] text-sm mb-4 text-center">
              Muestra este QR al anfitrión para unirte
            </p>
            {/* QR Code Placeholder */}
            <div className="w-48 h-48 bg-white border-4 border-gray-200 rounded-2xl flex items-center justify-center">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <rect x="0" y="0" width="180" height="180" fill="white" />

                {/* QR Code Pattern */}
                {/* Top-left corner */}
                <rect x="10" y="10" width="50" height="50" fill="none" stroke="#333" strokeWidth="6" />
                <rect x="22" y="22" width="26" height="26" fill="#333" />

                {/* Top-right corner */}
                <rect x="120" y="10" width="50" height="50" fill="none" stroke="#333" strokeWidth="6" />
                <rect x="132" y="22" width="26" height="26" fill="#333" />

                {/* Bottom-left corner */}
                <rect x="10" y="120" width="50" height="50" fill="none" stroke="#333" strokeWidth="6" />
                <rect x="22" y="132" width="26" height="26" fill="#333" />

                {/* Data dots */}
                <rect x="70" y="15" width="8" height="8" fill="#333" />
                <rect x="82" y="15" width="8" height="8" fill="#333" />
                <rect x="94" y="15" width="8" height="8" fill="#333" />
                <rect x="15" y="70" width="8" height="8" fill="#333" />
                <rect x="27" y="82" width="8" height="8" fill="#333" />
                <rect x="70" y="70" width="8" height="8" fill="#333" />
                <rect x="82" y="82" width="8" height="8" fill="#333" />
                <rect x="94" y="94" width="8" height="8" fill="#333" />
                <rect x="130" y="70" width="8" height="8" fill="#333" />
                <rect x="142" y="82" width="8" height="8" fill="#333" />
                <rect x="154" y="94" width="8" height="8" fill="#333" />
                <rect x="70" y="130" width="8" height="8" fill="#333" />
                <rect x="82" y="142" width="8" height="8" fill="#333" />
                <rect x="94" y="154" width="8" height="8" fill="#333" />
                <rect x="120" y="130" width="8" height="8" fill="#333" />
                <rect x="132" y="142" width="8" height="8" fill="#333" />
                <rect x="144" y="154" width="8" height="8" fill="#333" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tips Card */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          <div className="relative h-32">
            <img
              src="https://images.unsplash.com/photo-1601546097281-4eda134e3d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMG9hdHMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzY2NjA3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Nutrition tips"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="p-4">
            <div className="flex items-center gap-2 text-[#7AC142]">
              <Apple className="w-5 h-5" />
              <span>Tips de Nutrición</span>
            </div>
          </div>
        </div>
      </div>

      <BasicUserBottomNav activeScreen="home" onNavigate={onNavigate} />
    </div>
  );
}
