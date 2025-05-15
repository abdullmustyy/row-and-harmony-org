import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

type ITabs = {
    _id: string;
    name: string | undefined;
};
interface IServiceTabsProps extends React.ComponentProps<"div"> {
    serviceId: string;
    setServiceId: React.Dispatch<React.SetStateAction<string>>;
    tabs: ITabs[];
}

const ServiceTabs = ({ className, serviceId, setServiceId, tabs }: IServiceTabsProps) => {
    return (
        <div className={cn("flex flex-col items-start gap-3", className)}>
            {tabs.map(({ _id, name }) => (
                <Button
                    key={_id}
                    className={cn(
                        "group justify-between items-center text-foreground hover:text-background bg-secondary p-4 h-auto w-full duration-400 ease-1",
                        {
                            "bg-primary text-background": serviceId === _id,
                        },
                    )}
                    onClick={() => setServiceId(_id)}
                >
                    <span className="text-base font-semibold">{name}</span>
                    <div
                        className={cn(
                            "size-8 grid place-content-center bg-primary group-hover:bg-accent transition-colors duration-500 ease-1",
                            {
                                "bg-accent": serviceId === _id,
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
