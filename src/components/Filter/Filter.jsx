import React from 'react';
import PropTypes from 'prop-types';

import { Input, Label } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <div>
      <Label>
        Find contact by name
        <Input onChange={onChange} value={value} type="text" name="filter" />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
