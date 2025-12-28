import React from 'react';
import { Screen } from '../App';
import { ArrowLeft, BarChart3, TrendingUp, Users, UserCheck, QrCode, Edit, Calendar } from 'lucide-react';

interface HostDashboardStatsProps {
  onNavigate: (screen: Screen) => void;
}

export default function HostDashboardStats({ onNavigate }: HostDashboardStatsProps) {
  const weeklyData = [
    { day: 'Lun', visits: 38 },
    { day: 'Mar', visits: 42 },
    { day: 'Mié', visits: 35 },
    { day: 'Jue', visits: 48 },
    { day: 'Vie', visits: 52 },
    { day: 'Sáb', visits: 45 },
    { day: 'Dom', visits: 27 },
  ];

  const maxVisits = Math.max(...weeklyData.map(d => d.visits));

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
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => onNavigate('host-dashboard')} className="mr-4">
              <ArrowLeft className="w-6 h-6 text-[#333333]" />
            </button>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#7AC142]" />
              <h2 className="text-[#333333]">Estadísticas del Club</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button
            onClick={() => onNavigate('host-scan')}
            className="bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-2xl p-4 shadow-lg text-white"
          >
            <QrCode className="w-6 h-6 mb-2 mx-auto" />
            <p className="text-xs">Validar Asistencia</p>
          </button>
          <button
            className="bg-white rounded-2xl p-4 shadow-md"
          >
            <Users className="w-6 h-6 mb-2 mx-auto text-blue-600" />
            <p className="text-xs text-[#333333]">Nuevo Socio</p>
          </button>
          <button
            onClick={() => onNavigate('host-settings')}
            className="bg-white rounded-2xl p-4 shadow-md"
          >
            <Edit className="w-6 h-6 mb-2 mx-auto text-gray-600" />
            <p className="text-xs text-[#333333]">Editar Club</p>
          </button>
        </div>

        {/* Weekly Attendance Chart */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-[#333333]">Asistencia Promedio Semanal</h3>
            <TrendingUp className="w-5 h-5 text-[#7AC142]" />
          </div>

          {/* Bar Chart */}
          <div className="flex items-end justify-between gap-2 h-40 mb-3">
            {weeklyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col justify-end flex-1">
                  <div
                    className="w-full bg-gradient-to-t from-[#7AC142] to-[#6BB032] rounded-t-lg relative group"
                    style={{ height: `${(data.visits / maxVisits) * 100}%` }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-[#333333] text-white text-xs px-2 py-1 rounded">
                        {data.visits}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">{data.day}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-sm text-gray-700">
              Promedio: <span className="text-[#7AC142]">41 visitas/día</span>
            </p>
          </div>
        </div>

        {/* Active vs Inactive Members */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <h3 className="text-[#333333] mb-5">Socios Activos vs Inactivos</h3>
          
          {/* Donut Chart Simulation */}
          <div className="flex items-center justify-center mb-5">
            <div className="relative w-40 h-40">
              {/* Active (Green) - 92% */}
              <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="20"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="60"
                  fill="none"
                  stroke="#7AC142"
                  strokeWidth="20"
                  strokeDasharray={`${2 * Math.PI * 60 * 0.92} ${2 * Math.PI * 60}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-3xl text-[#333333]">92%</p>
                <p className="text-xs text-gray-500">Activos</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <UserCheck className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl text-[#333333] mb-1">133</p>
              <p className="text-xs text-gray-600">Activos</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <Users className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <p className="text-2xl text-[#333333] mb-1">12</p>
              <p className="text-xs text-gray-600">Inactivos</p>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 rounded-xl p-3">
            <p className="text-xs text-gray-700 text-center">
              Un socio se considera inactivo si no asiste en más de 14 días
            </p>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6">
          <h3 className="text-[#333333] mb-4">Tendencias del Mes</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-[#333333]">Total de Asistencias</p>
                  <p className="text-xs text-gray-500">Diciembre 2024</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#333333]">1,245</p>
                <p className="text-xs text-green-600">+15%</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-[#333333]">Nuevos Socios</p>
                  <p className="text-xs text-gray-500">Diciembre 2024</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#333333]">28</p>
                <p className="text-xs text-green-600">+23%</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-[#333333]">Tasa de Retención</p>
                  <p className="text-xs text-gray-500">Vs mes anterior</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#333333]">87%</p>
                <p className="text-xs text-green-600">+5%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Peak Hours */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-5">
          <h3 className="text-[#333333] mb-4">Horarios Pico</h3>
          <div className="space-y-3">
            <div className="bg-white/80 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Mañana (8-12h)</span>
                <span className="text-sm text-[#7AC142]">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#7AC142] h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div className="bg-white/80 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Tarde (12-18h)</span>
                <span className="text-sm text-purple-600">35%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div className="bg-white/80 rounded-xl p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Noche (18-20h)</span>
                <span className="text-sm text-blue-600">20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
