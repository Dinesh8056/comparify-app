import React, { useState } from 'react';
import { MapPin, X, Check, Search, Navigation } from 'lucide-react';
import { CITIES } from '../data/platforms';
import type { CityLocation, PlatformId } from '../types';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCity: CityLocation;
  onSelectCity: (city: CityLocation) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  isOpen,
  onClose,
  selectedCity,
  onSelectCity,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customPincode, setCustomPincode] = useState('');

  if (!isOpen) return null;

  const filteredCities = CITIES.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.pincode.includes(searchTerm)
  );

  const handleApplyCustomPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (customPincode.length >= 6) {
      const activeStores: PlatformId[] = ['blinkit', 'zepto', 'instamart', 'amazon', 'flipkart', 'swiggy', 'zomato'];
      onSelectCity({
        id: 'custom-' + customPincode,
        name: `Pincode ${customPincode}`,
        state: 'Custom Locality',
        pincode: customPincode,
        activePlatforms: activeStores
      });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-base sm:text-lg">
                Choose Delivery Location
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Prices and store availability change based on pincode
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search city, area or pincode..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500"
            />
          </div>

          <form onSubmit={handleApplyCustomPincode} className="mt-3 flex gap-2">
            <input
              type="text"
              maxLength={6}
              placeholder="Enter 6-digit Pincode"
              value={customPincode}
              onChange={(e) => setCustomPincode(e.target.value.replace(/\D/g, ''))}
              className="flex-1 px-3.5 py-2 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
            <button
              type="submit"
              disabled={customPincode.length < 6}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white text-xs sm:text-sm font-medium rounded-xl transition-colors shrink-0"
            >
              Set Pincode
            </button>
          </form>
        </div>

        {/* City List */}
        <div className="p-3 max-h-72 overflow-y-auto space-y-1.5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 py-1">
            Major Metropolitan Cities
          </div>
          {filteredCities.map((city) => {
            const isSelected = selectedCity.id === city.id;
            return (
              <button
                key={city.id}
                onClick={() => {
                  onSelectCity(city);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-colors ${
                  isSelected
                    ? 'bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}>
                    {city.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white text-sm">
                      {city.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {city.state} · Pin: {city.pincode}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-right text-[11px] text-emerald-600 dark:text-emerald-400 font-medium hidden sm:block">
                    {city.activePlatforms.length} Stores Active
                  </div>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Current Location Quick Detect */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={() => {
              onSelectCity(CITIES[0]);
              onClose();
            }}
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700"
          >
            <Navigation className="w-4 h-4 animate-pulse" />
            Detect current GPS location
          </button>
          <span className="text-xs text-slate-400">Instant dark store sync</span>
        </div>
      </div>
    </div>
  );
};
