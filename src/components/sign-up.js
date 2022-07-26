import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { createUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await createUser(email, password);
    } catch (e) {
      console.log(e);
      setError('Failed to create an account');
    }
    setLoading(false);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <h2 className='text-center mb-4'>Sign Up</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoComplete='new-email'
                type='email'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoComplete='new-password'
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='formBasicPasswordConfirmation'
            >
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                autoComplete='of'
                type='password'
                placeholder='Password'
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Form.Group>
            <Button type='submit' disabled={loading}>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/login'>Log In</Link>
      </div>
    </>
  );
};

export default SignUp;
