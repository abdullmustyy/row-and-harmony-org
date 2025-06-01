import { cn } from "@/lib/utils";
import { CheckCircle, CircleAlert, LucideIcon } from "lucide-react";
import React, { HTMLAttributes, ReactNode } from "react";

export interface IToastProps extends HTMLAttributes<HTMLDivElement> {
    description?: ReactNode;
    heading?: ReactNode;
    type: "error" | "success";
}

const CustomToast = ({ className, description, heading, type }: IToastProps) => {
    let defaultDescription: string;
    let defaultHeading: string;

    switch (type) {
        case "error":
            defaultHeading = "An unexpected error has occurred";
            defaultDescription =
                "We apologize for the inconvenience. Please try again, or contact our support team if the problem continues.";
            break;
        case "success":
            defaultHeading = "Operation completed successfully";
            defaultDescription = "Your request was processed without any issues.";
            break;
    }

    const Icon = (props: React.ComponentProps<LucideIcon>) => {
        switch (type) {
            case "error":
                return <CircleAlert {...props} />;
            case "success":
                return <CheckCircle {...props} />;
        }
    };

    return (
        <div className={cn("size-full flex items-center justify-between gap-x-4", className)}>
            <Icon
                className={cn("size-5 shrink-0", {
                    "text-destructive": type === "error",
                    "text-teal-600": type === "success",
                })}
            />
            <div className="flex flex-col gap-y-1">
                <h6
                    className={cn("text-base font-semibold", {
                        "text-destructive": type === "error",
                        "text-teal-600": type === "success",
                    })}
                >
                    {heading ? heading : defaultHeading}
                </h6>
                <p className="text-sm">{description ? description : defaultDescription}</p>
            </div>
        </div>
    );
};

export default CustomToast;
