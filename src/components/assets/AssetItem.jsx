import React, { Component } from 'react';

import { FIELDS_NAMES } from '../../constants';

import '../../styles/buttons.scss';
import '../../styles/table.scss';
import './styles.scss';

export class AssetItem extends Component {
  handleEditAsset = () => {
    this.props.actions.openModal(this.props.assetId);
  };

  handleRemoveAsset = (e) => {
    e.stopPropagation();
    this.props.actions.removeAsset(this.props.assetId);
  };

  render() {
    const { assetValues } = this.props;

    return (
      <div className="asset">
        <button
          className="table_row"
          onClick={this.handleEditAsset}
        >
          {FIELDS_NAMES.map(field => (
            <div key={field} className="table_cell">
              {assetValues[field]}
            </div>
          ))}
        </button>
        <button
          className="button button_orange"
          onClick={this.handleRemoveAsset}
        >
          Delete
        </button>
      </div>
    );
  }
}
