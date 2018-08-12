import * as types from '../constants/action-types/assets';

const initialState = {};

const updateAssets = (state, asset) => {
  const updatedState = Object.assign({}, state, {
    [asset.id]: asset
  });

  return Object.entries(updatedState).reduce((collection, [, collectionItem]) => {
    if (asset.name === collectionItem.name && asset.date === collectionItem.date) {
      return {
        ...collection,
        [collectionItem.id]: {
          ...collectionItem,
          currentPrice: asset.currentPrice
        }
      };
    }

    return collection;
  }, updatedState);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ASSET:
    case types.UPDATE_ASSET: {
      return updateAssets(state, action.payload.asset);
    }

    case types.REMOVE_ASSET: {
      const { [action.payload]: omit, ...rest } = state;

      return rest;
    }

    default:
      return state;
  }
};
