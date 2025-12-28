import React from 'react';
import { Screen } from '../App';
import { Users, UserCheck, Home as HomeIcon, Store } from 'lucide-react';

interface ScreenSelectorProps {
  onNavigate: (screen: Screen) => void;
}

export default function ScreenSelector({ onNavigate }: ScreenSelectorProps) {
  const roles = [
    {
      title: 'Invitado',
      description: 'Explora clubes y contenido sin registro',
      icon: Users,
      screen: 'guest-home' as Screen,
      color: 'from-blue-400 to-blue-500',
    },
    {
      title: 'Usuario Básico',
      description: 'Busca clubes y regístrate como socio',
      icon: UserCheck,
      screen: 'basic-user-home' as Screen,
      color: 'from-green-400 to-green-500',
    },
    {
      title: 'Socio de Club',
      description: 'Accede a tu perfil, logros y asistencias',
      icon: HomeIcon,
      screen: 'member-home' as Screen,
      color: 'from-yellow-400 to-yellow-500',
    },
    {
      title: 'Anfitrión',
      description: 'Gestiona tu club y socios',
      icon: Store,
      screen: 'host-dashboard' as Screen,
      color: 'from-purple-400 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center px-6 py-3">
        <span className="text-sm">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-8">
        <div className="text-center mb-2">
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
            <path
              d="M45 40 L45 95 C45 100 47 105 52 105 L68 105 C73 105 75 100 75 95 L75 40 Z"
              fill="#7AC142"
              opacity="0.9"
            />
            <ellipse cx="60" cy="40" rx="15" ry="8" fill="#7AC142" />
            <rect x="55" y="28" width="10" height="15" fill="#7AC142" opacity="0.6" />
            <path
              d="M70 20 Q85 20 90 35 Q85 50 70 50 Q75 35 70 20 Z"
              fill="#7AC142"
            />
            <path
              d="M70 20 L85 40"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              opacity="0.7"
            />
          </svg>
        </div>
        <h1 className="text-[#333333] text-center mb-2">NutriLife Club</h1>
        <p className="text-gray-600 text-center text-sm">Sistema de Gestión de Clubes de Nutrición</p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        <div className="bg-white rounded-2xl p-4 mb-6">
          <p className="text-xs text-gray-500 text-center">
            Selecciona un perfil para explorar las diferentes vistas de la aplicación
          </p>
        </div>

        <div className="grid gap-4">
          {roles.map((role, index) => (
            <button
              key={index}
              onClick={() => onNavigate(role.screen)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-102"
            >
              <div className={`h-2 bg-gradient-to-r ${role.color}`}></div>
              <div className="p-5 flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <role.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[#333333] mb-1">{role.title}</h3>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => onNavigate('login')}
          className="w-full mt-6 py-4 bg-gradient-to-r from-[#7AC142] to-[#6BB032] text-white rounded-full shadow-lg"
        >
          Ir a Pantalla de Login
        </button>
      </div>
    </div>
  );
}
