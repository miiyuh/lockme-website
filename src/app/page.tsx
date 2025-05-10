import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { ScreenshotsSection } from "@/components/sections/screenshots";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { DownloadSection } from "@/components/sections/download";
import { FaqSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

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
