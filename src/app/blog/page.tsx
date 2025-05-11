import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { blogPosts, type BlogPost } from '@/lib/blogData'; 
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const PAGE_TITLE = 'LockMe Blog';
const PAGE_DESCRIPTION = 'Stay informed with the latest articles, insights, and updates from the LockMe team on file security, encryption, and privacy.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["LockMe blog", "file security articles", "encryption news", "data privacy updates", "cybersecurity insights"],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/blog',
    images: [
      {
        url: '/og-image-blog.png', 
        width: 1200,
        height: 630,
        alt: 'LockMe Blog - Articles on Security and Privacy',
      },
    ],
    type: 'website', 
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/twitter-image-blog.png'], 
  },
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block" aria-label={`Read more about ${post.title}`}>
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            data-ai-hint={post.imageHint}
            className="object-cover"
            priority={false} // Only hero images should be priority
            loading="lazy" // Lazy load blog card images
          />
        </div>
      </Link>
      <CardHeader className="p-4 sm:p-6">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <CardTitle className="text-lg sm:text-xl md:text-2xl mb-1.5 sm:mb-2">{post.title}</CardTitle>
        </Link>
        <div className="flex flex-wrap items-center text-xs text-muted-foreground space-x-3 mb-2">
          <div className="flex items-center">
            <CalendarDays className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
            <time dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
          </div>
          <div className="flex items-center">
            <UserCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0 mt-auto">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                <Tag className="h-3 w-3 mr-1" /> {tag}
              </Badge>
            ))}
          </div>
        )}
        <Link href={`/blog/${post.slug}`} className="text-accent hover:text-accent/80 font-medium text-sm mt-3 sm:mt-4 inline-block" aria-label={`Read more about ${post.title}`}>
          Read More &rarr;
        </Link>
      </CardContent>
    </Card>
  );
}

export default function BlogListPage() {
  return (
    <div className="container py-10 md:py-16 lg:py-20">
      <section className="text-center mb-10 md:mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-3 sm:mb-4">
          {PAGE_TITLE}
        </h1>
        <p className="max-w-2xl mx-auto text-md text-muted-foreground md:text-lg">
          {PAGE_DESCRIPTION}
        </p>
      </section>

      {blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 md:py-12">
          <p className="text-lg text-muted-foreground md:text-xl">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
