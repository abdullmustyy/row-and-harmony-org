"use client";

import OutlineLabel from "@/components/section-labels/outline-label";
import { serviceCenter } from "@/lib/data";
import Image from "next/image";
import { useMemo, useState } from "react";
import ServiceTabs from "./service-tabs";

const ServiceContent = () => {
    const [serviceId, setServiceId] = useState("facility-management");
    const currentService = useMemo(() => serviceCenter.find(({ id }) => id === serviceId)!, [serviceId]);

    return (
        <section className="md:px-8 px-4 md:pt-[10vh] pt-[8vh] relative">
            <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8">
                <div className="lg:hidden overflow-hidden">
                    <ServiceTabs
                        {...{ serviceId, setServiceId }}
                        className="flex-row w-full *:w-fit *:gap-4 overflow-x-scroll"
                    />
                </div>

                <div className="lg:flex hidden flex-col gap-8">
                    <ServiceTabs {...{ serviceId, setServiceId }} />
                </div>

                <div className="flex flex-col gap-8">
                    <figure className="w-full">
                        <Image src={currentService.image} alt="Who We Are" className="object-cover size-full" />
                    </figure>

                    <div>
                        <OutlineLabel label="Services" text="— service overview" />
                        <h3 className="text-fluid-lg font-semibold">
                            Integrated Solutions Across Land, Sea & Property
                        </h3>

                        <div className="mt-6 space-y-3">
                            <p>
                                At <span className="font-semibold">Row & Harmony</span>, we are driven by one mission:
                                to help businesses thrive through dependable, compliant, and expertly managed logistics
                                and facility operations. From the safe movement of goods across borders to the
                                professional care of real estate assets, our services are built around efficiency,
                                compliance, and client satisfaction.
                                <br />
                                We specialize in four core service areas:
                            </p>
                            <ul className="list-disc marker:text-accent pl-6 space-y-1">
                                <li>Facility & Property Management</li>
                                <li>Export & Cargo Inspection</li>
                                <li>Freight Services (Air, Sea, Land)</li>
                                <li>Marine Support & Port Operations</li>
                            </ul>
                            <p>
                                No matter your needs, we deliver tailored solutions backed by a team of skilled
                                professionals, decades of experience, and global best practices.
                            </p>
                        </div>
                    </div>

                    <div>
                        <OutlineLabel label="Center" text="— service center" />
                        <h3 className="text-fluid-lg font-semibold">{currentService.title}</h3>

                        <div className="mt-6 space-y-3">
                            <p>{currentService.intro}</p>
                            <ul className="list-disc marker:text-accent pl-6 space-y-1">
                                {currentService.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                            <p>{currentService.outro}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceContent;
