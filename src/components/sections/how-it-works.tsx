
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileLock2, KeyRound, Download } from "lucide-react";

const steps = [
  {
    icon: <FileLock2 className="h-10 w-10 text-accent mb-3 sm:mb-4" />,
    title: "Encrypt Your File",
    description: "Easily select any file from your computer. LockMe prepares it for secure encryption right on your device.",
  },
  {
    icon: <KeyRound className="h-10 w-10 text-accent mb-3 sm:mb-4" />,
    title: "Set a Password",
    description: "Create a strong, unique password. This password is crucial for encrypting and later decrypting your file.",
  },
  {
    icon: <Download className="h-10 w-10 text-accent mb-3 sm:mb-4" />,
    title: "Download Encrypted File",
    description: "LockMe processes your file locally and provides the encrypted version for you to save securely wherever you choose.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How LockMe Works
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-md md:text-lg">
            Encrypting your files with LockMe is a simple, three-step process.
            All done offline, on your device.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <CardHeader className="p-2 sm:p-0">
                {step.icon}
                <CardTitle className="text-xl sm:text-2xl text-left">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-2 sm:p-0">
                <CardDescription className="text-sm sm:text-base text-left">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
