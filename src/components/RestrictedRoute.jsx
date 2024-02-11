import { CONTACTS_ROUTE } from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from '../redux/auth/auth.selector';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  children,
  navigateTo = CONTACTS_ROUTE,
}) {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? <Navigate to={navigateTo} replace /> : children;
}
