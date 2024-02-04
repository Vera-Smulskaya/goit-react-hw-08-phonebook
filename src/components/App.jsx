import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
import Title from './Title/Title';
import { fetchContacts } from '../redux/contacts/contacts.reducer';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../redux/contacts/contacts.selector';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/Contacts'));

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Section>
          <Title>Phonebook</Title>
          <ContactForm />
        </Section>
        <Section>
          <Filter />
          {error !== null && <p className="textError">{error}</p>}
          {isLoading && <Loader />}
          {contacts.length !== 0 && <ContactList />}
        </Section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
