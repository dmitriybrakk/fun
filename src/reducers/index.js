import { combineReducers } from 'redux';

import assets from './assetsReducer';
import form from './assetFormReducer';

export default combineReducers({
  assets,
  form
});
