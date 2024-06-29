// src/components/FireList.js

import React from 'react';
import { Container, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { fireStations } from '../mockData'; // Import mock data
import './List.css'; // Optional: Add styling for list items
import './Dashboard.css';

const FireList = () => {
  return (
    <Container className="dashboard-container">
      <Container className="list-container-fire">
        <Link to="/user-dashboard">
          <Button variant="secondary" className="mb-3">Back</Button>
        </Link>
        <h2 className="text-center">Fire Stations</h2>
        <ListGroup className="mt-3">
          {fireStations.map((station, index) => (
            <ListGroup.Item key={index}>
              <strong>Name:</strong> {station.name}<br />
              <strong>Asset Type:</strong> {station.assetType}<br />
              <strong>Contact:</strong> {station.contact}<br />
              <strong>Address:</strong> {station.address}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </Container>
  );
};

export default FireList;
