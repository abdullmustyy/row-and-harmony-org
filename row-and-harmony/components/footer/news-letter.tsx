import { subscribeToNewsletter } from "@/actions/news-letter";
import { cn } from "@/lib/utils";
import { NewsletterSchema } from "@/schemas/news-letter";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import SectionLabel from "../section-labels/bar-label";
import { Button } from "../ui/button";
import CustomToast from "../ui/custom-toast";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

type FormType = z.infer<typeof NewsletterSchema>;

const NewsLetter = () => {
    const form = useForm<FormType>({
        resolver: zodResolver(NewsletterSchema),
    });
    const {
        control,
        formState: { errors, isSubmitting },
        reset,
    } = form;

    const handleSubmit = useCallback(
        async (values: FormType) => {
            const { email } = values;

            const subscribeToNewsletterResponse = await subscribeToNewsletter(email);

            if (subscribeToNewsletterResponse.success) {
                toast(
                    <CustomToast
                        {...{
                            type: "success",
                            heading: "Subscription Successful",
                            description: subscribeToNewsletterResponse.message,
                        }}
                    />,
                );
                reset({ email: "" });
            } else {
                toast(
                    <CustomToast
                        {...{
                            type: "error",
                            heading: "Subscription Failed",
                            description: subscribeToNewsletterResponse.message,
                        }}
                    />,
                );
            }
        },
        [reset],
    );

    return (
        <div className="flex flex-col gap-y-6">
            <SectionLabel className="text-background capitalize font-medium">
                <h5 className="font-primary">Newsletter</h5>
            </SectionLabel>
            <div className="space-y-6">
                <div className="space-y-2">
                    <h6 className="font-medium text-fluid-sm">Stay Updated with Row & Harmony</h6>
                    <p className="text-fluid-xs">
                        Subscribe to our newsletter and be the first to receive expert insights, facility management
                        tips, and exclusive updates on our services. Stay informed, stay ahead!
                    </p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
                        <FormField
                            control={control}
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
                                            disabled={isSubmitting}
                                            isLoading={isSubmitting}
                                            className={cn(
                                                "bg-accent hover:bg-primary border-y border-r border-accent/60 peer-focus-visible:border-accent/100 size-11 transition-colors duration-500 ease-1",
                                                {
                                                    "bg-destructive hover:bg-destructive border-destructive peer-focus-visible:border-destructive":
                                                        errors.email,
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
    );
};

export default NewsLetter;
