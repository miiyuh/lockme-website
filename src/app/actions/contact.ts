'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error' | 'idle';
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data. Please check your inputs.',
      status: 'error',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // In a real application, you would integrate an email service (e.g., SendGrid, Resend, Nodemailer) here
  // to send an email to support@lockme.my with the details below.
  console.log('Simulating contact form submission:');
  console.log('Recipient: support@lockme.my');
  console.log('From Name:', name);
  console.log('From Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  // Simulate email sending delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate potential error for testing
  // if (Math.random() > 0.8) { // Lower probability for demo purposes
  //   return {
  //     message: 'Simulated error: Failed to send message. Please try again later.',
  //     status: 'error',
  //   };
  // }

  return {
    message: 'Thank you for your message! We will get back to you soon at the email address you provided.',
    status: 'success',
  };
}
