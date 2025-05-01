import ContainerOverlay from "@/components/overlays/container-overlay";
import SectionLabel from "@/components/section-labels/bar-label";
import { whoWeAreServices } from "@/lib/data";
import WhoWeAreImg from "@/public/images/webps/who-we-are.webp";
import Image from "next/image";
import Link from "next/link";

const WhoWeAre = () => {
    return (
        <section className="bg-background md:px-8 px-4 pt-[15vh] md:pb-[10vh] pb-[8vh] relative">
            <div className="flex lg:flex-row flex-col">
                <div className="lg:w-1/2">
                    <figure className="h-full lg:-mr-48 relative">
                        <Image src={WhoWeAreImg} alt="Who We Are" className="object-cover size-full -mt-10" />
                        <ContainerOverlay className="opacity-50 md:block hidden" />
                        <div className="absolute top-10 left-0 px-8 pt-8 pb-6 bg-accent text-background md:flex hidden flex-col gap-y-3 clip-trapezoid">
                            <h2 className="text-fluid-2xl font-medium font-primary">15</h2>
                            <span className="text-fluid-sm font-medium">
                                Years of work
                                <br /> experience
                            </span>
                        </div>
                        <figure className="bg-background md:block hidden lg:size-80 size-60 p-4 absolute bottom-0 lg:left-8 lg:right-auto right-8 translate-y-3/20">
                            <Image src={WhoWeAreImg} alt="Who We Are" className="object-cover size-full" />
                        </figure>
                    </figure>
                </div>
                <div className="bg-background lg:w-1/2 flex flex-col gap-y-6 text-fluid-sm lg:px-10 py-10 lg:z-10">
                    <SectionLabel>
                        <p>
                            Welcome to <span className="font-medium">Row & Harmony</span>
                        </p>
                    </SectionLabel>
                    <h2 className="text-fluid-2xl font-medium font-primary">Building Trust, Delivering Excellence</h2>
                    <div className="space-y-4">
                        <p>
                            At Row & Harmony Limited, we redefine facility management with a commitment to excellence.
                            Our solutions ensure seamless operations, from maintenance and security to sustainability
                            and efficiency. Partner with us to enhance the functionality of your spaces.
                        </p>
                        <div className="space-y-3">
                            <p>
                                Rooted in integrity, innovation, and service excellence, Row & Harmony is a trusted name
                                in:
                            </p>
                            <ul className="list-disc marker:text-accent pl-6 space-y-1">
                                {whoWeAreServices.map(({ name, description }, index) => (
                                    <li key={name + index}>
                                        <span className="font-semibold">{name}:</span> {description}
                                    </li>
                                ))}
                            </ul>
                            <div className="border-l-3 border-primary pl-3 py-1">
                                <p className="text-accent">
                                    With a strong focus on facility management, we combine modern strategies with
                                    hands-on expertise to manage diverse properties — from corporate spaces to
                                    residential communities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="/about" className="link-btn">
                        <span className="relative text-background">Learn More About Us</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
