import { cn } from "@/lib/utils";
import Icon from "@/public/images/pngs/icon.png";
import { GetJobsQueryResult } from "@/sanity/types";
import { capitalize, formatPriceNaira } from "@repo/lib/utils";
import { formatRelative } from "date-fns";
import Image from "next/image";

interface IJobCardProps extends React.ComponentProps<"div"> {
    job: GetJobsQueryResult[number];
}

const JobCard = ({ className, job }: IJobCardProps) => {
    return (
        <div className={cn("size-full border hover:scale-101 transition-transform duration-300 ease-1", className)}>
            <div className="p-4 border-b">
                <h5 className="font-primary font-semibold text-lg mb-3">{job.role}</h5>
                <div className="*:not-first:mt-3">
                    <p className="text-primary">Row & Harmony LTD</p>
                    <div className="flex items-center gap-2">
                        <span className="bg-muted px-2 py-1">{job.location}</span>
                        <span className="bg-muted px-2 py-1">{capitalize(job.type!)}</span>
                        <span className="bg-muted px-2 py-1">{formatPriceNaira(job.salary!)}</span>
                    </div>
                    <p>
                        <span>Department: </span>
                        <span>{job.department}</span>
                    </p>
                </div>
            </div>
            <div className="p-4 flex items-start gap-4">
                <div className="grid place-content-center size-20 shrink-0 border">
                    <Image src={Icon} alt="Job Icon" width={60} height={60} className="size-full object-cover" />
                </div>
                <p className="line-clamp-5">{job.jobDetails?.jobSummary}</p>
            </div>
            <div className="bg-accent/80 px-4 py-2">
                <span>{capitalize(formatRelative(new Date(job.datePosted!), new Date()))}</span>
            </div>
        </div>
    );
};

export default JobCard;
