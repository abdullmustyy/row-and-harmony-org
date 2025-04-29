import JobPage from "@/components/pages/listings/jobs/job";
import { metadataBaseImage, metadataBaseUrl } from "@/lib/constants";
import { client } from "@/sanity/lib/client";
import { sanityFetch } from "@/sanity/lib/live";
import { getJobByIdQuery, getJobsQuery } from "@/sanity/lib/queries";
import { Metadata } from "next";

export async function generateStaticParams() {
    const jobs = await client.fetch(getJobsQuery);

    return jobs.map((job) => ({ id: job._id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const {
        data: [job],
    } = await sanityFetch({ query: getJobByIdQuery, params: { id } });

    return {
        title: job.role,
        description: job.jobDetails?.jobSummary,
        openGraph: {
            title: job.role,
            description: job.jobDetails?.jobSummary,
            images: [{ url: metadataBaseImage }],
            url: metadataBaseUrl,
        },
    };
}

const Job = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const {
        data: [job],
    } = await sanityFetch({ query: getJobByIdQuery, params: { id } });

    return <JobPage {...{ job }} />;
};

export default Job;
