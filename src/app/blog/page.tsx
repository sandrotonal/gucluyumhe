'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// Scroll animasyonu kaldırıldı

export default function BlogPage() {
  // Statik blog yazıları
  const allPostsData = [
    {
      id: 'yapay-zeka-yazilim-gelistirme',
      title: 'Yapay Zeka ile Yazılım Geliştirme: Fırsatlar ve Zorluklar',
      date: '2023-10-15',
      coverImage: '/images/blog/ai-development.jpg',
      excerpt: 'Yapay zeka teknolojilerinin yazılım geliştirme süreçlerine entegrasyonu, avantajları ve karşılaşılan zorluklar.',
      tags: ['Yapay Zeka', 'Yazılım Geliştirme', 'AI Araçları']
    },
    {
      id: 'modern-frontend-mimarileri',
      title: 'Modern Frontend Mimarileri ve Performans Optimizasyonu',
      date: '2023-11-05',
      coverImage: '/images/blog/frontend-architecture.jpg',
      excerpt: 'Günümüz web uygulamalarında kullanılan modern frontend mimarileri ve performans optimizasyon teknikleri.',
      tags: ['Frontend', 'Performans', 'Mimari']
    },
    {
      id: 'mobil-uygulama-gelistirme-stratejileri',
      title: 'Etkili Mobil Uygulama Geliştirme Stratejileri',
      date: '2023-12-01',
      coverImage: '/images/blog/mobile-dev.jpg',
      excerpt: 'Başarılı mobil uygulamalar geliştirmek için izlenmesi gereken stratejiler ve en iyi uygulamalar.',
      tags: ['Mobil Geliştirme', 'UX Tasarımı', 'App Stratejisi']
    },
    {
      id: 'web-gelistirme-trendleri',
      title: 'Web Geliştirme Trendleri 2023',
      date: '2023-06-15',
      coverImage: '/images/blog/web-trends.jpg',
      excerpt: 'Bu yazıda 2023 yılının öne çıkan web geliştirme trendlerini inceliyoruz.',
      tags: ['Web Geliştirme', 'Trendler', 'Frontend']
    },
    {
      id: 'react-hooks-kullanimi',
      title: 'React Hooks Kullanım Rehberi',
      date: '2023-05-20',
      coverImage: '/images/blog/react-hooks.jpg',
      excerpt: 'React Hooks ile fonksiyonel komponentlerde state yönetimi ve yaşam döngüsü.',
      tags: ['React', 'Hooks', 'JavaScript']
    },
    {
      id: 'yapay-zeka-web-gelistirme',
      title: 'Yapay Zeka ve Web Geliştirme İlişkisi',
      date: '2023-07-10',
      coverImage: '/images/blog/ai-web.jpg',
      excerpt: 'Yapay zeka teknolojilerinin modern web geliştirme süreçlerine etkileri.',
      tags: ['Yapay Zeka', 'Web Geliştirme', 'Teknoloji']
    },
    {
      id: 'uygulama-gelistirme-sureci',
      title: 'Bir Uygulamayı Sıfırdan Üretme Süreci',
      date: '2023-08-05',
      coverImage: '/images/blog/app-development.jpg',
      excerpt: 'Fikir aşamasından yayınlamaya kadar bir web uygulaması geliştirme sürecinin adımları.',
      tags: ['Uygulama Geliştirme', 'Proje Yönetimi', 'Web']
    },
    {
      id: 'web-gelistirme-hatalari',
      title: 'Web Geliştirmede Karşılaşılan Yaygın Hatalar ve Çözümleri',
      date: '2023-09-01',
      coverImage: '/images/blog/common-mistakes.jpg',
      excerpt: 'Web geliştirme sürecinde sık karşılaşılan hatalar ve bunları çözme yöntemleri.',
      tags: ['Hata Ayıklama', 'Web Geliştirme', 'Best Practices']
    }
  ];
  
  // Client-side kodları çalıştır
  useEffect(() => {
    // Sayfa yüklendiğinde yapılacak işlemler buraya eklenebilir
  }, []);

  return (
    <div className="space-y-8 page-transition">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 relative inline-block">
          <span className="relative z-10">Blog Yazıları</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--primary)] rounded-full"></span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Yazılım geliştirme, web teknolojileri ve projelerim hakkında düşüncelerimi paylaştığım yazılar.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPostsData.map((post, index) => (
          <div 
            key={post.id} 
            className="bg-[var(--card-bg)] dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-[var(--card-border)] card-hover-effect"
          >
            {post.coverImage && (
              <Link href={`/blog/${post.id}`} className="group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
            )}
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20 text-[var(--primary-dark)] dark:text-[var(--primary-light)] text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 hover:text-[var(--primary)] dark:hover:text-[var(--primary-light)] transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 mb-5 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-lg hover:bg-[var(--primary-dark)] transition-all duration-300 btn-transition">
                    <span>Devamını Oku</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <button 
                    onClick={() => {
                      alert(`${post.id} için demo başlatılıyor...`);
                      // Burada gerçek bir demo başlatma kodu olabilir
                      // Örneğin: window.open(`/demo/${post.id}`, '_blank');
                    }}
                    className="inline-flex items-center px-4 py-2 bg-[var(--accent)] text-white text-sm rounded-lg hover:bg-opacity-90 transition-all duration-300 btn-transition"
                  >
                    <span>Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                  </button>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {post.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {allPostsData.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Henüz blog yazısı bulunmamaktadır. Yakında yeni yazılar eklenecektir.
          </p>
        </div>
      )}
    </div>
  );
}