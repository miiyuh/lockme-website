

import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Rocket, Lightbulb, ListChecks, CircleAlert } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const PAGE_TITLE = 'LockMe Roadmap';
const PAGE_DESCRIPTION = 'Discover the future of LockMe. See our planned features, ongoing developments, and long-term vision for enhancing your file security experience.';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: ["LockMe roadmap", "future features", "app development plan", "encryption software updates", "security tool pipeline"],
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/roadmap',
    images: [
      {
        url: '/og-image-roadmap.png', // Ensure you have this image
        width: 1200,
        height: 630,
        alt: 'LockMe Development Roadmap',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/twitter-image-roadmap.png'], // Ensure you have this image
  },
};

const roadmapItems = {
  shortTerm: [
    {
      title: 'Enhanced UI/UX for Key Management',
      description: 'Improving the interface for managing RSA key pairs, making it more intuitive for users to generate, import, and export keys.',
      status: 'Planned',
      icon: <ListChecks className="h-6 w-6 text-accent" />,
      tags: ['UX/UI', 'Key Management']
    },
    {
      title: 'Batch File Processing',
      description: 'Allowing users to encrypt or decrypt multiple files or entire folders at once for improved efficiency.',
      status: 'Planned',
      icon: <ListChecks className="h-6 w-6 text-accent" />,
      tags: ['Feature', 'Efficiency']
    },
    {
      title: 'Detailed Progress Indicators',
      description: 'Providing more granular feedback during encryption/decryption of large files.',
      status: 'In Progress',
      icon: <ListChecks className="h-6 w-6 text-accent" />,
      tags: ['UX', 'Performance']
    },
  ],
  mediumTerm: [
    {
      title: 'Secure File Shredding Option',
      description: 'Adding an option to securely delete original files after encryption, ensuring they cannot be recovered.',
      status: 'Considering',
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
      tags: ['Security', 'Feature']
    },
    {
      title: 'Plugin Architecture for Extensibility',
      description: 'Exploring a plugin system to allow for future feature additions like integration with password managers or different storage backends (still offline-first).',
      status: 'Considering',
      icon: <Lightbulb className="h-6 w-6 text-accent" />,
      tags: ['Architecture', 'Extensibility']
    },
  ],
  longTerm: [
    {
      title: 'Mobile Companion App (View-Only)',
      description: 'Investigating the possibility of a mobile app to securely view metadata of encrypted files or manage keys, without compromising the offline-first principle for actual encryption/decryption.',
      status: 'Researching',
      icon: <Rocket className="h-6 w-6 text-accent" />,
      tags: ['Mobile', 'Ecosystem']
    },
    {
        title: 'Advanced Auditing and Logging',
        description: 'Implementing optional, local-only detailed logs for users who need to track encryption/decryption activities for compliance or personal records.',
        status: 'Researching',
        icon: <Rocket className="h-6 w-6 text-accent" />,
        tags: ['Feature', 'Security']
    }
  ]
};

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'planned':
      return 'bg-blue-500/20 text-blue-700 border-blue-500/50 dark:text-blue-400';
    case 'in progress':
      return 'bg-yellow-500/20 text-yellow-700 border-yellow-500/50 dark:text-yellow-400';
    case 'researching':
      return 'bg-purple-500/20 text-purple-700 border-purple-500/50 dark:text-purple-400';
    case 'considering':
      return 'bg-gray-500/20 text-gray-700 border-gray-500/50 dark:text-gray-400';
    default:
      return 'bg-primary/20 text-primary border-primary/50';
  }
};


export default function RoadmapPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <section className="text-center mb-12 md:mb-16">
        <Rocket className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-accent" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          {PAGE_TITLE}
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
          We are constantly working to improve LockMe and add new features to enhance your security and user experience. Here&apos;s a look at what we have planned.
        </p>
      </section>

      <section className="mb-12 md:mb-16">
        <div className="flex flex-col items-center justify-center p-6 mb-10 border rounded-lg shadow-md bg-secondary/30">
            <CircleAlert className="h-10 w-10 text-accent mb-3" />
            <h3 className="text-xl font-semibold mb-2 text-center">Disclaimer</h3>
            <p className="text-sm text-muted-foreground text-center max-w-2xl">
                This roadmap is for informational purposes only and is subject to change without notice.
                The development, release, and timing of any features or functionality described remains at our sole discretion.
                Do not rely on this roadmap in making purchasing decisions.
            </p>
        </div>

        {Object.entries(roadmapItems).map(([term, items]) => (
          <div key={term} className="mb-12">
            <h2 className="text-3xl font-semibold mb-2 capitalize text-center md:text-left">
              {term === 'shortTerm' ? 'Short-Term Goals (Next 3-6 Months)' : term === 'mediumTerm' ? 'Mid-Term Goals (6-12 Months)' : 'Long-Term Vision (12+ Months)'}
            </h2>
            <Separator className="mb-8" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {items.map((item, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-3">
                    <div className="p-1 rounded-md bg-accent/10">{item.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl mb-1">{item.title}</CardTitle>
                       <Badge variant="outline" className={`text-xs font-medium ${getStatusColor(item.status)}`}>{item.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">{item.description}</CardDescription>
                  </CardContent>
                   {item.tags && item.tags.length > 0 && (
                    <CardContent className="pt-2 pb-4">
                        <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                        </div>
                    </CardContent>
                    )}
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Have a Suggestion?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          We value your feedback! If you have ideas for new features or improvements, please feel free to share them with us.
        </p>
        <a
          href="mailto:azri.securedev@gmail.com?subject=LockMe%20Feature%20Suggestion"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          Suggest a Feature
        </a>
      </section>
    </div>
  );
}
