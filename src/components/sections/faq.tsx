import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is LockMe free?",
    answer:
      "LockMe is currently free to use during its beta phase. We may introduce premium features in the future, but the core encryption/decryption functionality will remain accessible.",
  },
  {
    question: "What happens if I lose my password?",
    answer:
      "LockMe uses strong encryption based on your password. If you lose your password, there is no way to recover your encrypted files. Please store your passwords securely and consider using a password manager.",
  },
  {
    question: "Does this app work offline?",
    answer:
      "Yes, LockMe is designed to be an offline-first application. All encryption and decryption processes happen locally on your computer. No internet connection is required to use the app after initial download.",
  },
  {
    question: "Is it open source?",
    answer:
      "LockMe is not currently open source, but we are considering releasing parts of the codebase or the full project under an open-source license in the future. Transparency and security are our top priorities.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <HelpCircle className="h-12 w-12 text-accent" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Find answers to common questions about LockMe.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
