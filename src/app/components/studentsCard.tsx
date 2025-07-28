"use client";
import Card from "react-bootstrap/Card";
import { motion } from "motion/react";

/* This is a card commponent from react bootstrap. This card will house a testimonial from Nahom Tewolde
about the impact of the neo initative on the community & his career

Formatting: 

font: Source San 3
font weight: 400 
background color: white w/ border shadows
text color: black

 */

function StudentsCard() {
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
        <Card.Header>Our Analysts</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            In addition to uplifting our community, we recognize that our
            analysts are students first, and are utmost committed to their
            professional and academic development. We have held events in the
            past that have involved industry speakers, tool workshops, and
            various events that assist analysts with their internship and
            postgraduation job search. This is reflected in the professional
            placement of analysts-Neo alumni can be found at companies such as
            Google, Evercore, Bain & Company, and EY among others. Additionally,
            neo alumni have also been successful academically, with former
            members at institutions such as the University of Chicago and
            Harvard.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default StudentsCard;
