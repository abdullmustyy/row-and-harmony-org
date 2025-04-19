import { defineField, defineType } from "sanity";
import { capitalize } from "../lib/utils";

export const propertyType = defineType({
    name: "property",
    icon: () => "🏠",
    title: "Property",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "Sale", value: "sale" },
                    { title: "Lease", value: "lease" },
                ],
                layout: "radio",
            },
        }),
        defineField({
            name: "price",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "images",
            type: "object",
            fields: [
                defineField({ name: "display", type: "image" }),
                defineField({
                    name: "showcase",
                    type: "array",
                    of: [
                        defineField({
                            name: "showcaseImage",
                            type: "image",
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "location",
            type: "string",
        }),
        defineField({
            name: "conntactInfo",
            type: "object",
            fields: [
                defineField({
                    name: "name",
                    type: "string",
                }),
                defineField({
                    name: "email",
                    type: "string",
                }),
                defineField({
                    name: "phone",
                    type: "string",
                }),
                defineField({
                    name: "datePosted",
                    type: "datetime",
                    initialValue: new Date().toISOString(),
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "images.display",
            type: "type",
            price: "price",
        },
        prepare: ({ title, type, media, price }) => {
            const formattedPrice = price
                ? new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                  }).format(price)
                : undefined;
            const subtitle = type && formattedPrice ? `${capitalize(type)} - ${formattedPrice}` : undefined;

            return {
                title,
                subtitle,
                media,
            };
        },
    },
});
