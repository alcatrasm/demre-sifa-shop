
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getFeaturedProducts } from '../data/products';
import { Leaf, Shield, Heart, Star } from 'lucide-react';

const Index = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
              Şifa Dünyası Demre
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-4">
              Doğanın İyileştirici Gücü Kapınızda
            </p>
            <p className="text-lg text-green-600 mb-8 max-w-2xl mx-auto">
              Demre'nin kalbinden, el emeğiyle hazırlanan doğal yaşam reçeteleri. 
              Geleneksel şifa yöntemleriyle modern yaşama sağlıklı çözümler sunuyoruz.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Ürünlerimizi Keşfedin
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            Öne Çıkan Ürünlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Tüm Ürünleri Görüntüle →
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            Ürün Kategorilerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products?category=macun" className="group">
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Macunlarımız</h3>
                <p className="text-green-600">
                  Geleneksel tariflerle hazırlanan, doğal bileşenlerden oluşan 
                  güçlü macun formülasyonları.
                </p>
              </div>
            </Link>

            <Link to="/products?category=krem" className="group">
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Özel Kremlerimiz</h3>
                <p className="text-green-600">
                  Cilt sağlığı ve rahatlama için özel olarak formüle edilmiş 
                  doğal krem çözümleri.
                </p>
              </div>
            </Link>

            <Link to="/products?category=yag" className="group">
              <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Doğal Yağlarımız</h3>
                <p className="text-green-600">
                  Soğuk pres yöntemiyle elde edilen, besin değerleri korunmuş 
                  saf doğal yağlar.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Doğal İçerikler</h3>
              <p className="text-green-600">
                %100 doğal bileşenlerle, kimyasal katkı maddesi olmadan hazırlanmıştır.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">El Yapımı Üretim</h3>
              <p className="text-green-600">
                Geleneksel yöntemlerle, el emeğiyle özenle hazırlanmış ürünler.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">Geleneksel Reçeteler</h3>
              <p className="text-green-600">
                Demre'nin kadim bilgisiyle, nesillerce aktarılan şifa reçeteleri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">
            Neden Şifa Dünyası Demre?
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto mb-8">
            Demre'nin bereketli topraklarından ve kadim bilgisinden ilham alarak, 
            geleneksel şifa yöntemlerini modern yaşama taşıyoruz. Her ürünümüz, 
            doğallık ve kalite prensipleriyle el emeğiyle hazırlanır.
          </p>
          <Link
            to="/about"
            className="text-green-600 hover:text-green-700 font-semibold"
          >
            Daha Fazla Bilgi →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
