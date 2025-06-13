
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, CreditCard, Truck, CheckCircle } from 'lucide-react';

const HowToOrder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
            Sipariş Sürecimiz
          </h1>
          
          <p className="text-lg text-green-700 text-center mb-12">
            Şifa Dünyası Demre ürünlerini sipariş etmek çok kolay! 
            Aşağıdaki adımları takip ederek hızlıca siparişinizi verebilirsiniz.
          </p>

          {/* Steps */}
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <MessageCircle className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">
                    Ürün Seçin ve WhatsApp Butonuna Tıklayın
                  </h3>
                </div>
                <p className="text-green-700">
                  Beğendiğiniz ürünün sayfasındaki "WhatsApp ile Sipariş Ver" butonuna tıklayın. 
                  Otomatik olarak hazırlanan mesaj +90 544 919 97 20 numaralı WhatsApp hattımıza gönderilecektir.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">
                    Sipariş Teyidi ve Teslimat Bilgileri
                  </h3>
                </div>
                <p className="text-green-700">
                  Siparişinizi teyit etmek ve teslimat detaylarınızı (Ad, Soyad, Adres, Telefon) 
                  bildirmek için sizinle WhatsApp üzerinden iletişime geçeceğiz.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 p-6 bg-amber-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <CreditCard className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">
                    Ödeme Bilgileri
                  </h3>
                </div>
                <p className="text-green-700">
                  Ödeme için size IBAN numaramızı ileteceğiz. Lütfen ürün bedelini 
                  banka havalesi/EFT yoluyla bu hesaba gönderin.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-6 w-6 text-purple-600 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">
                    Ödeme Dekontunu Paylaşın
                  </h3>
                </div>
                <p className="text-green-700">
                  Ödeme dekontunuzu WhatsApp üzerinden bizimle paylaşın. 
                  Bu sayede siparişinizi hızlıca işleme alabilir.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center mb-2">
                  <Truck className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-semibold text-green-800">
                    Kargo ve Teslimat
                  </h3>
                </div>
                <p className="text-green-700">
                  Ödemeniz onaylandıktan sonra siparişiniz hazırlanacak ve en kısa sürede 
                  kargoya verilecektir. Kargo takip bilgisi sizinle paylaşılacaktır.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Ödeme ve Kargo Hakkında
              </h3>
              <ul className="space-y-2 text-green-700">
                <li>• Ödeme sadece banka havalesi/EFT ile kabul edilmektedir.</li>
                <li>• Kapıda ödeme hizmetimiz bulunmamaktadır.</li>
                <li>• Kargo ücreti sipariş tutarına göre hesaplanır ve size bildirilir.</li>
                <li>• Türkiye'nin her yerine kargo gönderilebilir.</li>
                <li>• Normal koşullarda kargo süresi 2-5 iş günüdür.</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                İletişim Yöntemlerimiz
              </h3>
              <p className="text-green-700 mb-3">
                Sorularınız ve siparişleriniz için bizimle yalnızca WhatsApp ve Instagram 
                üzerinden iletişime geçebilirsiniz. Telefon aramaları veya SMS ile 
                iletişim hizmetimiz bulunmamaktadır.
              </p>
              <div className="space-y-2">
                <div>
                  <strong className="text-green-800">WhatsApp:</strong>
                  <a 
                    href="https://wa.me/905449199720" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 ml-2"
                  >
                    +90 544 919 97 20
                  </a>
                </div>
                <div>
                  <strong className="text-green-800">Instagram:</strong>
                  <a 
                    href="https://instagram.com/sifadunyasidemre" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 ml-2"
                  >
                    @sifadunyasidemre
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Hemen Alışverişe Başlayın!
            </h3>
            <p className="text-green-700 mb-6">
              Doğal ürünlerimizi keşfedin ve sağlıklı yaşama adım atın.
            </p>
            <a
              href="/products"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Ürünleri İncele
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowToOrder;
