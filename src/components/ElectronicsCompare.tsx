import React from 'react';
import { 
  Zap, 
  CreditCard, 
  ExternalLink, 
  Clock 
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../data/mockData';
import { PLATFORMS } from '../data/platforms';

export const ElectronicsCompare: React.FC = () => {
  const electronics = MOCK_PRODUCTS.filter(p => p.category === 'electronics');

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="bg-gradient-to-r from-blue-500/10 via-amber-500/10 to-indigo-500/10 border border-blue-500/20 rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-bold mb-2">
            <Zap className="w-3.5 h-3.5" /> 10-Min Quick Commerce vs E-Commerce Giants
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Electronics & Gadgets Matcher
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-1">
            Compare Amazon Prime & Flipkart deep discounts against Blinkit & Zepto 10-minute instant delivery for smartphones, accessories, and audio.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3.5 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 shadow-sm">
            <CreditCard className="w-4 h-4 text-indigo-500" />
            <span>Bank Discounts Included</span>
          </div>
        </div>
      </div>

      {/* Grid of Electronics Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {electronics.map((item) => {
          const sorted = [...item.prices].sort((a, b) => {
            const priceA = a.price - (a.couponDiscount || 0);
            const priceB = b.price - (b.couponDiscount || 0);
            return priceA - priceB;
          });
          const lowest = sorted[0];

          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {item.brand}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-400 font-medium">
                        {item.packageSize}
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg leading-snug mt-1 line-clamp-2">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Platform comparisons */}
                <div className="mt-5 space-y-2.5">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Platform Offer Comparison
                  </div>

                  {item.prices.map((p) => {
                    const platform = PLATFORMS[p.platformId];
                    if (!platform) return null;

                    const effectivePrice = p.price - (p.couponDiscount || 0);
                    const isLowest = effectivePrice === (lowest.price - (lowest.couponDiscount || 0));
                    const isQuickCommerce = p.platformId === 'blinkit' || p.platformId === 'zepto';

                    return (
                      <div
                        key={p.platformId}
                        className={`p-3 rounded-2xl border transition-all flex items-center justify-between ${
                          isLowest
                            ? 'bg-emerald-500/5 border-emerald-500/40 shadow-xs'
                            : 'bg-slate-50/70 dark:bg-slate-850/40 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-base shadow-sm">
                            {platform.logo}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900 dark:text-white text-sm">
                                {platform.name}
                              </span>
                              {isQuickCommerce && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500 text-white flex items-center gap-0.5">
                                  <Zap className="w-2.5 h-2.5" /> 10m Delivery
                                </span>
                              )}
                              {isLowest && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-600 text-white">
                                  Lowest Price
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                              <span className="flex items-center gap-0.5 font-medium text-slate-700 dark:text-slate-300">
                                <Clock className="w-3 h-3 text-slate-400" />
                                {p.deliveryTime}
                              </span>
                              {p.couponCode && (
                                <>
                                  <span>•</span>
                                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                                    ₹{p.couponDiscount} Bank Off ({p.couponCode})
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                              ₹{effectivePrice.toLocaleString('en-IN')}
                            </div>
                            {p.mrp > effectivePrice && (
                              <div className="text-xs text-slate-400 line-through">
                                ₹{p.mrp.toLocaleString('en-IN')}
                              </div>
                            )}
                          </div>

                          <button
                            onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(platform.name + ' ' + item.name)}`, '_blank')}
                            className="p-2 rounded-xl bg-slate-200/80 dark:bg-slate-700 hover:bg-indigo-600 hover:text-white text-slate-700 dark:text-slate-200 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
