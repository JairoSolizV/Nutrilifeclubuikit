import React from 'react';
import { Screen, NavigationAction } from '../App';
import { Clock, CheckCircle, MapPin, Image as ImageIcon, Mail } from 'lucide-react';

interface HostRegistrationStatusProps {
  onNavigate: (screen: NavigationAction) => void;
}

export default function HostRegistrationStatus({ onNavigate }: HostRegistrationStatusProps) {
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

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        {/* Status Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <Clock className="w-12 h-12 text-white" />
        </div>

        <h2 className="text-[#333333] text-center mb-3">Solicitud en Evaluación</h2>
        <p className="text-gray-600 text-center mb-8 max-w-sm">
          Tu solicitud para el club <span className="text-[#7AC142]">"Club Vida Activa"</span> está siendo revisada por el administrador corporativo.
        </p>

        {/* Request Summary Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm mb-6">
          <h3 className="text-[#333333] mb-4">Resumen de Solicitud</h3>

          <div className="space-y-4">
            {/* Club Name */}
            <div>
              <p className="text-xs text-gray-500 mb-1">Nombre del Club</p>
              <p className="text-sm text-[#333333]">Club Vida Activa</p>
            </div>

            {/* Address */}
            <div>
              <p className="text-xs text-gray-500 mb-1">Dirección</p>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#333333]">Av. Principal 123, Santa Cruz</p>
              </div>
            </div>

            {/* GPS Coordinates - Mini Map Preview */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Ubicación GPS</p>
              <div className="w-full h-32 bg-gray-200 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#7AC142] rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs text-gray-600">
                  -17.7833, -63.1821
                </div>
              </div>
            </div>

            {/* Photos */}
            <div>
              <p className="text-xs text-gray-500 mb-2">Fotos Enviadas</p>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <ImageIcon className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm mb-6">
          <h3 className="text-[#333333] mb-4">Estado del Proceso</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#7AC142] rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#333333]">Solicitud Recibida</p>
                <p className="text-xs text-gray-500 mt-0.5">27 Dic, 2024 - 09:30</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm text-[#333333]">En Revisión</p>
                <p className="text-xs text-gray-500 mt-0.5">Tiempo estimado: 24-48 horas</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs text-gray-500">3</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Notificación de Resultado</p>
                <p className="text-xs text-gray-400 mt-0.5">Por correo electrónico</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-blue-50 rounded-2xl p-4 w-full max-w-sm mb-6">
          <p className="text-sm text-gray-700 text-center">
            <Mail className="w-4 h-4 inline-block mr-1" />
            Recibirás un correo con la decisión del administrador
          </p>
        </div>

        {/* Action Buttons */}
        <button
          className="w-full max-w-sm bg-[#7AC142] text-white py-4 rounded-full shadow-lg mb-3"
        >
          Contactar Soporte
        </button>

        <button
          onClick={() => onNavigate('login')}
          className="w-full max-w-sm border-2 border-gray-300 text-gray-700 py-4 rounded-full"
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
