import React, { Component } from 'react';

import { ModalPortal, AssetForm } from './';

import './styles.scss';

export class Modal extends Component {
  handleClose = () => {
    this.props.actions.closeModal();
  };

  handleAddAsset = (data) => {
    this.props.actions.addAsset(data);
  };

  handleUpdateAsset = (data) => {
    this.props.actions.updateAsset(data);
  };

  render() {
    const {
      modal,
      initialValues,
      quantity,
      price
    } = this.props;

    if (!modal) return null;

    return (
      <ModalPortal>
        <AssetForm
          assetId={modal.assetId}
          initialValues={initialValues}
          onClose={this.handleClose}
          onAddAsset={this.handleAddAsset}
          onUpdateAsset={this.handleUpdateAsset}
          quantity={quantity}
          price={price}
        />
      </ModalPortal>
    );
  }
}
