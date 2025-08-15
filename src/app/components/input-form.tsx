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
          company: formData.company, // Add company field
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ company: "", name: "", email: "", desc: "" }); // Reset form
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
      initial={{ opacity: 0, y: 40 }} // Initial Position, invisible and start 20px down
      animate={{ opacity: 1, y: 0 }} // Slides up to being visible and its normal position
      transition={{ duration: 1.5, ease: "easeOut", type: "spring" }} // Transition length
    >
      <form onSubmit={handleSubmit}>
        <div
          className="inputFormContainer" /*"w-300 h-140 pt-5 pr-5 pl-5 pb-3 border border-grey-200 bg-gray-50 shadow-xl rounded-md"*/
        >
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
                className="formInput" /*"w-280 ht-12 pt-2 pb-2 border border-gray-400 rounded text-xl pl-2 pr-2"*/
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
                className="formInput" /*"w-280 ht-12 pt-2 pb-2 border border-gray-400 m-64 rounded text-xl pl-2 pr-2"*/
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
                className="formInput" /*"w-280 ht-12 pt-2 border border-gray-400 m-64 rounded text-xl pl-2 pr-2 pb-2"*/
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
                className="formTextArea" /*"w-280 h-36  pt-3 border border-gray-400 m-64 rounded text-xl pl-2 pr-2"*/
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
              // Hover/focus effects
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
