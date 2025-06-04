import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";
import { metadataBaseImage, metadataBaseUrl } from "@/lib/constants";
import AppProviders from "@/providers";
import { SanityLive } from "@/sanity/lib/live";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { bricolageGrotesque, recursive } from "./fonts";

const title = "Row & Harmony — Facility and Property Management Company LTD";
const description =
    "ROW & HARMONY is a key player in the facility management industry, with years of experience and a strong portfolio of commercial and residential properties. We are dedicated to delivering personalized services to our clients.";

export const metadata: Metadata = {
    metadataBase: new URL(metadataBaseUrl),
    title: {
        default: title,
        template: `%s | ${title}`,
    },
    description,
    generator: "Next.js",
    applicationName: title,
    referrer: "origin-when-cross-origin",
    keywords: [
        "Facility Management",
        "Property Management",
        "Row & Harmony",
        "Nigeria",
        "Maintenance Services",
        "Real Estate",
    ],
    authors: [{ name: "Row & Harmony", url: metadataBaseUrl }],
    creator: "Row & Harmony",
    publisher: "Row & Harmony",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title,
        description,
        url: metadataBaseUrl,
        siteName: title,
        images: [{ url: metadataBaseImage }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [metadataBaseImage],
        creator: "", //! ask for twitter handle
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${recursive.variable} ${bricolageGrotesque.variable} hide-scrollbar`}>
            <body className="min-h-screen flex flex-col font-base select-none antialiased">
                <AppProviders>
                    <SanityLive />
                    <Navbar />
                    {children}
                    <Toaster />
                    <Footer className="mt-auto" />
                </AppProviders>
            </body>
        </html>
    );
}
