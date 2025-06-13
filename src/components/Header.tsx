
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-700" />
            <div className="text-xl font-bold text-green-800">
              Şifa Dünyası Demre
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-foreground hover:text-green-700 transition-colors font-medium"
            >
              Anasayfa
            </Link>
            <Link 
              to="/products" 
              className="text-foreground hover:text-green-700 transition-colors font-medium"
            >
              Ürünlerimiz
            </Link>
            <Link 
              to="/about" 
              className="text-foreground hover:text-green-700 transition-colors font-medium"
            >
              Hakkımızda
            </Link>
            <Link 
              to="/how-to-order" 
              className="text-foreground hover:text-green-700 transition-colors font-medium"
            >
              Nasıl Sipariş Verilir?
            </Link>
            <Link 
              to="/contact" 
              className="text-foreground hover:text-green-700 transition-colors font-medium"
            >
              İletişim
            </Link>
          </nav>

          {/* WhatsApp Contact Button */}
          <a
            href="https://wa.me/905449199720"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            WhatsApp İletişim
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-accent"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-green-700 transition-colors font-medium py-2"
              >
                Anasayfa
              </Link>
              <Link 
                to="/products" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-green-700 transition-colors font-medium py-2"
              >
                Ürünlerimiz
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-green-700 transition-colors font-medium py-2"
              >
                Hakkımızda
              </Link>
              <Link 
                to="/how-to-order" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-green-700 transition-colors font-medium py-2"
              >
                Nasıl Sipariş Verilir?
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground hover:text-green-700 transition-colors font-medium py-2"
              >
                İletişim
              </Link>
              <a
                href="https://wa.me/905449199720"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium w-fit"
              >
                WhatsApp İletişim
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
