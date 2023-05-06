import React, { useState, useRef } from "react";
import "./contacts.css";

const Contacts = () => {
  const formRef = useRef(null);
  // State variables to store the form data and error messages
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handler function to update the form data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validation function to check for errors
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handler function to submit the form data to local storage
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
    formRef.current.reset();
  };

  return (
    <>
    <div className="main"></div>
      <div className="form-section">
        <h2>Contact Me</h2>
        <p>
          If you have an application you are interested in developing, a feature{" "}
          <br />
          that you need built or a project that needs coding. I’d love to help
          with it
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="form">
          <div className="contact-title">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {formErrors.name && <span>{formErrors.name}</span>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {formErrors.email && <span>{formErrors.email}</span>}
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            {formErrors.message && <span>{formErrors.message}</span>}
          </div>
          <button type="submit" className="form-btn">
            Get in touch
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
