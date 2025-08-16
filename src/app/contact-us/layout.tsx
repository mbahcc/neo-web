import { ContactPageMetadata } from "./contact-us-metadata";

export const metadata = ContactPageMetadata;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
