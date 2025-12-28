import React, { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, User, Phone, Mail, Calendar, Share2, UserPlus, QrCode } from 'lucide-react';

interface HostRegisterMemberProps {
  onNavigate: (screen: Screen) => void;
}

export default function HostRegisterMember({ onNavigate }: HostRegisterMemberProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    birthDate: '',
    email: '',
    socialMedia: '',
    referredBy: '',
    howKnew: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  if (showSuccess) {
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

        {/* Success Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-24 h-24 bg-[#7AC142] rounded-full flex items-center justify-center mb-6 animate-bounce">
            <QrCode className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-[#333333] text-center mb-3">¡Socio Registrado!</h2>
          <p className="text-gray-600 text-center mb-8 max-w-sm">
            {formData.fullName} ha sido registrado exitosamente en el club.
          </p>

          {/* Member Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm mb-6">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl">
                  {formData.fullName.split(' ').map(n => n[0]).join('').toUpperCase()}
                </span>
              </div>
              <h3 className="text-[#333333] mb-1">{formData.fullName}</h3>
              <p className="text-sm text-gray-500">Nuevo Socio</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-xs text-gray-500 text-center mb-2">Número de Socio</p>
              <p className="text-[#7AC142] text-center">SC-2024-{Math.floor(Math.random() * 1000)}</p>
            </div>

            {/* QR Code Generated */}
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 bg-white border-4 border-gray-200 rounded-xl flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120">
                  <rect x="0" y="0" width="120" height="120" fill="white" />
                  <rect x="5" y="5" width="35" height="35" fill="none" stroke="#333" strokeWidth="4" />
                  <rect x="13" y="13" width="19" height="19" fill="#333" />
                  <rect x="80" y="5" width="35" height="35" fill="none" stroke="#333" strokeWidth="4" />
                  <rect x="88" y="13" width="19" height="19" fill="#333" />
                  <rect x="5" y="80" width="35" height="35" fill="none" stroke="#333" strokeWidth="4" />
                  <rect x="13" y="88" width="19" height="19" fill="#333" />
                  <rect x="50" y="10" width="6" height="6" fill="#333" />
                  <rect x="60" y="10" width="6" height="6" fill="#333" />
                  <rect x="70" y="10" width="6" height="6" fill="#333" />
                  <rect x="10" y="50" width="6" height="6" fill="#333" />
                  <rect x="50" y="50" width="6" height="6" fill="#333" />
                  <rect x="60" y="60" width="6" height="6" fill="#333" />
                  <rect x="90" y="50" width="6" height="6" fill="#333" />
                  <rect x="50" y="90" width="6" height="6" fill="#333" />
                  <rect x="80" y="90" width="6" height="6" fill="#333" />
                </svg>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Este código QR ha sido generado para el nuevo socio
            </p>
          </div>

          <button
            onClick={() => setShowSuccess(false)}
            className="w-full max-w-sm bg-[#7AC142] text-white py-4 rounded-full shadow-lg mb-3"
          >
            Registrar Otro Socio
          </button>
          
          <button
            onClick={() => onNavigate('host-members')}
            className="w-full max-w-sm border-2 border-gray-300 text-gray-700 py-4 rounded-full"
          >
            Ver Lista de Socios
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
        <button onClick={() => onNavigate('host-dashboard')} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-[#333333]" />
        </button>
        <h2 className="text-[#333333]">Registrar Nuevo Socio</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <UserPlus className="w-6 h-6 text-[#7AC142] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-[#333333] mb-1">Registro Manual</h3>
              <p className="text-sm text-gray-700">
                Completa el formulario para registrar a una persona que no tiene la app o necesita ayuda.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Required Fields Section */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-[#333333] mb-4">Información Obligatoria</h3>
            
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Nombre y Apellido <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ej: María González"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Número de Teléfono <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+591 7123 4567"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Este será el identificador único del socio</p>
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Fecha de Nacimiento <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    required
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Optional Fields Section */}
          <div className="bg-white rounded-2xl shadow-md p-5">
            <h3 className="text-[#333333] mb-4">Información Adicional (Opcional)</h3>
            
            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Correo Electrónico</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@ejemplo.com"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                  />
                </div>
              </div>

              {/* Social Media */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Redes Sociales</label>
                <div className="relative">
                  <Share2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.socialMedia}
                    onChange={(e) => setFormData({ ...formData, socialMedia: e.target.value })}
                    placeholder="@usuario o perfil"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                  />
                </div>
              </div>

              {/* Referred By */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">Referido por</label>
                <select
                  value={formData.referredBy}
                  onChange={(e) => setFormData({ ...formData, referredBy: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none bg-white"
                >
                  <option value="">Seleccionar socio...</option>
                  <option value="SC-2024-0156">María González (SC-2024-0156)</option>
                  <option value="SC-2024-0089">Carlos Méndez (SC-2024-0089)</option>
                  <option value="SC-2024-0198">Laura Torres (SC-2024-0198)</option>
                </select>
              </div>

              {/* How They Knew */}
              <div>
                <label className="block text-sm text-gray-700 mb-2">¿Cómo nos conoció?</label>
                <select
                  value={formData.howKnew}
                  onChange={(e) => setFormData({ ...formData, howKnew: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none bg-white"
                >
                  <option value="">Seleccionar...</option>
                  <option value="referral">Referencia de un socio</option>
                  <option value="social">Redes sociales</option>
                  <option value="walking">Pasando por aquí</option>
                  <option value="event">Evento/Charla</option>
                  <option value="other">Otro</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg hover:bg-[#6BB032] transition-colors"
          >
            Registrar y Generar QR
          </button>
        </form>
      </div>
    </div>
  );
}
