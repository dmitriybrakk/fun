import React, { Component } from 'react';
import {
  reduxForm,
  Form,
  Field,
  SubmissionError
} from 'redux-form';
import _ from 'lodash';

import 'react-datepicker/dist/react-datepicker.css';

import { FORM_FIELDS, FIELDS_NAMES } from '../../constants/index';

import { toPrecision } from '../../utils/asset';

import './styles.scss';

const uuidv1 = require('uuid/v1');

export class AssetFormComponent extends Component {
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
      this.props.handleSubmit(this.handleSubmit)();
    }
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleSubmit = (values) => {
    const {
      onAddAsset,
      onUpdateAsset,
      assetId
    } = this.props;

    if (FIELDS_NAMES.every(field => _.has(values, field))) {
      const {
        price,
        comission,
        currentPrice,
      } = values;

      const submitValues = {
        ...values,
        price: toPrecision(price, 4),
        comission: toPrecision(comission, 4),
        currentPrice: toPrecision(currentPrice, 4)
      };

      if (!assetId) {
        onAddAsset({ id: uuidv1(), ...submitValues });
      } else {
        onUpdateAsset({ id: assetId, ...submitValues });
      }

      this.handleClose();
    } else {
      FIELDS_NAMES.forEach((field) => {
        if (!_.has(values, field)) {
          throw new SubmissionError({
            [field]: 'This field is required',
            _error: 'Please fill in blank fields'
          });
        }
      });
    }
  };

  renderFields = () => {
    const { quantity, price } = this.props;
    const total = (quantity && price && (quantity * parseFloat(price)).toString()) || '';

    return FORM_FIELDS.map((field) => {
      const { name } = field;
      const isTotalField = name === 'total';
      const totalValue = (isTotalField && toPrecision(total, 4)) || undefined;

      return (
        <Field
          key={name}
          {...field}
          customValue={totalValue}
          disabled={isTotalField}
        />
      );
    });
  };

  renderButtons = () => (
    <div className="buttons">
      <button
        type="button"
        className="form-button"
        onClick={this.handleClose}
      >
        Close
      </button>
      <button
        type="submit"
        className="form-button"
      >
        {this.props.assetId ? 'Save' : 'Create'}
      </button>
    </div>
  );

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <div className="form-wrapper">
        <div className="form">
          <Form onSubmit={handleSubmit(this.handleSubmit)}>
            {this.renderFields()}
            {error && <strong>{error}</strong>}
            {this.renderButtons()}
          </Form>
        </div>
      </div>
    );
  }
}

export const AssetForm = reduxForm({
  form: 'asset'
})(AssetFormComponent);
