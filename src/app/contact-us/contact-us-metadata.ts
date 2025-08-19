import { Metadata } from "next";

export const ContactPageMetadata: Metadata = {
  title: "Neo Initiative | Contact Us",
  description: "Learn how to get involved with Neo Initiative. Contact us to discover opportunities for clients and explore how we can work together to build community.",
  openGraph: {
    title: "Neo Initiative",
    description: "Learn how to get involved with Neo Initiative. Contact us to discover opportunities for clients and explore collaboration possibilities.",
    type: "website",
    url: "https://neoucincy.org/contact-us",
    images: [
      {
        url: "https://neoucincy.org/images/logo.jpg",
        alt: "Neo Initiative Contact Information"
      }
    ],
    siteName: "Neo Initiative"
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Initiative | Contact Us",
    description: "Learn how to get involved with Neo Initiative. Contact us to discover opportunities for clients and collaboration.",
    images: [
      {
        url: "https://neoucincy.org/images/logo.jpg",
        alt: "Neo Initiative Contact Information"
      }
    ]
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}