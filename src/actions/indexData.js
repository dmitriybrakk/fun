import * as types from '../constants/action-types/indexData';

export function loadIndexData() {
  return {
    type: types.LOAD_INDEX_DATA
  };
}

export function loadIndexDataSuccess(indexData, lastUpdate) {
  return {
    type: types.LOAD_INDEX_DATA_SUCCESS,
    payload: {
      indexData,
      lastUpdate
    }
  };
}

export function loadIndexDataFailure() {
  return {
    type: types.LOAD_INDEX_DATA_FAILURE
  };
}

export function switchIndexType(type) {
  return {
    type: types.SWITCH_INDEX_TYPE,
    payload: {
      type
    }
  };
}
