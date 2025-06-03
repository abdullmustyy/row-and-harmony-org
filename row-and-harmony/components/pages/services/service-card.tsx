import ContainerOverlay from "@/components/overlays/container-overlay";
import { urlFor } from "@/sanity/lib/image";
import { GetServicesQueryResult } from "@/sanity/types";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

interface IServiceCardProps extends React.ComponentProps<"div"> {
    service: GetServicesQueryResult[number];
}

const ServiceCard = ({ service: { _id, description, icon, image, name } }: IServiceCardProps) => {
    return (
        <Link href={`/services/${_id}`} className="group relative flex">
            <div className="flex flex-col gap-y-8 p-8 border border-accent/50 border-b-3 border-b-primary overflow-hidden hover:text-background transition-colors duration-400">
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
        </Link>
    );
};

export default ServiceCard;
