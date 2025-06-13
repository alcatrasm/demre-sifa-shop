
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { getProductById } from '../data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/products" replace />;
  }

  const product = getProductById(id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const categoryLabels = {
    macun: 'Macun',
    krem: 'Krem',
    yag: 'Yağ'
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
            {product.isSpecial && (
              <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-600">
                Özel El Yapımı
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge variant="secondary" className="mb-2">
                {categoryLabels[product.category]}
              </Badge>
              <h1 className="text-3xl font-bold text-green-800 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-green-600 mb-4">
                {product.shortDescription}
              </p>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-green-700">
                {product.price.toLocaleString('tr-TR')} ₺
              </span>
            </div>

            <div className="mb-6">
              <WhatsAppButton 
                productName={product.name}
                className="w-full"
              />
            </div>

            {/* Quick Info */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-3">Hızlı Bilgi</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ %100 Doğal İçerikler</li>
                <li>✓ Kimyasal Katkı Maddesi Yok</li>
                <li>✓ Geleneksel Yöntemlerle Hazırlanmış</li>
                <li>✓ WhatsApp ile Kolay Sipariş</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="description">Açıklama</TabsTrigger>
              <TabsTrigger value="ingredients">İçerik</TabsTrigger>
              <TabsTrigger value="benefits">Faydalar</TabsTrigger>
              <TabsTrigger value="usage">Kullanım</TabsTrigger>
              <TabsTrigger value="warnings">Uyarılar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Ürün Açıklaması</h3>
                <p className="text-green-700 leading-relaxed">{product.description}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="ingredients" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Ürün İçeriği</h3>
                <p className="text-green-700 leading-relaxed">{product.ingredients}</p>
                {product.ingredients.includes('Şirket tarafından doğrulanması gereken bilgi') && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                    <p className="text-amber-700 text-sm">
                      <strong>Not:</strong> Bu bilgiler şirket tarafından doğrulanması gereken bilgilerdir. 
                      Kesin içerik listesi için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="benefits" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Ürünün Faydaları</h3>
                <p className="text-green-700 leading-relaxed">{product.benefits}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-blue-700 text-sm">
                    <strong>Önemli:</strong> Bu ürün hastalıkları tedavi etmez. Sağlıklı yaşam tarzının 
                    destekleyicisi olarak kullanılmalıdır. Ciddi sağlık sorunları için doktorunuza danışın.
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="usage" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Kullanım Talimatları</h3>
                <p className="text-green-700 leading-relaxed">{product.usage}</p>
              </div>
            </TabsContent>
            
            <TabsContent value="warnings" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Uyarılar ve Yan Etkiler</h3>
                <p className="text-green-700 leading-relaxed">{product.sideEffects}</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-red-700 text-sm">
                    <strong>Genel Uyarı:</strong> Hamile ve emziren kadınlar, kronik hastalığı olanlar, 
                    düzenli ilaç kullananlar mutlaka doktorlarına danışmalıdır. Herhangi bir yan etki 
                    durumunda kullanımı bırakın ve sağlık profesyonelinize başvurun.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Order Section */}
        <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            {product.name} Sipariş Etmek İster misiniz?
          </h3>
          <p className="text-green-700 mb-6">
            WhatsApp üzerinden hızla sipariş verebilir, ürün hakkında detaylı bilgi alabilirsiniz.
          </p>
          <WhatsAppButton 
            productName={product.name}
            className="mx-auto"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
