import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state =>state.contacts.contacts;

export const getFilter = state => state.contacts.filter;

export const filterContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
