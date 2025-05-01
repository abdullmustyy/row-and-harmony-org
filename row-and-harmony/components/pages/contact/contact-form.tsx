"use client";

import ControlledFieldWrapper from "@/components/controlled-fields/field-wrapper";
import OutlineLabel from "@/components/section-labels/outline-label";
import Socials from "@/components/socials";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactSchema } from "@/schemas/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FormType = z.infer<typeof ContactSchema>;

const ContactForm = () => {
    const form = useForm<FormType>({
        resolver: zodResolver(ContactSchema),
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
        <section className="md:px-8 px-4 md:py-[10vh] py-[8vh] relative">
            <div className="flex md:flex-row flex-col items-start md:gap-16 gap-8">
                <div className="md:w-5/12">
                    <OutlineLabel label="Contact" text="— get in touch" className="md:mb-8 mb-6" />
                    <p className="mb-3">
                        Whether you&apos;re looking for reliable maintenance, expert cleaning services, security
                        solutions, or a complete facility management plan —{" "}
                        <span className="font-semibold">Row & Harmony</span> is here to help.
                    </p>
                    <p>
                        We&apos;re always ready to listen, understand your needs, and provide tailored solutions that
                        keep your property running at its best.
                    </p>
                    <Socials className="md:mt-12 mt-8" />
                </div>
                <div className="md:w-7/12 w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full space-y-8">
                            <div className="grid md:grid-cols-2 gap-4">
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Enter name"
                                            className="rounded-none h-12 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors duration-500 ease-1"
                                        />
                                    )}
                                />
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Enter email"
                                            className="rounded-none h-12 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors duration-500 ease-1"
                                        />
                                    )}
                                />
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="subject"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            placeholder="Enter subject"
                                            className="rounded-none h-12 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors duration-500 ease-1"
                                        />
                                    )}
                                />
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            type="tel"
                                            placeholder="Enter phone number"
                                            className="rounded-none h-12 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors duration-500 ease-1"
                                        />
                                    )}
                                />
                                <ControlledFieldWrapper
                                    control={form.control}
                                    name="message"
                                    className="md:col-span-2"
                                    render={({ field }) => (
                                        <Textarea
                                            {...field}
                                            placeholder="Enter message"
                                            className="rounded-none h-36 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors duration-500 ease-1"
                                        />
                                    )}
                                />
                            </div>
                            <Button className="link-btn h-12">
                                <span className="relative">Send Message</span>
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
