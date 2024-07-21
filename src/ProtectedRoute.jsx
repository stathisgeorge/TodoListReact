import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;