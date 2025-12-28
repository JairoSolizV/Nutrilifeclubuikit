import React from 'react';
import { Screen } from '../App';
import { ArrowLeft, MapPin, Clock, Image, Bell, Users, BarChart, HelpCircle, LogOut } from 'lucide-react';

interface HostClubSettingsProps {
  onNavigate: (screen: Screen) => void;
}

export default function HostClubSettings({ onNavigate }: HostClubSettingsProps) {
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
      <div className="bg-white px-6 py-4 shadow-sm flex items-center">
        <button onClick={() => onNavigate('host-dashboard')} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-[#333333]" />
        </button>
        <h2 className="text-[#333333]">Configuración del Club</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Club Info Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl">CV</span>
            </div>
            <div className="flex-1">
              <h3 className="text-[#333333]">Club Vida Activa</h3>
              <p className="text-sm text-gray-500 mt-1">Anfitrión: Juan Pérez</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="px-2 py-1 bg-green-100 text-[#7AC142] rounded-full text-xs">
                  Verificado
                </div>
                <div className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                  Activo
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Club Settings */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <h3 className="text-[#333333] px-5 py-4 border-b border-gray-100">Información del Club</h3>
          
          <button className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div className="text-left">
                <p className="text-sm text-[#333333]">Dirección</p>
                <p className="text-xs text-gray-500 mt-0.5">Av. Principal 123, Santa Cruz</p>
              </div>
            </div>
          </button>

          <button className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-gray-400" />
              <div className="text-left">
                <p className="text-sm text-[#333333]">Horario</p>
                <p className="text-xs text-gray-500 mt-0.5">Lun-Sab: 8:00 - 20:00</p>
              </div>
            </div>
          </button>

          <button className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Image className="w-5 h-5 text-gray-400" />
              <div className="text-left">
                <p className="text-sm text-[#333333]">Fotos del Club</p>
                <p className="text-xs text-gray-500 mt-0.5">5 fotos</p>
              </div>
            </div>
          </button>
        </div>

        {/* Management Settings */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <h3 className="text-[#333333] px-5 py-4 border-b border-gray-100">Gestión</h3>
          
          <button className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <p className="text-sm text-[#333333]">Notificaciones</p>
            </div>
            <div className="w-12 h-6 bg-[#7AC142] rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </button>

          <button
            onClick={() => onNavigate('host-members')}
            className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-gray-400" />
              <p className="text-sm text-[#333333]">Gestión de Socios</p>
            </div>
          </button>

          <button
            onClick={() => onNavigate('host-stats')}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <BarChart className="w-5 h-5 text-gray-400" />
              <p className="text-sm text-[#333333]">Estadísticas y Reportes</p>
            </div>
          </button>
        </div>

        {/* Support */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
          <h3 className="text-[#333333] px-5 py-4 border-b border-gray-100">Soporte</h3>
          
          <button
            onClick={() => onNavigate('support-center')}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-400" />
              <p className="text-sm text-[#333333]">Ayuda y Tutorial</p>
            </div>
          </button>
        </div>

        {/* Logout */}
        <button className="w-full bg-white rounded-2xl shadow-md px-5 py-4 flex items-center justify-center gap-3 text-red-600 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Cerrar Sesión</span>
        </button>

        {/* Version Info */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Versión 1.0.0 · NutriLife Club
        </p>
      </div>
    </div>
  );
}