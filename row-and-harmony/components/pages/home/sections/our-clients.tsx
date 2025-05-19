import SectionLabel from "@/components/section-labels/bar-label";
import { urlFor } from "@/sanity/lib/image";
import { GetClientsQueryResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

interface IOurClientsProps extends React.ComponentProps<"section"> {
    clients: GetClientsQueryResult;
}

const OurClients = ({ clients }: IOurClientsProps) => {
    const ourClients = useMemo(
        () => [...clients, ...clients, ...clients, ...clients, ...clients, ...clients],
        [clients],
    );

    return (
        <section className="md:px-8 px-4 space-y-6 pt-[10vh] bg-background relative z-20">
            <SectionLabel className="items-center">
                <p>Our Trusted Clients</p>
            </SectionLabel>
            <div className="space-y-4 mb-12 text-center">
                <h2 className="text-fluid-3xl font-medium font-primary">Partnering with Excellence</h2>
                <p>Our Clients:</p>
            </div>
            <div className="overflow-x-hidden mask-image-horizontal">
                <ul className="flex items-center pl-8 gap-x-8 whitespace-nowrap w-fit animate-marquee">
                    {ourClients.map(({ _id, href, image, name, location }, index) => (
                        <Link
                            key={_id + index}
                            href={href!}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`${name} — ${location}`}
                        >
                            <li className="group relative md:h-30 h-20 aspect-square flex items-center justify-center">
                                <Image
                                    src={urlFor(image!).url()}
                                    alt={name!}
                                    fill
                                    className="size-full grayscale group-hover:grayscale-0 opacity-85 group-hover:opacity-100 transition-all duration-300 ease-1"
                                />
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OurClients;
