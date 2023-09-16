import React from "react";
import Booking from "../components/Booking";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ServicePage = () => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <div style={bookingContainerStyle}>
                        <h2>Book Our Service</h2>
                        <Booking />
                    </div>
                </Col>
                <Col md={6}>
                    <div style={detailsContainerStyle}>
                        <h2>Service Details</h2>
                        <Link
                            style={{
                                textDecoration: "none",
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                borderRadius: "4px",
                                fontWeight: "bold",
                            }}
                            to="/service"
                        >
                            Click
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

const bookingContainerStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const detailsContainerStyle = {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

export default ServicePage;
