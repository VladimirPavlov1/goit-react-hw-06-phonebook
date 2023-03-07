import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

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
