'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PostMetadata } from '@/utils/markdown';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface BlogClientProps {
  allPostsData: PostMetadata[];
}

export default function BlogClient({ allPostsData }: BlogClientProps) {
  useScrollAnimation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Helper to calculate read time (approximate)
  const getReadTime = (excerpt: string) => {
    // This is a rough estimate since we don't have full content here
    // Assuming excerpt is ~10-20% of content, or just a placeholder
    // A better way would be to pass readTime from server if possible
    return Math.ceil((excerpt.length * 5) / 200) || 3;
  };

  return (
    <div className="space-y-12 page-transition">
      <header className="py-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
          Yazılar & Düşünceler
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Yazılım geliştirme, modern web teknolojileri ve öğrenme yolculuğum üzerine teknik notlar ve deneyimler.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {allPostsData.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 dark:hover:shadow-black/50 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 h-full"
            onMouseEnter={() => setHoveredId(post.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image Container */}
            <div className="relative h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
              {post.coverImage ? (
                <Link href={`/blog/${post.id}`}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={allPostsData.indexOf(post) < 3}
                  />
                </Link>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Tags Floating */}
              {post.tags && post.tags.length > 0 && (
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-gray-800 dark:text-gray-200 text-xs font-bold rounded-full shadow-lg"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-gray-800 dark:text-gray-200 text-xs font-bold rounded-full shadow-lg">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
              {/* Meta Info Top */}
              <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{getReadTime(post.excerpt)} dk okuma</span>
                </div>
              </div>

              <Link href={`/blog/${post.id}`} className="block mb-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h2>
              </Link>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                {post.excerpt}
              </p>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-auto">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center group-hover:underline"
                >
                  Devamını Oku
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                {/* Author Avatar (Placeholder) */}
                <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white flex items-center justify-center mr-2 text-[10px]">
                    ÖÖ
                  </div>
                  <span>Ömer</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {allPostsData.length === 0 && (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">
            Henüz blog yazısı bulunmamaktadır.
          </p>
          <p className="text-gray-500 mt-2">Çok yakında yeni içeriklerle buradayım!</p>
        </div>
      )}

      {/* Newsletter / CTA Section could go here */}
    </div>
  );
}
