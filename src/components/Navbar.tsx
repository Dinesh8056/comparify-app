import React from 'react';
import { 
  Search, 
  MapPin, 
  ShoppingBag, 
  Moon, 
  Sun, 
  Utensils, 
  Smartphone, 
  Layers,
  ChevronDown
} from 'lucide-react';
import type { CityLocation } from '../types';

interface NavbarProps {
  activeTab: 'groceries' | 'food' | 'electronics' | 'cart';
  setActiveTab: (tab: 'groceries' | 'food' | 'electronics' | 'cart') => void;
  selectedCity: CityLocation;
  onOpenLocationModal: () => void;
  cartCount: number;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedCity,
  onOpenLocationModal,
  cartCount,
  isDarkMode,
  onToggleTheme
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Logo & City Selector */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div 
              onClick={() => setActiveTab('groceries')}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Search className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">
                    Comparify
                  </span>
                  <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-gradient-to-r from-indigo-600 to-purple-600 text-white uppercase tracking-wider">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium hidden sm:block">
                  Compare Apps Before You Buy
                </span>
              </div>
            </div>

            {/* Location selector button */}
            <button
              onClick={onOpenLocationModal}
              className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-left transition-colors"
            >
              <MapPin className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 leading-tight font-medium">Deliver to</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1 truncate max-w-[110px] sm:max-w-[140px]">
                  {selectedCity.name} <ChevronDown className="w-3 h-3 text-slate-400" />
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('groceries')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'groceries'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>Groceries & Quick Commerce</span>
            </button>

            <button
              onClick={() => setActiveTab('food')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'food'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Utensils className="w-4 h-4 text-orange-500" />
              <span>Food Delivery</span>
              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-red-500 text-white">
                Swiggy vs Zomato
              </span>
            </button>

            <button
              onClick={() => setActiveTab('electronics')}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === 'electronics'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4 text-blue-500" />
              <span>Electronics</span>
            </button>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5">
            {/* Cart Optimizer button */}
            <button
              onClick={() => setActiveTab('cart')}
              className={`relative px-3 sm:px-4 py-2 rounded-2xl flex items-center gap-2 font-bold text-xs sm:text-sm transition-all ${
                activeTab === 'cart'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Basket Optimizer</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[11px] font-black flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              title="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-slate-800 px-3 py-2 flex items-center justify-around">
        <button
          onClick={() => setActiveTab('groceries')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-xs font-semibold ${
            activeTab === 'groceries' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'
          }`}
        >
          <Layers className="w-5 h-5" />
          <span>Groceries</span>
        </button>

        <button
          onClick={() => setActiveTab('food')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-xs font-semibold ${
            activeTab === 'food' ? 'text-orange-500' : 'text-slate-500'
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span>Food</span>
        </button>

        <button
          onClick={() => setActiveTab('electronics')}
          className={`flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-xs font-semibold ${
            activeTab === 'electronics' ? 'text-blue-500' : 'text-slate-500'
          }`}
        >
          <Smartphone className="w-5 h-5" />
          <span>Tech</span>
        </button>

        <button
          onClick={() => setActiveTab('cart')}
          className={`relative flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-xs font-semibold ${
            activeTab === 'cart' ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500'
          }`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span>Basket</span>
          {cartCount > 0 && (
            <span className="absolute top-0 right-2 w-4 h-4 rounded-full bg-emerald-500 text-white text-[9px] font-black flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
