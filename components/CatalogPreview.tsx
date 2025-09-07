'use client';

import { useState, useEffect } from 'react';

interface CatalogPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  catalogData: {
    id?: number;
    title: string;
    category: string;
    image: string;
    description?: string;
    pages?: number;
    pdfUrl?: string;
  } | null;
  isDarkMode: boolean;
}

export default function CatalogPreview({ isOpen, onClose, catalogData, isDarkMode }: CatalogPreviewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (isOpen && catalogData) {
      // Turn.js kütüphanesini dinamik olarak yükle
      const loadTurnJS = async () => {
        if (typeof window !== 'undefined' && !window.jQuery) {
          // jQuery'yi yükle
          const jqueryScript = document.createElement('script');
          jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
          jqueryScript.onload = () => {
            // Turn.js'i yükle
            const turnScript = document.createElement('script');
            turnScript.src = 'https://raw.githubusercontent.com/blasten/turn.js/master/turn.min.js';
            turnScript.onload = () => {
              initializeFlipbook();
            };
            document.head.appendChild(turnScript);
          };
          document.head.appendChild(jqueryScript);
        } else if (window.jQuery && window.jQuery.fn.turn) {
          initializeFlipbook();
        }
      };

      loadTurnJS();
    }
  }, [isOpen, catalogData]);

  const initializeFlipbook = () => {
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.turn) {
      const $ = window.jQuery;
      setTimeout(() => {
        const flipbook = $('#flipbook');
        if (flipbook.length && catalogData) {
          // Mevcut turn instance'ını temizle
          if (flipbook.turn('is')) {
            flipbook.turn('destroy');
          }

          // Sayfaları oluştur
          flipbook.empty();
          const totalPages = catalogData.pages || 12;
          
          for (let i = 1; i <= totalPages; i++) {
            const pageDiv = $(`<div class="page" id="page-${i}"></div>`);
            pageDiv.css({
              background: `linear-gradient(135deg, ${i % 2 === 0 ? '#f8f9fa' : '#ffffff'} 0%, ${i % 2 === 0 ? '#e9ecef' : '#f8f9fa'} 100%)`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
              fontSize: '1.2rem',
              color: '#333',
              border: '1px solid #ddd'
            });

            // Sayfa içeriği oluştur
            if (i === 1) {
              pageDiv.html(`
                <div style="text-align: center;">
                  <h1 style="color: #d4af37; font-size: 2.5rem; margin-bottom: 2rem;">${catalogData.title}</h1>
                  <p style="font-size: 1.5rem; color: #666; margin-bottom: 3rem;">${catalogData.category}</p>
                  <div style="width: 200px; height: 200px; background: linear-gradient(45deg, #d4af37, #f4d03f); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
                    <i class="ri-book-open-line" style="font-size: 4rem; color: white;"></i>
                  </div>
                </div>
              `);
            } else if (i === totalPages) {
              pageDiv.html(`
                <div style="text-align: center;">
                  <h2 style="color: #d4af37; margin-bottom: 2rem;">İletişim</h2>
                  <p style="margin-bottom: 1rem;"><strong>Yaka & Co.</strong></p>
                  <p style="margin-bottom: 1rem;">📞 +90 555 123 45 67</p>
                  <p style="margin-bottom: 1rem;">📧 info@yakaco.com</p>
                  <p style="margin-bottom: 2rem;">🌐 www.yakaco.com</p>
                  <div style="background: #d4af37; color: white; padding: 1rem 2rem; border-radius: 25px; display: inline-block;">
                    Teşekkür Ederiz
                  </div>
                </div>
              `);
            } else {
              const sampleContent = [
                { title: "Ürün Özellikleri", content: "Yüksek kaliteli malzemeler kullanılarak üretilen ürünlerimiz, dayanıklılık ve performans açısından sektörde öncü konumdadır." },
                { title: "Teknik Bilgiler", content: "Modern teknoloji ile üretilen ürünlerimiz, international standartlara uygun olarak tasarlanmış ve test edilmiştir." },
                { title: "Kullanım Alanları", content: "Çok çeşitli kullanım alanlarına sahip ürünlerimiz, farklı sektörlerde başarıyla kullanılmaktadır." },
                { title: "Garanti ve Servis", content: "Tüm ürünlerimiz 2 yıl garanti kapsamında olup, 7/24 teknik destek hizmeti sunmaktayız." }
              ];
              
              const content = sampleContent[(i - 2) % sampleContent.length];
              pageDiv.html(`
                <div style="text-align: center; max-width: 400px;">
                  <h3 style="color: #d4af37; margin-bottom: 2rem; font-size: 1.8rem;">${content.title}</h3>
                  <p style="line-height: 1.6; margin-bottom: 2rem; text-align: justify;">${content.content}</p>
                  <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; border-left: 4px solid #d4af37;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; text-align: left;">
                      <div><strong>Kalite:</strong> Premium</div>
                      <div><strong>Garanti:</strong> 2 Yıl</div>
                      <div><strong>Teslimat:</strong> 3-5 Gün</div>
                      <div><strong>Destek:</strong> 7/24</div>
                    </div>
                  </div>
                  <div style="position: absolute; bottom: 20px; right: 20px; background: #d4af37; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">
                    ${i}
                  </div>
                </div>
              `);
            }
            
            flipbook.append(pageDiv);
          }

          // Turn.js'i başlat
flipbook.turn({
  width: window.innerWidth < 768 ? window.innerWidth * 0.9 : 900,
  height: window.innerWidth < 768 ? window.innerWidth * 1.2 : 600,
  autoCenter: true,
  display: window.innerWidth < 768 ? 'single' : 'double',
  acceleration: true,
  gradients: true,
  elevation: 50,
  when: {
    turning: (event: unknown, page: number, view: unknown) => {
      setIsFlipping(true);
      setCurrentPage(page);

      // Flip ses efekti (opsiyonel)
      const flipSound = document.getElementById('flip-sound') as HTMLAudioElement | null;
      if (flipSound) {
        flipSound.currentTime = 0;
        flipSound.play().catch(() => {});
      }

      setTimeout(() => {
        setIsFlipping(false);
      }, 600);
    },
    turned: (event: unknown, page: number) => {
      setCurrentPage(page);
    }
  }
});

        }
      }, 100);
    }
  };

  const handlePrevPage = () => {
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.turn) {
      const $ = window.jQuery;
      $('#flipbook').turn('previous');
    }
  };

  const handleNextPage = () => {
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.turn) {
      const $ = window.jQuery;
      $('#flipbook').turn('next');
    }
  };

  const goToPage = (page: number) => {
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.turn) {
      const $ = window.jQuery;
      $('#flipbook').turn('page', page);
    }
  };

  if (!isOpen || !catalogData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm">
      <div className={`rounded-3xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden transition-all duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Header */}
        <div className={`p-6 border-b flex items-center justify-between ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{catalogData.title}</h2>
            <div className="flex items-center space-x-4 mt-1">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{catalogData.category}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'}`}>
                {catalogData.pages} Sayfa Katalog
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Page Navigation */}
            <div className={`flex items-center space-x-3 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <button
                onClick={handlePrevPage}
                disabled={currentPage <= 1}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
                  currentPage <= 1 
                    ? 'opacity-50 cursor-not-allowed' 
                    : `${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-600'} hover:scale-110`
                }`}
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Sayfa {currentPage} / {catalogData.pages}
                </span>
              </div>
              
              <button
                onClick={handleNextPage}
                disabled={currentPage >= (catalogData.pages || 12)}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 ${
                  currentPage >= (catalogData.pages || 12)
                    ? 'opacity-50 cursor-not-allowed' 
                    : `${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-600'} hover:scale-110`
                }`}
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>

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

        {/* Flipbook Container */}
        <div className={`flex-1 p-8 flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`} style={{ minHeight: '600px' }}>
          <div className="flip-container flex justify-center items-center">
            <div id="flipbook" className={`shadow-2xl ${isFlipping ? 'animate-pulse' : ''}`}></div>
          </div>
        </div>

        {/* Footer */}
        <div className={`p-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Katalog Hakkında</h4>
              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {catalogData.description || 'Bu katalog özenle tasarlanmış ve hazırlanmıştır.'}
              </p>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Özellikler</h4>
              <ul className={`text-sm space-y-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <li>• İnteraktif Sayfa Çevirme</li>
                <li>• Yüksek Kaliteli Görseller</li>
                <li>• Professional Tasarım</li>
                <li>• Mobil Uyumlu</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>İletişim</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href={`https://wa.me/905551234567?text=${encodeURIComponent(`Merhaba! ${catalogData.title} katalogu hakkında bilgi almak istiyorum.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2 hover:scale-105"
                >
                  <div className="w-4 h-4 flex items-center justify-center">
                    <i className="ri-whatsapp-line"></i>
                  </div>
                  <span>Katalog Hakkında Bilgi Al</span>
                </a>
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 hover:scale-105">
                  PDF İndir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flip Sound Effect */}
      <audio id="flip-sound" preload="auto">
        <source src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmYeCC+a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCCuZ2PC8cigEKYDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFAxFnuDyvmYeCC2a2PC8cigEKIDA8N2QQAoUXrPp66hVFA==" type="audio/wav" />
      </audio>
    </div>
  );
}
