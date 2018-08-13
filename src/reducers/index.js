import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import assets from './assetsReducer';
import modal from './modalReducer';
import indexData from './indexDataReducer';

export default combineReducers({
  assets,
  form: formReducer,
  modal,
  indexData
});
