import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img
            src="/manus-storage/QRALogo_24986d40.jpeg"
            alt="QRA Strategies LLC"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-foreground hover:text-accent font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-foreground hover:text-accent font-medium transition-colors">
            About
          </Link>
          <Link href="/services" className="text-foreground hover:text-accent font-medium transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-foreground hover:text-accent font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-accent font-medium transition-colors block"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-accent font-medium transition-colors block"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-accent font-medium transition-colors block"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-foreground hover:text-accent font-medium transition-colors block"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
