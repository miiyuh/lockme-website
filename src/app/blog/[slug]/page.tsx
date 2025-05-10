import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, blogPosts } from '@/lib/blogData';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  // Fallback for image if not provided, or use a default site image
  const imageUrl = post.imageSrc || '/default-blog-image.png'; // Ensure you have a default image

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags ? post.tags.join(', ') : undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`, // Relative to metadataBase in layout
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      images: [
        {
          url: imageUrl, 
          width: 800, // Adjust if your images have different dimensions
          height: 400, // Adjust
          alt: post.imageAlt,
        },
      ],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-20">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-accent hover:text-accent/80 mb-6 group">
            <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-muted-foreground space-x-4 mb-4">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              <time dateTime={new Date(post.date).toISOString().split('T')[0]}>{post.date}</time>
            </div>
            <div className="flex items-center">
              <UserCircle className="h-4 w-4 mr-1.5" />
              <span>By {post.author}</span>
            </div>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6" aria-label="Post tags">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                 <Tag className="h-3 w-3 mr-1" /> {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, 800px" // Example sizes, adjust as needed
            style={{ objectFit: 'cover' }}
            data-ai-hint={post.imageHint}
            priority 
          />
        </div>
        
        <Separator className="my-8" />

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent hover:prose-a:text-accent/80 prose-img:rounded-md prose-img:shadow-md">
          {post.content}
        </div>
        
        <Separator className="my-10" />

        <div className="text-center mt-10">
            <Link href="/blog" className="inline-flex items-center text-accent hover:text-accent/80 group">
                <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                See All Posts
            </Link>
        </div>

      </article>
    </div>
  );
}
