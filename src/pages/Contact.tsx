
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
            Bize Ulaşın
          </h1>
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* WhatsApp */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MessageCircle className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-semibold text-green-800">WhatsApp</h2>
              </div>
              <p className="text-green-700 mb-4">
                En hızlı iletişim yöntemi. Sipariş ve sorularınız için bizi arayın.
              </p>
              <a
                href="https://wa.me/905449199720"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                +90 544 919 97 20
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Instagram className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-semibold text-green-800">Instagram</h2>
              </div>
              <p className="text-green-700 mb-4">
                Ürün paylaşımlarımızı takip edin ve mesaj gönderin.
              </p>
              <a
                href="https://instagram.com/sifadunyasidemre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                @sifadunyasidemre
              </a>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-green-800 mb-3">
              Önemli Bilgilendirme
            </h3>
            <p className="text-green-700">
              Sorularınız ve siparişleriniz için bizimle <strong>yalnızca WhatsApp ve Instagram</strong> 
              üzerinden iletişime geçebilirsiniz. Telefon aramaları veya SMS ile iletişim 
              hizmetimiz bulunmamaktadır.
            </p>
          </div>

          {/* Business Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-800">Lokasyon</h3>
              </div>
              <p className="text-green-700">
                Demre, Antalya<br />
                Türkiye
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold text-green-800">Mesai Saatleri</h3>
              </div>
              <p className="text-green-700">
                Pazartesi - Cumartesi: 09:00 - 18:00<br />
                Pazar: Kapalı
              </p>
              <p className="text-green-600 text-sm mt-2">
                WhatsApp mesajlarınız 24 saat içinde yanıtlanır.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
              Sıkça Sorulan Sorular
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white border border-green-100 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">
                  Siparişimi nasıl takip edebilirim?
                </h4>
                <p className="text-green-700">
                  Siparişiniz kargoya verildikten sonra kargo takip numarası 
                  WhatsApp üzerinden sizinle paylaşılacaktır.
                </p>
              </div>

              <div className="bg-white border border-green-100 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">
                  Ürünler ne kadar sürede elime ulaşır?
                </h4>
                <p className="text-green-700">
                  Normal koşullarda ödeme onayından sonra 2-5 iş günü içinde 
                  siparişiniz elinize ulaşır.
                </p>
              </div>

              <div className="bg-white border border-green-100 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">
                  İade politikanız nedir?
                </h4>
                <p className="text-green-700">
                  Ürün kusuru durumunda WhatsApp üzerinden bizimle iletişime geçebilirsiniz. 
                  Her durum ayrı ayrı değerlendirilir.
                </p>
              </div>

              <div className="bg-white border border-green-100 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">
                  Ürünleriniz kimler tarafından kullanılabilir?
                </h4>
                <p className="text-green-700">
                  Ürünlerimizin kullanımı konusunda detaylı bilgi için WhatsApp üzerinden 
                  danışabilirsiniz. Hamile, emziren kadınlar ve kronik hastalığı olanlar 
                  mutlaka doktorlarına danışmalıdır.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              Hala Sorunuz mu Var?
            </h3>
            <p className="text-green-700 mb-6">
              WhatsApp üzerinden bize ulaşın, size yardımcı olmaktan mutluluk duyarız.
            </p>
            <a
              href="https://wa.me/905449199720"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp ile İletişime Geç
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
