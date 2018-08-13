import React from 'react';

import { ENTRIES } from '../../constants/indexData';

import '../../styles/table.scss';

export const TableItem = ({ dataRecord }) => (
  <div className="table_row">
    {ENTRIES.map(entry => (
      <div
        key={entry.name}
        className="table_cell"
      >
        {dataRecord[entry.name]}
      </div>
    ))}
  </div>
);
