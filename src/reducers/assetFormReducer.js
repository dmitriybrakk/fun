import * as types from '../constants/action-types/form';

const initialState = {
  isFormOpen: false,
  assetToEdit: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.OPEN_FORM:
      return {
        isFormOpen: true,
        assetToEdit: action.payload
      };

    case types.CLOSE_FORM:
      return initialState;

    default:
      return state;
  }
};
