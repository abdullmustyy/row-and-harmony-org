import PageHeader from "@/components/page-header";
import GetAQuote from "../home/sections/get-a-quote";

const ContactPage = () => {
    return (
        <main className="relative isolate">
            <PageHeader {...{ heading: "Contact Us", paragraph: "Let's Talk Facility Management\n That Works" }} />
            <GetAQuote />
        </main>
    );
};

export default ContactPage;
