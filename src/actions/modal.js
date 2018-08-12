import * as types from '../constants/action-types/modal';

export function openModal(id) {
  return {
    type: types.OPEN_MODAL,
    payload: {
      id
    }
  };
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  };
}
