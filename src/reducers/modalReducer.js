import * as types from '../constants/action-types/modal';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return {
        assetId: action.payload.id
      };
    case types.CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};
