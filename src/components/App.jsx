import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacts.reducer';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { refreshThunk } from '../redux/auth/auth.reducer';
import * as ROUTES from '../constants/routes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: <LoginPage />,
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: <RegisterPage />,
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: <ContactsPage />,
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
