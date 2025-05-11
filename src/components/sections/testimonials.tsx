import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "LockMe has been a game-changer for securing my sensitive client data. It's simple, effective, and gives me peace of mind knowing my files are safe offline.",
    name: "Sarah L., Freelance Consultant",
    avatarSrc: "https://picsum.photos/seed/user1/80/80",
    avatarFallback: "SL",
    rating: 5,
    hint: "professional woman"
  },
  {
    quote: "As a small business owner, data security is a top priority. LockMe provides robust encryption without the complexity of other solutions. Highly recommended!",
    name: "John B., Small Business Owner",
    avatarSrc: "https://picsum.photos/seed/user2/80/80",
    avatarFallback: "JB",
    rating: 5,
    hint: "business man"
  },
  {
    quote: "I love that LockMe works entirely offline. I don't have to worry about my files being on someone else's server. The drag-and-drop interface is super easy to use.",
    name: "Alex P., Researcher",
    avatarSrc: "https://picsum.photos/seed/user3/80/80",
    avatarFallback: "AP",
    rating: 4,
    hint: "researcher person"
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10 md:mb-12">
          <Quote className="h-12 w-12 text-accent" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Users Say
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-md md:text-lg">
            Hear from people who trust LockMe to protect their valuable data.
          </p>
        </div>
        <div className="grid gap-6 md:gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-center mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`}
                    />
                  ))}
                </div>
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-accent/50 mb-2 transform scale-x-[-1]" />
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 mt-auto">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12 mr-3 sm:mr-4 border-2 border-accent">
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.hint} loading="lazy" />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-card-foreground">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
