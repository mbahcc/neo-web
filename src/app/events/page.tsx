"use client";
import NavBar from "../components/navbar";
import { motion } from "motion/react";
import SpringOnboarding from "../components/springonboarding";
import NeoJeopardyCard from "../components/neojeopardy";
import FinalPresentationCard from "../components/finalPresentationCard";
import BottomBar from "../components/bottomBar";

function Events() {
  return (
    <div
      style={{
        overflowY: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <title>Neo Initative | Events</title>
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
            href="https://1drv.ms/w/c/22079106a0045bcd/ESOUjdlBrXNGsWoZ4tXzOsYBP-R76jVQvALgLgWhPVgALg?e=TGsmTN"
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
  );
}

export default Events;
