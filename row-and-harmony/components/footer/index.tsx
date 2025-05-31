"use client";

import { contactDetails, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import LogoWhite from "@/public/images/webps/logo-white.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import ListingsCollapsible from "../navbar/listings-collapsible";
import SectionLabel from "../section-labels/bar-label";
import Socials from "../socials";
import NewsLetter from "./news-letter";

type IFooterProps = React.ComponentProps<"footer">;

const Footer = ({ className }: IFooterProps) => {
    const pathname = usePathname();

    return (
        <footer className={cn("bg-primary text-background md:px-8 px-4", className)}>
            <div className="py-[calc(10vh+5rem)] grid lg:grid-cols-[2fr_1fr_1.5fr] lg:gap-0 gap-8">
                <div className="flex flex-col gap-y-12">
                    <Link href="/" className="w-fit">
                        <Image src={LogoWhite} alt="Row & Harmony Logo" className="w-62.5 h-15 object-cover" />
                    </Link>
                    <ul className="flex flex-col gap-y-2">
                        {contactDetails.map(({ href, Icon, name, label }, index) => (
                            <Link key={name + index} href={href} className="flex items-center gap-x-2 w-fit">
                                <Icon className="size-4 text-background fill-accent" />
                                <li className="relative before-hover-transform-link">{label}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-y-6">
                    <SectionLabel className="text-background capitalize font-medium">
                        <h5 className="font-primary">Pages</h5>
                    </SectionLabel>
                    <ul className="flex flex-col list-disc marker:text-accent pl-3 gap-y-2">
                        {navLinks.map(({ name, href }, index) =>
                            index === 2 ? (
                                <Fragment key={name + index}>
                                    <Link
                                        key={name + index}
                                        href={href}
                                        className={cn("before-hover-transform-link w-fit", {
                                            "before:transform-[scale(1,1)]": pathname === href,
                                        })}
                                    >
                                        <li>{name}</li>
                                    </Link>
                                    <li>
                                        <ListingsCollapsible className="[&_span]:text-background" />
                                    </li>
                                </Fragment>
                            ) : (
                                <Link
                                    key={name + index}
                                    href={href}
                                    className={cn("before-hover-transform-link w-fit", {
                                        "before:transform-[scale(1,1)]": pathname === href,
                                    })}
                                >
                                    <li>{name}</li>
                                </Link>
                            ),
                        )}
                    </ul>
                </div>
                <NewsLetter />
            </div>
            <div className="flex md:flex-row flex-col items-center justify-between md:gap-0 gap-6 py-[5vh]">
                <p className="text-fluid-xs md:text-left text-center">
                    &copy;{" "}
                    <span className="font-medium">
                        {new Date().getFullYear()} <span className="text-accent">Row & Harmony</span> Facility and
                        Property Management Company Ltd.
                    </span>{" "}
                    All Rights Reserved.
                </p>
                <Socials />
            </div>
        </footer>
    );
};

export default Footer;
