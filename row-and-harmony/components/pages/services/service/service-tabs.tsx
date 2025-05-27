import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { getServicesQuery } from "@/sanity/lib/queries";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface IServiceTabsProps extends React.ComponentProps<"div"> {
    params: Promise<{ id: string }>;
}

const ServiceTabs = async ({ className, params }: IServiceTabsProps) => {
    const { id } = await params;
    const { data: services } = await sanityFetch({ query: getServicesQuery });

    return (
        <div className={cn("flex flex-col items-start gap-3", className)}>
            {services.map(({ _id, name }) => (
                <Link
                    href={`/services/${_id}`}
                    key={_id}
                    className={cn(
                        buttonVariants({ variant: "default" }),
                        "group justify-between items-center text-foreground hover:text-background bg-secondary p-4 h-auto w-full duration-400 ease-1",
                        {
                            "bg-primary text-background": _id === id,
                        },
                    )}
                >
                    <span className="text-base font-semibold">{name}</span>
                    <div
                        className={cn(
                            "size-8 grid place-content-center bg-primary group-hover:bg-accent transition-colors duration-500 ease-1",
                            {
                                "bg-accent": _id === id,
                            },
                        )}
                    >
                        <ChevronRight className="stroke-background size-5" />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ServiceTabs;
