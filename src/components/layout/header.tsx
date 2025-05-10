import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';
import { Lock } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          {/* <Lock className="h-6 w-6 text-accent" /> */}
          {/* <span className="font-bold sm:inline-block text-lg">
            LockMe
          </span> */}
          <Image
            src="https://picsum.photos/950/480"
            alt="LockMe Logo"
            width={63} // Calculated based on 950/480 aspect ratio for a 32px height
            height={32}
            priority
            data-ai-hint="app logo"
          />
        </Link>
        <nav className="flex flex-1 items-center space-x-4 lg:space-x-6 text-sm font-medium">
          <Link href="/about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link href="/#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
            Testimonials
          </Link>
          <Link href="/#faq" className="text-muted-foreground transition-colors hover:text-foreground">
            FAQ
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
