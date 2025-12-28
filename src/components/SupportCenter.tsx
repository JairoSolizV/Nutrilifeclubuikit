import React, { useState } from 'react';
import { Screen } from '../App';
import { ArrowLeft, HelpCircle, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface SupportCenterProps {
  onNavigate: (screen: Screen) => void;
}

export default function SupportCenter({ onNavigate }: SupportCenterProps) {
  const [activeTab, setActiveTab] = useState<'new' | 'tickets'>('new');
  const [formData, setFormData] = useState({
    type: '',
    subject: '',
    message: '',
  });

  const tickets = [
    {
      id: 'TKT-001',
      type: 'Técnica',
      subject: 'No puedo escanear QR',
      status: 'pending',
      date: 'Hace 2 horas',
      response: null,
    },
    {
      id: 'TKT-002',
      type: 'Administrativa',
      subject: 'Actualización de datos',
      status: 'resolved',
      date: 'Hace 2 días',
      response: 'Tus datos han sido actualizados correctamente.',
    },
    {
      id: 'TKT-003',
      type: 'Técnica',
      subject: 'Error al registrar asistencia',
      status: 'pending',
      date: 'Hace 5 días',
      response: null,
    },
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'pending') {
      return (
        <div className="flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
          <Clock className="w-3 h-3" />
          <span>Pendiente</span>
        </div>
      );
    }
    return (
      <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
        <CheckCircle className="w-3 h-3" />
        <span>Resuelto</span>
      </div>
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate ticket submission
    alert('Ticket enviado correctamente');
    setFormData({ type: '', subject: '', message: '' });
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
          <button onClick={() => onNavigate('member-home')} className="mr-4">
            <ArrowLeft className="w-6 h-6 text-[#333333]" />
          </button>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#7AC142]" />
            <h2 className="text-[#333333]">Centro de Soporte</h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('new')}
            className={`flex-1 py-3 rounded-xl transition-colors ${
              activeTab === 'new'
                ? 'bg-[#7AC142] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Nueva Solicitud
          </button>
          <button
            onClick={() => setActiveTab('tickets')}
            className={`flex-1 py-3 rounded-xl transition-colors ${
              activeTab === 'tickets'
                ? 'bg-[#7AC142] text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Mis Tickets
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {activeTab === 'new' ? (
          /* New Ticket Tab */
          <>
            {/* Info Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-5 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[#333333] mb-1">¿Necesitas ayuda?</h3>
                  <p className="text-sm text-gray-700">
                    Describe tu problema o consulta y nuestro equipo te responderá en las próximas 24 horas.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-white rounded-2xl shadow-md p-5">
                <div className="space-y-4">
                  {/* Type Dropdown */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Tipo de Consulta <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none bg-white"
                    >
                      <option value="">Seleccionar...</option>
                      <option value="technical">Técnica</option>
                      <option value="administrative">Administrativa</option>
                      <option value="complaint">Denuncia</option>
                      <option value="suggestion">Sugerencia</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Asunto <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Breve descripción del problema"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">
                      Describe tu problema <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Proporciona todos los detalles posibles..."
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg hover:bg-[#6BB032] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar al Administrador
              </button>
            </form>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-2xl shadow-md p-5 mt-6">
              <h3 className="text-[#333333] mb-4">Preguntas Frecuentes</h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <p className="text-sm text-[#333333]">¿Cómo escaneo el QR del club?</p>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <p className="text-sm text-[#333333]">¿Cómo cambio mi información personal?</p>
                </button>
                <button className="w-full text-left px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <p className="text-sm text-[#333333]">¿Cómo funcionan los logros?</p>
                </button>
              </div>
            </div>
          </>
        ) : (
          /* My Tickets Tab */
          <div className="space-y-4">
            {tickets.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-md p-8 text-center">
                <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No tienes tickets registrados</p>
              </div>
            ) : (
              tickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-2xl shadow-md p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">{ticket.id}</span>
                        {getStatusBadge(ticket.status)}
                      </div>
                      <h3 className="text-[#333333] mb-1">{ticket.subject}</h3>
                      <p className="text-xs text-gray-500">{ticket.type} • {ticket.date}</p>
                    </div>
                  </div>

                  {ticket.response && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-gray-700 mb-1">Respuesta del Administrador:</p>
                          <p className="text-sm text-[#333333]">{ticket.response}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {!ticket.response && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-3">
                      <p className="text-sm text-gray-700 text-center">
                        Tu consulta está siendo revisada...
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
