import PropertyPage from "@/components/pages/listings/properties/property";
import { sanityFetch } from "@/sanity/lib/live";
import { getPropertyByIdQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Property",
    description:
        "Explore our diverse portfolio of properties, including residential, commercial, and industrial spaces. Find your perfect property with us.",
    openGraph: {
        title: "Property",
        description:
            "Explore our diverse portfolio of properties, including residential, commercial, and industrial spaces. Find your perfect property with us.",
    },
};

const Property = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const {
        data: [property],
    } = await sanityFetch({ query: getPropertyByIdQuery, params: { id } });

    return <PropertyPage {...{ property }} />;
};

export default Property;
