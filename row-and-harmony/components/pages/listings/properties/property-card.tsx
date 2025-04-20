import { capitalize } from "@/lib/utils";
import { GetPropertiesQueryResult } from "@/sanity/types";

interface IPropertyCardProps extends Omit<React.ComponentProps<"div">, "property"> {
    property: GetPropertiesQueryResult[number];
}

const PropertyCard = ({ children, property: { location, price, title, type } }: IPropertyCardProps) => {
    return (
        <div className="flex flex-col gap-6">
            {children}
            <div className="space-y2">
                <h5>{title}</h5>
                <span>{location}</span>
                <div className="flex items-center justify-between">
                    <span>{price}</span>
                    <span>{capitalize(type!)}</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
