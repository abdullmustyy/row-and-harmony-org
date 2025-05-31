"use server";

import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { getEmailQuery } from "@/sanity/lib/queries";

export async function subscribeToNewsletter(email: string) {
    try {
        if (!email) {
            return {
                success: false,
                message: "Email is required",
            };
        }

        // Check if email already exists
        const { data } = await sanityFetch({ query: getEmailQuery, params: { email } });

        if (data?.email) {
            return {
                success: false,
                message: "Email already subscribed to the newsletter",
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
            message: `Successfully subscribed ${response.email} to the newsletter, thank you!`,
        };
    } catch (error) {
        console.error("Error subscribing to newsletter:", error);
        return {
            success: false,
            message: "Failed to subscribe to the newsletter, please try again later",
        };
    }
}
