import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [error, setError] = useState('');
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to logout');
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center'> Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <strong>Email: {currentUser && currentUser.email}</strong>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Button onClick={handleLogout} variant='danger'>
          Logout
        </Button>
      </div>
    </>
  );
};

export default Dashboard;
