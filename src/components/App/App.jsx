import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import startContacts from '../../startContacts';
import Filter from 'components/filter/Filter';
import { ContactList } from 'components/contactList/ContactList';
import { Toggle } from 'helpers/toggle';
import { ContactForm } from 'components/ContactForm/ContactForm';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? startContacts
  );
  const [filter, setFilter] = useState('');
  const addNewContact = ({ name, number }) => {
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts list`)
      : createContact({ name, number });
  };

  const createContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prev => [...prev, newContact]);
  };
  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contactId !== contact.id));
  };

  const handleChangeFilter = e => setFilter(e.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <>

      <Container>
        <h1>Phone book</h1>

        <Toggle children={<ContactForm addNewContact={addNewContact} />} />
        {contacts.length > 0 && (
          <>
            <Filter filterValue={filter} onChange={handleChangeFilter} />
            <ContactList
              visibleContacts={visibleContacts}
              deleteContact={deleteContact}
            />
          </>
        )}
      </Container>
    </>
  );
};
export default App;
