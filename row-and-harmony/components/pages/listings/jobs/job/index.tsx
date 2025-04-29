import { Button } from "@/components/ui/button";
import { GetJobByIdQueryResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import { capitalize, formatPriceNaira, formatRelativeDate } from "@repo/lib/utils";
import { Dot, Share } from "lucide-react";
import Link from "next/link";

interface IJobPageProps extends React.ComponentProps<"main"> {
    job: GetJobByIdQueryResult[number];
}

const JobPage = ({ job }: IJobPageProps) => {
    return (
        <section className="flex-1 overflow-y-auto border-r">
            <div className="p-4 flex flex-col gap-3 border-b">
                <h1 className="font-primary font-semibold text-fluid-lg">{job.role}</h1>
                <div className="flex items-center text-sm">
                    <span>{job.location}</span>
                    <Dot className="size-4" />
                    <span>{capitalize(formatRelativeDate(job.datePosted!))}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-muted px-2 py-1">{capitalize(job.type!)}</span>
                    <span className="bg-muted px-2 py-1">{formatPriceNaira(job.salary!)}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 w-fit">
                    <Link href={job.applicationLink!} className="link-btn h-9 text-background">
                        <span className="relative">Apply</span>
                    </Link>
                    <Button variant="ghost" className="ml-auto">
                        <Share />
                        <span className="md:inline hidden underline underline-offset-2">Share</span>
                    </Button>
                </div>
            </div>

            <div className="p-4 border-b">
                <h2 className="text-lg font font-semibold mb-4">Job Summary</h2>
                <p>{job.jobDetails?.jobSummary}</p>
            </div>

            <div className="p-4">
                <h2 className="text-lg font font-semibold mb-4">Job Description/Requirements</h2>
                <div className="[&_ul]:list-disc [&_ul]:pl-4 [&_a]:underline *:mb-3">
                    <PortableText value={job.jobDetails?.jobDescription ?? []} />
                </div>
            </div>
        </section>
    );
};

export default JobPage;
