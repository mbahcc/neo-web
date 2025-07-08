"use client";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottomBar";
import InputForm from "../components/inputForm";

function GetInvolved() {
  return (
    <div
      style={{
        overflowY: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <title>Neo Initative | Contact Us</title>
      <NavBar />
      <div
        style={{
          fontSize: "var(--text-lg)",
          color: "#6b6b6b",
          fontFamily: "Source Sans 3",
          fontWeight: "400",
          maxWidth: "950px",
          wordWrap: "break-word",
          position: "absolute",
          top: "175px",
          textAlign: "left",
          display: "flex",
          alignSelf: "center",
        }}
      >
        Learn how to get involved for clients.
      </div>
      <div
        style={{
          alignSelf: "center",
          marginTop: "175px",
        }}
      >
        <InputForm />
      </div>
      <div style={{ marginTop: "50px" }}>
        <BottomBar />
      </div>
    </div>
  );
}

export default GetInvolved;
