// src/components/UserDashboard.js

import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Dashboard.css';

const UserDashboard = () => {
  return (
    <Container className="dashboard-container">
      <Card className="dashboard-card">
        <Card.Body>
          <Card.Title className="text-center">Choose Category for Help</Card.Title>
          <Link to="/medical-list">
            <Button variant="primary" className="w-100 mt-3" style={{ backgroundColor: '#f3a7a7', color: '#ffffff' }}>Medical</Button>
          </Link>
          <Link to="/police-list">
            <Button variant="primary" className="w-100 mt-3" style={{ backgroundColor: '#79aff0', color: '#ffffff' }}>Police</Button>
          </Link>
          <Link to="/fire-list">
            <Button variant="primary" className="w-100 mt-3" style={{ backgroundColor: '#f78222', color: '#ffffff' }}>Fire</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserDashboard;
