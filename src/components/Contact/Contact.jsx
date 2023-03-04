import PropTypes from 'prop-types';
import { BtnDelete, Title, WrapperContact } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice/contactsSlice';

export const Contact = ({ userName, userNumber, userId }) => {
  const dispatch = useDispatch();

  return (
    <WrapperContact>
      <Title>
        {userName} : {userNumber}
      </Title>
      <BtnDelete type="button" onClick={() => dispatch(deleteContacts(userId))}>
        delete
      </BtnDelete>
    </WrapperContact>
  );
};

Contact.propTypes = {
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
