import DynamicImage from "@/components/dynamic-image";
import PortableTextContainer from "@/components/portable-text-container";
import OutlineLabel from "@/components/section-labels/outline-label";
import { urlFor } from "@/sanity/lib/image";
import { GetServiceByIdQueryResult } from "@/sanity/types";
import { PortableText } from "next-sanity";

interface IServicePageProps extends React.ComponentProps<"div"> {
    service: GetServiceByIdQueryResult[number];
}

const ServicePage = async ({ service }: IServicePageProps) => {
    return (
        <div className="flex flex-col gap-8">
            <figure className="relative h-130 w-full">
                <DynamicImage
                    src={urlFor(service.image ?? "").url()}
                    alt={service.name!}
                    className="size-full object-cover"
                />
            </figure>

            <div>
                <OutlineLabel label="Overview" text="— service overview" />
                <h3 className="text-fluid-lg font-semibold">{service.serviceOverview?.heading}</h3>

                <PortableTextContainer className="mt-6">
                    <PortableText value={service.serviceOverview?.details ?? []} />
                </PortableTextContainer>
            </div>

            <div>
                <OutlineLabel label="Center" text="— service center" />
                <h3 className="text-fluid-lg font-semibold">{service.name}</h3>

                <div className="mt-6 space-y-3">
                    <p>{service.serviceCenter?.intro}</p>
                    <ul className="list-disc marker:text-accent pl-6 space-y-1">
                        {service.serviceCenter?.services?.map((service, index) => <li key={index}>{service}</li>)}
                    </ul>
                    <p>{service.serviceCenter?.outro}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
