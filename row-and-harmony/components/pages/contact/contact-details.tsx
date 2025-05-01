import { contactDetails } from "@/lib/data";
import Link from "next/link";
import GetAQuote from "../home/sections/get-a-quote";

const ContactDetails = () => {
    return (
        <section className="mt-[20vh] flex flex-col items-center relative">
            <div className="md:w-4/5 w-9/10 mx-auto flex md:flex-row flex-col justify-between gap-4 bg-secondary lg:p-16 p-8 absolute top-0 -translate-y-1/2">
                {contactDetails.map(({ Icon, heading, href, label, name }, index) => (
                    <div key={name + index} className="group flex gap-3 items-center">
                        <div className="size-16 shrink-0 bg-primary group-hover:bg-accent grid place-content-center transition-colors duration-500 ease-1">
                            <Icon className="size-8 stroke-background" />
                        </div>
                        <div className="overflow-hidden">
                            <h5 className="font-primary text-primary text-fluid-base font-semibold">{heading}</h5>
                            <Link href={href} title={label} className="before-hover-transform-link">
                                <p className="truncate">{label}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <iframe
                title="Row & Harmony Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.918545051429!2d3.379205714318102!3d6.457096425364787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b15e0af7f7d%3A0x3a83a697205af51d!2sLagos%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1714595066232!5m2!1sen!2sng"
                className="border-0 h-200 w-full"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
            />
            <GetAQuote className="md:w-4/5 w-9/10 absolute bottom-0" />
        </section>
    );
};

export default ContactDetails;
