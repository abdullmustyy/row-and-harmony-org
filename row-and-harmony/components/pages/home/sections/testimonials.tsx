"use client";

import EmblaCarousel from "@/components/embla-carousel";
import SectionLabel from "@/components/section-label";
import TestimonialSlide from "@/components/slides/testimonial-slide";
import { testimonials } from "@/lib/data";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
    return (
        <section className="md:px-8 px-4 space-y-6 md:py-[10vh] py-[8vh] bg-background relative z-20">
            <SectionLabel className="lg:items-center">
                <p>Testimonials</p>
            </SectionLabel>
            <div className="space-y-4 mb-12 lg:text-center">
                <h2 className="text-fluid-3xl font-medium font-primary">What Our Customers Say</h2>
                <p>
                    At Row & Harmony Limited, we let our work speak for itself.
                    <br className="md:inline hidden" /> Our clients trust us to keep their facilities running smoothly,
                    <br className="md:inline hidden" /> and their feedback is a testament to our commitment to
                    excellence.
                    <br className="md:inline hidden" />
                    Here&apos;s what they have to say:
                </p>
            </div>
            <EmblaCarousel
                options={{ align: "start" }}
                plugins={[Autoplay({ delay: 8000, stopOnInteraction: false })]}
                className="grid grid-flow-col lg:auto-cols-[calc(100%/3)] md:auto-cols-[calc(100%/2)] auto-cols-[100%] -ml-8"
                slides={testimonials.map(({ branch, description, image, name, noOfStars, role }, i) => (
                    <TestimonialSlide key={name + i} {...{ branch, description, image, name, noOfStars, role }} />
                ))}
                showControls={false}
            />
        </section>
    );
};

export default Testimonials;
