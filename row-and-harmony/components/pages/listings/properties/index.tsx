import { urlFor } from "@/sanity/lib/image";
import { GetPropertiesQueryResult } from "@/sanity/types";
import Image from "next/image";
import React from "react";
import PropertyCard from "./property-card";

interface IPropertiesPageProps extends React.ComponentProps<"main"> {
    properties: GetPropertiesQueryResult;
}

const PropertiesPage = ({ properties }: IPropertiesPageProps) => {
    return (
        <main className="relative isolate mt-nav">
            <section className="grid grid-cols-4 gap-8 md:px-8 px-4 py-[5vh]">
                {properties.map((property) => (
                    <PropertyCard key={property._id} property={property}>
                        <Image
                            src={urlFor(property.images?.display).url()}
                            alt={property.title!}
                            width={300}
                            height={200}
                            className="size-full object-cover"
                        />
                    </PropertyCard>
                ))}
            </section>
        </main>
    );
};

export default PropertiesPage;
