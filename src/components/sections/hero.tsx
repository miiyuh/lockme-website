import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDownToLine, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-20 md:py-32 lg:py-40 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none drop-shadow-md">
                LockMe: Secure File Encryption and Decryption
              </h1>
              <p className="max-w-[600px] text-lg text-primary-foreground/90 md:text-xl drop-shadow-sm">
                Secure your files. No cloud. No compromise.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Link href="#download">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full min-[400px]:w-auto shadow-lg hover:shadow-xl transition-shadow">
                  <ArrowDownToLine className="mr-2 h-5 w-5" />
                  Download Now
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 w-full min-[400px]:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <ShieldCheck
              className="h-64 w-64 text-accent opacity-20 transform rotate-[-15deg]"
              data-ai-hint="security shield"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
