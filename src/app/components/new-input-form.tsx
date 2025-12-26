
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

function NewInputForm() {

    const [formData, setFormData] = useState({
        company: "",
        name: "",
        email: "",
        desc: "",
    });

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

        try {
            const response = await fetch("/api/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log("Form submitted successfully");
                setFormData({ company: "", name: "", email: "", desc: "" });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="inputFormContainer">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 input-form-width"
                    controlId="formCompanyName">
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" name="company" placeholder="Enter company name" value={formData.company} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3 input-form-width"
                    controlId="formContactName">
                    <Form.Label>Contact Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter contact name" value={formData.name} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3 input-form-width"
                    controlId="formCompanyEmail">
                    <Form.Label>Company Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter company email" value={formData.email} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3 input-form-width"
                    controlId="formCompanyMessage">
                    <Form.Label>Brief Message</Form.Label>
                    <Form.Control type="text" name="desc"
                        placeholder="Briefly describe your company and interest in working with Neo" as="textarea" rows={3} value={formData.desc} onChange={handleChange} />
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="primary" type="submit" style={{
                        fontFamily: "Source Sans 3",
                        fontWeight: "700",
                        backgroundColor: "#9acbd6",
                        borderColor: "#9acbd6",
                        boxShadow:
                            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                        transition: "all 0.2 ease-in-out",
                        height: "32px",
                        padding: "0 0.75rem",
                        borderRadius: "0px",
                    }}>
                        Submit
                    </Button>
                </div>


            </Form>
        </div>

    )

}

export default NewInputForm;