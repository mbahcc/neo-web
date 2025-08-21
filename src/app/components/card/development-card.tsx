"use client";
import Card from "react-bootstrap/Card";
import { motion } from "motion/react";

function DevelopmentCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Initial Position, invisible and start 20px down
      animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
      transition={{
        duration: 1.0,
        ease: "easeOut",
        type: "spring",
        delay: 0.5,
      }} // Transition length
    >
      <Card className="cardStyling">
        <Card.Img variant="top" src="team/team-gen-body.JPG" />
        <Card.Body>
          <Card.Title style={{
              fontWeight: "700",
            }}>Community</Card.Title>
          <Card.Text
            style={{
              fontWeight: "400",
            }}
          >
            We frequently host both professional and social events to foster community between the general
            university populace, neo analysts, and our clients.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default DevelopmentCard;
