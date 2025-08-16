"use client"; // For client-side hooks
import Button from "react-bootstrap/Button";

function ApplyTodayButton() {
  const handleClick = () => {
    window.open("https://forms.office.com/r/8suBvDvY2y", "_blank");
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleClick} // Handles the on click event, i.e calls Handleclick
        style={{
          fontFamily: "Source Sans 3",
          fontWeight: "700",
          backgroundColor: "#9acbd6",
          borderColor: "#9acbd6",
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
          transition: "all 0.2 ease-in-out",
          height: "44px",
          padding: "0 0.75rem",
          borderRadius: "0px",
        }}
        // Hover/focus effects
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#5ca3b2";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#9acbd6";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Apply Today
      </Button>
    </>
  );
}

export default ApplyTodayButton;
