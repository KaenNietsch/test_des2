
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yaka & Co. - Profesyonel Web Tasarım ve Dijital Pazarlama Ajansı | İstanbul",
  description: "Türkiye'nin en güvenilir web tasarım ajansı. SEO uyumlu, responsive web sitesi tasarımı, e-ticaret çözümleri, dijital pazarlama ve kurumsal web sitesi hizmetleri. Profesyonel web tasarım için hemen teklif alın.",
  keywords: "web tasarım, web sitesi tasarımı, e-ticaret sitesi, SEO optimizasyonu, dijital pazarlama, kurumsal web sitesi, responsive tasarım, mobil uyumlu web sitesi, web tasarım ajansı, İstanbul web tasarım, profesyonel web tasarım, modern web sitesi, web geliştirme, online mağaza, web tasarım fiyatları",
  authors: [{ name: "Yaka & Co. Web Tasarım Ajansı" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://yakaco.com"
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://yakaco.com",
    title: "Yaka & Co. - Profesyonel Web Tasarım Ajansı | SEO Uyumlu Web Sitesi",
    description: "Türkiye'nin önde gelen web tasarım ajansı. SEO uyumlu, modern ve responsive web sitesi tasarımları. E-ticaret, kurumsal web sitesi ve dijital pazarlama çözümleri.",
    siteName: "Yaka & Co. Web Tasarım Ajansı",
    images: [{
      url: "https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png",
      width: 1200,
      height: 630,
      alt: "Yaka & Co. Profesyonel Web Tasarım Ajansı Logo"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yaka & Co. - Profesyonel Web Tasarım ve SEO Hizmetleri",
    description: "Modern web tasarım, e-ticaret çözümleri ve SEO optimizasyonu ile dijital dünyadaki prestijinizi yükseltin. Profesyonel web tasarım ajansı.",
    images: ["https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png"]
  },
  icons: {
    icon: "https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png",
    shortcut: "https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png",
    apple: "https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://yakaco.com" />
        <meta name="theme-color" content="#f59e0b" />
        <meta name="geo.region" content="TR-34" />
        <meta name="geo.placename" content="İstanbul" />
        <meta name="geo.position" content="41.0082;28.9784" />
        <meta name="ICBM" content="41.0082, 28.9784" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Yaka & Co. Web Tasarım Ajansı",
              "alternateName": "Yaka & Co.",
              "description": "Profesyonel web tasarım, SEO optimizasyonu ve dijital pazarlama hizmetleri sunan öncü ajans.",
              "url": "https://yakaco.com",
              "logo": "https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png",
              "foundingDate": "2020",
              "sameAs": [
                "https://www.facebook.com/yakaco",
                "https://www.instagram.com/yakaco",
                "https://www.linkedin.com/company/yakaco",
                "https://twitter.com/yakaco"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+905551234567",
                "contactType": "customer service",
                "availableLanguage": ["Turkish", "English"],
                "areaServed": "TR"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "İstanbul",
                "addressRegion": "İstanbul",
                "addressCountry": "TR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "250"
              },
              "services": [
                "Profesyonel Web Sitesi Tasarımı",
                "E-Ticaret Çözümleri", 
                "SEO Optimizasyonu",
                "Dijital Pazarlama",
                "Kurumsal Web Sitesi",
                "Mobil Uyumlu Tasarım",
                "Grafik Tasarım",
                "Mobil Uygulama Geliştirme"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Tasarım Hizmetleri",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Başlangıç Web Sitesi Paketi",
                      "description": "5 sayfalık responsive web sitesi, SEO optimizasyonu, 1 yıl hosting dahil"
                    },
                    "price": "2500",
                    "priceCurrency": "TRY"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Profesyonel Web Sitesi Paketi",
                      "description": "10 sayfalık web sitesi, e-ticaret modülü, gelişmiş SEO, 2 yıl hosting"
                    },
                    "price": "4500",
                    "priceCurrency": "TRY"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Premium Kurumsal Web Sitesi",
                      "description": "Sınırsız sayfa, özel e-ticaret, premium SEO, 3 yıl hosting"
                    },
                    "price": "7500", 
                    "priceCurrency": "TRY"
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Yaka & Co. Web Tasarım Ajansı",
              "image": "https://static.readdy.ai/image/0190a5f87890c318d7e8388d26802538/72f3df1b7bd4b1a9280d8c6d471b2f81.png",
              "telephone": "+905551234567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dijital Tasarım Merkezi",
                "addressLocality": "İstanbul",
                "addressRegion": "İstanbul", 
                "postalCode": "34000",
                "addressCountry": "TR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.0082,
                "longitude": 28.9784
              },
              "url": "https://yakaco.com",
              "openingHours": "Mo-Fr 09:00-18:00",
              "priceRange": "₺₺₺",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "250"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
