import * as types from '../constants/action-types/indexData';

const initialState = {
  isLoading: false,
  currentType: 'QQQ',
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_INDEX_DATA:
      return {
        ...state,
        isLoading: true
      };

    case types.LOAD_INDEX_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: {
          ...state.data,
          [state.currentType]: {
            indexValues: action.payload.indexData,
            lastUpdate: action.payload.lastUpdate
          }
        }
      };

    case types.LOAD_INDEX_DATA_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
