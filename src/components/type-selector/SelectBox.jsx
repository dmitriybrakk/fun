import React, { Component } from 'react';

import { SELECTOR_TYPES } from '../../constants/indexData';

export class SelectBox extends Component {
  handleSelect = (e) => {
    this.props.actions.switchIndexType(e.target.value);
  };

  render() {
    return (
      <select
        onChange={this.handleSelect}
        value={this.props.indexType}
        style={{ padding: '10px' }}
      >
        {SELECTOR_TYPES.map(type => (
          <option
            key={type.name}
            value={type.value}
          >
            {type.displayValue}
          </option>
        ))}
      </select>
    );
  }
}
