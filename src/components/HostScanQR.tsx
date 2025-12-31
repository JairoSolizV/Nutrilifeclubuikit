import React, { useState } from 'react';
import { Screen, NavigationAction } from '../App';
import { ArrowLeft, QrCode, CheckCircle, Camera, Flashlight, Coffee, ShoppingBag } from 'lucide-react';

interface HostScanQRProps {
  onNavigate: (screen: NavigationAction) => void;
}

export default function HostScanQR({ onNavigate }: HostScanQRProps) {
  const [scanned, setScanned] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const [scanType, setScanType] = useState<'attendance' | 'consumption' | null>(null);

  const handleScan = () => {
    // Simulate scanning
    setScanned(true);
  };

  const handleAction = (type: 'attendance' | 'consumption') => {
    setScanType(type);
    setTimeout(() => {
      setScanned(false);
      setScanType(null);
    }, 3000);
  }

  const resetScan = () => {
    setScanned(false);
    setScanType(null);
  }

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
            <div className="relative w-full max-w-sm aspect-square mb-8 animate-in zoom-in duration-500">
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
              Enfoca el código QR del socio
            </p>

            {/* Manual Entry Button */}
            <button
              onClick={handleScan}
              className="text-[#7AC142] underline"
            >
              Ingresar código manualmente
            </button>
          </>
        ) : !scanType ? (
          /* Action Selection State */
          <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-10 duration-500">
            <div className="bg-white rounded-3xl p-6 text-center mb-6">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#333333]">MG</span>
              </div>
              <h3 className="text-xl font-bold text-[#333333]">María González</h3>
              <p className="text-gray-500 text-sm">Socio VIP • SC-2024-0156</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAction('attendance')}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl hover:bg-white/20 transition-colors text-center"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-medium">Solo Asistencia</p>
                <p className="text-white/60 text-xs mt-1">+10 pts</p>
              </button>

              <button
                onClick={() => handleAction('consumption')}
                className="bg-[#7AC142] p-6 rounded-3xl shadow-lg hover:bg-[#6BB032] transition-colors text-center"
              >
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <p className="text-white font-bold">Registrar Consumo</p>
                <p className="text-white/80 text-xs mt-1">+50 pts</p>
              </button>
            </div>

            <button onClick={resetScan} className="w-full text-white/60 text-sm mt-8">
              Cancelar
            </button>
          </div>
        ) : (
          /* Success State */
          <div className="text-center animate-in zoom-in duration-300">
            <div className="w-24 h-24 bg-[#7AC142] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-white mb-2 text-2xl font-bold">
              {scanType === 'consumption' ? '¡Consumo Registrado!' : '¡Asistencia OK!'}
            </h3>
            <p className="text-white/80 text-sm mb-6">Se han actualizado los puntos del socio.</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-8 max-w-sm mx-auto">
              <div className="flex justify-between items-center text-white">
                <span className="text-white/60">Puntos ganados:</span>
                <span className="text-2xl font-bold text-[#7AC142]">
                  {scanType === 'consumption' ? '+50' : '+10'}
                </span>
              </div>
            </div>

            <button
              onClick={resetScan}
              className="bg-white text-[#333333] px-8 py-3 rounded-full font-medium shadow-xl"
            >
              Escanear otro código
            </button>
          </div>
        )}
      </div>

      {/* Quick Stats Bar only visible when not scanning result */}
      {!scanned && (
        <div className="bg-white/10 backdrop-blur-sm px-6 py-4">
          <div className="flex justify-around text-center text-white">
            <div>
              <p className="text-2xl mb-1">42</p>
              <p className="text-xs text-white/60">Asistencias</p>
            </div>
            <div className="w-px bg-white/20"></div>
            <div>
              <p className="text-2xl mb-1">15</p>
              <p className="text-xs text-white/60">Consumos</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
