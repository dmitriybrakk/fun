import React from 'react';
import { MoonLoader } from 'react-spinners';

import { ENTRIES } from '../../constants/stockTable';

import { InfoSection } from './';

import '../../styles/table.scss';
import './styles.scss';

export const IndexTable = ({ isLoading, indexTableData }) => {
  if (isLoading) {
    return (
      <div className="spinner">
        <MoonLoader
          sizeUnit="px"
          size={60}
          color="#ff5722"
        />
        <div className="spinner-text">Loading stock data</div>
      </div>
    );
  }

  return (
    <div className="table">
      {Object.values(indexTableData).map(dataRecord => (
        <div className="table_row" key={dataRecord.date}>
          {ENTRIES.map(entry => (
            <div key={entry.name} className="table_cell">{dataRecord[entry.name]}</div>
          ))}
        </div>
      ))}
      <InfoSection />
    </div>
  );
};
