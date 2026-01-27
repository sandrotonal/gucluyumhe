'use client';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SkeletonBlogCard() {
  return (
    <div className="flex flex-col h-full bg-[#111827] rounded-[20px] overflow-hidden border border-white/5 shadow-sm animate-pulse">
      {/* Cover Skeleton */}
      <div className="relative aspect-video w-full bg-gray-800" />

      {/* Content Skeleton */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        {/* Meta */}
        <div className="flex items-center gap-3">
          <div className="h-3 w-20 bg-gray-800 rounded-full" />
          <div className="h-1 w-1 bg-gray-800 rounded-full" />
          <div className="h-3 w-12 bg-gray-800 rounded-full" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 w-3/4 bg-gray-800 rounded-md" />
          <div className="h-6 w-1/2 bg-gray-800 rounded-md" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2 pt-2">
          <div className="h-3 w-full bg-gray-800 rounded" />
          <div className="h-3 w-full bg-gray-800 rounded" />
          <div className="h-3 w-2/3 bg-gray-800 rounded" />
        </div>

        {/* Tags */}
        <div className="flex gap-2 pt-2">
          <div className="h-5 w-16 bg-gray-800 rounded-full" />
          <div className="h-5 w-12 bg-gray-800 rounded-full" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-800" />
            <div className="h-3 w-16 bg-gray-800 rounded" />
          </div>
          <div className="h-4 w-24 bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  );
}
