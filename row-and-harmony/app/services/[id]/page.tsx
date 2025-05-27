import ServicePage from "@/components/pages/services/service";
import { metadataBaseImage, metadataBaseUrl } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { getServiceByIdQuery, getServicesQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

export async function generateStaticParams() {
    const services = await client.fetch(getServicesQuery);

    return services.map((service) => ({ id: service._id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const {
        data: [service],
    } = await sanityFetch({ query: getServiceByIdQuery, params: { id } });

    return {
        title: service.name,
        description: service.description,
        openGraph: {
            title: service.name,
            description: service.description,
            images: [{ url: metadataBaseImage }],
            url: metadataBaseUrl,
        },
    };
}

const Service = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const {
        data: [service],
    } = await sanityFetch({ query: getServiceByIdQuery, params: { id } });

    return <ServicePage {...{ service }} />;
};

export default Service;
