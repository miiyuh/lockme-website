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
      "Yes, LockMe is completely free to use! We believe powerful security tools should be accessible to everyone.",
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
      "Yes, LockMe is proud to be a free and open-source project! The source code is available on GitHub under the MIT License. We believe in transparency and community collaboration to build secure software.",
  },
  {
    question: "What license is LockMe under?",
    answer:
      "LockMe is released under the MIT License, which is a permissive free software license. This means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software.",
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-12">
          <HelpCircle className="h-12 w-12 text-accent" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-md md:text-lg">
            Find answers to common questions about LockMe.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-md sm:text-lg hover:no-underline text-left py-3 sm:py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-3 sm:pb-4">
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
