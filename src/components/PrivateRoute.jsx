import { LOGIN_ROUTE } from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from '../redux/auth/auth.selector';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, navigateTo = LOGIN_ROUTE }) {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? children : <Navigate to={navigateTo} replace />;
}
