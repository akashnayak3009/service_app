import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import './ServiceList.css';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/services")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <Container className="service-list-container">
      <h2 className="service-list-header">Service List</h2>
      <Row>
        <Col sm={4}>
          {services.length === 0 ? (
            <p className="text-center no-data">No data found</p>
          ) : (
            <ListGroup>
              {services.map((service) => (
                <Button
                  key={service._id}
                  onClick={() => handleServiceClick(service)}
                  variant="light"
                  className="service-button"
                >
                  {service.service}
                </Button>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col sm={8}>
          {selectedService && (
            <div>
              <h3 className="selected-details-header">Selected Person Details:</h3>
              <p><strong>Name:</strong> {selectedService.username}</p>
              <p><strong>Email:</strong> {selectedService.email}</p>
              <p><strong>Place:</strong> {selectedService.place}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceList;
