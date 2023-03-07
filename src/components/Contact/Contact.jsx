import PropTypes from 'prop-types';
import { BtnDelete, Title, WrapperContact } from './Contact.styled';

export const Contact = ({ userName, userNumber, userId, onDelete }) => {
  return (
    <WrapperContact>
      <Title>
        {userName} : {userNumber}
      </Title>
      <BtnDelete type="button" onClick={() => onDelete(userId)}>
        delete
      </BtnDelete>
    </WrapperContact>
  );
};

Contact.propTypes = {
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
