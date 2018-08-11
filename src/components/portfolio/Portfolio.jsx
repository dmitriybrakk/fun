import React, { Component } from 'react';
import { SubmissionError } from 'redux-form';

import { AssetFormContainer } from '../../containers';

import { AssetItem } from '../../components/assets';

import { FORM_FIELDS } from '../../constants';

const uuidv1 = require('uuid/v1');

export class Portfolio extends Component {
  handleOpenForm = (assetId) => {
    const { actions } = this.props;

    actions.openForm(assetId);
  };

  handleSubmit = (values) => {
    const { actions, assetToEdit } = this.props;

    if (FORM_FIELDS.every(field => Object.hasOwnProperty.call(values, field))) {
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

      actions.closeForm();
    } else {
      FORM_FIELDS.forEach((field) => {
        if (!values[field]) {
          throw new SubmissionError({
            [field]: 'This field is required',
            _error: 'Please fill in blank fields'
          });
        }
      });
    }
  };

  render() {
    const assets = Object.entries(this.props.assets);

    return (
      <div>
        <button onClick={() => this.handleOpenForm(null)}>Add asset</button>
        {assets.map(([id, values]) => (
          <AssetItem
            key={id}
            assetId={id}
            assetValues={values}
            onOpenForm={this.handleOpenForm}
            onRemoveAsset={this.props.actions.removeAsset}
          />
        ))}
        <AssetFormContainer onSubmit={this.handleSubmit} />
      </div>
    );
  }
}
