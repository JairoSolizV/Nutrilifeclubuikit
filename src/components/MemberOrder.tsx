import React, { useState } from 'react';
import { Screen, NavigationAction, UserType } from '../App';
import { ArrowLeft, ShoppingBag, Plus, Minus, Coffee, Zap, Droplet, Star } from 'lucide-react';
import MemberBottomNav from './MemberBottomNav';

interface MemberOrderProps {
    onNavigate: (screen: NavigationAction, userType?: UserType) => void;
}

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'shake' | 'tea' | 'aloe' | 'snack';
    image: string;
}

const MENU_ITEMS: MenuItem[] = [
    {
        id: '1',
        name: 'Batido Fresa Silvestre',
        description: 'Delicioso batido proteico sabor fresa.',
        price: 25,
        category: 'shake',
        image: 'https://images.unsplash.com/photo-1553530979-7ee52a2670c4?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '2',
        name: 'Batido Chocolate Deluxe',
        description: 'Sabor intenso a chocolate, bajo en calorías.',
        price: 25,
        category: 'shake',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '3',
        name: 'Té Energizante Limón',
        description: 'Energía natural para tu día.',
        price: 15,
        category: 'tea',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '4',
        name: 'Aloe Vera Original',
        description: 'Refrescante y digestivo.',
        price: 10,
        category: 'aloe',
        image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=200'
    },
    {
        id: '5',
        name: 'Barra de Proteína',
        description: 'Snack saludable para media tarde.',
        price: 12,
        category: 'snack',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=200'
    }
];

export default function MemberOrder({ onNavigate }: MemberOrderProps) {
    const [cart, setCart] = useState<{ [key: string]: number }>({});
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [showConfirmation, setShowConfirmation] = useState(false);

    const addToCart = (id: string) => {
        setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const removeFromCart = (id: string) => {
        setCart(prev => {
            const newState = { ...prev };
            if (newState[id] > 1) {
                newState[id]--;
            } else {
                delete newState[id];
            }
            return newState;
        });
    };

    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    const totalPrice = Object.entries(cart).reduce((total, [id, qty]) => {
        const item = MENU_ITEMS.find(i => i.id === id);
        return total + (item ? item.price * qty : 0);
    }, 0);

    const filteredItems = activeCategory === 'all'
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === activeCategory);

    const handlePlaceOrder = () => {
        setShowConfirmation(true);
        // Mimic API call
        setTimeout(() => {
            setShowConfirmation(false);
            setCart({});
            onNavigate('member-home', 'member');
        }, 2000);
    };

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
                    <button onClick={() => onNavigate('BACK', 'member')} className="text-[#333333]">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <h2 className="text-[#333333] font-semibold">Realizar Pedido</h2>
                </div>
                <div className="relative">
                    <ShoppingBag className="w-6 h-6 text-[#7AC142]" />
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                            {totalItems}
                        </span>
                    )}
                </div>
            </div>

            {/* Categories */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 overflow-x-auto">
                <div className="flex gap-3">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === 'all' ? 'bg-[#7AC142] text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        Todo
                    </button>
                    <button
                        onClick={() => setActiveCategory('shake')}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 ${activeCategory === 'shake' ? 'bg-[#7AC142] text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        <Zap className="w-4 h-4" /> Batidos
                    </button>
                    <button
                        onClick={() => setActiveCategory('tea')}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 ${activeCategory === 'tea' ? 'bg-[#7AC142] text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        <Coffee className="w-4 h-4" /> Tés
                    </button>
                    <button
                        onClick={() => setActiveCategory('aloe')}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex items-center gap-2 ${activeCategory === 'aloe' ? 'bg-[#7AC142] text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                        <Droplet className="w-4 h-4" /> Aloe
                    </button>
                </div>
            </div>

            {/* Menu Grid */}
            <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 gap-4">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-2xl p-4 shadow-sm flex gap-4">
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl bg-gray-100" />
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-medium text-[#333333]">{item.name}</h3>
                                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                                </div>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="font-semibold text-[#7AC142]">Bs {item.price}</span>

                                    {cart[item.id] ? (
                                        <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                            <button onClick={() => removeFromCart(item.id)} className="w-6 h-6 bg-white rounded-md shadow-sm text-gray-600 flex items-center justify-center">
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="text-sm font-medium w-4 text-center">{cart[item.id]}</span>
                                            <button onClick={() => addToCart(item.id)} className="w-6 h-6 bg-[#7AC142] rounded-md shadow-sm text-white flex items-center justify-center">
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => addToCart(item.id)}
                                            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-[#7AC142] hover:bg-[#7AC142] hover:text-white transition-colors"
                                        >
                                            <Plus className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Cart Summary & CTA */}
            {totalItems > 0 && (
                <div className="bg-white border-t border-gray-100 p-6 sticky bottom-[80px]">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-gray-500 text-sm">Total a pagar</p>
                            <h3 className="text-2xl font-bold text-[#333333]">Bs {totalPrice}</h3>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500 text-xs">Puntos</p>
                            <p className="text-[#7AC142] font-semibold">+{Math.floor(totalPrice / 2)} pts</p>
                        </div>
                    </div>
                    <button
                        onClick={handlePlaceOrder}
                        className="w-full bg-[#7AC142] text-white py-4 rounded-full shadow-lg font-bold hover:bg-[#6BB032] transition-colors flex items-center justify-center gap-2"
                    >
                        Confirmar Pedido ({totalItems})
                    </button>
                </div>
            )}

            {/* Navigation */}
            {!totalItems && <MemberBottomNav activeScreen="home" onNavigate={onNavigate} />}

            {/* Success Modal */}
            {showConfirmation && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full animate-in zoom-in duration-300">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="w-8 h-8 text-[#7AC142] fill-[#7AC142]" />
                        </div>
                        <h3 className="text-xl font-bold text-[#333333] mb-2">¡Pedido Enviado!</h3>
                        <p className="text-gray-500 text-sm">
                            Tu anfitrión ya recibió tu pedido.
                            Acércate a la barra en unos minutos.
                        </p>
                        <div className="mt-4 py-2 px-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                            Total puntos ganados: <span className="text-[#7AC142] font-bold">+{Math.floor(totalPrice / 2)}</span>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
