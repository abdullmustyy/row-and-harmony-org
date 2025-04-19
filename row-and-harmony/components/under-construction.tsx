import Icon from "@/public/images/pngs/icon.png";
import { Hammer, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UnderConstruction = () => {
    return (
        <section className="h-screen grid place-content-center text-center gap-y-6">
            <div className="flex items-center gap-[1vw] text-primary text-fluid-6xl mx-auto">
                <Hammer className="size-24" />
                <Image src={Icon} alt="Icon" className="size-24 object-fill" />
                <Hammer className="size-24" />
            </div>
            <div className="space-y-4">
                <h2 className="font-primary text-fluid-4xl">Under Construction</h2>
                <p className="text-fluid-base">This page is under construction, please check back later.</p>
            </div>
            <Link href="/" className="group link-btn gap-1 text-background mx-auto">
                <span className="relative">Back to home</span>
                <MoveLeft className="stroke-1 group-hover:rotate-45 transition duration-600" />
            </Link>
        </section>
    );
};

export default UnderConstruction;
