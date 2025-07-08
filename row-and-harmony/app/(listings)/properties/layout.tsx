import GetAQuote from "@/components/pages/home/sections/get-a-quote";

export default function PropertyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
            <GetAQuote />
        </>
    );
}
