import * as types from '../constants/action-types/stock';

const initialState = {
  isLoading: false,
  lastLoadDate: null,
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STOCK:
      return {
        ...state,
        isLoading: true
      };

    case types.LOAD_STOCK_SUCCESS:
      return {
        isLoading: false,
        lastLoadDate: action.payload.loadDate,
        data: action.payload.stock
      };

    case types.LOAD_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
};
