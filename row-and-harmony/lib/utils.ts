import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function capitalize(word: string) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
}
