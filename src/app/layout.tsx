import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '700']
});

const APP_NAME = "LockMe: Secure File Encryption and Decryption";
const APP_DESCRIPTION = "Secure your files with LockMe, the offline-first desktop app for AES-256 and RSA encryption. No cloud, no compromise. Download for Windows & Linux.";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://lockme.example.com"; // Use environment variable for base URL

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL), // Important for resolving relative Open Graph image paths
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  keywords: ["LockMe", "file encryption", "AES-256", "RSA", "offline security", "data privacy", "Windows app", "Linux app", "secure files"],
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: "/", // Relative to metadataBase
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/og-image.png", // Replace with actual OG image path (e.g., /public/og-image.png)
        width: 1200,
        height: 630,
        alt: "LockMe App Promotion",
      },
    ],
    siteName: APP_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: ["/twitter-image.png"], // Replace with actual Twitter image path (e.g., /public/twitter-image.png)
    // creator: "@yourtwitterhandle", // Optional: add Twitter handle
  },
  // icons: { // Add favicon links here if you have them and they are in /public
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
  robots: { // Default robot settings, can be overridden per page
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [ 
    { media: "(prefers-color-scheme: dark)", color: "#021945" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, 
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
