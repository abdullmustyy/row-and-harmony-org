import { IEmailProps } from "@/lib/email/config";
import { Body, Container, Head, Html, Img, Preview, Section, Text } from "@react-email/components";

type ContactEmailProps = {
    name: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
};

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.rowandharmony.com";

export const ContactEmail = ({ name, email, phone, subject, message }: IEmailProps<"contact">) => {
    return (
        <Html>
            <Head />
            <Preview>New contact form submission from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Img
                        src={`${baseUrl}/images/webps/logo.webp`}
                        alt="Logo"
                        style={{ height: 60, width: 250, marginBottom: 40 }}
                    />
                    <Section>
                        <Text>
                            <strong>Name:</strong> {name}
                        </Text>
                        <Text>
                            <strong>Email:</strong> {email}
                        </Text>
                        {phone && (
                            <Text>
                                <strong>Phone:</strong> {phone}
                            </Text>
                        )}
                        {subject && (
                            <Text>
                                <strong>Subject:</strong> {subject}
                            </Text>
                        )}
                        <Text>
                            <strong>Message:</strong> {message}
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

ContactEmail.PreviewProps = {
    name: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123-456-7890",
    subject: "Inquiry about services",
    message:
        "Hello, I would like to know more about your services. Please get back to me at your earliest convenience.",
} as ContactEmailProps;

export default ContactEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    padding: 20,
} as React.CSSProperties;

const container = {
    margin: "10px auto",
    width: "600px",
    maxWidth: "100%",
} as React.CSSProperties;
