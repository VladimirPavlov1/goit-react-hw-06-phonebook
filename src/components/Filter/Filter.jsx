import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Label } from './Filter.styled';
import { getValueFromChange } from 'redux/filterSlice/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputChangeHandler = event => {
    const { value } = event.target;
   dispatch(getValueFromChange(value))
  };
  
  return (
    <div>
      <Label>
        Find contact by name
        <Input onChange={inputChangeHandler}  type="text" name="filter" />
      </Label>
    </div>
  );
};

