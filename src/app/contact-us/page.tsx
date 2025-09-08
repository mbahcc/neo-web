"use client";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottom-bar";
import InputForm from "../components/input-form";

function ContactUs() {
  return (
    <main>
      <div
        style={{
          overflowY: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <NavBar />
        <h1 className="contact-us-subtitle-text">
          Learn how to get involved for clients.
        </h1>
        <div
          style={{
            alignSelf: "center",
            marginTop: "125px",
          }}
        >
          <InputForm />
        </div>
        <div className="mobile-margin">
          <BottomBar />
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
