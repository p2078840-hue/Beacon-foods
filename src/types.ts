export type Category = 'all' | 'burgers' | 'pizza' | 'pasta' | 'chicken' | 'sides' | 'drinks';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  category: Category;
  image: string;
  isFavorite?: boolean;
  badge?: string;
  calories?: number;
  prepTime?: string;
  spicyLevel?: number; // 0 to 3
  isVegetarian?: boolean;
  ingredients?: string[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  role?: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
  dishOrdered: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  tag: string;
}

export interface CheckoutFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  deliveryAddress: string;
  city: string;
  specialInstructions: string;
  paymentMethod: 'cod' | 'card' | 'online';
}

export interface ConfirmedOrder {
  orderId: string;
  timestamp: string;
  customer: CheckoutFormData;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  estimatedDeliveryTime: string;
}
