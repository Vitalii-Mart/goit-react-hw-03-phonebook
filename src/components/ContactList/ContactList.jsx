import React from 'react';
import PropTypes from 'prop-types';
import { List, Total } from './ContactList.styled';

import ElemContactList from 'components/ElemContactList';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      <Total>Total contacts: {contacts.length}</Total>
      {contacts.map(({ id, name, number }) => (
        <ElemContactList
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
