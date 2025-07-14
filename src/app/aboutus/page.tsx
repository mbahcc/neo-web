"use client";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottomBar";
import { motion } from "motion/react";
import Link from "next/link";
import MissionCard from "../components/missionCard";
import StudentsCard from "../components/studentsCard";

function AboutUs() {
  return (
    <main>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Neo Initiative</title>
      <meta
        name="description"
        content="Learn more about the Neo Initiative. Discover our mission, meet our students, and find out how we're building community. Get in touch through LinkedIn, Instagram, or apply to become an analyst."
      />
      <meta property="og:title" content="Neo Initiative" />
      <meta
        property="og:description"
        content="Learn more about the Neo Initiative. Discover our mission, meet our students, and find out how we're building community."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://neoinitiativeuc.com/about" />
      <meta
        property="og:image"
        content="https://neoinitiativeuc.com/images/logo.jpg"
      />
      <meta
        property="og:image:alt"
        content="Neo Initiative - Our Mission and Students"
      />
      <meta property="og:site_name" content="Neo Initiative" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Neo Initiative | About Us" />
      <meta
        name="twitter:description"
        content="Learn more about the Neo Initiative. Discover our mission, meet our students, and find out how we're building community."
      />
      <meta
        name="twitter:image"
        content="https://neoinitiativeuc.com/images/logo.jpg"
      />
      <meta
        name="twitter:image:alt"
        content="Neo Initiative About Us - Our Mission and Students"
      />
      <meta
        name="keywords"
        content="Neo Initiative, about us, mission, students, analysts, community building, UC, university, LinkedIn, Instagram, careers, application"
      />
      <meta name="author" content="Neo Initiative" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://neoinitiativeuc.com/about" />
      <meta
        property="og:see_also"
        content="https://www.linkedin.com/company/neo-initiative/"
      />
      <meta
        property="og:see_also"
        content="https://www.instagram.com/neoinitiative/"
      />
      <meta name="contact" content="neoinitativeuc@gmail.com" />
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <title>Neo Initative</title>
        <div className="subtitleText">Learn more about the neo initative.</div>
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
          <div className="header">About neo.</div>
        </motion.div>

        <div
          style={{
            display: "flex",
            marginTop: "80px",
            paddingBottom: "125px",
            gap: "100px",
          }}
          className="aboutText"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial Position, invisible and start 20px down
            animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
            transition={{
              duration: 1.0,
              ease: "easeOut",
              type: "spring",
              delay: 1.0,
            }} // Transition length
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
                gap: "50px",
                padding: "50px",
                margin: "10px auto",
              }}
              className="testimonialContainer"
            >
              <MissionCard />
              <StudentsCard />
            </div>
          </motion.div>
        </div>

        <div
          style={{
            backgroundColor: "#FAFAFA",
            marginTop: "0px",
            paddingTop: "0px",
            paddingBottom: "150px",
            marginBottom: "-200px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              className="header"
              style={{
                marginTop: "80px" /* Override top margin */,
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial Position, invisible and start 20px down
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 0.5,
                }} // Transition length
              >
                Get In Touch
              </motion.div>
            </div>

            <div
              className="text"
              style={{
                justifyContent: "center",
                alignSelf: "center",
                paddingTop: "40px",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }} // Initial Position, invisible and start 20px down
                whileInView={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                  type: "spring",
                  delay: 1.0,
                }} // Transition length
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
                event in collaboration with us? Please reach us at{" "}
                <a href="mailto:neoinitativeuc@gmail.com" target="_blank">
                  neoinitativeuc@gmail.com
                </a>
                . Lastly, looking to the become an analyst at neo? You can find
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
