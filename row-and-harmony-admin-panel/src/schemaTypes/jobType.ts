import { defineField, defineType } from "sanity";

export const jobType = defineType({
    name: "job",
    icon: () => "💼",
    title: "Job",
    type: "document",
    fields: [
        defineField({
            name: "role",
            type: "string",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "department",
            type: "string",
        }),
        defineField({
            name: "salary",
            type: "number",
        }),
        defineField({
            name: "location",
            type: "string",
        }),
        defineField({
            name: "type",
            type: "string",
            options: {
                list: [
                    { title: "Full-time", value: "full-time" },
                    { title: "Part-time", value: "part-time" },
                    { title: "Contract", value: "contract" },
                    { title: "Internship", value: "internship" },
                ],
                layout: "radio",
            },
        }),
        defineField({
            name: "applicationLink",
            type: "url",
        }),
        defineField({
            name: "datePosted",
            type: "datetime",
            initialValue: new Date().toISOString(),
        }),
    ],
    preview: {
        select: {
            title: "role",
            department: "department",
            media: "icon",
        },
        prepare({ title, department, media }) {
            const subtitle = department ?? undefined;

            return { title, subtitle, media };
        },
    },
});
