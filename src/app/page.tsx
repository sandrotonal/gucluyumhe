import { getSortedPostsData } from '@/utils/markdown';
import HomeClient from '@/components/HomeClient';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return <HomeClient recentPosts={allPostsData} />;
}
