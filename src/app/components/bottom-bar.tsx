import BottomButton from "./button/back-to-top-button";

function BottomBar() {
  return (
    <div
      style={{
        height: "50px",
        width: "100vw",
        backgroundColor: "#9acbd6",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "20px",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <a href="https://www.instagram.com/neoinitiative/" target="_blank">
          <img src="icons/instagram-icon.svg" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/company/neo-initiative/"
          target="_blank"
        >
          <img src="icons/linkedin-icon.svg" />{" "}
        </a>
        <a href="mailto:neoinitiativeuc@gmail.com" target="_blank">
          <img src="icons/email-icon.svg" />
        </a>
      </div>
      <div style={{ marginRight: "50px" }}>
        <BottomButton />
      </div>
    </div>
  );
}

export default BottomBar;
