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
        <title>Neo Initative</title>
        <div className="event-subtitle-text">
          Learn more about the Neo Initiative.
        </div>
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
          <div className="event-header">About Neo.</div>
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
            <div className="get-in-touch-header">
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
            </div>

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
                this <Link href="/getinvolved">form.</Link> Looking to host an
                event in collaboration with us? Please reach us by email{" "}
                <a href="mailto:neoinitiativeuc@gmail.com" target="_blank">
                  here
                </a>
                . Lastly, looking to the become an analyst at Neo? You can find
                the application{" "}
                <a
                  href="https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=bC4i9cZf60iPA3PbGCA7Yz3jtH7v2yxNtQVQwdu0mfNUM0lURTgzVzUwMjBUUlNVTEZITEJPR0tONi4u"
                  target="_blank"
                >
                  {" "}
                  here.{" "}
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
