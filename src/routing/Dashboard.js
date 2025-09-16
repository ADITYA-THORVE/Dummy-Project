import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Auth, logout } from './Auth';

function Dashboard() {
  const navigate = useNavigate();

  if (Auth()) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout(() => navigate('/'));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome! This is a protected page.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Dashboard;