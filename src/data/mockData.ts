import type { Product, FoodDish } from '../types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Amul Taaza Homogenised Toned Milk',
    brand: 'Amul',
    category: 'groceries',
    subCategory: 'Dairy & Eggs',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80',
    packageSize: '500 ml',
    description: 'Fresh homogenised toned milk with 3.0% fat and 8.5% SNF. Wholesome and nutritious for daily tea, coffee, and cereal.',
    ratings: { average: 4.8, count: 14200 },
    tags: ['milk', 'dairy', 'amul', 'breakfast', 'essential'],
    trending: true,
    priceHistory: [
      { date: '2026-09-01', lowestPrice: 27 },
      { date: '2026-09-10', lowestPrice: 27 },
      { date: '2026-09-20', lowestPrice: 27 },
      { date: '2026-09-27', lowestPrice: 26 },
    ],
    prices: [
      {
        platformId: 'zepto',
        mrp: 28,
        price: 26,
        discountPercent: 7,
        inStock: true,
        deliveryTime: '8 mins',
        deliveryFee: 15,
        platformFee: 4,
        badge: 'Cheapest'
      },
      {
        platformId: 'blinkit',
        mrp: 28,
        price: 27,
        discountPercent: 4,
        inStock: true,
        deliveryTime: '10 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'instamart',
        mrp: 28,
        price: 27,
        discountPercent: 4,
        inStock: true,
        deliveryTime: '12 mins',
        deliveryFee: 18,
        platformFee: 6
      },
      {
        platformId: 'dmart',
        mrp: 28,
        price: 25,
        discountPercent: 11,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Best Value'
      },
      {
        platformId: 'amazon',
        mrp: 28,
        price: 27,
        discountPercent: 4,
        inStock: true,
        deliveryTime: 'Today by 4 PM',
        deliveryFee: 25,
        platformFee: 0
      }
    ]
  },
  {
    id: 'prod-2',
    name: 'Britannia 100% Whole Wheat Bread',
    brand: 'Britannia',
    category: 'groceries',
    subCategory: 'Bakery & Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
    packageSize: '400 g',
    description: 'Freshly baked 100% whole wheat bread rich in dietary fiber without added maida. Perfect for toasts and sandwiches.',
    ratings: { average: 4.7, count: 9800 },
    tags: ['bread', 'wheat bread', 'breakfast', 'bakery', 'britannia'],
    trending: true,
    prices: [
      {
        platformId: 'blinkit',
        mrp: 55,
        price: 48,
        discountPercent: 13,
        inStock: true,
        deliveryTime: '9 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Cheapest'
      },
      {
        platformId: 'zepto',
        mrp: 55,
        price: 50,
        discountPercent: 9,
        inStock: true,
        deliveryTime: '10 mins',
        deliveryFee: 15,
        platformFee: 4,
        badge: 'Fastest'
      },
      {
        platformId: 'instamart',
        mrp: 55,
        price: 52,
        discountPercent: 5,
        inStock: true,
        deliveryTime: '14 mins',
        deliveryFee: 19,
        platformFee: 6
      },
      {
        platformId: 'dmart',
        mrp: 55,
        price: 45,
        discountPercent: 18,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Best Value'
      },
      {
        platformId: 'flipkart',
        mrp: 55,
        price: 49,
        discountPercent: 11,
        inStock: true,
        deliveryTime: '15 mins',
        deliveryFee: 15,
        platformFee: 3
      }
    ]
  },
  {
    id: 'prod-3',
    name: 'Aashirvaad Shudh Chakki Whole Wheat Atta',
    brand: 'Aashirvaad',
    category: 'groceries',
    subCategory: 'Atta, Flours & Dals',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80',
    packageSize: '5 kg',
    description: '100% pure wheat grain flour made with traditional 4-step chakki grinding process. Makes super soft and fluffy rotis.',
    ratings: { average: 4.9, count: 28400 },
    tags: ['atta', 'flour', 'roti', 'staple', 'aashirvaad', 'groceries'],
    trending: true,
    prices: [
      {
        platformId: 'dmart',
        mrp: 290,
        price: 235,
        discountPercent: 19,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Cheapest'
      },
      {
        platformId: 'amazon',
        mrp: 290,
        price: 249,
        discountPercent: 14,
        inStock: true,
        deliveryTime: 'Today by 6 PM',
        deliveryFee: 0,
        platformFee: 0,
        badge: 'Best Value'
      },
      {
        platformId: 'blinkit',
        mrp: 290,
        price: 268,
        discountPercent: 8,
        inStock: true,
        deliveryTime: '11 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'zepto',
        mrp: 290,
        price: 265,
        discountPercent: 9,
        inStock: true,
        deliveryTime: '12 mins',
        deliveryFee: 16,
        platformFee: 4
      },
      {
        platformId: 'instamart',
        mrp: 290,
        price: 275,
        discountPercent: 5,
        inStock: true,
        deliveryTime: '15 mins',
        deliveryFee: 20,
        platformFee: 6
      },
      {
        platformId: 'flipkart',
        mrp: 290,
        price: 255,
        discountPercent: 12,
        inStock: true,
        deliveryTime: 'Tomorrow',
        deliveryFee: 30,
        platformFee: 3
      }
    ]
  },
  {
    id: 'prod-4',
    name: 'Fortune Sunlite Refined Sunflower Oil',
    brand: 'Fortune',
    category: 'groceries',
    subCategory: 'Oils & Ghee',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80',
    packageSize: '1 L Pouch',
    description: 'Light, healthy cooking oil fortified with Vitamins A & D. High smoke point ideal for Indian sautéing and deep frying.',
    ratings: { average: 4.6, count: 18500 },
    tags: ['oil', 'sunflower oil', 'cooking', 'fortune', 'grocery'],
    prices: [
      {
        platformId: 'dmart',
        mrp: 175,
        price: 132,
        discountPercent: 25,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Cheapest'
      },
      {
        platformId: 'amazon',
        mrp: 175,
        price: 141,
        discountPercent: 19,
        inStock: true,
        deliveryTime: 'Today by 5 PM',
        deliveryFee: 0,
        platformFee: 0,
        badge: 'Best Value'
      },
      {
        platformId: 'zepto',
        mrp: 175,
        price: 149,
        discountPercent: 15,
        inStock: true,
        deliveryTime: '9 mins',
        deliveryFee: 15,
        platformFee: 4,
        badge: 'Fastest'
      },
      {
        platformId: 'blinkit',
        mrp: 175,
        price: 152,
        discountPercent: 13,
        inStock: true,
        deliveryTime: '10 mins',
        deliveryFee: 15,
        platformFee: 5
      },
      {
        platformId: 'instamart',
        mrp: 175,
        price: 155,
        discountPercent: 11,
        inStock: true,
        deliveryTime: '13 mins',
        deliveryFee: 19,
        platformFee: 6
      }
    ]
  },
  {
    id: 'prod-5',
    name: 'Coca-Cola Original Taste Soft Drink',
    brand: 'Coca-Cola',
    category: 'groceries',
    subCategory: 'Cold Drinks & Juices',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80',
    packageSize: '750 ml Pet Bottle',
    description: 'The refreshing crisp fizzy cola taste that pairs best with snacks, movies, and party meals.',
    ratings: { average: 4.8, count: 22100 },
    tags: ['coke', 'coca cola', 'cold drink', 'soda', 'beverage'],
    trending: true,
    prices: [
      {
        platformId: 'zepto',
        mrp: 45,
        price: 38,
        discountPercent: 16,
        inStock: true,
        deliveryTime: '8 mins',
        deliveryFee: 15,
        platformFee: 4,
        badge: 'Cheapest'
      },
      {
        platformId: 'blinkit',
        mrp: 45,
        price: 40,
        discountPercent: 11,
        inStock: true,
        deliveryTime: '10 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'instamart',
        mrp: 45,
        price: 42,
        discountPercent: 7,
        inStock: true,
        deliveryTime: '12 mins',
        deliveryFee: 18,
        platformFee: 6
      },
      {
        platformId: 'dmart',
        mrp: 45,
        price: 36,
        discountPercent: 20,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Best Value'
      }
    ]
  },
  {
    id: 'prod-6',
    name: 'Maggi 2-Minute Masala Instant Noodles',
    brand: 'Maggi',
    category: 'groceries',
    subCategory: 'Snacks & Instant Food',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=400&q=80',
    packageSize: 'Pack of 4 (280 g)',
    description: 'Favorite instant noodles enriched with Iron and made with authentic Indian spices. Quick comfort meal in 2 minutes.',
    ratings: { average: 4.9, count: 45000 },
    tags: ['maggi', 'noodles', 'instant food', 'snack', 'nestle'],
    trending: true,
    prices: [
      {
        platformId: 'blinkit',
        mrp: 60,
        price: 52,
        discountPercent: 13,
        inStock: true,
        deliveryTime: '9 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'zepto',
        mrp: 60,
        price: 51,
        discountPercent: 15,
        inStock: true,
        deliveryTime: '11 mins',
        deliveryFee: 15,
        platformFee: 4,
        badge: 'Cheapest'
      },
      {
        platformId: 'instamart',
        mrp: 60,
        price: 55,
        discountPercent: 8,
        inStock: true,
        deliveryTime: '14 mins',
        deliveryFee: 19,
        platformFee: 6
      },
      {
        platformId: 'dmart',
        mrp: 60,
        price: 49,
        discountPercent: 18,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Best Value'
      },
      {
        platformId: 'amazon',
        mrp: 60,
        price: 54,
        discountPercent: 10,
        inStock: true,
        deliveryTime: 'Today by 5 PM',
        deliveryFee: 0,
        platformFee: 0
      }
    ]
  },
  {
    id: 'prod-7',
    name: "Lay's India's Magic Masala Potato Chips",
    brand: "Lay's",
    category: 'groceries',
    subCategory: 'Chips & Crisps',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&w=400&q=80',
    packageSize: '50 g Pouch',
    description: 'Crispy wafer thin potato chips seasoned with a zesty blend of classic Indian spices and herbs.',
    ratings: { average: 4.7, count: 18300 },
    tags: ['lays', 'chips', 'magic masala', 'potato chips', 'snack'],
    prices: [
      {
        platformId: 'zepto',
        mrp: 20,
        price: 18,
        discountPercent: 10,
        inStock: true,
        deliveryTime: '8 mins',
        deliveryFee: 15,
        platformFee: 4,
        badge: 'Cheapest'
      },
      {
        platformId: 'blinkit',
        mrp: 20,
        price: 19,
        discountPercent: 5,
        inStock: true,
        deliveryTime: '10 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'instamart',
        mrp: 20,
        price: 20,
        discountPercent: 0,
        inStock: true,
        deliveryTime: '13 mins',
        deliveryFee: 18,
        platformFee: 6
      },
      {
        platformId: 'dmart',
        mrp: 20,
        price: 17,
        discountPercent: 15,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0
      }
    ]
  },
  {
    id: 'prod-8',
    name: 'Tata Tea Gold Leaf Black Tea',
    brand: 'Tata Tea',
    category: 'groceries',
    subCategory: 'Tea & Coffee',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80',
    packageSize: '500 g Pack',
    description: 'An exquisite blend of gently rolled Assam tea leaves with 15% long leaves for rich aroma and brisk taste.',
    ratings: { average: 4.8, count: 16400 },
    tags: ['chai', 'tea', 'tata tea gold', 'breakfast', 'beverage'],
    prices: [
      {
        platformId: 'dmart',
        mrp: 350,
        price: 279,
        discountPercent: 20,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Cheapest'
      },
      {
        platformId: 'amazon',
        mrp: 350,
        price: 295,
        discountPercent: 16,
        inStock: true,
        deliveryTime: 'Today by 7 PM',
        deliveryFee: 0,
        platformFee: 0,
        badge: 'Best Value'
      },
      {
        platformId: 'blinkit',
        mrp: 350,
        price: 310,
        discountPercent: 11,
        inStock: true,
        deliveryTime: '11 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'zepto',
        mrp: 350,
        price: 315,
        discountPercent: 10,
        inStock: true,
        deliveryTime: '12 mins',
        deliveryFee: 16,
        platformFee: 4
      },
      {
        platformId: 'instamart',
        mrp: 350,
        price: 325,
        discountPercent: 7,
        inStock: true,
        deliveryTime: '15 mins',
        deliveryFee: 20,
        platformFee: 6
      }
    ]
  },
  {
    id: 'prod-9',
    name: 'Apple iPhone 16 (128 GB) - Black',
    brand: 'Apple',
    category: 'electronics',
    subCategory: 'Smartphones',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=400&q=80',
    packageSize: '128 GB Storage',
    description: 'Features A18 chip with Apple Intelligence, 48MP Fusion Camera, Camera Control button, and aerospace-grade aluminum.',
    ratings: { average: 4.8, count: 5200 },
    tags: ['iphone', 'apple', 'smartphone', 'mobile', 'iphone 16', 'electronics'],
    trending: true,
    priceHistory: [
      { date: '2026-09-01', lowestPrice: 79900 },
      { date: '2026-09-12', lowestPrice: 77990 },
      { date: '2026-09-20', lowestPrice: 76999 },
      { date: '2026-09-27', lowestPrice: 75999 },
    ],
    prices: [
      {
        platformId: 'amazon',
        mrp: 79900,
        price: 75999,
        discountPercent: 5,
        inStock: true,
        deliveryTime: 'Tomorrow Morning',
        deliveryFee: 0,
        platformFee: 0,
        couponCode: 'HDFC2000',
        couponDiscount: 2000,
        badge: 'Cheapest'
      },
      {
        platformId: 'flipkart',
        mrp: 79900,
        price: 76499,
        discountPercent: 4,
        inStock: true,
        deliveryTime: 'Tomorrow by 2 PM',
        deliveryFee: 0,
        platformFee: 0,
        couponCode: 'AXIS1500',
        couponDiscount: 1500,
        badge: 'Best Value'
      },
      {
        platformId: 'blinkit',
        mrp: 79900,
        price: 79900,
        discountPercent: 0,
        inStock: true,
        deliveryTime: '12 mins (Instant Delivery)',
        deliveryFee: 0,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'zepto',
        mrp: 79900,
        price: 78999,
        discountPercent: 1,
        inStock: true,
        deliveryTime: '10 mins (Instant Delivery)',
        deliveryFee: 0,
        platformFee: 4
      }
    ]
  },
  {
    id: 'prod-10',
    name: 'Apple 20W USB-C Power Adapter',
    brand: 'Apple',
    category: 'electronics',
    subCategory: 'Mobile Accessories',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=400&q=80',
    packageSize: '20W Adapter',
    description: 'Fast, efficient charging at home, in the office, or on the go. Compatible with any USB-C-enabled device.',
    ratings: { average: 4.8, count: 32000 },
    tags: ['apple charger', 'adapter', 'type c', 'charger', 'iphone adapter'],
    prices: [
      {
        platformId: 'amazon',
        mrp: 1900,
        price: 1599,
        discountPercent: 16,
        inStock: true,
        deliveryTime: 'Tomorrow by 11 AM',
        deliveryFee: 0,
        platformFee: 0,
        badge: 'Cheapest'
      },
      {
        platformId: 'flipkart',
        mrp: 1900,
        price: 1649,
        discountPercent: 13,
        inStock: true,
        deliveryTime: 'Tomorrow',
        deliveryFee: 0,
        platformFee: 0
      },
      {
        platformId: 'blinkit',
        mrp: 1900,
        price: 1899,
        discountPercent: 0,
        inStock: true,
        deliveryTime: '10 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'zepto',
        mrp: 1900,
        price: 1849,
        discountPercent: 3,
        inStock: true,
        deliveryTime: '11 mins',
        deliveryFee: 16,
        platformFee: 4
      }
    ]
  },
  {
    id: 'prod-11',
    name: 'boAt Airdopes 141 ANC TWS Earbuds',
    brand: 'boAt',
    category: 'electronics',
    subCategory: 'Audio & Earphones',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80',
    packageSize: 'Earbuds + Case',
    description: 'Up to 32 dB Active Noise Cancellation, 42 hours total playback, ENx quad mics, and Beast Mode low latency for gaming.',
    ratings: { average: 4.4, count: 68000 },
    tags: ['boat', 'earbuds', 'airdopes', 'bluetooth', 'audio', 'headphones'],
    prices: [
      {
        platformId: 'amazon',
        mrp: 4490,
        price: 1399,
        discountPercent: 69,
        inStock: true,
        deliveryTime: 'Tomorrow',
        deliveryFee: 0,
        platformFee: 0,
        badge: 'Cheapest'
      },
      {
        platformId: 'flipkart',
        mrp: 4490,
        price: 1449,
        discountPercent: 68,
        inStock: true,
        deliveryTime: 'Tomorrow',
        deliveryFee: 0,
        platformFee: 0
      },
      {
        platformId: 'blinkit',
        mrp: 4490,
        price: 1599,
        discountPercent: 64,
        inStock: true,
        deliveryTime: '11 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'zepto',
        mrp: 4490,
        price: 1549,
        discountPercent: 65,
        inStock: true,
        deliveryTime: '12 mins',
        deliveryFee: 16,
        platformFee: 4
      }
    ]
  },
  {
    id: 'prod-12',
    name: 'Surf Excel Matic Top Load Detergent Powder',
    brand: 'Surf Excel',
    category: 'essentials',
    subCategory: 'Laundry & Cleaning',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=400&q=80',
    packageSize: '2 kg Pack',
    description: 'Engineered for washing machines with hand-rub action power to remove tough stains completely inside the machine.',
    ratings: { average: 4.8, count: 24500 },
    tags: ['surf excel', 'detergent', 'washing powder', 'cleaning', 'laundry'],
    prices: [
      {
        platformId: 'dmart',
        mrp: 480,
        price: 365,
        discountPercent: 24,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Cheapest'
      },
      {
        platformId: 'amazon',
        mrp: 480,
        price: 399,
        discountPercent: 17,
        inStock: true,
        deliveryTime: 'Today by 8 PM',
        deliveryFee: 0,
        platformFee: 0,
        badge: 'Best Value'
      },
      {
        platformId: 'blinkit',
        mrp: 480,
        price: 435,
        discountPercent: 9,
        inStock: true,
        deliveryTime: '12 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'zepto',
        mrp: 480,
        price: 430,
        discountPercent: 10,
        inStock: true,
        deliveryTime: '14 mins',
        deliveryFee: 16,
        platformFee: 4
      },
      {
        platformId: 'instamart',
        mrp: 480,
        price: 445,
        discountPercent: 7,
        inStock: true,
        deliveryTime: '16 mins',
        deliveryFee: 20,
        platformFee: 6
      }
    ]
  },
  {
    id: 'prod-13',
    name: 'Dettol Original Liquid Handwash Refill',
    brand: 'Dettol',
    category: 'essentials',
    subCategory: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=400&q=80',
    packageSize: '675 ml Pouch',
    description: '100% better protection against illness-causing germs with pH-balanced formula for soft, protected hands.',
    ratings: { average: 4.7, count: 19800 },
    tags: ['dettol', 'handwash', 'soap', 'hygiene', 'personal care'],
    prices: [
      {
        platformId: 'dmart',
        mrp: 119,
        price: 89,
        discountPercent: 25,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Cheapest'
      },
      {
        platformId: 'amazon',
        mrp: 119,
        price: 99,
        discountPercent: 17,
        inStock: true,
        deliveryTime: 'Today by 6 PM',
        deliveryFee: 0,
        platformFee: 0
      },
      {
        platformId: 'zepto',
        mrp: 119,
        price: 102,
        discountPercent: 14,
        inStock: true,
        deliveryTime: '9 mins',
        deliveryFee: 15,
        platformFee: 4,
        badge: 'Fastest'
      },
      {
        platformId: 'blinkit',
        mrp: 119,
        price: 105,
        discountPercent: 12,
        inStock: true,
        deliveryTime: '10 mins',
        deliveryFee: 15,
        platformFee: 5
      },
      {
        platformId: 'instamart',
        mrp: 119,
        price: 108,
        discountPercent: 9,
        inStock: true,
        deliveryTime: '13 mins',
        deliveryFee: 18,
        platformFee: 6
      }
    ]
  },
  {
    id: 'prod-14',
    name: 'Cadbury Dairy Milk Silk Chocolate Bar',
    brand: 'Cadbury',
    category: 'groceries',
    subCategory: 'Chocolates & Desserts',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=400&q=80',
    packageSize: '60 g Bar',
    description: 'Indulgently smooth and velvety rich milk chocolate that melts seamlessly on your tongue.',
    ratings: { average: 4.9, count: 31000 },
    tags: ['chocolate', 'cadbury', 'silk', 'dairy milk', 'sweet'],
    prices: [
      {
        platformId: 'blinkit',
        mrp: 80,
        price: 72,
        discountPercent: 10,
        inStock: true,
        deliveryTime: '8 mins',
        deliveryFee: 15,
        platformFee: 5,
        badge: 'Fastest'
      },
      {
        platformId: 'zepto',
        mrp: 80,
        price: 70,
        discountPercent: 12,
        inStock: true,
        deliveryTime: '9 mins',
        deliveryFee: 15,
        platformFee: 4,
        badge: 'Cheapest'
      },
      {
        platformId: 'instamart',
        mrp: 80,
        price: 75,
        discountPercent: 6,
        inStock: true,
        deliveryTime: '12 mins',
        deliveryFee: 18,
        platformFee: 6
      },
      {
        platformId: 'dmart',
        mrp: 80,
        price: 68,
        discountPercent: 15,
        inStock: true,
        deliveryTime: 'Tomorrow Slot',
        deliveryFee: 40,
        platformFee: 0,
        badge: 'Best Value'
      }
    ]
  }
];

