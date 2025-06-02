import DynamicImage from "@/components/dynamic-image";
import WhatsAppIcon from "@/components/icons/whatsapp-icon";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { GetPropertyByIdQueryResult } from "@/sanity/types";
import { formatPriceNaira } from "@repo/lib/utils";
import { Mail, MapPin, MoveLeft, Phone, Share } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

interface IPropertyPageProps extends Omit<React.ComponentProps<"main">, "property"> {
    property: GetPropertyByIdQueryResult[number];
}

const PropertyPage = ({ property }: IPropertyPageProps) => {
    const displayImage = useMemo(
        () => (property.images?.display ? urlFor(property.images.display).url() : ""),
        [property.images?.display],
    );
    const showcaseImages = useMemo(
        () =>
            property.images?.showcase
                ? property.images.showcase.slice(0, 4).map((showcase) => urlFor(showcase).url())
                : [],
        [property.images?.showcase],
    );
    const formattedWhatsAppNumber = property.contactInfo?.whatsapp?.replace("+", "");

    return (
        <main className="relative isolate mt-nav">
            <section className="flex flex-col md:px-8 px-4 py-[5vh]">
                <div className="flex items-center md:gap-8 gap-4 pl-2">
                    <Link href="/properties" title="Back to properties">
                        <MoveLeft className="md:size-6 size-5 stroke-[2.5] stroke-primary hover:-translate-x-1 transition-transform duration-300 ease-1" />
                    </Link>
                    <h3 className="md:text-fluid-xl text-fluid-lg font-primary font-medium">{property.title}</h3>
                    <Button variant="ghost" className="ml-auto">
                        <Share />
                        <span className="md:inline hidden underline underline-offset-2">Share</span>
                    </Button>
                </div>

                <div className="mt-6 mb-8 grid md:grid-cols-[2.3fr_1fr_1fr] grid-cols-2 md:grid-rows-2 grid-rows-3 gap-4 items-stretch h-100">
                    <div className="md:row-span-2 md:col-span-1 col-span-2">
                        <DynamicImage src={displayImage} alt="" priority className="size-full object-cover" />
                    </div>
                    {showcaseImages.map((src, index) => (
                        <div key={src + index}>
                            <DynamicImage src={src} alt="" priority className="size-full object-cover" />
                        </div>
                    ))}
                </div>

                <div className="flex md:flex-row flex-col items-start lg:gap-20 gap-8">
                    <div className="md:w-2/3 w-full grid md:gap-6 gap-4">
                        <div className="flex md:flex-row flex-col md:items-center justify-between md:gap-0 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="font-medium text-fluid-base">
                                    {property.title} for {property.type}
                                </h4>
                                <div className="flex items-center gap-1">
                                    <MapPin className="size-4 stroke-[1.5] stroke-accent" />
                                    <span>{property.location}</span>
                                </div>
                            </div>
                            <div className="flex md:flex-col md:justify-normal justify-between gap-1.5 text-right">
                                <span className="font-semibold text-fluid-base">
                                    {formatPriceNaira(property.price!)}
                                </span>
                                <span>per annum</span>
                            </div>
                        </div>
                        <p>{property.description}</p>
                    </div>

                    <aside className="md:w-1/3 w-full grid gap-6">
                        <div>
                            <h4 className="font-semibold text-fluid-base">Get in touch</h4>
                            <p>For {property.type}s inquiries, please reach out through one of the following methods</p>
                        </div>
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-2 gap-3">
                            <div className="text-background">
                                <Link
                                    href={`tel:${property.contactInfo?.phone}`}
                                    className="link-btn justify-center w-full gap-3 *:relative"
                                >
                                    <Phone className="size-4" />
                                    <span>Make a call</span>
                                </Link>
                            </div>
                            <div className="text-background">
                                <Link
                                    href={`https://wa.me/${formattedWhatsAppNumber}`}
                                    className="link-btn justify-center w-full gap-3 *:relative"
                                >
                                    <WhatsAppIcon className="size-5" />
                                    <span>Send a text</span>
                                </Link>
                            </div>
                            <div className="lg:col-span-2 md:col-span-1 col-span-2 text-background">
                                <Link
                                    href={`mailto:${property.contactInfo?.email}`}
                                    className="link-btn justify-center w-full gap-3 *:relative"
                                >
                                    <Mail className="size-4" />
                                    <span>Send a mail</span>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
};

export default PropertyPage;
