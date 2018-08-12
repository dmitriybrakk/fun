import * as types from '../constants/action-types/stock';

export function loadStock() {
  return {
    type: types.LOAD_STOCK
  };
}

export function loadStockSuccess(loadDate, stock) {
  return {
    type: types.LOAD_STOCK_SUCCESS,
    payload: {
      loadDate,
      stock
    }
  };
}

export function loadStockFailure() {
  return {
    type: types.LOAD_STOCK_FAILURE
  };
}
