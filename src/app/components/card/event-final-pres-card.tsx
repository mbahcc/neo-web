import Card from "react-bootstrap/Card";
import { motion } from "motion/react";

function FinalPresentationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        delay: 1.0,
      }} 
    >
      <Card className="cardStyling">
        <Card.Img variant="top" src="team/final-presentation.JPG" />
        <Card.Body>
          <Card.Title
            style={{
              fontFamily: "Source San 3",
              fontWeight: "700",
            }}
          >
            Spring Semester Final Presentations
          </Card.Title>
          <Card.Text
            style={{
              fontFamily: "Source San 3",
              fontWeight: "400",
              color: "#9acbd6",
            }}
          >
            {" "}
            April 19th, 2025
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default FinalPresentationCard;
