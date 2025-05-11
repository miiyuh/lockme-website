
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useActionState, useEffect, useRef } from "react"; // Changed import

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
  // Updated to useActionState and destructure isPending
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
      form.reset();
      if (formRef.current) {
        formRef.current.reset();
      }
    } else if (state.status === "error" && state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        // onSubmit={form.handleSubmit(() => formRef.current?.requestSubmit())} // Can be simplified if RHF isn't doing much before server action
        onSubmit={(e) => {
            form.handleSubmit(() => {
                // This function is called after client-side validation passes.
                // We can directly call formAction if we pass FormData,
                // or let the native form submission proceed.
                // For this specific setup where `action` prop is used,
                // we can let RHF do its validation, then if it passes,
                // the formAction will be called due to native form submission triggered by `type="submit"` button.
                // If RHF `handleSubmit` is used, it prevents default and calls its own submit handler.
                // To make `action` work with RHF, it's common to call `formRef.current.requestSubmit()`
                // or pass `formData` directly to `formAction`.
                // Let's stick to `requestSubmit` to ensure native `action` is triggered.
                if (formRef.current) {
                  // Create FormData from the form
                  const formData = new FormData(formRef.current);
                  formAction(formData); // Directly call the server action with FormData
                }
            })(e);
        }}
        className="space-y-6 w-full max-w-lg"
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
              <FormMessage>{state.errors?.name?.[0]}</FormMessage>
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
              <FormMessage>{state.errors?.email?.[0]}</FormMessage>
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
               <FormMessage>{state.errors?.subject?.[0]}</FormMessage>
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
              <FormMessage>{state.errors?.message?.[0]}</FormMessage>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-shadow"
          disabled={isPending} // Use isPending from useActionState
          aria-disabled={isPending} // Use isPending from useActionState
        >
           {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Send Message
        </Button>
      </form>
    </Form>
  );
}

