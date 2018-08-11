import React from 'react';

import { AssetItemContainer, AssetFormContainer } from '../../containers';

export const Portfolio = ({ actions, assets }) => (
  <div>
    <button onClick={() => actions.openForm(null)}>Add asset</button>
    {Object.entries(assets).map(([id, values]) => (
      <AssetItemContainer
        key={id}
        assetId={id}
        assetValues={values}
      />
    ))}
    <AssetFormContainer />
  </div>
);
