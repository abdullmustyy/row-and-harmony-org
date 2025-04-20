import PropertiesPage from "@/components/pages/listings/properties";
import { sanityFetch } from "@/sanity/lib/live";
import { getPropertiesQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Properties",
    description:
        "Explore our diverse portfolio of properties, including residential, commercial, and industrial spaces. Find your perfect property with us.",
    openGraph: {
        title: "Properties",
        description:
            "Explore our diverse portfolio of properties, including residential, commercial, and industrial spaces. Find your perfect property with us.",
    },
};

const Properties = async () => {
    const { data: properties } = await sanityFetch({ query: getPropertiesQuery });

    return <PropertiesPage {...{ properties }} />;
};

export default Properties;
