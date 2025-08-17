"use client";
//inputForm.tsx
import Button from "react-bootstrap/Button";
import { motion } from "motion/react";
import React, { useState } from "react";

function InputForm() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    desc: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          desc: formData.desc,
          company: formData.company,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ company: "", name: "", email: "", desc: "" });
      } else {
        setSubmitStatus("error");
        console.error("Form submission error:", result.message);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Network error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut", type: "spring" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="inputFormContainer">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                gap: "2px",
              }}
            >
              <div className="inputFormText"> Company Name </div>
              <input
                name="company"
                className="formInput"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
            <div
              style={{ flexDirection: "column", display: "flex", gap: "2px" }}
            >
              <div className="inputFormText">Contact Name</div>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="formInput"
              />
            </div>
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                gap: "2px",
              }}
            >
              <div className="inputFormText">Contact Email</div>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="formInput"
              />
            </div>
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                gap: "2px",
              }}
            >
              <div className="inputFormText">Brief Message</div>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                required
                placeholder="Briefly describe your company and potential interest in working with neo"
                className="formTextArea"
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              style={{
                fontFamily: "Source Sans 3",
                fontWeight: "700",
                backgroundColor: "#9acbd6",
                borderColor: isSubmitting ? "#cccccc" : "#9acbd6",
                boxShadow: "var(--shadow-lg)",
                transition: "all 0.2 ease-in-out",
                marginTop: "10px",
                height: "25px",
                padding: "0 0.75rem",
                borderRadius: "0px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#5ca3b2";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.backgroundColor = "#7ab8c4";
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {submitStatus === "success" && (
              <div
                style={{
                  color: "#22c55e",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Form submitted successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div
                style={{
                  color: "#ef4444",
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Error submitting form. Please try again.
              </div>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
}
export default InputForm;
