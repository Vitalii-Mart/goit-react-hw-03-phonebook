import React from 'react';
import PropTypes from 'prop-types';
import { Items, Caption, Button } from './ElemContactList.styled';

const ElemContactList = ({ id, name, number, onDeleteContact }) => {
  return (
    <Items key={id}>
      <Caption>
        {name}: {number}
      </Caption>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Items>
  );
};

export default ElemContactList;

ElemContactList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
