import BottomButton from "./bottomButton";

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
          <img src="instagram.svg" />{" "}
        </a>
        <a
          href="https://www.linkedin.com/company/neo-initiative/"
          target="_blank"
        >
          <img src="linkedin.svg" />{" "}
        </a>
        <a href="mailto:neoinitiativeuc@gmail.com" target="_blank">
          <img src="envelope-at.svg" />
        </a>
      </div>
      <div style={{ marginRight: "50px" }}>
        <BottomButton />
      </div>
    </div>
  );
}

export default BottomBar;
