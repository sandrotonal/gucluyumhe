"use client";

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Şirket Bilgileri */}
          <div className="flex flex-col">
            <Link href="/" className="text-xl font-bold mb-4 inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">Portfolyo</span> Blog
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Profesyonel web geliştirme ve yazılım çözümleri. Modern teknolojilerle işinizi bir üst seviyeye taşıyın.
            </p>
            <div className="flex items-center space-x-1 text-[var(--primary)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-600 dark:text-gray-300">İstanbul, Türkiye</span>
            </div>
          </div>
          
          {/* Hızlı Bağlantılar */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">Hızlı Bağlantılar</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-1"></span>
                Ana Sayfa
              </Link>
              <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-1"></span>
                Blog
              </Link>
              <Link href="/hakkimda" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-1"></span>
                Hakkımda
              </Link>
              <Link href="/hakkimda#iletisim" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-1"></span>
                İletişim
              </Link>
              <Link href="/hakkimda#deneyim" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-1"></span>
                Deneyim
              </Link>
              <Link href="/hakkimda#uzmanlik" className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-2 mr-0 group-hover:mr-1"></span>
                Uzmanlık
              </Link>
            </div>
          </div>
          
          {/* Sosyal Medya */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-4">Bağlantıda Kalın</h3>
            <div className="flex flex-col space-y-4">
              <Link 
                href="https://github.com/omerozbay"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full group-hover:bg-[var(--primary-light)] group-hover:text-[var(--primary)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">GitHub</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Kod projelerimi inceleyin</span>
                </div>
              </Link>
              <Link 
                href="https://linkedin.com/in/omerozbay"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full group-hover:bg-[var(--primary-light)] group-hover:text-[var(--primary)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">LinkedIn</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Profesyonel profilim</span>
                </div>
              </Link>
              <Link 
                href="/hakkimda#iletisim" 
                className="text-gray-600 dark:text-gray-300 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300 flex items-center gap-3 group"
              >
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full group-hover:bg-[var(--primary-light)] group-hover:text-[var(--primary)] transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">E-posta</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">24 saat içinde dönüş</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Alt Kısım */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {currentYear} Portfolyo Blog. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/hakkimda" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300">
              Gizlilik Politikası
            </Link>
            <Link href="/hakkimda" className="text-sm text-gray-500 dark:text-gray-400 hover:text-[var(--primary)] dark:hover:text-[var(--primary)] transition-all duration-300">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;