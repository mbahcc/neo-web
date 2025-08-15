"use client";
import Card from "react-bootstrap/Card";
import { motion } from "motion/react";

function ImpactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Initial Position, invisible and start 20px down
      animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
      transition={{ duration: 1.0, ease: "easeOut", type: "spring" }} // Transition length
    >
      <Card className="cardStyling">
        <Card.Img variant="top" src="neo-pres.JPG" color="#2D2424" />
        <Card.Body>
          <Card.Title color="#FFFFFF">Impact</Card.Title>
          <Card.Text
            style={{
              fontFamily: "Source San 3",
              fontWeight: "400",
            }}
          >
            Our analysts work dilligently with businesses in the community,
            leveraging their business acumen to deliver real impact.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default ImpactCard;
