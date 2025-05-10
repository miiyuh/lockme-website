import { Metadata } from 'next';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About LockMe',
  description: 'Learn more about LockMe, our mission to provide secure, offline-first file encryption, and the team behind the app.',
};

const teamMembers = [
  {
    name: "Azri D. Explorer",
    role: "Lead Developer & Security Architect",
    avatarSrc: "https://picsum.photos/seed/dev1/100/100",
    avatarFallback: "AD",
    bio: "Azri is passionate about cybersecurity and privacy-focused software. With a background in cryptography and software engineering, Azri leads the development of LockMe, ensuring its robustness and user-friendliness.",
    hint: "developer portrait"
  },
  {
    name: "Kai ByteSmith",
    role: "UX/UI Designer",
    avatarSrc: "https://picsum.photos/seed/designer1/100/100",
    avatarFallback: "KB",
    bio: "Kai believes that security software should be intuitive and accessible to everyone. Kai designs LockMe's interface with a focus on simplicity and a seamless user experience.",
    hint: "designer portrait"
  },
  {
    name: "System Sentinel",
    role: "QA & Testing Lead",
    avatarSrc: "https://picsum.photos/seed/qa1/100/100",
    avatarFallback: "SS",
    bio: "System ensures LockMe meets the highest standards of quality and reliability. With meticulous attention to detail, System oversees all testing processes to identify and resolve potential issues.",
    hint: "tester portrait"
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center mb-16">
        <Users className="h-16 w-16 mx-auto mb-4 text-accent" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          About LockMe
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          Empowering you with control over your digital privacy. LockMe is dedicated to providing robust, offline-first file encryption that is both secure and easy to use.
        </p>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="security abstract"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose LockMe?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center">
              <Shield className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Rock-Solid Security</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Utilizing AES-256 and RSA encryption, LockMe offers military-grade protection for your most valuable files.
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center">
              <Eye className="h-10 w-10 text-accent mb-2" />
              <CardTitle>Complete Privacy</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              As an offline-first application, your files and passwords never leave your computer. No cloud, no tracking, no compromises.
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="items-center text-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent mb-2"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" /><line x1="8" x2="8" y1="16" y2="16" /><line x1="8" x2="8" y1="20" y2="20" /><line x1="16" x2="16" y1="16" y2="16" /><line x1="16" x2="16" y1="20" y2="20" /><line x1="12" x2="12" y1="12" y2="12" /><line x1="12" x2="12" y1="16" y2="16" /><line x1="12" x2="12" y1="20" y2="20" /></svg>
              <CardTitle>User-Friendly</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Designed with simplicity in mind. Encrypt and decrypt files with an intuitive interface and drag-and-drop functionality.
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-12">Meet the Team (Illustrative)</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardHeader className="flex flex-col items-center text-center p-6 bg-secondary/30">
                <Avatar className="w-24 h-24 mb-4 border-2 border-accent">
                  <AvatarImage src={member.avatarSrc} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-sm text-accent">{member.role}</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <p className="text-center text-muted-foreground mt-8 text-sm">
            Note: The team members above are illustrative for demonstration purposes.
          </p>
      </section>
    </div>
  );
}
