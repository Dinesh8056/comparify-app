import React, { useState } from 'react';
import { 
  Utensils, 
  Clock, 
  ExternalLink
} from 'lucide-react';
import { MOCK_FOOD_DISHES } from '../data/mockData';

export const FoodDeliveryCompare: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'veg' | 'non-veg'>('all');

  const filteredDishes = MOCK_FOOD_DISHES.filter((dish) => {
    if (filterType === 'veg') return dish.isVeg;
    if (filterType === 'non-veg') return !dish.isVeg;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-amber-500/10 border border-orange-500/20 rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-700 dark:text-orange-300 text-xs font-bold mb-2">
            <Utensils className="w-3.5 h-3.5" /> Swiggy vs Zomato Live Comparison
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Food Delivery Price Matcher
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-1">
            See the real final checkout bill after restaurant markup, packaging charges, ₹6 platform fees, and coupon discounts.
          </p>
        </div>

        {/* Veg / Non-Veg toggles */}
        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filterType === 'all'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            All Dishes
          </button>
          <button
            onClick={() => setFilterType('veg')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              filterType === 'veg'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Pure Veg
          </button>
          <button
            onClick={() => setFilterType('non-veg')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              filterType === 'non-veg'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-red-600'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-500"></span> Non-Veg
          </button>
        </div>
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredDishes.map((dish) => {
          const swiggyFinal = dish.swiggy.finalPrice;
          const zomatoFinal = dish.zomato.finalPrice;
          const diff = Math.abs(swiggyFinal - zomatoFinal);
          const isZomatoCheaper = zomatoFinal < swiggyFinal;
          const isSwiggyCheaper = swiggyFinal < zomatoFinal;
          const isTie = swiggyFinal === zomatoFinal;

          return (
            <div
              key={dish.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Dish Meta */}
              <div>
                <div className="flex gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={dish.image}
                      alt={dish.dishName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1.5 left-1.5 w-4 h-4 rounded bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                      <div className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500 dark:text-slate-400 truncate">
                        {dish.restaurantName}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-amber-500 font-semibold">
                        ★ {dish.rating}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug mt-0.5">
                      {dish.dishName}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {dish.cuisine}
                    </p>
                  </div>
                </div>

                {/* Savings Verdict Banner */}
                <div className="mt-4 p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold text-white ${
                      isZomatoCheaper ? 'bg-red-600' : isSwiggyCheaper ? 'bg-orange-500' : 'bg-slate-600'
                    }`}>
                      {isZomatoCheaper ? 'Z' : isSwiggyCheaper ? 'S' : '='}
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {isTie 
                        ? 'Equal final price on both apps' 
                        : isZomatoCheaper 
                        ? `Zomato is ₹${diff} cheaper after offers` 
                        : `Swiggy is ₹${diff} cheaper after offers`}
                    </span>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    Best Value Deal
                  </span>
                </div>

                {/* Side-by-Side Breakdown Cards */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {/* Swiggy Card */}
                  <div className={`p-3.5 rounded-2xl border transition-all ${
                    isSwiggyCheaper 
                      ? 'bg-orange-500/5 border-orange-500/40 shadow-sm' 
                      : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-orange-600 dark:text-orange-400">
                        <span>🍊 Swiggy</span>
                      </div>
                      <span className="text-[10px] text-slate-500 flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" /> {dish.swiggy.deliveryTime}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-slate-500 dark:text-slate-400">
                        <span>Dish Price:</span>
                        <span>₹{dish.swiggy.itemPrice}</span>
                      </div>
                      <div className="flex justify-between text-slate-500 dark:text-slate-400">
                        <span>Platform & Pack:</span>
                        <span>₹{dish.swiggy.platformFee + dish.swiggy.packagingFee}</span>
                      </div>
                      <div className="flex justify-between text-slate-500 dark:text-slate-400">
                        <span>Delivery:</span>
                        <span>₹{dish.swiggy.deliveryFee}</span>
                      </div>
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                        <span>Offer ({dish.swiggy.couponCode}):</span>
                        <span>-₹{dish.swiggy.couponDiscount}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700/60 flex justify-between items-baseline">
                      <span className="text-[11px] font-medium text-slate-400">Final Bill:</span>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white">
                        ₹{dish.swiggy.finalPrice}
                      </span>
                    </div>

                    <button 
                      onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent('Swiggy ' + dish.restaurantName + ' ' + dish.dishName)}`, '_blank')}
                      className="mt-3 w-full py-1.5 px-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Order on Swiggy</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Zomato Card */}
                  <div className={`p-3.5 rounded-2xl border transition-all ${
                    isZomatoCheaper 
                      ? 'bg-red-500/5 border-red-500/40 shadow-sm' 
                      : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5 font-bold text-xs text-red-600 dark:text-red-400">
                        <span>🍅 Zomato</span>
                      </div>
                      <span className="text-[10px] text-slate-500 flex items-center gap-0.5">
                        <Clock className="w-2.5 h-2.5" /> {dish.zomato.deliveryTime}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-slate-500 dark:text-slate-400">
                        <span>Dish Price:</span>
                        <span>₹{dish.zomato.itemPrice}</span>
                      </div>
                      <div className="flex justify-between text-slate-500 dark:text-slate-400">
                        <span>Platform & Pack:</span>
                        <span>₹{dish.zomato.platformFee + dish.zomato.packagingFee}</span>
                      </div>
                      <div className="flex justify-between text-slate-500 dark:text-slate-400">
                        <span>Delivery:</span>
                        <span>₹{dish.zomato.deliveryFee}</span>
                      </div>
                      <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-medium">
                        <span>Offer ({dish.zomato.couponCode}):</span>
                        <span>-₹{dish.zomato.couponDiscount}</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700/60 flex justify-between items-baseline">
                      <span className="text-[11px] font-medium text-slate-400">Final Bill:</span>
                      <span className="text-base font-extrabold text-slate-900 dark:text-white">
                        ₹{dish.zomato.finalPrice}
                      </span>
                    </div>

                    <button 
                      onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent('Zomato ' + dish.restaurantName + ' ' + dish.dishName)}`, '_blank')}
                      className="mt-3 w-full py-1.5 px-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Order on Zomato</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
