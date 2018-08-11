import * as types from '../constants/action-types/form';

export function openForm(assetId) {
  return {
    type: types.OPEN_FORM,
    payload: assetId
  };
}

export function closeForm() {
  return {
    type: types.CLOSE_FORM,
  };
}
