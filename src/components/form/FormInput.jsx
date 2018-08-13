import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './styles.scss';

export const FormInput = ({
  input,
  label,
  type,
  meta: { error },
  customValue,
  disabled
}) => (
  <div className="form_field">
    <label className="form_field-label">
      {label}
    </label>
    <div className="form_field-input">
      {label === 'Date' ? (
        <DatePicker
          {...input}
          placeholderText="Date"
          dateForm="MM/DD/YYYY"
          selected={input.value ? moment(input.value, 'MM-DD-YYYY') : null}
        />
      ) : (
        <input
          autoComplete="off"
          {...input}
          placeholder={label}
          type={type}
          value={customValue || input.value}
          disabled={disabled}
        />
      )}
      {error && <span>{error}</span>}
    </div>
  </div>
);
