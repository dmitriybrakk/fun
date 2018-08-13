import {
  takeLatest,
  select,
  call,
  put
} from 'redux-saga/effects';
import _ from 'lodash';

import { APP_LOADED } from '../../constants/action-types/app';
import { SWITCH_INDEX_TYPE } from '../../constants/action-types/indexData';

import { fetchIndexData } from '../api/indexData';
import { loadIndexData, loadIndexDataFailure, loadIndexDataSuccess } from '../../actions/indexData';
import { INDEX_TYPES } from '../../constants/indexData';

export function* watchAppLoad() {
  yield takeLatest([APP_LOADED, SWITCH_INDEX_TYPE], handleLoadIndexData);
}

function* handleLoadIndexData() {
  const currentIndexData = yield select(state => state.indexData);
  const { currentType, data } = currentIndexData;

  if (!_.get(data, INDEX_TYPES[currentType])) {
    yield put(loadIndexData());

    const indexData = yield call(fetchIndexData, currentType);

    if (indexData) {
      yield put(loadIndexDataSuccess(
        indexData['Time Series (Daily)'],
        indexData['Meta Data']['3. Last Refreshed']
      ));
    } else {
      yield put(loadIndexDataFailure());
    }
  }
}
