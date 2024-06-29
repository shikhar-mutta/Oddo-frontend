import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [helpOption, setHelpOption] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Reset all error messages
    setEmailError('');
    setPasswordError('');
    setRoleError('');
    setError('');

    // Basic form validation
    let isValid = true;
    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    }
    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    }
    if (!role) {
      setRoleError('Role selection is required.');
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Specific email and password for User and Service Provider
    if (role === 'User' && (email !== 'user@gmail.com' || password !== 'user@1234')) {
      setError('Incorrect email or password for User.');
      return;
    }

    if (role === 'ServiceProvider' && (email !== 'sp@gmail.com' || password !== 'sp@1234')) {
      setError('Incorrect email or password for Service Provider.');
      return;
    }

    // Clear any previous errors
    setError('');

    // Navigate based on role
    if (role === 'User') {
      navigate('/user-dashboard');
    } else if (role === 'ServiceProvider' && helpOption) {
      navigate(`/help/${helpOption}`);
    }
  };

  // Function to handle help option selection
  const handleHelpOptionChange = (e) => {
    setHelpOption(e.target.value);
  };

  return (
    <Container fluid className="d-flex justify-content-center align-items-center login-container">
      <Card className="login-card">
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!passwordError}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicRole">
              <Form.Label>Login as</Form.Label>
              <Form.Control
                as="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                isInvalid={!!roleError}
              >
                <option value="">Select Role</option>
                <option value="User">User</option>
                <option value="ServiceProvider">Service Provider</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {roleError}
              </Form.Control.Feedback>
            </Form.Group>

            {role === 'ServiceProvider' && (
              <Form.Group controlId="formBasicHelpOption">
                <Form.Label>Select Help Option</Form.Label>
                <Form.Control
                  as="select"
                  value={helpOption}
                  onChange={handleHelpOptionChange}
                >
                  <option value="">Select Option</option>
                  <option value="fire">Fire</option>
                  <option value="medical">Medical</option>
                  <option value="police">Police</option>
                </Form.Control>
              </Form.Group>
            )}

            {error && <div className="text-danger mb-3">{error}</div>}

            <Button
              variant="primary"
              type="button"
              className="w-100 mt-3"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
