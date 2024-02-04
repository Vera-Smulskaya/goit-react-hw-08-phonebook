import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Title from '../Title/Title';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts.reducer';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(state => state.contactsStore.contacts);
  const dispatch = useDispatch();

  const handleFormContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert('This contact is already in the phonebook');
      return;
    }
    const finalContacts = {
      id: nanoid(),
      name,
      phone,
    };
    dispatch(addContact(finalContacts));
    setName('');
    setPhone('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    handleFormContact(name, phone);
  };

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'phone': {
        setPhone(value);
        break;
      }
      default:
        return;
    }
  };

  return (
    <div className={css.formContainer}>
      <Title>Contact Form</Title>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.formLabelText}>Name: </p>
          <input
            type="text"
            className={css.formInput}
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Name Surname"
            required
          ></input>
        </label>
        <label className={css.formLabel}>
          <p className={css.formLabelText}>Number: </p>
          <input
            type="tel"
            className={css.formInput}
            name="phone"
            value={phone}
            onChange={handleInputChange}
            placeholder="Format: xxx-xxx-xx-xx"
            pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
            required
          ></input>
        </label>
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
