import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from 'redux/contactsSlice';

import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { StyledForm } from './App.styled';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const addNewContact = (name, number) => {
    const contactExists = contacts.some(contact => contact.name === name);

    if (contactExists) {
      toast.error('This name is already in contacts.');
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
  };

  const deleteSelectedContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <StyledForm>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addNewContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChangeFilter={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteSelectedContact}
      />
      <Toaster />
    </StyledForm>
  );
}
