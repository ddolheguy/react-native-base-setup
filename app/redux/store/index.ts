import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../rootReducer';
import { registerSagas } from '../rootSaga';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  if (__DEV__) {
    // @ts-ignore
    middleware.push(createLogger({}));
  }

  const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...middleware)),
  );

  // @ts-ignore
  const persistor = persistStore(store);

  registerSagas(sagaMiddleware);

  return { persistor, store };
};
