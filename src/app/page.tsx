import ColorSchemesExample from "./components/navbar";
import ContactUsButton from "./components/contact-us-button";
import CommunityCard from "./components/community-card";
import ImpactCard from "./components/impact-card";
import DevelopmentCard from "./components/development-card";
import TestimonialChike from "./components/testominal-chike-card";
import TestimonialNahom from "./components/testimonial-nahom-card";
import ApplyTodayButton from "./components/application-button";
import BottomBar from "./components/bottom-bar";
import { HomePageMetadata } from "./page-metadata";

export const metadata = HomePageMetadata;

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
            The Neo Initiative is a student-led organization at the University
            of Cincinnati that provides consulting services to minority owned
            local businesses.
          </div>
        </div>
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
