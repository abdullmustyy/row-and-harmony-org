import ContainerOverlay from "@/components/overlays/container-overlay";
import SectionLabel from "@/components/section-labels/bar-label";
import { urlFor } from "@/sanity/lib/image";
import { GetServicesQueryResult } from "@/sanity/types";
import { Icon } from "@iconify/react";
import Image from "next/image";

interface IOurServiceProps extends React.ComponentProps<"section"> {
    services: GetServicesQueryResult;
}

const OurService = ({ services }: IOurServiceProps) => {
    return (
        <section className="md:px-8 px-4 lg:space-y-16 space-y-12 md:py-[10vh] py-[8vh] bg-background relative z-20">
            <div className="space-y-8">
                <SectionLabel className="lg:items-center">
                    <p>What We Do Best</p>
                </SectionLabel>
                <div className="lg:px-12 flex lg:flex-row flex-col lg:gap-8 gap-6 items-start">
                    <h2 className="text-fluid-3xl font-medium font-primary lg:text-right text-left lg:whitespace-nowrap">
                        Comprehensive Solutions
                        <br className="lg:inline hidden" /> for a Better Tomorrow
                    </h2>
                    <div className="lg:border-l-3 border-accent lg:pl-3">
                        <p className="text-left text-fluid-sm">
                            At Row & Harmony Limited, we provide a diverse range of services designed to keep your
                            facilities running efficiently and your business thriving. Our expertise spans multiple
                            industries, ensuring tailored solutions for every client.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12 gap-8">
                {services.map(({ _id, description, icon, image, name }) => (
                    <div
                        key={_id}
                        className="group relative flex flex-col gap-y-8 p-8 border border-accent/50 border-b-3 border-b-primary overflow-hidden hover:text-background transition-colors duration-400"
                    >
                        <div className="absolute inset-0 -z-10 clip-to-top group-hover:clip-full transition-all duration-500 ease-1">
                            <figure className="relative size-full">
                                <Image
                                    src={urlFor(image!).url()}
                                    alt={`${name} Image`}
                                    fill
                                    className="size-full object-cover"
                                />
                                <ContainerOverlay />
                            </figure>
                        </div>
                        <Icon
                            icon={icon?.name ?? ""}
                            className="*:stroke-1 size-16 text-primary group-hover:text-accent transition-colors duration-400 ease-1"
                        />
                        <div className="space-y-3">
                            <h3 className="text-fluid-lg font-primary font-medium whitespace-pre-line">{name}</h3>
                            <p className="text-fluid-sm">{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurService;
