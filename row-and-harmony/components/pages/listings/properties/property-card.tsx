import { cn } from "@/lib/utils";
import { GetPropertiesQueryResult } from "@/sanity/types";
import { capitalize, formatPriceNaira } from "@repo/lib/utils";
import { MapPin } from "lucide-react";
import Link from "next/link";

interface IPropertyCardProps extends Omit<React.ComponentProps<"div">, "property"> {
    property: GetPropertiesQueryResult[number];
}

const PropertyCard = ({ className, children, property: { _id, location, price, title, type } }: IPropertyCardProps) => {
    return (
        <div className={cn("flex flex-col", className)}>
            {children}
            <Link href={`/properties/${_id}`} className="group">
                <div className="pt-3">
                    <h5 className="font-primary font-semibold">{title}</h5>
                    <div className="flex items-center gap-1">
                        <MapPin className="size-4 stroke-[1.5] stroke-accent" />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                        <span className="font-semibold">{formatPriceNaira(price!)}</span>
                        <span className="font-medium">{capitalize(type!)}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PropertyCard;
