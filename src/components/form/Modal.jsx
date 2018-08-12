import React, { Component } from 'react';

import { ModalPortal, AssetForm } from './';

import './styles.scss';

export class Modal extends Component {
  handleClose = () => {
    this.props.actions.closeModal();
  };

  handleAddAsset = (id, data) => {
    this.props.actions.addAsset(id, data);
  };

  handleUpdateAsset = (id, data) => {
    this.props.actions.updateAsset(id, data);
  };

  render() {
    const {
      modal,
      values
    } = this.props;

    if (!modal) return null;

    return (
      <ModalPortal>
        <AssetForm
          assetId={modal.assetId}
          initialValues={values}
          onClose={this.handleClose}
          onAddAsset={this.handleAddAsset}
          onUpdateAsset={this.handleUpdateAsset}
        />
      </ModalPortal>
    );
  }
}
