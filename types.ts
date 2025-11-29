export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Appetizers' | 'Mains' | 'Dim Sum' | 'Dessert' | 'Drinks';
  spicyLevel: 0 | 1 | 2 | 3; // 0 = none, 3 = very spicy
  isVegetarian: boolean;
  imageSeed: number; // For picsum
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export type MenuCategory = MenuItem['category'];