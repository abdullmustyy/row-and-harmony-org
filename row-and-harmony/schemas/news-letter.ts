import { z } from "zod";

export const NewsletterSchema = z.object({
    email: z
        .string({ required_error: "Email is required. Please provide a valid email address to subscribe." })
        .email("Please enter a valid email address."),
});
