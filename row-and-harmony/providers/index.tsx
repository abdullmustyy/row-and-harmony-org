import { HamburgerProvider } from "@/contexts/hamburger-context";
import { ReactNode } from "react";

const AppProviders = ({ children }: { children: ReactNode }) => {
    return <HamburgerProvider>{children}</HamburgerProvider>;
};

export default AppProviders;
