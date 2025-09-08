"use client";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ApplyTodayButton() {

 const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
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
      
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style ={{fontWeight: 700}}className="offcanvas-text">Neo Initiative - Fall 2025 Cohort Applications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-text">
          Sorry, our applications are currently closed for the Fall 2025 semester. Check back later for updates.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ApplyTodayButton;
