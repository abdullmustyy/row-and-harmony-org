import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string({ required_error: "Name is required. Please provide your full name." }).trim(),
    email: z
        .string({ required_error: "Email is required. Please provide a valid email address." })
        .email("Please enter a valid email address.")
        .trim(),
    subject: z.string({ required_error: "Subject is required. Please specify the subject of your inquiry." }).trim(),
    phone: z.string({ required_error: "Phone number is required. Please provide a valid contact number." }).trim(),
    message: z.string({ required_error: "Message is required. Please enter your message or inquiry." }).trim(),
});

export type IContactSchema = z.infer<typeof ContactSchema>;
