import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://omer-ozbay-blog.vercel.app/sitemap.xml', // Updated domain based on context (assuming typical user intent or placeholder)
  };
}
