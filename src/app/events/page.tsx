"use client";
import NavBar from "../components/navbar";
import { motion } from "motion/react";
import SpringOnboarding from "../components/card/event-spring-onboarding-card";
import NeoJeopardyCard from "../components/card/event-neo-jeopardy-card";
import FinalPresentationCard from "../components/card/event-final-pres-card";
import BottomBar from "../components/bottom-bar";

function Events() {
  return (
    <main>
      <div className="event-page-format">
        <NavBar />
        <h2 className="subtitleText">See how we build community.</h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            type: "spring",
            delay: 0.5,
          }}
        >
          <h1 className="header">Past Events</h1>
        </motion.div>
        <div className="event-card-section">
          <SpringOnboarding />
          <NeoJeopardyCard />
          <FinalPresentationCard />
        </div>
        <div className="event-text">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              delay: 1.5,
            }}
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
