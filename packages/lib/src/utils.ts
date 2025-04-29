export function capitalize(word: string) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
}

export function formatPriceNaira(price: number) {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0,
    }).format(price);
}

export function formatRelativeDate(date: string) {
    const options: Intl.RelativeTimeFormatOptions = {
        numeric: "auto",
        style: "long",
    };
    const dateObj = new Date(date);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30.44); // Average month length
    const diffInYears = Math.floor(diffInDays / 365.25); // Average year length

    if (diffInSeconds < 60) {
        return new Intl.RelativeTimeFormat("en", options).format(-diffInSeconds, "second");
    } else if (diffInMinutes < 60) {
        return new Intl.RelativeTimeFormat("en", options).format(-diffInMinutes, "minute");
    } else if (diffInHours < 24) {
        return new Intl.RelativeTimeFormat("en", options).format(-diffInHours, "hour");
    } else if (diffInDays < 30.44) {
        return new Intl.RelativeTimeFormat("en", options).format(-diffInDays, "day");
    } else if (diffInMonths < 12) {
        return new Intl.RelativeTimeFormat("en", options).format(-diffInMonths, "month");
    } else {
        return new Intl.RelativeTimeFormat("en", options).format(-diffInYears, "year");
    }
}
