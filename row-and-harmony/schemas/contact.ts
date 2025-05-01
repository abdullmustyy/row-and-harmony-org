import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string({ required_error: "Please enter your name" }).trim(),
    email: z.string({ required_error: "Please enter your email" }).email("Invalid email address").trim(),
    subject: z.string({ required_error: "Please enter a subject" }).trim(),
    phone: z.string({ required_error: "Please enter your phone number" }).trim(),
    message: z.string({ required_error: "Please enter your message" }).trim(),
});
