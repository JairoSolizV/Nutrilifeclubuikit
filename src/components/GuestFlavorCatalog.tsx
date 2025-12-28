import React from 'react';
import { Screen, NavigationAction } from '../App';
import { ArrowLeft, Search, IceCream, Filter } from 'lucide-react';

interface GuestFlavorCatalogProps {
    onNavigate: (screen: NavigationAction) => void;
}

export default function GuestFlavorCatalog({ onNavigate }: GuestFlavorCatalogProps) {
    const flavors = [
        { name: 'Chocolate Avellanas', color: 'bg-amber-100 text-amber-800' },
        { name: 'Fresa', color: 'bg-pink-100 text-pink-800' },
        { name: 'Vainilla', color: 'bg-yellow-50 text-yellow-800' },
        { name: 'Cookies & Cream', color: 'bg-gray-100 text-gray-800' },
        { name: 'Choco Menta', color: 'bg-green-100 text-green-800' },
        { name: 'Dulce de Leche', color: 'bg-orange-100 text-orange-800' },
    ];

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
                <h2 className="text-[#333333] font-semibold">Catálogo de Sabores</h2>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                {/* Search */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar sabor..."
                        className="w-full pl-12 pr-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7AC142] shadow-sm"
                    />
                </div>

                {/* Categories / Filters */}
                <div className="flex gap-3 overflow-x-auto pb-4 mb-2">
                    <button className="px-4 py-2 bg-[#7AC142] text-white rounded-full text-sm font-medium whitespace-nowrap">
                        Todos
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200">
                        Batidos
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200">
                        Té
                    </button>
                    <button className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200">
                        Proteína
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {flavors.map((flavor, index) => (
                        <div key={index} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className={`w-full aspect-square rounded-xl mb-3 flex items-center justify-center ${flavor.color}`}>
                                <IceCream className="w-10 h-10" />
                            </div>
                            <h3 className="font-medium text-gray-800 text-sm mb-1">{flavor.name}</h3>
                            <p className="text-xs text-gray-500">Disponible en batido</p>
                        </div>
                    ))}
                    {flavors.map((flavor, index) => (
                        <div key={`dup-${index}`} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className={`w-full aspect-square rounded-xl mb-3 flex items-center justify-center ${flavor.color}`}>
                                <IceCream className="w-10 h-10" />
                            </div>
                            <h3 className="font-medium text-gray-800 text-sm mb-1">{flavor.name}</h3>
                            <p className="text-xs text-gray-500">Disponible en batido</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
