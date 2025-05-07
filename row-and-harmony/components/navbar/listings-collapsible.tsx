import { useHamburger } from "@/contexts/hamburger-context";
import { listingsLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";

type IListingsCollapsibleProps = React.ComponentProps<typeof Collapsible>;

const ListingsCollapsible = ({ className }: IListingsCollapsibleProps) => {
    const { setIsHamburgerOpen } = useHamburger();
    const pathname = usePathname();

    return (
        <Collapsible className={cn(className)}>
            <CollapsibleTrigger asChild>
                <Button
                    className={cn(
                        "size-fit p-0 text-base font-normal bg-transparent hover:bg-transparent shadow-none before-hover-transform-link",
                        {
                            "before:transform-[scale(1,1)]": listingsLinks.some(({ href }) => pathname.includes(href)),
                        },
                    )}
                >
                    <span className="text-primary">Listings</span>
                </Button>
            </CollapsibleTrigger>
            {listingsLinks.map(({ name, href }, index) => (
                <CollapsibleContent key={name + index} className="pl-2 pt-2">
                    <Link
                        href={href}
                        className={cn("before-hover-transform-link", {
                            "before:transform-[scale(1,1)]": pathname.includes(href),
                        })}
                        onClick={() => setIsHamburgerOpen(false)}
                    >
                        <span className="text-primary">{name}</span>
                    </Link>
                </CollapsibleContent>
            ))}
        </Collapsible>
    );
};

export default ListingsCollapsible;
