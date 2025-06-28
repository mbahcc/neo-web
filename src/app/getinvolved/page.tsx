"use client";
import NavBar from "../components/navbar";
import { motion } from "motion/react";
import ApplicationButton from "../components/applicationButton";
import ClientApplicationButton from "../components/clientApplicationButton";
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
          position: "absolute",
          marginTop: "275px",
        }}
      >
        <InputForm />
      </div>

      <BottomBar />
    </div>
  );
}

export default GetInvolved;
