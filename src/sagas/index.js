import { all } from 'redux-saga/es/effects';

import { watchAppLoad } from './app';

export default function* () {
  yield all([
    watchAppLoad()
  ]);
}
