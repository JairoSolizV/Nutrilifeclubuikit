import { Screen, NavigationAction, UserType } from '../App';
import { Home, Calendar, Trophy, User, Star, Award, TrendingUp, Gift, QrCode, Zap, ShoppingBag, ArrowRight, Tag, Coffee, Info } from 'lucide-react';
import MemberBottomNav from './MemberBottomNav';

interface MemberHomeProps {
  onNavigate: (screen: NavigationAction, userType?: UserType) => void;
}

export default function MemberHome({ onNavigate }: MemberHomeProps) {
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

      {/* Header with Member Info */}
      <div className="bg-gradient-to-br from-[#7AC142] to-[#6BB032] px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-white/90 text-sm">¡Hola de nuevo!</p>
            <h2 className="text-white mt-1">María González</h2>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <span className="text-white text-xl">MG</span>
          </div>
        </div>

        {/* Member Level Card */}
        <div className="bg-white/95 rounded-2xl p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <p className="text-[#333333]">Socio VIP</p>
                <p className="text-xs text-gray-500">Nivel Diamante</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[#7AC142]">485 pts</p>
              <p className="text-xs text-gray-500">Este mes</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Progreso al siguiente nivel</span>
              <span>85/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-[#7AC142] h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 pb-24">

        {/* Loyalty Card Section */}
        <div className="bg-white rounded-3xl p-6 shadow-md mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#7AC142]/10 rounded-bl-full -mr-8 -mt-8"></div>

          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <h3 className="text-lg font-bold text-[#333333]">Tarjeta de Fidelidad</h3>
              <p className="text-sm text-gray-500">Club Vida Activa</p>
            </div>
            <div className="bg-[#7AC142]/10 px-3 py-1 rounded-full">
              <span className="text-xs font-bold text-[#7AC142]">8/10 Sellos</span>
            </div>
          </div>

          {/* Stamps Grid */}
          <div className="flex justify-center mb-2 relative z-10">
            <div className="grid grid-cols-5 gap-2 max-w-[280px]">
              {[...Array(8)].map((_, i) => (
                <div key={`filled-${i}`} className="w-10 h-10 bg-[#7AC142] rounded-full flex items-center justify-center shadow-sm">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              ))}
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-xs text-gray-400">9</span>
              </div>
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center border-2 border-yellow-200 animate-pulse">
                <Gift className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          </div>

          <p className="text-xs text-center text-gray-500 relative z-10">
            ¡Solo 2 consumos más para tu recompensa sorpresa!
          </p>
        </div>

        {/* Order Action */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('member-order', 'member')}
            className="w-full bg-[#333333] text-white p-1 rounded-full shadow-xl flex items-center pr-6 group hover:bg-black transition-all"
          >
            <div className="w-14 h-14 bg-[#7AC142] rounded-full flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-bold text-lg">Hacer Pedido</h3>
              <p className="text-gray-400 text-xs">Pide por adelantado y recoge</p>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* News & Benefits Feed */}
        <h3 className="text-[#333333] font-bold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-[#7AC142]" />
          Novedades y Beneficios
        </h3>

        <div className="space-y-4">
          {/* News Item 1 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm flex gap-4">
            <div className="w-20 h-20 bg-orange-100 rounded-xl flex-shrink-0 flex items-center justify-center">
              <Coffee className="w-8 h-8 text-orange-500" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">NUEVO</span>
              <h4 className="font-bold text-[#333333] text-sm mt-1">¡Llegó el Té de Durazno!</h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                Ven a probar nuestro nuevo sabor energizante. Disponible desde hoy en la barra.
              </p>
            </div>
          </div>

          {/* News Item 2 (Benefit) */}
          <div className="bg-white p-4 rounded-2xl shadow-sm flex gap-4 border border-[#7AC142]/20">
            <div className="w-20 h-20 bg-green-100 rounded-xl flex-shrink-0 flex items-center justify-center">
              <Tag className="w-8 h-8 text-[#7AC142]" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-[#7AC142] bg-green-50 px-2 py-0.5 rounded-full">BENEFICIO SOCIO</span>
              <h4 className="font-bold text-[#333333] text-sm mt-1">10% OFF en Barras</h4>
              <p className="text-xs text-gray-500 mt-1">
                Por ser Socio Nivel Diamante, tienes descuento en todas las barras de proteína.
              </p>
            </div>
          </div>

          {/* News Item 3 */}
          <div className="bg-white p-4 rounded-2xl shadow-sm flex gap-4">
            <div className="w-20 h-20 bg-blue-100 rounded-xl flex-shrink-0 flex items-center justify-center">
              <Info className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full">NUTRICIÓN</span>
              <h4 className="font-bold text-[#333333] text-sm mt-1">Tip: Hidratación</h4>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                Recuerda beber al menos 2 litros de agua al día para maximizar tu rendimiento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MemberBottomNav activeScreen="home" onNavigate={onNavigate} />
    </div>
  );
}