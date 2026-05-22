import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src="/manus-storage/QRALogo_24986d40.jpeg"
              alt="QRA Strategies LLC"
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <a href="/" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors duration-200">
              Home
            </a>
            <a href="/contact" className="px-4 py-2 text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors duration-200">
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-1">
            <a href="/" onClick={closeMenu} className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors">
              Home
            </a>
            <a href="/contact" onClick={closeMenu} className="block px-4 py-2 text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 rounded-md transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
