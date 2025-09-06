
'use client';

import { useState } from 'react';

interface QuoteFormProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function QuoteForm({ isOpen, onClose, isDarkMode }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Kurumsal Web Sitesi',
    'E-Ticaret Sitesi',
    'Portföy/Blog Sitesi',
    'Mobil Uygulama',
    'Grafik Tasarım',
    'SEO Hizmeti'
  ];

  const budgetRanges = [
    '₺1.000 - ₺3.000',
    '₺3.000 - ₺7.000',
    '₺7.000 - ₺15.000',
    '₺15.000+'
  ];

  const timelineOptions = [
    '1-2 hafta',
    '2-4 hafta',
    '1-2 ay',
    '2+ ay'
  ];

  const featureOptions = [
    'Responsive Tasarım',
    'SEO Optimizasyonu',
    'E-Ticaret Entegrasyonu',
    'Blog Sistemi',
    'Çoklu Dil Desteği',
    'Sosyal Medya Entegrasyonu',
    'Google Analytics',
    'Canlı Sohbet',
    'Online Ödeme Sistemi',
    'Üyelik Sistemi'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFeatureChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const quoteData = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };

      console.log('Quote Data:', quoteData);
      
      const whatsappMessage = `Merhaba! Web sitesi teklifi:

👤 İsim: ${formData.name}
📧 Email: ${formData.email}
📱 Telefon: ${formData.phone}
🏢 Şirket: ${formData.company}
🎯 Proje Tipi: ${formData.projectType}
💰 Bütçe: ${formData.budget}
⏰ Süre: ${formData.timeline}
📝 Açıklama: ${formData.description}
✨ Özellikler: ${formData.features.join(', ')}`;

      window.open(`https://wa.me/905551234567?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
      
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({
          name: '', email: '', phone: '', company: '', projectType: '', 
          budget: '', timeline: '', description: '', features: []
        });
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className={`rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-2xl text-green-600"></i>
            </div>
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Teşekkürler!</h3>
            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Teklifiniz WhatsApp üzerinden gönderildi. En kısa sürede size dönüş yapacağız.</p>
          </div>
        ) : (
          <>
            <div className={`p-6 border-b flex items-center justify-between ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Teklif Al</h2>
              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-colors duration-200 ${isDarkMode ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <i className="ri-close-line text-xl"></i>
                </div>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Ad Soyad *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Şirket</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Proje Tipi *</label>
                <select
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border pr-8 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
                >
                  <option value="">Seçiniz</option>
                  {projectTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Bütçe</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border pr-8 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
                  >
                    <option value="">Seçiniz</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Süre</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 border pr-8 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-800'}`}
                  >
                    <option value="">Seçiniz</option>
                    {timelineOptions.map(timeline => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>İstediğiniz Özellikler</label>
                <div className="grid grid-cols-2 gap-2">
                  {featureOptions.map(feature => (
                    <label key={feature} className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors duration-200 ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50'}`}>
                      <input
                        type="checkbox"
                        checked={formData.features.includes(feature)}
                        onChange={() => handleFeatureChange(feature)}
                        className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
                      />
                      <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Proje Açıklaması</label>
                <textarea
                  name="description"
                  rows={4}
                  maxLength={500}
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Projeniz hakkında detaylı bilgi verin..."
                  className={`w-full px-4 py-3 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-800 placeholder-gray-500'}`}
                />
                <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{formData.description.length}/500 karakter</p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || formData.description.length > 500}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Gönderiliyor...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-whatsapp-line"></i>
                    </div>
                    <span>WhatsApp ile Gönder</span>
                  </div>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
