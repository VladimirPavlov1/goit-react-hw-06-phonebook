import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { Item } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ name, id, number }) => {
        return (
          <Item key={id}>
            <Contact
              userName={name}
              userId={id}
              userNumber={number}
              onDelete={onDelete}
            />
          </Item>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
