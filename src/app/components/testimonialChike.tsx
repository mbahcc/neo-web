"use client";
import Card from "react-bootstrap/Card";
import { motion, delay } from "motion/react";
import { useMediaQuery } from "react-responsive";

/* This is a card commponent from react bootstrap. This card will house a testimonial from Collins Mbah
about the impact of the neo initative on the community & his career

Formatting: 

font: Source San 3
font weight: 400 
background color: white w/ border shadows
text color: black

 */

function TestimonialChike() {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });

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
          width: "36rem",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        }}
        className="mb-2"
      >
        <Card.Header>
          From Collins Mbah,{" "}
          <div style={{ color: "#9acbd6" }}> President</div>{" "}
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            The neo initiative was one of the first few clubs I had joined when
            I had initially enrolled at the University of Cincinnati as a
            freshman. Neo grew my analytical and problem-solving skills, giving
            me a real opportunity to apply many of the concepts I was learning
            in the classroom on real-life businesses. The beauty of it was that
            you were able to see your efforts result in tangible benefits for
            your clients, who themselves deal with an increasingly complex
            socioeconomic business climate. I quickly learned that neo was more
            than just a consulting organization – it was a community. Many of my
            closest friends and colleagues have been through neo. It became a
            space for students of all disciplines, determined by their desire to
            uplift minority-owned businesses, to grow and develop together.
            Because of this community aspect, the neo initiative retains ties to
            some of the largest and most prominent companies and organizations
            in the world. Some of these alumni ties and experience helped me
            personally secure internships at Google, GE Appliances, and Kroger.
            I have been blessed to be apart of such a powerful community, and
            even more appreciative of those who have believed in my ability to
            serve as President.
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default TestimonialChike;
