import React from 'react';
import { Screen } from '../App';
import { ArrowLeft, Calendar, CheckCircle, TrendingUp, Zap } from 'lucide-react';

interface MemberAttendanceProps {
  onNavigate: (screen: Screen) => void;
}

export default function MemberAttendance({ onNavigate }: MemberAttendanceProps) {
  const attendanceData = [
    { date: 'Hoy, 27 Dic', time: '09:30', points: 10, status: 'completed' },
    { date: 'Ayer, 26 Dic', time: '10:15', points: 10, status: 'completed' },
    { date: 'Jue, 25 Dic', time: '09:00', points: 10, status: 'completed' },
    { date: 'Mié, 24 Dic', time: '18:30', points: 10, status: 'completed' },
    { date: 'Mar, 23 Dic', time: '09:45', points: 10, status: 'completed' },
    { date: 'Lun, 22 Dic', time: '10:00', points: 10, status: 'completed' },
    { date: 'Dom, 21 Dic', time: '11:30', points: 10, status: 'completed' },
  ];

  const monthlyStats = [
    { month: 'Diciembre', visits: 24, points: 240 },
    { month: 'Noviembre', visits: 22, points: 220 },
    { month: 'Octubre', visits: 18, points: 180 },
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
      <div className="bg-white px-6 py-4 shadow-sm flex items-center">
        <button onClick={() => onNavigate('member-home')} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-[#333333]" />
        </button>
        <h2 className="text-[#333333]">Mis Asistencias</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-2xl p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-white" />
              <p className="text-white/90 text-sm">Este mes</p>
            </div>
            <p className="text-3xl text-white mb-1">24</p>
            <p className="text-white/80 text-sm">Visitas totales</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl p-5 shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-white" />
              <p className="text-white/90 text-sm">Racha actual</p>
            </div>
            <p className="text-3xl text-white mb-1">7</p>
            <p className="text-white/80 text-sm">Días consecutivos</p>
          </div>
        </div>

        {/* Monthly Summary */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#333333]">Resumen Mensual</h3>
            <TrendingUp className="w-5 h-5 text-[#7AC142]" />
          </div>
          <div className="space-y-3">
            {monthlyStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0">
                <div>
                  <p className="text-[#333333] text-sm">{stat.month}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.visits} visitas</p>
                </div>
                <div className="text-right">
                  <p className="text-[#7AC142]">{stat.points} pts</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance History */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-[#333333] mb-4">Historial de Asistencias</h3>
          <div className="space-y-3">
            {attendanceData.map((attendance, index) => (
              <div key={index} className="flex items-center gap-3 pb-3 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#333333]">{attendance.date}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{attendance.time}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-[#7AC142]">+{attendance.points} pts</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Streak Info Card */}
        <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl p-5 mt-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <p className="text-[#333333]">¡Racha Activa!</p>
              <p className="text-sm text-gray-600">7 días consecutivos</p>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            ¡Excelente! Mantén tu racha visitando el club mañana. Alcanza 30 días para el logro "Constante".
          </p>
        </div>
      </div>
    </div>
  );
}
