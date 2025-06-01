"use server";

import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { getEmailQuery } from "@/sanity/lib/queries";

export async function subscribeToNewsletter(email: string) {
    try {
        if (!email) {
            return {
                success: false,
                message: "Please provide a valid email address.",
            };
        }

        // Check if email already exists
        const { data } = await sanityFetch({ query: getEmailQuery, params: { email } });

        if (data?.email) {
            return {
                success: false,
                message: "This email address is already subscribed to our newsletter.",
            };
        }

        // Create a new newsletter subscription
        const newSubscription = {
            _type: "newsLetter",
            email,
        };

        const response = await client.create(newSubscription);

        return {
            success: true,
            message: `Thank you for subscribing! We've added ${response.email} to our newsletter.`,
        };
    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        return {
            success: false,
            message: "Oops! Something went wrong while processing your subscription. Please try again shortly.",
        };
    }
}
