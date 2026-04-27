"use client";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottom-bar";
import { motion } from "motion/react";
import Link from "next/link";
import MissionCard from "../components/card/mission-card";
import StudentsCard from "../components/card/students-card";

function AboutUs() {
  return (
    <main>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 className="subtitleText">
          Learn more about the Neo Initiative.
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: "easeOut",
            type: "spring",
            delay: 0.5,
          }}
        >
          <h1 className="header">About Neo</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: "easeOut",
            type: "spring",
            delay: 1.0,
          }}
        >
          <div className="about-us-testimonial-container">
            <MissionCard />
            <StudentsCard />
          </div>
        </motion.div>

        <div className="get-in-touch-container">
          <div className="get-in-touch-format">
            <h2 className="get-in-touch-header">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.5,
                }}
              >
                Get In Touch
              </motion.div>
            </h2>

            <div className="get-in-touch-text">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 1.0,
                }}
              >
                We encourage everyone to get in contact with us! Feel free to
                connect with our{" "}
                <a
                  href="https://www.linkedin.com/company/neo-initiative/"
                  target="_blank"
                  className="inline-link"
                >
                  LinkedIn
                </a>{" "}
                and{" "}
                <a
                  href="https://www.instagram.com/neoinitiative/"
                  target="_blank"
                >
                  Instagram
                </a>
                . For clients, you can formally send an inquiry by utilizing
                this <Link href="/contact-us">form.</Link> Looking to host an
                event in collaboration with us? Please reach us by email{" "}
                <a href="mailto:neoinitiativeuc@gmail.com" target="_blank">
                  here.
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "200px" }}>
          <BottomBar />
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
