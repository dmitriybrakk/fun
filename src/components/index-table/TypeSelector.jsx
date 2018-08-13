import React from 'react';

import { SELECTOR_TYPES } from '../../constants/indexData';

export const TypeSelector = ({ value, onChange }) => (
  <select onChange={onChange} value={value}>
    {SELECTOR_TYPES.map(type => (
      <option
        key={type.name}
        value={type.value}
      >
        {type.displayValue}
      </option>
    ))}
  </select>
);
