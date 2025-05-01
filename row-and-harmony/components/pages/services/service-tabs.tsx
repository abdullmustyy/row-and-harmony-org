import { Button } from "@/components/ui/button";
import { serviceCenter } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface IServiceTabsProps extends React.ComponentProps<"div"> {
    serviceId: string;
    setServiceId: React.Dispatch<React.SetStateAction<string>>;
}

const ServiceTabs = ({ className, serviceId, setServiceId }: IServiceTabsProps) => {
    return (
        <div className={cn("flex flex-col items-start gap-3", className)}>
            {serviceCenter.map(({ id, title }) => (
                <Button
                    key={id}
                    className={cn(
                        "group justify-between items-center text-foreground hover:text-background bg-secondary p-4 h-auto w-full duration-400 ease-1",
                        {
                            "bg-primary text-background": serviceId === id,
                        },
                    )}
                    onClick={() => setServiceId(id)}
                >
                    <span className="text-base font-semibold">{title}</span>
                    <div
                        className={cn(
                            "size-8 grid place-content-center bg-primary group-hover:bg-accent transition-colors duration-500 ease-1",
                            {
                                "bg-accent": serviceId === id,
                            },
                        )}
                    >
                        <ChevronRight className="stroke-background size-5" />
                    </div>
                </Button>
            ))}
        </div>
    );
};

export default ServiceTabs;
