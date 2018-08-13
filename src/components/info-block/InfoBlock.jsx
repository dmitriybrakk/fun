import React from 'react';

import { INFO_SECTION_VALUES } from '../../constants/indexData';

import './styles.scss';

export const InfoBlock = values => (
  <div className="info-section">
    {INFO_SECTION_VALUES.map(({ property, displayName, unit }) => (
      <div
        key={property}
        className="info-section_value"
      >
        {displayName}: {values[property]}{unit}
      </div>
    ))}
  </div>
);
