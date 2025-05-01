import { z } from "zod";

export const NewsletterSchema = z.object({
    email: z.string({ required_error: "Please enter your email" }).email("Invalid email address"),
});
