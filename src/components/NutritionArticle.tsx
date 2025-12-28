import React from 'react';
import { Screen, NavigationAction } from '../App';
import { ArrowLeft, Coffee } from 'lucide-react';

interface NutritionArticleProps {
  onNavigate: (screen: NavigationAction) => void;
}

export default function NutritionArticle({ onNavigate }: NutritionArticleProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center px-6 py-3 bg-white">
        <span className="text-sm">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Header with Back Button */}
      <div className="relative h-16 bg-white border-b border-gray-200 flex items-center px-6">
        <button
          onClick={() => onNavigate('BACK')}
          className="absolute left-6 z-30"
        >
          <ArrowLeft className="w-6 h-6 text-[#333333]" />
        </button>
        <h2 className="text-[#333333] mx-auto">Nutrición al Día</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header Image */}
        <div className="relative h-64">
          <img
            src="https://images.unsplash.com/photo-1601546097281-4eda134e3d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZydWl0cyUyMG9hdHMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzY2NjA3MzI0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fresh fruits and oats"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="px-6 py-6">
          {/* Title */}
          <h1 className="text-[#333333] mb-4">5 Beneficios de desayunar proteína</h1>

          {/* Tags */}
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 bg-green-100 text-[#7AC142] rounded-full text-sm">
              Salud
            </span>
            <span className="px-3 py-1 bg-green-100 text-[#7AC142] rounded-full text-sm">
              Energía
            </span>
          </div>

          {/* Article Text */}
          <div className="space-y-4 text-gray-600">
            <p>
              Comenzar el día con un desayuno rico en proteína puede transformar tu salud y bienestar.
              La proteína es esencial para mantener la energía estable durante toda la mañana y evitar
              los picos de hambre.
            </p>

            <p>
              Estudios recientes demuestran que las personas que consumen entre 20-30 gramos de proteína
              en el desayuno experimentan mejor concentración y rendimiento físico durante el día.
            </p>

            <h3 className="text-[#333333] mt-6 mb-3">Beneficios principales:</h3>

            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-[#7AC142]">•</span>
                <span>Mayor saciedad y control del apetito</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7AC142]">•</span>
                <span>Mejora la masa muscular magra</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7AC142]">•</span>
                <span>Estabiliza los niveles de azúcar en sangre</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7AC142]">•</span>
                <span>Aumenta el metabolismo</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#7AC142]">•</span>
                <span>Mejora la concentración mental</span>
              </li>
            </ul>

            {/* Recipe Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 my-6">
              <div className="flex items-center gap-2 text-[#7AC142] mb-3">
                <Coffee className="w-5 h-5" />
                <h4 className="text-[#333333]">Receta de la semana</h4>
              </div>
              <p className="text-gray-700 mb-3">Batido Verde Energizante</p>
              <p className="text-sm text-gray-600">
                Mezcla 1 scoop de proteína de vainilla, 1 taza de espinacas, 1/2 plátano,
                1 taza de leche de almendras y hielo. ¡Listo en 2 minutos!
              </p>
            </div>

            <p>
              Incorporar proteína de calidad en tu desayuno no tiene que ser complicado. Opciones
              como batidos proteicos, huevos, yogur griego o avena con proteína son excelentes
              alternativas para comenzar el día con energía.
            </p>

            <p>
              Recuerda que la constancia es clave. Implementar este hábito saludable durante al menos
              21 días te ayudará a notar cambios significativos en tu energía y bienestar general.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
