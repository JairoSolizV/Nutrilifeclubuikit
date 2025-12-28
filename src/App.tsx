import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import ScreenSelector from './components/ScreenSelector';
import LoginScreen from './components/LoginScreen';
import GuestHomeScreen from './components/GuestHomeScreen';
import BasicUserHomeScreen from './components/BasicUserHomeScreen';
import MapScreen from './components/MapScreen';
import ClubDetailInfo from './components/ClubDetailInfo';
import ClubDetailMenu from './components/ClubDetailMenu';
import ClubDetailEvents from './components/ClubDetailEvents';
import NutritionArticle from './components/NutritionArticle';
import UserProfile from './components/UserProfile';
import MemberHome from './components/MemberHome';
import MemberAttendance from './components/MemberAttendance';
import MemberAchievements from './components/MemberAchievements';
import MemberGamification from './components/MemberGamification';
import HostDashboard from './components/HostDashboard';
import HostMemberList from './components/HostMemberList';
import HostScanQR from './components/HostScanQR';
import HostClubSettings from './components/HostClubSettings';
import HostRegistration from './components/HostRegistration';
import HostRegistrationStatus from './components/HostRegistrationStatus';
import HostRegisterMember from './components/HostRegisterMember';
import HostDashboardStats from './components/HostDashboardStats';
import SupportCenter from './components/SupportCenter';
import GuestFlavorCatalog from './components/GuestFlavorCatalog';
import UserEditProfile from './components/UserEditProfile';
import UserSecurity from './components/UserSecurity';

export type Screen =
  | 'splash'
  | 'screen-selector'
  | 'login'
  | 'guest-home'
  | 'basic-user-home'
  | 'map'
  | 'club-info'
  | 'club-menu'
  | 'club-events'
  | 'nutrition'
  | 'profile'
  | 'member-home'
  | 'member-attendance'
  | 'member-achievements'
  | 'member-gamification'
  | 'host-dashboard'
  | 'host-members'
  | 'host-scan'
  | 'host-settings'
  | 'host-registration'
  | 'host-registration-status'
  | 'host-register-member'
  | 'host-stats'
  | 'support-center'
  | 'guest-catalog'
  | 'user-edit-profile'
  | 'user-security';

export type UserType = 'guest' | 'basic' | 'member' | 'host' | null;

export type NavigationAction = Screen | 'BACK';

function App() {
  const [history, setHistory] = useState<Screen[]>(['splash']);
  const [userType, setUserType] = useState<UserType>(null);

  const currentScreen = history[history.length - 1];

  const navigateTo = (action: NavigationAction, user?: UserType) => {
    if (action === 'BACK') {
      if (history.length > 1) {
        setHistory(prev => prev.slice(0, -1));
      }
    } else {
      setHistory(prev => [...prev, action]);
    }

    if (user !== undefined) {
      setUserType(user);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onNavigate={navigateTo} />;
      case 'screen-selector':
        return <ScreenSelector onNavigate={navigateTo} />;
      case 'login':
        return <LoginScreen onNavigate={navigateTo} />;
      case 'guest-home':
        return <GuestHomeScreen onNavigate={navigateTo} />;
      case 'guest-catalog':
        return <GuestFlavorCatalog onNavigate={navigateTo} />;
      case 'basic-user-home':
        return <BasicUserHomeScreen onNavigate={navigateTo} />;
      case 'user-edit-profile':
        return <UserEditProfile onNavigate={navigateTo} />;
      case 'user-security':
        return <UserSecurity onNavigate={navigateTo} />;
      case 'map':
        return <MapScreen onNavigate={navigateTo} userType={userType} />;
      case 'club-info':
        return <ClubDetailInfo onNavigate={navigateTo} />;
      case 'club-menu':
        return <ClubDetailMenu onNavigate={navigateTo} />;
      case 'club-events':
        return <ClubDetailEvents onNavigate={navigateTo} />;
      case 'nutrition':
        return <NutritionArticle onNavigate={navigateTo} />;
      case 'profile':
        return <UserProfile onNavigate={navigateTo} userType={userType} />;
      case 'member-home':
        return <MemberHome onNavigate={navigateTo} />;
      case 'member-attendance':
        return <MemberAttendance onNavigate={navigateTo} />;
      case 'member-achievements':
        return <MemberAchievements onNavigate={navigateTo} />;
      case 'member-gamification':
        return <MemberGamification onNavigate={navigateTo} />;
      case 'host-dashboard':
        return <HostDashboard onNavigate={navigateTo} />;
      case 'host-members':
        return <HostMemberList onNavigate={navigateTo} />;
      case 'host-scan':
        return <HostScanQR onNavigate={navigateTo} />;
      case 'host-settings':
        return <HostClubSettings onNavigate={navigateTo} />;
      case 'host-registration':
        return <HostRegistration onNavigate={navigateTo} />;
      case 'host-registration-status':
        return <HostRegistrationStatus onNavigate={navigateTo} />;
      case 'host-register-member':
        return <HostRegisterMember onNavigate={navigateTo} />;
      case 'host-stats':
        return <HostDashboardStats onNavigate={navigateTo} />;
      case 'support-center':
        return <SupportCenter onNavigate={navigateTo} />;
      default:
        return <SplashScreen onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {renderScreen()}
    </div>
  );
}

export default App;