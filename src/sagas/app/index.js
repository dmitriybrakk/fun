import {
  takeLatest,
  select,
  call,
  put
} from 'redux-saga/effects';

import { APP_LOADED } from '../../constants/action-types/app';

import { fetchIndexData } from '../api/indexData';
import { loadIndexData, loadIndexDataFailure, loadIndexDataSuccess } from '../../actions/indexData';
import { INDEX_TYPES } from '../../constants/indexData';

export function* watchAppLoad() {
  yield takeLatest(APP_LOADED, handleLoadIndexData);
}

function* handleLoadIndexData() {
  const currentIndexData = yield select(state => state.indexData);
  const { currentType, data } = currentIndexData;

  if (!data || !data[INDEX_TYPES[currentType]]) {
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
