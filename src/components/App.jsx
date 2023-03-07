import { useState, useEffect } from 'react';
import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Contacts, Container } from './App.styled';

export const App = () => {
  const startContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(() =>JSON.parse(window.localStorage.getItem('contacts'))??startContacts);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const getContactsFilter = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const addContacts = (name, number) => {
    if (
      contacts.find(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      setContacts(contacts => [...contacts, { name, number, id: nanoid() }]);
    }
  };

  const inputChangeHandler = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const deleteContact = contactId => {
    setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  };

  const visibleContacts = getContactsFilter();

  return (
    <Container>
      <Section title="Phonebook">
        <FormContacts onSubmit={addContacts} />
      </Section>

      <Contacts>Contacts</Contacts>
      <Filter onChange={inputChangeHandler} value={filter} />
      {visibleContacts.length ? (
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      ) : (
        <h2>No such contact found</h2>
      )}
    </Container>
  );
};
