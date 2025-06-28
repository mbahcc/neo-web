"use client";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

function CommunityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Initial Position, invisible and start 20px down
      animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
      transition={{
        duration: 1.0,
        ease: "easeOut",
        type: "spring",
        delay: 1.0,
      }} // Transition length
    >
      <Card className="cardStyling">
        <Card.Img variant="top" src="neo-demo.JPG" />
        <Card.Body>
          <Card.Title>Development</Card.Title>
          <Card.Text
            style={{
              fontFamily: "Source San 3",
              fontWeight: "400",
            }}
          >
            {" "}
            Our analysts and alum have landed roles at companies such as Google,
            PwC, EY and others leveraging their neo experience.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default CommunityCard;
