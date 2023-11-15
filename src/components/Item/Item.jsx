import PropTypes from 'prop-types';
import { SlUserUnfollow } from "react-icons/sl";
import { Delete } from 'components/contactList/ContactList.styled';

export const ItemContact = ({
  currentContact: { id, name, number },
  deleteContact,
}) => (
  <>
    <p>
      <span>{name}</span>: <span>{number}</span>
    </p>
    <Delete onClick={() => deleteContact(id)}><SlUserUnfollow /></Delete>
  </>
);

ItemContact.propTypes = {
  currentContact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
