import PropertyPage from "@/components/pages/listings/properties/property";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { getPropertiesQuery, getPropertyByIdQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

export async function generateStaticParams() {
    const properties = await client.fetch(getPropertiesQuery);

    return properties.map((property) => ({ id: property._id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const {
        data: [property],
    } = await sanityFetch({ query: getPropertyByIdQuery, params: { id } });

    return {
        title: property.title,
        description: property.description,
        openGraph: {
            title: property.title,
            description: property.description,
            images: [
                {
                    url: property.images?.display ? urlFor(property.images.display).url() : "",
                    alt: property.title,
                },
            ],
        },
    };
}

const Property = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const {
        data: [property],
    } = await sanityFetch({ query: getPropertyByIdQuery, params: { id } });

    return <PropertyPage {...{ property }} />;
};

export default Property;
