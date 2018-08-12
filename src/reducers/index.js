import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import assets from './assetsReducer';
import modal from './modalReducer';

export default combineReducers({
  assets,
  form: formReducer,
  modal
});
