import { Metadata } from "next"
export const EventPageMetadata: Metadata = {
title: "Neo Initiative | Events",
  description: "Discover how Neo Initiative builds community through engaging events. View our past events including Spring Onboarding, Neo Jeopardy, and Final Presentations. Check our calendar for upcoming events.",
  keywords: "Neo Initiative, events, community building, Spring Onboarding, Neo Jeopardy, presentations, calendar, upcoming events",
  authors: [{ name: "Neo Initiative" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://neoucincy.org/events"
  },
  openGraph: {
    title: "Neo Initiative | Events",
    description: "See how we build community through engaging events. View past events and check our calendar for upcoming activities.",
    type: "website",
    url: "https://neoucincy.org/events",
    images: [
      {
        url: "https://neoucincy.org/images/logo.jpg",
        alt: "Neo Initiative Events"
      }
    ],
    siteName: "Neo Initiative"
  },
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
  }
}