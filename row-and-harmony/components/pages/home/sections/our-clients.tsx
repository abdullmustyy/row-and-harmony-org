import SectionLabel from "@/components/section-labels/bar-label";
import { ourClients } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const OurClients = () => {
    return (
        <section className="md:px-8 px-4 space-y-6 pt-[10vh] pb-[16vh] relative z-20">
            <SectionLabel className="items-center">
                <p>Our Trusted Clients</p>
            </SectionLabel>
            <div className="space-y-4 mb-12 text-center">
                <h2 className="text-fluid-3xl font-medium font-primary">Partnering with Excellence</h2>
                <p>Our Clients:</p>
            </div>
            <div className="overflow-x-hidden mask-image-horizontal">
                <ul className="flex items-center pl-8 gap-x-8 whitespace-nowrap w-fit animate-marquee">
                    {ourClients.map(({ href, image, name }, index) => (
                        <li key={name + index} className="group min-w-fit flex items-center justify-center">
                            <Link href={href} target="_blank" rel="noopener noreferrer" title={name}>
                                <Image
                                    src={image}
                                    alt=""
                                    className="md:h-30 h-20 md:max-w-100 max-w-40 grayscale group-hover:grayscale-0 opacity-85 group-hover:opacity-100 transition-all duration-300 ease-1"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default OurClients;
