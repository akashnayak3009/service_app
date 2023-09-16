import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  formGroup: {
    display: "flex",
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    margin: "10px",
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    color: "#fff",
    cursor: "pointer",
  },
};

const Booking = () => {
  const [formData, setFormData] = useState({
    service:"",
    username: "",
    email: "",
    place: "",
    personalId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/api/bookings", formData);
      console.log("Booking data submitted:", response.data);

      toast.success("Booking data submitted successfully");
    } catch (error) {
      console.error("Error submitting booking data:", error);

      toast.error("Error submitting booking data");
    }
  };
  

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
       <ToastContainer />
      <h2
        style={{
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Booking Form
      </h2>
      <Form onSubmit={handleSubmit}>
      <Form.Group style={styles.formGroup}>
          <Form.Label style={styles.label}>Service:</Form.Label>
          <Form.Control
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder="Enter your service"
            style={styles.input}
          />
        </Form.Group>
        <Form.Group style={styles.formGroup}>
          <Form.Label style={styles.label}>Name:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your name"
            style={styles.input}
          />
        </Form.Group>
        <Form.Group style={styles.formGroup}>
          <Form.Label style={styles.label}>Email:</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            style={styles.input}
          />
        </Form.Group>
        <Form.Group style={styles.formGroup}>
          <Form.Label style={styles.label}>Place:</Form.Label>
          <Form.Control
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Enter your place"
            style={styles.input}
          />
        </Form.Group>
        <Form.Group style={styles.formGroup}>
          <Form.Label style={styles.label}>Personal Id:</Form.Label>
          <Form.Control
            type="number"
            name="personalId"
            value={formData.personalId}
            onChange={handleChange}
            placeholder="Enter your Personal Number"
            style={styles.input}
          />
        </Form.Group>
        <Button type="submit" variant="primary" style={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Booking;
