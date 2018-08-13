import React, { Component } from 'react';
import {
  reduxForm,
  Form,
  Field,
  SubmissionError
} from 'redux-form';
import _ from 'lodash';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { FORM_FIELDS, FIELDS_NAMES } from '../../constants/index';

import { toPrecision, getTotal } from '../../utils/asset';

import { FormInput } from './FormInput';
import './styles.scss';

const uuidv1 = require('uuid/v1');

export class AssetFormComponent extends Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSubmit = (values) => {
    const {
      onAddAsset,
      onUpdateAsset,
      assetId
    } = this.props;

    if (FIELDS_NAMES.every(field => _.has(values, field.name))) {
      const {
        price,
        comission,
        currentPrice,
        date,
        quantity
      } = values;

      const submitValues = {
        ...values,
        price: toPrecision(price, 4),
        comission: toPrecision(comission, 4),
        currentPrice: toPrecision(currentPrice, 4),
        date: moment(date).format('YYYY-MM-DD'),
        total: getTotal(quantity, price)
      };

      if (!assetId) {
        onAddAsset({ id: uuidv1(), ...submitValues });
      } else {
        onUpdateAsset({ id: assetId, ...submitValues });
      }

      this.handleClose();
    } else {
      FIELDS_NAMES.forEach(({ name }) => {
        if (!_.has(values, name)) {
          throw new SubmissionError({
            [name]: 'This field is required',
            _error: 'Please fill in blank fields'
          });
        }
      });
    }
  };

  renderFields = () => {
    const { quantity, price, total } = this.props;
    const totalSum = total || getTotal(quantity, price);

    return FORM_FIELDS.map((field) => {
      const { name } = field;

      const isTotalField = name === 'total';
      const totalValue = (isTotalField && totalSum.toFixed(4)) || undefined;

      return (
        <Field
          key={name}
          {...field}
          customValue={totalValue}
          disabled={isTotalField}
          component={FormInput}
        />
      );
    });
  };

  renderButtons = () => (
    <div className="buttons">
      <button
        type="button"
        className="form_button"
        onClick={this.handleClose}
      >
        Close
      </button>
      <button
        type="submit"
        className="form_button"
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
            {error && <strong className="error">{error}</strong>}
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
