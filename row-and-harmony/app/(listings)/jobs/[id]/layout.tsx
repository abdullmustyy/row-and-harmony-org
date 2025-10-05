import JobTabs from "@/components/pages/listings/jobs/job/job-tabs";

const JobLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="container relative isolate mt-nav flex md:h-[calc(100vh-var(--spacing-nav))]">
            <JobTabs />
            {children}
        </main>
    );
};

export default JobLayout;
