import { defineField, defineType } from "sanity";

export const clientType = defineType({
    name: "client",
    icon: () => "🏢",
    title: "Client",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "href",
            title: "Website URL",
            type: "url",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "location",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "href",
            media: "image",
        },
    },
});
