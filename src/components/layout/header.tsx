"use client"; // Needed for useState and Sheet interactions

import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu, X } from 'lucide-react'; // Add Menu and X icons
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils'; // cn might not be needed here if not dynamically classing Sheet parts further

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/security", label: "Security" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
          <Image
            src="https://lockme.my/assets/img/logo_lockme_highRESver.png"
            alt="LockMe Logo"
            width={63}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-4 lg:space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ml-auto pushes the following content to the right */}
        {/* On md screens and up, if there's a flex-1 nav, this div won't need ml-auto as much, hence md:ml-4 for specific spacing */}
        <div className="flex items-center gap-2 md:ml-4 ml-auto">
          <ModeToggle />

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6 bg-background">
                <div className="flex flex-col space-y-5">
                  <div className="flex justify-between items-center mb-4">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
                       <Image
                          src="https://lockme.my/logo_lockme_highRESver.png"
                          alt="LockMe Logo"
                          width={63}
                          height={32}
                        />
                    </Link>
                    {/* SheetClose can be a button for explicit closing */}
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon" aria-label="Close menu">
                          <X className="h-6 w-6" />
                       </Button>
                    </SheetClose>
                  </div>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2"
                      onClick={() => setIsMobileMenuOpen(false)} // Close sheet on link click
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
