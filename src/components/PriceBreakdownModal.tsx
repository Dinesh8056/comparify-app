import React from 'react';
import { X, ExternalLink, Clock, Info, CheckCircle2 } from 'lucide-react';
import type { PlatformPrice, Product } from '../types';
import { PLATFORMS } from '../data/platforms';

interface PriceBreakdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
  priceEntry: PlatformPrice | null;
}

export const PriceBreakdownModal: React.FC<PriceBreakdownModalProps> = ({
  isOpen,
  onClose,
  product,
  priceEntry
}) => {
  if (!isOpen || !priceEntry) return null;

  const platform = PLATFORMS[priceEntry.platformId];
  if (!platform) return null;

  const itemPrice = priceEntry.price;
  const deliveryFee = priceEntry.deliveryFee;
  const platformFee = priceEntry.platformFee;
  const discountFromMrp = priceEntry.mrp - itemPrice;
  const couponDiscount = priceEntry.couponDiscount || 0;
  const totalBill = itemPrice + deliveryFee + platformFee - couponDiscount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl shadow-inner">
              {platform.logo}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
                {platform.name}
                {priceEntry.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {priceEntry.badge}
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Transparent Checkout Fee Breakdown
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product snippet */}
        <div className="p-4 bg-slate-50 dark:bg-slate-850/60 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3.5">
          <img
            src={product.image}
            alt={product.name}
            className="w-12 h-12 object-cover rounded-xl border border-slate-200 dark:border-slate-700 bg-white"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm truncate">
              {product.name}
            </h4>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span>{product.packageSize}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <Clock className="w-3 h-3" /> {priceEntry.deliveryTime}
              </span>
            </div>
          </div>
        </div>

        {/* Bill Breakdown */}
        <div className="p-5 space-y-3">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Detailed Price Split
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 dark:text-slate-300">Maximum Retail Price (MRP)</span>
            <span className="text-slate-400 line-through">₹{priceEntry.mrp}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              Platform Listed Price
              {discountFromMrp > 0 && (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded">
                  {priceEntry.discountPercent}% off
                </span>
              )}
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">₹{itemPrice}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
              <span>Delivery Fee</span>
              <span className="text-slate-400">
                <Info className="w-3.5 h-3.5" />
              </span>
            </div>
            <span className={deliveryFee === 0 ? 'text-emerald-600 font-semibold' : 'text-slate-900 dark:text-white'}>
              {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
              <span>Handling & Platform Fee</span>
              <span className="text-[10px] text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                Standard
              </span>
            </div>
            <span className="text-slate-900 dark:text-white">₹{platformFee}</span>
          </div>

          {couponDiscount > 0 && (
            <div className="flex justify-between items-center text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-800/40">
              <span className="flex items-center gap-1.5 font-medium text-xs">
                <CheckCircle2 className="w-4 h-4" />
                Coupon Applied ({priceEntry.couponCode})
              </span>
              <span className="font-bold">-₹{couponDiscount}</span>
            </div>
          )}

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <div>
              <div className="text-xs text-slate-400">Total Estimated Out-of-Pocket</div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">
                ₹{totalBill}
              </div>
            </div>
            <div className="text-right">
              {discountFromMrp > 0 && (
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Total Saved: ₹{discountFromMrp + couponDiscount}
                </div>
              )}
              <div className="text-[11px] text-slate-400">Includes all GST & taxes</div>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex gap-3">
          <button
            onClick={() => {
              window.open(`https://www.google.com/search?q=${encodeURIComponent(platform.name + ' ' + product.name)}`, '_blank');
            }}
            className="flex-1 py-3 px-4 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all hover:brightness-110 active:scale-95"
            style={{ backgroundColor: platform.accentHex }}
          >
            <span>Order on {platform.name}</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
