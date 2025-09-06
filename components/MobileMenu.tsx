
'use client';

import { useState } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onQuoteFormOpen?: () => void;
}

export default function MobileMenu({ isOpen, onClose, isDarkMode, toggleDarkMode, onQuoteFormOpen }: MobileMenuProps) {
  const menuItems = [
    { label: 'Ana Sayfa', href: '#hero', icon: 'ri-home-line' },
    { label: 'Hizmetler', href: '#services', icon: 'ri-service-line' },
    { label: 'Portföy', href: '#portfolio', icon: 'ri-folder-line' },
    { label: 'Fiyatlar', href: '#pricing', icon: 'ri-price-tag-line' },
    { label: 'SSS', href: '#faq', icon: 'ri-question-line' },
    { label: 'İletişim', href: '#contact', icon: 'ri-phone-line' }
  ];

  const handleMenuClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClick = () => {
    onClose();
    if (onQuoteFormOpen) {
      onQuoteFormOpen();
    }
  };

  return (
    <div className={`fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50' : 'opacity-0'}`}
        onClick={onClose}
      />
      
      <div className={`absolute right-0 top-0 h-full w-80 max-w-[90vw] shadow-2xl transform transition-all duration-500 ease-out overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full transform translate-x-16 -translate-y-16 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-500 to-amber-700 rounded-full transform -translate-x-12 translate-y-12 animate-pulse delay-300"></div>
        </div>
        
        {/* Header */}
        <div className={`p-6 border-b relative z-10 ${isDarkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-100 bg-white/50'}`} >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png"
                  alt="Logo"
                  className="w-8 h-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
                <div className="absolute inset-0 bg-amber-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <span className="font-[\'Pacifico\'] text-xl text-amber-600 transition-all duration-300 group-hover:text-amber-500">Yaka & Co.</span>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 ${isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-close-line text-xl"></i>
              </div>
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="p-6 relative z-10">
          <ul className="space-y-3">
            {menuItems.map((item, index) => (
              <li 
                key={index}
                className={`transform transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <button
                  onClick={() => handleMenuClick(item.href)}
                  className={`w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 text-left group hover:scale-[1.02] hover:-translate-y-1 ${isDarkMode ? 'hover:bg-gray-800 hover:shadow-lg hover:shadow-amber-400/20' : 'hover:bg-amber-50 hover:shadow-lg'}`}
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${isDarkMode ? 'bg-gray-800 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-600' : 'bg-amber-100 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-600'}`}>
                    <i className={`${item.icon} text-xl transition-all duration-500 ${isDarkMode ? 'text-amber-400 group-hover:text-white' : 'text-amber-600 group-hover:text-white'}`}></i>
                  </div>
                  <div className="flex-1">
                    <span className={`font-medium transition-all duration-300 ${isDarkMode ? 'text-gray-200 group-hover:text-amber-400' : 'text-gray-700 group-hover:text-amber-600'}`}>
                      {item.label}
                    </span>
                  </div>
                  <div className="w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <i className="ri-arrow-right-line text-amber-600"></i>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle */}
          <div className={`mt-6 p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-amber-100'}`}>
                  <i className={`ri-contrast-2-line text-lg ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`}></i>
                </div>
                <span className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>Tema</span>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative w-14 h-8 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-amber-600' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-300 transform ${isDarkMode ? 'translate-x-7 bg-white' : 'translate-x-1 bg-white'} shadow-md flex items-center justify-center`}>
                  <i className={`text-sm ${isDarkMode ? 'ri-moon-line text-amber-600' : 'ri-sun-line text-yellow-500'}`}></i>
                </div>
              </button>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className={`mt-6 pt-6 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
            <button
              onClick={handleQuoteClick}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 shadow-lg cursor-pointer flex items-center justify-center space-x-2 group relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700' : 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700'}`}
            >
              <div className="w-5 h-5 flex items-center justify-center group-hover:animate-bounce">
                <i className="ri-file-text-line"></i>
              </div>
              <span>Ücretsiz Teklif Al</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        </nav>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
      </div>
    </div>
  );
}
