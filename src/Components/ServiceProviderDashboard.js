// src/components/ServiceProviderDashboard.js
import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import './Dashboard.css';

// Mock data for users
const mockUsers = [
  {
    name: 'John Doe',
    contactDetails: '123-456-7890',
    email: 'john.doe@example.com',
    location: 'New York, USA',
  },
  {
    name: 'Jane Smith',
    contactDetails: '987-654-3210',
    email: 'jane.smith@example.com',
    location: 'Los Angeles, USA',
  },
  // Add more mock users as needed
];

const ServiceProviderDashboard = () => {
  return (
    <Container className="dashboard-container-sp">
      <Card className="dashboard-card">
        <Card.Body>
          <Card.Title className="text-center">Service Provider Dashboard</Card.Title>
          <Card.Text>
            Welcome to the Service Provider Dashboard! Here are the users:
          </Card.Text>
          <ListGroup>
            {mockUsers.map((user, index) => (
              <ListGroup.Item key={index}>
                <strong>Name:</strong> {user.name} <br />
                <strong>Contact Details:</strong> {user.contactDetails} <br />
                <strong>Email:</strong> {user.email} <br />
                <strong>Location:</strong> {user.location} <br />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ServiceProviderDashboard;
