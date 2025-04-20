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
            validation: (rule) => rule.required(),
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
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "images",
            type: "object",
            fields: [
                defineField({ name: "display", type: "image", validation: (rule) => rule.required() }),
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
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "contactInfo",
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
