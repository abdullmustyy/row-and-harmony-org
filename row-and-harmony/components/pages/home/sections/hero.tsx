import ContainerOverlay from "@/components/overlays/container-overlay";
import RowAndHarmonyCompany from "@/public/images/webps/row-and-harmony-company.webp";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative md:-mb-[106vh] -mb-[110vh]">
            <div className="sticky top-0 flex items-center min-h-screen w-full md:px-16 px-8">
                <div className="text-background space-y-8">
                    <div className="space-y-2 ">
                        <h1 className="text-fluid-5xl font-primary font-semibold">
                            Optimizing Spaces,
                            <br /> Elevating Experiences
                        </h1>
                        <p className="text-fluid-base">
                            Premium Facility Management Solutions for Efficiency,
                            <br /> Safety, and Sustainability.
                        </p>
                    </div>
                    <Link href="/contact" className="link-btn">
                        <span className="relative">Get Started Today</span>
                    </Link>
                </div>
                <Image
                    src={RowAndHarmonyCompany}
                    alt="Row & Harmony Company"
                    fill
                    priority
                    className="absolute inset-0 object-cover -z-10"
                />
                <ContainerOverlay className="-z-10" />
            </div>
            <div className="h-screen" />
        </section>
    );
};

export default Hero;
