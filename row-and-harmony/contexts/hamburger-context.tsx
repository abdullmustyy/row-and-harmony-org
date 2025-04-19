"use client";

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface IHamBurgerContext {
    isHamburgerOpen: boolean;
    setIsHamburgerOpen: Dispatch<SetStateAction<boolean>>;
}

const HamBurgerContext = createContext<IHamBurgerContext>({
    isHamburgerOpen: false,
    setIsHamburgerOpen: () => {},
});

export const HamburgerProvider = ({ children }: { children: ReactNode }) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    return <HamBurgerContext value={{ isHamburgerOpen, setIsHamburgerOpen }}>{children}</HamBurgerContext>;
};

export const useHamburger = () => {
    const context = useContext(HamBurgerContext);

    if (!context) throw new Error("useHamburger must be used within a HamburgerProvider");

    return context;
};
