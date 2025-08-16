"use client";
import Card from "react-bootstrap/Card";
import { motion } from "motion/react";

function ApplyNowCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Initial Position, invisible and start 20px down
      animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
      transition={{ duration: 1.5, ease: "easeOut", type: "spring" }} // Transition length
    >
      <Card
        style={{
          width: "40rem",
          height: "auto",
          border: "none",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        }}
      >
        <Card.Img variant="top" src="ApplyNow.jpg" color="#2D2424" />
        <Card.Body>
          <Card.Title color="#FFFFFF"></Card.Title>
          <Card.Text
            style={{
              fontFamily: "Source San 3",
              fontWeight: "400",
            }}
          ></Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ApplyNowCard;
