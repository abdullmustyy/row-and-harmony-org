import { cn } from "@/lib/utils";

interface IOutlineLabelProps extends React.ComponentProps<"div"> {
    label: string;
    text: string;
}

const OutlineLabel = ({ className, label, text }: IOutlineLabelProps) => {
    return (
        <div className={cn("relative flex items-center", className)}>
            <h2 className="text-fluid-6xl font-black [-webkit-text-stroke-width:1px] [-webkit-text-fill-color:transparent] text-accent opacity-60">
                {label}
            </h2>
            <span className="absolute left-0 text-primary text-fluid-base font-bold">{text}</span>
        </div>
    );
};

export default OutlineLabel;
