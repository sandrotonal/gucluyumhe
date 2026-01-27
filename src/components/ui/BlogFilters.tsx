'use client';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface BlogFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
  sortOption: 'newest' | 'popular';
  setSortOption: (option: 'newest' | 'popular') => void;
  availableTags: string[];
}

export default function BlogFilters({
  searchQuery,
  setSearchQuery,
  selectedTag,
  setSelectedTag,
  sortOption,
  setSortOption,
  availableTags
}: BlogFiltersProps) {
  // Popular tags mentioned in requirements, plus dynamic ones
  const priorityTags = ['Frontend', 'React', 'AI', 'Backend'];

  // Merge priority tags with available tags, removing duplicates
  const allDisplayTags = Array.from(new Set([...priorityTags, ...availableTags]));

  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-96 group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-500 group-focus-within:text-cyan-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 bg-[#111827] border border-gray-800 rounded-xl text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300"
            placeholder="Yazı ara..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Sort Dropdown / Tabs */}
        <div className="flex items-center gap-2 p-1 bg-[#111827] rounded-lg border border-gray-800">
          <button
            onClick={() => setSortOption('newest')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-300",
              sortOption === 'newest'
                ? "bg-cyan-900/30 text-cyan-400 shadow-sm"
                : "text-gray-400 hover:text-gray-200"
            )}
          >
            En Yeni
          </button>
          <button
            onClick={() => setSortOption('popular')}
            className={cn(
              "px-4 py-1.5 text-sm font-medium rounded-md transition-all duration-300",
              sortOption === 'popular'
                ? "bg-cyan-900/30 text-cyan-400 shadow-sm"
                : "text-gray-400 hover:text-gray-200"
            )}
          >
            En Popüler
          </button>
        </div>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={cn(
            "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300",
            selectedTag === null
              ? "bg-cyan-500 text-white border-cyan-500 shadow-[0_0_15px_-3px_rgba(6,182,212,0.4)]"
              : "bg-[#111827] text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200"
          )}
        >
          Tümü
        </button>
        {allDisplayTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-300",
              selectedTag === tag
                ? "bg-cyan-900/40 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_-3px_rgba(6,182,212,0.2)]"
                : "bg-[#111827] text-gray-400 border-gray-800 hover:border-gray-600 hover:text-gray-200"
            )}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
