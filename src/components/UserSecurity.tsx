import React, { useState } from 'react';
import { Screen, NavigationAction } from '../App';
import { ArrowLeft, Lock, Shield, Smartphone, Key, AlertTriangle } from 'lucide-react';

interface UserSecurityProps {
    onNavigate: (screen: NavigationAction) => void;
}

export default function UserSecurity({ onNavigate }: UserSecurityProps) {
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

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
                <h2 className="text-[#333333] font-semibold">Seguridad</h2>
            </div>

            <div className="flex-1 p-6 overflow-y-auto">
                {/* Password Section */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                            <Key className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="font-medium text-[#333333]">Contraseña</h3>
                            <p className="text-xs text-gray-500">Último cambio hace 3 meses</p>
                        </div>
                    </div>
                    <button className="w-full py-3 border border-gray-200 rounded-xl text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors">
                        Cambiar Contraseña
                    </button>
                </div>

                {/* 2FA Section */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                            <Smartphone className="w-5 h-5 text-[#7AC142]" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-medium text-[#333333]">Autenticación en 2 pasos</h3>
                            <p className="text-xs text-gray-500">Añade una capa extra de seguridad</p>
                        </div>
                        <button
                            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                            className={`w-12 h-7 rounded-full transition-colors relative ${twoFactorEnabled ? 'bg-[#7AC142]' : 'bg-gray-300'}`}
                        >
                            <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all shadow-sm ${twoFactorEnabled ? 'left-6' : 'left-1'}`}></div>
                        </button>
                    </div>
                </div>

                {/* Activity Section */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center">
                            <Shield className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                            <h3 className="font-medium text-[#333333]">Dispositivos Activos</h3>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-2 border-b border-gray-50">
                            <div className="flex items-center gap-3">
                                <Smartphone className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-sm font-medium text-[#333333]">iPhone 13 Pro</p>
                                    <p className="text-xs text-[#7AC142]">Este dispositivo</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                            <div className="flex items-center gap-3">
                                <Smartphone className="w-5 h-5 text-gray-400" />
                                <div>
                                    <p className="text-sm font-medium text-[#333333]">Samsung S21</p>
                                    <p className="text-xs text-gray-400">Hace 2 días • Santa Cruz</p>
                                </div>
                            </div>
                            <button className="text-red-500 text-xs font-medium">Cerrar</button>
                        </div>
                    </div>
                </div>

                {/* Alert Info */}
                <div className="mt-6 flex gap-3 bg-yellow-50 p-4 rounded-xl border border-yellow-100">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 shrink-0" />
                    <p className="text-xs text-yellow-800 leading-relaxed">
                        Si notas actividad sospechosa, cambia tu contraseña inmediatamente y contacta a soporte.
                    </p>
                </div>
            </div>
        </div>
    );
}
