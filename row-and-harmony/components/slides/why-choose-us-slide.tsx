import Image, { StaticImageData } from "next/image";
import { HTMLAttributes, JSX, SVGProps } from "react";
import ContainerOverlay from "../overlays/container-overlay";

interface IWhyChooseUsSlideProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    description: string;
    Icon: ({ className, ...rest }: SVGProps<SVGSVGElement>) => JSX.Element;
    image: StaticImageData;
}

const WhyChooseUsSlide = ({ Icon, image, name, description }: IWhyChooseUsSlideProps) => {
    return (
        <div className="embla__slide group relative flex flex-col gap-y-8 p-8 border border-accent/50 border-b-3 border-b-primary overflow-hidden hover:text-background transition-colors duration-600">
            <div className="absolute inset-0 -z-10 clip-to-top group-hover:clip-full transition-all duration-500 ease-1">
                <figure className="relative size-full">
                    <Image src={image} alt={`${name} Image`} className="size-full object-cover" />
                    <ContainerOverlay />
                </figure>
            </div>
            <Icon className="size-16 text-primary group-hover:text-accent transition-colors duration-600 ease-1" />
            <div className="space-y-3">
                <h3 className="text-fluid-lg font-primary font-medium whitespace-pre-line">{name}</h3>
                <p className="text-fluid-sm">{description}</p>
            </div>
        </div>
    );
};

export default WhyChooseUsSlide;
