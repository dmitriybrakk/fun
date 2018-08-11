import React, { Component } from 'react';

export class AssetItem extends Component {
  handleOpenForm = () => {
    this.props.onOpenForm(this.props.assetId);
  };

  handleRemoveAsset = () => {
    this.props.onRemoveAsset(this.props.assetId);
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
        <button onClick={this.handleOpenForm}>
          Edit
        </button>
        <button onClick={this.handleRemoveAsset}>
          Remove
        </button>
      </div>
    );
  }
}
