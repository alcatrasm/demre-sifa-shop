
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Leaf, Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            Şifa Dünyası Demre'nin Hikayesi
          </h1>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Demre'nin bereketli topraklarından doğan, geleneksel şifa yöntemleriyle 
            modern yaşama sağlık getiren bir marka hikayesi.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
              alt="Demre'nin doğal güzellikleri"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-800">Biz Kimiz?</h2>
            <p className="text-green-700 leading-relaxed">
              Şifa Dünyası Demre, Antalya'nın tarihi Demre ilçesinin kadim bilgisinden 
              ve doğal zenginliklerinden ilham alarak kurulmuş bir doğal ürünler markasıdır. 
              Demre, antik çağlardan beri şifalı bitkileri ve doğal kaynakları ile ünlü 
              bir bölge olmuştur.
            </p>
            <p className="text-green-700 leading-relaxed">
              Amacımız, nesillerce aktarılan geleneksel şifa reçetelerini modern yaşamla 
              buluşturarak, doğal ve sağlıklı yaşam alternatiflerini kapınıza kadar getirmektir. 
              Her ürünümüz, el emeği ve özveriye dayalı geleneksel yöntemlerle hazırlanır.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Doğallık</h3>
            <p className="text-green-600 text-sm">
              Ürünlerimizde sadece doğal bileşenler kullanır, kimyasal katkı maddelerinden 
              uzak dururuz.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">El Emeği</h3>
            <p className="text-green-600 text-sm">
              Her ürünümüz özenle, geleneksel yöntemlerle el emeğiyle hazırlanır ve 
              sevgiyle sunulur.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Kalite</h3>
            <p className="text-green-600 text-sm">
              En yüksek kalite standartlarını benimser, her aşamada titizlikle 
              çalışırız.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Güven</h3>
            <p className="text-green-600 text-sm">
              Müşterilerimizle samimi ve güvenilir bir ilişki kurarak, uzun soluklu 
              bağlar oluştururuz.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Misyonumuz</h3>
            <p className="text-green-700 leading-relaxed">
              Demre'nin kadim şifa bilgisini modern yaşamla buluşturarak, insanların 
              doğal ve sağlıklı yaşam tarzlarını benimsemeleri için onlara destek olmak. 
              Geleneksel reçetelerle hazırlanan ürünlerimizle, herkesin doğanın iyileştirici 
              gücünden faydalanabilmesini sağlamak.
            </p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Vizyonumuz</h3>
            <p className="text-green-700 leading-relaxed">
              Türkiye'nin ve dünyanın her yerindeki insanlara ulaşarak, doğal yaşam 
              felsefesini yaygınlaştırmak. Geleneksel şifa yöntemlerinin modern bilimle 
              harmanlandığı, güvenilir ve kaliteli ürünler üreten öncü bir marka olmak.
            </p>
          </div>
        </div>

        {/* El Yapımı Process */}
        <div className="bg-white border border-green-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
            "Özel El Yapımı" Ürünlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🌿</div>
              <h4 className="font-semibold text-green-800 mb-2">Özenle Seçilmiş Hammaddeler</h4>
              <p className="text-green-600 text-sm">
                En kaliteli doğal hammaddeleri özenle seçer, kaynağından emin olduğumuz 
                bileşenleri kullanırız.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">👐</div>
              <h4 className="font-semibold text-green-800 mb-2">Geleneksel Yöntemler</h4>
              <p className="text-green-600 text-sm">
                Nesillerce aktarılan geleneksel hazırlama yöntemleriyle, 
                ürünlerimizi el emeğiyle hazırlarız.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">❤️</div>
              <h4 className="font-semibold text-green-800 mb-2">Sevgiyle Hazırlanır</h4>
              <p className="text-green-600 text-sm">
                Her ürünümüz, sizlere fayda getirmesi dileğiyle sevgiyle ve özenle 
                hazırlanır, özel ambalajlarla sunulur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
