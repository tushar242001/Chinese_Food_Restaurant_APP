import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: 'a1',
    name: 'Crispy Spring Rolls',
    description: 'Golden fried rolls stuffed with cabbage, carrots, and glass noodles. Served with sweet chili sauce.',
    price: 8,
    category: 'Appetizers',
    spicyLevel: 0,
    isVegetarian: true,
    imageSeed: 101
  },
  {
    id: 'a2',
    name: 'Szechuan Wontons',
    description: 'Delicate pork and shrimp wontons tossed in our signature spicy chili oil vinaigrette.',
    price: 12,
    category: 'Appetizers',
    spicyLevel: 2,
    isVegetarian: false,
    imageSeed: 102
  },
  {
    id: 'a3',
    name: 'Cucumber Salad',
    description: 'Smashed cucumber marinated in garlic, vinegar, and sesame oil.',
    price: 9,
    category: 'Appetizers',
    spicyLevel: 1,
    isVegetarian: true,
    imageSeed: 103
  },

  // Dim Sum
  {
    id: 'd1',
    name: 'Har Gow (Crystal Shrimp Dumplings)',
    description: 'Translucent steamed dumplings filled with whole shrimp and bamboo shoots.',
    price: 10,
    category: 'Dim Sum',
    spicyLevel: 0,
    isVegetarian: false,
    imageSeed: 201
  },
  {
    id: 'd2',
    name: 'Pork Siu Mai',
    description: 'Open-faced steamed dumplings filled with ground pork, shrimp, and shiitake mushrooms.',
    price: 9,
    category: 'Dim Sum',
    spicyLevel: 0,
    isVegetarian: false,
    imageSeed: 202
  },
  {
    id: 'd3',
    name: 'BBQ Pork Buns (Char Siu Bao)',
    description: 'Fluffy steamed buns filled with sweet and savory slow-roasted BBQ pork.',
    price: 9,
    category: 'Dim Sum',
    spicyLevel: 0,
    isVegetarian: false,
    imageSeed: 203
  },

  // Mains
  {
    id: 'm1',
    name: 'Kung Pao Chicken',
    description: 'Wok-tossed chicken cubes with peanuts, vegetables, and chili peppers in a savory, spicy sauce.',
    price: 18,
    category: 'Mains',
    spicyLevel: 2,
    isVegetarian: false,
    imageSeed: 301
  },
  {
    id: 'm2',
    name: 'Mapo Tofu',
    description: 'Soft tofu simmered in a fiery bean-based sauce with ground pork and Szechuan peppercorns. (Vegetarian option available)',
    price: 16,
    category: 'Mains',
    spicyLevel: 3,
    isVegetarian: false, // Default has pork
    imageSeed: 302
  },
  {
    id: 'm3',
    name: 'Beef with Broccoli',
    description: 'Tender slices of beef stir-fried with fresh broccoli in a rich oyster sauce glaze.',
    price: 19,
    category: 'Mains',
    spicyLevel: 0,
    isVegetarian: false,
    imageSeed: 303
  },
  {
    id: 'm4',
    name: 'Peking Duck (Half)',
    description: 'Crispy skin duck served with steamed pancakes, scallions, and hoisin sauce.',
    price: 32,
    category: 'Mains',
    spicyLevel: 0,
    isVegetarian: false,
    imageSeed: 304
  },
  {
    id: 'm5',
    name: 'Buddha\'s Delight',
    description: 'A medley of fresh seasonal vegetables, tofu, and mushrooms stir-fried in a light white sauce.',
    price: 16,
    category: 'Mains',
    spicyLevel: 0,
    isVegetarian: true,
    imageSeed: 305
  },

  // Desserts
  {
    id: 'ds1',
    name: 'Mango Pudding',
    description: 'Silky smooth mango pudding topped with evaporated milk.',
    price: 7,
    category: 'Dessert',
    spicyLevel: 0,
    isVegetarian: true,
    imageSeed: 401
  },
  {
    id: 'ds2',
    name: 'Sesame Balls',
    description: 'Crispy sticky rice balls filled with red bean paste and coated in sesame seeds.',
    price: 6,
    category: 'Dessert',
    spicyLevel: 0,
    isVegetarian: true,
    imageSeed: 402
  }
];
