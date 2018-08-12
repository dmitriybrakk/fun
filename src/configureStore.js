import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares = [sagaMiddleware, createLogger()];
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedMiddleware = composeEnhancers(applyMiddleware(...middlewares));

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['assets', 'stock']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composedMiddleware
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
