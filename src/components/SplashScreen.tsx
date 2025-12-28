import React from 'react';
import { Screen } from '../App';

interface SplashScreenProps {
  onNavigate: (screen: Screen) => void;
}

export default function SplashScreen({ onNavigate }: SplashScreenProps) {
  return (
    <div className="h-screen flex flex-col items-center justify-between px-8 py-12 bg-gradient-to-b from-white via-green-50 to-green-100">
      {/* Status Bar */}
      <div className="w-full flex justify-between items-center">
        <span className="text-sm">9:41</span>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
          <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Center Logo */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Logo SVG - Leaf and Shake Glass */}
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shake Glass */}
          <path
            d="M45 40 L45 95 C45 100 47 105 52 105 L68 105 C73 105 75 100 75 95 L75 40 Z"
            fill="#7AC142"
            opacity="0.9"
          />
          <ellipse cx="60" cy="40" rx="15" ry="8" fill="#7AC142" />
          <rect x="55" y="28" width="10" height="15" fill="#7AC142" opacity="0.6" />
          
          {/* Leaf */}
          <path
            d="M70 20 Q85 20 90 35 Q85 50 70 50 Q75 35 70 20 Z"
            fill="#7AC142"
          />
          <path
            d="M70 20 L85 40"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            opacity="0.7"
          />
        </svg>
        
        <h1 className="mt-6 text-[#7AC142] text-center">NutriLife Club</h1>
      </div>

      {/* Bottom Button */}
      <button
        onClick={() => onNavigate('screen-selector')}
        className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg hover:bg-[#6BB032] transition-colors"
      >
        Comenzar
      </button>
    </div>
  );
}