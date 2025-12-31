import React, { useState } from 'react';
import { Screen, NavigationAction } from '../App';
import { ArrowLeft, Clock, CheckCircle, ChefHat, Search, Filter, ShoppingBag, Bell } from 'lucide-react';
import HostBottomNav from './HostBottomNav';

interface HostOrdersListProps {
    onNavigate: (screen: NavigationAction) => void;
}

export default function HostOrdersList({ onNavigate }: HostOrdersListProps) {
    const [filterStatus, setFilterStatus] = useState<'all' | 'pending' | 'preparing' | 'ready'>('all');

    // Mock Orders Data
    const [orders, setOrders] = useState([
        {
            id: 'ORD-001',
            customer: 'María González',
            items: ['1x Batido Fresa', '1x Té Limón'],
            total: 40,
            status: 'preparing',
            time: '09:30',
            isVip: true
        },
        {
            id: 'ORD-004',
            customer: 'Carlos Méndez',
            items: ['2x Barra Proteína'],
            total: 24,
            status: 'pending',
            time: '09:45',
            isVip: false
        },
        {
            id: 'ORD-005',
            customer: 'Ana Martinez',
            items: ['1x Aloe Vera'],
            total: 10,
            status: 'ready',
            time: '09:15',
            isVip: false
        }
    ]);

    const updateStatus = (id: string, newStatus: string) => {
        setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o));
    };

    const filteredOrders = filterStatus === 'all'
        ? orders
        : orders.filter(o => o.status === filterStatus);

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'pending': return <span className="px-2 py-1 bg-red-100 text-red-600 rounded-lg text-xs font-bold">Pendiente</span>;
            case 'preparing': return <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-lg text-xs font-bold">Preparando</span>;
            case 'ready': return <span className="px-2 py-1 bg-green-100 text-green-600 rounded-lg text-xs font-bold">Listo</span>;
            default: return null;
        }
    }

    return (
        <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
            {/* Status Bar */}
            <div className="w-full flex justify-between items-center px-6 py-3 bg-white">
                <span className="text-sm">9:41</span>
                <div className="flex gap-1">
                    <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
                    <div className="w-4 h-3 bg-gray-400 rounded-sm"></div>
                </div>
            </div>

            {/* Header */}
            <div className="bg-white px-6 py-4 shadow-sm flex items-center justify-between sticky top-0 z-30">
                <div className="flex items-center gap-3">
                    <button onClick={() => onNavigate('host-dashboard')} className="text-[#333333]">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h2 className="text-[#333333] font-semibold text-lg">Pedidos Recibidos</h2>
                </div>
                <div className="relative">
                    <Bell className="w-6 h-6 text-gray-600" />
                    <span className="absolute -top-1 -right-1 bg-red-500 w-3 h-3 rounded-full"></span>
                </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 p-4 overflow-x-auto">
                <button onClick={() => setFilterStatus('all')} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filterStatus === 'all' ? 'bg-[#333333] text-white' : 'bg-white text-gray-600 border'}`}>
                    Todos
                </button>
                <button onClick={() => setFilterStatus('pending')} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filterStatus === 'pending' ? 'bg-red-500 text-white' : 'bg-white text-gray-600 border'}`}>
                    Pendientes
                </button>
                <button onClick={() => setFilterStatus('preparing')} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filterStatus === 'preparing' ? 'bg-orange-500 text-white' : 'bg-white text-gray-600 border'}`}>
                    Preparando
                </button>
                <button onClick={() => setFilterStatus('ready')} className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${filterStatus === 'ready' ? 'bg-green-500 text-white' : 'bg-white text-gray-600 border'}`}>
                    Listos
                </button>
            </div>

            {/* Orders List */}
            <div className="flex-1 overflow-y-auto px-4 pb-6">
                <div className="space-y-4">
                    {filteredOrders.map(order => (
                        <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-[#7AC142]">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-[#333333] text-lg">{order.id}</h3>
                                        {order.isVip && <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 rounded-full font-bold">VIP</span>}
                                    </div>
                                    <p className="text-gray-500 text-sm">{order.customer} • {order.time}</p>
                                </div>
                                {getStatusBadge(order.status)}
                            </div>

                            <div className="bg-gray-50 p-3 rounded-xl mb-3">
                                {order.items.map((item, idx) => (
                                    <p key={idx} className="text-sm text-gray-700 font-medium">• {item}</p>
                                ))}
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                                <p className="font-bold text-[#333333]">Total: Bs {order.total}</p>

                                <div className="flex gap-2">
                                    {/* State Transition Buttons */}
                                    {order.status === 'pending' && (
                                        <button onClick={() => updateStatus(order.id, 'preparing')} className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                                            Empezar a Preparar
                                        </button>
                                    )}
                                    {order.status === 'preparing' && (
                                        <button onClick={() => updateStatus(order.id, 'ready')} className="bg-[#7AC142] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6BB032] transition-colors">
                                            Marcar Listo
                                        </button>
                                    )}
                                    {order.status === 'ready' && (
                                        <button onClick={() => updateStatus(order.id, 'completed')} className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors">
                                            Entregado
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredOrders.length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                            <ShoppingBag className="w-16 h-16 mx-auto mb-3 opacity-20" />
                            <p>No hay pedidos en esta categoría</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
