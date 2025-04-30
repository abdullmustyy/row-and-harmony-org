"use client";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useHamburger } from "@/contexts/hamburger-context";
import { listingsLinks, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import Logo from "@/public/images/webps/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Button } from "../ui/button";
import HamburgerMenu from "./hamburger-menu";

const Navbar = () => {
    const { isHamburgerOpen, setIsHamburgerOpen } = useHamburger();
    const pathname = usePathname();

    return (
        <nav className="bg-background fixed top-0 inset-x-0 flex justify-between items-center h-nav md:px-8 px-4 border-b z-10">
            <Link href="/">
                <Image src={Logo} alt="Row & Harmony Logo" className="w-62.5 h-15 object-cover" />
            </Link>

            <ul className="lg:flex hidden items-center gap-x-4">
                {navLinks.map(({ name, href }, index) =>
                    index === 2 ? (
                        <Fragment key={name + index}>
                            <Link
                                href={href}
                                className={cn("before-hover-transform-link", {
                                    "before:transform-[scale(1,1)]": pathname === href,
                                })}
                            >
                                <li className="text-primary">{name}</li>
                            </Link>
                            <li>
                                <HoverCard openDelay={200} closeDelay={200}>
                                    <HoverCardTrigger asChild>
                                        <Button
                                            className={cn(
                                                "size-fit p-0 text-base font-normal bg-transparent hover:bg-transparent before-hover-transform-link shadow-none",
                                                {
                                                    "before:transform-[scale(1,1)]": listingsLinks.some(({ href }) =>
                                                        pathname.includes(href),
                                                    ),
                                                },
                                            )}
                                        >
                                            <span className="text-primary">Listings</span>
                                        </Button>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="flex flex-col gap-3 w-fit px-5">
                                        {listingsLinks.map(({ name, href }, index) => (
                                            <div key={name + index}>
                                                <Link
                                                    href={href}
                                                    className={cn("before-hover-transform-link", {
                                                        "before:transform-[scale(1,1)]": pathname.includes(href),
                                                    })}
                                                >
                                                    <span className="text-primary">{name}</span>
                                                </Link>
                                            </div>
                                        ))}
                                    </HoverCardContent>
                                </HoverCard>
                            </li>
                        </Fragment>
                    ) : (
                        <Link
                            key={name + index}
                            href={href}
                            className={cn("before-hover-transform-link", {
                                "before:transform-[scale(1,1)]": pathname === href,
                            })}
                        >
                            <li className="text-primary">{name}</li>
                        </Link>
                    ),
                )}
            </ul>

            <Button
                className="lg:hidden inline-flex p-0 size-fit z-10 bg-transparent hover:bg-transparent"
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
                <div
                    className={cn(
                        "size-6 relative flex items-center justify-center before:absolute before:h-[2px] before:w-6 before:bg-primary before:-translate-y-1.5 before:shadow-[0_6px] before:shadow-primary after:absolute after:h-[2px] after:w-6 after:bg-primary after:translate-y-1.5 before:transition-all before:duration-500 before:ease-1 after:transition-transform after:duration-500 after:ease-1 transition-all duration-500 ease-1",
                        {
                            "before:transform-[rotate(45deg)] before:translate-y-0 before:shadow-[0_0px] after:transform-[rotate(-45deg)] after:translate-y-0":
                                isHamburgerOpen,
                            "before:transform-[rotate(0deg)] after:transform-[rotate(0deg)]": !isHamburgerOpen,
                        },
                    )}
                />
            </Button>
            <HamburgerMenu />
        </nav>
    );
};

export default Navbar;
