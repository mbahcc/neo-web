"use client";
import Card from "react-bootstrap/Card";
import { motion } from "motion/react";

function MissionCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Initial Position, invisible and start 20px down
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        delay: 0.25,
      }} // Transition length
    >
      <Card
        bg="#9acbd6"
        style={{
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        }}
        className="mb-2 testimonialCard"
      >
        <Card.Header>Our Mission</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Since 2020, the neo initative mission has been to harness the
            business acumen of students at the University of Cincinnati to
            uplift our local minority community. In order to do so, we&apos;ve
            partnered with local minority owned businesses, connecting them with
            some of the most renowned and accomplished students. This pool of
            students come from all educational backgrounds, allowing neo to
            develop hollistic solutions for our clients that include both
            business and engineering efforts. Since our inception, we&apos;ve
            worked with countless clients, delivering tangible value that has
            helped our clients navigate an increasingly complex socioeconomic
            business climate.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default MissionCard;
