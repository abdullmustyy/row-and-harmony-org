import ServicesPage from "@/components/pages/services";
import { metadataBaseImage, metadataBaseUrl } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description: "Explore our range of services designed to meet your needs.",
    openGraph: {
        title: "Services",
        description: "Explore our range of services designed to meet your needs.",
        images: [{ url: metadataBaseImage }],
        url: metadataBaseUrl,
    },
};

const Services = () => {
    return <ServicesPage />;
};

export default Services;
