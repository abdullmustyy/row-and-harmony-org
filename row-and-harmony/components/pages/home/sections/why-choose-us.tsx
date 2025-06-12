"use client";

import EmblaCarousel from "@/components/embla-carousel";
import SectionLabel from "@/components/section-labels/bar-label";
import WhyChooseUsSlide from "@/components/slides/why-choose-us-slide";
import { whyChooseUs } from "@/lib/data";
import CleanersAtWorkImg from "@/public/images/webps/cleaners-at-work.webp";
import ElectricityMaintenence from "@/public/images/webps/electricity-maintenence.webp";
import WhoWeAreImg from "@/public/images/webps/who-we-are.webp";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <section className="md:px-8 px-4 lg:space-y-6 space-y-12 md:py-[10vh] py-[8vh] bg-background relative z-20">
            <SectionLabel>
                <p>Why Choose Us</p>
            </SectionLabel>
            <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-16">
                <div className="space-y-10 lg:w-1/2">
                    <div className="space-y-4">
                        <h2 className="text-fluid-3xl font-medium font-primary">
                            Excellence in Every Detail — Your Trusted Partner in Facility Management
                        </h2>
                        <p className="text-fluid-sm">
                            At Row & Harmony Limited, we don&apos;t just manage facilities—we optimize, enhance, and
                            future-proof them. Our expertise ensures that your spaces remain functional, safe, and
                            efficient at all times. Here&apos;s why we stand out:
                        </p>
                    </div>
                    <EmblaCarousel
                        options={{ align: "start" }}
                        plugins={[Autoplay({ delay: 8000 })]}
                        className="grid grid-flow-col lg:auto-cols-[60%] auto-cols-[80%] gap-6 [&>.embla\_\_slide:nth-child(1)]:ml-[calc(var(--spacing)*6)]"
                        slides={whyChooseUs.map(({ Icon, image, description, name }, i) => (
                            <WhyChooseUsSlide key={name + i} {...{ Icon, image, description, name }} />
                        ))}
                    />
                </div>
                <div className="relative lg:w-1/2 grid justify-items-end items-center">
                    <figure className="bg-background md:size-60 size-50 p-3 absolute top-0 left-0 -translate-y-3/20">
                        <Image src={CleanersAtWorkImg} alt="Who We Are" className="object-cover size-full" />
                    </figure>
                    <Image src={ElectricityMaintenence} alt="" className="size-130 object-cover" />
                    <figure className="bg-background md:size-60 size-50 p-3 absolute bottom-0 left-0 translate-y-3/20">
                        <Image src={WhoWeAreImg} alt="Who We Are" className="object-cover size-full" />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
