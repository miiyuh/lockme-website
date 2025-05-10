import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Key, Laptop, WifiOff, Puzzle, MousePointerSquareDashed } from "lucide-react";

// Helper icon for KeyRound, defined at the top.
const KeyRoundIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
);


const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: "AES-256 Encryption",
    description: "Industry-standard, military-grade encryption to keep your files secure.",
  },
  {
    icon: <Key className="h-8 w-8 text-accent" />,
    title: "RSA Integration",
    description: "Utilizes robust RSA cryptography for enhanced key management and security.",
  },
  {
    icon: <KeyRoundIcon className="h-8 w-8 text-accent" />,
    title: "Password-Based",
    description: "Secure your files with a strong password that only you know.",
  },
  {
    icon: <MousePointerSquareDashed className="h-8 w-8 text-accent" />,
    title: "Drag & Drop",
    description: "User-friendly interface with easy drag and drop functionality for files.",
  },
  {
    icon: <Laptop className="h-8 w-8 text-accent" />,
    title: "Cross-Platform",
    description: "Available for both Windows and Linux operating systems.",
  },
  {
    icon: <WifiOff className="h-8 w-8 text-accent" />,
    title: "Offline Use",
    description: "Works entirely offline. No internet connection needed, ensuring privacy.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Puzzle className="h-12 w-12 text-accent" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Features
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            LockMe is packed with features to ensure top-notch security and ease of use.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card text-card-foreground">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {feature.icon}
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
