import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import assets from './assetsReducer';
import assetForm from './assetFormReducer';

export default combineReducers({
  assets,
  assetForm,
  form: formReducer
});
