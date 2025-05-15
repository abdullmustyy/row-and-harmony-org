import { capitalize, formatPriceNaira } from "@repo/lib/utils";
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
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "jobDetails",
            type: "object",
            fields: [
                defineField({
                    name: "jobSummary",
                    type: "text",
                    validation: (rule) => rule.required(),
                }),
                defineField({
                    name: "jobDescription",
                    type: "array",
                    of: [{ type: "block" }],
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: "department",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "salary",
            type: "number",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "location",
            type: "string",
            validation: (rule) => rule.required(),
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
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "applicationLink",
            type: "url",
            validation: (Rule) =>
                Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                }).required(),
        }),
    ],
    preview: {
        select: {
            title: "role",
            type: "type",
            media: "icon",
            salary: "salary",
        },
        prepare({ title, type, media, salary }) {
            const formattedPrice = salary ? formatPriceNaira(salary) : undefined;
            const subtitle = type && formattedPrice ? `${capitalize(type)} - ${formattedPrice}` : undefined;

            return { title, subtitle, media };
        },
    },
});
