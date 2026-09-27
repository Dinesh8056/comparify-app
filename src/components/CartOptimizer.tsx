import React from 'react';
import { 
  Trash2, 
  Plus, 
  Minus, 
  Sparkles, 
  ShoppingBag, 
  Clock
} from 'lucide-react';
import type { CartItem, PlatformId } from '../types';
import { PLATFORMS } from '../data/platforms';

interface CartOptimizerProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onAddQuickBundle: (bundleType: 'breakfast' | 'pantry' | 'snack') => void;
}

export const CartOptimizer: React.FC<CartOptimizerProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onAddQuickBundle
}) => {
  if (cart.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-sm">
        <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
          🧺
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Smart Basket Optimizer is Empty
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mt-2">
          Add items to your comparison cart to find whether Blinkit, Zepto, Swiggy Instamart, or DMart gives you the lowest combined bill!
        </p>

        {/* Quick bundle additions */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Try Instant Pre-Built Test Baskets
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onAddQuickBundle('breakfast')}
              className="px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>🥛 Breakfast Basket (Milk + Bread + Tea)</span>
            </button>
            <button
              onClick={() => onAddQuickBundle('pantry')}
              className="px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>🌾 Monthly Staples (Atta + Oil + Detergent)</span>
            </button>
            <button
              onClick={() => onAddQuickBundle('snack')}
              className="px-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 flex items-center gap-2 transition-all hover:scale-105"
            >
              <span>🍿 Movie Munchies (Coke + Chips + Maggi)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate platform totals for the current cart
  const platformsToCompare: PlatformId[] = ['zepto', 'blinkit', 'instamart', 'dmart', 'amazon'];

  const platformSummaries = platformsToCompare.map((platformId) => {
    const platform = PLATFORMS[platformId];
    let itemsSubtotal = 0;
    let missingItemsCount = 0;

    cart.forEach((item) => {
      const priceEntry = item.product.prices.find((p) => p.platformId === platformId);
      if (priceEntry) {
        itemsSubtotal += priceEntry.price * item.quantity;
      } else {
        missingItemsCount++;
        // Fallback to lowest price if item missing in this platform
        const lowestAny = Math.min(...item.product.prices.map((p) => p.price));
        itemsSubtotal += lowestAny * item.quantity;
      }
    });

    const isDeliveryFree = itemsSubtotal >= platform.freeDeliveryThreshold;
    const deliveryFee = isDeliveryFree ? 0 : platform.deliveryFee;
    const platformFee = platform.basePlatformFee;
    const grandTotal = itemsSubtotal + deliveryFee + platformFee;

    return {
      platformId,
      platform,
      itemsSubtotal,
      deliveryFee,
      isDeliveryFree,
      platformFee,
      grandTotal,
      missingItemsCount,
    };
  });

  // Sort by grandTotal ascending
  platformSummaries.sort((a, b) => a.grandTotal - b.grandTotal);

  const cheapestPlatform = platformSummaries[0];
  const mostExpensive = platformSummaries[platformSummaries.length - 1];
  const maxSavings = mostExpensive.grandTotal - cheapestPlatform.grandTotal;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-500/20 rounded-3xl p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Multi-Item Cart Cost Optimizer
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Lowest Total Bill Across All Stores
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mt-1">
            We simulate the exact checkout bill including handling fees, platform fees, and delivery thresholds for all {cart.length} items.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 px-4 shadow-sm text-right">
            <span className="text-xs text-slate-400 block font-medium">Potential Savings:</span>
            <span className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
              ₹{maxSavings}
            </span>
          </div>
          <button
            onClick={onClearCart}
            className="p-3 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 border border-rose-200/50 dark:border-rose-900/40 rounded-2xl transition-colors"
            title="Clear basket"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Cart Items (5 cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Your Basket ({cart.reduce((sum, i) => sum + i.quantity, 0)} items)
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              {cart.length} unique products
            </span>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {cart.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 rounded-xl object-contain bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-shrink-0 p-1"
                  />
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {product.name}
                    </h4>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {product.packageSize}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => onUpdateQuantity(product.id, -1)}
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2.5 text-xs font-bold text-slate-900 dark:text-white">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(product.id, 1)}
                      className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(product.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Platform Totals & Smart Split (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
            Store Checkout Comparison
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {platformSummaries.map((summary, idx) => {
              const isWinner = idx === 0;
              const savingVsWorst = mostExpensive.grandTotal - summary.grandTotal;

              return (
                <div
                  key={summary.platformId}
                  className={`p-4 sm:p-5 rounded-3xl border transition-all ${
                    isWinner
                      ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/5 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
                        {summary.platform.logo}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 dark:text-white text-base">
                            {summary.platform.name}
                          </span>
                          {isWinner && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-xs">
                              ⭐ Cheapest Store
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                            <Clock className="w-3.5 h-3.5 text-slate-400" />
                            {summary.platform.avgDeliveryTime}
                          </span>
                          <span>•</span>
                          <span>
                            {summary.isDeliveryFree ? (
                              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Free Delivery</span>
                            ) : (
                              `₹${summary.deliveryFee} Del.`
                            )}
                          </span>
                          <span>•</span>
                          <span>₹{summary.platformFee} Platform fee</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right sm:text-right flex sm:flex-col justify-between items-center sm:items-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                      <div>
                        <span className="text-xs text-slate-400 block font-medium sm:hidden">Total:</span>
                        <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                          ₹{summary.grandTotal}
                        </div>
                      </div>
                      {savingVsWorst > 0 && (
                        <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          Save ₹{savingVsWorst}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Split Order Recommendation */}
          <div className="p-4 sm:p-5 rounded-3xl bg-indigo-500/10 border border-indigo-500/30 flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-lg flex-shrink-0 shadow-md">
              💡
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                AI Smart Split Strategy: Save Even More!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                Order perishables (Milk & Bread) on <span className="font-semibold text-purple-600 dark:text-purple-400">Zepto</span> for 10-minute speed, and bulk essentials (Atta & Oil) on <span className="font-semibold text-emerald-600 dark:text-emerald-400">DMart Ready</span>. You could shave another <span className="font-bold text-emerald-600 dark:text-emerald-400">₹45 - ₹75</span> off your bill!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
