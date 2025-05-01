import JobsPage from "@/components/pages/listings/jobs";
import { metadataBaseImage, metadataBaseUrl } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/live";
import { getJobsQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jobs",
    description: "Explore exciting job opportunities with us. Join our team and be part of a dynamic work environment.",
    openGraph: {
        title: "Jobs",
        description:
            "Explore exciting job opportunities with us. Join our team and be part of a dynamic work environment.",
        images: [{ url: metadataBaseImage }],
        url: metadataBaseUrl,
    },
};

const Jobs = async () => {
    const { data: jobs } = await sanityFetch({ query: getJobsQuery });

    return <JobsPage {...{ jobs }} />;
};

export default Jobs;
