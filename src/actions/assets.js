import * as types from '../constants/action-types/assets';

export function addAsset(asset) {
  return {
    type: types.ADD_ASSET,
    payload: {
      asset
    }
  };
}

export function updateAsset(asset) {
  return {
    type: types.UPDATE_ASSET,
    payload: {
      asset
    }
  };
}

export function removeAsset(id) {
  return {
    type: types.REMOVE_ASSET,
    payload: id
  };
}
