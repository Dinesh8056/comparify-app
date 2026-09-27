import React, { useState } from 'react';
import { 
  Clock, 
  TrendingDown, 
  ExternalLink, 
  Plus, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Zap
} from 'lucide-react';
import type { Product, PlatformPrice } from '../types';
import { PLATFORMS } from '../data/platforms';

interface ProductCardProps {
  product: Product;
  onSelectBreakdown: (product: Product, price: PlatformPrice) => void;
  onAddToCart: (product: Product) => void;
  isInCart: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectBreakdown,
  onAddToCart,
  isInCart
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Sort prices by final price ascending
  const sortedPrices = [...product.prices].sort((a, b) => {
    const totalA = a.price + a.deliveryFee + a.platformFee - (a.couponDiscount || 0);
    const totalB = b.price + b.deliveryFee + b.platformFee - (b.couponDiscount || 0);
    return totalA - totalB;
  });

  const cheapest = sortedPrices[0];
  const highestPrice = Math.max(...product.prices.map(p => p.price));
  const maxSavings = highestPrice - cheapest.price;
  const fastest = [...product.prices].sort((a, b) => {
    const timeA = parseInt(a.deliveryTime) || 999;
    const timeB = parseInt(b.deliveryTime) || 999;
    return timeA - timeB;
  })[0];

  const displayedPrices = isExpanded ? sortedPrices : sortedPrices.slice(0, 3);

  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Top Banner / Savings Tag */}
      <div className="px-4 py-2 bg-slate-50 dark:bg-slate-850/80 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
          <TrendingDown className="w-3.5 h-3.5" />
          <span>Save up to ₹{maxSavings > 0 ? maxSavings : 15} today</span>
        </div>
        <span className="text-slate-400 text-[11px] font-medium">
          Compared in {product.prices.length} stores
        </span>
      </div>

      {/* Main product info */}
      <div className="p-4 sm:p-5 flex gap-4">
        {/* Product Image */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800 flex-shrink-0 border border-slate-100 dark:border-slate-700/60 p-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {product.trending && (
            <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md bg-amber-500 text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-0.5 shadow-sm">
              <Zap className="w-2.5 h-2.5 fill-current" /> Hot
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                {product.brand}
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full font-medium">
                {product.packageSize}
              </span>
            </div>

            <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-snug line-clamp-2">
              {product.name}
            </h3>
          </div>

          {/* Quick Price highlight */}
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400">Lowest:</span>
            <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              ₹{cheapest.price}
            </span>
            <span className="text-xs text-slate-400 line-through">
              ₹{cheapest.mrp}
            </span>
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              {cheapest.discountPercent}% OFF
            </span>
          </div>
        </div>
      </div>

      {/* Comparison rows */}
      <div className="px-4 pb-3 flex-1 flex flex-col justify-end">
        <div className="border-t border-slate-100 dark:border-slate-800/80 pt-3 space-y-2">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Store Availability & Price</span>
            <span>Est. Final</span>
          </div>

          {displayedPrices.map((item) => {
            const platform = PLATFORMS[item.platformId];
            if (!platform) return null;

            const isCheapestPlatform = item.platformId === cheapest.platformId;
            const isFastestPlatform = item.platformId === fastest.platformId;
            const effectiveTotal = item.price + item.deliveryFee + item.platformFee - (item.couponDiscount || 0);

            return (
              <div
                key={item.platformId}
                onClick={() => onSelectBreakdown(product, item)}
                className={`group/row p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isCheapestPlatform
                    ? 'bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-500/50'
                    : 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {/* Platform Icon & Name */}
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                    {platform.logo}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                        {platform.shortName}
                      </span>
                      {isCheapestPlatform && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-600 text-white leading-none">
                          Cheapest
                        </span>
                      )}
                      {isFastestPlatform && !isCheapestPlatform && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-white leading-none flex items-center gap-0.5">
                          <Zap className="w-2 h-2" /> Fastest
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-0.5 text-slate-600 dark:text-slate-300 font-medium">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {item.deliveryTime}
                      </span>
                      <span>•</span>
                      <span className="text-[10px]">
                        {item.deliveryFee === 0 ? 'Free Del.' : `₹${item.deliveryFee} Del.`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  <div className="text-right">
                    <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                      ₹{item.price}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium">
                      Total: ₹{effectiveTotal}
                    </div>
                  </div>

                  <div className="w-7 h-7 rounded-lg bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center group-hover/row:bg-indigo-600 group-hover/row:text-white transition-colors">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View more stores toggle */}
        {sortedPrices.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-2.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 flex items-center justify-center gap-1 transition-colors"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                Compare {sortedPrices.length - 3} more stores <ChevronDown className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Bottom Action Footer */}
      <div className="p-3 bg-slate-50/80 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
        <button
          onClick={() => onAddToCart(product)}
          className={`flex-1 py-2 px-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all ${
            isInCart
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-indigo-600 dark:hover:bg-indigo-500 dark:hover:text-white shadow-sm'
          }`}
        >
          {isInCart ? (
            <>
              <Check className="w-4 h-4" /> Added to Compare Basket
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" /> Add to Basket Optimizer
            </>
          )}
        </button>
      </div>
    </div>
  );
};
