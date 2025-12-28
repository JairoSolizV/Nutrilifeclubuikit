import React from 'react';
import { Screen, NavigationAction } from '../App';
import { Home, Calendar, Trophy, User, Star, Award, TrendingUp, Gift, QrCode } from 'lucide-react';

interface MemberHomeProps {
  onNavigate: (screen: NavigationAction) => void;
}

export default function MemberHome({ onNavigate }: MemberHomeProps) {
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

      {/* Header with Member Info */}
      <div className="bg-gradient-to-br from-[#7AC142] to-[#6BB032] px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/90 text-sm">¡Hola de nuevo!</p>
            <h2 className="text-white mt-1">María González</h2>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-white text-xl">MG</span>
          </div>
        </div>

        {/* Member Level Card */}
        <div className="bg-white/95 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <p className="text-[#333333]">Socio VIP</p>
                <p className="text-xs text-gray-500">Nivel Diamante</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#7AC142]">485 pts</p>
              <p className="text-xs text-gray-500">Este mes</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Progreso al siguiente nivel</span>
              <span>85/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#7AC142] h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Primary Action - Scan Club QR */}
        <div className="bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-3xl shadow-xl overflow-hidden mb-6">
          <div className="p-8 text-center">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <QrCode className="w-14 h-14 text-white" />
            </div>
            <h3 className="text-white mb-2">Registrar Asistencia</h3>
            <p className="text-white/90 text-sm mb-6">
              Escanea el código QR del club para marcar tu visita
            </p>
            <button
              onClick={() => onNavigate('host-scan')}
              className="w-full bg-white text-[#7AC142] py-4 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              Escanear QR del Club
            </button>
            <button
              className="w-full mt-3 text-white/80 text-sm underline"
            >
              Ver mi credencial/QR
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => onNavigate('member-attendance')}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-2xl text-[#333333] mb-1">24</p>
            <p className="text-sm text-gray-500">Visitas este mes</p>
          </button>

          <button
            onClick={() => onNavigate('member-achievements')}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-2xl text-[#333333] mb-1">12</p>
            <p className="text-sm text-gray-500">Logros obtenidos</p>
          </button>

          <button
            onClick={() => onNavigate('member-gamification')}
            className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl text-[#333333] mb-1">7</p>
            <p className="text-sm text-gray-500">Racha de días</p>
          </button>

          <div className="bg-white rounded-2xl p-4 shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <Gift className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl text-[#333333] mb-1">3</p>
            <p className="text-sm text-gray-500">Beneficios activos</p>
          </div>
        </div>

        {/* My Club Info */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <h4 className="text-[#333333] mb-3">Mi Club</h4>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-xl flex items-center justify-center">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[#333333]">Club Vida Activa</p>
              <p className="text-sm text-gray-500 mt-0.5">Miembro desde Feb 2024</p>
            </div>
            <Award className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h4 className="text-[#333333] mb-4">Actividad Reciente</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#333333]">Asistencia registrada</p>
                <p className="text-xs text-gray-500">Hoy a las 09:30</p>
              </div>
              <span className="text-xs text-[#7AC142]">+10 pts</span>
            </div>
            <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#333333]">Nuevo logro desbloqueado</p>
                <p className="text-xs text-gray-500">Ayer</p>
              </div>
              <span className="text-xs text-[#7AC142]">+50 pts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#333333]">Racha de 7 días</p>
                <p className="text-xs text-gray-500">Hace 2 días</p>
              </div>
              <span className="text-xs text-[#7AC142]">+25 pts</span>
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
          onClick={() => onNavigate('member-attendance')}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs">Asistencias</span>
        </button>
        <button
          onClick={() => onNavigate('member-achievements')}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <Trophy className="w-6 h-6" />
          <span className="text-xs">Logros</span>
        </button>
        <button
          onClick={() => onNavigate('profile')}
          className="flex flex-col items-center gap-1 text-gray-400"
        >
          <User className="w-6 h-6" />
          <span className="text-xs">Perfil</span>
        </button>
      </div>
    </div>
  );
}