import Icon from "@/public/images/pngs/icon.png";
import { sanityFetch } from "@/sanity/lib/live";
import { getJobsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import JobCard from "../job-card";

const JobTabs = async () => {
    const { data: jobs } = await sanityFetch({ query: getJobsQuery });

    return (
        <section className="w-2/5 overflow-y-auto border-x">
            <div className="flex flex-col">
                {jobs.map((job) => (
                    <Link key={job._id} href={`/jobs/${job._id}`}>
                        <div className="flex items-start gap4">
                            <div className="grid place-content-center size-15 shrink-0 border mt-4 ml-2">
                                <Image
                                    src={Icon}
                                    alt="Job Icon"
                                    width={40}
                                    height={40}
                                    className="size-full object-cover"
                                />
                            </div>
                            <JobCard job={job} className="group" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default JobTabs;
