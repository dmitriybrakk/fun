import React, { Component } from 'react';
import { MoonLoader } from 'react-spinners';

import { ENTRIES } from '../../constants/indexData';

import { InfoBlockContainer } from '../../containers';

import { TypeSelector } from './';

import '../../styles/table.scss';
import './styles.scss';

export class IndexTable extends Component {
  handleChangeType = (e) => {
    this.props.actions.switchIndexType(e.target.value);
  };

  render() {
    const {
      isLoading,
      indexTableData,
      indexType
    } = this.props;

    if (isLoading) {
      return (
        <div className="spinner">
          <MoonLoader
            sizeUnit="px"
            size={60}
            color="#ff5722"
          />
          <div className="spinner-text">Loading index data</div>
        </div>
      );
    }

    return (
      <div className="table">
        {Object.values(indexTableData).map(dataRecord => (
          <div className="table_row" key={dataRecord.date}>
            {ENTRIES.map(entry => (
              <div
                key={entry.name}
                className="table_cell"
              >
                {dataRecord[entry.name]}
              </div>
            ))}
          </div>
        ))}
        <InfoBlockContainer />
        <TypeSelector
          value={indexType}
          onChange={this.handleChangeType}
        />
      </div>
    );
  }
}
