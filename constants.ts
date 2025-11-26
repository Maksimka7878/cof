import { CoffeeItem, Ingredient, Location, ProcessStep } from './types';

export const MENU_ITEMS: CoffeeItem[] = [
  {
    id: '1',
    name: 'Obsidian Espresso',
    description: 'Single origin Ethiopian beans, extracted at high pressure for a rich, crema-topped finish.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
    tags: ['Strong', 'Classic', 'Rich']
  },
  {
    id: '2',
    name: 'Velvet Latte',
    description: 'Silky micro-foam milk poured over our signature espresso blend with a hint of vanilla.',
    price: 6.00,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800',
    tags: ['Smooth', 'Sweet', 'Popular']
  },
  {
    id: '3',
    name: 'Midnight Cold Brew',
    description: 'Steeped for 24 hours in cold filtered water. Ultra-smooth, low acidity, high caffeine.',
    price: 5.50,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?auto=format&fit=crop&q=80&w=800',
    tags: ['Cold', 'Strong', 'Refreshing']
  },
  {
    id: '4',
    name: 'Caramel Macchiato',
    description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle.',
    price: 6.50,
    image: 'https://images.unsplash.com/photo-1485808191679-5f8c7c41f7bc?auto=format&fit=crop&q=80&w=800',
    tags: ['Sweet', 'Indulgent']
  }
];

export const INGREDIENTS: Ingredient[] = [
  { id: 'espresso', name: 'Espresso Shot', color: '#3e2723', icon: '☕' },
  { id: 'milk', name: 'Steamed Milk', color: '#fff8e1', icon: '🥛' },
  { id: 'oat', name: 'Oat Milk', color: '#efebe9', icon: '🌾' },
  { id: 'foam', name: 'Micro Foam', color: '#ffffff', icon: '☁️' },
  { id: 'ice', name: 'Ice Cubes', color: '#e0f7fa', icon: '🧊' },
  { id: 'caramel', name: 'Caramel Drizzle', color: '#ffb74d', icon: '🍯' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: '01',
    title: 'The Selection',
    description: 'We source exclusively from high-altitude micro-lots in Ethiopia and Colombia. Only the top 1% of beans make the cut.',
    image: 'https://images.unsplash.com/photo-1524350876685-274059332603?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '02',
    title: 'The Roast',
    description: 'Roasted in small batches in our Berlin facility. We use data-driven profiles to unlock the unique floral notes of every harvest.',
    image: 'https://images.unsplash.com/photo-1568283626159-459800c14b30?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: '03',
    title: 'The Extraction',
    description: 'Precision brewing at 93°C. Whether it’s espresso or pour-over, we respect the chemistry of the bean.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e7385a861?auto=format&fit=crop&q=80&w=1200'
  }
];

export const LOCATIONS: Location[] = [
  {
    id: 'ny',
    city: 'New York',
    address: '142 Mercer St, SoHo',
    coordinates: '40.72° N, 74.00° W',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'ldn',
    city: 'London',
    address: '45 Redchurch St, Shoreditch',
    coordinates: '51.52° N, 0.07° W',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'tky',
    city: 'Tokyo',
    address: '2-16-11 Aobadai, Meguro',
    coordinates: '35.65° N, 139.69° E',
    image: 'https://images.unsplash.com/photo-1559419788-b223d6501166?auto=format&fit=crop&q=80&w=1600'
  }
];