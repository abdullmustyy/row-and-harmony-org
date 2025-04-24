import { GetPropertiesQueryResult } from "@/sanity/types";
import React from "react";
import PropertyCard from "./property-card";
import PropertyCarousel from "./property-carousel";

interface IPropertiesPageProps extends React.ComponentProps<"main"> {
    properties: GetPropertiesQueryResult;
}

const PropertiesPage = ({ properties }: IPropertiesPageProps) => {
    return (
        <main className="relative isolate mt-nav">
            <section className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-6 gap-y-12 justify-items-stretch md:px-8 px-4 py-[5vh]">
                {properties.map((property) => (
                    <PropertyCard key={property._id} property={property} className="group">
                        <PropertyCarousel property={property} />
                    </PropertyCard>
                ))}
            </section>
        </main>
    );
};

export default PropertiesPage;
