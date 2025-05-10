import type { Metadata } from 'next';
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { ScreenshotsSection } from "@/components/sections/screenshots";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { DownloadSection } from "@/components/sections/download";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

const APP_NAME = "LockMe: Secure File Encryption and Decryption";
const APP_DESCRIPTION = "Secure your files with LockMe, the offline-first desktop app for AES-256 and RSA encryption. No cloud, no compromise. Download for Windows & Linux.";

export const metadata: Metadata = {
  title: APP_NAME, // Homepage title is the main app name
  description: APP_DESCRIPTION,
  keywords: ["LockMe", "file encryption", "data security", "offline encryption", "AES-256", "RSA", "privacy tool", "Windows", "Linux", "download encryption software"],
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: "/", // Assuming this is the homepage
    images: [
      {
        url: "/og-image-home.png", // Specific OG image for homepage if different from default
        width: 1200,
        height: 630,
        alt: "LockMe Homepage - Secure File Encryption",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: ["/twitter-image-home.png"], // Specific Twitter image for homepage
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <TestimonialsSection />
      <DownloadSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
