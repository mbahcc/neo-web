"use client";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function BottomButton() {
  const router = useRouter();
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  const handleClick = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  };

  useEffect(() => {
    const checkConditions = () => {
      const screenWidth = window.innerWidth;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      setIsLargeScreen(screenWidth >= 1024);
      setIsScrollable(documentHeight > windowHeight);
    };

    checkConditions();
    window.addEventListener("resize", checkConditions);
    window.addEventListener("scroll", checkConditions);

    return () => {
      window.removeEventListener("resize", checkConditions);
      window.removeEventListener("scroll", checkConditions);
    };
  }, []);

  const pathname = usePathname();
  if (
    isLargeScreen &&
    !isScrollable &&
    !(pathname === "/" || pathname === "/about-us")
  ) {
    return null;
  }

  if (!isScrollable) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
