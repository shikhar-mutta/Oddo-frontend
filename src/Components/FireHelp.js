// src/components/FireHelp.js
import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import './HelpPage.css'; // Ensure you have created this CSS file to style your help page

const FireHelp = () => {
  // Mock data for users related to fire emergencies
  const fireUsersData = [
    {
      "name": "Alice Johnson",
      "phone": "555-123-4567",
      "email": "alice.johnson@example.com",
      "location": "456 Oak St, Town, Province"
    },
    {
      "name": "Emma Brown",
      "phone": "555-987-6543",
      "email": "emma.brown@example.com",
      "location": "789 Elm St, City, State"
    },
    {
      "name": "Michael Brown",
      "phone": "555-987-6543",
      "email": "michael.brown@example.com",
      "location": "789 Elm St, City, State"
    }
  ];

  return (
    <Container className="help-container-fire">
      <Card className="help-card">
        <Card.Body>
          <Card.Title className="text-center">Fire Help Page</Card.Title>
          <p>Information of user for fire emergencies need.</p>
          <hr />
          <div className="table-responsive">
            <Table striped bordered hover className="full-width-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {fireUsersData.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.location}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FireHelp;
