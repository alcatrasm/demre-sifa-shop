
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-50 border-t border-green-100 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-700" />
              <div className="text-xl font-bold text-green-800">
                Şifa Dünyası Demre
              </div>
            </div>
            <p className="text-green-700 mb-4 max-w-md">
              Doğanın İyileştirici Gücü Kapınızda. Demre'nin kalbinden, 
              doğal yaşam reçeteleri ile sağlıklı yaşama destek oluyoruz.
            </p>
            <p className="text-sm text-green-600">
              © 2024 Şifa Dünyası Demre. Tüm hakları saklıdır.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-green-800 mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-700 hover:text-green-800 transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-green-700 hover:text-green-800 transition-colors">
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-700 hover:text-green-800 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/how-to-order" className="text-green-700 hover:text-green-800 transition-colors">
                  Nasıl Sipariş Verilir?
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-700 hover:text-green-800 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-green-800 mb-4">İletişim</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-green-600 mb-1">WhatsApp:</p>
                <a 
                  href="https://wa.me/905449199720" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800 transition-colors font-medium"
                >
                  +90 544 919 97 20
                </a>
              </div>
              <div>
                <p className="text-sm text-green-600 mb-1">Instagram:</p>
                <a 
                  href="https://instagram.com/sifadunyasidemre" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-800 transition-colors font-medium"
                >
                  @sifadunyasidemre
                </a>
              </div>
              <p className="text-xs text-green-600 mt-4">
                Sadece WhatsApp ve Instagram ile iletişim kurulabilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
