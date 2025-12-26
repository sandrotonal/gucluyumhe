'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PostMetadata } from '@/utils/markdown';
import Image from 'next/image';
import Link from 'next/link';

interface BlogClientProps {
  allPostsData: PostMetadata[];
}

export default function BlogClient({ allPostsData }: BlogClientProps) {
  useScrollAnimation();

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
        {allPostsData.map((post) => (
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
