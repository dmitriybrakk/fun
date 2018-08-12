import {
  takeLatest,
  select,
  call,
  put
} from 'redux-saga/effects';

import { APP_LOADED } from '../../constants/action-types/app';

import { getStock } from '../api/stock';
import { loadStock, loadStockFailure, loadStockSuccess } from '../../actions/stock';

export function* watchAppLoad() {
  yield takeLatest(APP_LOADED, handleLoadStock);
}

function* handleLoadStock() {
  const lastLoadDate = yield select(state => state.stock.lastLoadDate);
  const currentStock = yield select(state => state.stock.data);
  const date = new Date();
  const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

  if (!lastLoadDate || today !== lastLoadDate || !Object.keys(currentStock).length) {
    yield put(loadStock());

    const stock = yield call(getStock);

    if (stock) {
      yield put(loadStockSuccess(today, stock['Time Series (Daily)']));
    } else {
      yield put(loadStockFailure());
    }
  }
}
