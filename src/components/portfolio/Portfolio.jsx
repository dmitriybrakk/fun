import React, { Component } from 'react';

import { AssetItemContainer } from '../../containers';

import '../../styles/buttons.scss';
import '../../styles/table.scss';
import './styles.scss';

export class Portfolio extends Component {
  handleClick = () => {
    this.props.actions.openModal(null);
  };

  render() {
    return (
      <div className="content">
        <button
          className="button button_bold button_orange"
          onClick={this.handleClick}
        >
          Add asset
        </button>
        <div className="table">
          {this.props.assets.map(values => (
            <AssetItemContainer
              key={values.id}
              assetId={values.id}
              assetValues={values}
            />
          ))}
        </div>
      </div>
    );
  }
}
