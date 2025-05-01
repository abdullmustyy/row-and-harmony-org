import OutlineLabel from "@/components/section-labels/outline-label";
import WhoWeAreImg from "@/public/images/webps/who-we-are.webp";
import Image from "next/image";

const Bio = () => {
    return (
        <section className="md:px-8 px-4 pt-[10vh] md:pb-[10vh] pb-[8vh] relative">
            <div className="flex items-start md:gap-16 gap-4">
                <figure className="min-w-5/12 h-150">
                    <Image src={WhoWeAreImg} alt="Who We Are" className="object-cover size-full" />
                </figure>

                <div>
                    <OutlineLabel label="About" text="— since 2010" />

                    <h3 className="text-fluid-lg font-semibold">Company Overview</h3>

                    <div className="mt-4 space-y-3">
                        <p>
                            <span className="font-semibold">Row & Harmony</span> is an active player in the Facility
                            management industry in the world with numerous years of experience in the Maintenance
                            business and a robust portfolio of commercial and residential properties being managed by
                            the company. We are committed to providing our client with personalized services. Our
                            services include but are not limited to:
                        </p>
                        <ul className="list-disc marker:text-accent pl-6 space-y-1">
                            <li>
                                Maintenance services such as HVAC, electrical, plumbing, Fumigation & pest control and
                                Gardening and landscaping.
                            </li>
                            <li>
                                Security services such as CCTV monitoring, access control systems, and alarm systems.
                            </li>
                            <li>
                                Cleaning services such as post construction cleaning, janitorial, window cleaning, and
                                carpet cleaning and lot more.
                            </li>
                            <li>
                                Building management services such as tenant liaison, budgeting, and energy management.
                            </li>
                            <li>
                                Property management services such as tenant screening, rent collection, and lease
                                negotiation.
                            </li>
                            <li>Waste Management.</li>
                        </ul>
                        <p>
                            We have a team of highly trained professionals who are dedicated to providing top-notch
                            services to our clients. Our te&apos; expectations. We are also experts in understanding the
                            needs of our clients and working with them to create customized solutions that meet their
                            requirements. At ROW & HARMONY, we are committed to providing our clients with the best
                            quality services. We strive to be the best facility management company in the world and are
                            proud to be a leader in the industry. Our goal is to provide our clients with an exceptional
                            experience that will last for years to come.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bio;
