import { AboutPageMetadata } from "./about-us-metadata";

export const metadata = AboutPageMetadata;

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
