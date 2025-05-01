import PageHeader from "@/components/page-header";
import ContactDetails from "./contact-details";
import ContactForm from "./contact-form";

const ContactPage = () => {
    return (
        <main className="relative isolate">
            <PageHeader {...{ heading: "Contact Us", paragraph: "Let's Talk Facility Management\n That Works" }} />
            <ContactForm />
            <ContactDetails />
        </main>
    );
};

export default ContactPage;
