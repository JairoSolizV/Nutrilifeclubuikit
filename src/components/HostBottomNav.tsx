import { Screen, NavigationAction } from '../App';
import { Home, Users, QrCode, Settings, ShoppingBag } from 'lucide-react';

interface HostBottomNavProps {
    activeScreen: 'home' | 'orders' | 'scan' | 'members' | 'settings';
    onNavigate: (screen: NavigationAction) => void;
}

export default function HostBottomNav({ activeScreen, onNavigate }: HostBottomNavProps) {
    return (
        <div className="bg-white border-t border-gray-200 px-6 py-3 flex justify-between items-center sticky bottom-0 w-full z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <button
                onClick={() => onNavigate('host-dashboard')}
                className={`flex flex-col items-center gap-1 min-w-[56px] ${activeScreen === 'home' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Home className="w-6 h-6" />
                <span className="text-[10px] font-medium">Inicio</span>
            </button>
            <button
                onClick={() => onNavigate('host-orders')}
                className={`flex flex-col items-center gap-1 min-w-[56px] ${activeScreen === 'orders' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <ShoppingBag className="w-6 h-6" />
                <span className="text-[10px] font-medium">Pedidos</span>
            </button>
            <button
                onClick={() => onNavigate('host-scan')}
                className={`flex flex-col items-center gap-1 min-w-[56px] relative -top-5`}
            >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform active:scale-95 ${activeScreen === 'scan' ? 'bg-[#7AC142] text-white ring-4 ring-green-100' : 'bg-[#333333] text-white'}`}>
                    <QrCode className="w-7 h-7" />
                </div>
                <span className={`text-[10px] font-medium relative top-1 ${activeScreen === 'scan' ? 'text-[#7AC142]' : 'text-gray-400'}`}>Escanear</span>
            </button>
            <button
                onClick={() => onNavigate('host-members')}
                className={`flex flex-col items-center gap-1 min-w-[56px] ${activeScreen === 'members' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Users className="w-6 h-6" />
                <span className="text-[10px] font-medium">Socios</span>
            </button>
            <button
                onClick={() => onNavigate('host-settings')}
                className={`flex flex-col items-center gap-1 min-w-[56px] ${activeScreen === 'settings' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Settings className="w-6 h-6" />
                <span className="text-[10px] font-medium">Config</span>
            </button>
        </div>
    );
}
