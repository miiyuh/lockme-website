import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { blogPosts, BlogPost } from '@/lib/blogData';
import { CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'LockMe Blog',
  description: 'Stay informed with the latest articles, insights, and updates from the LockMe team on file security, encryption, and privacy.',
};

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative w-full h-48 md:h-56">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            layout="fill"
            objectFit="cover"
            data-ai-hint={post.imageHint}
          />
        </div>
      </Link>
      <CardHeader className="p-6">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <CardTitle className="text-xl md:text-2xl mb-2">{post.title}</CardTitle>
        </Link>
        <div className="flex items-center text-xs text-muted-foreground space-x-4 mb-2">
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <UserCircle className="h-4 w-4 mr-1.5" />
            <span>{post.author}</span>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0 mt-auto">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                <Tag className="h-3 w-3 mr-1" /> {tag}
              </Badge>
            ))}
          </div>
        )}
        <Link href={`/blog/${post.slug}`} className="text-accent hover:text-accent/80 font-medium text-sm mt-4 inline-block">
          Read More &rarr;
        </Link>
      </CardContent>
    </Card>
  );
}

export default function BlogListPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
          LockMe Blog
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          Insights, articles, and updates on data security, privacy, and the LockMe application.
        </p>
      </section>

      {blogPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No blog posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
