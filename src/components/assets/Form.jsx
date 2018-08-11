import React, { Component } from 'react';
import {
  reduxForm,
  Form,
  Field,
  SubmissionError
} from 'redux-form';
import _ from 'lodash';

import { FORM_FIELDS } from '../../constants';

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

class AssetFormComponent extends Component {
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyPressed);
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
      this.handleSubmit();
    }
  };

  handleClose = () => {
    this.props.actions.closeForm();
    this.props.reset();
  };

  handleSubmit = (values) => {
    const {
      actions, assetToEdit
    } = this.props;

    if (FORM_FIELDS.every(field => _.has(values, field))) {
      const {
        name,
        date,
        quantity,
        price,
        comission,
        currentPrice,
      } = values;

      if (!assetToEdit) {
        actions.addAsset(uuidv1(), values);
      } else {
        actions.updateAsset(assetToEdit, values);
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
      assetToEdit,
      handleSubmit,
      error
    } = this.props;

    if (!isFormOpen) {
      return null;
    }

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
            {error && <strong>{error}</strong>}
            <button type="button" className="button_close" onClick={this.handleClose}>Cancel</button>
            <button type="submit" className="button_submit">{assetToEdit ? 'Save' : 'Create'}</button>
          </Form>
        </div>
      </div>
    );
  }
}

export const AssetForm = reduxForm({
  form: 'asset'
})(AssetFormComponent);
