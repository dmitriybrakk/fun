import React, { Component } from 'react';

import { AssetItemContainer } from '../../containers';

import './styles.scss';

export class Portfolio extends Component {
  handleClick = () => {
    this.props.actions.openModal(null);
  };

  render() {
    return (
      <div>
        <button
          className="button"
          onClick={this.handleClick}
        >
          Add asset
        </button>
        {Object.entries(this.props.assets).map(([id, values]) => (
          <AssetItemContainer
            key={id}
            assetId={id}
            assetValues={values}
          />
        ))}
      </div>
    );
  }
}
