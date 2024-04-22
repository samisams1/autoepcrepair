import React from 'react';
import {useNavigate } from 'react-router-dom';

export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token; // Return true if the user is authenticated, false otherwise
};

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const navigate = useNavigate();

  if (isAuthenticated()) {
    return element as React.ReactElement;
  } else {
    navigate('/', { replace: true });
    return null;
  }
};

export default ProtectedRoute;