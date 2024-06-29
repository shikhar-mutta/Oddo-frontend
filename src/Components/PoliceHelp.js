// src/components/FireHelp.js
import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import './HelpPage.css'; // Ensure you have created this CSS file to style your help page

const FireHelp = () => {
  // Mock data for users related to fire emergencies
  const fireUsersData = [
    {
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      location: '123 Main St, City, State'
    },
    {
      name: 'Emily Davis',
      phone: '987-654-3210',
      email: 'emily.davis@example.com',
      location: '987 Pine St, City, State'
    },
    {
      name: 'Daniel Wilson',
      phone: '654-321-0987',
      email: 'daniel.wilson@example.com',
      location: '654 Cedar St, City, State'
    }
  ];

  return (
    <Container className="help-container-police">
      <Card className="help-card">
        <Card.Body>
          <Card.Title className="text-center">Police Help Page</Card.Title>
          <p>Information of user for Police Help need.</p>
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
