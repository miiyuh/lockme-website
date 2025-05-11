import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-28 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none drop-shadow-md">
                LockMe: Secure File Encryption and Decryption
              </h1>
              <p className="max-w-[600px] text-base text-primary-foreground/90 md:text-lg mx-auto lg:mx-0 drop-shadow-sm">
                Secure your files. No cloud. No compromise.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
              <Link href="#download">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full min-[400px]:w-auto shadow-lg hover:shadow-xl transition-shadow">
                  <ArrowDownToLine className="mr-2 h-5 w-5" />
                  Download Now
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground w-full min-[400px]:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <ShieldCheck
              className="h-48 w-48 sm:h-64 sm:w-64 text-accent opacity-20 transform rotate-[-15deg]"
              data-ai-hint="security shield"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
