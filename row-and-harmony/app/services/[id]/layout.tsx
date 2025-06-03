import PageHeader from "@/components/page-header";
import GetAQuote from "@/components/pages/home/sections/get-a-quote";
import ServiceTabs from "@/components/pages/services/service/service-tabs";
import { sanityFetch } from "@/sanity/lib/live";
import { getServiceByIdQuery } from "@/sanity/lib/queries";

const ServiceLayout = async ({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ id: string }>;
}>) => {
    const { id } = await params;
    const {
        data: [service],
    } = await sanityFetch({ query: getServiceByIdQuery, params: { id } });

    return (
        <main className="relative isolate">
            <PageHeader
                {...{
                    heading: service.name,
                    paragraph: service.serviceOverview?.heading,
                }}
            />
            <section className="md:px-8 px-4 md:pt-[10vh] pt-[8vh] relative">
                <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8">
                    <div className="lg:hidden overflow-hidden">
                        <ServiceTabs {...{ params }} className="flex-row w-full *:w-fit *:gap-4 overflow-x-scroll" />
                    </div>

                    <div className="lg:flex hidden flex-col gap-8">
                        <ServiceTabs {...{ params }} />
                    </div>

                    {children}
                </div>
            </section>
            <GetAQuote />
        </main>
    );
};

export default ServiceLayout;
