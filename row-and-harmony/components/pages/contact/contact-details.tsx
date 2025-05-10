import { contactDetails } from "@/lib/data";
import Link from "next/link";
import GetAQuote from "../home/sections/get-a-quote";

const ContactDetails = () => {
    return (
        <section className="mt-[20vh] flex flex-col items-center relative">
            <div className="md:w-4/5 w-9/10 mx-auto flex lg:flex-row flex-col justify-between gap-4 bg-secondary lg:p-16 p-8 absolute top-0 -translate-y-1/2">
                {contactDetails.map(({ Icon, heading, href, label, name }, index) => (
                    <div key={name + index} className="group flex gap-3 items-center">
                        <div className="size-16 shrink-0 bg-primary group-hover:bg-accent grid place-content-center transition-colors duration-500 ease-1">
                            <Icon className="size-8 stroke-background" />
                        </div>
                        <div className="overflow-hidden w-full">
                            <h5 className="font-primary text-primary text-fluid-base font-semibold">{heading}</h5>
                            <Link href={href} title={label} className="before-hover-transform-link">
                                <span className="truncate">{label}</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <iframe
                title="Row & Harmony Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2727765897585!2d3.3810224740816888!3d6.487100693504898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c86b2ad8ad5%3A0xc25df1232d0d0814!2s34%20Abeokuta%20St%2C%20Adekunle%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1746124120514!5m2!1sen!2sng"
                className="border-0 h-screen w-full"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
            />
            <GetAQuote className="[&>div]:md:w-4/5 [&>div]:w-9/10 w-full absolute bottom-0 bg-transparent" />
        </section>
    );
};

export default ContactDetails;
