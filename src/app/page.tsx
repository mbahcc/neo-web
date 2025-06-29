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
            buinsesses.
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
