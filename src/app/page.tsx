"use client";
import ColorSchemesExample from "./components/navbar";
import ContactUsButton from "./components/contactusbutton";
import CommunityCard from "./components/communityCard";
import ImpactCard from "./components/impactCard";
import DevelopmentCard from "./components/developmentCard";
import TestimonialChike from "./components/testimonialChike";
import TestimonialNahom from "./components/testimonialNahom";
import ApplyTodayButton from "./components/applytodaybutton";
import BottomBar from "./components/bottomBar";

export default function Home() {
  return (
    <main>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Neo Initiative</title>
      <meta
        name="description"
        content="More than just a club. The Neo Initiative is a student-led organization at UC providing data-driven consulting services to minority-owned local businesses in Cincinnati. Let the data speak."
      />
      <meta
        property="og:title"
        content="Neo Initiative | Student-Led Consulting for Minority-Owned Businesses"
      />
      <meta
        property="og:description"
        content="More than just a club. Student-led organization at UC providing data-driven consulting services to minority-owned local businesses in Cincinnati."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://neoinitiativeuc.com" />
      <meta
        property="og:image"
        content="https://neoinitiativeuc.com/images/logo.jpg"
      />
      <meta
        property="og:image:alt"
        content="Neo Initiative - Student-Led Consulting Organization"
      />
      <meta property="og:site_name" content="Neo Initiative" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Neo Initiative | Student-Led Consulting for Minority-Owned Businesses"
      />
      <meta
        name="twitter:description"
        content="More than just a club. Student-led organization at UC providing data-driven consulting services to minority-owned local businesses in Cincinnati."
      />
      <meta
        name="twitter:image"
        content="https://neoinitiativeuc.com/images/logo.jpg"
      />
      <meta
        name="twitter:image:alt"
        content="Neo Initiative - Student-Led Consulting Organization"
      />
      <meta
        name="keywords"
        content="Neo Initiative, University of Cincinnati, UC consulting, minority business support, student consulting, Cincinnati startups, data-driven solutions, local businesses, community impact, student organization"
      />
      <meta name="author" content="Neo Initiative" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://neoinitiativeuc.com" />
      <meta name="contact" content="neoinitativeuc@gmail.com" />
      <meta
        property="og:see_also"
        content="https://www.linkedin.com/company/neo-initiative/"
      />
      <meta
        property="og:see_also"
        content="https://www.instagram.com/neoinitiative/"
      />

      <ColorSchemesExample />
      <div className="subtitleText">More than just a club.</div>
      <div className="header"> Let the Data Speak. </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <div className="text">
            {" "}
            The neo initative is a student-led organization at the University of
            Cincinnati that provides consulting services to minority owned local
            businesses.
          </div>
        </div>
        {/*<div className="header" style={{ margin: "20px" }}>
        {" "}
        Student or Prospective Client?{" "}
      </div>*/}
        <div className="homePageButtons">
          <ContactUsButton />
          <ApplyTodayButton />
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          width: "100%",
          gap: "40px",
          padding: "50px",
        }}
        className="cardCss"
      >
        <ImpactCard />
        <DevelopmentCard />
        <CommunityCard />
      </div>

      <div
        className="header"
        style={{
          alignSelf: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <span>A peek into</span>{" "}
        <span style={{ color: "#9acbd6" }}> neo:</span>{" "}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
          gap: "50px",
          padding: "50px",
          margin: "10px auto",
        }}
        className="testimonialContainer"
      >
        <TestimonialChike />
        <TestimonialNahom />
      </div>
      <div style={{ marginTop: "150px" }}>
        <BottomBar />
      </div>
    </main>
  );
}
