import * as types from '../constants/action-types/assets';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ASSET:
    case types.UPDATE_ASSET:
      return {
        ...state,
        [action.payload.id]: action.payload.values
      };

    case types.REMOVE_ASSET: {
      const { [action.payload]: omit, ...rest } = state;

      return rest;
    }

    default:
      return state;
  }
};
