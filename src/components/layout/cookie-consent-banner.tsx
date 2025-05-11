
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { cn } from '@/lib/utils';

const COOKIE_CONSENT_KEY = 'lockme_cookie_consent';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined'); // Optional: Track declined state
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-secondary text-secondary-foreground shadow-2xl border-t border-border",
        "transition-transform duration-500 ease-out",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start md:items-center gap-3">
          <Cookie className="h-8 w-8 md:h-6 md:w-6 text-accent flex-shrink-0 mt-1 md:mt-0" />
          <div>
            <h2 id="cookie-consent-title" className="text-base md:text-lg font-semibold">Our Cookie Policy</h2>
            <p id="cookie-consent-description" className="text-xs md:text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyze site traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.
              Learn more in our <Link href="/privacy-policy#cookies" className="underline hover:text-accent">Privacy Policy</Link>.
            </p>
          </div>
        </div>
        <div className="flex flex-shrink-0 gap-2 md:gap-3 mt-3 md:mt-0 w-full md:w-auto">
          <Button
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="flex-1 md:flex-none border-primary/30 hover:bg-primary/10"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
