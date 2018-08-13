import React, { Component } from 'react';

import { AssetItemContainer } from '../../containers';

import { FIELDS_NAMES } from '../../constants';

import '../../styles/buttons.scss';
import '../../styles/table.scss';

const Header = FIELDS_NAMES.map(field => (
  <div
    key={field.name}
    className="table_header"
  >
    {field.displayName}
  </div>
));

export class Portfolio extends Component {
  handleClick = () => {
    this.props.actions.openModal(null);
  };

  render() {
    const { assets } = this.props;

    return (
      <div className="content">
        <button
          className="button button_bold button_orange"
          onClick={this.handleClick}
        >
          Add asset
        </button>
        {assets.length ? (
          <div className="table">
            <div className="table_heading">
              {Header}
            </div>
            {assets.map(values => (
              <AssetItemContainer
                key={values.id}
                assetId={values.id}
                assetValues={values}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
