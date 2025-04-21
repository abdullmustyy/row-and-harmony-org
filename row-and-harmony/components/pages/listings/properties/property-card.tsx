import { GetPropertiesQueryResult } from "@/sanity/types";
import { capitalize, formatPriceNaira } from "@repo/lib/utils";

interface IPropertyCardProps extends Omit<React.ComponentProps<"div">, "property"> {
    property: GetPropertiesQueryResult[number];
}

const PropertyCard = ({ children, property: { location, price, title, type } }: IPropertyCardProps) => {
    return (
        <div className="flex flex-col gap-4">
            {children}
            <div className="space-y2">
                <h5 className="font-primary font-semibold">{title}</h5>
                <span>{location}</span>
                <div className="flex items-center justify-between mt-1">
                    <span className="font-medium">{formatPriceNaira(price!)}</span>
                    <span>{capitalize(type!)}</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
