import JobTabs from "@/components/pages/listings/jobs/job/job-tabs";

const JobLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="relative isolate mt-nav flex md:px-8 px-4 h-[calc(100vh-var(--spacing-nav))]">
            <JobTabs />
            {children}
        </main>
    );
};

export default JobLayout;
