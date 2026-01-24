'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PostMetadata } from '@/utils/markdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Deterministic gradient generator based on string input
function getGradientForPost(id: string) {
  const gradients = [
    "from-cyan-900 via-blue-900 to-indigo-900",
    "from-purple-900 via-indigo-900 to-blue-900",
    "from-emerald-900 via-teal-900 to-cyan-900",
    "from-rose-900 via-pink-900 to-purple-900",
    "from-amber-900 via-orange-900 to-red-900",
    "from-blue-900 via-slate-900 to-gray-900",
  ];

  // Simple hash function
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
}

interface BlogCardProps {
  post: PostMetadata;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const fallbackGradient = getGradientForPost(post.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      className="group relative flex flex-col h-full"
    >
      <Link href={`/blog/${post.id}`} className="block h-full">
        <div className={cn(
          "h-full flex flex-col bg-[#111827] rounded-[20px] overflow-hidden border border-white/10",
          "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)]",
          "hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]",
          "hover:-translate-y-[6px]",
          "transition-all duration-300 ease-out"
        )}>
          {/* Kapak Alanı */}
          <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
            {post.coverImage ? (
              <>
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </>
            ) : (
              // Gradient Fallback if no image
              <div className={cn(
                "w-full h-full bg-gradient-to-br flex items-center justify-center group-hover:scale-110 transition-transform duration-700",
                fallbackGradient
              )}>
                <svg className="w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
            )}
          </div>

          {/* İçerik */}
          <div className="flex flex-col flex-grow p-6">
            {/* Meta Bilgiler */}
            <div className="flex items-center gap-3 text-xs font-medium text-gray-400 mb-4">
              <span className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-1.5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('tr-TR', { year: 'numeric', month: 'short', day: 'numeric' })}
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-700" />
              <span className="flex items-center">
                <svg className="w-3.5 h-3.5 mr-1.5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime}
              </span>
            </div>

            {/* Başlık */}
            <h2 className="text-xl font-bold text-gray-100 mb-3 line-clamp-2 leading-tight group-hover:text-cyan-400 transition-colors duration-300">
              {post.title}
            </h2>

            {/* Açıklama */}
            <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
              {post.excerpt}
            </p>

            {/* Etiketler ve Yazar */}
            <div className="mb-6">
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold text-cyan-400 bg-cyan-950/30 rounded-full border border-cyan-900/50 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_10px_-2px_rgba(34,211,238,0.2)] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2.5 py-1 text-[10px] text-gray-500 bg-gray-800/50 rounded-full">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Alt Kısım (Author & CTA) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-800 gap-4 sm:gap-0">
              <div className="flex items-center gap-2 order-2 sm:order-1">
                 {/* Avatar placeholder or user icon */}
                 <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                    {(post.author || "Ö").charAt(0)}
                 </div>
                 <span className="text-xs font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
                    {post.author || "Ömer"}
                 </span>
              </div>

              <div className="flex items-center justify-center w-full sm:w-auto px-4 py-2 sm:p-0 rounded-lg bg-cyan-900/20 sm:bg-transparent text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-all order-1 sm:order-2 group-hover:bg-cyan-900/30 sm:group-hover:bg-transparent group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                Devamını Oku
                <svg
                  className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
