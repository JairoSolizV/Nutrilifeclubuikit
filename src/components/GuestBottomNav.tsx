import React from 'react';
import { Screen } from '../App';
import { Home, Compass, LogIn } from 'lucide-react';

interface GuestBottomNavProps {
    activeScreen: 'home' | 'map' | 'login';
    onNavigate: (screen: Screen) => void;
}

export default function GuestBottomNav({ activeScreen, onNavigate }: GuestBottomNavProps) {
    return (
        <div className="bg-white border-t border-gray-200 px-8 py-4 flex justify-around items-center sticky bottom-0 w-full z-50">
            <button
                onClick={() => onNavigate('guest-home')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'home' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
            </button>
            <button
                onClick={() => onNavigate('map')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'map' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Compass className="w-6 h-6" />
                <span className="text-xs">Explorar</span>
            </button>
            <button
                onClick={() => onNavigate('login')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'login' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <LogIn className="w-6 h-6" />
                <span className="text-xs">Ingresar</span>
            </button>
        </div>
    );
}
