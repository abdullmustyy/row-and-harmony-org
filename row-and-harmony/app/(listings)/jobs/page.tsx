import JobsPage from "@/components/pages/listings/jobs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jobs",
    description: "Explore exciting job opportunities with us. Join our team and be part of a dynamic work environment.",
    openGraph: {
        title: "Jobs",
        description:
            "Explore exciting job opportunities with us. Join our team and be part of a dynamic work environment.",
    },
};

const Jobs = () => {
    return <JobsPage />;
};

export default Jobs;
