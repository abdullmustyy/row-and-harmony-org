import { cn } from "@/lib/utils";
import Link from "next/link";

type IGetAQuoteProps = React.ComponentProps<"div">;

const GetAQuote = ({ className }: IGetAQuoteProps) => {
    return (
        <div
            className={cn(
                "w-9/10 translate-y-1/2 mx-auto flex md:flex-row flex-col items-center justify-between lg:gap-0 gap-8 bg-secondary lg:p-16 p-8",
                className,
            )}
        >
            <h2 className="text-fluid-xl font-medium font-primary md:text-left text-center">
                Let&apos;s help you take the hassle out of
                <br className="lg:inline hidden" /> managing your facility
            </h2>
            <Link href="/contact" className="link-btn h-12 px-8 font-semibold text-background">
                <span className="relative whitespace-nowrap">Get a Free Quote</span>
            </Link>
        </div>
    );
};

export default GetAQuote;
