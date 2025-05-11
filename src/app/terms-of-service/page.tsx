
import type { Metadata } from 'next';
import TermsOfServiceClientContent from '@/components/terms/terms-of-service-content';

const PAGE_TITLE = 'Terms of Service';
const PAGE_DESCRIPTION = 'Read the Terms of Service for using LockMe. Understand your rights and responsibilities when using our application and website.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["LockMe terms of service", "user agreement", "legal terms", "app usage policy"],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/terms-of-service',
    images: [
      {
        url: '/og-image-terms.png', 
        width: 1200,
        height: 630,
        alt: 'LockMe Terms of Service',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/twitter-image-terms.png'], 
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <TermsOfServiceClientContent />
    </div>
  );
}
