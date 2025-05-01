import PageHeader from "@/components/page-header";
import React from "react";
import GetAQuote from "../home/sections/get-a-quote";
import Bio from "./bio";

const AboutPage = () => {
    return (
        <main className="relative isolate">
            <PageHeader
                {...{ heading: "About Us", paragraph: "Excellence in Facility Management,\n Built on Trust" }}
            />
            <Bio />
            <GetAQuote />
        </main>
    );
};

export default AboutPage;
