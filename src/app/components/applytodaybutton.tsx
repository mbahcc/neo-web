"use client"; // For client-side hooks
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";

function ApplyTodayButton() {
  const router = useRouter(); // Next.js navigation hook

  const handleClick = () => {
    router.push("https://colorstackosu.org/index.html");
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
          boxShadow: "var(--shadow-lg)",
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
          e.currentTarget.style.backgroundColor = "#7ab8c4";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Apply Today
      </Button>
    </>
  );
}

export default ApplyTodayButton;
