import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { GetPropertyByIdQueryResult } from "@/sanity/types";
import { formatPriceNaira } from "@repo/lib/utils";
import { Mail, MapPin, MoveLeft, Phone, Share } from "lucide-react";
import Image from "next/image";
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

    return (
        <main className="relative isolate mt-nav">
            <section className="flex flex-col md:px-8 px-4 py-[5vh]">
                <div className="flex items-center gap-8 pl-2">
                    <Link href="/properties" title="Back to properties">
                        <MoveLeft className="size-6 stroke-[2.5] stroke-primary hover:-translate-x-1 transition-transform duration-300 ease-1" />
                    </Link>
                    <h3 className="text-fluid-xl font-primary font-medium">{property.title}</h3>
                    <Button variant="ghost" className="ml-auto">
                        <Share />
                        <span className="underline underline-offset-2">Share</span>
                    </Button>
                </div>

                <div className="mt-6 mb-8 grid grid-cols-5 grid-rows-2 gap-4 items-stretch h-100">
                    <div className="col-span-3 row-span-2">
                        <Image
                            src={displayImage}
                            alt=""
                            width={718.4}
                            height={400}
                            priority
                            className="size-full object-cover"
                        />
                    </div>
                    {showcaseImages.map((src, index) => (
                        <div key={src + index}>
                            <Image src={src} alt="" width={228.8} height={192} className="size-full object-cover" />
                        </div>
                    ))}
                </div>

                <div className="flex items-start gap-20">
                    <div className="w-2/3 grid gap-6">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1.5">
                                <h4 className="font-medium text-fluid-base">
                                    {property.title} for {property.type}
                                </h4>
                                <div className="flex items-center gap-1">
                                    <MapPin className="size-4 stroke-[1.5] stroke-accent" />
                                    <span>{property.location}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5 text-right">
                                <span className="font-semibold text-fluid-base">
                                    {formatPriceNaira(property.price!)}
                                </span>
                                <span>per annum</span>
                            </div>
                        </div>
                        <p>{property.description}</p>
                    </div>

                    <aside className="w-1/3 grid gap-6">
                        <div>
                            <h4 className="font-semibold text-fluid-base">Get in touch</h4>
                            <p>For {property.type}s inquiries, please reach out through one of the following methods</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="text-background">
                                <Link href="" className="link-btn justify-center w-full gap-3 *:relative">
                                    <Phone className="size-4" />
                                    <span>Make a call</span>
                                </Link>
                            </div>
                            <div className="text-background">
                                <Link href="" className="link-btn justify-center w-full gap-3 *:relative">
                                    <span>Send a text</span>
                                </Link>
                            </div>
                            <div className="col-span-2 text-background">
                                <Link href="" className="link-btn justify-center w-full gap-3 *:relative">
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
