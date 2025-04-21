export function capitalize(word: string) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
}

export function formatPriceNaira(price: number) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
    }).format(price);
}
