
'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import MobileMenu from '../components/MobileMenu';
import QuoteForm from '../components/QuoteForm';
import WebsitePreview from '../components/WebsitePreview';
import CatalogPreview from '../components/CatalogPreview';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteFormOpen, setQuoteFormOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [catalogPreviewOpen, setCatalogPreviewOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedCatalog, setSelectedCatalog] = useState<any>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);
  const [activeTab, setActiveTab] = useState<'websites' | 'catalogs'>('websites');

  const testimonials = [
    {
      text: "Yaka & Co ile çalışmak harika bir deneyimdi. Profesyonel ve kaliteli hizmet aldık.",
      author: "Mehmet Yılmaz",
      company: "Lokanta Sahini",
      rating: 5
    },
    {
      text: "Web sitemiz sayesinde müşteri sayımız %200 arttı. Teşekkürler Yaka & Co!",
      author: "Ayşe Kaya", 
      company: "Butik Otel",
      rating: 5
    },
    {
      text: "Modern tasarım ve快速 teslimat. Kesinlikle tavsiye ederim.",
      author: "Can Demir",
      company: "Sanat Galerisi",
      rating: 5
    },
    {
      text: "SEO çalışmaları sayesinde Google'da ilk sıralardayız.",
      author: "Elif Özkan",
      company: "E-ticaret Sitesi",
      rating: 5
    }
  ];

  const services = [
    {
      icon: "ri-computer-line",
      title: "Web Sitesi Tasarımı",
      description: "Modern, responsive ve SEO uyumlu web siteleri. Markanızın dijital kimliğini güçlendirin.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "ri-shopping-cart-line", 
      title: "E-Ticaret Çözümleri",
      description: "Güvenli ödeme sistemleri ile entegre online mağaza kurulumu ve yönetimi.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: "ri-smartphone-line",
      title: "Mobil Uygulamalar",
      description: "iOS ve Android platformları için özel tasarlanmış mobil uygulamalar.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: "ri-seo-line",
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer alumno daha fazla müşteriye ulaşın.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: "ri-palette-line",
      title: "Grafik Tasarım",
      description: "Logo, katalog ve kurumsal kimlik tasarımı ile markanızı güçlendirin.",
      gradient: "from-pink-500 to-pink-600"
    },
    {
      icon: "ri-bar-chart-line",
      title: "Dijital Pazarlama",
      description: "Sosyal medya ve Google Ads yönetimi ile hedef kitlenize有效 şekilde ulaşın.",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Özaksa Tarım Makine Şanzımanları",
      category: "Sanayi",
      image: "https://readdy.ai/api/search-image?query=industrial%20agricultural%20machinery%20manufacturing%20website%20with%20professional%20layout%2C%20heavy%20machinery%20equipment%20showcase%2C%20blue%20and%20orange%20corporate%20colors%2C%20manufacturing%20plant%20background%2C%20technical%20engineering%20design&width=500&height=350&seq=ozaksa&orientation=landscape",
      description: "Tarım makineleri üretiminde uzman sanayi şirketinin kurumsal websitesi.",
      url: "https://test1-bo7e.vercel.app",
      type: "website"
    },
    {
      id: 2,
      title: "Lezzet Durağı Restaurant",
      category: "Restoran",
      image: "https://readdy.ai/api/search-image?query=elegant%20restaurant%20website%20interface%20with%20golden%20luxury%20touches%2C%20modern%20menu%20display%2C%20warm%20lighting%20background%20with%20premium%20food%20photography%2C%20sophisticated%20dining%20atmosphere%2C%20professional%20restaurant%20web%20design&width=500&height=350&seq=1&orientation=landscape",
      description: "Geleneksel Türk mutfağının modern sunumla buluştuğu özel restoran websitesi.",
      url: "#",
      type: "website"
    },
    {
      id: 3,
      title: "Elit Butik Otel & Spa",
      category: "Otelcilik",
      image: "https://readdy.ai/api/search-image?query=luxury%20boutique%20hotel%20website%20design%20with%20golden%20elegant%20elements%2C%20premium%20accommodation%20showcase%2C%20sophisticated%20hotel%20room%20interiors%2C%20upscale%20hospitality%20web%20interface%2C%20luxury%20travel%20experience&width=500&height=350&seq=2&orientation=landscape",
      description: "Lüks konaklama ve spa deneyimini yansıtan butik otel websitesi.",
      url: "#",
      type: "website"
    },
    {
      id: 4,
      title: "Modern Sanat Galerisi",
      category: "Sanat & Kültür",
      image: "https://readdy.ai/api/search-image?query=contemporary%20art%20gallery%20website%20with%20minimalist%20design%2C%20elegant%20artwork%20showcase%2C%20clean%20white%20background%20with%20golden%20accents%2C%20professional%20art%20exhibition%20presentation%2C%20modern%20gallery%20web%20interface&width=500&height=350&seq=3&orientation=landscape",
      description: "Çağdaş sanat eserlerini sergileyen modern galeri ve kültür merkezi websitesi.",
      url: "#",
      type: "website"
    },
    {
      id: 5,
      title: "Premium Moda Butik",
      category: "Moda & Tekstil",
      image: "https://readdy.ai/api/search-image?query=high-end%20fashion%20boutique%20website%20with%20luxury%20golden%20details%2C%20elegant%20clothing%20display%2C%20premium%20brand%20aesthetics%2C%20sophisticated%20fashion%20e-commerce%20design%2C%20upscale%20retail%20web%20interface&width=500&height=350&seq=4&orientation=landscape",
      description: "Yüksek kaliteli moda ürünleri ve tasarımcı koleksiyonları sunan butik websitesi.",
      url: "#",
      type: "website"
    },
    {
      id: 6,
      title: "Dijital Pazarlama Ajansı",
      category: "Teknoloji & Dijital",
      image: "https://readdy.ai/api/search-image?query=modern%20digital%20agency%20website%20with%20professional%20golden%20branding%2C%20tech%20services%20showcase%2C%20clean%20corporate%20design%2C%20business%20team%20presentation%2C%20digital%20marketing%20agency%20web%20interface&width=500&height=350&seq=5&orientation=landscape",
      description: "Dijital dönüşüm ve pazarlama hizmetleri sunan profesyonel ajans websitesi.",
      url: "#",
      type: "website"
    }
  ];

  const catalogItems = [
    {
      id: 13,
      title: "Özaksa Tarım Makineleri Katalogu",
      category: "Sanayi Katalog",
      image: "https://readdy.ai/api/search-image?query=industrial%20agricultural%20machinery%20catalog%20design%20with%20professional%20layout%2C%20heavy%20equipment%20brochure%2C%20technical%20specifications%2C%20blue%20and%20orange%20corporate%20colors%2C%20manufacturing%20catalog%20design&width=500&height=350&seq=catalog1&orientation=landscape",
      description: "Tarım makineleri ve şanzıman sistemleri için profesyonel ürün katalogu tasarımı.",
      pages: 24,
      type: "catalog",
      pdfUrl: "https://example.com/ozaksa-katalog.pdf"
    },
    {
      id: 14,
      title: "Luxury Hotel Katalog",
      category: "Otelcilik Katalog",
      image: "https://readdy.ai/api/search-image?query=luxury%20hotel%20catalog%20design%20with%20elegant%20golden%20touches%2C%20premium%20accommodation%20brochure%2C%20sophisticated%20hotel%20room%20showcase%2C%20upscale%20hospitality%20catalog%20presentation&width=500&height=350&seq=catalog2&orientation=landscape",
      description: "Lüks otel hizmetleri ve odaları için özel tasarlanmış katalog.",
      pages: 16,
      type: "catalog",
      pdfUrl: "https://example.com/hotel-katalog.pdf"
    },
    {
      id: 15,
      title: "Restaurant Menü Katalog",
      category: "Restoran Katalog",
      image: "https://readdy.ai/api/search-image?query=elegant%20restaurant%20menu%20catalog%20design%20with%20golden%20luxury%20touches%2C%20premium%20food%20photography%2C%20sophisticated%20menu%20layout%2C%20professional%20restaurant%20catalog%20presentation&width=500&height=350&seq=catalog3&orientation=landscape",
      description: "Geleneksel ve modern mutfak seçenekleri için özel menü katalog tasarımı.",
      pages: 12,
      type: "catalog",
      pdfUrl: "https://example.com/menu-katalog.pdf"
    },
    {
      id: 16,
      title: "Fashion Boutique Katalog",
      category: "Moda Katalog",
      image: "https://readdy.ai/api/search-image?query=high-end%20fashion%20catalog%20design%20with%20luxury%20golden%20details%2C%20elegant%20clothing%20showcase%2C%20premium%20brand%20catalog%2C%20sophisticated%20fashion%20brochure%20design&width=500&height=350&seq=catalog4&orientation=landscape",
      description: "Premium moda markası için yeni sezon koleksiyon katalogu.",
      pages: 32,
      type: "catalog",
      pdfUrl: "https://example.com/fashion-katalog.pdf"
    },
    {
      id: 17,
      title: "Otomotiv Servis Katalog",
      category: "Otomotiv Katalog",
      image: "https://readdy.ai/api/search-image?query=automotive%20service%20catalog%20design%20with%20modern%20car%20workshop%2C%20professional%20mechanics%2C%20auto%20parts%20catalog%2C%20automotive%20industry%20brochure%20design&width=500&height=350&seq=catalog5&orientation=landscape",
      description: "Otomotiv servis hizmetleri ve yedek parça katalog tasarımı.",
      pages: 20,
      type: "catalog",
      pdfUrl: "https://example.com/auto-katalog.pdf"
    },
    {
      id: 18,
      title: "İnşaat & Emlak Katalog",
      category: "İnşaat Katalog",
      image: "https://readdy.ai/api/search-image?query=construction%20and%20real%20estate%20catalog%20design%20with%20modern%20architecture%20projects%2C%20luxury%20residential%20buildings%2C%20professional%20construction%20brochure%2C%20urban%20development%20catalog&width=500&height=350&seq=catalog6&orientation=landscape",
      description: "İnşaat projeleri ve emlak portföyü için kurumsal katalog tasarımı.",
      pages: 28,
      type: "catalog",
      pdfUrl: "https://example.com/construction-katalog.pdf"
    }
  ];

  const pricingPlans = [
    {
      name: "Başlangıç",
      price: "₺2.500",
      originalPrice: "₺5.000",
      features: [
        "5 Sayfalık Web Sitesi",
        "Mobil Uyumlu Tasarım",
        "Temel SEO Optimizasyonu",
        "1 Yıl Hosting Dahil",
        "Email Desteği",
        "Google Analytics Kurulumu"
      ],
      isPopular: false,
      badge: "Ekonomik"
    },
    {
      name: "Profesyonel",
      price: "₺4.500", 
      originalPrice: "₺9.000",
      features: [
        "10 Sayfalık Web Sitesi",
        "E-Ticaret Modülü",
        "Gelişmiş SEO Paketi",
        "2 Yıl Hosting Dahil",
        "Google Analytics + Search Console",
        "Sosyal Medya Entegrasyonu",
        "7/24 Teknik Destek"
      ],
      isPopular: true,
      badge: "En Popüler"
    },
    {
      name: "Premium",
      price: "₺7.500",
      originalPrice: "₺15.000", 
      features: [
        "Sınırsız Sayfa",
        "Özel E-Ticaret Çözümü",
        "Premium SEO Paketi",
        "3 Yıl Hosting Dahil",
        "Detaylı Analiz Raporları",
        "Çoklu Dil Desteği",
        "Aylık Performans Toplantısı",
        "Öncelikli Destek"
      ],
      isPopular: false,
      badge: "Kurumsal"
    }
  ];

  const faqItems = [
    {
      question: "Web sitemi ne kadar sürede teslim alırım?",
      answer: "Proje kapsamına göre 5-15 iş günü içerisinde web sitenizi teslim ediyoruz. Basit web siteleri için 5-7 iş günü, e-ticaret ve kurumsal projeler için 10-15 iş günü süremiz almaktadır. Teslim tarihi proje başlangıcında netleştirilir."
    },
    {
      question: "Fiyatlara KDV ve ek ücretler dahil mi?",
      answer: "Belirtilen tüm fiyatlar KDV dahildir. Domain ve hosting ücretleri paket fiyatına dahildir. Ek modül talepleri için ayrıca fiyat teklifi sunulur. Gizli ücret bulunmamaktadır."
    },
    {
      question: "Web sitemi güncelleyebilecek miyim?",
      answer: "Elbette! Size özel admin paneli ile içeriklerinizi kolayca güncelleyebilirsiniz. Ayrıca ücretsiz eğitim videoları ve teknik destek sağlıyoruz. İlk 3 ay ücretsiz güncelleme desteği dahildir."
    },
    {
      question: "Hosting ve domain hizmeti dahil mi?",
      answer: "Evet, seçtiğiniz pakete göre 1-3 yıl hosting hizmeti dahildir. Domain için .com.tr uzantıları için destek sağlıyoruz. Yurt dışı uzantıları için ayrıca danışmanlık hizmeti veriyoruz."
    },
    {
      question: "Mobil uyumlu tasarım yapıyor musunuz?",
      answer: "Tüm web sitelerimiz responsive (mobil uyumlu) tasarlanır. Tablet, telefon ve masaüstü cihazlarda mükemmel görüntü garantisi veriyoruz. Mobil öncelikli tasarım yaklaşımı kullanıyoruz."
    },
    {
      question: "SEO çalışması dahil mi?",
      answer: "Temel SEO optimizasyonu tüm paketlerde dahildir. Profesyonel ve Premium paketlerde detaylı anahtar kelime analizi, meta etiket optimizasyonu ve Google Search Console kurulumu bulunur."
    }
  ];

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemPrefersDark);

    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleProjectPreview = (project: any) => {
    if (project.type === 'catalog') {
      setSelectedCatalog(project);
      setCatalogPreviewOpen(true);
    } else {
      setSelectedProject(project);
      setPreviewOpen(true);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleServiceClick = (service: any, index: number) => {
    setActiveService(index);
    alert(`${service.title} hakkında daha fazla bilgi için iletişime geçin!`);
  };

  const handlePortfolioAction = (action: string, item: any) => {
    if (action === 'preview') {
      handleProjectPreview(item);
    } else if (action === 'details') {
      alert(`${item.title} projesi hakkında detaylı bilgi için iletişime geçin!`);
    } else if (action === 'visit') {
      if (item.url && item.url !== '#') {
        window.open(item.url, '_blank');
      } else {
        alert('Bu proje demo amaçlıdır. Gerçek site henüz yayında değil.');
      }
    }
  };

  const handlePricingAction = (plan: any) => {
    const whatsappMessage = `Merhaba! ${plan.name} paketi hakkında bilgi almak istiyorum. Detayları paylaşabilir misiniz?`;
    window.open(`https://wa.me/905519649308?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleContactAction = (type: string) => {
    if (type === 'phone') {
      window.open('tel:+905519649308', '_blank');
    } else if (type === 'email') {
      window.open('mailto:yakaco@hotmail.com?subject=Web Sitesi Hakkında', '_blank');
    } else if (type === 'whatsapp') {
      window.open('https://wa.me/905519649308?text=Merhaba! Web sitesi hakkında bilgi almak istiyorum.', '_blank');
    } else if (type === 'appointment') {
      setAppointmentModalOpen(true);
    }
  };

  const currentItems = activeTab === 'websites' ? portfolioItems : catalogItems;
  const displayedItems = showAllPortfolio ? currentItems : currentItems.slice(0, 6);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <div className={`transition-all duration-500 ${isDarkMode ? 'dark bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white' : 'bg-gradient-to-b from-white via-gray-50 to-amber-50 text-gray-800'}`}>
        {/* Header */}
        <header className={`backdrop-blur-sm shadow-lg fixed w-full z-40 border-b transition-all duration-500 ${isDarkMode ? 'bg-black/90 border-amber-400/20' : 'bg-white/95 border-amber-100'}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src="https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png"
                    alt="Yaka & Co Logo"
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                  />
                  <div className="absolute inset-0 bg-amber-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
                </div>
                <span className="font-[\'Pacifico\'] text-xl text-amber-600 transition-all duration-300 group-hover:text-amber-500">Yaka & Co.</span>
              </div>
              <nav className="hidden lg:flex space-x-8">
                {[ 
                  { label: 'Hizmetler', id: 'services', icon: 'ri-service-line' },
                  { label: 'Portföy', id: 'portfolio', icon: 'ri-folder-line' },
                  { label: 'Fiyatlar', id: 'pricing', icon: 'ri-price-tag-line' },
                  { label: 'SSS', id: 'faq', icon: 'ri-question-line' },
                  { label: 'İletişim', id: 'contact', icon: 'ri-phone-line' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`transition-all duration-300 font-medium cursor-pointer group flex items-center space-x-2 hover:scale-105 ${isDarkMode ? 'text-gray-300 hover:text-amber-400' : 'text-gray-600 hover:text-amber-600'}`}
                  >
                    <div className="w-4 h-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <i className={item.icon}></i>
                    </div>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-amber-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className={isDarkMode ? 'ri-sun-line' : 'ri-moon-line'}></i>
                  </div>
                </button>
                <button
                  onClick={() => setQuoteFormOpen(true)}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer whitespace-nowrap relative overflow-hidden group"
                >
                  <span className="relative z-10">Teklif Al</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className={`ri-menu-line text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}></i>
                </div>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section 
          id="hero"
          className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
          style={{
            backgroundImage: `linear-gradient(135deg, ${isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'} 0%, rgba(251, 191, 36, 0.1) 100%), url('https://readdy.ai/api/search-image?query=luxury%20golden%20business%20background%20with%20elegant%20${isDarkMode ? 'dark' : 'white'}%20and%20gold%20gradient%2C%20premium%20corporate%20atmosphere%2C%20sophisticated%20professional%20environment%20with%20warm%20golden%20lighting%2C%20clean%20minimalist%20design%20with%20subtle%20texture&width=1920&height=1080&seq=hero&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left space-y-6 animate-fadeInUp">
                  <div className={`inline-flex items-center ${isDarkMode ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-800'} px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 hover:scale-105`}>
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2 animate-pulse"></div>
                    Türkiye'nin En Güvenilir Web Tasarım Ajansı
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slideInLeft">
                    Dijital Dünyada 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 block animate-gradient">
                      Prestijinizi
                    </span>
                    Yükseltin
                  </h1>
                  <p className={`text-lg md:text-xl leading-relaxed max-w-2xl animate-fadeInUp animation-delay-200 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Küçük ve orta ölçekli işletmeler için özel tasarlanmış, prestijli web çözümleri. 
                    Düşük bütçe, yüksek kalite garantisi ile dijital dönüşümünüzü başlatın.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
                    <button
                      onClick={() => setQuoteFormOpen(true)}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2 group relative overflow-hidden"
                    >
                      <div className="w-5 h-5 flex items-center justify-center group-hover:animate-bounce relative z-10">
                        <i className="ri-rocket-line"></i>
                      </div>
                      <span className="relative z-10">Ücretsiz Teklif Al</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </button>
                    <button 
                      onClick={() => scrollToSection('portfolio')}
                      className={`border-2 border-amber-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 cursor-pointer whitespace-nowrap flex items-center justify-center space-x-2 group hover:scale-105 hover:-translate-y-1 ${isDarkMode ? 'text-amber-400 hover:bg-amber-500 hover:text-black' : 'text-amber-600 hover:bg-amber-500 hover:text-white'}`}
                    >
                      <div className="w-5 h-5 flex items-center justify-center group-hover:animate-spin">
                        <i className="ri-eye-line"></i>
                      </div>
                      <span>Referansları Gör</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-4 sm:space-x-6 pt-4 animate-fadeInUp animation-delay-600">
                    {[ 
                      { number: '250+', label: 'Mutlu Müşteri' }, 
                      { number: '4.9', label: 'Müşteri Puanı' }, 
                      { number: '7/24', label: 'Teknik Destek' }
                    ].map((stat, index) => (
                      <div key={index} className="text-center group cursor-pointer hover:scale-110 transition-all duration-300">
                        <div className="text-xl md:text-2xl font-bold text-amber-600 group-hover:text-amber-500 transition-colors duration-300">{stat.number}</div>
                        <div className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:block animate-fadeInRight">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform rotate-6 animate-pulse"></div>
                    <img 
                      src="https://readdy.ai/api/search-image?query=modern%20professional%20website%20mockup%20display%20on%20multiple%20devices%2C%20elegant%20golden%20corporate%20branding%2C%20clean%20web%20design%20showcase%20with%20responsive%20layout%2C%20premium%20business%20website%20interface%20presentation&width=600&height=500&seq=hero-right&orientation=landscape"
                      alt="Web Tasarım Vitrin"
                      className="relative rounded-2xl shadow-2xl w-full h-auto object-cover group-hover:scale-105 transition-all duration-500 group-hover:shadow-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-arrow-down-line text-amber-600 text-2xl hover:text-amber-500 transition-colors duration-300"></i>
            </div>
          </div>
        </section>

        {/* Testimonials Slider */}
        <section className={`py-16 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Müşterilerimizin Yorumları</h2>
                <div className="flex justify-center items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map(star => (
                    <div key={star} className="w-6 h-6 flex items-center justify-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                      <i className="ri-star-fill text-amber-500 hover:text-amber-400"></i>
                    </div>
                  ))}
                  <span className={`ml-2 text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}> (4.9/5 - 250+ Yorum)</span>
                </div>
              </div>
              <div className="relative h-48 flex items-center justify-center">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 transform ${ 
                      index === currentSlide ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                    }`}
                  >
                    <div className={`p-6 md:p-8 rounded-2xl max-w-2xl mx-auto shadow-lg hover:shadow-xl ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex justify-center mb-4">
                        {[1,2,3,4,5].map(star => (
                          <div key={star} className="w-5 h-5 flex items-center justify-center">
                            <i className={`ri-star-${star <= testimonial.rating ? 'fill' : 'line'} text-amber-500`}></i>
                          </div>
                        ))}
                      </div>
                      <p className={`text-base md:text-lg mb-6 italic leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}> "{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold text-amber-600 text-base md:text-lg">{testimonial.author}</p>
                        <p className={`text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${ 
                      index === currentSlide ? 'bg-amber-500 w-8' : 'bg-gray-300 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={`py-16 md:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`} id="services">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-800'}`}>
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-service-line"></i>
                </div>
                Hizmetlerimiz
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Dijital Çözümlerimiz</h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                İşletmenizin dijital dönüşümü için ihtiyacınız olan tüm hizmetleri tek çatı altında, 
                profesyonel kalitede sunuyoruz.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-6 md:p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 cursor-pointer group border relative overflow-hidden ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-400/20' : 'bg-white border-gray-100 hover:border-amber-200 hover:shadow-xl'}`}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  onClick={() => handleServiceClick(service, index)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className={`w-14 md:w-16 h-14 md:h-16 flex items-center justify-center mb-4 md:mb-6 rounded-xl transition-all duration-500 relative z-10 ${isDarkMode ? 'bg-gradient-to-br from-gray-700 to-gray-600 group-hover:from-amber-500 group-hover:to-amber-600' : 'bg-gradient-to-br from-amber-100 to-amber-200 group-hover:from-amber-500 group-hover:to-amber-600'}`}>
                    <i className={`${service.icon} text-xl md:text-2xl transition-all duration-500 ${isDarkMode ? 'text-amber-400 group-hover:text-white' : 'text-amber-600 group-hover:text-white'}`}></i>
                  </div>
                  <h3 className={`text-lg md:text-xl font-bold mb-3 md:mb-4 transition-all duration-300 relative z-10 ${isDarkMode ? 'text-white group-hover:text-amber-400' : 'text-gray-800 group-hover:text-amber-600'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed relative z-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{service.description}</p>
                  <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 relative z-10">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service, index);
                      }}
                      className="text-amber-600 font-semibold flex items-center space-x-2 cursor-pointer hover:text-amber-500 transition-colors duration-200 text-sm md:text-base"
                    >
                      <span>Detaylı Bilgi</span>
                      <div className="w-4 h-4 flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-400 opacity-0 group-hover:opacity-20 transition-all duration-300 animate-ping"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className={`py-16 md:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} id="portfolio">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-800'}`}>
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-folder-line"></i>
                </div>
                Referanslarımız
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Başarılı Projelerimiz</h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Farklı sektörlerden müşterilerimiz için gerçekleştirdiğimiz başarılı web sitesi ve katalog projelerini inceleyin.
              </p>
              
              {/* Tab Switcher */}
              <div className={`inline-flex p-1 rounded-full mt-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <button
                  onClick={() => setActiveTab('websites')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${ 
                    activeTab === 'websites' 
                      ? `${isDarkMode ? 'bg-amber-500 text-black' : 'bg-amber-500 text-white'} shadow-lg`
                      : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                  }`}
                >
                  Web Siteleri
                </button>
                <button
                  onClick={() => setActiveTab('catalogs')}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${ 
                    activeTab === 'catalogs' 
                      ? `${isDarkMode ? 'bg-amber-500 text-black' : 'bg-amber-500 text-white'} shadow-lg`
                      : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                  }`}
                >
                  Kataloglar
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              {displayedItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`relative group overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 shadow-lg hover:shadow-2xl ${isDarkMode ? 'bg-gray-800 hover:shadow-amber-400/20' : 'bg-white'}`}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.category} ${item.type === 'catalog' ? 'Katalog' : 'Web Sitesi'} Tasarımı`}
                      className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePortfolioAction('preview', item);
                          }}
                          className="w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 cursor-pointer hover:scale-110 shadow-lg"
                          title={`${item.type === 'catalog' ? 'Katalog' : 'Web Sitesi'} Önizleme`}
                        >
                          <i className={`${item.type === 'catalog' ? 'ri-book-open-line' : 'ri-eye-line'} text-gray-800`}></i>
                        </button>
                        {item.type === 'website' && (
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePortfolioAction('visit', item);
                            }}
                            className="w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 cursor-pointer hover:scale-110 shadow-lg"
                            title="Web Sitesini Ziyaret Et"
                          >
                            <i className="ri-external-link-line text-gray-800"></i>
                          </button>
                        )}
                      </div>
                    </div>
{item.type === 'catalog' && "pages" in item && (
  <div className="absolute top-4 left-4">
    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
      {item.pages} Sayfa
    </span>
  </div>
)}

                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 group-hover:scale-105 ${ 
                        item.type === 'catalog' 
                          ? 'bg-purple-100 text-purple-800 group-hover:bg-purple-500 group-hover:text-white'
                          : 'bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-white'
                      }`}>
                        {item.category}
                      </span>
                    </div>
                    <h3 className={`text-base md:text-lg font-bold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white group-hover:text-amber-400' : 'text-gray-800 group-hover:text-amber-600'}`}>{item.title}</h3>
                    <p className={`text-xs md:text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <div className="text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                      <div className="flex space-x-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePortfolioAction('preview', item);
                          }}
                          className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                          Önizleme
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePortfolioAction('details', item);
                          }}
                          className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-600 transition-all duration-200 cursor-pointer hover:scale-105"
                        >
                          Detaylar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={`absolute top-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${ 
                    item.type === 'catalog' 
                      ? 'bg-gradient-to-r from-purple-400 to-purple-600'
                      : 'bg-gradient-to-r from-amber-400 to-amber-600'
                  }`}></div>
                </div>
              ))}
            </div>

            {currentItems.length > 6 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAllPortfolio(!showAllPortfolio)}
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 cursor-pointer ${isDarkMode ? 'bg-gray-800 text-amber-400 hover:bg-gray-700 border border-amber-400' : 'bg-white text-amber-600 hover:bg-amber-50 border-2 border-amber-200'} shadow-lg`}
                >
                  <div className="flex items-center space-x-2">
                    <span>{showAllPortfolio ? 'Daha Az Göster' : `Tüm ${activeTab === 'websites' ? 'Projeleri' : 'Katalogları'} Göster`}</span>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`ri-arrow-${showAllPortfolio ? 'up' : 'down'}-line transition-transform duration-300`}></i>
                    </div>
                  </div>
                </button>
                {!showAllPortfolio && (
                  <p className={`mt-3 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {currentItems.length - 6} {activeTab === 'websites' ? 'proje' : 'katalog'} daha görmek için tıklayın
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Pricing Section */}
        <section className={`py-16 md:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`} id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-800'}`}>
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-price-tag-line"></i>
                </div>
                Fiyatlandırma
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Size Uygun Paketi Seçin</h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                İhtiyaçlarınıza uygun paket seçin. Tüm paketlerde 
                <span className="text-amber-600 font-bold bg-amber-100 px-2 py-1 rounded">%50 KAMPANYA İNDİRİMİ</span> 
                fırsatı!
              </p>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800'}`}>
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                Kampanya sınırlı süre geçerli!
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative p-6 md:p-8 rounded-2xl transform transition-all duration-300 hover:scale-[1.02] border-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ${ 
                    plan.isPopular 
                      ? `border-amber-400 shadow-2xl ring-4 ${isDarkMode ? 'ring-amber-400/20' : 'ring-amber-100'}` 
                      : `${isDarkMode ? 'border-gray-700 hover:border-amber-400' : 'border-gray-200 hover:border-amber-200'} shadow-lg hover:shadow-xl`
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap shadow-lg">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  {!plan.isPopular && (
                    <div className="absolute -top-3 left-6">
                      <span className={`${ 
                        plan.name === 'Başlangıç' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      } px-3 py-1 rounded-full text-xs font-medium`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6 md:mb-8">
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{plan.name}</h3>
                    <div className="mb-4">
                      <span className={`line-through text-lg md:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>{plan.originalPrice}</span>
                      <div className="flex items-center justify-center space-x-2 mt-2">
                        <span className="text-red-500 text-sm font-bold bg-red-100 px-2 py-1 rounded">%50 İNDİRİM</span>
                      </div>
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                      {plan.price}
                    </div>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>tek seferlik ödeme</p>
                  </div>
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center bg-green-100 rounded-full mt-0.5 flex-shrink-0">
                          <i className="ri-check-line text-green-600 text-sm"></i>
                        </div>
                        <span className={`leading-relaxed text-sm md:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handlePricingAction(plan)}
                    className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-xl font-semibold text-center transition-all duration-300 cursor-pointer text-sm md:text-base ${ 
                      plan.isPopular
                        ? `bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 shadow-lg hover:scale-105` 
                        : `border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white hover:scale-105 ${isDarkMode ? 'hover:text-black' : ''}`
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <i className="ri-whatsapp-line"></i>
                      </div>
                      <span>Hemen Başla</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Özel ihtiyaçlarınız için bireysel çözümler arıyorsanız</p>
              <button
                onClick={() => setQuoteFormOpen(true)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 cursor-pointer hover:scale-105 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                Özel Teklif Al
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-16 md:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} id="faq">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-800'}`}>
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-question-line"></i>
                </div>
                Sıkça Sorulan Sorular
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Merak Ettikleriniz</h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                En sık sorulan soruların yanıtlarını burada bulabilirsiniz. 
                Başka sorularınız için bize ulaşmaktan çekinmeyin.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`mb-4 rounded-2xl overflow-hidden border transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400' : 'bg-gray-50 border-gray-100 hover:border-amber-200'}`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className={`w-full p-4 md:p-6 text-left flex justify-between items-center transition-colors duration-300 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  >
                    <h3 className={`text-base md:text-lg font-semibold pr-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{item.question}</h3>
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'} ${ 
                        activeFaq === index ? 'bg-amber-500 rotate-180' : ''
                      }`}>
                        <i className={`ri-arrow-down-s-line text-lg ${ 
                          activeFaq === index ? 'text-white' : 'text-amber-600'
                        }`}></i>
                      </div>
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${ 
                      activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className={`p-4 md:p-6 pt-0 leading-relaxed border-t transition-colors duration-300 ${isDarkMode ? 'text-gray-300 border-amber-400/20 bg-gray-700' : 'text-gray-600 border-amber-100 bg-white'}`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sorunuzun cevabını bulamadınız mı?</p>
              <a
                href="https://wa.me/905519649308?text=Merhaba! Web sitesi hakkında sorum var."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-200 cursor-pointer"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-whatsapp-line"></i>
                </div>
                <span>Bize Sorun</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={`py-16 md:py-20 transition-colors duration-500 ${isDarkMode ? 'bg-gradient-to-b from-gray-800 to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`} id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-800'}`}>
                <div className="w-4 h-4 flex items-center justify-center mr-2">
                  <i className="ri-phone-line"></i>
                </div>
                İletişim
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 md:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Projenizi Konuşalım</h2>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Size en uygun çözümü birlikte bulalım. Ücretsiz danışmanlık için 
                hemen iletişime geçin.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-1 space-y-6">
                <div className={`p-6 rounded-2xl shadow-sm border transition-colors duration-300 cursor-pointer hover:scale-105 ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400' : 'bg-white border-gray-100 hover:border-amber-200'}`} 
                     onClick={() => handleContactAction('phone')} 
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'}`}>
                    <i className="ri-phone-line text-amber-600 text-xl"></i>
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Telefon</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+90 551 964 93 08</p>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>7/24 destek hattı</p>
                </div>
                <div className={`p-6 rounded-2xl shadow-sm border transition-colors duration-300 cursor-pointer hover:scale-105 ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400' : 'bg-white border-gray-100 hover:border-amber-200'}`} 
                     onClick={() => handleContactAction('email')} 
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'}`}>
                    <i className="ri-mail-line text-amber-600 text-xl"></i>
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>E-mail</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>yakaco@hotmail.com</p>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>24 saat içinde yanıt</p>
                </div>
                <div className={`p-6 rounded-2xl shadow-sm border transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 ${isDarkMode ? 'bg-amber-900/30' : 'bg-amber-100'}`}>
                    <i className="ri-time-line text-amber-600 text-xl"></i>
                  </div>
                  <h3 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Çalışma Saatleri</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Haftanın Her Günü</p>
                  <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>7/24</p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className={`p-6 md:p-8 rounded-2xl shadow-sm border transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}>
                  <h3 className={`text-xl md:text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Hızlı İletişim</h3>
                  <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                    <button
                      onClick={() => handleContactAction('whatsapp')}
                      className="flex items-center justify-center space-x-3 bg-green-500 text-white p-3 md:p-4 rounded-xl hover:bg-green-600 transition-colors duration-200 cursor-pointer text-sm md:text-base"
                    >
                      <div className="w-5 md:w-6 h-5 md:h-6 flex items-center justify-center">
                        <i className="ri-whatsapp-line text-lg md:text-xl"></i>
                      </div>
                      <span className="font-medium">WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setQuoteFormOpen(true)}
                      className="flex items-center justify-center space-x-3 bg-amber-500 text-white p-3 md:p-4 rounded-xl hover:bg-amber-600 transition-colors duration-200 cursor-pointer text-sm md:text-base"
                    >
                      <div className="w-5 md:w-6 h-5 md:h-6 flex items-center justify-center">
                        <i className="ri-file-text-line text-lg md:text-xl"></i>
                      </div>
                      <span className="font-medium">Teklif Formu</span>
                    </button>
                    <button
                      onClick={() => handleContactAction('email')}
                      className="flex items-center justify-center space-x-3 bg-blue-500 text-white p-3 md:p-4 rounded-xl hover:bg-blue-600 transition-colors duration-200 cursor-pointer text-sm md:text-base"
                    >
                      <div className="w-5 md:w-6 h-5 md:h-6 flex items-center justify-center">
                        <i className="ri-mail-line text-lg md:text-xl"></i>
                      </div>
                      <span className="font-medium">E-mail</span>
                    </button>
                  </div>
                  <div className={`p-4 md:p-6 rounded-xl ${isDarkMode ? 'bg-amber-900/20 border border-amber-400/30' : 'bg-amber-50 border border-amber-200'}`}>
                    <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-amber-400' : 'text-amber-800'}`}>Ücretsiz Danışmanlık</h4>
                    <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? 'text-amber-300' : 'text-amber-700'}`}>
                      Projeniz için en uygun çözümü belirlemek adına 30 dakikalık ücretsiz 
                      danışmanlık hizmeti sunuyoruz. Hemen randevu alın!
                    </p>
                    <button
                      onClick={() => handleContactAction('appointment')}
                      className="bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition-colors duration-200 cursor-pointer"
                    >
                      Randevu Al
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Preview */}
        <WebsitePreview 
          isOpen={previewOpen} 
          onClose={() => setPreviewOpen(false)} 
          projectData={selectedProject}
          isDarkMode={isDarkMode}
          onQuoteFormOpen={() => setQuoteFormOpen(true)}
        />

        {/* Catalog Preview */}
        <CatalogPreview 
          isOpen={catalogPreviewOpen} 
          onClose={() => setCatalogPreviewOpen(false)} 
          catalogData={selectedCatalog}
          isDarkMode={isDarkMode}
        />

        {/* Appointment Modal */}
        {appointmentModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setAppointmentModalOpen(false)} />
            
            <div className={`rounded-3xl shadow-2xl max-w-md w-full relative transform transition-all duration-500 scale-100 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white border border-amber-400/20' : 'bg-gradient-to-br from-white via-gray-50 to-amber-50 text-gray-800 border border-amber-100'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-amber-600/10 rounded-3xl blur-xl"></div>
              
              <div className={`relative p-8 text-center border-b ${isDarkMode ? 'border-amber-400/20' : 'border-amber-100'}`}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg">
                  <i className={`ri-calendar-check-line text-2xl ${isDarkMode ? 'text-black' : 'text-amber-600'}`}></i>
                </div>
                <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Ücretsiz Randevu</h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>30 dakikalık danışmanlık seansı</p>
                <button
                  onClick={() => setAppointmentModalOpen(false)}
                  className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
                >
                  <i className="ri-close-line text-lg"></i>
                </button>
              </div>

              <div className="relative p-8">
                <div className="space-y-6">
                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer group ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400' : 'bg-white border-gray-200 hover:border-amber-300'} shadow-lg hover:shadow-xl`} 
                       onClick={() => handleContactAction('whatsapp')} 
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-green-900/30 group-hover:bg-green-600' : 'bg-green-100 group-hover:bg-green-500'}`}>
                        <i className={`ri-whatsapp-fill text-xl transition-colors duration-300 ${isDarkMode ? 'text-green-400 group-hover:text-white' : 'text-green-600 group-hover:text-white'}`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>WhatsApp Randevu</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hemen mesaj gönderin</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="ri-arrow-right-line text-amber-500"></i>
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer group ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400' : 'bg-white border-gray-200 hover:border-amber-300'} shadow-lg hover:shadow-xl`} 
                       onClick={() => handleContactAction('phone')} 
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-blue-900/30 group-hover:bg-blue-600' : 'bg-blue-100 group-hover:bg-blue-500'}`}>
                        <i className={`ri-phone-fill text-xl transition-colors duration-300 ${isDarkMode ? 'text-blue-400 group-hover:text-white' : 'text-blue-600 group-hover:text-white'}`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Telefon Randevu</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Doğrudan arayin</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="ri-arrow-right-line text-amber-500"></i>
                      </div>
                    </div>
                  </div>

                  <div className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-pointer group ${isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-amber-400' : 'bg-white border-gray-200 hover:border-amber-300'} shadow-lg hover:shadow-xl`} 
                       onClick={() => {
                         setAppointmentModalOpen(false);
                         setQuoteFormOpen(true);
                       }} 
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isDarkMode ? 'bg-purple-900/30 group-hover:bg-purple-600' : 'bg-purple-100 group-hover:bg-purple-500'}`}>
                        <i className={`ri-file-text-fill text-xl transition-colors duration-300 ${isDarkMode ? 'text-purple-400 group-hover:text-white' : 'text-purple-600 group-hover:text-white'}`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Online Form</h3>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Detaylı bilgi formu</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <i className="ri-arrow-right-line text-amber-500"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`mt-8 p-4 rounded-xl ${isDarkMode ? 'bg-amber-900/20 border border-amber-400/30' : 'bg-amber-50 border border-amber-200'}`}>
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-amber-400' : 'bg-amber-500'}`}>
                      <i className="ri-time-line text-white text-sm"></i>
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${isDarkMode ? 'text-amber-400' : 'text-amber-800'}`}>Hızlı Yanıt Garantisi</p>
                      <p className={`text-xs ${isDarkMode ? 'text-amber-300' : 'text-amber-700'}`}>1 saat içinde geri dönüş yapıyoruz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <MobileMenu 
          isOpen={mobileMenuOpen} 
          onClose={() => setMobileMenuOpen(false)} 
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onQuoteFormOpen={() => setQuoteFormOpen(true)}
        />

        <QuoteForm 
          isOpen={quoteFormOpen} 
          onClose={() => setQuoteFormOpen(false)} 
          isDarkMode={isDarkMode}
        />
      </div>
    </>
  );
}
