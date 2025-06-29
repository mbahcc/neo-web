import Card from "react-bootstrap/Card";
import { motion } from "motion/react";

function SpringOnboarding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Initial Position, invisible and start 20px down
      animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
      transition={{
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        delay: 1.0,
      }} // Transition length
    >
      <Card className="cardStyling">
        <Card.Img variant="top" src="onboarding.JPG" />
        <Card.Body>
          <Card.Title
            style={{
              fontFamily: "Source San 3",
              fontWeight: "700",
            }}
          >
            Spring Semester Onboarding
          </Card.Title>
          <Card.Text
            style={{
              fontFamily: "Source San 3",
              fontWeight: "400",
              color: "#9acbd6",
            }}
          >
            {" "}
            February 9th, 2025
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default SpringOnboarding;
