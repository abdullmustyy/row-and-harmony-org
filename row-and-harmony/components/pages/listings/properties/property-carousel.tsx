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
    const lastSwipeTime = useRef(Date.now());
    const containerTouchStartX = useRef(0);
    const containerTouchEndX = useRef(0);

    // Handle slide controls
    const handleNextSlide = useCallback(
        () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)),
        [slides.length],
    );
    const handlePrevSlide = useCallback(
        () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1)),
        [slides.length],
    );
    // Handle touch events for mobile swipe
    const handleContainerTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        containerTouchStartX.current = e.touches[0].clientX;
    }, []);
    const handleContainerTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
        containerTouchEndX.current = e.touches[0].clientX;
    }, []);
    const handleContainerTouchEnd = useCallback(() => {
        const deltaX = containerTouchStartX.current - containerTouchEndX.current;
        if (Math.abs(deltaX) > 30) {
            if (deltaX > 0) {
                handleNextSlide();
            } else {
                handlePrevSlide();
            }
        }
    }, [handleNextSlide, handlePrevSlide]);

    // Update container size on mount and resize
    useEffect(() => {
        const handleContainerSize = () => {
            if (containerRef.current) {
                setContainerSize(containerRef.current.clientWidth);
            }
        };

        handleContainerSize();
        window.addEventListener("resize", handleContainerSize, { passive: true });

        return () => {
            window.removeEventListener("resize", handleContainerSize);
        };
    }, [containerSize]);
    // Update container position on wheel scroll
    useEffect(() => {
        const { current: container } = containerRef;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            const now = Date.now();
            if (now - lastSwipeTime.current < 700) return; // debounce

            if (Math.abs(e.deltaX) > 30) {
                if (e.deltaX > 0) {
                    handleNextSlide();
                } else {
                    handlePrevSlide();
                }
                lastSwipeTime.current = now;
            }
        };

        container.addEventListener("wheel", handleWheel, { passive: true });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [handleNextSlide, handlePrevSlide]);

    return (
        <div
            ref={containerRef}
            onTouchStart={handleContainerTouchStart}
            onTouchMove={handleContainerTouchMove}
            onTouchEnd={handleContainerTouchEnd}
            className="aspect-square grid items-center overflow-hidden relative [--slide-size:--spacing(70)]"
        >
            <Link href={`/properties/${property._id}`} className="size-full">
                <div
                    className={`h-full grid grid-flow-col transition-transform duration-500 ease-1`}
                    style={{ translate: `-${containerSize * curr}px` }}
                >
                    {slides.map((slide, index) => (
                        <div key={slide + index} className="aspect-square shrink-0 relative">
                            <Image src={slide} alt={property.title!} fill priority className="object-cover" />
                        </div>
                    ))}
                </div>
            </Link>
            <Button
                variant="outline"
                className={cn(
                    "size-8 rounded-full absolute left-3 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 ease-1",
                    { "group-hover:opacity-0 invisible": curr === 0 },
                )}
                onClick={handlePrevSlide}
            >
                <ChevronLeft className="size-4" />
            </Button>
            <Button
                variant="outline"
                className={cn(
                    "size-8 rounded-full absolute right-3 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 ease-1",
                    { "group-hover:opacity-0 invisible": curr === slides.length - 1 },
                )}
                onClick={handleNextSlide}
            >
                <ChevronRight className="size-4" />
            </Button>
        </div>
    );
};

export default PropertyCarousel;
