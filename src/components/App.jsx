import React, { useEffect } from 'react';
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

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
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
    </div>
  );
};
