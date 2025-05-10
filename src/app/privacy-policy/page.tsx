
import type { Metadata } from 'next';
import PrivacyPolicyClientContent from '@/components/privacy/privacy-policy-client-content';

const PAGE_TITLE = 'Privacy Policy';
const PAGE_DESCRIPTION = 'Learn about how LockMe handles your data and respects your privacy. Our commitment to protecting your information.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["LockMe privacy policy", "data protection", "user privacy", "offline app privacy", "encryption privacy"],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/privacy-policy', // This will be relative to metadataBase in layout.tsx
    images: [
      {
        url: '/og-image-privacy.png', // Assuming this image is in /public
        width: 1200,
        height: 630,
        alt: 'LockMe Privacy Policy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/twitter-image-privacy.png'], // Assuming this image is in /public
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientContent />;
}
