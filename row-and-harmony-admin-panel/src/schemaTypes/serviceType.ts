import { defineField, defineType } from "sanity";

export const serviceType = defineType({
    name: "service",
    icon: () => "🛠️",
    title: "Service",
    type: "document",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Service Name",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            type: "text",
            title: "Service Description",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Service Image",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "icon",
            type: "icon",
            title: "Service Icon",
            validation: (rule: { required: () => any }) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "icon",
        },
    },
});
