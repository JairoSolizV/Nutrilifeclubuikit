import React, { useState } from 'react';
import { Screen, NavigationAction } from '../App';
import { ArrowLeft, QrCode, CheckCircle, Camera, Flashlight } from 'lucide-react';

interface HostScanQRProps {
  onNavigate: (screen: NavigationAction) => void;
}

export default function HostScanQR({ onNavigate }: HostScanQRProps) {
  const [scanned, setScanned] = useState(false);
  const [flashOn, setFlashOn] = useState(false);

  const handleScan = () => {
    // Simulate scanning
    setScanned(true);
    setTimeout(() => {
      setScanned(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center px-6 py-3 text-white">
        <span className="text-sm">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-white/60 rounded-sm"></div>
          <div className="w-4 h-3 bg-white/60 rounded-sm"></div>
          <div className="w-4 h-3 bg-white/60 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between">
        <button onClick={() => onNavigate('BACK')} className="text-white">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-white">Escanear QR</h2>
        <button
          onClick={() => setFlashOn(!flashOn)}
          className={`p-2 rounded-full ${flashOn ? 'bg-yellow-400' : 'bg-white/20'}`}
        >
          <Flashlight className={`w-5 h-5 ${flashOn ? 'text-black' : 'text-white'}`} />
        </button>
      </div>

      {/* Scanner Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {!scanned ? (
          <>
            {/* Camera Frame */}
            <div className="relative w-full max-w-sm aspect-square mb-8">
              {/* Camera View Simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-24 h-24 text-white/20" />
                </div>
              </div>

              {/* Scanning Frame */}
              <div className="absolute inset-0">
                {/* Corners */}
                <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-[#7AC142] rounded-tl-2xl"></div>
                <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-[#7AC142] rounded-tr-2xl"></div>
                <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-[#7AC142] rounded-bl-2xl"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-[#7AC142] rounded-br-2xl"></div>

                {/* Scanning Line Animation */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2">
                  <div className="h-1 bg-[#7AC142] shadow-lg shadow-[#7AC142]/50 animate-pulse"></div>
                </div>
              </div>
            </div>

            <p className="text-white text-center mb-8">
              Coloca el código QR del socio dentro del marco
            </p>

            {/* Manual Entry Button */}
            <button
              onClick={handleScan}
              className="text-[#7AC142] underline"
            >
              Ingresar número de socio manualmente
            </button>
          </>
        ) : (
          /* Success State */
          <div className="text-center">
            <div className="w-24 h-24 bg-[#7AC142] rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-white mb-2">¡Asistencia Registrada!</h3>
            <p className="text-white/80 text-sm mb-6">María González</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-6 max-w-sm mx-auto">
              <div className="grid grid-cols-2 gap-4 text-white">
                <div>
                  <p className="text-white/60 text-sm mb-1">Número de Socio</p>
                  <p>SC-2024-0156</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Nivel</p>
                  <p className="text-yellow-400">VIP</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Visita #</p>
                  <p className="text-[#7AC142]">25</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm mb-1">Puntos ganados</p>
                  <p className="text-[#7AC142]">+10 pts</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setScanned(false)}
              className="bg-white text-[#333333] px-8 py-3 rounded-full"
            >
              Escanear otro código
            </button>
          </div>
        )}
      </div>

      {/* Quick Stats Bar */}
      <div className="bg-white/10 backdrop-blur-sm px-6 py-4">
        <div className="flex justify-around text-center text-white">
          <div>
            <p className="text-2xl mb-1">42</p>
            <p className="text-xs text-white/60">Hoy</p>
          </div>
          <div className="w-px bg-white/20"></div>
          <div>
            <p className="text-2xl mb-1">287</p>
            <p className="text-xs text-white/60">Esta semana</p>
          </div>
          <div className="w-px bg-white/20"></div>
          <div>
            <p className="text-2xl mb-1">1,245</p>
            <p className="text-xs text-white/60">Este mes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
