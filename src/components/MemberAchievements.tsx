import React from 'react';
import { Screen } from '../App';
import { ArrowLeft, Trophy, Award, Star, Zap, Target, Heart, Calendar, TrendingUp, Lock } from 'lucide-react';

interface MemberAchievementsProps {
  onNavigate: (screen: Screen) => void;
}

export default function MemberAchievements({ onNavigate }: MemberAchievementsProps) {
  const unlockedAchievements = [
    {
      id: 1,
      name: 'Primera Visita',
      description: 'Visitaste el club por primera vez',
      icon: 'star',
      color: 'from-blue-400 to-blue-500',
      points: 50,
      date: 'Feb 2024',
    },
    {
      id: 2,
      name: 'Semana Completa',
      description: 'Visitaste el club 7 días seguidos',
      icon: 'zap',
      color: 'from-yellow-400 to-yellow-500',
      points: 100,
      date: 'Mar 2024',
    },
    {
      id: 3,
      name: 'Socio del Mes',
      description: 'Mayor asistencia del mes',
      icon: 'trophy',
      color: 'from-purple-400 to-purple-500',
      points: 200,
      date: 'Nov 2024',
    },
    {
      id: 4,
      name: 'Madrugador',
      description: 'Asististe antes de las 8 AM 10 veces',
      icon: 'target',
      color: 'from-orange-400 to-orange-500',
      points: 75,
      date: 'Oct 2024',
    },
    {
      id: 5,
      name: 'Fiel al Club',
      description: 'Asististe 100 veces al club',
      icon: 'heart',
      color: 'from-pink-400 to-pink-500',
      points: 300,
      date: 'Dic 2024',
    },
    {
      id: 6,
      name: 'Mes Perfecto',
      description: 'Asististe todos los días del mes',
      icon: 'calendar',
      color: 'from-green-400 to-green-500',
      points: 250,
      date: 'Nov 2024',
    },
  ];

  const lockedAchievements = [
    {
      id: 7,
      name: 'Constante',
      description: 'Visita el club 30 días seguidos',
      icon: 'trending-up',
      color: 'from-gray-300 to-gray-400',
      points: 500,
      progress: 23,
      total: 30,
    },
    {
      id: 8,
      name: 'Legendario',
      description: 'Asististe 500 veces al club',
      icon: 'award',
      color: 'from-gray-300 to-gray-400',
      points: 1000,
      progress: 128,
      total: 500,
    },
  ];

  const getIcon = (iconName: string, className: string) => {
    const icons: { [key: string]: JSX.Element } = {
      star: <Star className={className} />,
      zap: <Zap className={className} />,
      trophy: <Trophy className={className} />,
      target: <Target className={className} />,
      heart: <Heart className={className} />,
      calendar: <Calendar className={className} />,
      'trending-up': <TrendingUp className={className} />,
      award: <Award className={className} />,
    };
    return icons[iconName] || <Star className={className} />;
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
      <div className="bg-white px-6 py-4 shadow-sm flex items-center">
        <button onClick={() => onNavigate('member-home')} className="mr-4">
          <ArrowLeft className="w-6 h-6 text-[#333333]" />
        </button>
        <h2 className="text-[#333333]">Mis Logros</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Summary Card */}
        <div className="bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-3xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white/90 text-sm">Logros Desbloqueados</p>
              <p className="text-white text-3xl mt-1">12 / 18</p>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="bg-white/20 rounded-full h-2 backdrop-blur-sm">
            <div className="bg-white h-2 rounded-full" style={{ width: '67%' }}></div>
          </div>
          <p className="text-white/90 text-sm mt-3">Puntos totales: 1,275 pts</p>
        </div>

        {/* Unlocked Achievements */}
        <div className="mb-6">
          <h3 className="text-[#333333] mb-4 px-1">Logros Obtenidos</h3>
          <div className="grid grid-cols-2 gap-4">
            {unlockedAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className={`bg-gradient-to-br ${achievement.color} p-4 flex items-center justify-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    {getIcon(achievement.icon, 'w-8 h-8 text-white')}
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="text-[#333333] text-sm mb-1">{achievement.name}</h4>
                  <p className="text-xs text-gray-500 mb-2">{achievement.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#7AC142]">+{achievement.points} pts</span>
                    <span className="text-xs text-gray-400">{achievement.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Locked Achievements */}
        <div>
          <h3 className="text-[#333333] mb-4 px-1">Próximos Logros</h3>
          <div className="space-y-4">
            {lockedAchievements.map((achievement) => (
              <div key={achievement.id} className="bg-white rounded-2xl shadow-md p-4">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center flex-shrink-0 relative`}>
                    {getIcon(achievement.icon, 'w-7 h-7 text-white opacity-50')}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#333333] mb-1">{achievement.name}</h4>
                    <p className="text-sm text-gray-500 mb-3">{achievement.description}</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Progreso</span>
                        <span>{achievement.progress} / {achievement.total}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#7AC142] h-2 rounded-full" 
                          style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500">Recompensa: {achievement.points} pts</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivation Card */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-5 mt-6">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-6 h-6 text-purple-600" />
            <h4 className="text-[#333333]">¡Sigue así!</h4>
          </div>
          <p className="text-sm text-gray-700">
            Estás a solo 7 días de desbloquear el logro "Constante". ¡No te rindas!
          </p>
        </div>
      </div>
    </div>
  );
}
