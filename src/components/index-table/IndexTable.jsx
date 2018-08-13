import React from 'react';

import { ENTRIES } from '../../constants/indexData';

import { Spinner, TableItem } from './';

import '../../styles/table.scss';
import './styles.scss';

const Header = ENTRIES.map(entry => (
  <div
    key={entry.name}
    className="table_header"
  >
    {entry.displayName}
  </div>
));

export const IndexTable = ({
  isLoading,
  indexTableData
}) => {
  if (isLoading) {
    return (
      <Spinner />
    );
  }

  const indexValues = Object.values(indexTableData);

  if (!indexValues.length) {
    return null;
  }

  return (
    <div className="content">
      <div className="table">
        <div className="table_heading">
          {Header}
        </div>
        {indexValues.map(dataRecord => (
          <TableItem
            key={dataRecord.date}
            dataRecord={dataRecord}
          />
        ))}
      </div>
    </div>
  );
};
