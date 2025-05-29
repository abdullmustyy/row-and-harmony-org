import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

type ILoaderProps = React.ComponentProps<"div">;

const Loader = ({ className }: ILoaderProps) => {
    return (
        <div
            className={cn(
                "mt-nav h-[calc(100vh-var(--spacing-nav))] grid place-content-center text-primary",
                className,
            )}
        >
            <LoaderCircle className="size-6 animate-spin" />
        </div>
    );
};

export default Loader;
