import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { StyledBtn, StyledItem, StyledList } from './ContactsList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <StyledItem key={contact.id}>
          {contact.name}: {contact.number}
          <StyledBtn onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </StyledBtn>
        </StyledItem>
      ))}
    </StyledList>
  );
}
