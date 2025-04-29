import Icon from "@/public/images/pngs/icon.png";
import { GetJobsQueryResult } from "@/sanity/types";
import { capitalize, formatRelativeDate } from "@repo/lib/utils";
import Image from "next/image";
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
                        <JobCard job={job} className="group border hover:scale-[100.5%]">
                            <div className="p-4 flex items-start gap-4">
                                <div className="grid place-content-center size-20 shrink-0 border">
                                    <Image
                                        src={Icon}
                                        alt="Job Icon"
                                        width={60}
                                        height={60}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <p className="line-clamp-5">{job.jobDetails?.jobSummary}</p>
                            </div>
                            <div className="bg-accent/50 px-4 py-2">
                                <span>{capitalize(formatRelativeDate(job.datePosted!))}</span>
                            </div>
                        </JobCard>
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default JobsPage;
