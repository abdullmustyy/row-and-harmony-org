import ContainerOverlay from "@/components/overlays/container-overlay";
import Link from "next/link";

const GetInTouch = () => {
    return (
        <section className="h-[300vh] md:-my-[100vh] -my-[115vh] bg-[url(/images/webps/row-and-harmony-company.webp)] bg-no-repeat bg-center bg-cover relative">
            <div className="h-screen grid place-content-center justify-items-center gap-8 sticky top-0 bg-background mix-blend-screen z-10">
                <h1 className="text-fluid-5xl font-primary font-semibold">
                    Let&apos;s Elevate
                    <br /> Your Facility
                    <br /> Management
                </h1>
                <Link
                    href="/contact"
                    className="link-btn h-12 px-8 font-medium text-background hover:text-black border-2 border-black transition-colors duration-500 ease-1"
                >
                    <span className="relative">Get In Touch</span>
                </Link>
            </div>
            <ContainerOverlay className="opacity-60" />
        </section>
    );
};

export default GetInTouch;
