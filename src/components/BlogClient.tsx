'use client';

import { useState, useMemo, useEffect } from 'react';
import { PostMetadata } from '@/utils/markdown';
import BlogCard from './ui/BlogCard';
import BlogFilters from './ui/BlogFilters';
import SkeletonBlogCard from './ui/SkeletonBlogCard';
import { motion, AnimatePresence } from 'framer-motion';

interface BlogClientProps {
  allPostsData: PostMetadata[];
}

export default function BlogClient({ allPostsData }: BlogClientProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<'newest' | 'popular'>('newest');

  // Simulate loading state for skeleton demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Extract all unique tags
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    allPostsData.forEach(post => {
      post.tags?.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allPostsData]);

  // Filter and Sort Logic
  const filteredPosts = useMemo(() => {
    let result = [...allPostsData];

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    }

    // Tag Filter
    if (selectedTag) {
      result = result.filter(post => post.tags?.includes(selectedTag));
    }

    // Sort
    result.sort((a, b) => {
      if (sortOption === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        // "Popular" proxy: longer reading time = more "depth/popular"
        const timeA = parseInt(a.readingTime) || 0;
        const timeB = parseInt(b.readingTime) || 0;
        return timeB - timeA;
      }
    });

    return result;
  }, [allPostsData, searchQuery, selectedTag, sortOption]);

  return (
    <div className="min-h-screen bg-[#0b0f19]">
      <div className="py-12 px-4 md:px-6 lg:px-8 max-w-[1320px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Blog Yazıları
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Yazılım geliştirme, modern teknolojiler ve deneyimlerim üzerine notlar.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <BlogFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          sortOption={sortOption}
          setSortOption={setSortOption}
          availableTags={availableTags}
        />
      </motion.div>

      {/* Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBlogCard key={i} />
          ))}
        </div>
      ) : filteredPosts.length > 0 ? (
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 bg-[#111827] rounded-[20px] border border-white/5"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800/50 mb-4">
            <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-medium text-gray-200 mb-2">
            Sonuç bulunamadı
          </h3>
          <p className="text-gray-500">
            Arama kriterlerinize uygun yazı bulunmamaktadır.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag(null);
            }}
            className="mt-6 px-6 py-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/30 rounded-full transition-all"
            >
              Filtreleri Temizle
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
