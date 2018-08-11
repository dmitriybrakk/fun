import * as types from '../constants/action-types/form';

export function closeForm() {
  return {
    type: types.CLOSE_FORM,
  };
}

export function setInitialValues(initialValues) {
  return {
    type: types.SET_INITIAL_VALUES,
    payload: initialValues
  };
}
