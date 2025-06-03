import PageHeader from "@/components/page-header";
import { GetServicesQueryResult } from "@/sanity/types";
import GetAQuote from "../home/sections/get-a-quote";
import ServiceCard from "./service-card";

interface IServicesPageProps extends React.ComponentProps<"main"> {
    services: GetServicesQueryResult;
}

const ServicesPage = ({ services }: IServicesPageProps) => {
    return (
        <main className="relative isolate">
            <PageHeader
                {...{
                    heading: "Our Services",
                    paragraph: "Professional Facility Management,\n Tailored to Your Needs",
                }}
            />

            <section className="md:px-8 px-4 md:pt-[10vh] pt-[8vh] relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-12 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service._id} {...{ service }} />
                    ))}
                </div>
            </section>

            <GetAQuote />
        </main>
    );
};

export default ServicesPage;
