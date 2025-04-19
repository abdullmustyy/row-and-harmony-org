import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type ISectionLabel = HTMLAttributes<HTMLDivElement>;

const SectionLabel = ({ children, className }: ISectionLabel) => {
    return (
        <div className={cn("flex flex-col gap-y-2 uppercase text-primary", className)}>
            <div className="h-[3px] w-10 bg-accent" />
            {children}
        </div>
    );
};

export default SectionLabel;
