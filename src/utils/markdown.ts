import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMetadata {
  id: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage?: string;
  tags?: string[];
  readingTime: string;
}

export interface Post extends PostMetadata {
  content: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} dk`;
}

export function getAllPostIds() {
  // Eğer dizin yoksa boş dizi döndür
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getSortedPostsData(): PostMetadata[] {
  // Eğer dizin yoksa boş dizi döndür
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const matterResult = matter(fileContents);
    const readingTime = calculateReadingTime(matterResult.content);
    
    return {
      id,
      readingTime,
      ...(matterResult.data as { 
        title: string; 
        date: string; 
        author: string; 
        excerpt: string;
        coverImage?: string;
        tags?: string[];
      }),
    };
  });
  
  // Tarihe göre sırala
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Front matter'ı parse et
  const matterResult = matter(fileContents);
  
  // Markdown içeriğini HTML'e dönüştür
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const content = processedContent.toString();
  
  console.log(`Processed content for ${slug}:`, content.substring(0, 100)); // Debug log

  const readingTime = calculateReadingTime(matterResult.content);

  return {
    id: slug,
    content,
    readingTime,
    ...(matterResult.data as { 
      title: string; 
      date: string; 
      author: string; 
      excerpt: string;
      coverImage?: string;
      tags?: string[];
    }),
  };
}