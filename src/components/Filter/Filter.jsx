import React from 'react';
import { Input, Label } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputChangeHandler = event => {
    const { value } = event.target;
    dispatch(filterContacts({ value }));
  };

  return (
    <div>
      <Label>
        Find contact by name
        <Input onChange={inputChangeHandler} type="text" name="filter" />
      </Label>
    </div>
  );
};
