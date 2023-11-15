import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Button, Form, Label } from './ContactForm.styled';

export const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </Label>
      <Label>
        Tel
        <input
          type="tel"
          name="number"
          value={number}
          pattern= "\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};


ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};
