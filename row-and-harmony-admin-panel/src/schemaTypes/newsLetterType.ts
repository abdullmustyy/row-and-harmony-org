import { defineField, defineType } from "sanity";

export const newsLetterType = defineType({
    name: "newsLetter",
    icon: () => "📧",
    title: "Newsletter Subscription",
    type: "document",
    fields: [
        defineField({
            name: "email",
            type: "string",
        }),
    ],
    preview: {
        select: {
            title: "email",
        },
        prepare({ title }) {
            return {
                title: title,
                subtitle: "Subscribed to Newsletter",
            };
        },
    },
});
