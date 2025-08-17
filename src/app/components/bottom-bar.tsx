import BottomButton from "./button/back-to-top-button";

function BottomBar() {
  return (
    <div className="bottom-bar-container">
      <div className="bottom-bar-format">
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
