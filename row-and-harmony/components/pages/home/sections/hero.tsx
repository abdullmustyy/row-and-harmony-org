"use client";

import ContainerOverlay from "@/components/overlays/container-overlay";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeOff } from "lucide-react";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);

    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setMuted(videoRef.current.muted);
        }
    }, []);

    return (
        <section className="relative md:-mb-[calc(100vh-var(--spacing-nav)+2rem)] -mb-[calc(100vh-var(--spacing-nav)+4rem)]">
            <div className="group sticky top-nav flex items-center-safe min-h-[calc(100vh-var(--spacing-nav))] w-full md:px-16 px-8">
                <div className="text-background space-y-8">
                    <div className="space-y-2 ">
                        <h1 className="text-fluid-5xl font-primary font-semibold">
                            Optimizing Spaces,
                            <br /> Elevating Experiences
                        </h1>
                        <p className="text-fluid-base">
                            Premium Facility Management Solutions for Efficiency,
                            <br /> Safety, and Sustainability.
                        </p>
                    </div>
                    <Link href="/contact" className="link-btn">
                        <span className="relative">Get Started Today</span>
                    </Link>
                </div>
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 size-full object-cover -z-10"
                    autoPlay
                    loop
                    muted={muted}
                    playsInline
                >
                    <source src="/videos/mp4s/randh-advert.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Button
                    aria-label="Toggle Mute"
                    variant="outline"
                    className="lg:opacity-0 group-hover:opacity-100 absolute md:top-12 top-6 md:right-12 right-6 md:size-12 size-10 rounded-full bg-transparent hover:bg-primary text-background hover:text-background transition duration-500 ease-1"
                    onClick={toggleMute}
                >
                    {muted ? <VolumeOff className="md:size-5 size-4" /> : <Volume2 className="md:size-5 size-4" />}
                </Button>
                <ContainerOverlay className="-z-10" />
            </div>
            <div className="h-screen" />
        </section>
    );
};

export default Hero;
