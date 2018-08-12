import { createSelector } from 'reselect';

export const getAssets = createSelector(
  [
    state => state.assets
  ],
  assets => Object.values(assets)
);
