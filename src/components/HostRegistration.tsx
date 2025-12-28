import React, { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, Upload, MapPin, Clock, Image as ImageIcon, CheckCircle } from 'lucide-react';

interface HostRegistrationProps {
  onNavigate: (screen: Screen) => void;
}

export default function HostRegistration({ onNavigate }: HostRegistrationProps) {
  const [step, setStep] = useState<'form' | 'pending'>('form');
  const [formData, setFormData] = useState({
    hostName: '',
    clubName: '',
    address: '',
    schedule: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('pending');
  };

  if (step === 'pending') {
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
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
            <Clock className="w-12 h-12 text-yellow-600" />
          </div>
          
          <h2 className="text-[#333333] text-center mb-3">Solicitud Enviada</h2>
          <p className="text-gray-600 text-center mb-8 max-w-sm">
            Tu solicitud para registrar el club ha sido enviada correctamente. 
            El equipo de administración la revisará en las próximas 24-48 horas.
          </p>

          <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm mb-8">
            <h3 className="text-[#333333] mb-4">Próximos pasos</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#7AC142] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#333333]">Solicitud recibida</p>
                  <p className="text-xs text-gray-500 mt-0.5">Hoy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-gray-500">2</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Revisión del administrador</p>
                  <p className="text-xs text-gray-500 mt-0.5">1-2 días</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-gray-500">3</span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Notificación de aprobación</p>
                  <p className="text-xs text-gray-500 mt-0.5">Por email</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('login')}
            className="w-full max-w-sm bg-[#7AC142] text-white py-4 rounded-full shadow-lg"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

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
        <button onClick={() => onNavigate('login')} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-[#333333]" />
        </button>
        <h2 className="text-[#333333]">Registrar Club</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 mb-6">
          <h3 className="text-[#333333] mb-2">Bienvenido al programa de Anfitriones</h3>
          <p className="text-sm text-gray-700">
            Para garantizar la calidad de nuestros clubes, todas las solicitudes son revisadas 
            por nuestro equipo antes de ser aprobadas.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Info */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-[#333333] mb-4">Información Personal</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Nombre del Anfitrión *</label>
                <input
                  type="text"
                  required
                  value={formData.hostName}
                  onChange={(e) => setFormData({ ...formData, hostName: e.target.value })}
                  placeholder="Ej: Juan Pérez"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Teléfono *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+591 7123 4567"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="correo@ejemplo.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Club Info */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-[#333333] mb-4">Información del Club</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Nombre del Club *</label>
                <input
                  type="text"
                  required
                  value={formData.clubName}
                  onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                  placeholder="Ej: Club Vida Activa"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Dirección *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Av. Principal 123"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Horario de Atención *</label>
                <input
                  type="text"
                  required
                  value={formData.schedule}
                  onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                  placeholder="Lun-Sab: 8:00 - 20:00"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Photos */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-[#333333] mb-4">Fotos del Club</h3>
            <div className="space-y-3">
              <button
                type="button"
                className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-[#7AC142] hover:text-[#7AC142] transition-colors"
              >
                <ImageIcon className="w-8 h-8 mb-2" />
                <span className="text-sm">Logo del Club</span>
                <span className="text-xs mt-1">Toca para subir</span>
              </button>
              <button
                type="button"
                className="w-full border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-500 hover:border-[#7AC142] hover:text-[#7AC142] transition-colors"
              >
                <Upload className="w-8 h-8 mb-2" />
                <span className="text-sm">Fotos del Local</span>
                <span className="text-xs mt-1">Toca para subir (mínimo 3)</span>
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg hover:bg-[#6BB032] transition-colors"
          >
            Enviar Solicitud
          </button>

          <p className="text-xs text-gray-500 text-center">
            Al enviar esta solicitud, aceptas cumplir con los lineamientos de Herbalife
          </p>
        </form>
      </div>
    </div>
  );
}
