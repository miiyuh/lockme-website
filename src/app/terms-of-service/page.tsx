
import type { Metadata } from 'next';
import TermsOfServiceClientContent from '@/components/terms/terms-of-service-content';

const PAGE_TITLE = 'Terms of Service';
const PAGE_DESCRIPTION = 'Read the Terms of Service for using LockMe and its website. Understand your rights and responsibilities.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["LockMe terms of service", "legal terms", "user agreement", "website usage terms"],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/terms-of-service',
    images: [
      {
        url: '/og-image-terms.png', // Ensure you have this image or use a generic one
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
    images: ['/twitter-image-terms.png'], // Ensure you have this image or use a generic one
  },
};

export default function TermsOfServicePage() {
  return <TermsOfServiceClientContent />;
}
