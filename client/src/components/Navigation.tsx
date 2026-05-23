import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="nav-container">
        {/* Logo */}
        <a href="/" className="logo">
          <img
            src="/QRALogo.jpeg"
            alt="QRA Strategies LLC: Quality Management System Buildout, Regulatory Compliance, and Submissions"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Get in Touch</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu open">
          <div className="mobile-menu-content">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
            <a href="/about" onClick={closeMenu}>
              About
            </a>
            <a href="/services" onClick={closeMenu}>
              Services
            </a>
            <a href="/contact" onClick={closeMenu}>
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
