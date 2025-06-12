import { cn } from "@/lib/utils";
import Link from "next/link";
import FacebookIcon from "./icons/facebook-icon";
import InstagramIcon from "./icons/instagram-icon";
import TwitterIcon from "./icons/twitter-icon";
import WhatsAppIcon from "./icons/whatsapp-icon";

type ISocialsProps = React.ComponentProps<"div">;

const Socials = ({ className }: ISocialsProps) => {
    return (
        <div className={cn("flex items-center gap-x-4", className)}>
            <Link
                href="https://wa.me/message/MFGZBNO7EV22H1"
                title="WhatsApp"
                className="grid place-content-center size-fit bg-accent hover:bg-primary border-b-2 border-b-secondary hover:border-b-accent p-2 transition-colors duration-500 ease-1"
            >
                <WhatsAppIcon className="text-background fill-background" />
            </Link>
            <Link
                href="https://facebook.com/"
                title="Facebook"
                className="grid place-content-center size-fit bg-accent hover:bg-primary border-b-2 border-b-secondary hover:border-b-accent p-2 transition-colors duration-500 ease-1"
            >
                <FacebookIcon className="text-background fill-background" />
            </Link>
            <Link
                href="https://instagram.com/Randhfacility "
                title="Instagram"
                className="grid place-content-center size-fit bg-accent hover:bg-primary border-b-2 border-b-secondary hover:border-b-accent p-2 transition-colors duration-500 ease-1"
            >
                <InstagramIcon className="text-background" />
            </Link>
            <Link
                href="https://x.com/"
                title="Twitter"
                className="grid place-content-center size-fit bg-accent hover:bg-primary border-b-2 border-b-secondary hover:border-b-accent p-2 transition-colors duration-500 ease-1"
            >
                <TwitterIcon className="text-background fill-background" />
            </Link>
        </div>
    );
};

export default Socials;
