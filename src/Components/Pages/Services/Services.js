import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="my-3">
      <h1>Services</h1>
      <Container>
        <Row>
          {services?.map((service) => {
            return (
              <Col className="" key={service.id}>
                <Card className="my-2">
                  <Card.Img variant="top" src={service.imgUrl} />
                  <Card.Body>
                    <Card.Title>{service.services}</Card.Title>
                    <Card.Text>{service.discription}</Card.Text>
                    <Card.Text> BDT - {service.price} Only</Card.Text>
                    <Link to="/checkout">
                      <Button variant="primary">Checkout</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
