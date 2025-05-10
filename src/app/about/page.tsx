import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // CardHeader and CardContent might not be directly used in the modified section but kept for consistency if other cards use them.
import { Users, Shield, Eye, Zap, User, Linkedin, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: "Azri D. Explorer",
    role: "Creator, Lead Developer & Security Architect",
    avatarSrc: "https://picsum.photos/seed/dev1/100/100",
    avatarFallback: "AD",
    bio: "Azri is passionate about cybersecurity and privacy-focused software. With a background in cryptography and software engineering, Azri leads the development of LockMe, ensuring its robustness and user-friendliness. As the sole creator, Azri is dedicated to delivering a secure and reliable application.",
    hint: "developer portrait",
    linkedinUrl: "https://www.linkedin.com/in/example-profile", // Placeholder LinkedIn URL
    websiteUrl: "https://example.com" // Placeholder Website URL
  },
];

const PAGE_TITLE = 'About LockMe';
const PAGE_DESCRIPTION = 'Learn more about LockMe, our mission to provide secure, offline-first file encryption, and the creator behind the app.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["LockMe creator", "about LockMe", "encryption software mission", "data privacy company", "cybersecurity developer"],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/about',
    images: [
      {
        url: '/og-image-about.png', 
        width: 1200,
        height: 630,
        alt: 'About LockMe Creator and Mission',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/twitter-image-about.png'], 
  },
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-12 md:mb-16">
        <Users className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-accent" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          {PAGE_TITLE}
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          Empowering you with control over your digital privacy. LockMe is dedicated to providing robust, offline-first file encryption that is both secure and easy to use.
        </p>
      </section>

      <section className="mb-12 md:mb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              In an increasingly connected world, digital privacy is paramount. Our mission is to provide individuals and businesses with a straightforward, reliable tool to protect their sensitive information. We believe that strong encryption should be accessible to everyone, without relying on cloud services or complex setups.
            </p>
            <p className="text-muted-foreground text-lg">
              LockMe is built on the principles of security, privacy, and user control. Your files are encrypted locally on your device, and only you hold the key.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://picsum.photos/seed/mission/800/600"
              alt="Abstract image representing security and mission"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              data-ai-hint="security abstract"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-16">
        <h2 className="text-3xl font-semibold text-center mb-8 md:mb-10">Why Choose LockMe?</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center p-4 md:p-6">
              <Shield className="h-10 w-10 text-accent mb-2" />
              <CardTitle className="text-lg md:text-xl">Rock-Solid Security</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground text-sm leading-relaxed p-4 md:p-6 pt-0">
              Utilizing AES-256 and RSA encryption, LockMe offers military-grade protection for your most valuable files.
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center p-4 md:p-6">
              <Eye className="h-10 w-10 text-accent mb-2" />
              <CardTitle className="text-lg md:text-xl">Complete Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground text-sm leading-relaxed p-4 md:p-6 pt-0">
              As an offline-first application, your files and passwords never leave your computer. No cloud, no tracking, no compromises.
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center p-4 md:p-6">
              <Zap className="h-10 w-10 text-accent mb-2" /> 
              <CardTitle className="text-lg md:text-xl">User-Friendly</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground text-sm leading-relaxed p-4 md:p-6 pt-0">
              Designed with simplicity in mind. Encrypt and decrypt files with an intuitive interface and drag-and-drop functionality.
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <User className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-accent" />
          <h2 className="text-3xl font-semibold">Meet the Creator</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="md:flex">
                {/* Left Section */}
                <div className="md:w-1/3 p-6 flex flex-col items-center md:items-start text-center md:text-left bg-secondary/30">
                  <Avatar className="w-24 h-24 mb-4 border-2 border-accent">
                    <AvatarImage src={member.avatarSrc} alt={`${member.name} - ${member.role}`} data-ai-hint={member.hint} />
                    <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold text-card-foreground">{member.name}</h3>
                  <p className="text-sm text-accent mb-4">{member.role}</p>
                  <div className="flex space-x-3">
                    {member.linkedinUrl && (
                      <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn Profile`} className="text-muted-foreground hover:text-accent transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </Link>
                    )}
                    {member.websiteUrl && (
                      <Link href={member.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Website`} className="text-muted-foreground hover:text-accent transition-colors">
                        <Globe className="h-6 w-6" />
                      </Link>
                    )}
                  </div>
                </div>
                {/* Right Section (Bio) */}
                <div className="md:w-2/3 p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
