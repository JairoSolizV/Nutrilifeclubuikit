import { Screen, UserType, NavigationAction } from '../App';
import { Home, MapPin, User } from 'lucide-react';

interface BasicUserBottomNavProps {
    activeScreen: 'home' | 'map' | 'profile';
    onNavigate: (screen: NavigationAction, userType?: UserType) => void;
}

export default function BasicUserBottomNav({ activeScreen, onNavigate }: BasicUserBottomNavProps) {
    return (
        <div className="bg-white border-t border-gray-200 px-8 py-4 flex justify-around items-center sticky bottom-0 w-full z-50">
            <button
                onClick={() => onNavigate('basic-user-home', 'basic')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'home' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
            </button>
            <button
                onClick={() => onNavigate('map', 'basic')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'map' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <MapPin className="w-6 h-6" />
                <span className="text-xs">Mapa</span>
            </button>
            <button
                onClick={() => onNavigate('profile', 'basic')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'profile' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <User className="w-6 h-6" />
                <span className="text-xs">Perfil</span>
            </button>
        </div>
    );
}
