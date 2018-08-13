import React from 'react';
import { MoonLoader } from 'react-spinners';

import './styles.scss';

export const Spinner = () => (
  <div className="spinner">
    <MoonLoader
      sizeUnit="px"
      size={60}
      color="#ff5722"
    />
    <div className="spinner-text">Loading index data</div>
  </div>
);
