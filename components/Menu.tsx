import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory } from '../types';
import { Flame, Leaf } from 'lucide-react';

const CATEGORIES: MenuCategory[] = ['Appetizers', 'Dim Sum', 'Mains', 'Dessert'];

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Mains');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-lotus-black min-h-screen py-16 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-lotus-gold mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-lotus-red mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-lotus-gold text-lotus-black border-lotus-gold font-bold' 
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-lotus-gold hover:text-lotus-gold'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
          {filteredItems.map(item => (
            <div key={item.id} className="group flex flex-col sm:flex-row gap-6 items-start">
              {/* Image */}
              <div className="w-full sm:w-40 h-40 flex-shrink-0 overflow-hidden rounded-md border border-gray-800">
                <img 
                  src={`https://picsum.photos/300/300?random=${item.imageSeed}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex justify-between items-baseline border-b border-gray-800 pb-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-lotus-gold transition-colors font-serif">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-lotus-gold ml-4">${item.price}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="flex gap-3">
                  {item.spicyLevel > 0 && (
                    <span className="inline-flex items-center text-xs text-red-400 font-bold border border-red-900/50 bg-red-900/10 px-2 py-1 rounded">
                      <Flame size={12} className="mr-1" /> 
                      {Array(item.spicyLevel).fill('🌶️').join('')}
                    </span>
                  )}
                  {item.isVegetarian && (
                    <span className="inline-flex items-center text-xs text-green-400 font-bold border border-green-900/50 bg-green-900/10 px-2 py-1 rounded">
                      <Leaf size={12} className="mr-1" /> Veg
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
