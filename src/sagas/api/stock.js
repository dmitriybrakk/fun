import { call } from 'redux-saga/effects';

import { API_KEY } from '../../constants';

const tryGetJson = async resp => new Promise((resolve) => {
  if (resp) {
    resp.json().then(json => resolve(json)).catch(() => resolve(null));
  } else {
    resolve(null);
  }
});

export function* apiCall({ URL, method = 'GET' }) {
  try {
    const headers = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    };

    const response = yield call(fetch, URL, headers);

    if (response.status >= 200 && response.status < 300) {
      return yield tryGetJson(response);
    }

    console.warn(`Bad response: ${response.status}`);
  } catch (e) {
    console.error(e);
  }

  return null;
}

export function* getStock() {
  return yield apiCall({
    URL: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=QQQ&outputsize=full&apikey=${API_KEY}`
  });
}
