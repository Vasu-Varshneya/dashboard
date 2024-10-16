// ProtectedRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming you have AuthContext
import Dashboard from './dashboard';
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Dashboard/> : <Navigate to="/login" />;
};

export default ProtectedRoute;

