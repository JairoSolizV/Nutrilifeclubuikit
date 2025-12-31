import React, { useState } from 'react';
import { Screen, NavigationAction, UserType } from '../App';
import { ArrowLeft, ShoppingBag, Clock, CheckCircle, ChefHat, Search, Filter } from 'lucide-react';
import MemberBottomNav from './MemberBottomNav';

interface MemberOrdersListProps {
    onNavigate: (screen: NavigationAction, userType?: UserType) => void;
}

export default function MemberOrdersList({ onNavigate }: MemberOrdersListProps) {
    const [activeTab, setActiveTab] = useState<'active' | 'history'>('active');

    const orders = [
        {
            id: '#ORD-001',
            date: 'Hoy, 09:30',
            items: ['Batido Fresa Silvestre', 'Té Energizante Limón'],
            total: 40,
            status: 'preparing',
            statusText: 'Preparando'
        },
        {
            id: '#ORD-002',
            date: 'Ayer, 08:45',
            items: ['Batido Chocolate', 'Barra Proteína'],
            total: 37,
            status: 'completed',
            statusText: 'Completado'
        },
        {
            id: '#ORD-003',
            date: 'Hace 3 días',
            items: ['Aloe Vera Original'],
            total: 10,
            status: 'completed',
            statusText: 'Completado'
        }
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'preparing': return 'text-orange-500 bg-orange-50';
            case 'ready': return 'text-green-500 bg-green-50';
            case 'completed': return 'text-gray-500 bg-gray-100';
            default: return 'text-gray-500 bg-gray-100';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'preparing': return <ChefHat className="w-4 h-4" />;
            case 'ready': return <CheckCircle className="w-4 h-4" />;
            default: return <Clock className="w-4 h-4" />;
        }
    }

    const filteredOrders = activeTab === 'active'
        ? orders.filter(o => o.status === 'preparing' || o.status === 'ready')
        : orders;

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
                <h2 className="text-[#333333] font-semibold text-xl">Mis Pedidos</h2>
            </div>

            {/* Tabs */}
            <div className="bg-white px-6 pb-2 mb-2 flex gap-4">
                <button
                    onClick={() => setActiveTab('active')}
                    className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'active' ? 'border-[#7AC142] text-[#7AC142]' : 'border-transparent text-gray-500'}`}
                >
                    Activos
                </button>
                <button
                    onClick={() => setActiveTab('history')}
                    className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'history' ? 'border-[#7AC142] text-[#7AC142]' : 'border-transparent text-gray-500'}`}
                >
                    Historial
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4 pb-24">
                {/* CTA Create Order */}
                <button
                    onClick={() => onNavigate('member-order', 'member')}
                    className="w-full bg-[#7AC142] text-white p-4 rounded-xl shadow-lg flex items-center justify-center gap-2 mb-6 hover:bg-[#6BB032] transition-colors"
                >
                    <ShoppingBag className="w-5 h-5" />
                    <span className="font-bold">Nuevo Pedido</span>
                </button>

                {activeTab === 'active' && filteredOrders.length === 0 && (
                    <div className="text-center py-10 opacity-70">
                        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No tienes pedidos activos</p>
                    </div>
                )}

                <div className="space-y-4">
                    {filteredOrders.map((order) => (
                        <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <span className="text-xs font-mono text-gray-400 block mb-1">{order.id}</span>
                                    <p className="text-[#333333] font-medium text-sm">{order.date}</p>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getStatusColor(order.status)}`}>
                                    {getStatusIcon(order.status)}
                                    {order.statusText}
                                </div>
                            </div>

                            <div className="border-t border-gray-100 py-3 my-1">
                                {order.items.map((item, idx) => (
                                    <p key={idx} className="text-sm text-gray-600 mb-1">• {item}</p>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-2">
                                <span className="text-sm text-gray-500">Total</span>
                                <span className="text-lg font-bold text-[#333333]">Bs {order.total}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <MemberBottomNav activeScreen="orders" onNavigate={onNavigate} />
        </div>
    );
}
