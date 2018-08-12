import React from 'react';

import { MoonLoader } from 'react-spinners';

import './styles.scss';

export const StockTable = ({ isLoading }) => {
  if (isLoading) {
    return (
      <div className="spinner">
        <MoonLoader
          sizeUnit="px"
          size={60}
          color="#ff5722"
        />
      </div>
    );
  }

  return <div>Loaded!</div>
};
