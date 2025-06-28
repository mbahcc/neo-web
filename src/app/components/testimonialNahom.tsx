"use client";
import Card from "react-bootstrap/Card";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";

/* This is a card commponent from react bootstrap. This card will house a testimonial from Nahom Tewolde
about the impact of the neo initative on the community & his career

Formatting: 

font: Source San 3
font weight: 400 
background color: white w/ border shadows
text color: black

 */

function TestimonialNahom() {
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
        <Card.Header>
          From Nahom Tewolde,{" "}
          <div style={{ color: "#9acbd6" }}> Recruitment Chair</div>{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            I joined neo during my freshman year at the advice of a colleague.
            Now looking back, I'm incredibly grateful I did. Over the past two
            years, neo has easily been the most impactful organization I've been
            a part of at the University of Cincinnati. What really drew me
            towards neo is how tangible the work is. We’re helping actual
            businesses navigate real world challenges. Applying what I've
            learned through neo to make a difference in the community has been
            both humbling and empowering. But to me, neo is more than a
            consulting club, it's a community. Some of the most driven,
            thoughtful, and inspiring people I've met are from neo. The
            mentorship and guidance I've received from my peers all play a huge
            role in my personal and professional growth. Neo has opened doors
            for me, challenged me, and supported me every step of the way.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default TestimonialNahom;
