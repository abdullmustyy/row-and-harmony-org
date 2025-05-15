import { cn } from "@/lib/utils";

type IPortableTextContainerProps = React.ComponentProps<"div">;

const PortableTextContainer = ({ children, className }: IPortableTextContainerProps) => {
    return <div className={cn("[&_ul]:list-disc [&_ul]:pl-6 [&_a]:underline *:mb-3", className)}>{children} </div>;
};

export default PortableTextContainer;
