import {
  takeLatest,
  select,
  call,
  put,
  take,
  cancel,
  fork
} from 'redux-saga/effects';
import _ from 'lodash';
import moment from 'moment';

import { APP_LOADED } from '../../constants/action-types/app';
import { SWITCH_INDEX_TYPE } from '../../constants/action-types/indexData';

import { fetchIndexData } from '../api/indexData';
import { loadIndexData, loadIndexDataFailure, loadIndexDataSuccess } from '../../actions/indexData';
import { INDEX_TYPES } from '../../constants/indexData';

export function* watchAppLoad() {
  yield takeLatest(APP_LOADED, handleLoadIndexData);
}

export function* watchIndexTypeChange() {
  let task;
  while (true) {
    yield take(SWITCH_INDEX_TYPE);
    if (task) {
      yield cancel(task);
    }
    task = yield fork(handleLoadIndexData);
  }
}

function* handleLoadIndexData() {
  const currentIndexData = yield select(state => state.indexData);
  const { currentType, data } = currentIndexData;

  if (!_.get(data, INDEX_TYPES[currentType])) {
    yield put(loadIndexData());

    const indexData = yield call(fetchIndexData, currentType);

    if (indexData) {
      const values = indexData['Time Series (Daily)'];
      const lastUpdate = values[Object.keys(values)[0]];

      yield put(loadIndexDataSuccess(
        values,
        moment(lastUpdate).format('YYYY-MM-DD')
      ));
    } else {
      yield put(loadIndexDataFailure());
    }
  }
}
