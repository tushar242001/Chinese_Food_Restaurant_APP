import React from 'react';

interface HeroProps {
  onOrderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-slow-zoom"
        style={{ 
          backgroundImage: 'url("https://picsum.photos/1920/1080?random=1")',
          filter: 'brightness(0.4)'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-4 inline-block">
          <span className="text-lotus-gold tracking-[0.5em] uppercase text-sm font-bold border-b border-lotus-gold pb-1">Est. 1985</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Culinary Artistry <br />
          <span className="italic font-light text-lotus-gold">Redefined</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Embark on a gastronomic journey through the provinces of China, where ancient techniques meet contemporary elegance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onOrderClick}
            className="px-8 py-4 bg-lotus-red text-white font-bold tracking-widest uppercase hover:bg-red-800 transition-colors shadow-lg rounded-sm"
          >
            Explore Menu
          </button>
          <button 
            className="px-8 py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-lotus-black transition-colors rounded-sm"
          >
            Book a Table
          </button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-50">
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
      </div>
    </div>
  );
};
