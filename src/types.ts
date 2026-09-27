export type PlatformId = 
  | 'blinkit' 
  | 'zepto' 
  | 'swiggy' 
  | 'instamart' 
  | 'zomato' 
  | 'dmart' 
  | 'amazon' 
  | 'flipkart';

export type ProductCategory = 'groceries' | 'food' | 'electronics' | 'essentials';

export interface PlatformInfo {
  id: PlatformId;
  name: string;
  shortName: string;
  tagline: string;
  category: ('groceries' | 'food' | 'electronics')[];
  bgHex: string;
  textHex: string;
  accentHex: string;
  borderHex: string;
  logo: string; // SVG or icon code
  avgDeliveryTime: string;
  basePlatformFee: number;
  deliveryFee: number;
  freeDeliveryThreshold: number;
  rating: number;
}

export interface PlatformPrice {
  platformId: PlatformId;
  mrp: number;
  price: number;
  discountPercent: number;
  inStock: boolean;
  deliveryTime: string; // e.g. "9 mins", "12 mins", "Tomorrow by 11 AM"
  deliveryFee: number;
  platformFee: number;
  handlingFee?: number;
  packagingFee?: number;
  couponDiscount?: number;
  couponCode?: string;
  affiliateUrl?: string;
  badge?: 'Cheapest' | 'Fastest' | 'Best Value' | 'Exclusive Offer';
  sponsored?: boolean;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  subCategory: string;
  image: string;
  packageSize: string; // e.g., "500 ml", "1 kg", "Pack of 4"
  description: string;
  ratings: {
    average: number;
    count: number;
  };
  prices: PlatformPrice[];
  tags: string[];
  trending?: boolean;
  priceHistory?: {
    date: string;
    lowestPrice: number;
  }[];
}

export interface FoodDish {
  id: string;
  dishName: string;
  restaurantName: string;
  cuisine: string;
  image: string;
  isVeg: boolean;
  rating: number;
  swiggy: {
    itemPrice: number;
    deliveryFee: number;
    platformFee: number;
    packagingFee: number;
    couponDiscount: number;
    couponCode: string;
    finalPrice: number;
    deliveryTime: string;
    inStock: boolean;
  };
  zomato: {
    itemPrice: number;
    deliveryFee: number;
    platformFee: number;
    packagingFee: number;
    couponDiscount: number;
    couponCode: string;
    finalPrice: number;
    deliveryTime: string;
    inStock: boolean;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CityLocation {
  id: string;
  name: string;
  state: string;
  pincode: string;
  activePlatforms: PlatformId[];
  surgeActive?: boolean;
}
