import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { filterContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(filterContacts);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <Item key={contact.id}>
            <Contact {...contact} />
          </Item>
        );
      })}
    </ul>
  );
};
