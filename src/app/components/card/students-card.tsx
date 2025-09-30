"use client";
import Card from "react-bootstrap/Card";
import { motion } from "motion/react";



function StudentsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        delay: 0.25,
      }}
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
          <Card.Text>
            In addition to uplifting our community, we recognize that our
            analysts are students first, and are committed to their professional
            and academic development. We have held events in the past that have
            involved industry speakers, tool workshops, and various events that
            assist analysts with their internship and post-graduation job
            search. This is reflected in the professional placement of
            analysts—Neo alumni can be found at companies such as Google,
            Evercore, Bain & Company, and EY among others. Additionally, you can
            find neo alumni in higher education at institutions such as the
            University of Chicago and Harvard.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default StudentsCard;
