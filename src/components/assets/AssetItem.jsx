import React, { Component } from 'react';

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
    const { id, total, ...displayValues } = this.props.assetValues;

    return (
      <div className="asset">
        <button
          className="table_row"
          onClick={this.handleEditAsset}
        >
          {Object.entries(displayValues).map(([key, value]) => (
            <div key={key} className="table_cell">
              {value}
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
