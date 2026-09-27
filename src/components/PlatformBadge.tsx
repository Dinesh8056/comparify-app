import React from 'react';
import type { PlatformId } from '../types';
import { PLATFORMS } from '../data/platforms';

interface PlatformBadgeProps {
  platformId: PlatformId;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export const PlatformBadge: React.FC<PlatformBadgeProps> = ({
  platformId,
  size = 'md',
  showTagline = false,
  active = true,
  onClick
}) => {
  const platform = PLATFORMS[platformId];
  if (!platform) return null;

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-xs sm:text-sm gap-1.5',
    lg: 'px-3.5 py-2 text-sm sm:text-base gap-2 font-medium',
  };

  const colorMap: Record<PlatformId, { bg: string; text: string; border: string }> = {
    blinkit: {
      bg: 'bg-amber-500/10 dark:bg-amber-400/10',
      text: 'text-amber-800 dark:text-amber-300',
      border: 'border-amber-400/40 dark:border-amber-500/40'
    },
    zepto: {
      bg: 'bg-purple-500/10 dark:bg-purple-400/10',
      text: 'text-purple-800 dark:text-purple-300',
      border: 'border-purple-400/40 dark:border-purple-500/40'
    },
    instamart: {
      bg: 'bg-orange-500/10 dark:bg-orange-400/10',
      text: 'text-orange-800 dark:text-orange-300',
      border: 'border-orange-400/40 dark:border-orange-500/40'
    },
    swiggy: {
      bg: 'bg-orange-500/10 dark:bg-orange-400/10',
      text: 'text-orange-800 dark:text-orange-300',
      border: 'border-orange-400/40 dark:border-orange-500/40'
    },
    zomato: {
      bg: 'bg-red-500/10 dark:bg-red-400/10',
      text: 'text-red-800 dark:text-red-300',
      border: 'border-red-400/40 dark:border-red-500/40'
    },
    dmart: {
      bg: 'bg-emerald-500/10 dark:bg-emerald-400/10',
      text: 'text-emerald-800 dark:text-emerald-300',
      border: 'border-emerald-400/40 dark:border-emerald-500/40'
    },
    amazon: {
      bg: 'bg-amber-600/10 dark:bg-amber-500/10',
      text: 'text-amber-900 dark:text-amber-200',
      border: 'border-amber-600/30 dark:border-amber-400/30'
    },
    flipkart: {
      bg: 'bg-blue-500/10 dark:bg-blue-400/10',
      text: 'text-blue-800 dark:text-blue-300',
      border: 'border-blue-400/40 dark:border-blue-500/40'
    }
  };

  const colors = colorMap[platformId] || {
    bg: 'bg-slate-100 dark:bg-slate-800',
    text: 'text-slate-800 dark:text-slate-200',
    border: 'border-slate-300 dark:border-slate-700'
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center rounded-lg border transition-all ${
        sizeClasses[size]
      } ${colors.bg} ${colors.text} ${colors.border} ${
        onClick ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
      } ${!active ? 'opacity-40 grayscale' : ''}`}
    >
      <span className="text-base select-none">{platform.logo}</span>
      <span className="font-semibold tracking-tight">{platform.name}</span>
      {showTagline && (
        <span className="text-xs opacity-75 hidden sm:inline ml-1">
          · {platform.avgDeliveryTime}
        </span>
      )}
    </div>
  );
};
