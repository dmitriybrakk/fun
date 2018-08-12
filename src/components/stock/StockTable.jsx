import React from 'react';
import { MoonLoader } from 'react-spinners';

import { ENTRIES } from '../../constants/stockTable';

import '../../styles/table.scss';
import './styles.scss';

export const StockTable = ({ isLoading, stockTableData }) => (
  <div className="stock-table">
    {isLoading ? (
      <React.Fragment>
        <MoonLoader
          sizeUnit="px"
          size={60}
          color="#ff5722"
        />
        <div className="spinner-text">Loading stock data</div>
      </React.Fragment>
        ) : (
          <div className="table table_padded">
            {Object.values(stockTableData).map(dataRecord => (
              <div className="table_row" key={dataRecord.date}>
                {ENTRIES.map(entry => (
                  <div key={entry.name} className="table_cell">{dataRecord[entry.name]}</div>
                ))}
              </div>
            ))}
          </div>
        )}
  </div>
);
