import React, { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Search, Filter, Star, Calendar, Trophy, Phone, Mail } from 'lucide-react';

interface HostMemberListProps {
  onNavigate: (screen: Screen) => void;
}

export default function HostMemberList({ onNavigate }: HostMemberListProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const members = [
    {
      id: 1,
      name: 'María González',
      memberNumber: 'SC-2024-0156',
      level: 'VIP',
      visits: 24,
      lastVisit: 'Hoy',
      phone: '+591 7123 4567',
      email: 'maria.g@email.com',
    },
    {
      id: 2,
      name: 'Carlos Méndez',
      memberNumber: 'SC-2024-0089',
      level: 'Constante',
      visits: 22,
      lastVisit: 'Ayer',
      phone: '+591 7234 5678',
      email: 'carlos.m@email.com',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      memberNumber: 'SC-2024-0245',
      level: 'Nuevo',
      visits: 3,
      lastVisit: 'Hoy',
      phone: '+591 7345 6789',
      email: 'ana.m@email.com',
    },
    {
      id: 4,
      name: 'Pedro Sánchez',
      memberNumber: 'SC-2024-0234',
      level: 'Nuevo',
      visits: 2,
      lastVisit: 'Ayer',
      phone: '+591 7456 7890',
      email: 'pedro.s@email.com',
    },
    {
      id: 5,
      name: 'Laura Torres',
      memberNumber: 'SC-2024-0198',
      level: 'Constante',
      visits: 18,
      lastVisit: 'Hace 2 días',
      phone: '+591 7567 8901',
      email: 'laura.t@email.com',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'VIP':
        return 'bg-yellow-100 text-yellow-700';
      case 'Constante':
        return 'bg-green-100 text-green-700';
      case 'Nuevo':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

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
        <div className="flex items-center mb-4">
          <button onClick={() => onNavigate('host-dashboard')} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-[#333333]" />
          </button>
          <h2 className="text-[#333333]">Socios del Club</h2>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar socio..."
            className="w-full pl-12 pr-4 py-3 bg-[#F5F5F5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#7AC142]"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${selectedFilter === 'all'
              ? 'bg-[#7AC142] text-white'
              : 'bg-white border border-gray-300 text-gray-700'
              }`}
          >
            Todos
          </button>
          <button
            onClick={() => setSelectedFilter('candidates')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center gap-1 ${selectedFilter === 'candidates'
              ? 'bg-[#7AC142] text-white'
              : 'bg-white border border-gray-300 text-gray-700'
              }`}
          >
            <Star className="w-3 h-3" /> Candidatos
          </button>
          <button
            onClick={() => setSelectedFilter('vip')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${selectedFilter === 'vip'
              ? 'bg-[#7AC142] text-white'
              : 'bg-white border border-gray-300 text-gray-700'
              }`}
          >
            VIP
          </button>
        </div>

        {selectedFilter === 'candidates' && (
          <div className="mb-4 bg-orange-50 p-4 rounded-xl flex gap-3">
            <Star className="w-5 h-5 text-orange-500 flex-shrink-0" />
            <p className="text-orange-800 text-xs">
              Estos clientes visitan frecuentemente tu club. ¡Es una gran oportunidad para registrarlos como Socios!
            </p>
          </div>
        )}

      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-24">
        <div className="space-y-3">
          {/* Hardcoded Candidate for Demo */}
          {selectedFilter === 'candidates' && (
            <div className="bg-white rounded-2xl shadow-md p-4 border-2 border-orange-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-orange-100 text-orange-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                POTENCIAL
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                  JP
                </div>
                <div>
                  <h4 className="text-[#333333]">Juan Perez</h4>
                  <p className="text-xs text-gray-500">Cliente Recurrente</p>
                </div>
              </div>
              <div className="flex justify-between items-center bg-gray-50 rounded-lg p-3 mb-3">
                <div className="text-center">
                  <span className="text-lg font-bold text-[#333333]">8</span>
                  <p className="text-[10px] text-gray-500">Visitas</p>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-[#333333]">3</span>
                  <p className="text-[10px] text-gray-500">Esta semana</p>
                </div>
                <div className="text-center">
                  <span className="text-lg font-bold text-[#7AC142]">Alta</span>
                  <p className="text-[10px] text-gray-500">Frecuencia</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('host-register-member')}
                className="w-full bg-[#7AC142] text-white py-3 rounded-xl font-medium shadow-lg hover:bg-[#6BB032] transition-colors flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4" />
                Promover a Socio
              </button>
            </div>
          )}

          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl shadow-md p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-full flex items-center justify-center text-white">
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <h4 className="text-[#333333]">{member.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{member.memberNumber}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs ${getLevelColor(member.level)}`}>
                  {member.level}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3 pb-3 border-b border-gray-100">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Calendar className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-[#333333]">{member.visits}</p>
                  <p className="text-xs text-gray-500">Visitas</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-[#333333]">{member.visits * 10}</p>
                  <p className="text-xs text-gray-500">Puntos</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Trophy className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-sm text-[#333333]">{Math.floor(member.visits / 3)}</p>
                  <p className="text-xs text-gray-500">Logros</p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs">{member.email}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                  <span>Última visita: {member.lastVisit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
