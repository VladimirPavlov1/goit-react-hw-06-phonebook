import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';

import { Contacts, Container } from './App.styled';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <Container>
      <Section title="Phonebook">
        <FormContacts />
      </Section>

      <Contacts>Contacts</Contacts>
      <Filter />
      {contacts.length ? <ContactList /> : <h2>No such contact found</h2>}
    </Container>
  );
};
