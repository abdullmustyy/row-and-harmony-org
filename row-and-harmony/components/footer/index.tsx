"use client";

import { contactDetails, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import LogoWhite from "@/public/images/webps/logo-white.webp";
import { NewsletterSchema } from "@/schemas/news-letter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ListingsCollapsible from "../navbar/listings-collapsible";
import SectionLabel from "../section-labels/bar-label";
import Socials from "../socials";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type IFooterProps = React.ComponentProps<"footer">;
type FormType = z.infer<typeof NewsletterSchema>;

const Footer = ({ className }: IFooterProps) => {
    const pathname = usePathname();

    const form = useForm<FormType>({
        resolver: zodResolver(NewsletterSchema),
    });

    const handleSubmit = useCallback(
        (values: FormType) => {
            const { email } = values;

            console.log("Email submitted:", email);

            form.reset();
        },
        [form],
    );

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
                <div className="flex flex-col gap-y-6">
                    <SectionLabel className="text-background capitalize font-medium">
                        <h5 className="font-primary">Newsletter</h5>
                    </SectionLabel>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h6 className="font-medium text-fluid-sm">Stay Updated with Row & Harmony</h6>
                            <p className="text-fluid-xs">
                                Subscribe to our newsletter and be the first to receive expert insights, facility
                                management tips, and exclusive updates on our services. Stay informed, stay ahead!
                            </p>
                        </div>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex items-start">
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Your email"
                                                        className="peer rounded-none h-11 focus-visible:ring-0 placeholder:text-background/70 border-accent/60 focus-visible:border-accent/100 caret-accent aria-invalid:caret-destructive transition-colors duration-500 ease-1"
                                                    />
                                                </FormControl>
                                                <Button
                                                    className={cn(
                                                        "bg-accent hover:bg-primary border-y border-r border-accent/60 peer-focus-visible:border-accent/100 h-11 transition-colors duration-500 ease-1",
                                                        {
                                                            "bg-destructive hover:bg-destructive border-destructive peer-focus-visible:border-destructive":
                                                                form.formState.errors.email,
                                                        },
                                                    )}
                                                >
                                                    <Send className="size-5 text-background" />
                                                </Button>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
                </div>
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
