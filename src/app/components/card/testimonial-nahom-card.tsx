"use client";
import Card from "react-bootstrap/Card";
import { motion } from "motion/react";

function TestimonialNahom() {
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
        <Card.Header>
          From Nahom Tewolde,{" "}
          <div style={{ color: "#9acbd6" }}> Recruitment Chair</div>{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            I joined Neo during my freshman year at the advice of a colleague.
            Now looking back, I&apos;m incredibly grateful I did. Over the past
            two years, Neo has easily been the most impactful organization
            I&apos;ve been a part of at the University of Cincinnati. What
            really drew me towards Neo is how tangible the work is. We&apos;re
            helping actual businesses navigate real world challenges. Applying
            what I&apos;ve learned through Neo to make a difference in the
            community has been both humbling and empowering. But to me, Neo is
            more than a consulting club-it&apos;s a community. Some of the most
            driven, thoughtful, and inspiring people I&apos;ve met are from Neo.
            The mentorship and guidance I&apos;ve received from my peers all
            play a huge role in my personal and professional growth. Neo has
            opened doors for me, challenged me, and supported me every step of
            the way.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default TestimonialNahom;
