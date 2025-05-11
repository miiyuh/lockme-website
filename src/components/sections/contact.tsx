
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <Mail className="h-12 w-12 text-accent" />
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Get in Touch
            </h2>
            <p className="max-w-[700px] text-primary-foreground/80 md:text-lg">
              Have questions, feedback, or need support? Fill out the form below or email us at support@lockme.my. We&apos;d love to hear from you!
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
