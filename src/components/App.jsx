
import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector} from 'react-redux';

import { Contacts, Container } from './App.styled';
import { getContacts } from 'redux/contactsSlice/contactsSlice';
import { getFilter } from 'redux/filterSlice/filterSlice';



export const App = () => {
  



  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter)
  


  const getContactsFilter = () => {
    if(filter===''){return contacts}
    else{const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter))}
    
  };

 




  const visibleContacts = getContactsFilter();

  return (
    <Container>
      <Section title="Phonebook">
        <FormContacts/>
      </Section>

      <Contacts>Contacts</Contacts>
      <Filter />
      {visibleContacts.length ? (
        <ContactList contacts={visibleContacts}  />
      ) : (
        <h2>No such contact found</h2>
      )}
    </Container>
  );
};
