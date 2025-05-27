import { metadataBaseImage, metadataBaseUrl } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/live";
import { getServicesQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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

const Services = async () => {
    const {
        data: [firstService],
    } = await sanityFetch({ query: getServicesQuery });

    redirect(`/services/${firstService._id}`);
};

export default Services;
