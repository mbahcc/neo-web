"use client";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


/* To-Do: Modulaize this component into a singular component for the Offcanvas component, and each button into their own component. Create a utility class to be used for all applicatio buttons */
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
          <Offcanvas.Title style={{ fontWeight: 700 }} className="offcanvas-text">Neo Initiative - Spring 2026 Cohort Applications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas-text">
          <div style={{ display: "flex", justifyContent: "flex-start", gap: "1rem", flexDirection: "column" }}>
            <Button
              variant="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOSHEL7fJgjA9F6F31b8Ysp6emFR6FmMrj7sKvQhnyxVnqcA/viewform"
              target="_blank"
              rel="noopener noreferrer"
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
              Fall '26 Social Media/Graphic Design Application
            </Button>
            <Button
              variant="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZyEmCznc9yhCXsr3LYwk2qmN06RbhWiurrO7Sa_7IqVqXHw/viewform"
              target="_blank"
              rel="noopener noreferrer"
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
              Fall '26 Secretary Application
            </Button>
            <Button
              variant="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeI4mJg0dCEWlbL8RpHfkgXSOeFuIEoamm72mli7h9GgKJMLQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
              Fall '26 Recruitment and Retention Application
            </Button>

            <Button
              variant="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLScus1pmTKxDGqV19va9kORFQupDweCUJ6-SLc9o7qErXS_Hcg/viewform"
              target="_blank"
              rel="noopener noreferrer"
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
              Fall '26 Deputy Director of Project Management Application
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ApplyTodayButton;
