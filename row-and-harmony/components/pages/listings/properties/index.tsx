import { urlFor } from "@/sanity/lib/image";
import { GetPropertiesQueryResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PropertyCard from "./property-card";

interface IPropertiesPageProps extends React.ComponentProps<"main"> {
    properties: GetPropertiesQueryResult;
}

const PropertiesPage = ({ properties }: IPropertiesPageProps) => {
    return (
        <main className="relative isolate mt-nav">
            <section className="grid grid-cols-4 gap-x-8 gap-y-12 md:px-8 px-4 py-[5vh]">
                {properties.map((property) => (
                    <Link key={property._id} href={`/properties/${property._id}`} className="group">
                        <PropertyCard property={property}>
                            <Image
                                src={property.images?.display ? urlFor(property.images?.display).url() : ""}
                                alt={property.title!}
                                width={280}
                                height={280}
                                className="size-70 object-cover"
                            />
                        </PropertyCard>
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default PropertiesPage;
