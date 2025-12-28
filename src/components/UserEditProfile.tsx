import React, { useState } from 'react';
import { Screen, NavigationAction } from '../App';
import { ArrowLeft, Save, Camera, User, Mail, Phone, Lock } from 'lucide-react';

interface UserEditProfileProps {
    onNavigate: (screen: NavigationAction) => void;
}

export default function UserEditProfile({ onNavigate }: UserEditProfileProps) {
    const [name, setName] = useState("Carlos Méndez");
    const [email, setEmail] = useState("carlos.mendez@email.com");
    const [phone, setPhone] = useState("+591 7123 4567");

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
            <div className="bg-white px-6 py-4 shadow-sm flex items-center gap-4 sticky top-0 z-30">
                <button onClick={() => onNavigate('BACK')} className="text-[#333333]">
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h2 className="text-[#333333] font-semibold">Editar Mis Datos</h2>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                {/* Avatar Edit */}
                <div className="flex flex-col items-center mb-8">
                    <div className="relative">
                        <div className="w-24 h-24 bg-gradient-to-br from-[#7AC142] to-[#6BB032] rounded-full flex items-center justify-center text-white text-3xl shadow-lg border-4 border-white">
                            CM
                        </div>
                        <button className="absolute bottom-0 right-0 p-2 bg-[#333333] rounded-full text-white shadow-md hover:bg-black transition-colors">
                            <Camera className="w-4 h-4" />
                        </button>
                    </div>
                    <p className="mt-3 text-[#7AC142] text-sm font-medium">Cambiar foto de perfil</p>
                </div>

                {/* Form */}
                <div className="space-y-5">
                    <div className="bg-white p-5 rounded-2xl shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <User className="w-4 h-4 text-[#7AC142]" />
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7AC142] focus:bg-white transition-all text-[#333333]"
                        />
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Mail className="w-4 h-4 text-[#7AC142]" />
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7AC142] focus:bg-white transition-all text-[#333333]"
                        />
                    </div>

                    <div className="bg-white p-5 rounded-2xl shadow-sm">
                        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                            <Phone className="w-4 h-4 text-[#7AC142]" />
                            Número de Celular
                        </label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7AC142] focus:bg-white transition-all text-[#333333]"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Action */}
            <div className="bg-white border-t border-gray-100 p-6 sticky bottom-0">
                <button
                    onClick={() => onNavigate('BACK')}
                    className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg font-medium hover:bg-[#6BB032] transition-colors flex items-center justify-center gap-2"
                >
                    <Save className="w-5 h-5" />
                    Guardar Cambios
                </button>
            </div>
        </div>
    );
}
