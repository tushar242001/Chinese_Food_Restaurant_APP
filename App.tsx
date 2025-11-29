import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { AIChef } from './components/AIChef';
import { Footer } from './components/Footer';

// Define the views available in the SPA
export type ViewState = 'home' | 'menu' | 'about';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  // Helper to scroll to top when changing views
  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-lotus-black text-white font-sans selection:bg-lotus-red selection:text-white">
      <Navbar 
        currentView={currentView} 
        onNavigate={handleViewChange} 
        onOpenChat={() => setIsAIChatOpen(true)}
      />
      
      <main className="flex-grow pt-20">
        {currentView === 'home' && (
          <div className="animate-fade-in">
            <Hero onOrderClick={() => handleViewChange('menu')} />
            {/* Featured Section (Preview of Menu) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-lotus-gold mb-4">A Taste of Tradition</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Experience the vibrant flavors of Szechuan and Cantonese cuisine, reimagined with modern techniques and the freshest local ingredients.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative group overflow-hidden rounded-lg shadow-xl border border-gray-800">
                    <img 
                      src={`https://picsum.photos/600/400?random=${i + 10}`} 
                      alt="Featured Dish" 
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">Chef's Special #{i}</h3>
                      <p className="text-sm text-gray-300">Hand-pulled noodles with savory chili oil.</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                 <button 
                  onClick={() => handleViewChange('menu')}
                  className="px-8 py-3 bg-transparent border border-lotus-gold text-lotus-gold hover:bg-lotus-gold hover:text-lotus-black transition-colors font-bold tracking-wide uppercase"
                >
                  View Full Menu
                </button>
              </div>
            </div>
          </div>
        )}

        {currentView === 'menu' && (
          <Menu />
        )}

        {currentView === 'about' && (
          <div className="max-w-4xl mx-auto px-4 py-16 text-center animate-fade-in">
            <h2 className="text-4xl font-serif text-lotus-gold mb-8">Our Story</h2>
            <img src="https://picsum.photos/1200/600?random=99" alt="Restaurant Interior" className="w-full h-96 object-cover rounded-lg shadow-2xl mb-12" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Founded in 1985, Golden Lotus Bistro started as a humble dumpling cart. Today, we are proud to serve authentic Chinese cuisine that honors our heritage while embracing the future.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our master chefs use century-old recipes passed down through generations, ensuring every bite tells a story of culture, passion, and culinary excellence.
            </p>
          </div>
        )}
      </main>

      <Footer />

      {/* Floating Action Button for AI Chef if closed */}
      {!isAIChatOpen && (
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="fixed bottom-6 right-6 bg-lotus-red text-white p-4 rounded-full shadow-2xl hover:bg-red-700 transition-transform hover:scale-105 z-40 flex items-center gap-2 group border-2 border-lotus-gold"
          aria-label="Ask the Chef"
        >
          <span className="text-xl">🧑‍🍳</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold">
            Ask Chef AI
          </span>
        </button>
      )}

      {/* AI Chef Modal */}
      <AIChef isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </div>
  );
}