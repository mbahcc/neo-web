"use client";
import NavBar from "../components/navbar";
import ApplyNowCard from "../components/applyNowCard";
import LearnNeoButton from "../components/learnNeoButton";
import AboutThePresButton from "../components/meetThePresButton";
import BottomBar from "../components/bottomBar";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

function AboutUs() {
  const isMobile = useMediaQuery({ query: "(max-width: 1300px)" });

  return (
    <>
      <NavBar />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: "var(--text-lg)",
            color: "#6b6b6b",
            fontFamily: "Source Sans 3",
            fontWeight: "400",
            maxWidth: "950px",
            wordWrap: "break-word",
            position: "relative",
            top: "80px",
            marginLeft: "100px",
            textAlign: "left",
            display: "flex",
          }}
        >
          Learn more about the neo initative.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginLeft: "100px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial Position, invisible and start 20px down
            animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
            transition={{
              duration: 1.0,
              ease: "easeOut",
              type: "spring",
              delay: 0.5,
            }} // Transition length
          >
            <div
              className="header"
              style={{ marginTop: "125px", textAlign: "left" }}
            >
              About neo.
            </div>
          </motion.div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <motion.div
              initial={{ opacity: 0, y: 10 }} // Initial Position, invisible and start 20px down
              animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
              transition={{
                duration: 1.0,
                ease: "easeOut",
                type: "spring",
                delay: 1.0,
              }} // Transition length
            >
              <div
                className="text"
                style={{
                  marginLeft: "100px",
                  marginTop: "45px",
                }}
              >
                {" "}
                Since 2020, the neo initative has sought to uplift our
                community. Inspired by the rapid change in the social climate
                brought on by 2020 and events that took place during the
                COVID-19 pandemic, students at the University of Cincinnati took
                it upon themselves to use their business acumen to support local
                minority-owned businesses in a time of need. Since then, the
                desire to bring about change continued to live on as the club
                has grown both in stature and ability. We are happy to say we
                have worked with upwards of 15+ clients, delivering countless
                amounts of tangible value. We look forward to continue our
                mission to help our community.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }} // Initial Position, invisible and start 10px down
              animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
              transition={{
                duration: 1.0,
                ease: "easeOut",
                type: "spring",
                delay: 1.0,
              }} // Transition length
            >
              <div style={{ display: isMobile ? "none" : "flex" }}>
                <ApplyNowCard />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }} // Initial Position, invisible and start 10px down
            animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
            transition={{
              duration: 1.0,
              ease: "easeOut",
              type: "spring",
              delay: 1.5,
            }} // Transition length
          >
            <div
              style={{
                marginTop: isMobile ? "20px" : "-115px",
                display: "flex",
                flexDirection: "row",
                gap: "15px",
                marginLeft: "100px",
              }}
            >
              <LearnNeoButton />
              <AboutThePresButton />
            </div>
          </motion.div>
        </div>
      </div>
      <div style={{ marginTop: "127px" }}>
        <BottomBar />
      </div>
    </>
  );
}

export default AboutUs;
