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
            options: {
                hotspot: true,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "icon",
            type: "icon",
            title: "Service Icon",
            validation: (rule: { required: () => any }) => rule.required(),
        }),
        defineField({
            name: "serviceOverview",
            type: "object",
            title: "Service Overview",
            fields: [
                defineField({
                    name: "heading",
                    type: "string",
                    title: "Overview Heading",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "details",
                    type: "array",
                    of: [{ type: "block" }],
                    title: "Overview Details",
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: "serviceCenter",
            type: "object",
            title: "Service Center",
            fields: [
                defineField({
                    name: "intro",
                    type: "text",
                    title: "Service Center Intro",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "services",
                    type: "array",
                    title: "Services Offered",
                    of: [
                        {
                            type: "string",
                        },
                    ],
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "outro",
                    type: "text",
                    title: "Service Center Outro",
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "icon",
        },
    },
});
