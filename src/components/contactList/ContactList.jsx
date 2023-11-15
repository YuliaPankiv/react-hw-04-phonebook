import PropTypes from 'prop-types';
import { ItemContact } from 'components/Item/Item';
import { Item, List } from './ContactList.styled';

export const ContactList = ({ visibleContacts, deleteContact }) => {
  return (<>   
  <List>
      {visibleContacts.map(currentContact => (
        <Item key={currentContact.id}>
          <ItemContact
            deleteContact={deleteContact}
            currentContact={currentContact}
          />
        </Item>
      ))}
    </List>
</>
  );
};
ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
