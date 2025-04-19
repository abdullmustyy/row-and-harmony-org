import { Quote, Star } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

interface ITestimonialSlideProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    description: string;
    noOfStars: number;
    image: StaticImageData;
    role: string;
    branch: string;
}

const TestimonialSlide = ({ name, description, noOfStars, image, role, branch }: ITestimonialSlideProps) => {
    return (
        <div className="embla__slide pl-8">
            <div className="h-full group flex flex-col justify-between gap-y-6 p-8 relative border border-accent/50 border-b-3 border-b-primary">
                <div className="absolute -top-[1px] -right-5 size-16 grid place-content-center bg-accent group-hover:bg-primary after:absolute after:top-full after:right-0 after:border-l-20 after:border-l-accent group-hover:after:border-l-primary after:border-b-18 after:border-b-transparent after:transition-colors after:duration-500 after:ease-1 transition-colors duration-500 ease-1">
                    <Quote className="stroke-background fill-background" />
                </div>
                <div className="space-y-2">
                    <h5 className="text-fluid-base font-medium">{name}</h5>
                    <div className="flex items-center gap-x-1">
                        {Array.from({ length: noOfStars }).map((_, i) => (
                            <Star key={i} className="size-4 fill-accent stroke-accent" />
                        ))}
                    </div>
                </div>
                <p className="leading-loose">{description}</p>
                <div className="flex items-center gap-x-2">
                    <Image src={image} alt={`${name} Image`} className="size-14 object-cover rounded-full" />
                    <div>
                        <h6 className="font-medium">{role}</h6>
                        <p className="text-primary">{branch}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlide;
