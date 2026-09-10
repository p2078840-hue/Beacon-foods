import { CustomerReview, FAQItem, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'BiteCraft',
  tagline: 'Crafted Fresh. Made to Crave.',
  description: 'At BiteCraft, we believe great food starts with great ingredients. Every meal is prepared with care, bold flavors, and a passion for creating moments worth sharing.',
  address: '428 Culinary Arts Blvd, Suite 100, San Francisco, CA 94103',
  phone: '(415) 890-2483',
  email: 'hello@bitecraft.com',
  hours: [
    { days: 'Monday – Thursday', time: '11:00 AM – 10:00 PM' },
    { days: 'Friday – Saturday', time: '11:00 AM – 11:30 PM' },
    { days: 'Sunday', time: '11:30 AM – 9:30 PM' }
  ],
  socials: [
    { name: 'Instagram', url: '#instagram', handle: '@bitecraft' },
    { name: 'TikTok', url: '#tiktok', handle: '@bitecraftfood' },
    { name: 'Facebook', url: '#facebook', handle: '/bitecraftofficial' },
    { name: 'YouTube', url: '#youtube', handle: 'BiteCraft Kitchens' }
  ]
};

export const TRUST_BADGES = [
  {
    title: 'Fresh Ingredients',
    description: 'Farm-to-kitchen organic produce and prime meats selected daily.',
    icon: 'Leaf'
  },
  {
    title: 'Fast Delivery',
    description: 'Thermal-insulated transport keeping meals hot in 25–35 minutes.',
    icon: 'Clock'
  },
  {
    title: 'Quality You Can Taste',
    description: 'Small-batch artisanal preparation with zero artificial preservatives.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Loved by Foodies',
    description: 'Over 12,000+ happy diners with a verified 4.9/5 star satisfaction rate.',
    icon: 'HeartHandshake'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'why-1',
    title: 'Fresh Ingredients',
    description: 'Only quality ingredients go into every bite.',
    details: 'We partner with local sustainable farms and certified butchers to bring uncompromised freshness to your plate every single morning.',
    icon: 'Sparkles',
    color: '#ff5c26'
  },
  {
    id: 'why-2',
    title: 'Made Fresh',
    description: 'Every order is prepared fresh for you.',
    details: 'No heat lamps or pre-packaged trays. From the smash of the patty to the toss of the pasta, your meal is created on demand.',
    icon: 'Flame',
    color: '#f59e0b'
  },
  {
    id: 'why-3',
    title: 'Fast Delivery',
    description: 'Hot, fresh food delivered to your door.',
    details: 'Our hyper-local logistics and specialized thermal containers ensure crisp buns, stretchy cheese, and piping-hot goodness upon arrival.',
    icon: 'Zap',
    color: '#ef4444'
  },
  {
    id: 'why-4',
    title: 'Quality First',
    description: 'We never compromise on taste or quality.',
    details: 'Master chef-crafted recipes, rigorous temperature standards, and artisanal touches make every BiteCraft dish memorable.',
    icon: 'Award',
    color: '#eab308'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Sarah M.',
    role: 'Food Blogger & Verified Diner',
    location: 'Mission District, SF',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 days ago',
    review: 'Absolutely delicious! The burger was fresh, juicy and arrived hot. The caramelized shallots and signature sauce blew me away. 10/10 will order every week.',
    dishOrdered: 'Signature Smash Burger',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Ahmed K.',
    role: 'Local Resident & Regular',
    location: 'SoMa, SF',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '5 days ago',
    review: 'The pasta was incredible. Real Parmigiano-Reggiano cream sauce with that silky authentic Italian texture. Arrived within 25 minutes flat. Definitely ordering again!',
    dishOrdered: 'Creamy Alfredo Pasta',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Elena R.',
    role: 'Creative Director',
    location: 'Hayes Valley, SF',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '1 week ago',
    review: 'Ordered the Crispy Chicken Burger and Margherita Pizza for family movie night. Crust was blistered to perfection and the chicken stayed crunchy even in delivery. BiteCraft is on another level.',
    dishOrdered: 'Crispy Chicken Burger & Margherita',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Marcus D.',
    role: 'Tech Lead & Foodie',
    location: 'Potrero Hill, SF',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '2 weeks ago',
    review: 'The Loaded Chicken Fries and Truffle Burger are pure culinary gold. Packaging is eco-friendly and thoughtful, keeping everything crisp without soggy condensation.',
    dishOrdered: 'Loaded Chicken Fries',
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-burger',
    title: 'Signature Angus Burger',
    category: 'Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85',
    caption: 'Double-smashed prime patties sizzled on high-temp cast iron with molten cheddar cheese.',
    tag: 'Smash Perfection'
  },
  {
    id: 'gal-pizza',
    title: 'Wood-Fired Margherita',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=1000&q=85',
    caption: '72-hour cold fermented dough baked at 850°F with sweet San Marzano tomato coulis.',
    tag: 'Artisan Crust'
  },
  {
    id: 'gal-pasta',
    title: 'Velvety Fettuccine Alfredo',
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=1000&q=85',
    caption: 'Handmade fresh egg pasta tossed in 24-month aged Parmigiano and sweet farm cream.',
    tag: 'Handmade Daily'
  },
  {
    id: 'gal-chicken',
    title: 'Golden Buttermilk Chicken',
    category: 'Chicken',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=1000&q=85',
    caption: '24-hour spiced buttermilk marinade with our proprietary 11-spice herb crunch coating.',
    tag: 'Crispy & Juicy'
  },
  {
    id: 'gal-fries',
    title: 'Loaded Cheddar & Herb Fries',
    category: 'Fries',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=1000&q=85',
    caption: 'Crisp hand-cut russets showered in sea salt, melted cheeses, and savory toppings.',
    tag: 'Ultimate Crunch'
  },
  {
    id: 'gal-dessert',
    title: 'Warm Molten Lava Cake',
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85',
    caption: 'Valrhona single-origin dark chocolate cake with an oozing rich molten fudge center.',
    tag: 'Sweet Indulgence'
  },
  {
    id: 'gal-drinks',
    title: 'Handcrafted Mocktails & Coolers',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=85',
    caption: 'Botanical infusions, fresh citrus juices, and cold-pressed passionfruit sparkling coolers.',
    tag: 'Craft Beverages'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you offer delivery?',
    answer: 'Yes! We offer direct delivery across the greater metropolitan area within an 8-mile radius. All meals are delivered in specialized insulated thermal packaging to keep hot items piping warm and cold items chilled.'
  },
  {
    id: 'faq-2',
    question: 'How long does delivery take?',
    answer: 'Standard delivery orders arrive in approximately 25 to 35 minutes depending on traffic and kitchen volume. You will receive live SMS/in-app order tracking from kitchen prep to doorstep handover.'
  },
  {
    id: 'faq-3',
    question: 'Can I customize my order?',
    answer: 'Absolutely. You can add special instructions for any item when adding it to your cart or during checkout (such as extra sauce, no onions, gluten-friendly modifications, or dressing on the side).'
  },
  {
    id: 'faq-4',
    question: 'Do you offer vegetarian options?',
    answer: 'Yes! We have an extensive range of delicious vegetarian dishes clearly marked on our menu, including our Classic Margherita Pizza, Creamy Alfredo Pasta, Truffle Herb Fries, and artisanal drinks.'
  },
  {
    id: 'faq-5',
    question: 'What payment methods do you accept?',
    answer: 'We accept Cash on Delivery (COD), all major Credit/Debit Cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, and contactless online checkout.'
  },
  {
    id: 'faq-6',
    question: 'Can I cancel my order?',
    answer: 'Orders can be cancelled free of charge within 5 minutes of placement before our chefs begin preparation. Simply contact support or use your order confirmation page to request a change.'
  },
  {
    id: 'faq-7',
    question: 'Do you offer special deals?',
    answer: 'Yes! First-time customers get 20% OFF their first order with promo code BITECRAFT20. We also feature free delivery on all orders over $35 and weekly chef tasting promotions.'
  },
  {
    id: 'faq-8',
    question: 'How can I contact customer support?',
    answer: 'Our dedicated customer hospitality team is available daily from 10:00 AM to 11:30 PM via live chat, email at hello@bitecraft.com, or direct phone line at (415) 890-2483.'
  }
];
