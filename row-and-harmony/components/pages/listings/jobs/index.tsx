import { GetJobsQueryResult } from "@/sanity/types";
import Link from "next/link";
import JobCard from "./job-card";

interface IJobsPageProps extends React.ComponentProps<"main"> {
    jobs: GetJobsQueryResult;
}

const JobsPage = ({ jobs }: IJobsPageProps) => {
    return (
        <main className="relative isolate mt-nav">
            <section className="grid md:grid-cols-2 gap-5 md:px-8 px-4 py-[5vh]">
                {jobs.map((job) => (
                    <Link key={job._id} href={`/jobs/${job._id}`}>
                        <JobCard job={job} className="group" />
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default JobsPage;
