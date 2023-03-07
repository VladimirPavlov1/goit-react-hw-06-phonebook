import PropTypes from 'prop-types';
import { BtnDelete, Title, WrapperContact } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice/contactsSlice';

export const Contact = ({ name, id, number }) => {
  const dispatch = useDispatch();

  return (
    <WrapperContact>
      <Title>
        {name} : {number}
      </Title>
      <BtnDelete type="button" onClick={() => dispatch(deleteContacts({ id }))}>
        delete
      </BtnDelete>
    </WrapperContact>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
