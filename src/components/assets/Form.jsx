import React, { Component } from 'react';
import {
  reduxForm,
  Form,
  Field,
  SubmissionError
} from 'redux-form';
import _ from 'lodash';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { FORM_FIELDS } from '../../constants';
import { toPrecision } from '../../utils/asset';

import './styles.scss';

const uuidv1 = require('uuid/v1');

const renderField = ({
  input, label, type, meta: { error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {error && <span>{error}</span>}
    </div>
  </div>
);

const renderDatePicker = ({ input, meta: { error } }) => (
  <div>
    <DatePicker {...input} placeholderText="Date" dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
    {error && <span>{error}</span>}
  </div>
);

export class AssetFormComponent extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyPressed);
  }

  componentDidUpdate() {
    const {
      isFormOpen,
      isInitialized,
      actions,
      initialValues
    } = this.props;

    if (isFormOpen && !isInitialized) {
      actions.setInitialValues(initialValues);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyPressed);
  }

  onKeyPressed = (e) => {
    if (e.key === 'Escape') {
      this.handleClose();
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      this.props.handleSubmit(this.handleSubmit)();
    }
  };

  handleClose = () => {
    this.props.actions.closeForm();
    this.props.reset();
  };

  handleSubmit = (values) => {
    const {
      actions, assetId
    } = this.props;

    if (FORM_FIELDS.every(field => _.has(values, field))) {
      const {
        price,
        comission,
        currentPrice,
      } = values;

      const submitValues = {
        ...values,
        price: toPrecision(price, 5),
        comission: toPrecision(comission, 5),
        currentPrice: toPrecision(currentPrice, 5)
      };

      if (!assetId) {
        actions.addAsset(uuidv1(), submitValues);
      } else {
        actions.updateAsset(assetId, submitValues);
      }

      this.handleClose();
    } else {
      FORM_FIELDS.forEach((field) => {
        if (!_.has(values, field)) {
          throw new SubmissionError({
            [field]: 'This field is required',
            _error: 'Please fill in blank fields'
          });
        }
      });
    }
  };

  render() {
    const {
      isFormOpen,
      assetId,
      handleSubmit,
      error,
      values
    } = this.props;

    if (!isFormOpen) {
      return null;
    }

    const sum = values && values.quantity && values.price && (values.quantity * parseFloat(values.price)).toString();

    return (
      <div className="form-wrapper">
        <div className="form">
          <Form onSubmit={handleSubmit(this.handleSubmit)}>
            <Field
              name="name"
              type="text"
              component={renderField}
              label="Name"
            />
            <Field
              name="date"
              component={renderDatePicker}
              label="Date"
              type="text"
            />
            <Field
              name="quantity"
              component={renderField}
              parse={value => Number(value)}
              label="Quantity"
              type="number"
            />
            <Field
              name="price"
              component={renderField}
              label="Price"
              type="text"
            />
            <input type="text" value={sum} readOnly />
            <Field
              name="comission"
              component={renderField}
              label="Comission"
              type="text"
            />
            <Field
              name="currentPrice"
              component={renderField}
              label="Current Price"
              type="text"
            />
            {error && <strong>{error}</strong>}
            <button type="button" className="button_close" onClick={this.handleClose}>Cancel</button>
            <button type="submit" className="button_submit">{assetId ? 'Save' : 'Create'}</button>
          </Form>
        </div>
      </div>
    );
  }
}

export const AssetForm = reduxForm({
  form: 'asset'
})(AssetFormComponent);
