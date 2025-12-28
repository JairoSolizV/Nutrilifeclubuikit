import { Screen, NavigationAction, UserType } from '../App';
import { Home, Calendar, Trophy, User } from 'lucide-react';

interface MemberBottomNavProps {
    activeScreen: 'home' | 'attendance' | 'achievements' | 'profile';
    onNavigate: (screen: NavigationAction, userType?: UserType) => void;
}

export default function MemberBottomNav({ activeScreen, onNavigate }: MemberBottomNavProps) {
    return (
        <div className="bg-white border-t border-gray-200 px-8 py-4 flex justify-around items-center sticky bottom-0 w-full z-50">
            <button
                onClick={() => onNavigate('member-home', 'member')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'home' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Home className="w-6 h-6" />
                <span className="text-xs">Inicio</span>
            </button>
            <button
                onClick={() => onNavigate('member-attendance', 'member')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'attendance' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Calendar className="w-6 h-6" />
                <span className="text-xs">Asistencias</span>
            </button>
            <button
                onClick={() => onNavigate('member-achievements', 'member')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'achievements' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <Trophy className="w-6 h-6" />
                <span className="text-xs">Logros</span>
            </button>
            <button
                onClick={() => onNavigate('profile', 'member')}
                className={`flex flex-col items-center gap-1 ${activeScreen === 'profile' ? 'text-[#7AC142]' : 'text-gray-400'}`}
            >
                <User className="w-6 h-6" />
                <span className="text-xs">Perfil</span>
            </button>
        </div>
    );
}
