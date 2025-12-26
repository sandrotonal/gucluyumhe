import { getSortedPostsData } from '@/utils/markdown';
import BlogClient from '@/components/BlogClient';

export default function BlogPage() {
  const allPostsData = getSortedPostsData();

  return <BlogClient allPostsData={allPostsData} />;
}
