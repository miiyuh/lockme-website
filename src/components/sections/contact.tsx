import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Mail className="h-12 w-12 text-accent" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[700px] text-primary-foreground/80 md:text-lg">
            Have questions, feedback, or need support? We&apos;d love to hear from you!
          </p>
          <div className="mt-6"> {/* Changed from mt-4 to mt-6 and parent from space-y-6 to space-y-4 */}
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow">
              <Link href="mailto:azri.securedev@gmail.com">
                Email Us: azri.securedev@gmail.com
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
