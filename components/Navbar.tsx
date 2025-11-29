import React, { useState, useEffect } from 'react';
import { ViewState } from '../App';
import { Menu as MenuIcon, X, ChefHat } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, onOpenChat }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled ? 'bg-lotus-black/95 shadow-lg border-b border-lotus-gold/20 py-2' : 'bg-transparent py-6'
  }`;

  const linkClass = (view: ViewState) => `
    cursor-pointer font-bold tracking-widest text-sm uppercase transition-colors duration-200
    ${currentView === view ? 'text-lotus-gold' : 'text-white hover:text-lotus-gold'}
  `;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <span className="text-3xl mr-2 group-hover:animate-spin-slow">🥢</span>
            <div>
              <h1 className="text-2xl font-serif font-bold text-white tracking-wider">
                GOLDEN <span className="text-lotus-gold">LOTUS</span>
              </h1>
              <p className="text-xs text-gray-400 tracking-[0.2em] uppercase hidden sm:block">Modern Chinese Bistro</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <span onClick={() => onNavigate('home')} className={linkClass('home')}>Home</span>
            <span onClick={() => onNavigate('menu')} className={linkClass('menu')}>Menu</span>
            <span onClick={() => onNavigate('about')} className={linkClass('about')}>Our Story</span>
            
            <button 
              onClick={onOpenChat}
              className="flex items-center gap-2 px-5 py-2 border border-lotus-red text-lotus-red rounded hover:bg-lotus-red hover:text-white transition-colors uppercase font-bold text-xs tracking-wider"
            >
              <ChefHat size={16} />
              <span>Ask Chef</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-lotus-gold focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-lotus-black border-t border-gray-800 animate-slide-down">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div onClick={() => {onNavigate('home'); setIsMobileMenuOpen(false)}} className="block px-3 py-2 text-white font-bold uppercase hover:text-lotus-gold">Home</div>
            <div onClick={() => {onNavigate('menu'); setIsMobileMenuOpen(false)}} className="block px-3 py-2 text-white font-bold uppercase hover:text-lotus-gold">Menu</div>
            <div onClick={() => {onNavigate('about'); setIsMobileMenuOpen(false)}} className="block px-3 py-2 text-white font-bold uppercase hover:text-lotus-gold">Our Story</div>
            <div onClick={() => {onOpenChat(); setIsMobileMenuOpen(false)}} className="block px-3 py-2 text-lotus-red font-bold uppercase cursor-pointer">
              Ask Chef AI
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
