import * as types from '../constants/action-types/assets';

export function addAsset(id, values) {
  return {
    type: types.ADD_ASSET,
    payload: {
      id,
      values
    }
  };
}

export function editAsset(id) {
  return {
    type: types.EDIT_ASSET,
    payload: id
  };
}

export function removeAsset(id) {
  return {
    type: types.REMOVE_ASSET,
    payload: id
  };
}

export function updateAsset(id, values) {
  return {
    type: types.ADD_ASSET,
    payload: {
      id,
      values
    }
  };
}
