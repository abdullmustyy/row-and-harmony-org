import RowAndHarmonyCompany from "@/public/images/webps/row-and-harmony-company.webp";
import Image from "next/image";
import ContainerOverlay from "./overlays/container-overlay";

interface IPageHeaderProps extends React.ComponentProps<"section"> {
    heading?: string;
    paragraph?: string;
}

const PageHeader = ({ heading, paragraph }: IPageHeaderProps) => {
    return (
        <section className="mt-nav relative">
            <div className="flex items-center justify-center min-h-[50vh] w-full">
                <div className="text-background space-y-4 text-center">
                    <h1 className="text-fluid-5xl font-primary font-semibold">{heading}</h1>
                    <p className="text-fluid-base whitespace-pre-line">{paragraph}</p>
                </div>
            </div>
            <Image
                src={RowAndHarmonyCompany}
                alt="Row & Harmony Company"
                fill
                priority
                className="absolute inset-0 object-cover -z-10"
            />
            <ContainerOverlay className="-z-10" />
        </section>
    );
};

export default PageHeader;
