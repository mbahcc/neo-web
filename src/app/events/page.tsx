"use client";
import NavBar from "../components/navbar";
import { motion } from "motion/react";
import SpringOnboarding from "../components/springonboarding";
import NeoJeopardyCard from "../components/neojeopardy";
import FinalPresentationCard from "../components/finalPresentationCard";
import BottomBar from "../components/bottomBar";

function Events() {
  return (
    <main>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Neo Initiative</title>
      <meta
        name="description"
        content="Discover how Neo Initiative builds community through engaging events. View our past events including Spring Onboarding, Neo Jeopardy, and Final Presentations. Check our calendar for upcoming events."
      />
      <meta property="og:title" content="Neo Initiative | Events" />
      <meta
        property="og:description"
        content="See how we build community through engaging events. View past events and check our calendar for upcoming activities."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://neoinitiativeuc.com/events" />
      <meta
        property="og:image"
        content="https://neoinitiativeuc.com/images/logo.jpg"
      />
      <meta property="og:image:alt" content="Neo Initiative Events" />
      <meta property="og:site_name" content="Neo Initiative" />

      <meta
        name="keywords"
        content="Neo Initiative, events, community building, Spring Onboarding, Neo Jeopardy, presentations, calendar, upcoming events"
      />
      <meta name="author" content="Neo Initiative" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://neoinitiativeuc.com/events" />

      <div
        style={{
          overflowY: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <NavBar />
        <div className="subtitleText">See how we build community.</div>
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Initial Position, invisible and start 20px down
          animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            delay: 0.5,
          }} // Transition length
        >
          <div
            className="header"
            style={{
              marginTop: "100px",

              textAlign: "left",
              display: "flex",
            }}
          >
            Past Events
          </div>
        </motion.div>
        <div
          style={{
            gap: "50px",
            marginLeft: "100px",
            marginTop: "20px",
            display: "flex",
            margin: "10px auto",
            padding: "5px",
          }}
          className="cardCss"
        >
          <SpringOnboarding />
          <NeoJeopardyCard />
          <FinalPresentationCard />
        </div>
        <div
          className="text"
          style={{
            marginTop: "75px",
            marginLeft: "100px",
            margin: "10px auto",
            padding: "20px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }} // Initial Position, invisible and start 20px down
            animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
            transition={{
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              delay: 1.5,
            }} // Transition length
          >
            Interested in our upcoming events? Check our calendar{" "}
            <a
              href="https://1drv.ms/w/c/22079106a0045bcd/ESOUjdlBrXNGsWoZ4tXzOsYBKVWqjUqyThV-njxt44Kk2A"
              target="_blank"
            >
              here
            </a>
          </motion.div>
        </div>
        <div style={{ position: "relative" }}>
          <BottomBar />
        </div>
      </div>
    </main>
  );
}

export default Events;
