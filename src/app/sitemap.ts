
import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blogData';

// Ensure NEXT_PUBLIC_BASE_URL is set in your environment variables (e.g., .env.local or Vercel/Netlify settings)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://lockme.example.com'; // Fallback, but ideally set via env

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/security`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/roadmap`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Add other important static routes if necessary.
    // Sections on the homepage like #download, #faq are part of the homepage URL.
  ] satisfies MetadataRoute.Sitemap;

  const blogPostRoutes = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(), // Use post's actual date
    changeFrequency: 'monthly', // Or 'yearly' if posts are not updated often
    priority: 0.9, 
  })) satisfies MetadataRoute.Sitemap;

  return [...staticRoutes, ...blogPostRoutes];
}
