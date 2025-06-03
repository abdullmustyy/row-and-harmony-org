import SectionLabel from "@/components/section-labels/bar-label";
import { GetFirstThreeServicesQueryResult } from "@/sanity/types";
import Link from "next/link";
import ServiceCard from "../../services/service-card";

interface IOurServiceProps extends React.ComponentProps<"section"> {
    services: GetFirstThreeServicesQueryResult;
}

const OurService = ({ services }: IOurServiceProps) => {
    return (
        <section className="md:px-8 px-4 lg:space-y-16 space-y-12 md:py-[10vh] py-[8vh] bg-background relative z-20">
            <div className="space-y-8">
                <SectionLabel className="lg:items-center">
                    <p>What We Do Best</p>
                </SectionLabel>
                <div className="lg:px-12 flex lg:flex-row flex-col lg:gap-8 gap-6 items-start">
                    <h2 className="text-fluid-3xl font-medium font-primary lg:text-right text-left lg:whitespace-nowrap">
                        Comprehensive Solutions
                        <br className="lg:inline hidden" /> for a Better Tomorrow
                    </h2>
                    <div className="lg:border-l-3 border-accent lg:pl-3">
                        <p className="text-left text-fluid-sm">
                            At Row & Harmony Limited, we provide a diverse range of services designed to keep your
                            facilities running efficiently and your business thriving. Our expertise spans multiple
                            industries, ensuring tailored solutions for every client.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12 gap-8">
                {services.map((service) => (
                    <ServiceCard key={service._id} {...{ service }} />
                ))}
            </div>

            <Link href="/services" className="link-btn md:mx-auto">
                <span className="relative text-background">View All Services</span>
            </Link>
        </section>
    );
};

export default OurService;
