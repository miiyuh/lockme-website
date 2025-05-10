import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import { Lock } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Lock className="h-6 w-6 text-accent" />
          <span className="font-bold sm:inline-block text-lg">
            LockMe
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4">
          {/* Add nav items here if needed, e.g., links to sections */}
          {/* <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">Features</Link> */}
          {/* <Link href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">FAQ</Link> */}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
