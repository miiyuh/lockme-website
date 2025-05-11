
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, KeyRound, Lock, GitFork, WifiOff, FileText, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const PAGE_TITLE = 'LockMe Security Practices';
const PAGE_DESCRIPTION = 'Learn about the robust security measures LockMe employs to protect your data, including AES-256 and RSA encryption, offline-first design, and our open-source commitment.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["LockMe security", "AES-256 encryption", "RSA security", "offline data protection", "open source security", "file encryption safety"],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/security',
    images: [
      {
        url: '/og-image-security.png', 
        width: 1200,
        height: 630,
        alt: 'LockMe Security Features Overview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/twitter-image-security.png'], 
  },
};

const securityFeatures = [
  {
    icon: <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />,
    title: 'AES-256 Encryption',
    description: 'Your files are encrypted using the Advanced Encryption Standard with 256-bit keys, a military-grade algorithm trusted worldwide for protecting highly sensitive information. This ensures your data is virtually impenetrable to brute-force attacks.',
    link: '/blog/understanding-aes-256-encryption',
    linkText: 'Learn more about AES-256'
  },
  {
    icon: <KeyRound className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />,
    title: 'RSA Cryptography',
    description: 'LockMe integrates RSA for robust public-key cryptography. While AES-256 handles the bulk file encryption, RSA can be utilized for secure key exchange or other advanced cryptographic operations, adding another layer of security.',
  },
  {
    icon: <WifiOff className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />,
    title: 'Offline-First Design',
    description: 'All encryption and decryption processes occur locally on your device. Your files and passwords are never transmitted over the internet or stored on any external servers, eliminating risks associated with cloud storage and data transmission.',
    link: '/blog/offline-first-security-why-it-matters',
    linkText: 'Why offline-first matters'
  },
  {
    icon: <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />,
    title: 'Strong Password Protection',
    description: 'The security of your encrypted files relies on the strength of your chosen password. LockMe encourages and supports the use of strong, unique passwords. Remember, you are the sole guardian of your password.',
    link: '/blog/tips-for-creating-strong-passwords',
    linkText: 'Tips for strong passwords'
  },
  {
    icon: <GitFork className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />,
    title: 'Open Source & Transparent',
    description: 'LockMe is proud to be open source under the MIT License. This transparency allows anyone to inspect our code, verify our security practices, and contribute to the project, fostering trust and community-driven security.',
    link: 'https://github.com/miiyuh/lockme',
    linkText: 'View code on GitHub'
  },
  {
    icon: <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-accent" />,
    title: 'Local Data Handling',
    description: 'LockMe does not collect or store any personal data related to the files you encrypt or the content within them. Your data remains your own, on your device.',
    link: '/privacy-policy',
    linkText: 'Read our Privacy Policy'
  },
];

export default function SecurityPage() {
  return (
    <div className="container py-10 md:py-16 lg:py-20">
      <section className="text-center mb-10 md:mb-16">
        <ShieldCheck className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-accent" />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
          {PAGE_TITLE}
        </h1>
        <p className="max-w-3xl mx-auto text-md text-muted-foreground md:text-lg">
          At LockMe, your security is our utmost priority. We are committed to providing a transparent and robust solution for protecting your sensitive files.
        </p>
      </section>

      <section className="mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 md:mb-10">Our Core Security Principles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {securityFeatures.map((feature) => (
            <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <CardHeader className="items-center text-center p-4 sm:p-6">
                {feature.icon}
                <CardTitle className="text-lg sm:text-xl md:text-2xl mt-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-sm leading-relaxed p-4 sm:p-6 pt-0 flex-grow">
                <p>{feature.description}</p>
              </CardContent>
              {feature.link && feature.linkText && (
                 <CardContent className="p-4 sm:p-6 pt-0 text-center">
                    <Link href={feature.link} target={feature.link.startsWith('http') ? '_blank' : '_self'} rel={feature.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm font-medium text-accent hover:text-accent/80">
                        {feature.linkText} &rarr;
                    </Link>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>
      
      <Separator className="my-10 md:my-16" />

      <section className="mb-10 md:mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6 md:mb-8">Your Role in Security</h2>
        <div className="prose prose-base md:prose-lg dark:prose-invert max-w-none prose-headings:font-semibold prose-a:text-accent hover:prose-a:text-accent/80 prose-ul:list-disc prose-ul:pl-5 prose-li:my-1.5">
            <p>
                While LockMe provides strong encryption tools, the overall security of your files also depends on your practices:
            </p>
            <ul>
                <li><strong>Password Strength:</strong> Use a strong, unique password for LockMe. Consider using a password manager to generate and store complex passwords. Never reuse passwords across different services.</li>
                <li><strong>Password Confidentiality:</strong> Do not share your LockMe password with anyone. If you lose your password, your encrypted files cannot be recovered.</li>
                <li><strong>Device Security:</strong> Keep your computer&apos;s operating system and security software (antivirus, firewall) up to date. Protect your device with a strong login password or biometric authentication.</li>
                <li><strong>Secure Backups:</strong> Regularly back up your encrypted files to a secure location (e.g., an external hard drive that is also kept secure).</li>
                <li><strong>Beware of Phishing:</strong> Be cautious of phishing attempts that may try to trick you into revealing your passwords or installing malicious software. LockMe will never ask for your password via email or other unsolicited communication.</li>
            </ul>
        </div>
      </section>
      
      <Separator className="my-10 md:my-16" />

      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center text-center p-4 sm:p-6 border rounded-lg shadow-md bg-destructive/10 dark:bg-destructive/20">
            <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-destructive mb-2 sm:mb-3" />
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-destructive">Reporting Security Vulnerabilities</h3>
            <p className="text-xs sm:text-sm text-destructive/90 dark:text-destructive-foreground/80">
                If you believe you have found a security vulnerability in LockMe, please report it to us responsibly. We appreciate the community&apos;s help in keeping LockMe secure.
            </p>
            <Button 
                asChild 
                variant="destructive" 
                size="lg" 
                className="mt-4 text-sm"
            >
                <a href="mailto:support@lockme.my?subject=LockMe%20Security%20Vulnerability%20Report">
                 Report a Vulnerability
                </a>
            </Button>
        </div>
      </section>
    </div>
  );
}
