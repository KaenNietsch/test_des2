
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface WebsitePreviewProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: {
    id?: number;
    title: string;
    category: string;
    image: string;
    description?: string;
    features?: string[];
    technologies?: string[];
    url?: string;
  } | null;
  isDarkMode: boolean;
  onQuoteFormOpen?: () => void;
}

export default function WebsitePreview({ isOpen, onClose, projectData, isDarkMode, onQuoteFormOpen }: WebsitePreviewProps) {
  const [currentView, setCurrentView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!isOpen || !projectData) return null;

  const mockWebsiteContent: { [key: string]: { html: string } } = {
    'Lezzet Durağı Restaurant': {
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
    },
    'Elit Butik Otel & Spa': {
      html: `
        <div style="font-family: 'Georgia', serif; background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%); color: #333; min-height: 100vh;">
          <header style="background: white; padding: 2rem 1rem; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #d4af37; font-size: 3rem; margin: 0; font-weight: 300;">Elit Butik Otel & Spa</h1>
            <p style="color: #666; margin: 0.5rem 0 0 0; font-size: 1.1rem;">Lüks Konaklama ve Wellness Deneyimi</p>
          </header>
          <div style="padding: 3rem 1rem; max-width: 1200px; margin: 0 auto;">
            <section style="text-align: center; margin-bottom: 4rem;">
              <h2 style="color: #333; font-size: 2.5rem; margin-bottom: 2rem; font-weight: 300;">Premium Odalarımız</h2>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 3rem;">
                <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); border: 2px solid #f8f9fa;">
                  <h3 style="color: #d4af37; font-size: 1.8rem; margin-bottom: 1rem;">Deluxe Oda</h3>
                  <p style="color: #666; line-height: 1.6; margin-bottom: 1.5rem;">Şehir manzaralı, modern tasarımlı 35m² lüks odalarımız</p>
                  <div style="background: #d4af37; color: white; padding: 0.5rem 1rem; border-radius: 25px; display: inline-block; font-weight: bold;">₺450/gece</div>
                </div>
                <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 5px 20px rgba(0,0,0,0.1); border: 2px solid #d4af37;">
                  <h3 style="color: #d4af37; font-size: 1.8rem; margin-bottom: 1rem;">Suite Oda & Spa</h3>
                  <p style="color: #666; line-height: 1.6; margin-bottom: 1.5rem;">Deniz manzaralı, jakuzili 55m² lüks suit odalarımız</p>
                  <div style="background: #d4af37; color: white; padding: 0.5rem 1rem; border-radius: 25px; display: inline-block; font-weight: bold;">₺750/gece</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      `
    },
    'Modern Sanat Galerisi': {
      html: `
        <div style="font-family: 'Arial', sans-serif; background: #fafafa; color: #333; min-height: 100vh;">
          <header style="background: black; color: white; padding: 2rem; text-align: center;">
            <h1 style="font-size: 3rem; margin: 0; letter-spacing: 3px; font-weight: 100;">MODERN SANAT</h1>
            <p style="color: #d4af37; font-size: 1.2rem; margin: 0.5rem 0 0 0; letter-spacing: 2px;">GALERİSİ & KÜLTÜR MERKEZİ</p>
          </header>
          <nav style="background: white; padding: 1rem; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <a href="#" style="color: #333; margin: 0 2rem; text-decoration: none; font-weight: 300; text-transform: uppercase; letter-spacing: 1px;">Aktuel Sergiler</a>
            <a href="#" style="color: #333; margin: 0 2rem; text-decoration: none; font-weight: 300; text-transform: uppercase; letter-spacing: 1px;">Sanatçı Profilleri</a>
            <a href="#" style="color: #333; margin: 0 2rem; text-decoration: none; font-weight: 300; text-transform: uppercase; letter-spacing: 1px;">Kültürel Etkinlikler</a>
          </nav>
          <main style="padding: 4rem 2rem; max-width: 1200px; margin: 0 auto;">
            <section style="margin-bottom: 4rem;">
              <h2 style="font-size: 2.5rem; font-weight: 100; text-align: center; margin-bottom: 3rem; color: #333;">Güncel Sergi Koleksiyonu</h2>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;">
                <div>
                  <h3 style="color: #d4af37; font-size: 2rem; margin-bottom: 1rem; font-weight: 300;">Çağdaş Sanat Perspektifleri</h3>
                  <p style="line-height: 1.8; color: #666; margin-bottom: 2rem; font-size: 1.1rem;">
                    Modern sanatın yeni yüzleri ile tanışın. Yerel ve uluslararası sanatçıların eserlerinden oluşan kapsamlı koleksiyon sergilerimiz.
                  </p>
                  <div style="background: black; color: white; padding: 1rem 2rem; display: inline-block; text-transform: uppercase; letter-spacing: 1px; cursor: pointer;">
                    Sergiye Katılın
                  </div>
                </div>
                <div style="background: #f0f0f0; height: 300px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #999;">
                  [Sanat Eseri Galerisi]
                </div>
              </div>
            </section>
          </main>
        </div>
      `
    }
  };

  const getViewportStyle = () => {
    switch (currentView) {
      case 'tablet':
        return { width: '768px', height: '80vh', minHeight: '600px' };
      case 'mobile':
        return { width: '375px', height: '80vh', minHeight: '600px' };
      default:
        return { width: '100%', height: '80vh', minHeight: '700px' };
    }
  };

  const handleFullPreview = () => {
    if (projectData.url && projectData.url !== '#') {
      window.open(projectData.url, '_blank');
    } else if (projectData.id) {
      window.open(`/preview/${projectData.id}`, '_blank');
    }
  };

  const getPreviewContent = () => {
    // For Özaksa, always show the live site in an iframe
    if (projectData.title === 'Özaksa Tarım Makine Şanzımanları' && projectData.url && projectData.url !== '#' && projectData.url.startsWith('http')) {
      return `<iframe src="${projectData.url}" style="width: 100%; height: 100%; border: none;" title="${projectData.title}"></iframe>`;
    }

    // For other projects, use mock content
    return mockWebsiteContent[projectData.title as keyof typeof mockWebsiteContent]?.html ||
           `<div style="padding: 2rem; text-align: center; color: #666; font-family: Arial, sans-serif; height: 100%; display: flex; flex-direction: column; justify-content: center;">
              <h2 style="color: #d4af37; margin-bottom: 1rem;">${projectData.title}</h2>
              <p style="margin-bottom: 2rem;">Bu proje için önizleme hazırlanıyor...</p>
              <div style="background: #f5f5f5; padding: 2rem; border-radius: 10px; margin: 1rem 0;">
                <h3 style="color: #333; margin-bottom: 1rem;">Proje Özellikleri:</h3>
                <ul style="list-style: none; padding: 0;">
                  <li style="padding: 0.5rem 0; border-bottom: 1px solid #ddd;">✓ Responsive Web Tasarım</li>
                  <li style="padding: 0.5rem 0; border-bottom: 1px solid #ddd;">✓ SEO Optimizasyonu</li>
                  <li style="padding: 0.5rem 0; border-bottom: 1px solid #ddd;">✓ Modern Kullanıcı Arayüzü</li>
                  <li style="padding: 0.5rem 0;">✓ Hızlı Yüklenme Teknolojisi</li>
                </ul>
              </div>
            </div>`;
  };

  const handleQuoteClick = () => {
    onClose();
    if (onQuoteFormOpen) {
      onQuoteFormOpen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
      <div className={`rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={`p-6 border-b flex items-center justify-between ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{projectData.title}</h2>
            <div className="flex items-center space-x-4 mt-1">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{projectData.category} Web Sitesi</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                projectData.url && projectData.url !== '#' && projectData.url.startsWith('http')
                  ? `${isDarkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`
                  : `${isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`
              }`}>
                {projectData.url && projectData.url !== '#' && projectData.url.startsWith('http') ? 'Canlı Site' : 'Demo Önizleme'}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Device Switcher */}
            <div className={`flex rounded-lg p-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <button
                onClick={() => setCurrentView('desktop')}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  currentView === 'desktop'
                    ? `${isDarkMode ? 'bg-gray-700 text-amber-400' : 'bg-white text-amber-600'} shadow-sm`
                    : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-computer-line"></i>
                </div>
              </button>
              <button
                onClick={() => setCurrentView('tablet')}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  currentView === 'tablet'
                    ? `${isDarkMode ? 'bg-gray-700 text-amber-400' : 'bg-white text-amber-600'} shadow-sm`
                    : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-tablet-line"></i>
                </div>
              </button>
              <button
                onClick={() => setCurrentView('mobile')}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  currentView === 'mobile'
                    ? `${isDarkMode ? 'bg-gray-700 text-amber-400' : 'bg-white text-amber-600'} shadow-sm`
                    : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-smartphone-line"></i>
                </div>
              </button>
            </div>

            {/* Full Preview Button */}
            <button
              onClick={handleFullPreview}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-200 flex items-center space-x-2 shadow-lg"
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-external-link-line"></i>
              </div>
              <span>Tam Ekran</span>
            </button>

            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-close-line text-xl"></i>
              </div>
            </button>
          </div>
        </div>

        <div className={`p-6 flex justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div
            className="bg-white rounded-xl overflow-hidden shadow-2xl transition-all duration-300 mx-auto border-4 border-gray-200"
            style={getViewportStyle()}
          >
            <div 
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: getPreviewContent() }}
            />
          </div>
        </div>

        <div className={`p-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Proje Hakkında</h4>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {projectData.description || 'Bu proje için özel tasarım ve geliştirme hizmetleri sağlandı.'}
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Teknik Özellikler</h4>
              <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• Responsive Web Tasarım</li>
                <li>• SEO Optimizasyonu</li>
                <li>• Hızlı Yüklenme Teknolojisi</li>
                <li>• Modern Kullanıcı Arayüzü</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>İletişim</h4>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={handleQuoteClick}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-200 cursor-pointer whitespace-nowrap hover:scale-105"
                >
                  Ücretsiz Teklif Al
                </button>
                <a
                  href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba! ${projectData.title} projesini beğendim. Benzer bir web sitesi yaptırmak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2 hover:scale-105"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-whatsapp-line"></i>
                  </div>
                  <span>Benzer Site İstiyorum</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
