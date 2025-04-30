import Icon from "@/public/images/pngs/icon.png";
import { sanityFetch } from "@/sanity/lib/live";
import { getJobsQuery } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import JobCard from "../job-card";

const JobTabs = async () => {
    const { data: jobs } = await sanityFetch({ query: getJobsQuery });

    return (
        <section className="md:block hidden w-2/5 overflow-y-auto overflow-x-hidden border-x">
            <div className="flex flex-col">
                {jobs.map((job) => (
                    <Link key={job._id} href={`/jobs/${job._id}`}>
                        <div className="flex items-start lg:gap-4 gap-2 pt-4 lg:pl-4 pl-2">
                            <div className="grid place-content-center lg:size-15 size-12 p-1 shrink-0 border">
                                <Image src={Icon} alt="Job Icon" className="size-full object-cover" />
                            </div>
                            <JobCard job={job} className="group *:first:p-0 *:first:pb-4 *:first:pr-4" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default JobTabs;