export const MOCK_FOOD_DISHES: FoodDish[] = [
  {
    id: 'food-1',
    dishName: 'Meghana Special Chicken Biryani',
    restaurantName: 'Meghana Foods',
    cuisine: 'Andhra, Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80',
    isVeg: false,
    rating: 4.7,
    swiggy: {
      itemPrice: 350,
      deliveryFee: 35,
      platformFee: 6,
      packagingFee: 25,
      couponCode: 'SWIGGYIT',
      couponDiscount: 50,
      finalPrice: 366,
      deliveryTime: '28 mins',
      inStock: true
    },
    zomato: {
      itemPrice: 365,
      deliveryFee: 30,
      platformFee: 7,
      packagingFee: 20,
      couponCode: 'TASTY75',
      couponDiscount: 75,
      finalPrice: 347,
      deliveryTime: '25 mins',
      inStock: true
    }
  },
  {
    id: 'food-2',
    dishName: 'Farmhouse Veggie Supreme Pizza (Medium)',
    restaurantName: "Domino's Pizza",
    cuisine: 'Pizza, Italian, Fast Food',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80',
    isVeg: true,
    rating: 4.5,
    swiggy: {
      itemPrice: 459,
      deliveryFee: 40,
      platformFee: 6,
      packagingFee: 15,
      couponCode: 'DOMINOS100',
      couponDiscount: 100,
      finalPrice: 420,
      deliveryTime: '30 mins',
      inStock: true
    },
    zomato: {
      itemPrice: 459,
      deliveryFee: 35,
      platformFee: 7,
      packagingFee: 15,
      couponCode: 'ZOMATO80',
      couponDiscount: 80,
      finalPrice: 436,
      deliveryTime: '26 mins',
      inStock: true
    }
  },
  {
    id: 'food-3',
    dishName: 'Paneer Butter Masala + 2 Butter Naan',
    restaurantName: 'Punjab Grill Express',
    cuisine: 'North Indian, Mughlai',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80',
    isVeg: true,
    rating: 4.6,
    swiggy: {
      itemPrice: 320,
      deliveryFee: 30,
      platformFee: 6,
      packagingFee: 20,
      couponCode: 'FEAST40',
      couponDiscount: 40,
      finalPrice: 336,
      deliveryTime: '32 mins',
      inStock: true
    },
    zomato: {
      itemPrice: 310,
      deliveryFee: 25,
      platformFee: 7,
      packagingFee: 20,
      couponCode: 'TRYNEW',
      couponDiscount: 50,
      finalPrice: 312,
      deliveryTime: '29 mins',
      inStock: true
    }
  },
  {
    id: 'food-4',
    dishName: 'Whopper Crispy Veg Meal (Burger + Fries + Coke)',
    restaurantName: 'Burger King',
    cuisine: 'Burgers, American, Fast Food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80',
    isVeg: true,
    rating: 4.4,
    swiggy: {
      itemPrice: 289,
      deliveryFee: 35,
      platformFee: 6,
      packagingFee: 12,
      couponCode: 'STEALDEAL',
      couponDiscount: 60,
      finalPrice: 282,
      deliveryTime: '24 mins',
      inStock: true
    },
    zomato: {
      itemPrice: 299,
      deliveryFee: 30,
      platformFee: 7,
      packagingFee: 15,
      couponCode: 'BKPARTY',
      couponDiscount: 50,
      finalPrice: 301,
      deliveryTime: '22 mins',
      inStock: true
    }
  },
  {
    id: 'food-5',
    dishName: 'Special Chole Bhature (2 pcs + Pickle & Salad)',
    restaurantName: "Haldiram's",
    cuisine: 'North Indian, Street Food, Snacks',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=400&q=80',
    isVeg: true,
    rating: 4.7,
    swiggy: {
      itemPrice: 195,
      deliveryFee: 30,
      platformFee: 6,
      packagingFee: 15,
      couponCode: 'HALDI20',
      couponDiscount: 20,
      finalPrice: 226,
      deliveryTime: '26 mins',
      inStock: true
    },
    zomato: {
      itemPrice: 190,
      deliveryFee: 28,
      platformFee: 7,
      packagingFee: 15,
      couponCode: 'ZOMATO25',
      couponDiscount: 25,
      finalPrice: 215,
      deliveryTime: '24 mins',
      inStock: true
    }
  },
  {
    id: 'food-6',
    dishName: 'Classic Cold Coffee with Ice Cream',
    restaurantName: 'Third Wave Coffee',
    cuisine: 'Coffee, Beverages, Cafe',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=80',
    isVeg: true,
    rating: 4.8,
    swiggy: {
      itemPrice: 260,
      deliveryFee: 35,
      platformFee: 6,
      packagingFee: 15,
      couponCode: 'CRAVINGS',
      couponDiscount: 40,
      finalPrice: 276,
      deliveryTime: '20 mins',
      inStock: true
    },
    zomato: {
      itemPrice: 260,
      deliveryFee: 30,
      platformFee: 7,
      packagingFee: 15,
      couponCode: 'TWC30',
      couponDiscount: 30,
      finalPrice: 282,
      deliveryTime: '18 mins',
      inStock: true
    }
  }
];
