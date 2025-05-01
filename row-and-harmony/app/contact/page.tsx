import ContactPage from "@/components/pages/contact";
import { metadataBaseImage, metadataBaseUrl } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact us for all your facility management needs. Let's talk about how we can help you.",
    openGraph: {
        title: "Contact Us",
        description: "Contact us for all your facility management needs. Let's talk about how we can help you.",
        images: [{ url: metadataBaseImage }],
        url: metadataBaseUrl,
    },
};

const Contact = () => {
    return <ContactPage />;
};

export default Contact;
