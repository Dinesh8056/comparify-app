import React from 'react';
import { Search, X, Sparkles, ArrowUpDown, Check } from 'lucide-react';
import { PLATFORMS } from '../data/platforms';
import type { PlatformId } from '../types';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedPlatforms: PlatformId[];
  onTogglePlatform: (platformId: PlatformId) => void;
  sortBy: 'cheapest' | 'fastest' | 'discount';
  setSortBy: (sort: 'cheapest' | 'fastest' | 'discount') => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  categories: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  setSearchQuery,
  selectedPlatforms,
  onTogglePlatform,
  sortBy,
  setSortBy,
  selectedCategory,
  setSelectedCategory,
  categories
}) => {
  const popularSearches = [
    'Amul Milk',
    'Chakki Atta',
    'Sunflower Oil',
    'Maggi',
    'Coca Cola',
    'iPhone 16',
    'boAt Earbuds',
    'Surf Excel'
  ];

  const availableStores: PlatformId[] = [
    'blinkit',
    'zepto',
    'instamart',
    'dmart',
    'amazon',
    'flipkart'
  ];

  return (
    <div className="pt-6 sm:pt-10 pb-6 text-center space-y-6 sm:space-y-8">
      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold shadow-xs">
        <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
        <span>India's #1 Multi-Store Price Comparison Engine</span>
      </div>

      {/* Main Title & Subtitle */}
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight sm:leading-none">
          Compare Prices Across <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            All Shopping & Food Apps
          </span>
        </h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Instantly check MRP, discounts, delivery fees, and platform charges across <strong className="font-semibold text-slate-900 dark:text-white">Blinkit, Zepto, Swiggy, Zomato, DMart, Amazon, and Flipkart</strong> before you checkout.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="max-w-2xl mx-auto px-4">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition duration-300" />
          <div className="relative flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden p-1.5 sm:p-2">
            <div className="pl-3 sm:pl-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search products (e.g. Amul Milk, Atta, iPhone 16, Biryani, Oil)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2.5 sm:py-3 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 bg-transparent focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1.5 mr-1 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => {}}
              className="hidden sm:flex px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-xl items-center gap-1.5 shadow-sm transition-all"
            >
              <span>Compare</span>
            </button>
          </div>
        </div>

        {/* Popular quick tags */}
        <div className="mt-3 flex items-center justify-center gap-1.5 flex-wrap text-xs text-slate-500 dark:text-slate-400">
          <span className="font-semibold text-slate-400">Trending:</span>
          {popularSearches.map((tag) => (
            <button
              key={tag}
              onClick={() => setSearchQuery(tag)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Store Quick Switchers */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
          Filter by Active Comparison Platforms
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {availableStores.map((id) => {
            const platform = PLATFORMS[id];
            const isSelected = selectedPlatforms.includes(id);

            return (
              <button
                key={id}
                onClick={() => onTogglePlatform(id)}
                className={`p-3 rounded-2xl border transition-all text-left flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 shadow-sm ring-2 ring-indigo-500/20'
                    : 'bg-slate-50/70 dark:bg-slate-900/40 border-slate-200/60 dark:border-slate-800 opacity-50 grayscale hover:grayscale-0 hover:opacity-80'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl">{platform.logo}</span>
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                    isSelected ? 'bg-indigo-600 text-white' : 'border border-slate-300 dark:border-slate-600'
                  }`}>
                    {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                    {platform.shortName}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {platform.avgDeliveryTime}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Pills & Sort Bar */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 self-end sm:self-auto text-xs font-medium text-slate-500 dark:text-slate-400">
          <ArrowUpDown className="w-3.5 h-3.5" />
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 font-semibold"
          >
            <option value="cheapest">Lowest Effective Price</option>
            <option value="fastest">Fastest Delivery Time</option>
            <option value="discount">Highest Discount %</option>
          </select>
        </div>
      </div>
    </div>
  );
};
