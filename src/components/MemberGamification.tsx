import React from 'react';
import { Screen } from '../App';
import { ArrowLeft, Star, Zap, Gift, Calendar, Trophy, Award, TrendingUp, Ticket } from 'lucide-react';

interface MemberGamificationProps {
  onNavigate: (screen: Screen) => void;
}

export default function MemberGamification({ onNavigate }: MemberGamificationProps) {
  const coupons = [
    { id: 1, title: 'Topping Gratis', description: 'En tu próximo batido', icon: '🍓', expires: '5 días' },
    { id: 2, title: '10% Descuento', description: 'En cualquier producto', icon: '💚', expires: '12 días' },
    { id: 3, title: 'Waffle Gratis', description: 'Con compra de batido', icon: '🧇', expires: '8 días' },
  ];

  const recentVisits = [
    { date: 'Hoy, 27 Dic', time: '09:30', points: 10 },
    { date: 'Ayer, 26 Dic', time: '10:15', points: 10 },
    { date: 'Jue, 25 Dic', time: '09:00', points: 10 },
    { date: 'Mié, 24 Dic', time: '18:30', points: 10 },
    { date: 'Mar, 23 Dic', time: '09:45', points: 10 },
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
        <button onClick={() => onNavigate('member-home')} className="mb-4">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>

        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-white mb-1">Mi Perfil de Gamificación</h2>
            <p className="text-white/90 text-sm">María González</p>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-white text-xl">MG</span>
          </div>
        </div>

        {/* Level Badge */}
        <div className="bg-white/95 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-[#333333]">Socio VIP</p>
                <p className="text-xs text-gray-500">Nivel alcanzado en Nov 2024</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 rounded-xl p-3 border border-yellow-200">
            <p className="text-xs text-gray-700">
              🎉 ¡Felicitaciones! Eres parte del 15% de socios con más asistencias
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {/* Stars */}
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
            <p className="text-2xl text-[#333333] mb-1">24</p>
            <p className="text-xs text-gray-500">Estrellas</p>
          </div>

          {/* Streak */}
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Zap className="w-6 h-6 text-orange-500 fill-orange-500" />
            </div>
            <p className="text-2xl text-[#333333] mb-1">3</p>
            <p className="text-xs text-gray-500">Semanas</p>
          </div>

          {/* Points */}
          <div className="bg-white rounded-2xl p-4 shadow-md text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <Gift className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl text-[#333333] mb-1">485</p>
            <p className="text-xs text-gray-500">Puntos</p>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4 px-1">
            <h3 className="text-[#333333]">Cupones Disponibles</h3>
            <Ticket className="w-5 h-5 text-[#7AC142]" />
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2">
            {coupons.map((coupon) => (
              <div key={coupon.id} className="bg-white rounded-2xl shadow-md p-4 min-w-[200px] flex-shrink-0">
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">{coupon.icon}</div>
                  <h4 className="text-[#333333] mb-1">{coupon.title}</h4>
                  <p className="text-xs text-gray-500">{coupon.description}</p>
                </div>
                <div className="bg-[#7AC142]/10 rounded-full px-3 py-2 text-center">
                  <p className="text-xs text-[#7AC142]">Expira en {coupon.expires}</p>
                </div>
                <button className="w-full mt-3 bg-[#7AC142] text-white py-2 rounded-full text-sm">
                  Usar Ahora
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Progress to Next Level */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            <h3 className="text-[#333333]">Próximo Nivel</h3>
          </div>
          <div className="bg-white/80 rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-700">Socio Legendario</span>
              <span className="text-purple-600">85/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <p className="text-xs text-gray-600">Solo 15 visitas más para alcanzar el siguiente nivel</p>
          </div>
        </div>

        {/* Achievements Summary */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#333333]">Logros Destacados</h3>
            <button
              onClick={() => onNavigate('member-achievements')}
              className="text-[#7AC142] text-sm"
            >
              Ver todos
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-yellow-50 rounded-xl p-3 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-xs text-gray-700">Socio del Mes</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-3 text-center">
              <Zap className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-xs text-gray-700">Racha 7 días</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-3 text-center">
              <Star className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              <p className="text-xs text-gray-700">100 Visitas</p>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-[#333333] mb-4">Historial Reciente</h3>
          <div className="space-y-3">
            {recentVisits.map((visit, index) => (
              <div key={index} className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-[#333333]">{visit.date}</p>
                    <p className="text-xs text-gray-500">{visit.time}</p>
                  </div>
                </div>
                <span className="text-sm text-[#7AC142]">+{visit.points} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
