// src/components/Dashboard.js
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Choose Category for Help</h2>
      <Row>
        <Col md={4}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Medical</Card.Title>
              <Card.Text>Access medical services and resources.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Police</Card.Title>
              <Card.Text>Get in touch with the police department.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 shadow">
            <Card.Body>
              <Card.Title>Fire</Card.Title>
              <Card.Text>Reach out to fire emergency services.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
