import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const screenshots = [
  { src: "https://lockme.my/assets/img/screenshots/screenshot_main.png", alt: "LockMe App Screenshot 1 - Main Dashboard", hint: "app interface" },
  { src: "https://lockme.my/assets/img/screenshots/screenshot_encrypt.png", alt: "LockMe App Screenshot 2 - Encryption Process", hint: "encryption process" },
  { src: "https://lockme.my/assets/img/screenshots/screenshot_decrypt.png", alt: "LockMe App Screenshot 3 - Decryption Process", hint: "decryption process" },
  { src: "https://lockme.my/assets/img/screenshots/screenshot_ai.png", alt: "LockMe App Screenshot 4 - AI Security Toolkit", hint: "security toolkit page" },
];

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            See LockMe in Action
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            A glimpse into the clean and intuitive user interface of LockMe.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {screenshots.map((screenshot, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={600}
                  height={400}
                  className="aspect-video w-full object-cover"
                  data-ai-hint={screenshot.hint}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
