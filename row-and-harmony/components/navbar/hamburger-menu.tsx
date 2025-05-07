import { useHamburger } from "@/contexts/hamburger-context";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Logo from "@/public/images/webps/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect } from "react";
import Socials from "../socials";
import ListingsCollapsible from "./listings-collapsible";

const HamburgerMenu = () => {
    const { isHamburgerOpen, setIsHamburgerOpen } = useHamburger();
    const pathname = usePathname();

    useEffect(() => {
        const bodyElement = document.querySelector("body") as HTMLBodyElement;

        if (isHamburgerOpen) {
            bodyElement.style.overflow = "hidden";
        } else {
            bodyElement.style.overflow = "auto";
        }

        return () => {
            bodyElement.style.overflow = "auto";
        };
    }, [isHamburgerOpen]);

    return (
        <section
            className={cn("fixed top-0 inset-0 min-h-screen transition-all duration-500 ease-1", {
                visible: isHamburgerOpen,
                invisible: !isHamburgerOpen,
            })}
        >
            <div
                className={cn("fixed inset-0 bg-black/60 transition-all duration-500 ease-1", {
                    "opacity-0 invisible pointer-events-none": !isHamburgerOpen,
                    "opacity-100 visible pointer-events-auto": isHamburgerOpen,
                })}
                onClick={() => setIsHamburgerOpen(false)}
            />
            <aside
                className={cn(
                    "fixed top-0 right-0 h-full md:w-1/2 w-4/5 bg-background px-4 transition-transform duration-500 ease-1",
                    {
                        "translate-x-0": isHamburgerOpen,
                        "translate-x-full": !isHamburgerOpen,
                    },
                )}
            >
                <nav className="size-full flex flex-col items-start gap-y-8">
                    <div className="py-2">
                        <Link href="/" onClick={() => setIsHamburgerOpen(false)}>
                            <Image src={Logo} alt="Row & Harmony Logo" className="w-62.5 h-15 object-cover" />
                        </Link>
                    </div>
                    <ul className="flex flex-col items-start gap-y-4">
                        {navLinks.map(({ name, href }, index) =>
                            index === 2 ? (
                                <Fragment key={name + index}>
                                    <Link
                                        key={name + index}
                                        href={href}
                                        className={cn("before-hover-transform-link", {
                                            "before:transform-[scale(1,1)]": pathname === href,
                                        })}
                                        onClick={() => setIsHamburgerOpen(false)}
                                    >
                                        <li className="text-primary">{name}</li>
                                    </Link>
                                    <li>
                                        <ListingsCollapsible />
                                    </li>
                                </Fragment>
                            ) : (
                                <Link
                                    key={name + index}
                                    href={href}
                                    className={cn("before-hover-transform-link", {
                                        "before:transform-[scale(1,1)]": pathname === href,
                                    })}
                                    onClick={() => setIsHamburgerOpen(false)}
                                >
                                    <li className="text-primary">{name}</li>
                                </Link>
                            ),
                        )}
                    </ul>
                    <Socials className="w-full justify-between mt-auto" />
                </nav>
            </aside>
        </section>
    );
};

export default HamburgerMenu;
