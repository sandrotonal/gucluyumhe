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
    { name: 'Express', icon: '/icons/express.svg', category: 'Backend' },
    { name: 'MongoDB', icon: '/icons/mongodb.svg', category: 'Backend' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg', category: 'Backend' },
    { name: 'GraphQL', icon: '/icons/graphql.svg', category: 'Backend' },
    { name: 'Git', icon: '/icons/git.svg', category: 'Araçlar' },
    { name: 'Docker', icon: '/icons/docker.svg', category: 'Araçlar' },
    { name: 'AWS', icon: '/icons/aws.svg', category: 'Araçlar' },
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
              Senior Full Stack Geliştirici
            </p>
            <div className="flex justify-center items-center mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mr-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                Müsait
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Yeni projeler için</span>
            </div>
            <div className="flex justify-center space-x-3">
              <a 
                href="https://github.com/username" 
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
                href="https://twitter.com/username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#0c85d0] transition-all duration-300 hover:scale-110 hover:shadow-lg btn-transition"
                aria-label="Twitter Profili"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/username" 
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
              Profesyonel Profil
            </h2>
            <div className="mb-4 p-3 border-l-4 border-[var(--primary)] bg-[var(--primary)]/5 rounded-r-md italic text-gray-600 dark:text-gray-300">
              &quot;Teknoloji tutkusu ve çözüm odaklı yaklaşımımla, işletmenizin dijital dönüşümüne katkı sağlamak için buradayım.&quot;
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Merhaba! Ben Ömer, 5+ yıllık deneyime sahip bir <strong>Senior Full Stack Geliştirici</strong> olarak, kurumsal ve startup projelerinde end-to-end çözümler sunuyorum. Modern web teknolojileri kullanarak, ölçeklenebilir, güvenli ve yüksek performanslı uygulamalar geliştiriyorum.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              <strong>Uzmanlık alanlarım:</strong> Kurumsal web uygulamaları, e-ticaret platformları, SaaS çözümleri ve API entegrasyonları. Çevik metodolojileri benimseyerek, iş hedeflerinize uygun teknoloji stratejileri geliştiriyorum.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Güvenli Kod</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">OWASP standartları</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Yüksek Performans</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Optimize edilmiş çözümler</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Ölçeklenebilirlik</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Büyüyen iş ihtiyaçları</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Hızlı Teslimat</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Çevik metodolojiler</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #WebGeliştirme
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #KurumsalÇözümler
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #FullStack
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #ReactJS
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #NodeJS
              </span>
              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-sm rounded-full font-medium hover:bg-[var(--primary)]/20 transition-colors hover:scale-105 cursor-default">
                #APIEntegrasyonu
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Yetenekler Bölümü */}
      <section className="mb-12 scroll-animate fade-up">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold relative inline-block">
            <span className="relative z-10">Uzmanlık Alanları</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-xs rounded-md bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)]/20 transition-colors">
              Tümü
            </button>
            <button className="px-3 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Frontend
            </button>
            <button className="px-3 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Backend
            </button>
            <button className="px-3 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Araçlar
            </button>
          </div>
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
              <div className="mt-2 w-full">
                <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-full"
                    style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-xs text-[var(--primary)] mt-2 px-2 py-0.5 rounded-full bg-[var(--primary)]/10">{tech.category}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-md border border-[var(--card-border)]">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Sertifikalar ve Başarılar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start p-3 bg-white/5 rounded-lg border border-[var(--card-border)]/30 hover:bg-[var(--primary)]/5 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[var(--primary)]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium group-hover:text-[var(--primary)] transition-colors">AWS Certified Solutions Architect</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Amazon Web Services, 2022</p>
              </div>
            </div>
            <div className="flex items-start p-3 bg-white/5 rounded-lg border border-[var(--card-border)]/30 hover:bg-[var(--primary)]/5 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[var(--primary)]/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium group-hover:text-[var(--primary)] transition-colors">Certified Scrum Master (CSM)</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Scrum Alliance, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deneyim Bölümü */}
      <section className="mb-12 scroll-animate fade-up">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold relative inline-block">
            <span className="relative z-10">Profesyonel Deneyim</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h2>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>5+ yıl deneyim</span>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-[var(--card-border)] p-6">
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-[var(--primary)]/30 group">
              <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-[var(--primary)] group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors flex items-center">
                  Senior Full Stack Developer
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Güncel
                  </span>
                </h3>
                <p className="text-[var(--primary)] dark:text-[var(--primary-light)] font-medium text-sm md:text-base flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2020 - Günümüz
                </p>
              </div>
              <div className="flex items-center mb-3">
                <p className="text-[var(--primary-dark)] dark:text-[var(--primary-light)] font-medium flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  XYZ Teknoloji
                </p>
                <span className="mx-2 text-gray-400">•</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  İstanbul, Türkiye
                </p>
              </div>
              <div className="mb-3">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Kurumsal müşteriler için web uygulamaları geliştirme, mevcut sistemlerin optimizasyonu ve ekip liderliği görevlerini yürütmekteyim.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  React.js
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  Node.js
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  AWS
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  MongoDB
                </span>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-[var(--primary)]/30 group">
              <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-[var(--primary)] group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors">
                  Frontend Developer
                </h3>
                <p className="text-[var(--primary)] dark:text-[var(--primary-light)] font-medium text-sm md:text-base flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2018 - 2020
                </p>
              </div>
              <div className="flex items-center mb-3">
                <p className="text-[var(--primary-dark)] dark:text-[var(--primary-light)] font-medium flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  ABC Yazılım
                </p>
                <span className="mx-2 text-gray-400">•</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Ankara, Türkiye
                </p>
              </div>
              <div className="mb-3">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  E-ticaret platformları için kullanıcı arayüzleri tasarlama ve geliştirme, performans optimizasyonu ve responsive tasarım uygulamaları.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  JavaScript
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  Vue.js
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  CSS/SASS
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  Webpack
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eğitim Bölümü */}
      <section className="mb-12 scroll-animate fade-up">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold relative inline-block">
            <span className="relative z-10">Eğitim & Akademik Geçmiş</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h2>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            <span>Sürekli öğrenme</span>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-[var(--card-border)] p-6">
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-[var(--primary)]/30 group">
              <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-[var(--primary)] group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors flex items-center">
                  Bilgisayar Mühendisliği, Lisans
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Onur Derecesi
                  </span>
                </h3>
                <p className="text-[var(--primary)] dark:text-[var(--primary-light)] font-medium text-sm md:text-base flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2014 - 2018
                </p>
              </div>
              <div className="flex items-center mb-3">
                <p className="text-[var(--primary-dark)] dark:text-[var(--primary-light)] font-medium flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  XYZ Üniversitesi
                </p>
                <span className="mx-2 text-gray-400">•</span>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  İstanbul, Türkiye
                </p>
              </div>
              <div className="mb-3">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Yazılım geliştirme, veri yapıları ve algoritmalar, web teknolojileri üzerine kapsamlı eğitim aldım. Bitirme projemde gerçek zamanlı veri analizi yapan bir web uygulaması geliştirdim.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  Algoritma Tasarımı
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  Veri Yapıları
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  Web Geliştirme
                </span>
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                  Veri Tabanı Sistemleri
                </span>
              </div>
            </div>
            
            <div className="relative pl-8 border-l-2 border-[var(--primary)]/30 group">
              <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-[var(--primary)] group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg font-medium group-hover:text-[var(--primary)] transition-colors">
                  Modern Web Geliştirme Sertifikası
                </h3>
                <p className="text-[var(--primary)] dark:text-[var(--primary-light)] font-medium text-sm md:text-base flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2019
                </p>
              </div>
              <div className="flex items-center mb-3">
                <p className="text-[var(--primary-dark)] dark:text-[var(--primary-light)] font-medium flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Udemy
                </p>
              </div>
              <div className="mb-3">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Modern JavaScript, React, Node.js ve MongoDB kullanarak tam yığın web uygulamaları geliştirme üzerine kapsamlı bir eğitim programını tamamladım.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section className="mb-12 scroll-animate fade-up" id="iletisim">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold relative inline-block">
            <span className="relative z-10">İletişim & Bağlantılar</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
          </h2>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>24 saat içinde dönüş</span>
          </div>
        </div>

        <div className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-[var(--card-border)] p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:info@example.com"
              className="group flex flex-col items-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transform group-hover:scale-110 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">Email İletişim</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-3">
                Proje teklifleri ve iş birliği için
              </p>
              <p className="text-[var(--primary)] font-medium">
                info@example.com
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 rounded-full text-xs bg-[var(--primary)]/10 text-[var(--primary)]">
                  Tıkla ve Mail Gönder
                </span>
              </div>
            </a>

            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transform group-hover:scale-110 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">GitHub Profilim</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-3">
                Açık kaynak projelerim ve katkılarım
              </p>
              <p className="text-[var(--primary)] font-medium">
                github.com/username
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 rounded-full text-xs bg-[var(--primary)]/10 text-[var(--primary)]">
                  Projeleri İncele
                </span>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-[var(--primary)] dark:hover:border-[var(--primary)] hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] mb-4 group-hover:bg-[var(--primary)] group-hover:text-white transform group-hover:scale-110 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">LinkedIn Profilim</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-3">
                Profesyonel ağım ve kariyer geçmişim
              </p>
              <p className="text-[var(--primary)] font-medium">
                linkedin.com/in/username
              </p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-4 py-2 rounded-full text-xs bg-[var(--primary)]/10 text-[var(--primary)]">
                  Bağlantı Kur
                </span>
              </div>
            </a>
          </div>
          
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--primary)] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="font-medium text-lg">Hızlı İletişim</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Acil projeler veya işbirliği teklifleri için doğrudan iletişime geçebilirsiniz. Genellikle 24 saat içinde dönüş yaparım.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                Twitter
              </a>
              <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm3.224 17.871c.188.133.43.166.646.085.215-.082.374-.253.463-.463.089-.21.089-.443 0-.653l-1.741-4.555c-.122-.293-.396-.509-.715-.563l-4.794-.808c-.218-.043-.441.013-.623.151-.182.139-.301.351-.327.584-.026.234.039.468.178.648l1.307 1.696c.143.186.36.295.588.295s.445-.109.588-.295l1.479-1.908 1.252 3.295-2.662 1.783c-.188.133-.319.337-.363.568-.044.23.013.469.155.658l.814 1.149c.143.186.36.295.588.295s.445-.109.588-.295l2.925-3.784 1.214 3.184c.064.168.19.308.351.39zm-3.224-17.871c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
                </svg>
                Telegram
              </a>
              <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </a>
              <a href="skype:username?chat" className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.987 13.966c.01-.141.023-.274.023-.424 0-1.562-.37-3.023-1.002-4.339-1.383-2.885-4.139-4.893-7.365-5.159-1.643-.136-3.243.018-4.736.506l-.495.172c-1.275.45-2.426 1.079-3.431 1.894-.986.802-1.821 1.779-2.457 2.905l-.258.495c-.44.845-.693 1.71-.834 2.565-.149.89-.149 1.891.039 2.825.187.935.506 1.821.935 2.621.9 1.684 2.389 3.027 4.258 3.815 1.789.757 3.7.935 5.489.506l.495-.097c1.049-.204 2.061-.612 3.017-1.225 1.002-.64 1.883-1.484 2.621-2.5l.258-.424c.58-.971.971-1.981 1.225-3.017.097-.379.136-.772.172-1.164.039-.399.039-.809.039-1.208 0-.018-.023-.018-.023-.036 0-.018 0-.018-.023-.018zm-6.42 3.849c-1.688 0-3.305-.379-4.736-1.002-.935-.506-1.753-1.164-2.389-1.97-.58-.757-.971-1.6-1.15-2.5-.097-.486-.097-.971-.039-1.457.058-.486.172-.971.37-1.419.204-.486.467-.935.771-1.347.332-.424.693-.809 1.114-1.15.424-.341.887-.641 1.383-.887.486-.238 1.002-.424 1.527-.55.58-.136 1.15-.204 1.753-.204.58 0 1.15.068 1.73.204 1.15.272 2.209.771 3.14 1.484.935.693 1.688 1.6 2.209 2.621.486.971.771 2.061.771 3.188 0 .58-.068 1.15-.204 1.73-.136.58-.341 1.114-.58 1.643-.272.506-.58.971-.935 1.419-.341.424-.771.809-1.225 1.15-.467.341-.971.641-1.484.887-.521.238-1.061.424-1.6.55-.58.136-1.15.204-1.753.204l.097-.068zm2.567-4.339c.204-.272.341-.58.341-.935 0-.341-.136-.667-.341-.935-.204-.272-.486-.467-.809-.58-.332-.136-.693-.204-1.061-.272-.341-.068-.693-.097-1.002-.172-.272-.068-.486-.136-.667-.238-.136-.097-.204-.204-.204-.341 0-.136.068-.272.204-.341.136-.097.341-.136.58-.136.272 0 .521.068.693.204.172.136.341.341.424.58l.039.097c.341-.097.693-.204 1.061-.272-.039-.136-.097-.272-.172-.399-.097-.172-.204-.341-.341-.486-.136-.136-.341-.272-.521-.341-.204-.097-.424-.136-.667-.136h-.204c-.341 0-.667.068-.971.204-.297.136-.521.341-.693.58-.172.238-.258.521-.258.809v.068c0 .272.068.521.204.693.136.204.297.341.486.467.204.097.424.204.667.272.238.068.486.097.771.136.258.039.521.097.771.136.238.039.467.097.667.172.204.068.341.172.467.272.097.097.172.238.172.399 0 .204-.097.399-.272.521-.172.136-.424.204-.693.204-.341 0-.641-.097-.887-.272-.238-.172-.399-.424-.486-.693l-.039-.097c-.379.097-.771.204-1.15.297.039.172.097.341.172.486.097.172.204.341.341.486.136.136.297.272.486.399.172.097.379.172.58.238.204.068.424.097.641.097h.341c.399 0 .771-.068 1.114-.204.341-.136.612-.341.809-.58zm1.753-2.389c-.068-.204-.136-.399-.238-.58-.097-.204-.238-.379-.379-.55-.136-.172-.297-.341-.486-.486-.172-.136-.379-.272-.58-.379-.204-.097-.424-.204-.641-.272-.238-.068-.467-.136-.693-.172-.258-.039-.486-.068-.771-.068-.258 0-.521.029-.771.068-.238.039-.486.097-.693.172-.238.068-.467.172-.667.272-.204.097-.399.238-.58.379-.172.136-.341.297-.486.486-.136.172-.272.341-.379.55-.097.204-.172.399-.238.58-.058.204-.097.399-.136.612-.039.204-.039.424-.039.641 0 .204 0 .424.039.641.039.204.068.399.136.612.068.204.136.399.238.58.097.204.238.379.379.55.136.172.297.341.486.486.172.136.379.272.58.379.204.097.424.204.667.272.238.068.467.136.693.172.258.039.486.068.771.068.258 0 .521-.029.771-.068.238-.039.486-.097.693-.172.238-.068.467-.172.667-.272.204-.097.399-.238.58-.379.172-.136.341-.297.486-.486.136-.172.272-.341.379-.55.097-.204.172-.399.238-.58.058-.204.097-.399.136-.612.039-.204.039-.424.039-.641 0-.204 0-.424-.039-.641-.068-.238-.097-.424-.136-.612z"/>
                </svg>
                Skype
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}