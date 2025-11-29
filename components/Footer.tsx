import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif font-bold text-white tracking-wider">
              GOLDEN <span className="text-lotus-gold">LOTUS</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-xs">
              Experience authentic flavors and modern culinary artistry in the heart of the city.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-lotus-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-lotus-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-lotus-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Contact</h3>
            <div className="flex items-start gap-3 text-sm">
              <MapPin size={18} className="text-lotus-gold mt-1 flex-shrink-0" />
              <span>123 Dragon Way, Chinatown District<br />San Francisco, CA 94108</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={18} className="text-lotus-gold flex-shrink-0" />
              <span>(555) 888-9999</span>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Hours</h3>
            <div className="flex gap-3 text-sm">
              <Clock size={18} className="text-lotus-gold flex-shrink-0 mt-1" />
              <ul className="space-y-1">
                <li className="flex justify-between w-40"><span>Mon - Thu:</span> <span>11am - 9pm</span></li>
                <li className="flex justify-between w-40 text-white font-bold"><span>Fri - Sat:</span> <span>11am - 10pm</span></li>
                <li className="flex justify-between w-40"><span>Sun:</span> <span>12pm - 9pm</span></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-900 mt-12 pt-8 text-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Golden Lotus Bistro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
