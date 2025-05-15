"use client";

import PortableTextContainer from "@/components/portable-text-container";
import OutlineLabel from "@/components/section-labels/outline-label";
import { urlFor } from "@/sanity/lib/image";
import { GetServicesQueryResult } from "@/sanity/types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import ServiceTabs from "./service-tabs";

interface IServiceContentProps extends React.ComponentProps<"section"> {
    services: GetServicesQueryResult;
}

const ServiceContent = ({ services }: IServiceContentProps) => {
    const { current: firstServiceId } = useRef(services[0]._id);
    const [serviceId, setServiceId] = useState(firstServiceId);
    const currentService = useMemo(() => services.find(({ _id }) => _id === serviceId)!, [serviceId, services]);
    const tabs = useMemo(() => services.map(({ _id, name }) => ({ _id, name })), [services]);

    return (
        <section className="md:px-8 px-4 md:pt-[10vh] pt-[8vh] relative">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8">
                <div className="lg:hidden overflow-hidden">
                    <ServiceTabs
                        {...{ serviceId, setServiceId, tabs }}
                        className="flex-row w-full *:w-fit *:gap-4 overflow-x-scroll"
                    />
                </div>

                <div className="lg:flex hidden flex-col gap-8">
                    <ServiceTabs {...{ serviceId, setServiceId, tabs }} />
                </div>

                <div className="flex flex-col gap-8">
                    <figure className="relative h-130 w-full">
                        <Image
                            src={urlFor(currentService.image ?? "").url()}
                            alt="Who We Are"
                            fill
                            priority
                            className="object-cover"
                        />
                    </figure>

                    <div>
                        <OutlineLabel label="Overview" text="— service overview" />
                        <h3 className="text-fluid-lg font-semibold">{currentService.serviceOverview?.heading}</h3>

                        <PortableTextContainer className="mt-6">
                            <PortableText value={currentService.serviceOverview?.details ?? []} />
                        </PortableTextContainer>
                    </div>

                    <div>
                        <OutlineLabel label="Center" text="— service center" />
                        <h3 className="text-fluid-lg font-semibold">{currentService.name}</h3>

                        <div className="mt-6 space-y-3">
                            <p>{currentService.serviceCenter?.intro}</p>
                            <ul className="list-disc marker:text-accent pl-6 space-y-1">
                                {currentService.serviceCenter?.services?.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                            <p>{currentService.serviceCenter?.outro}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceContent;
