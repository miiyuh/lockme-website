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
  weight: ['400', '500', '700'] // Added 500 for more flexibility
});

const APP_NAME = "LockMe: Secure File Encryption and Decryption";
const APP_DESCRIPTION = "Secure your files with LockMe, the offline-first desktop app for AES-256 and RSA encryption. No cloud, no compromise. Download for Windows & Linux.";

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  appleWebApp: {
    capable: true,
    title: APP_NAME,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    url: "https://lockme.example.com", // Replace with actual URL
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "https://lockme.example.com/og-image.png", // Replace with actual OG image URL
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
    images: ["https://lockme.example.com/twitter-image.png"], // Replace with actual Twitter image URL
    // creator: "@yourtwitterhandle", // Optional: add Twitter handle
  },
  // icons: { // Add favicon links here if you have them
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [ // Matches dark theme primary color
    { media: "(prefers-color-scheme: dark)", color: "#021945" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // Example for light
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
