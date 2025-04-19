import { cn } from "@/lib/utils";
import Link from "next/link";
import FacebookIcon from "./icons/facebook-icon";
import InstagramIcon from "./icons/instagram-icon";
import TwitterIcon from "./icons/twitter-icon";

type ISocialsProps = React.ComponentProps<"div">;

const Socials = ({ className }: ISocialsProps) => {
    return (
        <div className={cn("flex items-center gap-x-4", className)}>
            <Link
                href=""
                title="Facebook"
                className="grid place-content-center size-fit bg-accent hover:bg-primary border-b-2 border-b-secondary hover:border-b-accent p-2 transition-colors duration-500 ease-1"
            >
                <FacebookIcon className="text-background fill-background" />
            </Link>
            <Link
                href=""
                title="Instagram"
                className="grid place-content-center size-fit bg-accent hover:bg-primary border-b-2 border-b-secondary hover:border-b-accent p-2 transition-colors duration-500 ease-1"
            >
                <InstagramIcon className="text-background" />
            </Link>
            <Link
                href=""
                title="Twitter"
                className="grid place-content-center size-fit bg-accent hover:bg-primary border-b-2 border-b-secondary hover:border-b-accent p-2 transition-colors duration-500 ease-1"
            >
                <TwitterIcon className="text-background fill-background" />
            </Link>
        </div>
    );
};

export default Socials;
