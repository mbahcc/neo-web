"use client";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottomBar";
import { motion } from "motion/react";
import Link from "next/link";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
            paddingBottom: "150px",
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
              className="text"
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "10px",
                maxWidth: "750px", //override max width
              }}
            >
              Since 2020, the neo initative mission has been to harness the
              business acumen of students at the University of Cincinnati to
              uplift our local minority community. In order to do so, we&apos;ve
              partnered with local minority owned businesses, connecting them
              with some of the most renowned and accomplished students. This
              pool of students come from all educational backgrounds, allowing
              neo to develop hollistic solutions for our clients that include
              both business and engineering efforts. Since our inception,
              we&apos;ve worked with countless clients, delivering tangible
              value that has helped our clients navigate an increasingly complex
              socioeconomic business climate.
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial Position, invisible and start 20px down
            animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
            transition={{
              duration: 1.0,
              ease: "easeOut",
              type: "spring",
              delay: 1.5,
            }} // Transition length
          >
            <div className="aboutTextParagraph">
              In addition to uplifting our community, we recognize that our
              analysts are students first, and are upmost committed to their
              professional and academic development. We have held events in the
              past that have involved industry speakers, tool workshops, and
              various events assist analyst with their internship search. This
              is reflected in the professional placement of analysts - neo alum
              can be found at companies such as Google, Evercore, Bain
              Consulting Company, and EY among others. Additionally, neo alum
              have also been successful academically, with former members at
              institutions such as the University of Chicago and Harvard.
            </div>
          </motion.div>
        </div>

        <div
          style={{
            backgroundColor: "#FAFAFA",
            marginTop: "50px",
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
                  href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=bC4i9cZf60iPA3PbGCA7Yz3jtH7v2yxNtQVQwdu0mfNUNENCTkJZUDAxVUxWSzNMV01UMThKMjhERi4u"
                  target="_blank"
                >
                  {" "}
                  here.{" "}
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <div style={{ alignSelf: "flex-end", marginTop: "200px" }}>
          <BottomBar />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
