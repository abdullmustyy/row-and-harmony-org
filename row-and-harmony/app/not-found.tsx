import Icon from "@/public/images/pngs/icon.png";
import { MoveLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404",
    description: "Page not found.",
};

const NotFound = () => {
    return (
        <section className="h-screen grid place-content-center text-center gap-y-6">
            <div className="flex itemsp-center gap-[1vw] text-primary text-fluid-6xl mx-auto">
                <span>4</span>
                <Image src={Icon} alt="Icon" className="size-24 object-fill" />
                <span>4</span>
            </div>
            <div className="space-y-4">
                <h2 className="font-primary text-fluid-4xl">Are you lost?</h2>
                <p className="text-fluid-base">Sorry, this page doesn&apos;t exist.</p>
            </div>
            <Link href="/" className="group link-btn gap-1 text-background mx-auto">
                <span className="relative">Back to home</span>
                <MoveLeft className="stroke-1 group-hover:rotate-45 transition duration-600" />
            </Link>
        </section>
    );
};

export default NotFound;
