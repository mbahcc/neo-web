"use client";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottom-bar";
import NewInputForm from "../components/new-input-form";

function ContactUs() {
  return (
    <main>
      <div
        style={{
          overflowX: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <NavBar />
        <h1 className="contact-us-subtitle-text">
          Learn how to get involved for clients.
        </h1>
        <div className="input-form-spacing"
          style={{
            alignSelf: "center",
          }}
        >
          <NewInputForm />
        </div>
        <div className="mobile-margin">
          <BottomBar />
        </div>
      </div>
    </main>
  );
}

export default ContactUs;
