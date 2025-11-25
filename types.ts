export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'ring' | 'necklace' | 'earrings' | 'bracelet';
  image: string;
  description: string;
  metal: 'Platinum' | '18k Gold' | 'Rose Gold';
  stone?: 'Diamond' | 'Sapphire' | 'Emerald';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export interface FilterState {
  category: string | null;
  minPrice: number;
  maxPrice: number;
}