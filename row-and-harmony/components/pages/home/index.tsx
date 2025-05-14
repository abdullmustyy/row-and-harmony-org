import GetAQuote from "./sections/get-a-quote";
import GetInTouch from "./sections/get-in-touch";
import Hero from "./sections/hero";
import OurClients from "./sections/our-clients";
import OurService from "./sections/our-service";
import Testimonials from "./sections/testimonials";
import WhoWeAre from "./sections/who-we-are";
import WhyChooseUs from "./sections/why-choose-us";

const HomePage = () => {
    return (
        <main className="relative isolate">
            <Hero />
            <WhoWeAre />
            <OurService />
            <WhyChooseUs />
            <GetInTouch />
            <Testimonials />
            <OurClients />
            <GetAQuote />
        </main>
    );
};

export default HomePage;
