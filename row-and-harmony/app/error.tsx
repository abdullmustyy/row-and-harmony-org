"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import Icon from "@/public/images/pngs/icon.png";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <section className="h-screen grid place-content-center text-center gap-y-6">
            <div className="flex items-center gap-[1vw] text-primary text-fluid-6xl mx-auto">
                <TriangleAlert className="size-24" />
                <Image src={Icon} alt="Icon" className="size-24 object-fill" />
                <TriangleAlert className="size-24" />
            </div>
            <div className="space-y-4">
                <h2 className="font-primary text-fluid-4xl">Something went wrong!</h2>
                <p className="text-fluid-base">
                    {error.message || "An unexpected error occurred. Please try again later."}
                </p>
            </div>
            <Button
            className="w-fit h-11 mx-auto"
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </Button>
        </section>
    );
}
