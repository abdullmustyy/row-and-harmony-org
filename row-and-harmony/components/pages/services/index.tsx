import PageHeader from "@/components/page-header";
import GetAQuote from "../home/sections/get-a-quote";

type IServicesPageProps = React.ComponentProps<"main">;

const ServicesPage = ({ children }: IServicesPageProps) => {
    return (
        <main className="relative isolate">
            <PageHeader
                {...{
                    heading: "Our Services",
                    paragraph: "Professional Facility Management,\n Tailored to Your Needs",
                }}
            />
            {children}

            <GetAQuote />
        </main>
    );
};

export default ServicesPage;
