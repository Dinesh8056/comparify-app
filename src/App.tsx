import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCard } from './components/ProductCard';
import { FoodDeliveryCompare } from './components/FoodDeliveryCompare';
import { ElectronicsCompare } from './components/ElectronicsCompare';
import { CartOptimizer } from './components/CartOptimizer';
import { LocationModal } from './components/LocationModal';
import { PriceBreakdownModal } from './components/PriceBreakdownModal';
import { Footer } from './components/Footer';
import { MOCK_PRODUCTS } from './data/mockData';
import { CITIES } from './data/platforms';
import type { Product, PlatformPrice, CartItem, CityLocation, PlatformId } from './types';
import { Sparkles } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<'groceries' | 'food' | 'electronics' | 'cart'>('groceries');
  const [selectedCity, setSelectedCity] = useState<CityLocation>(CITIES[0]);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<PlatformId[]>([
    'blinkit',
    'zepto',
    'instamart',
    'dmart',
    'amazon',
    'flipkart'
  ]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'cheapest' | 'fastest' | 'discount'>('cheapest');
  
  // Theme state: default dark mode to match user's screenshot
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([
    { product: MOCK_PRODUCTS[0], quantity: 2 }, // 2x Amul Milk
    { product: MOCK_PRODUCTS[1], quantity: 1 }, // 1x Britannia Bread
    { product: MOCK_PRODUCTS[4], quantity: 1 }, // 1x Coca Cola
  ]);

  // Breakdown modal state
  const [breakdownState, setBreakdownState] = useState<{
    isOpen: boolean;
    product: Product | null;
    priceEntry: PlatformPrice | null;
  }>({
    isOpen: false,
    product: null,
    priceEntry: null
  });

  // Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleTogglePlatform = (platformId: PlatformId) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId)
        ? (prev.length > 1 ? prev.filter(p => p !== platformId) : prev)
        : [...prev, platformId]
    );
  };

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        showToast(`Increased quantity for ${product.name}`);
        return prev.map(item => 
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        showToast(`Added ${product.name} to basket optimizer`);
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart(prev => 
      prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
    showToast('Item removed from basket');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Basket cleared');
  };

  const handleAddQuickBundle = (bundleType: 'breakfast' | 'pantry' | 'snack') => {
    if (bundleType === 'breakfast') {
      const p1 = MOCK_PRODUCTS.find(p => p.id === 'prod-1')!; // Milk
      const p2 = MOCK_PRODUCTS.find(p => p.id === 'prod-2')!; // Bread
      const p3 = MOCK_PRODUCTS.find(p => p.id === 'prod-8')!; // Tea
      setCart([
        { product: p1, quantity: 2 },
        { product: p2, quantity: 1 },
        { product: p3, quantity: 1 },
      ]);
      showToast('Loaded Breakfast Essentials bundle into Basket!');
    } else if (bundleType === 'pantry') {
      const p1 = MOCK_PRODUCTS.find(p => p.id === 'prod-3')!; // Atta
      const p2 = MOCK_PRODUCTS.find(p => p.id === 'prod-4')!; // Oil
      const p3 = MOCK_PRODUCTS.find(p => p.id === 'prod-12')!; // Detergent
      setCart([
        { product: p1, quantity: 1 },
        { product: p2, quantity: 2 },
        { product: p3, quantity: 1 },
      ]);
      showToast('Loaded Monthly Staples bundle into Basket!');
    } else {
      const p1 = MOCK_PRODUCTS.find(p => p.id === 'prod-5')!; // Coke
      const p2 = MOCK_PRODUCTS.find(p => p.id === 'prod-6')!; // Maggi
      const p3 = MOCK_PRODUCTS.find(p => p.id === 'prod-7')!; // Chips
      const p4 = MOCK_PRODUCTS.find(p => p.id === 'prod-14')!; // Silk
      setCart([
        { product: p1, quantity: 2 },
        { product: p2, quantity: 2 },
        { product: p3, quantity: 3 },
        { product: p4, quantity: 2 },
      ]);
      showToast('Loaded Movie Munchies bundle into Basket!');
    }
  };

  // Categories list
  const categories = [
    'All',
    'Dairy & Eggs',
    'Bakery & Bread',
    'Atta, Flours & Dals',
    'Oils & Ghee',
    'Cold Drinks & Juices',
    'Snacks & Instant Food',
    'Cleaning & Laundry'
  ];

  // Filtering products for grocery/general comparison
  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    if (activeTab === 'groceries' && product.category === 'electronics') {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== 'All' && product.subCategory !== selectedCategory) {
      return false;
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(q);
      const matchesBrand = product.brand.toLowerCase().includes(q);
      const matchesTag = product.tags.some(t => t.toLowerCase().includes(q));
      if (!matchesName && !matchesBrand && !matchesTag) return false;
    }

    return true;
  });

  // Sorting products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const minA = Math.min(...a.prices.map(p => p.price));
    const minB = Math.min(...b.prices.map(p => p.price));

    if (sortBy === 'cheapest') {
      return minA - minB;
    } else if (sortBy === 'discount') {
      const maxDiscA = Math.max(...a.prices.map(p => p.discountPercent));
      const maxDiscB = Math.max(...b.prices.map(p => p.discountPercent));
      return maxDiscB - maxDiscA;
    } else {
      // fastest delivery
      const getFastestTime = (p: Product) => 
        Math.min(...p.prices.map(price => parseInt(price.deliveryTime) || 999));
      return getFastestTime(a) - getFastestTime(b);
    }
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 flex flex-col font-sans antialiased">
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCity={selectedCity}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
        cartCount={cart.reduce((sum, i) => sum + i.quantity, 0)}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-20 md:pb-12">
        {/* Render Tab Views */}
        {activeTab === 'groceries' && (
          <div className="space-y-8">
            <HeroSection
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedPlatforms={selectedPlatforms}
              onTogglePlatform={handleTogglePlatform}
              sortBy={sortBy}
              setSortBy={setSortBy}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              categories={categories}
            />

            {/* Product Grid */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                  {selectedCategory === 'All' ? 'Popular Daily Essentials' : selectedCategory}
                </h3>
                <span className="text-xs text-slate-400">
                  Showing {sortedProducts.length} verified products
                </span>
              </div>

              {sortedProducts.length === 0 ? (
                <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    No matching products found for "{searchQuery}". Try searching "Milk", "Atta", "Coke", or "Oil".
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold"
                  >
                    Reset Search & Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={{
                        ...product,
                        // Filter prices to only include active platform selections
                        prices: product.prices.filter(p => selectedPlatforms.includes(p.platformId))
                      }}
                      onSelectBreakdown={(prod, price) => {
                        setBreakdownState({
                          isOpen: true,
                          product: prod,
                          priceEntry: price
                        });
                      }}
                      onAddToCart={handleAddToCart}
                      isInCart={cart.some(i => i.product.id === product.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'food' && (
          <div className="pt-6 sm:pt-8">
            <FoodDeliveryCompare />
          </div>
        )}

        {activeTab === 'electronics' && (
          <div className="pt-6 sm:pt-8">
            <ElectronicsCompare />
          </div>
        )}

        {activeTab === 'cart' && (
          <div className="pt-6 sm:pt-8">
            <CartOptimizer
              cart={cart}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
              onAddQuickBundle={handleAddQuickBundle}
            />
          </div>
        )}
      </main>

      {/* Price Breakdown Modal */}
      {breakdownState.product && breakdownState.priceEntry && (
        <PriceBreakdownModal
          isOpen={breakdownState.isOpen}
          onClose={() => setBreakdownState({ isOpen: false, product: null, priceEntry: null })}
          product={breakdownState.product}
          priceEntry={breakdownState.priceEntry}
        />
      )}

      {/* Location Modal */}
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        selectedCity={selectedCity}
        onSelectCity={(city) => {
          setSelectedCity(city);
          showToast(`Delivering to ${city.name} (${city.pincode})`);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 md:bottom-8 right-6 z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs sm:text-sm font-semibold animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400 dark:text-indigo-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
