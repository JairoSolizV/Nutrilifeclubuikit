import React, { useState } from 'react';
import { Screen, UserType, NavigationAction } from '../App';
import { ArrowLeft } from 'lucide-react';

interface LoginScreenProps {
  onNavigate: (screen: NavigationAction, userType?: UserType) => void;
}

export default function LoginScreen({ onNavigate }: LoginScreenProps) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onNavigate('basic-user-home', 'basic');
  };

  const handleGuestContinue = () => {
    onNavigate('guest-home', 'guest');
  };

  const handleMemberLogin = () => {
    onNavigate('member-home', 'member');
  };

  const handleHostLogin = () => {
    onNavigate('host-dashboard', 'host');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center px-6 py-3">
        <span className="text-sm">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Header Illustration */}
      <div className="w-full h-64 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1622597468666-27cb9cae0e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwcGVvcGxlJTIwZ3JlZW4lMjBzbW9vdGhpZXxlbnwxfHx8fDE3NjY2MDczMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Happy person with shake"
          className="w-full h-full object-cover opacity-80"
        />
        <button
          onClick={() => onNavigate('BACK')}
          className="absolute top-4 left-6 p-3 bg-white rounded-full shadow-xl z-50 hover:bg-gray-50 flex items-center justify-center transition-transform active:scale-95"
          aria-label="Volver"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <h2 className="text-center text-[#333333] mb-8">Bienvenido de nuevo</h2>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <input
              type="tel"
              placeholder="Número de Celular"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:border-[#7AC142] focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg hover:bg-[#6BB032] transition-colors mb-4"
        >
          Iniciar Sesión
        </button>

        {/* Register Link */}
        <div className="text-center mb-4">
          <button className="text-[#7AC142] text-sm">
            Registrate aquí
          </button>
        </div>

        {/* Demo Role Selection */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-4">
          <p className="text-xs text-gray-500 text-center mb-3">DEMO - Selecciona un rol:</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleMemberLogin}
              className="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-xl text-sm hover:border-[#7AC142] hover:text-[#7AC142] transition-colors"
            >
              Socio
            </button>
            <button
              onClick={handleHostLogin}
              className="px-3 py-2 bg-white border border-gray-300 text-gray-700 rounded-xl text-sm hover:border-[#7AC142] hover:text-[#7AC142] transition-colors"
            >
              Anfitrión
            </button>
          </div>
        </div>
      </div>

      {/* Guest Continue Button - Footer */}
      <div className="px-6 pb-8">
        <button
          onClick={handleGuestContinue}
          className="w-full py-4 border-2 border-[#7AC142] text-[#7AC142] rounded-full hover:bg-green-50 transition-colors"
        >
          Continuar como Invitado
        </button>
      </div>
    </div>
  );
}