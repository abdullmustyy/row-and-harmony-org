"use server";

import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import { EmailConfig, IEmailKeys, ISendEmail } from "./config";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT!),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});

export async function sendEmail<K extends IEmailKeys>({ args, key }: ISendEmail<K>) {
    const firstName = args.name.split(" ")[0];

    try {
        await transporter.sendMail({
            from: `"Row & Harmony" <${process.env.SMTP_USER}>`,
            to: "randhfacility@gmail.com",
            subject: EmailConfig[key].subject,
            html: await render(EmailConfig[key].html(args)),
        });

        return {
            success: true,
            message: `Thank you for reaching out, ${firstName}. Your message has been received and we will get back to you shortly.`,
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            success: false,
            message:
                "We were unable to send your message at this time. Please try again later or contact us directly via email.",
        };
    }
}
