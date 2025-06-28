"use client"; // For client-side hooks
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

function BottomButton() {
  const router = useRouter(); // Next.js navigation hook

  const handleClick = () => {
    router.push(window.location.pathname);
  };

  const pathname = usePathname();
  if (!(pathname == "/" || pathname == "/aboutus")) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }} // Initial Position, invisible and start 20px down
      whileInView={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
      transition={{
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        delay: 0.5,
      }} // Transition length
    >
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
          height: "25px",
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
        Back to the Top
      </Button>
    </motion.div>
  );
}

export default BottomButton;
