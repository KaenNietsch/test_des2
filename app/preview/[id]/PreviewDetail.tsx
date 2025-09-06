
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PreviewDetailProps {
  projectId: string;
}

export default function PreviewDetail({ projectId }: PreviewDetailProps) {
  const [currentView, setCurrentView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const portfolioItems = [
    {
      id: '1',
      title: "Özaksa Tarım Makine Şanzımanları",
      category: "Sanayi",
      image: "https://readdy.ai/api/search-image?query=industrial%20agricultural%20machinery%20manufacturing%20website%20with%20professional%20layout%2C%20heavy%20machinery%20equipment%20showcase%2C%20blue%20and%20orange%20corporate%20colors%2C%20manufacturing%20plant%20background%2C%20technical%20engineering%20design&width=500&height=350&seq=ozaksa&orientation=landscape",
      description: "Tarım makineleri üretiminde uzman sanayi şirketinin kurumsal websitesi.",
      features: ["Kurumsal Web Sitesi", "Ürün Katalogu", "İletişim Formu", "Responsive Tasarım"],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      url: "https://test1-bo7e.vercel.app"
    },
    {
      id: '2',
      title: "Lezzet Durağı Restaurant",
      category: "Restoran",
      image: "https://readdy.ai/api/search-image?query=elegant%20restaurant%20website%20interface%20with%20golden%20luxury%20touches%2C%20modern%20menu%20display%2C%20warm%20lighting%20background%20with%20premium%20food%20photography%2C%20sophisticated%20dining%20atmosphere%2C%20professional%20restaurant%20web%20design&width=500&height=350&seq=1&orientation=landscape",
      description: "Geleneksel Türk mutfağının modern sunumla buluştuğu restoran websitesi.",
      features: ["Online Rezervasyon", "Dijital Menü", "Müşteri Yorumları", "Sosyal Medya Entegrasyonu"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: '3',
      title: "Elit Butik Otel & Spa",
      category: "Otelcilik", 
      image: "https://readdy.ai/api/search-image?query=luxury%20boutique%20hotel%20website%20design%20with%20golden%20elegant%20elements%2C%20premium%20accommodation%20showcase%2C%20sophisticated%20hotel%20room%20interiors%2C%20upscale%20hospitality%20web%20interface%2C%20luxury%20travel%20experience&width=500&height=350&seq=2&orientation=landscape",
      description: "Lüks konaklama deneyimini yansıtan butik otel websitesi.",
      features: ["Online Rezervasyon", "Oda Galerisi", "SPA Hizmetleri", "Etkinlik Takvimi"],
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "PayPal"]
    }
  ];

  const project = portfolioItems.find(item => item.id === projectId);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(systemPrefersDark);

    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    }

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const getPreviewContent = () => {
    if (project?.url && project.url !== '#' && project.url.startsWith('http')) {
      return project.url;
    }
    
    const mockWebsiteContent: { [key: string]: { html: string } } = {
      '2': {
        html: `
          <div style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #1a1a1a 0%, #2d1810 100%); color: white; min-height: 100vh;">
            <header style="background: rgba(0,0,0,0.9); padding: 1rem; text-align: center; border-bottom: 2px solid #d4af37;">
              <h1 style="color: #d4af37; font-size: 2.5rem; margin: 0; font-family: serif;">Lezzet Durağı Restaurant</h1>
              <p style="color: #ccc; margin: 0.5rem 0 0 0;">Geleneksel Türk Mutfağı, Modern Sunum</p>
            </header>
            <nav style="background: #d4af37; padding: 1rem; text-align: center;">
              <a href="#" style="color: black; margin: 0 1rem; text-decoration: none; font-weight: bold;">Ana Sayfa</a>
              <a href="#" style="color: black; margin: 0 1rem; text-decoration: none; font-weight: bold;">Menülerimiz</a>
              <a href="#" style="color: black; margin: 0 1rem; text-decoration: none; font-weight: bold;">Online Rezervasyon</a>
              <a href="#" style="color: black; margin: 0 1rem; text-decoration: none; font-weight: bold;">İletişim</a>
            </nav>
            <main style="padding: 2rem;">
              <section style="text-align: center; margin-bottom: 3rem;">
                <h2 style="color: #d4af37; font-size: 2rem; margin-bottom: 1rem;">Özel Menü Seçkilerimiz</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem;">
                  <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; border: 1px solid #d4af37;">
                    <h3 style="color: #d4af37; margin-bottom: 1rem;">Ana Yemekler</h3>
                    <p style="color: #ccc;">Geleneksel Türk mutfağının en seçkin lezzetleri</p>
                    <div style="color: #d4af37; font-size: 1.5rem; font-weight: bold; margin-top: 1rem;">₺45-85</div>
                  </div>
                  <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; border: 1px solid #d4af37;">
                    <h3 style="color: #d4af37; margin-bottom: 1rem;">Başlangıçlar</h3>
                    <p style="color: #ccc;">Taze malzemelerle hazırlanan özel mezelerimiz</p>
                    <div style="color: #d4af37; font-size: 1.5rem; font-weight: bold; margin-top: 1rem;">₺25-45</div>
                  </div>
                  <div style="background: rgba(255,255,255,0.1); padding: 1.5rem; border-radius: 10px; border: 1px solid #d4af37;">
                    <h3 style="color: #d4af37; margin-bottom: 1rem;">Tatlılar</h3>
                    <p style="color: #ccc;">Ev yapımı geleneksel tatlılarımız</p>
                    <div style="color: #d4af37; font-size: 1.5rem; font-weight: bold; margin-top: 1rem;">₺20-35</div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        `
      }
    };
    
    return mockWebsiteContent[projectId]?.html || '<div style="padding: 2rem; text-align: center; color: #666; font-family: Arial, sans-serif;"><h2>Web Sitesi Önizlemesi</h2><p>Bu proje için önizleme hazırlanıyor...</p></div>';
  };

  const getViewportStyle = () => {
    switch (currentView) {
      case 'tablet':
        return { maxWidth: '768px', height: '80vh', minHeight: '600px' };
      case 'mobile':
        return { maxWidth: '375px', height: '80vh', minHeight: '600px' };
      default:
        return { maxWidth: '100%', height: '80vh', minHeight: '700px' };
    }
  };

  if (isLoading) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className={`text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Web sitesi önizlemesi hazırlanıyor...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Proje Bulunamadı</h1>
          <Link href="/" className="text-amber-600 hover:text-amber-700">
            Ana sayfaya dönün
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`shadow-lg border-b transition-colors duration-500 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png"
                  alt="Yaka & Co Logo"
                  className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
              </div>
              <span className="font-['Pacifico'] text-xl text-amber-600 transition-all duration-300 group-hover:text-amber-500">Yaka & Co.</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              {/* Device Switcher */}
              <div className={`flex rounded-lg p-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <button
                  onClick={() => setCurrentView('desktop')}
                  className={`px-3 py-2 rounded-md transition-all duration-200 ${
                    currentView === 'desktop' 
                      ? `${isDarkMode ? 'bg-gray-600 text-amber-400' : 'bg-white text-amber-600'} shadow-sm` 
                      : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                  }`}
                  title="Desktop Görünüm"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-computer-line"></i>
                  </div>
                </button>
                <button
                  onClick={() => setCurrentView('tablet')}
                  className={`px-3 py-2 rounded-md transition-all duration-200 ${
                    currentView === 'tablet' 
                      ? `${isDarkMode ? 'bg-gray-600 text-amber-400' : 'bg-white text-amber-600'} shadow-sm` 
                      : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                  }`}
                  title="Tablet Görünüm"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-tablet-line"></i>
                  </div>
                </button>
                <button
                  onClick={() => setCurrentView('mobile')}
                  className={`px-3 py-2 rounded-md transition-all duration-200 ${
                    currentView === 'mobile' 
                      ? `${isDarkMode ? 'bg-gray-600 text-amber-400' : 'bg-white text-amber-600'} shadow-sm` 
                      : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                  }`}
                  title="Mobil Görünüm"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-smartphone-line"></i>
                  </div>
                </button>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-700 text-amber-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                title="Tema Değiştir"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={isDarkMode ? 'ri-sun-line' : 'ri-moon-line'}></i>
                </div>
              </button>

              {/* Close Button */}
              <Link
                href="/"
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                title="Ana Sayfaya Dön"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-close-line"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Project Info Bar */}
      <div className={`border-b transition-colors duration-500 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{project.title}</h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.category} Web Sitesi • Canlı Önizleme</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1"></div>
                Canlı Site
              </span>
              <a
                href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba! ${project.title} projesini beğendim. Benzer bir web sitesi yaptırmak istiyorum.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <i className="ri-whatsapp-line"></i>
                </div>
                <span>Benzer Web Sitesi İstiyorum</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Container */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <div 
            className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 mx-auto border"
            style={getViewportStyle()}
          >
            {project?.url && project.url !== '#' && project.url.startsWith('http') ? (
              <iframe
                src={project.url}
                className="w-full h-full border-0"
                title={`${project.title} Preview`}
              />
            ) : (
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: getPreviewContent() }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className={`border-t transition-colors duration-500 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className={`font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Proje Açıklaması</h3>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>
            </div>
            <div>
              <h3 className={`font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Web Sitesi Özellikleri</h3>
              <ul className={`space-y-1 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.features && project.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Kullanılan Teknolojiler</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies && project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-800'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
