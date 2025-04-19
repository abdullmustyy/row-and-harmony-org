import { Bricolage_Grotesque, Recursive } from "next/font/google";

export const bricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-primary",
});

export const recursive = Recursive({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-base",
});
