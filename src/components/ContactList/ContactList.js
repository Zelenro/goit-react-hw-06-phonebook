import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { StyledBtn, StyledItem, StyledList } from './ContactsList.styled';

export default function ContactList({ contacts }) {
  const dispatch = useDispatch();

  return (
    <StyledList>
      {contacts.map(contact => (
        <StyledItem key={contact.id}>
          {contact.name}: {contact.number}
          <StyledBtn onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </StyledBtn>
        </StyledItem>
      ))}
    </StyledList>
  );
}
