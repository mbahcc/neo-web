import ContactUsButton from "./components/button/contact-us-button";
import CommunityCard from "./components/card/community-card";
import ImpactCard from "./components/card/impact-card";
import DevelopmentCard from "./components/card/development-card";
import TestimonialChike from "./components/card/testominal-chike-card";
import TestimonialNahom from "./components/card/testimonial-nahom-card";
import ApplyTodayButton from "./components/button/application-buttons";
import BottomBar from "./components/bottom-bar";
import { HomePageMetadata } from "./page-metadata";
import NavBar from "./components/navbar";

export const metadata = HomePageMetadata;

export default function Home() {
  return (
    <main>
      <NavBar />
      <h2 className="subtitleText">More than just a club.</h2>
      <h1 className="header"> Let the Data Speak. </h1>
      <div className="hero-section">
        <div className="hero-content">
          <p className="text">
            {" "}
            The Neo Initiative is a student-led organization at the University
            of Cincinnati that provides consulting services to minority owned
            local businesses.
          </p>
        </div>
        <div className="home-page-buttons">
          <ContactUsButton />
          <ApplyTodayButton />
        </div>
      </div>
      <div className="home-cards-section">
        <ImpactCard />
        <DevelopmentCard />
        <CommunityCard />
      </div>

      <div className="home-section-header">
        <span>A peek into</span>{" "}
        <span style={{ color: "#9acbd6" }}> Neo:</span>{" "}
      </div>
      <div className="home-testimonial-container">
        <TestimonialChike />
        <TestimonialNahom />
      </div>
      <div style={{ marginTop: "150px" }}>
        <BottomBar />
      </div>
    </main>
  );
}
