import { SVGProps } from "react";

type IBuildingsIconProps = SVGProps<SVGSVGElement>;

const BuildingsIcon = ({ className, ...rest }: IBuildingsIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className={className}
            {...rest}
        >
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" color="currentColor">
                <path d="M2 22h20M18 9h-4c-2.482 0-3 .518-3 3v10h10V12c0-2.482-.518-3-3-3"></path>
                <path d="M15 22H3V5c0-2.482.518-3 3-3h6c2.482 0 3 .518 3 3v4M3 6h3m-3 4h3m-3 4h3m9-1h2m-2 3h2m-1 6v-3"></path>
            </g>
        </svg>
    );
};

export default BuildingsIcon;
