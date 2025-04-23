import { GetPropertiesQueryResult } from "@/sanity/types";
import { capitalize, formatPriceNaira } from "@repo/lib/utils";
import { MapPin } from "lucide-react";

interface IPropertyCardProps extends Omit<React.ComponentProps<"div">, "property"> {
    property: GetPropertiesQueryResult[number];
}

const PropertyCard = ({ children, property: { location, price, title, type } }: IPropertyCardProps) => {
    return (
        <div className="flex flex-col gap-4">
            {children}
            <div>
                <h5 className="font-primary font-semibold">{title}</h5>
                <div className="flex items-center gap-1">
                    <MapPin className="size-4 stroke-[1.5] stroke-accent" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                    <span className="font-medium">{formatPriceNaira(price!)}</span>
                    <span>{capitalize(type!)}</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
