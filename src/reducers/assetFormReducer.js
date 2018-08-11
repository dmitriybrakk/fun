import { reducer as formReducer } from 'redux-form';

import * as types from '../constants/action-types/form';
import * as assetTypes from '../constants/action-types/assets';

export default formReducer.plugin({
  asset: (state, action) => {
    switch (action.type) {
      case assetTypes.EDIT_ASSET:
        return {
          ...state,
          isFormOpen: true,
          id: action.payload
        };

      case types.SET_INITIAL_VALUES:
        return {
          ...state,
          values: action.payload,
          initial: action.payload,
          isInitialized: true
        };

      case types.CLOSE_FORM:
        return {
          ...state,
          isFormOpen: false,
          id: null
        };

      default:
        return state;
    }
  }
});
