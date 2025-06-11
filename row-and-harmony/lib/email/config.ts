import ContactEmail from "@/emails/contact";
import { IContactSchema } from "@/schemas/contact";
import { INewsletterSchema } from "@/schemas/news-letter";

export type IEmailKeys = "contact";

export type IEmailArgs<K extends IEmailKeys> = K extends "contact"
    ? IContactSchema
    : K extends "news-letter"
      ? INewsletterSchema
      : never;

export type IEmailConfig = Record<
    IEmailKeys,
    { subject: string; html: (args: IEmailArgs<IEmailKeys>) => React.JSX.Element }
>;

export type IEmailProps<K extends IEmailKeys> = IEmailArgs<K>;

export interface ISendEmail<K extends IEmailKeys> {
    key: K;
    args: IEmailArgs<K>;
}

export const EmailConfig: IEmailConfig = {
    contact: {
        subject: "Contact Submission",
        html: ContactEmail,
    },
};
