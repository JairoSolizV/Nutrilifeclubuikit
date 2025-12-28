import React from 'react';
import { Screen } from '../App';
import { Home, Users, QrCode, Settings, TrendingUp, UserPlus, Calendar, Award } from 'lucide-react';

interface HostDashboardProps {
  onNavigate: (screen: Screen) => void;
}

export default function HostDashboard({ onNavigate }: HostDashboardProps) {
  const recentMembers = [
    { name: 'Ana Martínez', joined: 'Hoy', status: 'new' },
    { name: 'Pedro Sánchez', joined: 'Ayer', status: 'new' },
    { name: 'Laura Torres', joined: 'Hace 2 días', status: 'new' },
  ];

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
      <div className="bg-gradient-to-br from-[#7AC142] to-[#6BB032] px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/90 text-sm">Panel de Anfitrión</p>
            <h2 className="text-white mt-1">Club Vida Activa</h2>
          </div>
          <button
            onClick={() => onNavigate('host-settings')}
            className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Settings className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Club Status Card */}
        <div className="bg-white/95 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Estado del Club</p>
              <p className="text-[#7AC142]">Activo y Verificado</p>
            </div>
            <div className="px-3 py-1 bg-green-100 text-[#7AC142] rounded-full text-sm">
              Abierto
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Club QR Display - Primary Action */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6">
          <h3 className="text-[#333333] mb-4 text-center">QR del Club para Asistencia</h3>
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-white border-4 border-[#7AC142] rounded-2xl flex items-center justify-center mb-4">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <rect x="0" y="0" width="180" height="180" fill="white" />
                
                {/* QR Code Pattern - Club QR */}
                <rect x="10" y="10" width="50" height="50" fill="none" stroke="#7AC142" strokeWidth="6" />
                <rect x="22" y="22" width="26" height="26" fill="#7AC142" />
                
                <rect x="120" y="10" width="50" height="50" fill="none" stroke="#7AC142" strokeWidth="6" />
                <rect x="132" y="22" width="26" height="26" fill="#7AC142" />
                
                <rect x="10" y="120" width="50" height="50" fill="none" stroke="#7AC142" strokeWidth="6" />
                <rect x="22" y="132" width="26" height="26" fill="#7AC142" />
                
                {/* Data dots */}
                <rect x="70" y="15" width="8" height="8" fill="#7AC142" />
                <rect x="82" y="15" width="8" height="8" fill="#7AC142" />
                <rect x="94" y="15" width="8" height="8" fill="#7AC142" />
                <rect x="15" y="70" width="8" height="8" fill="#7AC142" />
                <rect x="70" y="70" width="8" height="8" fill="#7AC142" />
                <rect x="82" y="82" width="8" height="8" fill="#7AC142" />
                <rect x="130" y="70" width="8" height="8" fill="#7AC142" />
                <rect x="70" y="130" width="8" height="8" fill="#7AC142" />
                <rect x="120" y="130" width="8" height="8" fill="#7AC142" />
              </svg>
            </div>
            <p className="text-sm text-gray-600 text-center mb-2">
              Los socios deben escanear este código para registrar su asistencia
            </p>
            <p className="text-xs text-gray-500">Club ID: CLB-2024-001</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => onNavigate('host-scan')}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <QrCode className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-[#333333]">Validar QR</p>
            <p className="text-sm text-gray-500 mt-1">Escanear socio</p>
          </button>

          <button
            onClick={() => onNavigate('host-register-member')}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <UserPlus className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-[#333333]">Nuevo Socio</p>
            <p className="text-sm text-gray-500 mt-1">Registro manual</p>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <h3 className="text-[#333333] mb-4">Estadísticas de Hoy</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <UserPlus className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl text-[#333333]">8</p>
              <p className="text-xs text-gray-500 mt-1">Nuevos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl text-[#333333]">42</p>
              <p className="text-xs text-gray-500 mt-1">Asistencias</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-2xl text-[#333333]">+12%</p>
              <p className="text-xs text-gray-500 mt-1">vs ayer</p>
            </div>
          </div>
        </div>

        {/* Weekly Summary */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#333333]">Esta Semana</h3>
            <TrendingUp className="w-5 h-5 text-[#7AC142]" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-sm text-gray-600">Total de asistencias</span>
              <span className="text-[#333333]">287</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-sm text-gray-600">Nuevos socios</span>
              <span className="text-[#333333]">24</span>
            </div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="text-sm text-gray-600">Promedio diario</span>
              <span className="text-[#333333]">41</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Socios activos</span>
              <span className="text-[#7AC142]">92%</span>
            </div>
          </div>
        </div>

        {/* Recent Members */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#333333]">Nuevos Socios</h3>
            <button
              onClick={() => onNavigate('host-members')}
              className="text-[#7AC142] text-sm"
            >
              Ver todos
            </button>
          </div>
          <div className="space-y-3">
            {recentMembers.map((member, index) => (
              <div key={index} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-full flex items-center justify-center text-white">
                  <span className="text-sm">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#333333]">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.joined}</p>
                </div>
                <div className="px-2 py-1 bg-green-100 text-[#7AC142] rounded-full text-xs">
                  Nuevo
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Members */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-yellow-600" />
            <h3 className="text-[#333333]">Socios Destacados</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥇</span>
              <span className="text-sm text-[#333333]">María González - 24 visitas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🥈</span>
              <span className="text-sm text-[#333333]">Carlos Méndez - 22 visitas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🥉</span>
              <span className="text-sm text-[#333333]">Ana Martínez - 20 visitas</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-white border-t border-gray-200 px-8 py-4 flex justify-around items-center">
        <button className="flex flex-col items-center gap-1 text-[#7AC142]">
          <Home className="w-6 h-6" />
          <span className="text-xs">Inicio</span>
        </button>
        <button
          onClick={() => onNavigate('host-scan')}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <QrCode className="w-6 h-6" />
          <span className="text-xs">Escanear</span>
        </button>
        <button
          onClick={() => onNavigate('host-members')}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <Users className="w-6 h-6" />
          <span className="text-xs">Socios</span>
        </button>
        <button
          onClick={() => onNavigate('host-settings')}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs">Config</span>
        </button>
      </div>
    </div>
  );
}