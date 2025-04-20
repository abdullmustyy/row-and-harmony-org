import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AppProviders from "@/providers";
import { SanityLive } from "@/sanity/lib/live";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { bricolageGrotesque, recursive } from "./fonts";

const title = "Row & Harmony — Facility and Property Management Company LTD";
const description =
    "ROW & HARMONY is an active player in the Facility management industry in the world with numerous years of experience in the Maintenance business and a robust portfolio of commercial and residential properties being managed by the company. We are committed to providing our client with personalized services.";
const url = "https://row-and-harmony.vercel.app";
const image = "/images/webps/logo-opengraph.webp";

export const metadata: Metadata = {
    metadataBase: new URL(url),
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
    authors: [{ name: "Row & Harmony", url }],
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
        url,
        siteName: title,
        images: [{ url: image }],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
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
                    <Footer className="mt-auto" />
                </AppProviders>
            </body>
        </html>
    );
}
