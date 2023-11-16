import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import startContacts from '../../startContacts';
import Filter from 'components/filter/Filter';
import { ContactList } from 'components/contactList/ContactList';
import { Toggle } from 'helpers/toggle';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? startContacts
  );
  const [filter, setFilter] = useState('');
  const addNewContact = ({ name, number }) => {
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? toast.warn(`Contact with the name '${name}' already exists.`)
      : createContact({ name, number });
  };

  const createContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prev => [...prev, newContact]);
    toast.success('Contact added');
  };
  useEffect(
    () => localStorage.setItem('contacts', JSON.stringify(contacts)),
    [contacts]
  );

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contactId !== contact.id));
    toast.success(`Contact deleted!`);
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
            <ToastContainer autoClose="1000" />
          </>
        )}
      </Container>
    </>
  );
};
export default App;
