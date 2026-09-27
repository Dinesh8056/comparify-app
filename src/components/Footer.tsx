import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-xs">
                C
              </div>
              <span className="font-black text-xl text-slate-900 dark:text-white">
                Comparify Pro
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              India's transparent multi-app comparison platform. We compare real-time product prices, platform handling fees, surge charges, and delivery fees across Blinkit, Zepto, Swiggy, Zomato, DMart, Amazon, and Flipkart.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent & Unbiased Price Comparison</span>
            </div>
          </div>

          {/* Supported Apps */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Supported Platforms
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <li>⚡ Blinkit (10-min groceries)</li>
              <li>🟣 Zepto (10-min groceries & cafe)</li>
              <li>🍊 Swiggy & Instamart</li>
              <li>🍅 Zomato Food Delivery</li>
              <li>🛒 DMart Ready Supermarket</li>
              <li>📦 Amazon India & Fresh</li>
              <li>🛍️ Flipkart & Minutes</li>
            </ul>
          </div>

          {/* Quick Metrics */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Community Savings
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[11px] text-slate-400 font-medium">Avg. Household Monthly Savings</div>
                <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">₹2,840 / mo</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="text-[11px] text-slate-400 font-medium">Daily Tracked Catalogs</div>
                <div className="text-lg font-black text-slate-900 dark:text-white">150,000+ Items</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Comparify. All brand logos, trademarks and names belong to their respective owners (Blinkit, Zepto, Bundl Technologies / Swiggy, Zomato Ltd, Avenue Supermarts / DMart, Amazon, Flipkart).
          </p>
          <div className="flex items-center gap-1 shrink-0">
            <span>Built with precision for smart shoppers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
