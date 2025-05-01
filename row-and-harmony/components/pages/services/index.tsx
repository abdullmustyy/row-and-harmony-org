import PageHeader from "@/components/page-header";
import GetAQuote from "../home/sections/get-a-quote";
import ServiceContent from "./service-content";

const ServicesPage = () => {
    return (
        <main className="relative isolate">
            <PageHeader
                {...{
                    heading: "Our Services",
                    paragraph: "Professional Facility Management,\n Tailored to Your Needs",
                }}
            />
            <ServiceContent />
            <GetAQuote />
        </main>
    );
};

export default ServicesPage;
