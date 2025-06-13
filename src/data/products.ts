
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
    image: 'https://eygbilisim.com/sifa/akciger-detoks.png',
    shortDescription: 'Akciğer sağlığını destekleyen ve doğal detoksifikasyon süreçlerine yardımcı olan macun.',
    description: 'Akciğer sağlığını desteklemek ve vücudun doğal detoksifikasyon süreçlerine yardımcı olmak amacıyla özel olarak formüle edilmiştir. Sigara dumanı, hava kirliliği gibi çevresel faktörlere maruz kalan bireyler ve genel akciğer sağlığını korumak isteyenler için idealdir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Keçiboynuzu pekmezi, zencefil, zerdeçal, çam kozalağı, meyan kökü, hatmi çiçeği, doğal bal.',
    benefits: 'Solunum yollarının rahatlamasına yardımcı olur, akciğerlerin toksinlerden arınmasına destek sağlar, bağışıklık sistemini güçlendirir, balgam söktürücü özellik gösterir.',
    usage: 'Sabah ve akşam aç karnına bir tatlı kaşığı alınır. Su veya ılık süt ile karıştırılarak da tüketilebilir.',
    sideEffects: 'Hamile ve emziren kadınlar, kronik hastalığı olanlar kullanmadan önce doktora danışmalıdır. İçeriklere karşı alerjik reaksiyon gelişebilir.'
  },
  {
    id: 'cep-herkulu',
    name: 'Cep Herkülü',
    price: 1000,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/cep-herkulu.png',
    shortDescription: 'Enerji ve zindelik vermeye yönelik, performansı destekleyici güçlü takviye.',
    description: 'Enerji ve zindelik vermeye yönelik, performansı destekleyici, pratik ve güçlü bir takviyedir. Yoğun tempolu yaşam tarzına sahip bireyler, sporcular ve ekstra enerjiye ihtiyaç duyanlar için ideal bir seçenektir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Ginseng, epimedyum, arı sütü, polen, keçiboynuzu, zencefil, tarçın, karanfil, doğal bal.',
    benefits: 'Enerji seviyelerini artırır, fiziksel ve zihinsel performansı geliştirir, libido desteği sağlar, genel canlılığı artırır, yorgunluğu azaltır.',
    usage: 'İhtiyaç duyulduğunda veya düzenli olarak bir çay kaşığı miktarında tüketilir. Sabah alınması önerilir.',
    sideEffects: 'Uyarıcı bitkiler içerdiği için kalp atış hızında artış olabilir. Kalp rahatsızlığı olanlar doktor tavsiyesi olmadan kullanmamalıdır.'
  },
  {
    id: 'pembe-macun',
    name: 'Pembe Macun',
    price: 949,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/pembe-macun.png',
    shortDescription: 'Kadın sağlığına yönelik özel formülasyon.',
    description: 'Kadın sağlığına yönelik özel olarak geliştirilmiş formülasyondur. Hormonal denge, cilt güzelliği ve genel kadın sağlığı için destekleyici özelliklere sahiptir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Gül yaprakları, hibiskus, şeftali özü, arı sütü, polen, E vitamini, doğal pembe boyar maddeler.',
    benefits: 'Hormonal dengeye katkı sağlar, cilt yenilenmesini destekler, kadın sağlığına özel faydalar sunar, antioksidan etkisi gösterir.',
    usage: 'Günde bir kez, bir tatlı kaşığı miktarında tüketilir. Tercihen sabah aç karnına alınır.',
    sideEffects: 'Alerjik reaksiyonlara karşı dikkatli olunmalıdır. Hamile ve emziren kadınlar doktora danışmalıdır. Bu ürünle ilgili bildirilen yan etki durumları için kullanım öncesi dikkatli değerlendirme yapılmalıdır.'
  },
  {
    id: 'turuncu-macun',
    name: 'Turuncu Macun',
    price: 1100,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/turuncu-macun.png',
    shortDescription: 'Canlı rengiyle enerji, canlılık ve bağışıklık sistemi desteği sağlayan macun.',
    description: 'Canlı turuncu rengiyle enerji, canlılık ve bağışıklık sistemi desteği sağlayan premium bir macundur. Yüksek antioksidan içeriği ve doğal enerji verici özellikleriye öne çıkar. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Zerdeçal, portakal kabuğu özü, mandalina özü, yalancı iğde, zencefil, bal, C vitamini, beta karoten.',
    benefits: 'Bağışıklık sistemini güçlendirir, güçlü antioksidan etki gösterir, enerji seviyelerini artırır, cilt sağlığına katkı sağlar, anti-enflamatuar özellik gösterir.',
    usage: 'Günde bir kez, bir tatlı kaşığı miktarında tüketilir. Aç karnına alınması daha etkilidir.',
    sideEffects: 'Narenciye alerjisi olanlar dikkatli kullanmalıdır. Aşırı tüketim mide rahatsızlığına neden olabilir.'
  },
  {
    id: 'beyaz-macun',
    name: 'Beyaz Macun',
    price: 849,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/beyaz-macun.png',
    shortDescription: 'Saflık ve yatıştırıcı özellikler içeren, sindirim sistemi sağlığına destek.',
    description: 'Saflığı ve yatıştırıcı özellikleriyle öne çıkan bu macun, sindirim sistemi sağlığı ve genel rahatlama için formüle edilmiştir. Hassas midelere uygun yumuşak formülasyona sahiptir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Beyaz dut pekmezi, salep, meyan kökü, papatya, nane, hindistan cevizi yağı, doğal beyaz bal.',
    benefits: 'Mideyi rahatlatır, sindirimi destekler, cildi yatıştırır, bağışıklık sistemini destekler, stres azaltıcı etki gösterir.',
    usage: 'Günde 1-2 kez, bir tatlı kaşığı miktarında tüketilir. Yemeklerden sonra alınabilir.',
    sideEffects: 'Genel olarak iyi tolere edilir. Aşırı tüketimden kaçınılmalıdır.'
  },
  {
    id: 'hemoroid-macun',
    name: 'Hemoroid (Basur) Macun',
    price: 379,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/hemoroid-macun.png',
    shortDescription: 'Hemoroid semptomlarını yatıştırmaya ve rahatlama sağlamaya odaklanır.',
    description: 'Hemoroid (basur) semptomlarını yatıştırmaya ve rahatlama sağlamaya odaklanan özel formülasyondur. Geleneksel bitkisel karışımlarla hazırlanmış, konfor sağlayıcı özelliklere sahiptir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'At kestanesi, cadı fındığı, aynısefa, papatya, aloe vera, meyan kökü, doğal bal.',
    benefits: 'Bölgesel rahatlama sağlar, kaşıntı ve yanma hissini azaltır, damar büzücü etki gösterir, enflamasyonu azaltmaya yardımcı olur.',
    usage: 'Günde 2 kez, bir tatlı kaşığı miktarında tüketilir. Düzenli kullanım önerilir.',
    sideEffects: 'İçeriklere bağlı olarak mide rahatsızlığı veya alerjik reaksiyonlar görülebilir. Kronik durumlarda doktor takibi önerilir.'
  },
  {
    id: 'ozel-mide-macunu',
    name: 'Özel El Yapımı Mide Macunu',
    price: 389,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/mide-macunu.png',
    isSpecial: true,
    shortDescription: 'Sindirim konforu sağlamak için özel el yapımı tarifle hazırlanmış.',
    description: 'Özel el yapımı tarifle hazırlanan bu macun, sindirim konforunu sağlamaya ve mideyi yatıştırmaya yönelik geleneksel formülasyona sahiptir. El emeği ve özenle üretilen premium bir üründür. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Kudret narı, kantaron, meyan kökü, papatya, nane, zencefil, bal, keçiboynuzu pekmezi.',
    benefits: 'Mide ekşimesi ve yanmasını hafifletir, sindirimi kolaylaştırır, gaz ve şişkinlik sorunlarına yardımcı olur, mide mukozasını korur.',
    usage: 'Yemeklerden 30 dakika önce veya sonra bir tatlı kaşığı miktarında alınır. Günde 2-3 kez kullanılabilir.',
    sideEffects: 'Genel olarak güvenlidir. Aşırı hassas midelerde dikkatli kullanılmalıdır.'
  },
  {
    id: 'prostat-macunu',
    name: 'Prostat-Prostatit Macunu',
    price: 949,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/prostat-macunu.png',
    shortDescription: 'Erkeklerde idrar yolları ve prostat sağlığını desteklemeye odaklanır.',
    description: 'Erkeklerde idrar yolları ve prostat sağlığını desteklemeye odaklanan özel formülasyondur. Normal prostat fonksiyonlarının desteklenmesi ve konforun artırılması için geliştirilmiştir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Cüce palmiye (saw palmetto), ısırgan otu kökü, kabak çekirdeği, yakı otu, brokoli özütü, çinko, likopen.',
    benefits: 'Prostat sağlığının korunmasına yardımcı olur, idrar akışını rahatlatır, gece idrara çıkma sıklığını azaltmaya destek sağlar, anti-enflamatuar etkiler gösterir.',
    usage: 'Günde 2 kez, bir tatlı kaşığı miktarında tüketilir. Düzenli kullanım önerilir.',
    sideEffects: 'Bazı bitkisel içerikler hormonal etkileşimlere neden olabilir. İlaç kullananlar doktorlarına danışmalıdır.'
  },
  {
    id: 'belly-burn-detoks',
    name: 'Belly Burn Detoks Zayıflama Çayı',
    price: 550,
    category: 'çay',
    image: 'https://eygbilisim.com/sifa/belly-burn-detoks.png',
    shortDescription: 'Vücuttaki toksinlerin atılmasına ve metabolizmayı desteklemeye yardımcı bitkisel detoks çayı.',
    description: 'Bu özel karışım, vücuttaki toksinlerin atılmasına yardımcı olmak ve metabolizmayı desteklemek için tasarlanmıştır. İçeriğindeki bitkiler sindirimi kolaylaştırabilir ve enerji seviyelerini artırabilir. Sağlıklı bir diyet ve düzenli egzersizle birlikte kilo yönetimi hedeflerinize ulaşmanıza destek olur. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Yeşil çay, mate yaprağı, biberiye, funda yaprağı, kiraz sapı, tarçın, zencefil, limon kabuğu, doğal aroma vericiler.',
    benefits: 'Metabolizmayı hızlandırmaya yardımcı olur, vücuttan toksinlerin atılmasına destek sağlar, sindirimi kolaylaştırır, enerji verir, iştah kontrolüne yardımcı olabilir.',
    usage: 'Günde 1-2 fincan, tercihen sabahları veya öğün aralarında tüketilir. Bir süzen poşet veya bir tatlı kaşığı çayı sıcak suya ekleyip 5-7 dakika demleyiniz.',
    sideEffects: 'Hamile ve emziren kadınlar, kronik rahatsızlığı olanlar veya düzenli ilaç kullananlar tüketmeden önce doktorlarına danışmalıdır. Aşırı tüketimden kaçınılmalıdır.'
  },
  {
    id: 'hayit-macunu',
    name: 'Hayıt Macunu',
    price: 359,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/hayit-macunu.png',
    isSpecial: true,
    shortDescription: 'Kadınların hormonal dengesi için geleneksel hayıt tohumuyla hazırlanmış.',
    description: 'Özel el yapımı tarifle hazırlanan bu macun, hayıt tohumunun (Vitex agnus-castus) geleneksel faydalarından yararlanır. Kadınların hormonal dengesi, adet öncesi sendromu ve menopoz semptomları için geliştirilmiştir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Hayıt tohumu ekstresi (Vitex agnus-castus), bal, keçiboynuzu pekmezi, tarçın, zencefil.',
    benefits: 'Adet döngüsünün düzenlenmesine yardımcı olur, PMS semptomlarını (gerginlik, ağrı) hafifletir, menopoz dönemindeki sıcak basması gibi şikayetleri azaltır, hormonal dengeye katkı sağlar.',
    usage: 'Günde bir kez, bir tatlı kaşığı miktarında alınır. Düzenli ve uzun süreli kullanım önerilir.',
    sideEffects: 'Hormonal etkileri nedeniyle hamile, emziren ve hormon tedavisi gören kadınlar doktorlarına danışmalıdır.'
  },
  {
    id: 'karaciger-macunu',
    name: 'Karaciğer Macunu',
    price: 899,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/karaciger-macunu.png',
    shortDescription: 'Karaciğer sağlığını destekleyen ve doğal detoksifikasyon süreçlerine yardımcı.',
    description: 'Karaciğer sağlığını desteklemeye ve vücudun doğal detoksifikasyon süreçlerine yardımcı olmaya odaklanmıştır. Karaciğer fonksiyonlarının genel sağlık için kritik önemi göz önünde bulundurularak formüle edilmiştir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Enginar özü, devedikeni tohumu, zerdeçal, karahindiba, şahtere otu, limon özü, doğal bal.',
    benefits: 'Karaciğer fonksiyonlarını destekler, safra üretimini ve akışını artırır, karaciğerin toksinlerden arınmasına yardımcı olur, güçlü antioksidan etki gösterir.',
    usage: 'Günde 2 kez, aç karnına bir tatlı kaşığı alınır. Düzenli kullanım önerilir.',
    sideEffects: 'Safra taşı olanlar veya safra yolları tıkalı olanlar doktorlarına danışmalıdır. Bazı bitkiler ilaçlarla etkileşime girebilir.'
  },
  {
    id: 'standart-performans-macunu',
    name: 'Standart Performans Macunu',
    price: 1000,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/standart-performans-macunu.png',
    shortDescription: 'Günlük enerji ve dayanıklılık için destekleyici performans macunu.',
    description: 'Günlük enerji ve dayanıklılık için destekleyici özellikler gösteren performans macunudur. Genel canlılık artırıcı olarak, fiziksel ve zihinsel yorgunlukla mücadelede etkilidir. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Ginseng, guarana, demir dikeni, keçiboynuzu, çeşitli baharatlar, arı ürünleri, B vitamin kompleksi.',
    benefits: 'Genel enerji seviyelerini artırır, fiziksel ve zihinsel yorgunluğu azaltır, dayanıklılığı destekler, cinsel performansa katkı sağlar, konsantrasyonu artırır.',
    usage: 'Günde bir kez, sabah aç karnına bir tatlı kaşığı alınır. Özel durumlarda doz artırılabilir.',
    sideEffects: 'Uyarıcı içerikler nedeniyle kalp rahatsızlığı veya yüksek tansiyonu olanlar dikkatli kullanmalıdır.'
  },
  {
    id: 'sadrazam-power',
    name: 'Karadutlu Sadrazam Power',
    price: 1500,
    category: 'macun',
    image: 'https://eygbilisim.com/sifa/sadrazam-power.png',
    shortDescription: 'En premium ürün - karadut özlü güçlü performans macunu.',
    description: 'Karadut özünün antioksidan zenginliği ile formüle edilen en premium ürünümüzdür. "Sadrazam Power" adıyla, erkek performansına ve genel canlılığa yönelik üst düzey etkiler sağlar. Benzersiz formülasyonu ve seçkin içerikleriyle öne çıkar. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Karadut özü, karadut pekmezi, özel afrodizyak bitki karışımı, ginseng, epimedyum, arı sütü, polen, değerli baharatlar, doğal vitaminler.',
    benefits: 'Üst düzey cinsel performans artışı sağlar, maksimum enerji ve dayanıklılık verir, güçlü antioksidan etki gösterir, genel sağlık ve zindeliği destekler, yaşlanma karşıtı etkiler gösterir.',
    usage: 'Özel durumlarda yarım çay kaşığı veya düzenli kullanım için günde bir kez çeyrek çay kaşığı alınır. Güçlü formülasyon nedeniyle dikkatli dozlama önerilir.',
    sideEffects: 'Çok güçlü formülasyon nedeniyle kalp ve tansiyon hastaları mutlaka doktor onayı almalıdır. Aşırı doz alınmamalıdır.'
  },
  {
    id: 'agri-kremi',
    name: 'Ağrı Kremi',
    price: 599,
    category: 'krem',
    image: 'https://eygbilisim.com/sifa/agri-kremi.png',
    shortDescription: 'Kas ve eklem ağrılarını hafifletmeye yardımcı topikal krem.',
    description: 'Kas ve eklem ağrılarını hafifletmeye yardımcı olmak üzere tasarlanmış topikal kremdir. Spor yaralanmaları, günlük tutulmalar, romatizmal ağrılar ve kronik ağrı durumlarında etkili rahatlama sağlar. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: 'Mentol, kafur, kapsaisin, arnika özü, nane yağı, okaliptüs yağı, karanfil yağı, glukozamin, MSM.',
    benefits: 'Kas ve eklem ağrılarını yatıştırır, bölgedeki enflamasyonu azaltır, kan dolaşımını artırır, ısıtıcı ve soğutucu etki sağlayarak rahatlama verir.',
    usage: 'Etkilenen bölgeye ince tabaka halinde sürülür ve nazikçe masaj yapılır. Günde 2-3 kez uygulanabilir. Uygulama sonrası eller yıkanmalıdır.',
    sideEffects: 'Ciltte tahriş, kızarıklık veya alerjik reaksiyon görülebilir. Kullanım öncesi küçük alanda test yapılması önerilir. Açık yaralara uygulanmamalıdır.'
  },
  {
    id: 'corekotu-yagi',
    name: 'Çörekotu Yağı',
    price: 750,
    category: 'yag',
    image: 'https://eygbilisim.com/sifa/corekotu-yagi.png',
    shortDescription: 'Bağışıklık sistemi desteği için %100 soğuk pres çörek otu yağı.',
    description: 'Çörek otu yağının (Nigella Sativa) sayısız faydasından yararlanmak için %100 soğuk pres yöntemiyle üretilmiştir. Soğuk pres yöntemi tüm besin değerlerini korur ve maksimum etkinlik sağlar. Görseller temsilidir. Ürün ambalajı yüksek oranda benzerlik içerecektir.',
    ingredients: '%100 Soğuk Pres Çörek Otu Yağı (Nigella Sativa). Hiçbir katkı maddesi ve taşıyıcı yağ içermez.',
    benefits: 'Bağışıklık sistemini güçlendirir, güçlü anti-enflamatuar etki gösterir, yoğun antioksidan sağlar, alerjilere yardımcı olur, cilt sağlığını destekler, solunum ve sindirim sağlığına faydalıdır.',
    usage: 'Dahili kullanım: Günde 1 tatlı kaşığı, tercihen aç karnına. Bal veya meyve suyu ile karıştırılabilir. Harici kullanım: Cilde veya saça masaj yapılarak uygulanır.',
    sideEffects: 'Bazı kişilerde sindirim rahatsızlığı yapabilir. Belirli ilaçlarla etkileşime girebilir. Cilde uygulamada hassas ciltlerde test yapılması önerilir. Hamile kadınlar doktora danışmalıdır.'
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
