"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useActionState, useEffect, useRef } from "react"; 

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormData = z.infer<typeof formSchema>;

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      form.reset(); // Reset RHF fields
      // formRef.current?.reset(); // Reset native form fields - RHF reset should suffice
    } else if (state.status === "error" && state.message) {
      // Display main error message
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
      // Display field-specific errors from server action
      if (state.errors) {
        Object.keys(state.errors).forEach((key) => {
          const field = key as keyof ContactFormData;
          const message = state.errors?.[field]?.[0];
          if (message) {
            form.setError(field, { type: "server", message });
          }
        });
      }
    }
  }, [state, toast, form]);

  // This handler is called by RHF after successful client-side validation
  const handleValidSubmit = () => {
    if (formRef.current) {
      // Programmatically submit the form. This will invoke the `action`
      // specified on the <form> tag, which is `formAction` from useActionState.
      formRef.current.requestSubmit();
    }
  };

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction} // Server action from useActionState
        onSubmit={form.handleSubmit(handleValidSubmit)} // RHF validation handler for client-side validation
        className="space-y-6 w-full max-w-lg text-left"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} className="bg-background/80 placeholder:text-muted-foreground/70" />
              </FormControl>
              {/* RHF will display client-side errors. Server errors handled by useEffect */}
              <FormMessage /> 
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/80 placeholder:text-muted-foreground/70" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Regarding..." {...field} className="bg-background/80 placeholder:text-muted-foreground/70" />
              </FormControl>
               <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  {...field}
                  rows={5}
                  className="bg-background/80 placeholder:text-muted-foreground/70"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit" // This button click triggers RHF's handleSubmit
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow"
          disabled={isPending} 
          aria-disabled={isPending} 
        >
           {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </form>
    </Form>
  );
