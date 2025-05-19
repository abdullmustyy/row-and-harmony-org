import { sanityFetch } from "@/sanity/lib/live";
import { getClientsQuery, getServicesQuery } from "@/sanity/lib/queries";
import GetAQuote from "./sections/get-a-quote";
import GetInTouch from "./sections/get-in-touch";
import Hero from "./sections/hero";
import OurClients from "./sections/our-clients";
import OurService from "./sections/our-service";
import Testimonials from "./sections/testimonials";
import WhoWeAre from "./sections/who-we-are";
import WhyChooseUs from "./sections/why-choose-us";

const HomePage = async () => {
    const { data: clients } = await sanityFetch({ query: getClientsQuery });
    const { data: services } = await sanityFetch({ query: getServicesQuery });

    return (
        <main className="relative isolate">
            <Hero />
            <WhoWeAre />
            <OurService {...{ services }} />
            <WhyChooseUs />
            <GetInTouch />
            <Testimonials />
            <OurClients {...{ clients }} />
            <GetAQuote />
        </main>
    );
};

export default HomePage;
