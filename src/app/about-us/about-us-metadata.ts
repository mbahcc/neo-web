import { Metadata } from "next";

export const AboutPageMetadata: Metadata = {
  title: "Neo Initiative",
  description:
    "Learn more about the Neo Initiative. Discover our mission, meet our students, and find out how we're building community. Get in touch through LinkedIn, Instagram, or apply to become an analyst.",
  keywords:
    "Neo Initiative, about us, mission, students, analysts, community building, UC, university, LinkedIn, Instagram, careers, application",
  authors: [{ name: "Neo Initiative" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://neoucincy.org/about",
  },
  openGraph: {
    title: "Neo Initiative",
    description:
      "Learn more about the Neo Initiative. Discover our mission, meet our students, and find out how we're building community.",
    type: "website",
    url: "https://neoucincy.org/about-us",
    images: [
      {
        url: "https://neoucincy.org/images/logo.jpg",
        alt: "Neo Initiative - Our Mission and Students",
      },
    ],
    siteName: "Neo Initiative",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neo Initiative | About Us",
    description:
      "Learn more about the Neo Initiative. Discover our mission, meet our students, and find out how we're building community.",
    images: [
      {
        url: "https://neoucincy.org/images/logo.jpg",
        alt: "Neo Initiative About Us - Our Mission and Students",
      },
    ],
  },
  other: {
    contact: "neoinitiativeuc@gmail.com",
    "og:see_also": [
      "https://www.linkedin.com/company/neo-initiative/",
      "https://www.instagram.com/neoinitiative/",
    ],
  },
};

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}
