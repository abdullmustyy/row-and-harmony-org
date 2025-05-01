import AboutPage from "@/components/pages/about";
import { metadataBaseImage, metadataBaseUrl } from "@/lib/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Learn more about us and our mission.",
    openGraph: {
        title: "About",
        description: "Learn more about us and our mission.",
        images: [{ url: metadataBaseImage }],
        url: metadataBaseUrl,
    },
};

const About = () => {
    return <AboutPage />;
};

export default About;
