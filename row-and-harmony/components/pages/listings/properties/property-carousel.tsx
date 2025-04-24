"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { GetPropertiesQueryResult } from "@/sanity/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface IPropertyCarousel extends Omit<React.ComponentProps<"div">, "property"> {
    property: GetPropertiesQueryResult[number];
}

const PropertyCarousel = ({ property }: IPropertyCarousel) => {
    const displayImage = useMemo(
        () => (property.images?.display ? urlFor(property.images.display).url() : ""),
        [property.images?.display],
    );
    const showcaseImages = useMemo(
        () => (property.images?.showcase ? property.images.showcase.map((showcase) => urlFor(showcase).url()) : []),
        [property.images?.showcase],
    );
    const slides = useMemo(() => [displayImage, ...showcaseImages], [displayImage, showcaseImages]);

    const [curr, setCurr] = useState(0);
    const [containerSize, setContainerSize] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    const prev = useCallback(() => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1)), [slides.length]);
    const next = useCallback(() => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), [slides.length]);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                setContainerSize(containerRef.current.clientWidth);
            }

            console.log("Container width:", containerSize);
        };

        handleResize(); // Set initial width
        window.addEventListener("resize", handleResize); // Update width on resize

        return () => {
            window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
        };
    }, [containerSize]);

    return (
        <div
            ref={containerRef}
            className="aspect-square grid items-center overflow-hidden relative [--slide-size:--spacing(70)]"
        >
            <Link href={`/properties/${property._id}`} className="size-full">
                <div
                    className={`h-full grid grid-flow-col transition-transform duration-500 ease-1`}
                    style={{ translate: `-${containerSize * curr}px` }}
                >
                    {slides.map((slide, index) => (
                        <div key={slide + index} className="aspect-square shrink-0 relative">
                            <Image
                                src={slide}
                                alt={property.title!}
                                fill
                                priority
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </Link>
            <Button
                variant="outline"
                className={cn(
                    "size-8 rounded-full absolute left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-1",
                    { "group-hover:opacity-0 invisible": curr === 0 },
                )}
                onClick={prev}
            >
                <ChevronLeft className="size-4" />
            </Button>
            <Button
                variant="outline"
                className={cn(
                    "size-8 rounded-full absolute right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-1",
                    { "group-hover:opacity-0 invisible": curr === slides.length - 1 },
                )}
                onClick={next}
            >
                <ChevronRight className="size-4" />
            </Button>
        </div>
    );
};

export default PropertyCarousel;
