import { EventPageMetadata } from "./events-metadata";

export const metadata = EventPageMetadata;

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
