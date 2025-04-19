import { cn } from "@/lib/utils";
import { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { HTMLAttributes, ReactNode, useCallback } from "react";
import { Button } from "./ui/button";

interface IEmblaCarouselProps extends HTMLAttributes<HTMLDivElement> {
    options?: EmblaOptionsType;
    plugins?: EmblaPluginType[];
    slides: ReactNode[];
    showControls?: boolean;
}

const EmblaCarousel = ({ className, options, plugins, slides, showControls = true }: IEmblaCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, plugins);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla overflow-hidden space-y-6">
            <div className="embla__viewport" ref={emblaRef}>
                <div className={cn("embla__container", className)}>{slides.map((slide) => slide)}</div>
            </div>
            {showControls && (
                <div className="flex items-center justify-center gap-4">
                    <Button className="embla__prev before-hover-transform-btn h-1.5 w-10 p-0" onClick={scrollPrev}>
                        <span className="relative sr-only">Prev</span>
                    </Button>
                    <Button className="embla__next before-hover-transform-btn h-1.5 w-10 p-0" onClick={scrollNext}>
                        <span className="relative sr-only">Next</span>
                    </Button>
                </div>
            )}
        </div>
    );
};

export default EmblaCarousel;
