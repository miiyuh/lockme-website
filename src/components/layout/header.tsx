
"use client"; 
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import * as React from "react";


const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/security", label: "Security" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string, isMobile?: boolean }) => (
    <Link 
      href={href} 
      className={cn(
        "transition-colors hover:text-foreground",
        pathname === href ? "text-foreground font-semibold" : "text-muted-foreground",
        isMobile ? "block py-2 text-lg" : "text-sm font-medium"
      )}
      onClick={() => isMobile && setIsSheetOpen(false)} 
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://lockme.my/assets/img/logo_lockme_highRESver.png"
            alt="LockMe Logo"
            width={63} 
            height={32}
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-4 lg:space-x-6">
          {navLinks.map(link => <NavLink key={link.href} href={link.href} label={link.label} />)}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ModeToggle />
          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm p-0">
                <SheetHeader className="p-6 flex flex-row items-center justify-between border-b">
                   <Link href="/" className="flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                      <Image
                        src="https://lockme.my/assets/img/logo_lockme_highRESver.png"
                        alt="LockMe Logo"
                        width={63} 
                        height={32}
                      />
                    </Link>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="p-6">
                  <nav className="flex flex-col space-y-3">
                    {navLinks.map(link => <NavLink key={link.href} href={link.href} label={link.label} isMobile />)}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
