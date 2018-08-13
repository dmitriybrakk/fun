import { all } from 'redux-saga/es/effects';

import { watchAppLoad, watchIndexTypeChange } from './app';

export default function* () {
  yield all([
    watchAppLoad(),
    watchIndexTypeChange()
  ]);
}
