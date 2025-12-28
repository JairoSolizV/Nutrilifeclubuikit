import React from 'react';
import { Screen, UserType, NavigationAction } from '../App';
import { Home, MapPin, User, ChevronRight, Shield, Edit } from 'lucide-react';
import BasicUserBottomNav from './BasicUserBottomNav';
import MemberBottomNav from './MemberBottomNav';

interface UserProfileProps {
  onNavigate: (screen: NavigationAction, userType?: UserType) => void;
  userType?: UserType;
}

export default function UserProfile({ onNavigate, userType }: UserProfileProps) {
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
      <div className="bg-white px-6 py-6 shadow-sm">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-20 h-20 bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="text-2xl">CM</span>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-[#333333]">Carlos Méndez</h2>
            <p className="text-gray-500 text-sm mt-1">+591 7123 4567</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        {/* Menu List */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
          <button
            onClick={() => onNavigate('user-edit-profile')}
            className="w-full px-5 py-4 flex items-center justify-between border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Edit className="w-5 h-5 text-gray-400" />
              <span className="text-[#333333]">Editar mis datos</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => onNavigate('user-security')}
            className="w-full px-5 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-400" />
              <span className="text-[#333333]">Seguridad</span>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Host CTA Card */}
        <div className="bg-gradient-to-br from-[#7AC142] via-[#6BB032] to-[#5BA922] rounded-3xl p-6 shadow-lg">
          <h3 className="text-white mb-2">¿Quieres ser Anfitrión?</h3>
          <p className="text-white/90 text-sm mb-5">
            Registra tu propio Club y forma parte de nuestra comunidad
          </p>
          <button
            onClick={() => onNavigate('host-registration')}
            className="w-full bg-white text-[#7AC142] py-3 rounded-full hover:bg-gray-50 transition-colors shadow-md"
          >
            Solicitar Registro
          </button>
        </div>
      </div>

      {userType === 'member' ? (
        <MemberBottomNav activeScreen="profile" onNavigate={onNavigate} />
      ) : (
        <BasicUserBottomNav activeScreen="profile" onNavigate={onNavigate} />
      )}
    </div>
  );
}