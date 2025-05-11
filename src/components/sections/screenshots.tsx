"use client";

import Image from "next/image";
import type { LightGallery } from "lightgallery/lightgallery";
import lightGallery from "lightgallery";
import "lightgallery/css/lightgallery.css";
// Optional: import plugins and their CSS if needed
// import lgZoom from 'lightgallery/plugins/zoom';
// import 'lightgallery/css/lg-zoom.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import 'lightgallery/css/lg-thumbnail.css';

import { useEffect, useRef } from "react";
import { Camera } from "lucide-react";

const screenshots = [
  { src: "https://lockme.my/assets/img/screenshots/screenshot_main.png", thumb: "https://lockme.my/assets/img/screenshots/screenshot_main.png", alt: "LockMe App Screenshot 1 - Main Dashboard", hint: "app interface", subHtml: "<h4 class='text-sm sm:text-base font-semibold'>LockMe App - Main Dashboard</h4><p class='text-xs sm:text-sm'>Overview of the primary application screen.</p>" },
  { src: "https://lockme.my/assets/img/screenshots/screenshot_encrypt.png", thumb: "https://lockme.my/assets/img/screenshots/screenshot_encrypt.png", alt: "LockMe App Screenshot 2 - Encryption Process", hint: "encryption process", subHtml: "<h4 class='text-sm sm:text-base font-semibold'>Encryption Process</h4><p class='text-xs sm:text-sm'>Visual guide of how files are encrypted.</p>" },
  { src: "https://lockme.my/assets/img/screenshots/screenshot_decrypt.png", thumb: "https://lockme.my/assets/img/screenshots/screenshot_decrypt.png", alt: "LockMe App Screenshot 3 - Decryption Process", hint: "decryption process", subHtml: "<h4 class='text-sm sm:text-base font-semibold'>Decryption Process</h4><p class='text-xs sm:text-sm'>Visual guide of how files are decrypted.</p>" },
  { src: "https://lockme.my/assets/img/screenshots/screenshot_ai.png", thumb: "https://lockme.my/assets/img/screenshots/screenshot_ai.png", alt: "LockMe App Screenshot 4 - AI Security Toolkit", hint: "security toolkit page", subHtml: "<h4 class='text-sm sm:text-base font-semibold'>AI Security Toolkit</h4><p class='text-xs sm:text-sm'>Use AI to generate passphrases!</p>" },
];

export function ScreenshotsSection() {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const lightGalleryInstance = useRef<LightGallery | null>(null);

  useEffect(() => {
    if (galleryRef.current && typeof window !== "undefined" && !lightGalleryInstance.current) {
      lightGalleryInstance.current = lightGallery(galleryRef.current, {
        // plugins: [lgZoom, lgThumbnail], // Example: add if imported
        speed: 500,
        download: false,
        counter: true,
        selector: 'a', // Ensure it targets the anchor tags
      });
    }

    return () => {
      if (lightGalleryInstance.current) {
        lightGalleryInstance.current.destroy();
        lightGalleryInstance.current = null;
      }
    };
  }, []);

  return (
    <section id="screenshots" className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-12">
          <Camera className="h-12 w-12 text-accent" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            See LockMe in Action
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-md md:text-lg">
            A glimpse into the clean and intuitive user interface of LockMe. Click on an image to enlarge.
          </p>
        </div>
        <div 
          ref={galleryRef} 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
          id="lightgallery-screenshots-container" // Added ID for clarity, though ref is primary
        >
          {screenshots.map((screenshot, index) => (
            <a
              key={index}
              href={screenshot.src}
              className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary transition-all duration-300 ease-in-out"
              data-src={screenshot.src}
              data-sub-html={screenshot.subHtml}
              aria-label={`View screenshot: ${screenshot.alt}`}
            >
            <Image
              src={screenshot.thumb}
              alt={screenshot.alt}
              width={600}
              height={450} // 4:3 ratio
              className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
              data-ai-hint={screenshot.hint}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
