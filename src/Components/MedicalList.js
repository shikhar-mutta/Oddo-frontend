// src/components/MedicalList.js

import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { hospitals } from '../mockData'; // Import mock data
import './List.css'; // Optional: Add styling for list items
import './Dashboard.css';

const MedicalList = () => {
  return (
    <Container className="dashboard-container">
      <Container className="list-container-medical">
        <Link to="/user-dashboard">
          <Button variant="secondary" className="mb-3">Back</Button>
        </Link>
        <h2 className="text-center">Medical Centers</h2>
        <ListGroup className="mt-3">
          {hospitals.map((hospital, index) => (
            <ListGroup.Item key={index}>
              <strong>Name:</strong> {hospital.name}<br />
              <strong>Asset Type:</strong> {hospital.assetType}<br />
              <strong>Contact:</strong> {hospital.contact}<br />
              <strong>Address:</strong> {hospital.address}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </Container>
  );
};

export default MedicalList;
