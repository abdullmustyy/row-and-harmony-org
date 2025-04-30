import { cn } from "@/lib/utils";
import { GetJobsQueryResult } from "@/sanity/types";
import { capitalize, formatPriceNaira } from "@repo/lib/utils";

interface IJobCardProps extends React.ComponentProps<"div"> {
    job: GetJobsQueryResult[number];
}

const JobCard = ({ className, children, job }: IJobCardProps) => {
    return (
        <div className={cn("size-full transition duration-300 ease-1", className)}>
            <div className="p-4 border-b">
                <h5 className="font-primary font-semibold text-lg mb-3 hover:underline underline-offset-2 w-fit">
                    {job.role}
                </h5>
                <div className="*:not-first:mt-3">
                    <p className="text-primary">Row & Harmony LTD</p>
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-muted px-2 py-1 truncate">{job.location}</span>
                        <span className="bg-muted px-2 py-1">{capitalize(job.type!)}</span>
                        <span className="bg-muted px-2 py-1">{formatPriceNaira(job.salary!)}</span>
                    </div>
                    <p>
                        <span>Department: </span>
                        <span>{job.department}</span>
                    </p>
                </div>
            </div>
            {children}
        </div>
    );
};

export default JobCard;
