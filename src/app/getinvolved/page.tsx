"use client";
import NavBar from "../components/navbar";
import BottomBar from "../components/bottomBar";
import InputForm from "../components/inputForm";

function GetInvolved() {
  return (
    <main>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Neo Initiative</title>
      <meta
        name="description"
        content="Learn how to get involved with Neo Initiative. Contact us to discover opportunities for clients and explore how we can work together to build community."
      />
      <meta property="og:title" content="Neo Initiative" />
      <meta
        property="og:description"
        content="Learn how to get involved with Neo Initiative. Contact us to discover opportunities for clients and explore collaboration possibilities."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://neoinitiativeuc.com/get-involved"
      />
      <meta
        property="og:image"
        content="https://neoinitiativeuc.com/images/logo.jpg"
      />
      <meta
        property="og:image:alt"
        content="Neo Initiative Contact Information"
      />
      <meta property="og:site_name" content="Neo Initiative" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Neo Initiative" />
      <meta
        name="twitter:description"
        content="Learn how to get involved with Neo Initiative. Contact us to discover opportunities for clients and collaboration."
      />
      <meta
        name="twitter:image"
        content="https://neoinitativeuc.com/images/logo.jpg"
      />
      <meta
        name="twitter:image:alt"
        content="Neo Initiative Contact Information"
      />

      <div
        style={{
          overflowY: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <title>Neo Initiative</title>
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
    </main>
  );
}

export default GetInvolved;
