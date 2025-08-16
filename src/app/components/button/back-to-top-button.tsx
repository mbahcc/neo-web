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
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        delay: 0.5,
      }}
    >
      <Button
        variant="primary"
        onClick={handleClick}
        style={{
          fontFamily: "Source Sans 3",
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
          fontWeight: "700",
          backgroundColor: "#a8d4de",
          borderColor: "#9acbd6",
          padding: "0 0.75rem",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#5ca3b2";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#a8d4de";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        Back to the Top
      </Button>
    </motion.div>
  );
}

export default BottomButton;
