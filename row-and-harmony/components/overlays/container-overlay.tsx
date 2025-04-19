import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type IContainerOverlayProps = HTMLAttributes<HTMLDivElement>;

const ContainerOverlay = ({ className }: IContainerOverlayProps) => {
    return <div className={cn("absolute inset-0 bg-black opacity-65", className)} />;
};

export default ContainerOverlay;
