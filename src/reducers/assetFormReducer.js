import { reducer as formReducer } from 'redux-form';

import * as types from '../constants/action-types/form';

export default formReducer.plugin({
  asset: (state, action) => {
    switch (action.type) {
      case types.OPEN_FORM:
        return {
          ...state,
          isFormOpen: true,
          assetToEdit: action.payload
        };

      case types.CLOSE_FORM:
        return {
          ...state,
          isFormOpen: false,
          assetToEdit: null
        };

      default:
        return state;
    }
  }
});
