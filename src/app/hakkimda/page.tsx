'use client';

import { useEffect } from 'react';

// Scroll animasyonu için fonksiyon
const handleScroll = () => {
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  const elementInView = (el: Element, scrollOffset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (elementTop <= window.innerHeight - scrollOffset);
  };

  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      el.classList.add('visible');
    }
  });
};

export default function AboutPage() {
  // Client-side kodları çalıştır
  useEffect(() => {
    // Scroll olayını dinle
    window.addEventListener('scroll', handleScroll);
    
    // İlk yükleme için scroll animasyonlarını kontrol et
    handleScroll();
    
    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Teknoloji ikonları
  const technologies = [
    { name: 'React', icon: '/icons/react.svg', category: 'Frontend' },
    { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'Frontend' },
    { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg', category: 'Frontend' },
    { name: 'Node.js', icon: '/icons/nodejs.svg', category: 'Backend' },
    { name: 'AI/LLM', icon: '/icons/ai.svg', category: 'Yapay Zeka' },
    { name: 'SaaS', icon: '/icons/saas.svg', category: 'Mimari' },
    { name: 'Git', icon: '/icons/git.svg', category: 'Araçlar' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 page-transition">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-dark)] to-[var(--accent)] dark:from-[var(--primary)] dark:to-[var(--accent)] relative inline-block">
        <span className="relative z-10">Hakkımda</span>
        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
      </h1>

      {/* Profil ve Özet Bölümü */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 scroll-animate fade-up">
        {/* Profil Kartı */}
        <div className="md:col-span-1">
          <div className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-[var(--card-border)] card-hover-effect p-6 group transition-all duration-300">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-lg border-4 border-white dark:border-gray-700 group-hover:shadow-[var(--primary)]/20 transition-all duration-500">
                ÖÖ
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-gray-800 shadow-md">
                <span className="animate-pulse">✓</span>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-center mb-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent">
              Ömer Özbay
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
              Genç Yazılımcı & Üretken Geliştirici
            </p>
            <div className="flex justify-center items-center mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Ağrı / Doğubayazıt
              </span>
            </div>
            <div className="flex justify-center space-x-3">
              <a 
                href="https://github.com/omerozbay"
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg btn-transition"
                aria-label="GitHub Profili"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/omerozbay"
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-[#0077B5] text-white rounded-lg hover:bg-[#005885] transition-all duration-300 hover:scale-110 hover:shadow-lg btn-transition"
                aria-label="LinkedIn Profili"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Özet Bilgi */}
        <div className="md:col-span-3">
          <div className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-[var(--card-border)] card-hover-effect p-6 group transition-all duration-300">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Kişisel Hikayem
            </h2>
            <div className="mb-4 p-3 border-l-4 border-[var(--primary)] bg-[var(--primary)]/5 rounded-r-md italic text-gray-600 dark:text-gray-300">
              &quot;Doğubayazıt’tan teknoloji dünyasına uzanan bir öğrenme ve üretim yolculuğu.&quot;
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Merhaba! Ben Ömer, 20 yaşındayım. Ağrı&apos;nın Doğubayazıt ilçesinde doğdum ve büyüdüm. Yazılım dünyasına olan ilgim, sadece kod yazmak değil, aynı zamanda değer üreten projeler geliştirmek üzerine kurulu.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong>İlgi Alanlarım:</strong> Web teknolojileri, SaaS (Software as a Service) modelleri ve Yapay Zeka (AI). Kendi kendime öğrenme (self-taught) disipliniyle sürekli gelişiyor, modern teknolojileri kullanarak global standartlarda işler çıkarmayı hedefliyorum.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Vizyon</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Yenilikçi projeler</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Öğrenme</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sürekli gelişim</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Lokasyon</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Doğubayazıt, Türkiye</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Hedef</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Global Etki</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #WebGeliştirme
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #SaaS
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #YapayZeka
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #NextJS
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #Girişimcilik
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Yetenekler Bölümü */}
      <section id="uzmanlik" className="mb-12 scroll-animate fade-up">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold relative inline-block">
            <span className="relative z-10">Uzmanlık & İlgi Alanları</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-md border border-[var(--card-border)] p-4 flex flex-col items-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-3 text-[var(--primary)] bg-[var(--primary)]/5 rounded-full group-hover:bg-[var(--primary)]/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-center group-hover:text-[var(--primary)] transition-colors">{tech.name}</h3>
              <span className="text-xs text-[var(--primary)] mt-2 px-2 py-0.5 rounded-full bg-[var(--primary)]/10">{tech.category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Deneyim Bölümü */}
      <section id="deneyim" className="mb-12 scroll-animate fade-up">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold relative inline-block">
            <span className="relative z-10">Gelişim Yolculuğum</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h2>
        </div>

        <div className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-[var(--card-border)] p-6">
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-[var(--primary)]/30 group">
              <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-[var(--primary)] group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors flex items-center">
                  Freelance & Proje Geliştirme
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Aktif
                  </span>
                </h3>
                <p className="text-[var(--primary)] dark:text-[var(--primary-light)] font-medium text-sm md:text-base flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2022 - Günümüz
                </p>
              </div>
              <div className="mb-3">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Web tabanlı projeler geliştiriyor, açık kaynak dünyasına katkıda bulunuyor ve SaaS fikirleri üzerinde çalışıyorum.
                </p>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-[var(--primary)]/30 group">
              <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-[var(--primary)] group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors">
                  Kendi Kendine Öğrenme (Self-Taught)
                </h3>
                <p className="text-[var(--primary)] dark:text-[var(--primary-light)] font-medium text-sm md:text-base flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2020 - 2022
                </p>
              </div>
              <div className="mb-3">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  İnternet kaynakları, dokümantasyonlar ve online kurslar aracılığıyla yazılım temellerini ve modern web teknolojilerini öğrendim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
