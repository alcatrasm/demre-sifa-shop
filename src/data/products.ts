
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'macun' | 'krem' | 'yag';
  image: string;
  isSpecial?: boolean;
  shortDescription: string;
  description: string;
  ingredients: string;
  benefits: string;
  usage: string;
  sideEffects: string;
}

export const products: Product[] = [
  {
    id: 'akciger-detoks',
    name: 'Akciğer Detoks',
    price: 550,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
    shortDescription: 'Akciğer sağlığını destekleyen ve doğal detoksifikasyon süreçlerine yardımcı olan macun.',
    description: 'Bu macun, akciğer sağlığını desteklemeye ve vücudun doğal detoksifikasyon süreçlerine yardımcı olmak amacıyla formüle edilmiştir. Özellikle çevresel faktörlere maruz kalan bireyler veya genel akciğer sağlığını korumak isteyenler için faydalı olabilir.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: Keçiboynuzu pekmezi, zencefil, zerdeçal, çam kozalağı, meyan kökü.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Genel faydalar: Solunum yollarının rahatlamasına yardımcı olma, akciğerlerin toksinlerden arınmasına destek.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi. Genellikle: Sabah ve akşam aç karnına bir tatlı kaşığı.',
    sideEffects: 'Hamile veya emziren kadınlar, kronik hastalığı olanlar doktora danışmalıdır. İçeriklere bağlı alerjik reaksiyonlar görülebilir.'
  },
  {
    id: 'cep-herkulu',
    name: 'Cep Herkülü',
    price: 1000,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
    shortDescription: 'Enerji ve zindelik vermeye yönelik, performansı destekleyici güçlü takviye.',
    description: 'İsmi "Cep Herkülü" olan bu macun, enerji ve zindelik vermeye yönelik, performansı destekleyici, pratik ve güçlü bir takviye olarak konumlandırılmıştır. Yoğun tempolu yaşam tarzına sahip bireyler için ideal.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Bu tür ürünler genellikle ginseng, epimedyum, arı sütü, polen içerebilir.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Artan enerji seviyeleri, gelişmiş fiziksel ve zihinsel performans.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi. Genellikle ihtiyaç duyulduğunda küçük bir miktar.',
    sideEffects: 'Uyarıcı bitkiler içeriyorsa kalp atış hızında artış görülebilir. Kalp rahatsızlığı olanlar doktor tavsiyesi almalıdır.'
  },
  {
    id: 'pembe-macun',
    name: 'Pembe Macun',
    price: 949,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop',
    shortDescription: 'Kadın sağlığına yönelik veya rahatlama sağlayıcı özel formülasyon.',
    description: '"Pembe Macun" ismi, genellikle kadın sağlığına yönelik veya rahatlama, cilt güzelliği gibi belirli bir estetik ya da duygusal fayda ile ilişkilendirilen bir ürünü çağrıştırabilir.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Hormonal denge, cilt sağlığı için formüle edilmiş olabilir.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Kadın sağlığına yönelik faydalar, cilt yenilenmesi olabilir.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi.',
    sideEffects: 'ÖNEMLİ: Bu ürünle ilgili yan etki bildirimi yapılmıştır. Alerjik reaksiyonlara karşı dikkatli olunmalı, hamile ve emziren kadınlar doktorlarına danışmalıdır.'
  },
  {
    id: 'turuncu-macun',
    name: 'Turuncu Macun',
    price: 1100,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    shortDescription: 'Canlı rengiyle enerji, canlılık ve bağışıklık sistemi desteği sağlayan macun.',
    description: '"Turuncu Macun", canlı rengiyle enerji, canlılık ve bağışıklık sistemi desteği gibi faydaları çağrıştırabilir. Premium konumlandırması kalite ve etkinlik vurgusu yapar.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: Zerdeçal, portakal kabuğu özleri, yalancı iğde, zencefil, bal.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Bağışıklık güçlendirme, antioksidan etki, enerji artışı.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi.',
    sideEffects: 'İçeriklere göre değişebilir; narenciye alerjisi olanlar dikkatli olmalıdır.'
  },
  {
    id: 'beyaz-macun',
    name: 'Beyaz Macun',
    price: 849,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
    shortDescription: 'Saflık ve yatıştırıcı özellikler içeren, sindirim sistemi sağlığına destek.',
    description: '"Beyaz Macun", saflık, yatıştırıcı özellikler veya beyaz renkte bir macun oluşturabilecek içeriklerle ilişkili faydaları akla getirebilir. Sindirim sistemi sağlığı veya sakinleştirici etkiler için formüle edilmiş olabilir.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: Beyaz dut pekmezi, salep, meyan kökü.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Mide rahatlatıcı, sindirime yardımcı, cilt yatıştırıcı.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi.',
    sideEffects: 'Şirket tarafından doğrulanması gereken bilgi.'
  },
  {
    id: 'hemoroid-macun',
    name: 'Hemoroid (Basur) Macun',
    price: 379,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
    shortDescription: 'Hemoroid semptomlarını yatıştırmaya ve rahatlama sağlamaya odaklanır.',
    description: 'Hemoroid (basur) semptomlarını yatıştırmaya ve rahatlama sağlamaya odaklanan bir macundur. Geleneksel kullanımı ve konfor sağlayıcı özellikleri vurgulanmıştır.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: At kestanesi, cadı fındığı, aynısefa, papatya.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Bölgesel rahatlama, kaşıntı ve yanma hissinin azalmasına yardımcı olma.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi.',
    sideEffects: 'İçeriklere bağlı olarak mide rahatsızlıkları veya alerjik reaksiyonlar görülebilir.'
  },
  {
    id: 'ozel-mide-macunu',
    name: 'Özel El Yapımı Mide Macunu',
    price: 389,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
    isSpecial: true,
    shortDescription: 'Sindirim konforu sağlamak için özel el yapımı tarifle hazırlanmış.',
    description: '"Özel El Yapımı" vurgusuyla, bu macunun sindirim konforu sağlamaya, mideyi yatıştırmaya yönelik geleneksel bir tarifle hazırlandığı belirtilmiştir. El yapımı olmasının getirdiği özen ve doğallık ön plana çıkarılmıştır.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: Kudret narı, kantaron, meyan kökü, papatya, nane, zencefil, bal.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Mide ekşimesi ve yanmasını hafifletme, sindirimi kolaylaştırma.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi. Genellikle yemeklerden önce veya sonra.',
    sideEffects: 'Şirket tarafından doğrulanması gereken bilgi.'
  },
  {
    id: 'prostat-macunu',
    name: 'Prostat-Prostatit Macunu',
    price: 949,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop',
    shortDescription: 'Erkeklerde idrar yolları ve prostat sağlığını desteklemeye odaklanır.',
    description: 'Erkeklerde idrar yolları ve prostat sağlığını desteklemeye odaklanan bir macundur. Normal fonksiyonların desteklenmesi ve konforun artırılması vurgulanmıştır.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: Cüce palmiye, ısırgan otu kökü, kabak çekirdeği.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Prostat sağlığının korunmasına yardımcı olma, idrar akışını rahatlatma.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi.',
    sideEffects: 'Bazı bitkisel içerikler hormonal etkileşimlere neden olabilir, ilaç kullananlar doktorlarına danışmalıdır.'
  },
  {
    id: 'zayiflama-macunu',
    name: 'Zayıflama Macunu',
    price: 550,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    shortDescription: 'Metabolizmayı destekleyerek sağlıklı kilo yönetimine yardımcı olur.',
    description: 'Metabolizmayı desteklemeye, sağlıklı kilo yönetimi hedeflerine diyet ve egzersizle birlikte yardımcı olmaya odaklanılmıştır. Sağlıklı yaşam tarzının bir parçası olarak konumlandırılmıştır.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: Yeşil çay, mate yaprağı, biberiye, funda yaprağı.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Metabolizmayı hızlandırmaya yardımcı olma, iştah kontrolüne destek.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi.',
    sideEffects: 'Uyarıcı içerikler varsa çarpıntı, uykusuzluk yapabilir. Kronik hastalığı olanlar doktor tavsiyesi almalıdır.'
  },
  {
    id: 'ozel-hayit-macunu',
    name: 'Özel El Yapımı Hayıt Macunu',
    price: 359,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
    isSpecial: true,
    shortDescription: 'Kadınların hormonal dengesi için geleneksel hayıt tohumuyla hazırlanmış.',
    description: '"Özel El Yapımı" vurgusuyla, hayıt tohumunun geleneksel olarak kadınların hormonal dengesi, adet öncesi sendromu (PMS) ve menopoz semptomları için kullanıldığı belirtilmiştir.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Ana içerik: Hayıt tohumu/ekstresi. Yardımcı maddeler: Bal, pekmez.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Adet döngüsünün düzenlenmesine yardımcı olma, PMS semptomlarını hafifletme.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi. Genellikle düzenli ve uzun süreli kullanım önerilir.',
    sideEffects: 'Hormonal etkileri olabileceğinden hamileler, emzirenler ve hormon tedavisi görenler doktorlarına danışmalıdır.'
  },
  {
    id: 'karaciger-macunu',
    name: 'Karaciğer Macunu',
    price: 899,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
    shortDescription: 'Karaciğer sağlığını destekleyen ve doğal detoksifikasyon süreçlerine yardımcı.',
    description: 'Karaciğer sağlığını desteklemeye ve vücudun doğal detoksifikasyon süreçlerine yardımcı olmaya odaklanılmıştır. Karaciğer fonksiyonlarının genel sağlık için önemi vurgulanmıştır.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: Enginar, devedikeni tohumu, zerdeçal, karahindiba.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Karaciğer fonksiyonlarını destekleme, safra üretimini artırmaya yardımcı olma.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi.',
    sideEffects: 'Safra taşı olanlar veya safra yolları tıkalı olanlar doktorlarına danışmalıdır.'
  },
  {
    id: 'standart-performans-macunu',
    name: 'Standart Performans Macunu',
    price: 1000,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop',
    shortDescription: 'Günlük enerji ve dayanıklılık için destekleyici performans macunu.',
    description: '"Standart" ifadesi daha genel bir günlük canlılık arttırıcı olduğunu düşündürmektedir. Günlük enerji ve dayanıklılık için destekleyici olduğu belirtilmiştir.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Olası içerikler: Ginseng, guarana, demir dikeni, keçiboynuzu.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Genel enerji seviyelerini artırma, fiziksel ve zihinsel yorgunluğu azaltma.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi.',
    sideEffects: 'Uyarıcı içerikler nedeniyle kalp rahatsızlığı olanlar veya yüksek tansiyonu olanlar dikkatli kullanmalıdır.'
  },
  {
    id: 'karadutlu-sadrazam-power',
    name: 'Karadutlu Sadrazam Power',
    price: 1500,
    category: 'macun',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
    shortDescription: 'En premium ürün - karadut özlü güçlü performans macunu.',
    description: '"Karadut" içeriği antioksidan zenginliğini çağrıştırır. "Sadrazam Power" ismi çok güçlü, tarihi ilhamla geliştirilmiş, erkek performansına yönelik üst düzey bir ürünü işaret eder. En premium ürünümüzdür.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Ana içerik: Karadut özü/pekmezi. Diğer olası içerikler: Afrodizyak bitkiler, değerli baharatlar.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Üst düzey cinsel performans artışı, maksimum enerji ve dayanıklılık.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi. Muhtemelen özel durumlarda veya düşük dozlarda düzenli kullanım.',
    sideEffects: 'Çok güçlü bir formülasyon olduğu için potansiyel yan etkiler konusunda dikkatli olunmalı, özellikle kalp ve tansiyon hastaları doktor onayı almalıdır.'
  },
  {
    id: 'agri-kremi',
    name: 'Ağrı Kremi',
    price: 599,
    category: 'krem',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
    shortDescription: 'Kas ve eklem ağrılarını hafifletmeye yardımcı topikal krem.',
    description: 'Kas ve eklem ağrılarını hafifletmeye yardımcı olmak üzere tasarlanmış topikal bir kremdir. Spor yaralanmaları, günlük tutulmalar, romatizmal ağrılar veya kronik ağrı durumlarında rahatlama sağlayabilir.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. Yaygın içerikler: Mentol, kafur, kapsaisin, arnika, nane yağı, okaliptüs yağı.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Beklenen faydalar: Kas ve eklem ağrılarını yatıştırma, bölgedeki inflamasyonu azaltmaya yardımcı olma.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi. Tipik olarak: Etkilenen bölgeye ince tabaka halinde sürülür ve nazikçe masaj yapılır.',
    sideEffects: 'Ciltte tahriş, kızarıklık, alerjik reaksiyon. Kullanmadan önce küçük bir alanda test yapılması önerilir.'
  },
  {
    id: 'soguk-pres-corek-otu-yagi',
    name: 'Soğuk Pres Çörek Otu Yağı',
    price: 750,
    category: 'yag',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
    shortDescription: 'Bağışıklık sistemi desteği için %100 soğuk pres çörek otu yağı.',
    description: 'Çörek otu yağının sayısız faydasına odaklanılmış, soğuk pres yönteminin besin değerlerini koruduğu vurgulanmıştır. Bağışıklık sistemi desteği, anti-inflamatuar özellikleri için kullanılır.',
    ingredients: 'Şirket tarafından doğrulanması gereken bilgi. İdeal olarak: %100 Soğuk Pres Çörek Otu Yağı - Nigella Sativa.',
    benefits: 'Şirket tarafından doğrulanması gereken bilgi. Çörek Otu Yağının bilinen faydaları: Bağışıklık sistemini güçlendirici, anti-inflamatuar, antioksidan.',
    usage: 'Şirket tarafından doğrulanması gereken bilgi. Dahili: Genellikle günde 1 tatlı kaşığı. Harici: Cilde veya saça uygulanabilir.',
    sideEffects: 'Bazı bireylerde sindirim rahatsızlığına neden olabilir. Belirli ilaçlarla etkileşime girebilir. Hamile kadınlar doktora danışmalıdır.'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4);
};
