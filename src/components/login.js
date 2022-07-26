import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      navigate('/');
    } catch (e) {
      console.log(e);
      setError('Failed sign in');
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <h2 className='text-center mb-4'>Login</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoComplete='current-email'
                type='email'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoComplete='current-password'
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button type='submit' disabled={loading}>
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Need an account? <Link to='/signup'>Sign up</Link>
      </div>
    </>
  );
};

export default Login;
