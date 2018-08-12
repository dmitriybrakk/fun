import React, { Component } from 'react';

export class AssetItem extends Component {
  handleEditAsset = () => {
    this.props.actions.openModal(this.props.assetId);
  };

  handleRemoveAsset = () => {
    this.props.actions.removeAsset(this.props.assetId);
  };

  render() {
    const {
      assetValues
    } = this.props;

    return (
      <div>
        <div>
          {assetValues.name}
        </div>
        <button onClick={this.handleEditAsset}>
          Edit
        </button>
        <button onClick={this.handleRemoveAsset}>
          Remove
        </button>
      </div>
    );
  }
}
