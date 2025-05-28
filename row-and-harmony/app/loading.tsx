import { LoaderCircle } from "lucide-react";

export default function Loading() {
    return (
        <div className="mt-nav h-[calc(100vh-var(--spacing-nav))] grid place-content-center">
            <LoaderCircle className="size-6 stroke-primary animate-spin" />
        </div>
    );
}
