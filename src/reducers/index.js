import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import assets from './assetsReducer';
import modal from './modalReducer';
import stock from './stockReducer';

export default combineReducers({
  assets,
  form: formReducer,
  modal,
  stock
});
