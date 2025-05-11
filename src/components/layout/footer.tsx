
import Link from 'next/link';
import Image from 'next/image';
import { Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://lockme.my/logo_lockme_highRESver.png"
              alt="LockMe Logo"
              width={63} 
              height={32}
              priority
            />
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} LockMe. App v1.0.0-beta.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/terms-of-service"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy" 
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Privacy Policy
          </Link>
          <Link
            href="https://github.com/miiyuh/lockme" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
            aria-label="LockMe GitHub Repository"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
