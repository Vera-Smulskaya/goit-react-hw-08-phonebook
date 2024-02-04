import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contacts.selector';
import Loader from '../../components/Loader/Loader';

export default function HomePage() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
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
    </>
  );
}
